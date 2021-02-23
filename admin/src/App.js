import { Admin, Resource, ListGuesser, fetchUtils } from "react-admin";
import { stringify } from "querystring";

const apiUrl = "http://localhost:8080/api";
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json.map((resource) => ({
        ...resource,
      })),
      total: parseInt(headers.get("content-range"), 10),
    }));
  },
};

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="clients" list={ListGuesser} />
    <Resource name="drivers" list={ListGuesser} />
  </Admin>
);

export default App;
