import React from "react";
import Image from "next/image";
import Text from "../../atoms/Typography/text";
import hashtag from "../../../public/Icon.svg";
import orgIcon from "../../../public/bookmark-alt.svg";
import cancelIcon from "../../../public/x-circle.svg";

interface FilterCardProps {
    filterName: string;
    bgColor?: string;
    hashtagIcon?: boolean;
}

const FilterCard: React.FC<FilterCardProps> = ({ filterName, bgColor, hashtagIcon }) => {
  return (
    <div className={`mr-3 py-1 px-2 py-0.5 border border-slate-300 ${bgColor && `bg-${bgColor}`} rounded-lg`}>
      { hashtagIcon ?
        <div className="flex items-center gap-1">
          <Image alt="Hashtag Icon" src={hashtag} />
          <Text className="!text-sm font-semibold tracking-tight !text-slate-900">
            {filterName}
          </Text>
        </div>
        :
        <div className="flex items-center gap-1">
          <Image alt="Organization Icon" src={orgIcon} />
          <Text className="text-base font-semibold tracking-tight">
            {filterName}
          </Text>
          <Image alt="Cancel Icon" src={cancelIcon} />
        </div>
      }
    </div>
  );
};

export default FilterCard;