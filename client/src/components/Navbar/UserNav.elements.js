import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

export const UserLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const DashBoardIcon = styled(MdDashboard)`
  margin-right: 0.5rem;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
