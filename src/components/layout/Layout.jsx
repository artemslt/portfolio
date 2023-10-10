import { Devider } from "@/styles/globalComponents";
import { Section } from "@/styles/globalComponents/Section";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import { Container } from "./Layout.styled";

export default function Layout({ children }) {
  return (
    <Container>
      <header>
        <Section>
          <Navigation />
        </Section>
        <Devider />
      </header>
      <main>{children}</main>
      <footer>
        <Devider />
        <Section>
          <Footer />
        </Section>
      </footer>
    </Container>
  );
}
