import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const OrderDetailsContainer = styled(Paper)`
  margin-top: 64px;
  padding: 8px;
  max-width: 520px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const OrderDetailsHeader = styled.p`
  font-size: 2.5em;
  font-weight: 500;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 8px;
  width: 100%;
  text-align: center;
`;

export const OrderColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

export const OrderItem = styled.p`
  font-weight: 500;
  width: 50%;
  font-size: 1.3rem;
  text-transform: capitalize;
  padding: 4px;
  margin: 4px;
`;

export const OrderValue = styled.p`
  font-size: 1.3rem;
  width: 50%;
  padding: 4px;
  margin: 4px;
  border-bottom: 2px solid #000;
  font-weight: 300;
`;
