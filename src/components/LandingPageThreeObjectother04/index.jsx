import React from "react";

import { Img, Text } from "components";

const LandingPageThreeObjectother04 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[314px] left-[13%] object-cover top-[0]"
          src="images/img_frame6.png"
          alt="frameSix"
        />
        <div className="absolute h-[444px] sm:h-[650px] inset-[0] justify-center m-auto w-full">
          <div className="h-[444px] sm:h-[650px] m-auto w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 h-full items-start justify-between m-auto w-full">
              <Img
                className="h-[305px] md:h-auto object-cover rounded-[5px]"
                src="images/img_polygon2.png"
                alt="polygonTwo"
              />
              <div className="sm:h-[305px] h-[339px] md:h-[409px] sm:mt-0 mt-[104px] relative w-[41%] sm:w-full">
                <Img
                  className="absolute bottom-[0] h-[279px] inset-x-[0] mx-auto object-cover rounded-[5px]"
                  src="images/img_polygon1.png"
                  alt="polygonOne"
                />
                <Img
                  className="absolute h-[305px] inset-x-[0] mx-auto object-cover rounded-[5px] top-[0]"
                  src="images/img_polygon2_305x229.png"
                  alt="polygonTwo_One"
                />
              </div>
            </div>
            <Img
              className="absolute h-[423px] inset-x-[0] mx-auto object-cover top-[0] w-[63%]"
              src="images/img_objectother04.png"
              alt="objectotherFour"
            />
          </div>
          <div className="absolute bg-white-A700 bottom-[1%] flex flex-row gap-[11px] items-center justify-center left-[4%] p-3.5 rounded-[12px] shadow-bs6 w-[37%]">
            <div className="flex flex-col items-center justify-start ml-0.5 w-8">
              <Img
                className="h-8 md:h-auto object-cover w-8"
                src="images/img_shield11.png"
                alt="shieldEleven"
              />
            </div>
            <div className="flex flex-col items-center justify-start mr-[13px]">
              <Text
                className="text-blue-900 text-center text-lg tracking-[0.72px]"
                size="txtInterRegular18Blue900"
              >
                {props?.p100trusted}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LandingPageThreeObjectother04.defaultProps = {};

export default LandingPageThreeObjectother04;
