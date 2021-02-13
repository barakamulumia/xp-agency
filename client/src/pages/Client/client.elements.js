import styled from "styled-components";
import { Grid, Paper, Button } from "@material-ui/core";

export const Box = styled(Grid)`
  background: url("https://i.postimg.cc/BvnqxGPg/house-packing.jpg");
  background-size: cover;
  min-height: 100vh;
  background-position: center;
`;

export const OrderCardContainer = styled.div`
  max-width: 600px;
  width: 600px;
  margin-top: 64px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const OrderCardHeader = styled.p`
  font-size: 2.5em;
  font-weight: 500;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 8px;
  width: 100%;
  text-align: center;
`;

export const OrdersNav = styled(Paper)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.7) !important;
`;

export const FilterButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 5px;
`;

export const Notification = styled(Paper)`
  background-color: rgba(0, 0, 0, 0.7) !important;
  width: 100%;
  height: 300px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const Message = styled.p`
  font-size: 2.5em;
  font-weight: 500;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 8px;
  width: 100%;
  text-align: center;
`;
