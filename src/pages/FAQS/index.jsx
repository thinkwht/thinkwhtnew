import React from "react";

import { Img, Input, Line, Text } from "components";
import Footer2 from "components/Footer2";
import TermsConditionsNavbar from "components/TermsConditionsNavbar";

import { CloseSVG } from "../../assets/images";

const FAQSPage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[4669px] items-start justify-end mx-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[118px] items-center w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="h-[655px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]">
              <Img
                className="absolute h-[655px] inset-y-[0] my-auto object-cover right-[0] rotate-[-148deg] w-[44%]"
                src="images/img_ellipse4_7.png"
                alt="ellipseFour"
              />
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                <TermsConditionsNavbar className="bg-white-A700 flex flex-col items-center justify-start p-1.5 shadow-bs7 w-full" />
              </div>
              <div className="absolute flex flex-col items-center justify-start left-[5%] top-[36%]">
                <Text
                  className="md:text-5xl text-[64px] text-blue-800_01 w-full"
                  size="txtInterBlack64Blue80001"
                >
                  Frequently Asked Questions (FAQ’S)
                </Text>
              </div>
              <Img
                className="absolute h-[359px] inset-y-[0] my-auto object-cover right-[11%] w-[34%]"
                src="images/img_folder.png"
                alt="folder"
              />
            </div>
            <Text
              className="ml-[73px] mt-[-NaNpx] text-blue_gray-700_07 text-justify text-xl w-[55%] sm:w-full z-[1]"
              size="txtInterRegular20Bluegray70007"
            >
              Have doubts and queries cropping up? Here are a few frequently
              asked questions and their answers to help you. We promise we have
              covered all bases!
            </Text>
            <Img
              className="h-[104px] ml-auto mr-[42px] mt-[-NaNpx] z-[1]"
              src="images/img_group_gray_800.svg"
              alt="group"
            />
            <div className="bg-white-A700 flex flex-col items-center justify-end mb-[299px] ml-[42px] mt-[-39.19px] p-7 sm:px-5 rounded-[16px] shadow-bs14 w-[43%] z-[1]">
              <div className="flex flex-col items-center justify-start mt-[11px] w-[98%] md:w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row font-inter sm:gap-[57px] items-start justify-between w-full">
                    <Text
                      className="leading-[28.00px] sm:mt-0 mt-1 text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                      size="txtInterMedium22"
                    >
                      How can i book an appointment for mentorship?
                    </Text>
                    <div className="bg-indigo-900 flex flex-col items-center justify-start mb-[18px] p-3 rounded-lg">
                      <Img
                        className="h-0.5 my-1.5 rounded-[50%] w-[91%]"
                        src="images/img_vector_white_a700_2x19.svg"
                        alt="vector_Two"
                      />
                    </div>
                  </div>
                  <Text
                    className="leading-[30.00px] text-blue_gray-500 text-lg w-[89%] sm:w-full"
                    size="txtDMSansRegular18"
                  >
                    Ut enim ad minim veniam quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat aute irure
                    dolor
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-end justify-start mb-[151px] ml-[42px] mt-[-NaNpx] p-[35px] sm:px-5 rounded-[16px] shadow-bs14 w-[43%] z-[1]">
              <div className="bg-gray-50 flex flex-col items-center justify-start my-1 p-[11px] rounded-lg w-[9%] md:w-full">
                <Img
                  className="h-[18px] w-[19px]"
                  src="images/img_plus.svg"
                  alt="plus"
                />
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-end justify-start mb-[405px] ml-auto mr-[76px] mt-[-39.19px] p-10 sm:px-5 rounded-[16px] shadow-bs14 w-[43%] z-[1]">
              <div className="bg-gray-50 flex flex-col items-center justify-start p-[11px] rounded-lg w-[9%] md:w-full">
                <Img
                  className="h-[18px] w-[19px]"
                  src="images/img_plus.svg"
                  alt="plus_One"
                />
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-end justify-start mb-1 ml-[42px] mt-[-NaNpx] p-[35px] sm:px-5 rounded-[16px] shadow-bs14 w-[43%] z-[1]">
              <div className="bg-gray-50 flex flex-col items-center justify-start my-1 p-[11px] rounded-lg w-[9%] md:w-full">
                <Img
                  className="h-[18px] w-[19px]"
                  src="images/img_plus.svg"
                  alt="plus_Two"
                />
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-end justify-start mb-[260px] ml-auto mr-[76px] mt-[-NaNpx] p-10 sm:px-5 rounded-[16px] shadow-bs14 w-[43%] z-[1]">
              <div className="bg-gray-50 flex flex-col items-center justify-start mr-0.5 p-[11px] rounded-lg w-[9%] md:w-full">
                <Img
                  className="h-[18px] w-[19px]"
                  src="images/img_plus.svg"
                  alt="plus_Three"
                />
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-end justify-start mb-[114px] ml-auto mr-[76px] mt-[-NaNpx] p-10 sm:px-5 rounded-[16px] shadow-bs14 w-[43%] z-[1]">
              <div className="bg-gray-50 flex flex-col items-center justify-start mr-0.5 p-[11px] rounded-lg w-[9%] md:w-full">
                <Img
                  className="h-[18px] w-[19px]"
                  src="images/img_plus.svg"
                  alt="plus_Four"
                />
              </div>
            </div>
            <Text
              className="mb-[290px] ml-auto mr-[190px] mt-[-NaNpx] text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl tracking-[-0.44px] w-[34%] sm:w-full z-[1]"
              size="txtInterMedium22"
            >
              Are there any job placement or internship opportunities after the
              course?
            </Text>
            <Text
              className="mb-[196px] ml-[70px] mt-[-NaNpx] text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl z-[1]"
              size="txtInterMedium22"
            >
              {" "}
              What software will I be using in the course?
            </Text>
            <Text
              className="mb-[42px] ml-[72px] mt-[-NaNpx] text-[22px] text-blue_gray-900_04 text-center sm:text-lg md:text-xl tracking-[-0.44px] z-[1]"
              size="txtInterMedium22"
            >
              {" "}
              How is the course structured?
            </Text>
            <Text
              className="mb-[448px] ml-auto mr-[227px] mt-[-NaNpx] text-[22px] text-blue_gray-900_04 text-center sm:text-lg md:text-xl tracking-[-0.44px] z-[1]"
              size="txtInterMedium22"
            >
              Will I receive a certificate upon completion?
            </Text>
            <Text
              className="mb-[157px] ml-auto mr-[357px] mt-[-NaNpx] text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl tracking-[-0.44px] z-[1]"
              size="txtInterMedium22"
            >
              How can I enroll in the course?
            </Text>
          </div>
          <Footer2 className="flex items-center justify-center md:px-5 w-full" />
        </div>
        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[63px] w-full">
          <Img
            className="h-px w-px"
            src="images/img_vector_1x1.svg"
            alt="vector_Six"
          />
        </div>
      </div>
    </>
  );
};

export default FAQSPage;
