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
import AdminRoute from "./MotherAdminRoute";
import Deposit from "../components/depositModal/Deposit";
import MyProfile from "../pages/my-profile/MyProfile";
import PaymentHistory from "../pages/payment-history/PaymentHistory";
import Rules from "../pages/rules/Rules";

import AgentTree from "../pages/agent/AgentTree";
import Affilitors from "../pages/affilitors/Affilitors";
import UserProfile from "../pages/users/UserProfile";
import AgentProfile from "../pages/agent/AgentProfile";
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
import AffiliateLayout from "@/layout/AffiliateLayout";
import DownlineList from "@/pages/Affiliate/DownlineList";
import Dashboard from "@/pages/Affiliate/AffDashboard";
import ProfitLossDownline from "@/pages/Affiliate/ProfitLossDownline";
import AffiliateAccount from "@/pages/Affiliate/AffiliateAccount";
import Category from "@/pages/Category/Category";
import EditDepositMethodForm from "@/components/dashboard/bankingDeposit/depositMethod/EditDepositMethodForm";
import AffReportDownline from "@/pages/Affiliate/AffReportDownline";
import AffReportMarket from "@/pages/Affiliate/AffReportMarket";
import AffReportPlayer from "@/pages/Affiliate/AffReportPlayer";
import AffReportWise from "@/pages/Affiliate/AffReportWise";
import AffReportCasino from "@/pages/Affiliate/AffReportCasino";
import AffReportCasinoDownline from "@/pages/Affiliate/AffReportCasinoDownline";
import AffReportAwc from "@/pages/Affiliate/AffReportAwc";
import AffReportDate from "@/pages/Affiliate/AffReportDate";
import AffBanner from "@/pages/Affiliate/AffBanner";
import AffBetlist from "@/pages/Affiliate/AffBetlist";
import AffBetlistLive from "@/pages/Affiliate/AffBetlistLive";
import RiskManagement from "@/pages/Affiliate/RiskManagement";
import AffBanking from "@/pages/Affiliate/AffBanking";
import AddBanks from "@/pages/Affiliate/AddBanks";
import WalletDeposit from "@/pages/Affiliate/WalletDeposit";
import WalletWithdrawal from "@/pages/Affiliate/WalletWithdrawal";
import AffDepositeHistory from "@/pages/Affiliate/AffDepositeHistory";
import AffWithdrawHistory from "@/pages/Affiliate/AffWithdrawHistory";
import AffBikash from "@/pages/Affiliate/AffBikash";
import AffNagad from "@/pages/Affiliate/AffNagad";
import AffRocket from "@/pages/Affiliate/AffRocket";
import AffBlockMarket from "@/pages/Affiliate/AffBlockMarket";
import AffCustomerSupport from "@/pages/Affiliate/AffCustomerSupport";
import AffAdminSetting from "@/pages/Affiliate/AffAdminSetting";
import AffiliateLogin from "@/pages/AffiliateLogin/AffiliateLogin";
import AffDashboard from "@/pages/Affiliate/AffDashboard";
import AffSearchUser from "@/pages/Affiliate/AffSearchUser";
import AffPromotionOffer from "@/pages/Affiliate/AffPromotionOffer";
import AffActiveMatches from "@/pages/Affiliate/AffActiveMatches";
import AffInActiveMatches from "@/pages/Affiliate/AffInActiveMatches";
import AffInActiveUsers from "@/pages/Affiliate/AffInActiveUsers";
import AffBetLockedUsers from "@/pages/Affiliate/AffBetlockedUsers";
import AffMessForUsers from "@/pages/Affiliate/AffMessForUsers";
import AllUsers from "@/pages/dashboard/users/AllUsers/AllUsers";
import B2b from "@/pages/dashboard/users/B2b/B2b";
import B2c from "@/pages/dashboard/users/B2c/B2c";
import AffliateRoute from "./AffliateRoute";
import MotherAdminRoute from "./MotherAdminRoute";
import AfDepositMethod from "@/pages/Affiliate/bankingDeposit/AfDepositMethod";
import AfRegister from "@/pages/Affiliate/AfRegister/AfRegister";

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
        path: "/:category",
        element: <Category />,
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
    path: "/affiliate",
    element: (
      <AffliateRoute>
        <AffiliateLayout />
      </AffliateRoute>
    ),
    children: [
      { path: "depositmethod", element: <AfDepositMethod /> },
      { path: "withdrawmethod", element: <WithdrawMethod /> },
      {
        path: "",
        element: <AffDashboard />,
      },
      {
        path: "downline",
        element: <DownlineList />,
      },
      {
        path: "account",
        element: <AffiliateAccount />,
      },
      {
        path: "pl-downline",
        element: <AffReportDownline />,
      },
      {
        path: "report-market",
        element: <AffReportMarket />,
      },
      {
        path: "report-player",
        element: <AffReportPlayer />,
      },
      {
        path: "report-wise",
        element: <AffReportWise />,
      },
      {
        path: "report-casino",
        element: <AffReportCasino />,
      },
      {
        path: "report-date",
        element: <AffReportDate />,
      },
      {
        path: "report-casinodownline",
        element: <AffReportCasinoDownline />,
      },
      {
        path: "report-awc",
        element: <AffReportAwc />,
      },
      {
        path: "banner",
        element: <AffBanner />,
      },
      {
        path: "betlist",
        element: <AffBetlist />,
      },
      {
        path: "betlist-live",
        element: <AffBetlistLive />,
      },
      {
        path: "risk-management",
        element: <RiskManagement />,
      },
      {
        path: "banking",
        element: <AffBanking />,
      },
      {
        path: "add-bank",
        element: <AddBanks />,
      },
      {
        path: "wallet-deposit",
        element: <WalletDeposit />,
      },
      {
        path: "wallet-withdrawal",
        element: <WalletWithdrawal />,
      },
      {
        path: "deposit-history",
        element: <AffDepositeHistory />,
      },
      {
        path: "withdraw-history",
        element: <AffWithdrawHistory />,
      },
      {
        path: "bkash-sms",
        element: <AffBikash />,
      },
      {
        path: "nagad-sms",
        element: <AffNagad />,
      },
      {
        path: "rocket-sms",
        element: <AffRocket />,
      },
      {
        path: "block-market",
        element: <AffBlockMarket />,
      },
      {
        path: "customer-support",
        element: <AffCustomerSupport />,
      },
      {
        path: "admin-setting",
        element: <AffAdminSetting />,
      },
      {
        path: "search-user",
        element: <AffSearchUser />,
      },
      {
        path: "promotion-offer",
        element: <AffPromotionOffer />,
      },
      {
        path: "active-matches",
        element: <AffActiveMatches />,
      },
      {
        path: "inactive-matches",
        element: <AffInActiveMatches />,
      },
      {
        path: "message-users",
        element: <AffMessForUsers />,
      },
      {
        path: "inactive-users",
        element: <AffInActiveUsers />,
      },
      {
        path: "bet-locked-users",
        element: <AffBetLockedUsers />,
      },
    ],
  },
  {
    path: "/affiliate/login",
    element: <AffiliateLogin />,
  },
  {
    path: "/register",
    element: <AfRegister />,
  },
  {
    path: "/dashboard",
    element: (
      <MotherAdminRoute>
        <DashboardLayout />
      </MotherAdminRoute>
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
      {
        path: "b2b",
        element: <B2b />,
      },
      {
        path: "b2c",
        element: <B2c />,
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
      { path: "edit-depositmethod/:id", element: <EditDepositMethodForm /> },
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
