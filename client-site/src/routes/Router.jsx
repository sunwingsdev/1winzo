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
import Deposit from "../components/depositModal/Deposit";
import MyProfile from "../pages/my-profile/MyProfile";
import PaymentHistory from "../pages/payment-history/PaymentHistory";
import Rules from "../pages/rules/Rules";
import AllUsers from "../pages/users/AllUser";
import AgentTree from "../pages/agent/AgentTree";
import Affilitors from "../pages/affilitors/Affilitors";
import UserProfile from "../pages/users/UserProfile";
import AgentProfile from "../pages/agent/AgentProfile";
// import GameCategoriesAdd from "../pages/dashboard/games/CategoriesAdd";
import AdminLogin from "../pages/home/admin-login/AdminLogin";
import AdminProfile from "@/pages/dashboard/AdminProfile/AdminProfile";
import CashAgent from "@/pages/dashboard/CashAgent/CashAgent";
import Kyc from "@/pages/dashboard/kyc/Kyc";
import PaymentMethodRequests from "@/pages/dashboard/CashAgent/PaymentMethodRequests";
import Affiliators from "@/pages/dashboard/Affilitor/Affilitors";
import AllAffiliateLinks from "@/pages/dashboard/Affilitor/AllAffiliateLinks";
import UserDetailsPage from "@/pages/dashboard/UserDetailsPage/UserDetailsPage ";
import AddGamesOnGamesApiKey from "@/pages/dashboard/AddGames/AddGamesOnGamesApiKey";
import Games from "@/components/shared/Games";
import DashboardDeposits from "@/pages/dashboard/DashboardDeposits/DashboardDeposits";
import Notice from "@/pages/dashboard/Fontend/Notice";
import Sponshorship from "@/pages/dashboard/Fontend/Sponshorship";
import DepositMethod from "@/pages/dashboard/BankingDeposit/DepositMethod";
import WithdrawMethod from "@/pages/dashboard/BankingWithdraw/WithdrawMethod";
import CommissionSetting from "@/pages/dashboard/Setting/CommissionSetting/CommissionSetting";
import PromotionOffer from "@/pages/dashboard/PromotionOffer/PromotionOffer";
import ManagePages from "@/pages/dashboard/ManagePages/ManagePages";
import DepositHistory from "@/pages/dashboard/BankingDeposit/DepositHistory";
import WithdrawHistory from "@/pages/dashboard/BankingWithdraw/WithdrawHistory";
import GameCategories from "@/pages/dashboard/GameCategori/GameCategories";
import GamesApi from "@/pages/dashboard/GamesApi/GamesApi";
import HomeControl from "@/pages/dashboard/HomeControl/HomeControl";
import FontendSlider from "@/pages/dashboard/Fontend/FontendSlider";
import PromotionsOffer from "@/pages/dashboard/Fontend/PromotionsOffer";

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
        path: "users",
        element: <AllUsers />,
      },
      { path: "profile/:id", element: <AdminProfile /> },
      { path: "cashagent", element: <CashAgent /> },
      { path: "kyc", element: <Kyc /> },
      { path: "paymentmethodrequests", element: <PaymentMethodRequests /> },
      { path: "agentprofile/:id", element: <AgentProfile /> },
      { path: "affiliators", element: <Affiliators /> },
      { path: "allaffiliatelinks", element: <AllAffiliateLinks /> },
      {
        path: "user-profile/:id",
        element: <UserDetailsPage />,
      },
      {
        path: "gameCategories",
        element: <GameCategories />,
      },
      {
        path: "addGames",
        element: <AddGamesOnGamesApiKey />,
      },
      {
        path: "agent",
        element: <AgentTree />,
      },
      {
        path: "affilitors",
        element: <Affilitors />,
      },
      {
        path: "games",
        element: <Games />,
      },
      {
        path: "gamesApi/:id",
        element: <GamesApi />,
      },
      {
        path: "deposits",
        element: <DashboardDeposits />,
      },

      {
        path: "fontendslider",
        element: <FontendSlider />,
      },
      {
        path: "promotionsoffer",
        element: <PromotionsOffer />,
      },
      {
        path: "notice",
        element: <Notice />,
      },
      {
        path: "sponsorship",
        element: <Sponshorship />,
      },
      {
        path: "home-controls",
        element: <HomeControl />,
      },
      { path: "depositmethod", element: <DepositMethod /> },
      // { path: "edit-depositmethod/:id", element: <EditDepositMethodForm /> },
      { path: "deposithistory", element: <DepositHistory /> },
      { path: "withdrawmethod", element: <WithdrawMethod /> },
      // { path: "edit-withdrawmethod/:id", element: <EditWithdrawMethodForm /> },
      { path: "withdraws", element: <WithdrawHistory /> },
      { path: "commissionsetting", element: <CommissionSetting /> },
      { path: "promotion-offer", element: <PromotionOffer /> },
      { path: "manage-pages", element: <ManagePages /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
]);

export default Router;
