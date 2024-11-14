// SVG based icon commponent

import IconVolume from "@/icons/icon-sharp-filled-volume-up.svg";

const Icon = () => {
  return (
    <div className="flex h-10 w-10 flex-row items-center justify-center rounded-3xl bg-gray-950">
      <IconVolume className="inline-block h-6 w-6 bg-cover bg-no-repeat fill-gray-50" />
    </div>
  );
};

export default Icon;
