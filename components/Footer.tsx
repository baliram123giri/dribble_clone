import { footerLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};
type footerlinks = {
  title: string;
  links: Array<string>;
};
const FooterColumn = ({ links, title }: footerlinks) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <div className="flex gap-2 font-normal flex-col">
      {links.map((ele) => (
        <Link key={ele} href={"/"}>
          {ele}
        </Link>
      ))}
    </div>
  </div>
);
const Footer = (props: Props) => {
  return (
    <footer className="flexStart footer">
      <div
        className="flex flex-col
         gap-12 w-full"
      >
        <div className="flex items-start flex-col">
          <Link href={"/"}>
            <Image
              src={"/logo-purple.svg"}
              width={115}
              height={43}
              alt="fleximg"
            />
          </Link>
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
            reiciendis?
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn
            links={footerLinks[0].links}
            title={footerLinks[0].title}
          />
          <div className="flex flex-col flex-1 gap-4">
            <FooterColumn
              links={footerLinks[1].links}
              title={footerLinks[1].title}
            />
            <FooterColumn
              links={footerLinks[2].links}
              title={footerLinks[2].title}
            />
          </div>
          <FooterColumn
            links={footerLinks[3].links}
            title={footerLinks[3].title}
          />
          <div className="flex flex-col flex-1 gap-4">
            <FooterColumn
              links={footerLinks[4].links}
              title={footerLinks[4].title}
            />
            <FooterColumn
              links={footerLinks[5].links}
              title={footerLinks[5].title}
            />
          </div>
          <FooterColumn
            links={footerLinks[6].links}
            title={footerLinks[6].title}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
