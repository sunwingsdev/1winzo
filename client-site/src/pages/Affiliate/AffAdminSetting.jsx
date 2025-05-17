import React, { useState } from "react";

import passwordChangeImage from "../../assets/affiliateImages/changepass.png";
import searchImage from "../../assets/affiliateImages/searchuser.png";
import promotionImage from "../../assets/affiliateImages/promotional.jpeg";
import activeListImage from "../../assets/affiliateImages/activelist-.png";
import inActiveImage from "../../assets/affiliateImages/inactivelist.png";
import userMessageImage from "../../assets/affiliateImages/usermessage.png";
import inActiveUsersImage from "../../assets/affiliateImages/inactiveusers.png";
import betLockUsersImage from "../../assets/affiliateImages/betlockuser.png";
import ChangePasswordModal from "@/components/Affiliate/AffAdminSetting/ChangePasswordModal";
import { Link } from "react-router";

const settingsData = [
  {
    title: "General Setting",
    images: [
      { key: "passwordChange", src: passwordChangeImage, link: null },
      { key: "searchUser", src: searchImage, link: "/affiliate/search-user" },
      {
        key: "promotionOffer",
        src: promotionImage,
        link: "/affiliate/promotion-offer",
      },
    ],
  },
  {
    title: "Match and Bets",
    images: [
      {
        key: "activeMatches",
        src: activeListImage,
        link: "/affiliate/active-matches",
      },
      {
        key: "inactiveMatches",
        src: inActiveImage,
        link: "/affiliate/inactive-matches",
      },
    ],
  },
  {
    title: "Message Setting",
    images: [
      {
        key: "messageUsers",
        src: userMessageImage,
        link: "/affiliate/message-users",
      },
    ],
  },
  {
    title: "User Setting",
    images: [
      {
        key: "inactiveUsers",
        src: inActiveUsersImage,
        link: "/affiliate/inactive-users",
      },
      {
        key: "betLockedUsers",
        src: betLockUsersImage,
        link: "/affiliate/bet-locked-users",
      },
    ],
  },
];

const AffAdminSetting = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const isInternalLink = (url) => url && url.startsWith("/");

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-textHeadingColor font-semibold">Admin setting</h3>
      {settingsData.map((section, index) => (
        <div
          key={index}
          className="text-sm bg-[#e0e6e6] p-3 border-b border-[#7e97a7]"
        >
          <h2 className="text-textHeadingColor font-medium mb-4">
            {section.title}
          </h2>
          <div className="flex flex-wrap gap-4">
            {section.images.map((img) => {
              if (!img.link) {
                return (
                  <button
                    key={img.key}
                    onClick={() => setModalOpen(true)}
                    className="block w-[150px] hover:opacity-90 transition focus:outline-none"
                  >
                    <img
                      src={img.src}
                      alt={img.key}
                      className="w-full h-auto rounded-md border border-black shadow"
                    />
                  </button>
                );
              } else if (isInternalLink(img.link)) {
                return (
                  <Link
                    key={img.key}
                    to={img.link}
                    className="block w-[150px] hover:opacity-90 transition"
                  >
                    <img
                      src={img.src}
                      alt={img.key}
                      className="w-full h-auto rounded-md border border-black shadow"
                    />
                  </Link>
                );
              } else {
                return (
                  <a
                    key={img.key}
                    href={img.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-[150px] hover:opacity-90 transition"
                  >
                    <img
                      src={img.src}
                      alt={img.key}
                      className="w-full h-auto rounded-md border border-black shadow"
                    />
                  </a>
                );
              }
            })}
          </div>
        </div>
      ))}

      <ChangePasswordModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default AffAdminSetting;
