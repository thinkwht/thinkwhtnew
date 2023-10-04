import React from "react";

import { Button, Img, Text } from "components";

const MentorPageColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-auto">
          <div className="relative w-20">
            <Img
              className="h-20 m-auto rounded-[50%] w-20"
              src="images/img_ellipse18_80x80.png"
              alt="ellipseEighteen"
            />
            <Button
              className="absolute border border-solid border-white-A700 bottom-[0] flex h-[27px] items-center justify-center right-[0] rounded-[13px] w-[27px]"
              color="cyan_700"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-4"
                src="images/img_group_white_a700.svg"
                alt="group"
              />
            </Button>
          </div>
          {props?.loremipsumdolorOne}
        </div>
        <div className="flex flex-col gap-2 items-center justify-start w-auto">
          <div className="bg-cyan-700 border border-solid border-white-A700 h-3 rounded-[50%] w-3"></div>
          <div className="flex flex-col items-center justify-center w-auto">
            <Text
              className="text-center text-gray-900 text-lg tracking-[0.72px] w-auto"
              size="txtInterThin18"
            >
              {props?.username}
            </Text>
            <Text
              className="text-center text-gray-600_01 text-xs tracking-[0.48px] w-auto"
              size="txtInterRegular12"
            >
              {props?.userposition}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

MentorPageColumn.defaultProps = {
  loremipsumdolorOne: (
    <Text
      className="leading-[24.00px] max-w-[270px] md:max-w-full text-base text-center text-gray-900 tracking-[0.10px]"
      size="txtInterRegular16"
    >
      <span className="text-gray-900 font-inter font-normal">
        Lorem ipsum dolor sit amet consectetur. Sed non sit sed nunc nam nunc
        tellus.{" "}
      </span>
      <span className="text-gray-900 font-inter font-normal">
        {" "}
        Sed non sit sed nunc nam nunc tellus.{" "}
      </span>
    </Text>
  ),
  username: "Allison Adam",
  userposition: "Founder & CEO",
};

export default MentorPageColumn;
