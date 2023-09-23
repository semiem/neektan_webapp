import ExploreCard from "./ExploreCard";

const ExploreSection = ({ sectionTitle, data }) => {
  return (
    <div className="gap-5">
      <div className="font-iran mt-8 mr-4 mb-2 text-white font-bold text-lg">
        {sectionTitle}
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-5 px-3 overflow-x-auto pb-2">
        {data.map((item) => (
          <ExploreCard
            key={item.id}
            id={item.id}
            image={item.poster}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
