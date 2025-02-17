import allGameImg from "../assets/menu/1.png";
import popularImg from "../assets/menu/2.png";
import rabetImg from "../assets/menu/3.png";
import newGameImg from "../assets/menu/4.png";
import liveGameImg from "../assets/menu/5.png";
import slotImg from "../assets/menu/6.png";
import crashGameImg from "../assets/menu/7.png";
import localGameImg from "../assets/menu/8.png";
import fastGameImg from "../assets/menu/9.png";
import rouletteImg from "../assets/menu/10.png";
import baccaratImg from "../assets/menu/11.png";
import blackjackImg from "../assets/menu/12.png";
import tableImg from "../assets/menu/13.png";
import virtualSportsImg from "../assets/menu/14.png";
import otherImg from "../assets/menu/15.png";
import cricket from "../assets/icon-menu-banner/zClass_Cricket.svg";
import soccer from "../assets/icon-menu-banner/zClass_Soccer.svg";
import tennis from "../assets/icon-menu-banner/zClass_Tennis.svg";
import horses from "../assets/icon-menu-banner/zClass_Greyhounds2.svg";
import casino from "../assets/icon-menu-banner/zClass_Casino.svg";
import basketball from "../assets/icon-menu-banner/zClass_Basketball.svg";
import fantasy from "../assets/icon-menu-banner/zClass_FantasySports.svg";
import virtual from "../assets/icon-menu-banner/zClass_VirtualSports.svg";
import esports from "../assets/icon-menu-banner/zClass_ESports.svg";
import tableTennis from "../assets/icon-menu-banner/zClass_TableTennis.svg";
import UFCFightNight from "../assets/icon-menu-banner/UCL_Official.svg";
import boxing from "../assets/icon-menu-banner/zClass_Boxing.svg";
import golf from "../assets/icon-menu-banner/zClass_Golf (1).svg";
import futsal from "../assets/icon-menu-banner/zClass_Futsal.svg";
import rugbyUnion from "../assets/icon-menu-banner/zClass_RugbyUnion.svg";
import badminton from "../assets/icon-menu-banner/zClass_Badminton.svg";
import formula from "../assets/icon-menu-banner/zClass_Formula1.svg";
import iceHockey from "../assets/icon-menu-banner/zClass_IceHockey.svg";
import volleyball from "../assets/icon-menu-banner/zClass_Volleyball.svg";
import darts from "../assets/icon-menu-banner/zClass_Darts.svg";
import rugbyLeague from "../assets/icon-menu-banner/zClass_RugbyLeague.svg";
import snooker from "../assets/icon-menu-banner/zClass_Soccer.svg";
import greyhounds from "../assets/icon-menu-banner/zClass_Greyhounds2.svg";

// Top Menu
const topMenu = [
  {
    id: 1,
    label: "Main",
    Icon: "FaUser",
    link: "/",
  },
  {
    id: 2,
    label: "Live",
    Icon: "FaUser",
    link: "/live",
  },
  {
    id: 3,
    label: "Sports",
    Icon: "FaUser",
    link: "/main",
  },
  {
    id: 4,
    label: "Cricket",
    Icon: "FaUser",
    link: "/cricket",
  },
  {
    id: 5,
    label: "Casino",
    Icon: "FaUser",
    link: "/casino",
  },
  {
    id: 6,
    label: "Live Dealers",
    Icon: "FaUser",
    link: "/live-dealers",
  },
  {
    id: 7,
    label: "TV Games",
    Icon: "FaUser",
    link: "/tv-games",
  },
  {
    id: 8,
    label: "eSport",
    Icon: "FaUser",
    link: "/e-sport",
  },
  {
    id: 9,
    label: "Bonuses",
    Icon: "FaUser",
    link: "/bonuses",
  },
];
// main menu bottom menu
const leftSideMenuTop = [
  {
    id: 1,
    label: "Cricket",
    Icon: cricket,
    link: "/",
  },
  {
    id: 2,
    label: "Soccer",
    Icon: soccer,
    link: "/",
  },
  {
    id: 3,
    label: "Tennis",
    Icon: tennis,
    link: "/",
  },
  {
    id: 4,
    label: "Horses",
    Icon: horses,
    link: "/",
  },
  {
    id: 5,
    label: "Casino",
    Icon: casino,
    link: "/",
  },
  {
    id: 6,
    label: "Basketball",
    Icon: basketball,
    link: "/",
  },
  {
    id: 7,
    label: "Fantasy",
    Icon: fantasy,
    link: "/",
  },
  {
    id: 8,
    label: "Virtual",
    Icon: virtual,
    link: "/",
  },
  {
    id: 9,
    label: "Esports",
    Icon: esports,
    link: "/",
  },
  {
    id: 10,
    label: "Table Tennis",
    Icon: tableTennis,
    link: "/",
  },
  {
    id: 11,
    label: "UFC Fight Night",
    Icon: UFCFightNight,
    link: "/",
  },
  {
    id: 12,
    label: "Boxing",
    Icon: boxing,
    link: "/",
  },
  {
    id: 13,
    label: "Golf",
    Icon: golf,
    link: "/",
  },
  {
    id: 14,
    label: "Futsal",
    Icon: futsal,
    link: "/",
  },
  {
    id: 15,
    label: "Rugby Union",
    Icon: rugbyUnion,
    link: "/",
  },
  {
    id: 16,
    label: "Badminton",
    Icon: badminton,
    link: "/",
  },
  {
    id: 17,
    label: "Formula 1",
    Icon: formula,
    link: "/",
  },
  {
    id: 18,
    label: "Ice Hockey",
    Icon: iceHockey,
    link: "/",
  },
  {
    id: 19,
    label: "Volleyball",
    Icon: volleyball,
    link: "/",
  },
  {
    id: 20,
    label: "Darts",
    Icon: darts,
    link: "/",
  },
  {
    id: 21,
    label: "Rugby League",
    Icon: rugbyLeague,
    link: "/",
  },
  {
    id: 22,
    label: "Snooker",
    Icon: snooker,
    link: "/",
  },
  {
    id: 23,
    label: "Greyhounds",
    Icon: greyhounds,
    link: "/",
  },
];

// Left Side Menu
const leftSideMenu = [
  {
    id: 1,
    label: "All Games",
    Icon: allGameImg,
    link: "/",
  },
  {
    id: 2,
    label: "Popular",
    Icon: popularImg,
    link: "/popular",
  },
  {
    id: 3,
    label: "BETRUSS Exclusive",
    Icon: rabetImg,
    link: "/betruss-exclusive",
  },
  {
    id: 4,
    label: "New Games",
    Icon: newGameImg,
    link: "/new-games",
  },
  {
    id: 5,
    label: "Live Games",
    Icon: liveGameImg,
    link: "/live-games",
  },
  {
    id: 6,
    label: "Slots",
    Icon: slotImg,
    link: "/slots",
  },
  {
    id: 7,
    label: "Crash Games",
    Icon: crashGameImg,
    link: "/crash-games",
  },
  {
    id: 8,
    label: "Local Games",
    Icon: localGameImg,
    link: "/local-games",
  },
  {
    id: 9,
    label: "Fast Games",
    Icon: fastGameImg,
    link: "/fast-games",
  },
  {
    id: 10,
    label: "Roulette",
    Icon: rouletteImg,
    link: "/roulette",
  },
  {
    id: 11,
    label: "Baccarat",
    Icon: baccaratImg,
    link: "/baccarat",
  },
  {
    id: 12,
    label: "Blackjack",
    Icon: blackjackImg,
    link: "/blackjack",
  },
  {
    id: 13,
    label: "Table",
    Icon: tableImg,
    link: "/table",
  },
  {
    id: 14,
    label: "Virtual Sports",
    Icon: virtualSportsImg,
    link: "/virtual-sports",
  },
  {
    id: 15,
    label: "Other",
    Icon: otherImg,
    link: "/other",
  },
];

// Right Side Menu
const rightSideMenu = [
  {
    id: 1,
    label: "Cricket",
    Icon: "FaUser",
    link: "/cricket",
  },
  {
    id: 2,
    label: "Top Live Dealer",
    Icon: "FaCog",
    link: "/top-live-dealer",
  },
  {
    id: 3,
    label: "Aviator",
    Icon: "FaSignOutAlt",
    link: "/aviator",
  },
  {
    id: 4,
    label: "jetX",
    Icon: "FaSignOutAlt",
    link: "/jetx",
  },
  {
    id: 5,
    label: "Aviatrix",
    Icon: "FaSignOutAlt",
    link: "/aviatrix",
  },
  {
    id: 6,
    label: "Tutorials",
    Icon: "FaSignOutAlt",
    link: "/tutorials",
  },
];

export { topMenu, leftSideMenuTop, leftSideMenu, rightSideMenu };
