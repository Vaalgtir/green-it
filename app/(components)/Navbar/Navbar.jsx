import Image from "next/image";
import { Inter } from "next/font/google";
import "./Navbar.scss";

import logo from "./../../../assets/logo.svg";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  const links = [
    "Modèles",
    "Achat et Location",
    "Electrique et hybride",
    "Entretien et Service",
    "Notre Marque",
  ];

  return (
    <div className="wrapperNav">
      <div className="wrapperActions">
        <div className="wrapperLinks">
          {links.map((item, key) => (
            <div key={key} className="item">
              {item}
            </div>
          ))}

          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              className="logo"
              sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 100vw,
                  100vw"
            />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
