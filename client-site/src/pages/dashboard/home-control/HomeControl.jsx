import LogoSelection from "@/components/dashboard/LogoSelection";
import LogoUpload from "../../../components/dashboard/LogoUpload";

const HomeControl = () => {
  return (
    <div className="">
      <LogoUpload />
      <LogoSelection />
      {/* <SliderUploadSection />
      <SliderSelectionSection />
      <FavoriteUploadSection />
      <FavoriteSelectionSection />
      <FeaturedUploadSection />
      <FeaturedSelectionSection />
      <NoticeUploadSection />
      <NoticeSelectionSection />  */}
    </div>
  );
};

export default HomeControl;
