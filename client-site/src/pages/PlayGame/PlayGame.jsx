import { useGetAllHomeGamesQuery } from "@/redux/features/allApis/homeGamesApi/homeGamesApi";
import { useParams } from "react-router";

const PlayGame = () => {
  const { id } = useParams();
  const { data: allHomeGames } = useGetAllHomeGamesQuery();

  const game = allHomeGames?.find((game) => game?._id === id);

  return (
    <div>
      <iframe
        className="w-full h-[600px] max-h-screen"
        src={game?.link}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PlayGame;
