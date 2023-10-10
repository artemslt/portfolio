import Link from "next/link";
import { SocialList, Wrapper, Text } from "./Footer.styled";

export default function Footer() {
  return (
    <Wrapper>
      <SocialList>
        <li>
          <Link href="">github</Link>
        </li>
        <li>
          <Link href="">linkedin</Link>
        </li>
        <li>
          <Link href="">facebook</Link>
        </li>
        <li>
          <Link href="">twitter</Link>
        </li>
      </SocialList>
      <Text>Create by me and coffee. 2023</Text>
    </Wrapper>
  );
}
