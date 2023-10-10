import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  display: flex;
  gap: 64px;
  width: 50%;
  margin: 0 auto;
`;

export const StyledImg = styled(Image)`
  border: 1px solid #661b00;
  box-shadow: 15px 15px 0px 5px rgba(255, 69, 0, 0.9);
  opacity: 0.8;
`;
