import styled from "styled-components";

export const HeroTitle = styled.h1`
  font-size: 56px;
  font-weight: 700;
`;
export const HeroName = styled.h2`
  font-size: 42px;
  font-weight: 700;
  text-decoration: underline solid #ff4500 5px;
`;
export const HeroText = styled.p`
  font-size: 24px;
  font-weight: 400;
`;
export const TextAccent = styled.span`
  color: #ff4500;
`;
export const Wrapper = styled.div`
  width: 40%;
  padding-top: 200px;
  padding-bottom: 200x;
  display: grid;
  gap: 32px;
  z-index: 10;
`;

export const BgImg = styled.div`
  background-image: radial-gradient(
      ellipse closest-side,
      rgba(23, 38, 43, 0.4),
      rgba(23, 38, 43)
    ),
    url("network-gf54a84853_1920.jpg");
  height: 86vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeroLinks = styled.a`
  text-decoration: underline solid #ff4500;
  transition: all, 0.25s ease-in-out;

  :hover {
    color: rgba(0, 255, 255, 0.7);
  }
`;
