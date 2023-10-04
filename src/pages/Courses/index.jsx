import React from "react";

import { Button, Img, Input, Text } from "components";
import CoursesSaly10 from "components/CoursesSaly10";
import Header2 from "components/Header2";

import { CloseSVG } from "../../assets/images";

const CoursesPage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[150px] w-full">
        <div className="flex flex-col md:gap-10 gap-28 items-center justify-start w-full">
          <Header2 className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1253px] mx-auto md:px-5 w-full">
            <Text
              className="md:ml-[0] ml-[5px] md:text-5xl text-[80px] text-orange-300"
              size="txtInterBold80"
            >
              COURSES ENROLLED IN
            </Text>
            <Text
              className="md:ml-[0] ml-[13px] mt-[5px] text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
              size="txtPoppinsMedium24Bluegray400"
            >
              Lorem Ipsum is simply dummy text of the printing.
            </Text>
            <div className="flex md:flex-col flex-row font-roboto md:gap-10 items-center justify-between mt-[60px] w-full">
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[70px] items-center justify-start w-[32%] md:w-full">
                <div className="md:h-[570px] h-[571px] relative w-[99%] sm:w-full">
                  <div className="bg-gradient8  flex flex-col h-full items-start justify-start m-auto p-[39px] sm:px-5 rounded-[22px] shadow-bs15 w-full">
                    <div className="bg-deep_purple-200 flex flex-col items-start justify-start mb-[437px] p-2.5 rounded-[19px] shadow-bs4 w-auto">
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtRobotoRomanMedium16"
                      >
                        ON GOING CLASS
                      </Text>
                    </div>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-[18px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group819.svg')",
                    }}
                  >
                    <CoursesSaly10 className="h-[417px] md:h-[534px] mb-[19px] mt-[98px] relative w-[94%]" />
                  </div>
                </div>
                <div className="bg-gradient9  h-[561px] pl-1 relative rounded-[22px] shadow-bs15 w-full">
                  <div className="flex flex-col gap-[21px] h-full justify-start ml-[22px] mt-[25px] pl-3.5 py-3.5 w-3/4">
                    <div className="bg-orange-200_02 flex flex-col items-start justify-start mr-[170px] p-2.5 rounded-[19px] shadow-bs4 w-auto">
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtRobotoRomanMedium16"
                      >
                        NEW CLASS
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[13px] items-start justify-start mb-[187px] md:ml-[0] ml-[7px]">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                        size="txtRobotoRomanBold25"
                      >
                        FLUTTER DEVELOPMENT
                      </Text>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-200"
                        size="txtRobotoRomanSemiBold25"
                      >
                        MASTER
                      </Text>
                    </div>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto pl-[11px] pt-[11px] w-[99%]"
                    style={{
                      backgroundImage: "url('images/img_group821.svg')",
                    }}
                  >
                    <div className="flex flex-col items-center justify-start mt-[151px] rotate-[180deg] w-full">
                      <Img
                        className="h-[399px] md:h-auto object-cover w-full"
                        src="images/img_saly36.png"
                        alt="salyThirtySix"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col font-inter gap-[7px] items-center justify-start w-[63%] md:w-full">
                <div className="flex md:flex-col flex-row gap-[23px] items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[66%] md:w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-700"
                      size="txtInterBold40"
                    >
                      UI/UX Design
                    </Text>
                    <Text
                      className="mt-[45px] text-black-900_89 text-justify text-xl w-full"
                      size="txtInterRegular20Black90089"
                    >
                      A UI/UX (User Interface/User Experience) course is a
                      specialized training program that focuses on the design
                      and optimization of digital products, such as websites,
                      mobile apps, and software applications, with the goal of
                      creating user-friendly and visually appealing experiences.
                    </Text>
                    <Button
                      className="cursor-pointer font-medium font-roboto leading-[normal] min-w-[122px] mt-[50px] rounded-[19px] text-base text-center"
                      color="deep_purple_200"
                      size="sm"
                      variant="fill"
                    >
                      Start Learning
                    </Button>
                    <Text
                      className="ml-2 md:ml-[0] mt-[302px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-700"
                      size="txtInterBold40"
                    >
                      Flutter Development
                    </Text>
                  </div>
                  <div className="h-[242px] md:mt-0 mt-1 relative w-[32%] md:w-full">
                    <div className="bg-blue-300_01 h-[242px] m-auto rounded-[125px] w-full"></div>
                    <Text
                      className="absolute bottom-[30%] right-[22%] md:text-5xl text-6xl text-orange-300"
                      size="txtInterRegular60"
                    >
                      40%
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[17px] items-start justify-start w-[99%] md:w-full">
                  <div className="flex md:flex-col flex-row font-inter gap-[38px] items-start justify-between w-full">
                    <Text
                      className="md:mt-0 mt-[38px] text-gray-600 text-justify text-xl"
                      size="txtInterRegular20Gray600"
                    >
                      Flutter development is a framework and toolkit created by
                      Google for building natively compiled applications for
                      mobile, web, and desktop from a single codebase. It is
                      primarily used to develop cross-platform applications,
                      which means you can write code once and deploy it on
                      multiple platforms without the need for significant
                      modifications.
                    </Text>
                    <div className="flex h-[232px] justify-end relative w-[231px]">
                      <Text
                        className="mb-[74px] ml-auto mr-[46px] mt-auto md:text-5xl text-6xl text-orange-300"
                        size="txtInterRegular60"
                      >
                        20%
                      </Text>
                      <div className="absolute bg-blue-300_01 h-[232px] inset-[0] justify-center m-auto rounded-[116px] w-[231px]"></div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium font-roboto leading-[normal] min-w-[122px] rounded-[19px] text-base text-center"
                    color="deep_purple_200"
                    size="sm"
                    variant="fill"
                  >
                    Start Learning
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
