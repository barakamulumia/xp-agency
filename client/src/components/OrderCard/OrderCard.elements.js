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
  line-height: 1.2;
  font-weight: 499;
  font-size: 1.7rem;
  letter-spacing: 4px;
`;

export const OrderDestination = styled.p`
  font-style: italic;
  font-weight: 300;
`;
