import { Devider } from "@/styles/globalComponents";
import { Section } from "@/styles/globalComponents/Section";
import {
  HeroTitle,
  HeroName,
  HeroText,
  Wrapper,
  TextAccent,
  BgImg,
  HeroLinks,
} from "./Hero.styled";

export default function Hero() {
  return (
    <BgImg>
      <Section>
        <Wrapper>
          <HeroTitle>WELCOME</HeroTitle>
          <HeroName>My name Artem Slatin.</HeroName>
          <HeroText>
            I am a <TextAccent>Full Stack developer</TextAccent>. I like to
            build solid and scalable products with great
            <TextAccent> user experiences</TextAccent> and great
            <TextAccent> functionality</TextAccent>.
          </HeroText>
          <HeroText>
            I am always ready for new projects and challenges.
          </HeroText>
          <HeroText>
            You can <HeroLinks href="#contacts"> contact me </HeroLinks>
            or discover <HeroLinks href="#projects"> my works.</HeroLinks>
          </HeroText>
        </Wrapper>
      </Section>
    </BgImg>
  );
}
