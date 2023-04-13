import { Inter } from "next/font/google";
import Image from "next/image";
import Navbar from "./../(components)/Navbar/Navbar";
import Footer from "../(components)/Footer/Footer";

import image_1 from "./../../assets/images/product/top.webp";

import detail_1 from "./../../assets/images/product/detail-1.webp";
import detail_2 from "./../../assets/images/product/detail-2.webp";
import detail_3 from "./../../assets/images/product/detail-3.webp";
import detail_4 from "./../../assets/images/product/detail-4.webp";
import detail_5 from "./../../assets/images/product/detail-5.webp";
import detail_6 from "./../../assets/images/product/detail-6.webp";

import accessoir_1 from "./../../assets/images/product/accessoir-1.webp";
import accessoir_2 from "./../../assets/images/product/accessoir-2.webp";
import accessoir_3 from "./../../assets/images/product/accessoir-3.webp";

import section_1 from "./../../assets/images/product/section-1.webp";

import caract_1 from "./../../assets/images/product/caract-1.webp";

import "./page.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Product() {
  const innerLinks = [
    { label: "Points forts & technologies", to: "" },
    { label: "Hybride Rechargeable", to: "" },
    { label: "Design du véhicule", to: "" },
    { label: "Offres du moment", to: "" },
    { label: "Caractéristiques techniques", to: "" },
    { label: "Conseils & services", to: "" },
  ];

  return (
    <div className={`wrapperProduct ${inter.className}`}>
      <Navbar />
      <Footer />
      <Image
        src={image_1}
        alt="Photo de voiture"
        className="image_1"
        sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 100vw,
                  100vw"
      />
      <div className="wrapperDescTop">
        <h2>THE NEW i5</h2>
        <div>
          {" "}
          JUSQU&apos;À 93 KM D&apos;AUTONOMIE <br></br>EN 100% ÉLECTRIQUE.{" "}
        </div>
        <button>Configuration & prix</button>
        <button className="button-outline">Demander une offre</button>
      </div>
      {/* 
      <div className="detail_1">
        <h2>
          À 490€/MOIS¹ <br></br>SANS AUCUN APPORT.
        </h2>
        <h3>
          CROSSOVER BMW, <br></br>FINITION M SPORT.
        </h3>
        <div>
          Le crossover BMW Série 2 Active Tourer offre un équipement complet
          incluant entre autres l’écran panoramique tactile BMW Curved Display
          et son système de navigation connecté, le système d’aide au
          stationnement avec caméra de recul de série et un système d’aide à la
          conduite pour une sécurité maximale.
        </div>
        <Image
          src={detail_1}
          alt="Photo de voiture"
          className="image_1"
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 100vw,
                  100vw"
        />
      </div> */}

      <div className="techniques">
        <h2>CARACTÉRISTIQUES TECHNIQUES.</h2>

        <Image
          src={caract_1}
          alt="Photo de voiture"
          className="image"
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 100vw,
                  100vw"
        />
        <div className="wrapperCaract">
          <div>
            <span>Puissance en ch (kW) à t/min :</span>
            <span>136 (100) / 4400-6500</span>
          </div>
          <div>
            <span>Couple max. en Nm à t/min :</span>
            <span>230 / 1500-4000</span>
          </div>
          <div>
            <span>Accélération de 0 à 100 km/h en s :</span>
            <span>9,0</span>
          </div>
        </div>
      </div>

      <div className="detail">
        <div className="wrapperDescription">
          <h2>UN CONCEPT DE COMMANDE INTUITIF DE TOUTE DERNIÈRE GÉNÉRATION.</h2>
          <p>Le crossover BMW Série 2 Active Tourer marque des points&nbsp;:</p>
          <ul>
            <li>
              Grâce au BMW iDrive de toute dernière génération et à une
              multitude de technologies innovantes qui sont tout sauf standard
              dans la catégorie Compacte.
            </li>
            <li>
              Grâce au BMW Curved Display de série et au BMW Intelligent
              Personal Assistant qui garantissent une expérience utilisateur
              intuitive d’un tout nouveau genre.
            </li>
          </ul>
        </div>
        <Image
          src={detail_2}
          alt="Photo de voiture"
          className="image"
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 100vw,
                  100vw"
        />
      </div>
      <div className="detail">
        <Image
          src={detail_3}
          alt="Photo de voiture"
          className="image"
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 100vw,
                  100vw"
        />
        <div className="wrapperDescription">
          <h2>UN CONCEPT DE COMMANDE INTUITIF DE TOUTE DERNIÈRE GÉNÉRATION.</h2>
          <p>Le crossover BMW Série 2 Active Tourer marque des points&nbsp;:</p>
          <ul>
            <li>
              Grâce au BMW iDrive de toute dernière génération et à une
              multitude de technologies innovantes qui sont tout sauf standard
              dans la catégorie Compacte.
            </li>
            <li>
              Grâce au BMW Curved Display de série et au BMW Intelligent
              Personal Assistant qui garantissent une expérience utilisateur
              intuitive d’un tout nouveau genre.
            </li>
          </ul>
        </div>
      </div>
      <div className="detail">
        <div className="wrapperDescription">
          <h2>UN CONCEPT DE COMMANDE INTUITIF DE TOUTE DERNIÈRE GÉNÉRATION.</h2>
          <p>Le crossover BMW Série 2 Active Tourer marque des points&nbsp;:</p>
          <ul>
            <li>
              Grâce au BMW iDrive de toute dernière génération et à une
              multitude de technologies innovantes qui sont tout sauf standard
              dans la catégorie Compacte.
            </li>
            <li>
              Grâce au BMW Curved Display de série et au BMW Intelligent
              Personal Assistant qui garantissent une expérience utilisateur
              intuitive d’un tout nouveau genre.
            </li>
          </ul>
        </div>
        <Image
          src={detail_4}
          alt="Photo de voiture"
          className="image"
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 100vw,
                  100vw"
        />
      </div>

      <div className="section">
        <div className="wrapperDescription">
          <h2> CARACTÉRISTIQUES TECHNIQUES </h2>
          <p>
            Avec la BMW 230e xDrive et la BMW 225e xDrive Active Tourer, vous
            profitez de la mobilité durable et d’une dynamique de conduite
            enthousiasmante allant jusqu’à 240 kW (326 ch)** et 477 Nm** de
            couple (BMW 230e xDrive).
          </p>
        </div>
        <Image
          src={section_1}
          alt="Photo de voiture"
          className="image"
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 100vw,
                  100vw"
        />
      </div>

      <div className="detail">
        <Image
          src={detail_5}
          alt="Photo de voiture"
          className="image"
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 100vw,
                  100vw"
        />
        <div className="wrapperDescription">
          <h2>UN CONCEPT DE COMMANDE INTUITIF DE TOUTE DERNIÈRE GÉNÉRATION.</h2>
          <p>Le crossover BMW Série 2 Active Tourer marque des points&nbsp;:</p>
          <ul>
            <li>
              Grâce au BMW iDrive de toute dernière génération et à une
              multitude de technologies innovantes qui sont tout sauf standard
              dans la catégorie Compacte.
            </li>
            <li>
              Grâce au BMW Curved Display de série et au BMW Intelligent
              Personal Assistant qui garantissent une expérience utilisateur
              intuitive d’un tout nouveau genre.
            </li>
          </ul>
        </div>
      </div>
      <div className="detail">
        <div className="wrapperDescription">
          <h2>UN CONCEPT DE COMMANDE INTUITIF DE TOUTE DERNIÈRE GÉNÉRATION.</h2>
          <p>Le crossover BMW Série 2 Active Tourer marque des points&nbsp;:</p>
          <ul>
            <li>
              Grâce au BMW iDrive de toute dernière génération et à une
              multitude de technologies innovantes qui sont tout sauf standard
              dans la catégorie Compacte.
            </li>
            <li>
              Grâce au BMW Curved Display de série et au BMW Intelligent
              Personal Assistant qui garantissent une expérience utilisateur
              intuitive d’un tout nouveau genre.
            </li>
          </ul>
        </div>
        <Image
          src={detail_6}
          alt="Photo de voiture"
          className="image"
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 100vw,
                  100vw"
        />
      </div>
    </div>
  );
}
