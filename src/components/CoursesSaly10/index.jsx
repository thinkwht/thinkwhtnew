import React from "react";

import { Img, Text } from "components";

const CoursesSaly10 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute h-[417px] inset-[0] justify-center m-auto w-full">
          <Img
            className="h-[417px] m-auto object-cover w-full"
            src="images/img_saly10.png"
            alt="salyTen"
          />
          <Text
            className="absolute left-[0] sm:text-[21px] md:text-[23px] text-[25px] text-gray-200 top-[11%]"
            size="txtRobotoRomanSemiBold25"
          >
            {props?.userlevel}
          </Text>
        </div>
        <Text
          className="absolute left-[0] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 top-[0]"
          size="txtRobotoRomanBold25"
        >
          {props?.userrole}
        </Text>
      </div>
    </>
  );
};

CoursesSaly10.defaultProps = {
  userlevel: "BEGINNER",
  userrole: "UI/UX DESIGNER",
};

export default CoursesSaly10;
