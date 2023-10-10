import { SectionTitle, Text } from "@/styles/globalComponents";
import { Section } from "@/styles/globalComponents/Section";
import Image from "next/image";
import Technology from "../technology/Technology";
import { StyledImg, Wrapper } from "./About.styled";

export default function About() {
  return (
    <Section id="about">
      <SectionTitle>About me.</SectionTitle>
      <Wrapper>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          voluptates unde est provident, perferendis blanditiis harum eum
          tempora fuga animi, quisquam reiciendis ab facere? Eius molestiae rem
          quia quod excepturi!
        </Text>
        <StyledImg
          src="/Untitled.png"
          width={260}
          height={300}
          alt="my photo"
        />
      </Wrapper>
      <Technology />
    </Section>
  );
}
