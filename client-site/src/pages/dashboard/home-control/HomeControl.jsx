import LogoSelection from "@/components/dashboard/LogoSelection";
import LogoUpload from "../../../components/dashboard/LogoUpload";
import SliderUploadSection from "@/components/dashboard/SliderUploadSection";
import SliderSelectionSection from "@/components/dashboard/SliderSelectionSection";
import NoticeUploadSection from "@/components/dashboard/NoticeUploadSection";
import NoticeSelectionSection from "@/components/dashboard/NoticeSelectionSection";

const HomeControl = () => {
  return (
    <div className="">
      <LogoUpload />
      <LogoSelection />
      <SliderUploadSection />
      <SliderSelectionSection />
      {/* <FavoriteUploadSection />
      <FavoriteSelectionSection />
      <FeaturedUploadSection />
      <FeaturedSelectionSection /> */}
      <NoticeUploadSection />
      <NoticeSelectionSection /> 
    </div>
  );
};

export default HomeControl;
