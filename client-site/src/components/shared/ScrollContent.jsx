import { useContext } from "react";
import MobileBottomMenuTop from "../home/menu/MobileBottomMenuTop";
import { LanguageContext } from "@/providers/LanguageContext";

const ScrollContent = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="flex py-3 justify-start gap-2 overflow-x-auto scrollbar-hide bg-[#282828] scroll-smooth scroll-snap-x snap-mandatory">
      {t("scrollMenus")?.map((menuBottom) => (
        <MobileBottomMenuTop
          key={menuBottom.id}
          title={menuBottom.label}
          img={menuBottom.icon}
          link={menuBottom.link}
          className="scroll-snap-align-start"
        />
      ))}
    </div>
  );
};

export default ScrollContent;
