import "./Footer.scss";

export default function Footer() {
  const links = [
    "Configuration & prix",
    "Demandez une brochure",
    "Modèle disponible",
    "Offre et loyer",
  ];

  return (
    <div className="wrapperFooter">
      <div className="wrapperActions">
        <div className="wrapperLinks">
          {links.map((item, key) => (
            <div key={key} className="item">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
