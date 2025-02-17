const PageTop = ({ title, Icon }) => {
  return (
    <div className="bg-[#1c2d44] lg:flex flex-row items-center gap-2 px-6 lg:p-6 hidden">
      {Icon && <Icon className="text-3xl text-white" />}
      <p className="text-lg xl:text-3xl text-white font-bold">{title}</p>
    </div>
  );
};

export default PageTop;
