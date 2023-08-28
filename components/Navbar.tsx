import { NavLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthProviders from "./AuthProviders";

type Props = {};

const Navbar = (props: Props) => {
  const session = null
  return (
    <nav className="flexBetween navbar">
      <div className="flex flexStart gap-10">
        <Link href={"/"}>
          <Image src={"/logo.svg"} width={115} height={43} alt="fleximg" />
        </Link>
        <ul className="xl:flex hidden text-sm gap-7">
          {NavLinks.map((ele) => (
            <Link key={ele.key} href={ele.href}>
              {ele.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexBetween gap-4">
        {session ? (
          <>
            UserPhoto <Link href={"/create-projects"}>Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>{" "}
    </nav>
  );
};

export default Navbar;
