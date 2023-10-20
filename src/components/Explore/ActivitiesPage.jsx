import "swiper/css";
import "swiper/css/grid";
import "../Common/Slider.style.css";
import { getAllData } from "../../core/dataActivitiesAPI";
import ExploreSection from "./ExploreSection";

export default function ActivitiesPage() {
  const datas = getAllData();

  return (
    <div className="mt-5">
      {datas.map((data, index) => (
        <ExploreSection
          key={index}
          sectionTitle={data.title}
          data={data.activities}
        />
      ))}
    </div>
  );
}
