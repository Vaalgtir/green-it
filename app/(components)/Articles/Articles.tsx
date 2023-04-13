import Image from "next/image";

import image_1 from "./../../../assets/images/home/article-1.webp";
import image_2 from "./../../../assets/images/home/article-2.webp";
import image_3 from "./../../../assets/images/home/article-3.webp";
import image_4 from "./../../../assets/images/home/article-4.webp";

import "./Articles.scss";

export default function Articles() {
  const articles = [
    {
      image: (
        <Image
          src={image_1}
          alt="Photo de voiture"
          className="image_1"
          sizes="(max-width: 768px) 100vw,
							(max-width: 1200px) 100vw,
							100vw"
        />
      ),
      title: "BMW d'occasion.",
      description:
        "Découvrez toutes les BMW d'occasion proche de chez vous. Une occasion comme neuve. ",
      link: "> Trouvez votre BMW d’occasion",
    },
    {
      image: (
        <Image
          src={image_2}
          alt="Photo de'article"
          className="image_2"
          sizes="(max-width: 768px) 100vw,
							(max-width: 1200px) 100vw,
							100vw"
        />
      ),
      title: " BMW NEUVES. ",
      description:
        "Découvrez toutes les BMW neuves disponibles immédiatement dans votre concession.  ",
      link: "> Trouvez votre BMW neuve en stock",
    },
    {
      image: (
        <Image
          src={image_3}
          alt="Photo de'article"
          className="image_3"
          sizes="(max-width: 768px) 100vw,
							(max-width: 1200px) 100vw,
							100vw"
        />
      ),
      title: " DURABILITÉ CHEZ BMW. ",
      description:
        "Tout savoir sur nos engagements en terme d'environnement et de politique RSE. ",
      link: "> En savoir plus",
    },
    {
      image: (
        <Image
          src={image_4}
          alt="Photo de'article"
          className="image_4"
          sizes="(max-width: 768px) 100vw,
							(max-width: 1200px) 100vw,
							100vw"
        />
      ),
      title: " ENTRETIEN & RDV ATELIER. ",
      description:
        "Consultez facilement les tarifs entretien, réalisez un devis et prenez rendez-vous en quelques clics chez un Concessionnaire ou Réparateur Agréé BMW.",
      link: "> Consulter les tarifs et prendre RDV",
    },
  ];

  return (
    <div className="wrapperArticles">
      {articles.map((article) => (
        <div className="wrapper">
          {article.image}
          <h1 className="title">{article.title}</h1>
          <div className="description">{article.description}</div>
          <div className="link">{article.link}</div>
        </div>
      ))}
    </div>
  );
}
