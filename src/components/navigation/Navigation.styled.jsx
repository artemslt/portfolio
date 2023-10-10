import styled from "styled-components";

export const NavLink = styled.li`
  font-size: 24px;
  font-weight: 400;
  color: #ff4500;
  transition: all, 0.5s ease-in-out;

  :hover {
    color: rgb(0, 255, 255);
  }
`;

export const NavList = styled.ul`
  padding: 16px 0;
  display: flex;
  gap: 16px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
`;
