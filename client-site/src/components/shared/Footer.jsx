import { Link } from "react-router";
import { useState } from "react";
import { BiSupport } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { TbRating18Plus } from "react-icons/tb";
import ios from "../../assets/footer/ios.png";
import and from "../../assets/footer/and.png";
import footerTop from "../../assets/logo.png";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";

const Footer = () => {
  const { data: homeControls, isLoading } = useGetHomeControlsQuery();
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Select a country",
    flag: "", // Default flag image can be added here
  });

  const logo = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected
  );

  const countries = [
    { name: "Bangladesh", flag: "https://flagcdn.com/w320/bd.png" },
    { name: "India", flag: "https://flagcdn.com/w320/in.png" },
    { name: "United States", flag: "https://flagcdn.com/w320/us.png" },
    { name: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  const faqs = [
    {
      question: "4RABET official website: start to play casino & betting games",
      answer:
        "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
    },
    {
      question: "Terms",
      answer:
        "Responsible Gaming Policy Terms and conditions Bonus Terms Rules for Specific sports Privacy Policy AML/KYC Policy",
    },
    {
      question: "Bettion",
      answer:
        "Football Betting Basketball Betting Live Betting Tennis Betting Table Tennis Betting Baseball Betting Cricket Betting Horse Racing Betting Live Cricket Betting",
    },
    {
      question: "Casino",
      answer:
        "Online Casino Online Slots New Games Online Blackjack Online Roulette Live Casino Online Baccarat",
    },
    {
      question: "IPL",
      answer:
        "4Rabet App IPL Cricket Betting Live IPL Cricket Betting 4rabet Review IPL Betting Live IPL Betting",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-[#152234] px-3">
      <div className=" m-auto bg-[#152234] pt-6 pb-24 lg:pb-12  lg:pr-20">
        <div className="flex gap-6 items-center py-8">
          <img
            className="w-14"
            src={`${import.meta.env.VITE_BASE_API_URL}${logo?.image}`}
            alt=""
          />
          <p className="border-t border-[#283548] w-full h-1"></p>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:justify-between gap-6 flex-wrap">
          <div className="">
            <h2 className="mb-3 text-lg font-bold text-white">Casino</h2>
            <Link>
              <div className="mb-2 text-base text-[#60748d] hover:text-white duration-300">
                casino
              </div>
            </Link>
            <Link>
              <div className="mb-2 text-base text-[#60748d] hover:text-white duration-300">
                TV Games
              </div>
            </Link>
            <Link>
              <div className="text-base text-[#60748d] hover:text-white duration-300">
                Live Dealers
              </div>
            </Link>
          </div>
          <div className="">
            <h2 className="mb-3 text-lg font-bold text-white">Sport</h2>
            <Link>
              <div className="mb-2 text-base text-[#60748d] hover:text-white duration-300">
                LIVE
              </div>
            </Link>
            <Link>
              <div className="mb-2 text-base text-[#60748d] hover:text-white duration-300">
                Line
              </div>
            </Link>
            <Link>
              <div className="mb-2 text-base text-[#60748d] hover:text-white duration-300">
                Crickets
              </div>
            </Link>
          </div>
          <div className="">
            <h2 className="mb-3 text-lg font-bold text-white">Main</h2>
            <Link>
              <div className="mb-2 text-base text-[#60748d] hover:text-white duration-300">
                Main
              </div>
            </Link>
            <Link>
              <div className="mb-2 text-base text-[#60748d] hover:text-white duration-300">
                Bonuses
              </div>
            </Link>
            <Link>
              <div className="text-base text-[#60748d] hover:text-white duration-300">
                Affiliate program
              </div>
            </Link>
          </div>
          <div className="">
            <h2 className="mb-3 text-lg font-bold text-white">Personal</h2>
            <Link>
              <div className="mb-2 text-base text-[#60748d] hover:text-white duration-300">
                Deposit
              </div>
            </Link>
            <Link>
              <div className="mb-2 text-base text-[#60748d] hover:text-white duration-300">
                Personal data
              </div>
            </Link>
            <Link>
              <div className="text-base text-[#60748d] hover:text-white duration-300">
                History
              </div>
            </Link>
          </div>
          <div className="col-span-2">
            <div className="relative w-70">
              <button
                onClick={toggleDropdown}
                className="w-full flex items-center justify-between bg-[#1d2b3d] text-white px-4 py-3 rounded-lg border border-[#283548] focus:outline-none focus:ring-[#283548]"
              >
                <div className="flex items-center">
                  {selectedCountry.flag && (
                    <img
                      src={selectedCountry.flag}
                      alt={selectedCountry.name}
                      className="w-6 h-4 mr-2"
                    />
                  )}
                  {selectedCountry.name}
                </div>
                <span>{isOpen ? "▲" : "▼"}</span>
              </button>

              {isOpen && (
                <ul className="absolute z-10 w-full text-white bg-[#1d2b3d] border border-[#283548] rounded-lg mt-1 max-h-60 overflow-y-auto">
                  {countries.map((country) => (
                    <li
                      key={country.name}
                      onClick={() => handleSelect(country)}
                      className="flex items-center px-4 py-2 hover:bg-[#283548] cursor-pointer"
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-6 h-4 mr-2"
                      />
                      {country.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex justify-between gap-2 mt-3 w-full bg-[#1d2b3d] text-white px-4 py-2 rounded-lg border border-[#283548] focus:outline-none focus:ring-[#283548]">
              <div className="flex gap-2 items-center">
                <BiSupport size={20} />
                <div className="">
                  <h4 className="text-xs font-bold">Support</h4>
                  <p className="text-[10px] text-[#60748d]">Report problem</p>
                </div>
              </div>
              <Link>
                <div className="bg-[#2d3a4b] text-white py-1.5 px-2 rounded-lg">
                  <HiOutlineMail size={20} />
                </div>
              </Link>
              <Link>
                <div className="bg-[#039be5] text-white py-1.5 px-3 rounded-lg">
                  <FaTelegramPlane size={20} />
                </div>
              </Link>
              <Link>
                <div className="text-xs font-semibold bg-[#0065cc] text-white py-2 px-4 rounded-lg">
                  <p>Chart</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid items-center grid-cols-3 xl:grid-cols-9 gap-3 border-y-2 border-[#283548] py-5 mt-8">
          <div className="bg-[#1d2b3d] text-white py-3 px-6 rounded-lg">
            <img
              className="w-20 m-auto"
              src="https://ifrd.4rabetsite25.com/img/main/providers/banners/spribe.svg"
              alt=""
            />
          </div>
          <div className="bg-[#1d2b3d] text-white py-3 px-6 rounded-lg">
            <img
              className="w-20 m-auto"
              src="https://ifrd.4rabetsite25.com/img/main/providers/banners/spribe.svg"
              alt=""
            />
          </div>
          <div className="bg-[#1d2b3d] text-white py-3 px-6 rounded-lg">
            <img
              className="w-20 m-auto"
              src="https://ifrd.4rabetsite25.com/img/main/providers/banners/spribe.svg"
              alt=""
            />
          </div>
          <div className="bg-[#1d2b3d] text-white py-3 px-6 rounded-lg">
            <img
              className="w-20 m-auto"
              src="https://ifrd.4rabetsite25.com/img/main/providers/banners/spribe.svg"
              alt=""
            />
          </div>
          <div className="bg-[#1d2b3d] text-white py-3 px-6 rounded-lg">
            <img
              className="w-20 m-auto"
              src="https://ifrd.4rabetsite25.com/img/main/providers/banners/spribe.svg"
              alt=""
            />
          </div>
          <div className="bg-[#1d2b3d] text-white py-3 px-6 rounded-lg">
            <img
              className="w-20 m-auto"
              src="https://ifrd.4rabetsite25.com/img/main/providers/banners/spribe.svg"
              alt=""
            />
          </div>
          <div className="bg-[#1d2b3d] text-white py-3 px-6 rounded-lg">
            <img
              className="w-20 m-auto"
              src="https://ifrd.4rabetsite25.com/img/main/providers/banners/spribe.svg"
              alt=""
            />
          </div>
          <div className="bg-[#1d2b3d] text-white py-3 px-6 rounded-lg">
            <img
              className="w-20 m-auto"
              src="https://ifrd.4rabetsite25.com/img/main/providers/banners/spribe.svg"
              alt=""
            />
          </div>
          <div className="bg-[#1d2b3d] text-white py-3 px-6 rounded-lg">
            <img
              className="w-20 m-auto"
              src="https://ifrd.4rabetsite25.com/img/main/providers/banners/spribe.svg"
              alt=""
            />
          </div>
        </div>
        <div className="flex gap-4 justify-between py-9">
          <div className="">
            <div className="flex items-center gap-2 text-[#8a919a]">
              <TbRating18Plus size={32} />
              <TbRating18Plus size={28} />
              <p className="text-[10px] font-semibold text-[#60748d]">
                Copyright © 2024 4raBet. <br />
                All rights are reserved and protected by law
              </p>
            </div>
            <div className="flex gap-2 mt-4">
              <Link>
                <div className="bg-[#039be5] text-white p-1 rounded-lg">
                  <FaTelegramPlane size={18} />
                </div>
              </Link>
              <Link to="https://www.instagram.com" target="-blank">
                <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 text-white p-1 rounded-lg">
                  <FaInstagram size={18} />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <img
              className="hidden sm:block"
              src="https://ifrd.4rabetsite25.com/img/main/providers/banners/qr.svg"
              alt=""
            />
            <div className="">
              <Link>
                <img className="w-28" src={ios} alt="" />
              </Link>
              <Link>
                <img className="mt-2 w-28" src={and} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full mt-5 grid grid-cols-1 xl:grid-cols-4 gap-2 gap-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={index === 0 ? "col-span-1 xl:col-span-4" : ""}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center text-xs font-semibold bg-[#182536] text-white border border-[#283548] px-4 py-2 
          ${
            openIndex === index
              ? "rounded-t-lg" // টপ রাউন্ডেড
              : "rounded-lg" // নরমাল রাউন্ডেড
          } focus:outline-none focus:ring-0`}
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-2 text-[10px] bg-[#182536] text-[#60748d] border border-[#283548] rounded-b-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
