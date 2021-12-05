import Liked from "./component";

const LikedContainer = () => {

  let cards = JSON.parse(localStorage.getItem("liked")) || [];

  return (
    <div>
      <Liked liked={cards} />
    </div>
  );
};

export const container = LikedContainer;
