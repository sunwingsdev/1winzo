import PageTop from "../../components/shared/PageTop";
import { MdPayment } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DepositHistoryTab from "../../components/deposit-history/DepositHistoryTab";
import WithDrawHistoryTab from "../../components/deposit-history/WithDrawHistoryTab";

const PaymentHistory = () => {
  return (
    <div className="bg-[#091222] pt-10 sm:pt-14 mt-[51px] lg:mt-0">
      <PageTop title="Payment History" Icon={MdPayment} />
      <div>
        <Tabs>
          <TabList className="flex flex-row items-center justify-center gap-6 py-4 bg-[#172437]">
            <Tab
              className="text-slate-500 text-xl font-bold cursor-pointer"
              selectedClassName="text-white transition-all ease-in-out duration-300"
            >
              Deposit History
            </Tab>
            <Tab
              className="text-slate-500 text-xl font-bold cursor-pointer"
              selectedClassName="text-white transition-all ease-in-out duration-300"
            >
              Withdrawal History
            </Tab>
          </TabList>

          <TabPanel>
            <DepositHistoryTab />
          </TabPanel>
          <TabPanel>
            <WithDrawHistoryTab />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default PaymentHistory;
