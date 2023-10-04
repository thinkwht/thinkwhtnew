import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer3 from "components/Footer3";
import Header3 from "components/Header3";

import { CloseSVG } from "../../assets/images";

const ApplyformPage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[3790px] items-start justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header3 className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="bg-amber-100 flex flex-col items-start justify-start max-w-[1222px] mt-[101px] mx-auto p-[62px] md:px-5 rounded-[49px] shadow-bs11 w-full">
            <Text
              className="md:ml-[0] ml-[15px] mt-2 text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtInterRegular36"
            >
              <span className="text-blue_gray-700 font-inter text-left font-normal">
                Enter your details
              </span>
              <span className="text-black-900 font-inter text-left font-normal">
                {" "}
                -{" "}
              </span>
              <span className="text-blue_gray-400 font-inter text-left font-normal">
                Provide your personal information
              </span>
            </Text>
            <Text
              className="md:ml-[0] ml-[15px] mt-[45px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtInterMedium36"
            >
              <span className="text-black-900 font-inter text-left font-medium">
                First Name
              </span>
              <span className="text-red-600 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div className="bg-white-A700 border border-black-900 border-solid h-[60px] md:ml-[0] ml-[15px] mt-[22px] rounded-[10px] shadow-bs1 w-[99%]"></div>
            <Text
              className="md:ml-[0] ml-[15px] mt-[50px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtInterMedium36"
            >
              <span className="text-black-900 font-inter text-left font-medium">
                Last Name
              </span>
              <span className="text-red-600 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div className="bg-white-A700 border border-black-900 border-solid h-[60px] md:ml-[0] ml-[15px] mt-[21px] rounded-[10px] shadow-bs1 w-[99%]"></div>
            <Text
              className="md:ml-[0] ml-[15px] mt-[58px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtInterMedium36"
            >
              <span className="text-black-900 font-inter text-left font-medium">
                Email
              </span>
              <span className="text-red-500_01 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <Img
              className="h-[60px] md:ml-[0] ml-[15px] mt-[27px]"
              src="images/img_group853.svg"
              alt="rectangle4523"
            />
            <Text
              className="md:ml-[0] ml-[15px] mt-[62px] text-4xl sm:text-[32px] md:text-[34px] text-red-500_01"
              size="txtInterMedium36Red50001"
            >
              Work Experience*
            </Text>
            <Img
              className="h-[60px] md:ml-[0] ml-[15px] mt-[23px]"
              src="images/img_group853.svg"
              alt="rectangle4524"
            />
            <Text
              className="md:ml-[0] ml-[15px] mt-[59px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtInterMedium36"
            >
              <span className="text-black-900 font-inter text-left font-medium">
                Phone number
              </span>
              <span className="text-red-600_01 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-start md:ml-[0] ml-[15px] mt-8 p-3.5 w-[99%] md:w-full"
              style={{ backgroundImage: "url('images/img_group853.svg')" }}
            >
              <div className="flex flex-row items-start justify-start ml-8 md:ml-[0] w-[13%] md:w-full">
                <Img
                  className="h-[26px] mt-0.5"
                  src="images/img_group1000001774.svg"
                  alt="group1000001774"
                />
                <Text
                  className="ml-[18px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInterMedium24Black900"
                >
                  +91
                </Text>
                <Img
                  className="h-[9px] ml-[19px] mt-[11px]"
                  src="images/img_offer.svg"
                  alt="offer"
                />
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[15px] mt-[55px] text-4xl sm:text-[32px] md:text-[34px] text-red-500_01"
              size="txtInterMedium36Red50001"
            >
              Upload your CV*
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[60px] items-center justify-start md:ml-[0] ml-[15px] mt-[23px] p-4 w-[99%] md:w-full"
              style={{ backgroundImage: "url('images/img_group853.svg')" }}
            >
              <div className="flex flex-row sm:gap-10 items-start justify-between w-[97%] md:w-full">
                <Text
                  className="text-blue_gray-700_07 text-xl"
                  size="txtInterRegular20Bluegray70007"
                >
                  Choose files
                </Text>
                <Img
                  className="h-[27px]"
                  src="images/img_ticket_blue_gray_700.svg"
                  alt="ticket"
                />
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[15px] mt-[55px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtInterMedium36"
            >
              <span className="text-black-900 font-inter text-left font-medium">
                Any message for us
              </span>
              <span className="text-red-A400_01 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div className="bg-white-A700 border border-black-900 border-solid h-[237px] md:ml-[0] ml-[15px] mt-[21px] rounded-[10px] w-[99%]"></div>
            <Button
              className="cursor-pointer font-semibold h-[72px] leading-[normal] mb-[18px] md:ml-[0] ml-[15px] mt-[79px] rounded-[36px] md:text-3xl sm:text-[28px] text-[32px] text-center w-[325px]"
              color="blue_gray_700"
              size="md"
              variant="fill"
            >
              Submit
            </Button>
          </div>
          <Footer3 className="flex items-center justify-center mt-[124px] md:px-5 w-full" />
        </div>
        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[63px] w-full">
          <Img
            className="h-px w-px"
            src="images/img_vector_1x1.svg"
            alt="vector_Five"
          />
        </div>
      </div>
    </>
  );
};

export default ApplyformPage;
