import styled from "styled-components";
import { DialogContent, DialogTitle } from "@material-ui/core";

export const DialogContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f7bfbf;
`;

export const DialogBoxTitle = styled(DialogTitle)`
  text-align: center;
  font-size: 2rem;
  text-transform: capitalize;
`;

export const DialogContentItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DialogContentBox = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DialogMedia = styled.img`
  width: 90%;
  height: 100px;
  border: 1px solid #fff;
  border-radius: 5px;

  @media screen and (max-width: 480px) {
    height: 100px;
  }
`;
