import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import AllGames from "../pages/all-games/AllGames";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../pages/dashboard/dashboard-home/dashboardHome";
import Popular from "../pages/popular/Popular";
import RabetExclusive from "../pages/4rabet-exclusive/RabetExclusive";
import NewGames from "../pages/new-games/NewGames";
import LiveGames from "../pages/live-games/LiveGames";
import SlotGames from "../pages/slots-games/SlotGames";
import CrashGames from "../pages/crash-games/CrashGames";
import LocalGames from "../pages/local-games/LocalGames";
import FastGames from "../pages/fast-games/FastGames";
import RouletteGames from "../pages/roulette/RouletteGames";
import BaccaratGames from "../pages/baccarat/BaccaratGames";
import BlackJack from "../pages/blackjack/BlackJack";
import TableGames from "../pages/table/TableGames";
import VirtualSport from "../pages/virtual-sports/VirtualSport";
import OtherGames from "../pages/other-games/OtherGames";
import AdminRoute from "./AdminRoute";
import DepositHistory from "../pages/dashboard/deposit-history/DepositHistory";
import Deposit from "../components/depositModal/Deposit";
import MyProfile from "../pages/my-profile/MyProfile";
import PaymentHistory from "../pages/payment-history/PaymentHistory";
import Rules from "../pages/rules/Rules";
import WithdrawHistory from "../pages/dashboard/withdraw-history/WithdrawHistory";
import AllUsers from "../pages/users/AllUser";
import AgentTree from "../pages/agent/AgentTree";
import Affilitors from "../pages/affilitors/Affilitors";
import GameCategories from "../pages/dashboard/games/GameCategoris";
import UserProfile from "../pages/users/UserProfile";
import GamesApi from "../pages/dashboard/games/GamesApi";
import AgentProfile from "../pages/agent/AgentProfile";
import FontendSlider from "../components/dashboard/fontend/FontendSlider";
import PromotionsOffer from "../components/dashboard/fontend/PromotionOffer";
import GameCategoriesAdd from "../pages/dashboard/games/CategoriesAdd";
import AdminLogin from "../pages/home/admin-login/AdminLogin";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <AllGames />,
      },
      {
        path: "/popular",
        element: <Popular />,
      },
      {
        path: "/betruss-exclusive",
        element: <RabetExclusive />,
      },
      {
        path: "/new-games",
        element: <NewGames />,
      },
      {
        path: "/live-games",
        element: <LiveGames />,
      },
      {
        path: "/slots",
        element: <SlotGames />,
      },
      {
        path: "/crash-games",
        element: <CrashGames />,
      },
      {
        path: "/local-games",
        element: <LocalGames />,
      },
      {
        path: "/fast-games",
        element: <FastGames />,
      },
      {
        path: "/roulette",
        element: <RouletteGames />,
      },
      {
        path: "/baccarat",
        element: <BaccaratGames />,
      },
      {
        path: "/blackjack",
        element: <BlackJack />,
      },
      {
        path: "/table",
        element: <TableGames />,
      },
      {
        path: "/virtual-sports",
        element: <VirtualSport />,
      },
      {
        path: "/other",
        element: <OtherGames />,
      },
      {
        path: "/deposit",
        element: <Deposit />,
      },
      {
        path: "/profile",
        element: <MyProfile />,
      },
      {
        path: "/payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "/rules",
        element: <Rules />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "alluser",
        element: <AllUsers />,
      },
      {
        path: "agenttree",
        element: <AgentTree />,
      },
      {
        path: "affilitors",
        element: <Affilitors />,
      },
      {
        path: "gamecategories",
        element: <GameCategories />,
      },
      {
        path: "userprofile",
        element: <UserProfile />,
      },
      {
        path: "agentprofile",
        element: <AgentProfile />,
      },
      {
        path: "gamesapi",
        element: <GamesApi />,
      },
      {
        path: "gamesCategorisAdd",
        element: <GameCategoriesAdd />,
      },
      {
        path: "fontendslider",
        element: <FontendSlider />,
      },
      {
        path: "promotionoffer",
        element: <PromotionsOffer />,
      },
      {
        path: "deposits",
        element: <DepositHistory />,
      },
      {
        path: "withdraws",
        element: <WithdrawHistory />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
]);

export default Router;
