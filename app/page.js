import Image from "next/image";
import { Inter } from "next/font/google";
import "./page.scss";
import Navbar from "./(components)/Navbar/Navbar";

import image_1 from "./../assets/images/home/top.webp";
import image_2 from "./../assets/images/home/top1.webp";
import image_3 from "./../assets/images/home/top2.webp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Navbar />
      <div className="wrapperTop">
        <div className="news">
          <div className="wrapperDescription">
            {" "}
            <h2>THE NEW i5</h2> <button>Découvrir (Vraie page)</button>
          </div>
          <Image
            src={image_1}
            alt="Photo de voiture"
            className="image_1"
            sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 100vw,
                  100vw"
          />
        </div>
        <div className="news_sub">
          <div className="wrapperDescription">
            {" "}
            <h2> BMW iX1 FINITION xLINE</h2>{" "}
            <button className="button-outline">Découvrir</button>
          </div>{" "}
          <Image
            src={image_2}
            alt="Photo de voiture"
            className="image_2"
            sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 100vw,
                  100vw"
          />
        </div>
        <div className="news_sub">
          <div className="wrapperDescription">
            {" "}
            <h2> BMW NEUVES DISPONIBLES. </h2>{" "}
            <button className="button-outline">Découvrir</button>
          </div>{" "}
          <Image
            src={image_3}
            alt="Photo de voiture"
            className="image_2"
            sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 100vw,
                  100vw"
          />
        </div>
      </div>
    </div>
  );
}
