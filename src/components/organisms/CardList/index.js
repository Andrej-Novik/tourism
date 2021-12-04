import Card from "../../molecules/Card";
import style from "./style.module.scss";

const CardList = () => {
  const cards = [
    {
      id: 1,
      img: "https://bestmaps.ru/files/content_images/20130904120023.jpg",
      name: "Египетские пирамиды",
      country: "Египет",
      rate: 3,
    },
  ];

  return (
    <div className={style.container}>
      <Card img={cards[0].img} />
    </div>
  );
};

export default CardList;
