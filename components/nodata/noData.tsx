import { PackageOpen } from "lucide-react";

const NoData = () => {
  return (
    <div className="flex justify-center items-center h-full mt-10">
      <div className="flex flex-col items-center gap-2">
        <PackageOpen size={50} />
        <p className="text-sm text-gray-400 font-semibold">No data</p>
      </div>
    </div>
  );
};

export default NoData;
