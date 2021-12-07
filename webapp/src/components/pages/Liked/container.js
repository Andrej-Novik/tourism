import Liked from "./component";
import { useSelector, useDispatch } from "react-redux";
import { setLikedObjects } from "../../../useCases/actions/objects";

const LikedContainer = () => {
	const dispatch = useDispatch();
	
  let cards = JSON.parse(localStorage.getItem("liked")) || [];
  let likedData = useSelector((state) => state.objects.likedObjects);

  const setLiked = (obj) => {
    let cards = JSON.parse(localStorage.getItem("liked")) || [];
    if (obj.isLiked) {
      cards = cards.filter((i) => i.title !== obj.title);
      localStorage.setItem("liked", JSON.stringify(cards));
      dispatch(setLikedObjects());
    } else {
      if (cards.length) {
        let is = false;
        cards.forEach((i) => {
          if (obj.id === i.id) {
            is = true;
          }
        });
        if (!is) {
          cards.push(obj);
          localStorage.setItem("liked", JSON.stringify(cards));
        }
      } else {
        cards.push(obj);
        localStorage.setItem("liked", JSON.stringify(cards));
      }
    }
  };

  return (
    <div>
      <Liked liked={cards} likedData={likedData} setLiked={setLiked} />
    </div>
  );
};

export const container = LikedContainer;
