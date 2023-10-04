import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer2 from "components/Footer2";
import Header3 from "components/Header3";

import { CloseSVG } from "../../assets/images";

const EducatorsTwoPage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <Header3 className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="h-[765px] md:h-[786px] max-w-[1373px] mt-[54px] mx-auto md:px-5 relative w-full">
          <div className="absolute h-[732px] inset-x-[0] mx-auto top-[0] w-full">
            <div className="absolute bg-gradient20  h-[543px] inset-x-[0] mx-auto rounded-[50px] top-[0] w-[98%]"></div>
            <Img
              className="absolute h-[732px] inset-y-[0] my-auto object-cover right-[0] w-[49%]"
              src="images/img_image1_732x661.png"
              alt="imageOne"
            />
          </div>
          <div className="absolute h-[287px] left-[6%] top-[16%] w-[55%] md:w-full">
            <div className="h-[287px] m-auto w-full">
              <div className="h-[287px] m-auto w-full">
                <div className="absolute h-[287px] inset-[0] justify-center m-auto w-full">
                  <Text
                    className="m-auto md:text-5xl text-[85px] text-white-A700 w-full"
                    size="txtInterBlack85"
                  >
                    <>
                      Bring Impact <br /> to <br /> your Future
                    </>
                  </Text>
                  <div className="absolute flex flex-col md:gap-10 gap-[66px] justify-start right-[11%] top-[4%] w-[58%]">
                    <div className="bg-white-A700_96 flex flex-col items-center justify-start mr-[294px] pt-2 px-2 rounded-[37px] w-[31%] md:w-full">
                      <div className="flex h-[66px] md:h-[82px] justify-end relative w-[76%]">
                        <Img
                          className="h-[82px] mt-auto mx-auto object-cover w-full"
                          src="images/img_group3.png"
                          alt="groupThree"
                        />
                        <div className="absolute bg-yellow-700 bottom-[36%] flex flex-col inset-x-[0] items-start justify-start mx-auto p-0.5 rounded-[5px] w-[12%]">
                          <div className="bg-cyan-900 h-1.5 mb-0.5 rounded-sm w-[67%]"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[11px] items-start justify-end md:ml-[0] ml-[60px] w-[86%] md:w-full">
                      <div className="bg-white-A700 h-[7px] my-[5px] rounded-[3px] w-[45%]"></div>
                      <div className="bg-yellow-700 h-[18px] rounded-[50%] w-[18px]"></div>
                      <div className="bg-white-A700 h-[7px] my-[5px] rounded-[3px] w-[45%]"></div>
                    </div>
                  </div>
                  <div className="absolute bg-blue_gray-700 bottom-[0] h-[11px] left-[29%] rounded-[5px] w-[11px]"></div>
                </div>
                <div className="absolute bg-yellow-700 bottom-[29%] h-[101px] left-[0] rounded-[50px] w-[101px]"></div>
              </div>
              <Img
                className="absolute bottom-[5%] h-[155px] left-[6%]"
                src="images/img_group5.svg"
                alt="groupFive"
              />
            </div>
            <div className="absolute bg-white-A700 bottom-[41%] flex flex-col h-[29px] items-center justify-start left-[5%] p-[7px] rounded-[14px] shadow-bs24 w-[29px]">
              <div className="bg-blue_gray-900_05 h-[15px] rounded-[7px] w-[15px]"></div>
            </div>
            <div className="absolute bg-white-A700 bottom-[2%] h-[23px] left-[26%] rounded-[11px] shadow-bs24 w-[23px]"></div>
          </div>
          <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[3%]">
            <Text
              className="md:text-5xl text-[70px] text-blue_gray-700"
              size="txtInterBold70"
            >
              Apply Now
            </Text>
          </div>
        </div>
        <Text
          className="mt-[18px] text-2xl md:text-[22px] text-blue_gray-700_07 text-justify sm:text-xl w-[88%] sm:w-full"
          size="txtInterRegular24Bluegray70007"
        >
          <>
            It allows users to provide necessary information, such as personal
            details, qualifications, and preferences, to initiate processes like
            job applications, program enrollments, or inquiries, all with ease
            and convenience.&quot;
          </>
        </Text>
        <div className="bg-amber-100 flex flex-col items-center justify-start max-w-[1342px] mt-[50px] mx-auto p-[73px] md:px-5 rounded-[49px] shadow-bs11 w-full">
          <div className="flex flex-col items-start justify-start mb-9 mt-1 w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
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
              className="mt-[46px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtInterMedium36"
            >
              <span className="text-black-900 font-inter text-left font-medium">
                Educator name
              </span>
              <span className="text-red-600 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div className="bg-white-A700 border border-black-900 border-solid h-[60px] mt-[21px] rounded-[10px] shadow-bs1 w-full"></div>
            <Text
              className="mt-[49px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtInterMedium36"
            >
              <span className="text-black-900 font-inter text-left font-medium">
                Email
              </span>
              <span className="text-red-600 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div className="bg-white-A700 border border-black-900 border-solid h-[60px] mt-[22px] rounded-[10px] shadow-bs1 w-full"></div>
            <Text
              className="mt-[58px] text-4xl sm:text-[32px] md:text-[34px] text-red-500_01"
              size="txtInterMedium36Red50001"
            >
              Pincode*
            </Text>
            <div className="bg-white-A700 border border-black-900 border-solid h-[60px] mt-[27px] rounded-bl-[11px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[11px] shadow-bs1 w-full"></div>
            <Text
              className="mt-[52px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtInterMedium36"
            >
              <span className="text-black-900 font-inter text-left font-medium">
                Phone number
              </span>
              <span className="text-red-600_01 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div className="bg-white-A700 border border-black-900 border-solid flex flex-row items-center justify-start mt-8 p-3.5 rounded-bl-[11px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[11px] shadow-bs1 w-full">
              <Img
                className="h-[26px] ml-[37px]"
                src="images/img_television_orange_400.svg"
                alt="television"
              />
              <Text
                className="ml-[19px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterMedium24Black900"
              >
                +91
              </Text>
              <Img
                className="h-[9px] ml-[26px]"
                src="images/img_offer.svg"
                alt="offer"
              />
            </div>
            <Text
              className="mt-[51px] text-4xl sm:text-[32px] md:text-[34px] text-red-500_01"
              size="txtInterMedium36Red50001"
            >
              Location*
            </Text>
            <div className="bg-white-A700 border border-black-900 border-solid h-[60px] mt-[27px] rounded-bl-[11px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[11px] shadow-bs1 w-full"></div>
            <Text
              className="mt-[50px] text-4xl sm:text-[32px] md:text-[34px] text-red-500_01"
              size="txtInterMedium36Red50001"
            >
              Work profile link*
            </Text>
            <div className="bg-white-A700 border border-black-900 border-solid h-[60px] mt-6 rounded-bl-[11px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[11px] shadow-bs1 w-full"></div>
            <Text
              className="mt-[51px] text-4xl sm:text-[32px] md:text-[34px] text-red-500_01"
              size="txtInterMedium36Red50001"
            >
              Teaching Experience*
            </Text>
            <div className="bg-white-A700 border border-black-900 border-solid h-[60px] mt-[23px] rounded-bl-[11px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[11px] shadow-bs1 w-full"></div>
            <Text
              className="mt-[50px] text-4xl sm:text-[32px] md:text-[34px] text-red-500_01"
              size="txtInterMedium36Red50001"
            >
              Area of Expertise*
            </Text>
            <div className="bg-white-A700 border border-black-900 border-solid h-[60px] mt-6 rounded-bl-[11px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[11px] shadow-bs1 w-full"></div>
            <Text
              className="mt-[55px] text-4xl sm:text-[32px] md:text-[34px] text-red-500_01"
              size="txtInterMedium36Red50001"
            >
              Upload Resume*
            </Text>
            <div className="bg-white-A700 border border-black-900 border-solid flex flex-row md:gap-10 items-center justify-between mt-[23px] p-3 rounded-bl-[11px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[11px] shadow-bs1 w-full">
              <Text
                className="ml-5 text-2xl md:text-[22px] text-blue_gray-700 sm:text-xl"
                size="txtInterRegular24Bluegray700"
              >
                Choose files
              </Text>
              <Img
                className="h-9 mr-[47px] w-[35px]"
                src="images/img_typcnupload.svg"
                alt="typcnupload"
              />
            </div>
            <Button
              className="cursor-pointer font-semibold h-[72px] leading-[normal] mt-[75px] rounded-[36px] md:text-3xl sm:text-[28px] text-[32px] text-center w-[357px]"
              color="blue_gray_700"
              size="md"
              variant="fill"
            >
              Submit
            </Button>
          </div>
        </div>
        <Footer2 className="flex items-center justify-center mt-[162px] md:px-5 w-full" />
        <div className="flex flex-col items-end mt-[2710px] md:px-10 sm:px-5 px-[63px] w-full">
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

export default EducatorsTwoPage;
