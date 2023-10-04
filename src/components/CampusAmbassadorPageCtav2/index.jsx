import React from "react";

import { Img, Text } from "components";

const CampusAmbassadorPageCtav2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute md:h-[615px] h-[703px] inset-[0] justify-center m-auto w-full">
          <div className="md:h-[615px] h-[703px] m-auto w-full">
            <div className="md:h-[615px] h-[703px] m-auto w-full">
              <div className="absolute h-[570px] inset-x-[0] mx-auto top-[0] w-full">
                <div className="absolute bg-blue_gray-700 border border-blue_gray-50 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-tl-[20px] rounded-tr-[20px] shadow-bs8 w-full">
                  <Img
                    className="h-[570px] rounded-tl-[20px] rounded-tr-[20px]"
                    src="images/img_maskgroup_indigo_a700.svg"
                    alt="maskgroup"
                  />
                </div>
                <Img
                  className="absolute h-[200px] object-cover right-[6%] top-[13%] w-[200px]"
                  src="images/img_abstractblue3.png"
                  alt="abstractblueThree"
                />
                <Img
                  className="absolute bottom-[6%] h-[140px] inset-x-[0] mx-auto object-cover w-[10%]"
                  src="images/img_abstractgreen56.png"
                  alt="abstractgreenFiftySix"
                />
              </div>
              <div className="absolute bg-gradient2  bottom-[0] h-[615px] right-[3%] rotate-[180deg] rounded-[324px] w-[49%]"></div>
            </div>
            <div className="absolute flex flex-col gap-[5px] justify-start left-[4%] top-[11%] w-[58%]">
              <Text
                className="md:text-5xl text-[70px] text-justify text-light_blue-50"
                size="txtInterBlack70Lightblue50"
              >
                {props?.username}
              </Text>
              <div className="h-[180px] ml-2.5 md:ml-[0] relative w-[76%] sm:w-full">
                <Text
                  className="leading-[30.00px] m-auto text-base text-justify text-white-A700 w-full"
                  size="txtInterRegular16WhiteA700"
                >
                  {props?.userdescription}
                </Text>
                <Text
                  className="absolute h-full inset-[0] justify-center leading-[30.00px] m-auto text-base text-justify text-white-A700 w-full"
                  size="txtInterRegular16WhiteA700"
                >
                  {props?.descriptionOne}
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute bg-orange-300 bottom-[32%] flex flex-col items-center justify-end left-[4%] p-5 rounded-[36px] shadow-bs">
            <Text
              className="mt-0.5 text-2xl md:text-[22px] text-blue_gray-900_05 sm:text-xl"
              size="txtInterMedium24Bluegray90005"
            >
              {props?.applybuttontext}
            </Text>
          </div>
        </div>
        <Img
          className="absolute bottom-[23%] h-24 left-[24%] w-[97px]"
          src="images/img_call_white_a700_96x97.svg"
          alt="call_One"
        />
        <div className="absolute h-[668px] right-[0] top-[0] w-[63%] md:w-full">
          <Img
            className="h-[668px] m-auto object-cover w-full"
            src="images/img_1011.png"
            alt="1011"
          />
          <Img
            className="absolute h-[23px] left-[46%] object-cover top-[44%] w-[4%]"
            src="images/img_thinkwhatlogohighfinal.png"
            alt="thinkwhatlogohi_One"
          />
        </div>
      </div>
    </>
  );
};

CampusAmbassadorPageCtav2.defaultProps = {
  username: "Campus Ambassador",
  userdescription: (
    <>
      A Campus Ambassador is a student representative chosen by an organization
      or company to serve as a liaison between the institution&#39;s campus
      community and the sponsoring entity. This role involves promoting the
      organization&#39;s initiatives, events, products, or services within the
      campus, engaging fellow students through various activities, and acting as
      a point of contact for information and collaboration.
    </>
  ),
  descriptionOne: (
    <>
      A Campus Ambassador is a student representative chosen by an organization
      or company to serve as a liaison between the institution&#39;s campus
      community and the sponsoring entity. This role involves promoting the
      organization&#39;s initiatives, events, products, or services within the
      campus, engaging fellow students through various activities, and acting as
      a point of contact for information and collaboration.
    </>
  ),
  applybuttontext: "Apply Now",
};

export default CampusAmbassadorPageCtav2;
