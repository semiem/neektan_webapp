import { Link } from "react-router-dom";

const ExploreCard = ({ id, image, title }) => {
  return (
    <Link to={`/Detail/${id}`} className="w-[300px] min-w-[330px] flex gap-3">
      <div>
        <img
          src={image}
          alt="exercise"
          className="w-36 min-w-[144px] h-28 rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <span className="text-white text-sm">Blazepod</span>
        <span className="font-bold text-white">{title}</span>
        <span className="text-sm opacity-80 font-iran text-white">
          یک بازیکن &#x2022; شش پاد
        </span>
      </div>
    </Link>
  );
};

export default ExploreCard;
