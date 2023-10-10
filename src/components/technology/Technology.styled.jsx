import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding-top: 64px;
  padding-bottom: 64px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 180px);
  gap: 32px;
`;

export const Card = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;

  border: 1px solid #661b00;
  border-radius: 16px;
  background-color: #121e22;
  box-shadow: 0px 0px 10px 10px rgba(102, 27, 0, 0.7);

  cursor: pointer;
  transition: all, 0.25s ease-in-out;

  :hover {
    box-shadow: 0px 0px 10px 10px rgba(0, 255, 255, 0.7);
  }
`;
