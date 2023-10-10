import Link from "next/link";
import { NavLink, NavList, Wrapper } from "./Navigation.styled";

export default function Navigation() {
  return (
    <Wrapper>
      <div>LOGO</div>
      <NavList>
        <NavLink>
          <Link href="#about">About</Link>
        </NavLink>
        <NavLink>
          <Link href="#experience">Experience</Link>
        </NavLink>
        <NavLink>
          <Link href="#projects">Projects</Link>
        </NavLink>
        <NavLink>
          <Link href="#contacts">Contacts</Link>
        </NavLink>
        <NavLink>
          <Link href="#eesume">Resume</Link>
        </NavLink>
      </NavList>
    </Wrapper>
  );
}
