import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const OrderContainer = styled(Paper)`
  display: "flex";
  flex-direction: "column";
  margin: 5px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #d6d6d6;
  }
`;

export const OrderCardHeader = styled.p`
  font-weight: 500;
  font-size: 1.3rem;
`;

export const OrderDestination = styled.p`
  font-style: italic;
  font-weight: 300;
`;
