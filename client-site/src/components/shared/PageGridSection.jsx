import Games from "./Games";

const PageGridSection = ({ img, title, games }) => {
  return (
    <>
      <div className="flex flex-row items-center gap-1 mb-4">
        <img src={img} className="w-10 h-10" alt="popular category image" />
        <h1 className="text-lg font-bold text-white whitespace-nowrap">
          {title}
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2">
        {games?.map((game) => (
          <Games key={game.id} img={game.img} title={game.title} />
        ))}
      </div>
    </>
  );
};

export default PageGridSection;
