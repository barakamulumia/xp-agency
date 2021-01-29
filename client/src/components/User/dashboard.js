import React, { Fragment } from "react";
import { Button } from "../../Resources/Styles/global";
import { Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../Features/UserSlice";

const Dashboard = ({ logoutCallback }) => {
  const user = useSelector(selectCurrentUser);

  const history = useHistory();
  console.log(user);

  const logout = () => {
    logoutCallback();
    history.push("/");
  };

  return (
    <Fragment>
      {user.accesstoken ? (
        <div>
          <h1>This is a users dashboard</h1>
          <Button fontbig onClick={logout}>
            Logout
          </Button>
        </div>
      ) : (
        <Redirect exact from="" to={`/client/sign-in`} />
      )}
    </Fragment>
  );
};

export default Dashboard;
