import style from "./style.module.scss";

const Card = ({ img }) => {
  return (
    <div className={style.card}>
      <img src={img} />
    </div>
  );
};

export default Card;
