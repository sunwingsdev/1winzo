import { leftSideMenuTop } from "../MenuItems";
import MobileBottomMenuTop from "../home/menu/MobileBottomMenuTop";

const ScrollContent = () => {
  return (
    <div className="flex py-3 justify-start gap-2 overflow-x-auto scrollbar-hide bg-[#282828] scroll-smooth scroll-snap-x snap-mandatory">
      {leftSideMenuTop?.map((menuBottom) => (
        <MobileBottomMenuTop
          key={menuBottom.id}
          title={menuBottom.label}
          img={menuBottom.Icon}
          link={menuBottom.link}
          className="scroll-snap-align-start"
        />
      ))}
    </div>
  );
};

export default ScrollContent;
