import B2bAdminTable from "./B2bAdminTable";
import B2bMasterAgentTable from "./B2bMasterAgentTable";
import B2bSuperAgentTable from "./B2bSuperAgentTable";

const B2b = () => {
  return (
    <div>
      <div className="bg-[#222222] flex flex-col md:flex-row items-start md:items-center justify-between p-4 mb-2">
        <div className="flex flex-row items-start justify-between w-full mb-4 md:mb-0">
          <h1 className="text-2xl text-white font-bold">B2B</h1>
        </div>
      </div>
      <B2bAdminTable />
      <B2bSuperAgentTable />
      <B2bMasterAgentTable />
    </div>
  );
};

export default B2b;
