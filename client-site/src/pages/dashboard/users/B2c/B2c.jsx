import B2cAdminTable from "./B2cAdminTable";
import B2cMasterAffiliateTable from "./B2cMasterAffiliateTable";
import B2cSuperAffiliateTable from "./B2cSuperAffiliateTable";

const B2c = () => {
  return (
    <div>
      <div className="bg-[#222222] flex flex-col md:flex-row items-start md:items-center justify-between p-4 mb-2">
        <div className="flex flex-row items-start justify-between w-full mb-4 md:mb-0">
          <h1 className="text-2xl text-white font-bold">B2C</h1>
        </div>
      </div>
      <B2cAdminTable />
      <B2cSuperAffiliateTable />
      <B2cMasterAffiliateTable />
    </div>
  );
};

export default B2c;
