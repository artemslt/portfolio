import { SectionTitle } from "@/styles/globalComponents";
import Image from "next/image";
import { Card, List, Wrapper } from "./Technology.styled";

export default function Technology() {
  return (
    <Wrapper>
      <SectionTitle>Technologies</SectionTitle>
      <List>
        <Card>
          <Image
            src="/javascript-1.svg"
            height={32}
            width={32}
            alt="JavaScript"
          />
          <p>JavaScript</p>
        </Card>
        <Card>
          <Image
            src="/typescript-2.svg"
            height={32}
            width={32}
            alt="TypeScript"
          />
          <p>TypeScript</p>
        </Card>
        <Card>
          <Image src="/nodejs-icon.svg" height={32} width={32} alt="NodeJS" />
          <p>Node</p>
        </Card>
        <Card>
          <Image src="/react-2.svg" height={32} width={32} alt="React" />
          <p>React</p>
        </Card>
        <Card>
          {/* <Image src="/express-109.svg" height={32} width={32} alt="React" /> */}
          <p>Express</p>
        </Card>
        <Card>
          <Image src="/vue-js-1.svg" height={32} width={32} alt="VueJS" />
          <p>Vue</p>
        </Card>
        <Card>
          <Image
            src="/react-native-1.svg"
            height={32}
            width={32}
            alt="React native"
          />
          <p>React Native</p>
        </Card>
        <Card>
          <Image
            src="/mongodb-icon-1.svg"
            height={32}
            width={32}
            alt="Mongo db"
          />
          <p>MongoDB</p>
        </Card>
      </List>
    </Wrapper>
  );
}
