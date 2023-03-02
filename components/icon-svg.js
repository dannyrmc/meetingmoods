//SVG based icon commponent

import IconVolume from "../public/icons/icon-sharp-filled-volume_up.svg";

const Icon = () => {
  return (
    <div className="flex flex-row justify-center items-center w-10 h-10 bg-gray-900 rounded-3xl">
      <IconVolume className="fill-gray-50 w-6 h-6 bg-cover bg-no-repeat inline-block" />
    </div>
  );
};

export default Icon;
