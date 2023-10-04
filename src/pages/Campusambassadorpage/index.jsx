import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import CampusAmbassadorPageCtav2 from "components/CampusAmbassadorPageCtav2";
import Footer1 from "components/Footer1";
import Header4 from "components/Header4";

import { CloseSVG } from "../../assets/images";

const CampusambassadorpagePage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <Header4 className="flex flex-col font-inter items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col font-inter max-w-[1340px] mt-[63px] mx-auto md:px-5 relative w-full">
            <div className="md:h-[668px] h-[704px] mx-auto w-full">
              <Img
                className="absolute bottom-[11%] h-[60px] left-[0]"
                src="images/img_grid.svg"
                alt="grid"
              />
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <CampusAmbassadorPageCtav2 className="md:h-[668px] h-[704px] relative w-full" />
                </div>
              </div>
            </div>
            <div className="md:h-[419px] h-[429px] mt-[-10.32px] mx-auto w-[97%] md:w-full z-[1]">
              <div className="h-[429px] m-auto w-full">
                <div className="h-[429px] m-auto w-full">
                  <div className="flex flex-col gap-[17px] h-full justify-start m-auto w-full">
                    <div className="bg-gradient17  h-[206px] mr-[1048px] rotate-[180deg] rounded-[121px] shadow-bs23 w-[19%]"></div>
                    <div className="bg-gradient17  h-[206px] md:ml-[0] ml-[1048px] rounded-[121px] shadow-bs23 w-[19%]"></div>
                  </div>
                  <div className="absolute h-[375px] sm:h-[420px] inset-[0] justify-center m-auto w-[92%] md:w-full">
                    <Img
                      className="h-[375px] m-auto object-cover rounded-[12px] w-full"
                      src="images/img_cardbg.png"
                      alt="cardbg"
                    />
                    <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[7%] my-auto w-[52%]">
                      <Img
                        className="h-[204px] md:h-auto object-cover w-[37%] sm:w-full"
                        src="images/img_calendarfront.png"
                        alt="calendarfront"
                      />
                      <Text
                        className="mt-[17px] text-5xl sm:text-[38px] md:text-[44px] text-blue-800_01 text-center tracking-[1.92px]"
                        size="txtInterBlack48Blue80001"
                      >
                        326
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-10 gap-[212px] items-start justify-end mt-[7px] w-[94%] md:w-full">
                        <Text
                          className="mb-[5px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-800_06 text-center tracking-[1.44px]"
                          size="txtInterMedium36Bluegray80006"
                        >
                          Applied
                        </Text>
                        <Text
                          className="sm:mt-0 mt-[5px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-800_06 text-center tracking-[1.44px]"
                          size="txtInterMedium36Bluegray80006"
                        >
                          Impressions
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[246px] object-cover right-[8%] top-[0] w-[21%]"
                      src="images/img_megaphonefront.png"
                      alt="megaphonefront"
                    />
                    <div className="absolute bottom-[7%] flex flex-col items-center justify-start right-[10%]">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-blue-800_01 text-center tracking-[1.92px]"
                        size="txtInterBlack48Blue80001"
                      >
                        12 days
                      </Text>
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-800_06 text-center tracking-[1.44px]"
                        size="txtInterMedium36Bluegray80006"
                      >
                        Deadline
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[262px] inset-x-[0] mx-auto object-cover top-[5%] w-[22%]"
                  src="images/img_magnifyingglassfront.png"
                  alt="magnifyingglass"
                />
              </div>
              <Text
                className="absolute bottom-[21%] inset-x-[0] mx-auto text-5xl sm:text-[38px] md:text-[44px] text-blue-800_01 text-center tracking-[1.92px] w-max"
                size="txtInterBlack48Blue80001"
              >
                3260
              </Text>
            </div>
          </div>
          <div className="flex flex-col font-inter items-center justify-start max-w-[1381px] mt-[93px] mx-auto md:px-5 w-full">
            <div className="bg-blue-800 h-[437px] px-[3px] relative rounded-[24px] w-full">
              <div className="absolute h-[437px] inset-[0] justify-center m-auto w-full">
                <div className="absolute h-[431px] inset-[0] justify-center m-auto w-full">
                  <div className="flex flex-col gap-4 h-full items-center justify-start ml-[93px] mt-[72px] w-[558px] sm:w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[1.92px] w-auto"
                      size="txtInterBlack48WhiteA700"
                    >
                      Registration Deadline{" "}
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[552px] md:max-w-full text-lg text-white-A700 tracking-[0.72px]"
                      size="txtInterRegular18"
                    >
                      Lorem ipsum dolor sit amet consectetur. Viverra lacinia
                      sed praesent pharetra quisque consectetur tellus elit.
                      Suspendisse ultrices vitae at platea. Euismod pretium sit
                      est etiam.
                    </Text>
                  </div>
                  <div className="absolute h-[431px] inset-[0] justify-center m-auto w-full">
                    <div className="h-[431px] m-auto w-full">
                      <Img
                        className="h-[431px] m-auto object-cover w-full"
                        src="images/img_dartboardperspective.png"
                        alt="dartboardperspe"
                      />
                      <Img
                        className="absolute bottom-[1%] h-[370px] object-cover right-[1%] w-1/4"
                        src="images/img_abstractgreen56_370x339.png"
                        alt="abstractgreenFiftySix_One"
                      />
                      <Img
                        className="absolute bottom-[3%] h-[203px] left-[0] object-cover w-[16%]"
                        src="images/img_abstractgreen56_370x339.png"
                        alt="abstractgreenFiftySix_Two"
                      />
                    </div>
                    <Button
                      className="!text-blue-900 absolute bottom-[24%] cursor-pointer font-medium left-[7%] min-w-[306px] rounded-lg text-center text-lg tracking-[0.72px]"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    >
                      15 Aug 23, 12:00 AM IST
                    </Button>
                  </div>
                </div>
                <Img
                  className="absolute h-[437px] inset-y-[0] my-auto object-cover right-[1%] w-[58%]"
                  src="images/img_clockfront.png"
                  alt="clockfront"
                />
              </div>
            </div>
          </div>
          <Text
            className="mt-[97px] md:text-5xl text-[64px] text-center text-orange-300"
            size="txtInterBold64"
          >
            <span className="text-blue_gray-700 font-inter font-bold">
              CAMPUS AMBASSADOR
            </span>
            <span className="text-orange-300 font-inter font-bold"> </span>
            <span className="text-blue_gray-700 font-inter font-bold">
              FORM
            </span>
          </Text>
          <Text
            className="mt-5 text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
            size="txtPoppinsMedium24Bluegray400"
          >
            Lorem Ipsum is simply dummy text of the printing.
          </Text>
          <div className="bg-amber-100 flex flex-col font-inter items-center justify-start max-w-[1222px] mt-[50px] mx-auto p-[72px] md:px-5 rounded-[49px] shadow-bs11 w-full">
            <div className="flex flex-col items-start justify-start mb-3 w-[98%] md:w-full">
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
                className="mt-[45px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                size="txtInterMedium36"
              >
                <span className="text-black-900 font-inter text-left font-medium">
                  First Name
                </span>
                <span className="text-red-600 font-inter text-left font-medium">
                  *
                </span>
              </Text>
              <div className="bg-white-A700 border border-black-900 border-solid h-[60px] mt-[22px] rounded-[10px] shadow-bs1 w-full"></div>
              <Text
                className="mt-[50px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                size="txtInterMedium36"
              >
                <span className="text-black-900 font-inter text-left font-medium">
                  Last Name
                </span>
                <span className="text-red-600 font-inter text-left font-medium">
                  *
                </span>
              </Text>
              <div className="bg-white-A700 border border-black-900 border-solid h-[60px] mt-[21px] rounded-[10px] shadow-bs1 w-full"></div>
              <Text
                className="mt-[58px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                size="txtInterMedium36"
              >
                <span className="text-black-900 font-inter text-left font-medium">
                  Email
                </span>
                <span className="text-red-500_01 font-inter text-left font-medium">
                  *
                </span>
              </Text>
              <div className="bg-white-A700 border border-black-900 border-solid h-[60px] mt-[27px] rounded-[10px] shadow-bs1 w-full"></div>
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
              <div className="bg-white-A700 border border-black-900 border-solid flex flex-row items-center justify-start mt-8 p-3.5 rounded-[10px] shadow-bs1 w-full">
                <Img
                  className="h-[26px] ml-8"
                  src="images/img_group1000001642_orange_400.svg"
                  alt="group1000001642"
                />
                <Text
                  className="ml-[18px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInterMedium24Black900"
                >
                  +91
                </Text>
                <Img
                  className="h-[9px] ml-[19px]"
                  src="images/img_offer.svg"
                  alt="offer"
                />
              </div>
              <Text
                className="mt-[51px] text-4xl sm:text-[32px] md:text-[34px] text-red-500_01"
                size="txtInterMedium36Red50001"
              >
                Institute name*
              </Text>
              <div className="bg-white-A700 border border-black-900 border-solid h-[60px] mt-[27px] rounded-[10px] shadow-bs1 w-full"></div>
              <Text
                className="mt-11 text-4xl sm:text-[32px] md:text-[34px] text-red-500_01"
                size="txtInterMedium36Red50001"
              >
                Type*
              </Text>
              <div className="flex md:flex-col flex-row gap-[31px] items-center justify-start mt-[35px] w-[86%] md:w-full">
                <Button
                  className="border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[266px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  College students
                </Button>
                <Button
                  className="border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[215px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  Professional
                </Button>
                <Button
                  className="border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[162px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  Fresher
                </Button>
                <Button
                  className="border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[162px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  Other
                </Button>
              </div>
              <Text
                className="mt-[41px] text-4xl sm:text-[32px] md:text-[34px] text-red-500_01"
                size="txtInterMedium36Red50001"
              >
                Programme*
              </Text>
              <div className="flex sm:flex-col flex-row gap-[45px] items-center justify-start mt-[35px] w-[38%] md:w-full">
                <Button
                  className="border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[173px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  Full-time
                </Button>
                <Button
                  className="border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[173px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  Part-time
                </Button>
              </div>
              <div className="flex flex-col gap-[21px] items-start justify-start mt-[42px] w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                  size="txtInterMedium36"
                >
                  <span className="text-black-900 font-inter text-left font-medium">
                    Any message for us
                  </span>
                  <span className="text-red-A400_01 font-inter text-left font-medium">
                    *
                  </span>
                </Text>
                <div className="bg-white-A700 border border-black-900 border-solid h-[237px] rounded-[10px] w-full"></div>
              </div>
              <Button
                className="cursor-pointer font-semibold h-[72px] leading-[normal] mt-16 rounded-[36px] md:text-3xl sm:text-[28px] text-[32px] text-center w-[325px]"
                color="blue_gray_700"
                size="md"
                variant="fill"
              >
                Submit
              </Button>
            </div>
          </div>
          <div className="flex flex-row font-inter gap-[19px] items-end justify-end mt-[106px] md:px-5 w-[17%] md:w-full">
            <Text
              className="sm:text-[44px] md:text-[50px] text-[58px] text-center text-indigo-900 tracking-[-1.16px]"
              size="txtInterSemiBold58"
            >
              FAQ’s
            </Text>
            <Img
              className="h-[65px] mt-[7px]"
              src="images/img_ticket.svg"
              alt="ticket"
            />
          </div>
          <div className="flex md:flex-col flex-row font-inter md:gap-10 items-center justify-between max-w-[1354px] mt-12 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[26px] items-center justify-start w-[46%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-end p-7 sm:px-5 rounded-[16px] shadow-bs14 w-full">
                <div className="flex flex-col gap-[15px] items-start justify-start mt-2.5 w-[98%] md:w-full">
                  <div className="flex sm:flex-col flex-row font-inter sm:gap-14 items-start justify-between w-full">
                    <Text
                      className="leading-[28.00px] text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                      size="txtInterMedium22"
                    >
                      How can I become a Campus Ambassador?
                    </Text>
                    <div className="bg-indigo-900 flex flex-col items-center justify-start mb-[13px] p-3 rounded-lg">
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
              <List
                className="flex flex-col gap-[25px] items-center w-full"
                orientation="vertical"
              >
                <div className="bg-white-A700 flex flex-1 flex-row sm:gap-10 items-center justify-between p-[23px] sm:px-5 rounded-[16px] shadow-bs14 w-full">
                  <Text
                    className="text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                    size="txtInterMedium22"
                  >
                    Is this paid position?
                  </Text>
                  <div className="bg-gray-50 flex flex-col items-center justify-start mr-[11px] my-4 p-[11px] rounded-lg">
                    <Img
                      className="h-[18px] w-[19px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between p-[23px] sm:px-5 rounded-[16px] shadow-bs14 w-full">
                  <Text
                    className="text-[22px] text-blue_gray-900_04 text-center sm:text-lg md:text-xl tracking-[-0.44px]"
                    size="txtInterMedium22"
                  >
                    Do I need specific qualifications to apply?
                  </Text>
                  <div className="bg-gray-50 flex flex-col items-center justify-start mr-[11px] sm:mt-0 my-4 p-[11px] rounded-lg">
                    <Img
                      className="h-[18px] w-[19px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </div>
                </div>
              </List>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[49%] md:w-full">
              <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-10 gap-[158px] items-center justify-start p-[25px] sm:px-5 rounded-[16px] shadow-bs14 w-[95%] md:w-full">
                <Text
                  className="text-[22px] text-blue_gray-900_04 text-center sm:text-lg md:text-xl tracking-[-0.44px]"
                  size="txtInterMedium22"
                >
                  Will I receive training and support?{" "}
                </Text>
                <div className="bg-gray-50 flex flex-col items-center justify-start sm:mt-0 my-3.5 p-[11px] rounded-lg w-[8%] sm:w-full">
                  <Img
                    className="h-[18px] w-[19px]"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                </div>
              </div>
              <div className="bg-white-A700 flex sm:flex-col flex-row gap-[27px] items-center justify-start mt-[23px] p-[25px] sm:px-5 rounded-[16px] shadow-bs14 w-[95%] md:w-full">
                <Text
                  className="mb-1 sm:mt-0 mt-[11px] text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl tracking-[-0.44px] w-[85%] sm:w-full"
                  size="txtInterMedium22"
                >
                  What are the responsibilities of a campus ambassador?
                </Text>
                <div className="bg-gray-50 flex flex-col items-center justify-start sm:mt-0 my-3.5 p-[11px] rounded-lg w-[8%] sm:w-full">
                  <Img
                    className="h-[18px] w-[19px]"
                    src="images/img_plus.svg"
                    alt="plus_One"
                  />
                </div>
              </div>
              <div className="bg-white-A700 h-[122px] md:h-[77px] mt-[23px] p-[25px] sm:px-5 relative rounded-[16px] shadow-bs14 w-[95%] md:w-full">
                <div className="absolute bg-gray-50 flex flex-col h-max inset-y-[0] items-center justify-start my-auto p-[11px] right-[7%] rounded-lg w-[8%]">
                  <Img
                    className="h-[18px] w-[19px]"
                    src="images/img_plus.svg"
                    alt="plus_Two"
                  />
                </div>
                <Text
                  className="absolute bottom-[24%] left-[20%] text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl tracking-[-0.44px] w-[87%] sm:w-full"
                  size="txtInterMedium22"
                >
                  What are the benefits of being a campus ambassador?
                </Text>
              </div>
              <Img
                className="h-24 md:ml-[0] ml-[554px] mt-3 w-[97px]"
                src="images/img_airplane.svg"
                alt="airplane"
              />
            </div>
          </div>
          <Footer1 className="flex font-inter items-center justify-center mt-[149px] md:px-5 w-full" />
          <Img
            className="h-px mt-[972px] w-px"
            src="images/img_vector_1x1.svg"
            alt="vector_Six"
          />
        </div>
      </div>
    </>
  );
};

export default CampusambassadorpagePage;
