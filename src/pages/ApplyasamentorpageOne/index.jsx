import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer1 from "components/Footer1";
import Header4 from "components/Header4";

import { CloseSVG } from "../../assets/images";

const ApplyasamentorpageOnePage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <Header4 className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="md:h-[1811px] h-[950px] sm:h-[955px] max-w-[1398px] mt-[5px] mx-auto md:px-5 relative w-full">
            <div className="md:h-[1806px] h-[950px] m-auto w-full">
              <div className="md:h-[1806px] h-[950px] m-auto w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex md:flex-col flex-row gap-[11px] items-start justify-between w-full">
                    <div className="flex flex-col justify-start md:mt-0 mt-[101px]">
                      <Text
                        className="ml-4 md:ml-[0] md:text-5xl text-[70px] text-black-900 text-justify"
                        size="txtInterBlack70"
                      >
                        <span className="text-blue_gray-700 font-inter font-black">
                          Become a
                        </span>
                        <span className="text-black-900 font-inter font-black">
                          {" "}
                        </span>
                        <span className="text-orange-400_01 font-inter font-black">
                          Mentor
                        </span>
                      </Text>
                      <Img
                        className="h-[60px] mt-[432px]"
                        src="images/img_grid.svg"
                        alt="grid"
                      />
                      <Img
                        className="h-[172px] md:h-auto md:ml-[0] ml-[41px] mt-[97px] object-cover w-[172px]"
                        src="images/img_abstractblue56.png"
                        alt="abstractblueFiftySix"
                      />
                    </div>
                    <Img
                      className="h-[885px] md:h-auto mb-16 object-cover rounded-bl-[20px] rounded-br-[20px]"
                      src="images/img_inheroheader.png"
                      alt="inheroheader"
                    />
                  </div>
                </div>
                <div className="absolute bottom-[7%] flex flex-col items-start justify-start left-[1%] w-[54%]">
                  <Text
                    className="leading-[87.00px] md:text-5xl text-[64px] text-blue-800_ad w-[95%] sm:w-full"
                    size="txtInterMedium64Blue800ad"
                  >
                    & Guide ThinkWht Talent!
                  </Text>
                  <Text
                    className="leading-[40.00px] mt-[21px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 w-full"
                    size="txtInterRegular32"
                  >
                    Join the clan of mentors & leverage our ~6 Mn+ communityto
                    share learnings with them 1:1 through your vastexperience.
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[293px] mt-[58px] rounded-[20px] text-2xl md:text-[22px] text-center sm:text-xl"
                    color="blue_gray_700_03"
                    size="xl"
                    variant="fill"
                  >
                    Apply Now
                  </Button>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[147px] items-end justify-end mt-[75px] p-2 w-[87%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_group432.svg')",
                    }}
                  >
                    <div className="bg-gradient15  h-[115px] mr-[38px] mt-3.5 outline outline-[1px] rotate-[-90deg] rounded-bl-[58px] rounded-br-[57px] rounded-tl-[58px] rounded-tr-[57px] shadow-bs22 w-[83%] white_A700_gray_900_00_border"></div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute bottom-[4%] h-[207px] left-[12%] object-cover w-[14%]"
                src="images/img_image_207x190.png"
                alt="image_Two"
              />
            </div>
            <div className="absolute bottom-[10%] flex flex-col md:gap-10 gap-[121px] justify-start left-[24%] w-[17%]">
              <Img
                className="h-[70px] md:h-auto ml-1.5 md:ml-[0] object-cover w-[71px] sm:w-full"
                src="images/img_circledplay.png"
                alt="circledplay"
              />
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_05"
                  size="txtInterBlack32Bluegray90005"
                >
                  1:1 Mentorship
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-indigo-400_04 sm:text-xl"
                  size="txtInterRegular24Indigo40004"
                >
                  Sessions
                </Text>
              </div>
            </div>
          </div>
          <div className="h-[237px] sm:h-[328px] md:h-[823px] max-w-[1066px] mt-[91px] mx-auto md:px-5 relative w-full">
            <div className="absolute bg-gradient15  bottom-[24%] h-[94px] inset-x-[0] mx-auto rotate-[-90deg] rounded-[20px] shadow-bs22 w-full"></div>
            <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-end justify-center m-auto w-[93%]">
              <Img
                className="h-56 sm:h-auto md:mt-0 mt-[13px] object-cover w-[24%] md:w-full"
                src="images/img_09.png"
                alt="Nine"
              />
              <Img
                className="h-[231px] sm:h-auto md:ml-[0] ml-[142px] md:mt-0 mt-1.5 object-cover w-[27%] md:w-full"
                src="images/img_01.png"
                alt="One_One"
              />
              <Img
                className="h-[237px] sm:h-auto md:ml-[0] ml-[100px] object-cover w-[26%] md:w-full"
                src="images/img_07.png"
                alt="Seven"
              />
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[968px] mx-auto md:px-5 w-full">
            <Text
              className="md:text-5xl text-[64px] text-blue_gray-800_08"
              size="txtInterBlack64Bluegray80008"
            >
              <span className="text-blue_gray-700 font-inter text-left font-black">
                400
              </span>
              <span className="text-blue_gray-800_08 font-inter text-left font-black">
                +
              </span>
            </Text>
            <Text
              className="sm:ml-[0] ml-[201px] md:text-5xl text-[64px] text-blue_gray-800_08"
              size="txtInterBlack64Bluegray80008"
            >
              2100+
            </Text>
            <Text
              className="sm:ml-[0] ml-[150px] md:text-5xl text-[64px] text-blue_gray-800_08"
              size="txtInterBlack64Bluegray80008"
            >
              2000+
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-4xl mt-[3px] mx-auto md:px-5 w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-indigo-400_04"
              size="txtInterRegular36Indigo40004"
            >
              Mentors
            </Text>
            <Text
              className="sm:ml-[0] ml-[242px] text-4xl sm:text-[32px] md:text-[34px] text-indigo-400_04"
              size="txtInterRegular36Indigo40004"
            >
              Students
            </Text>
            <Text
              className="ml-52 sm:ml-[0] text-4xl sm:text-[32px] md:text-[34px] text-indigo-400_04"
              size="txtInterRegular36Indigo40004"
            >
              Sessions
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1236px] mt-[106px] mx-auto md:px-5 w-full">
            <Text
              className="md:text-5xl text-[64px] text-black-900"
              size="txtInterSemiBold64Black900"
            >
              <span className="text-blue_gray-700 font-inter text-left font-semibold">
                Join our
              </span>
              <span className="text-black-900 font-inter text-left font-semibold">
                {" "}
              </span>
              <span className="text-orange-400_01 font-inter text-left font-semibold">
                Mentors
              </span>
              <span className="text-black-900 font-inter text-left font-semibold">
                {" "}
              </span>
              <span className="text-orange-300 font-inter text-left font-semibold">
                !
              </span>
            </Text>
            <Img
              className="h-12 w-[104px]"
              src="images/img_frame41.svg"
              alt="frameFortyOne"
            />
          </div>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[83px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1276px] mt-[81px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div
              className="bg-cover bg-no-repeat flex flex-1 flex-col h-[505px] items-center justify-end p-[15px] shadow-bs1 w-full"
              style={{
                backgroundImage: "url('images/img_group1000001627.svg')",
              }}
            >
              <div className="flex flex-col items-center justify-start mt-[19px] w-[65%] md:w-full">
                <Img
                  className="h-[344px] md:h-auto object-cover w-full"
                  src="images/img_89e2c87aa9cf710.png"
                  alt="89e2c87aa9cf710"
                />
                <Text
                  className="mt-[15px] text-2xl md:text-[22px] text-blue_gray-700_04 text-center sm:text-xl"
                  size="txtInterSemiBold24"
                >
                  Mr. Mukul Goyal
                </Text>
                <Text
                  className="mt-[3px] text-black-900_7f text-center text-lg"
                  size="txtInterMedium18Black9007f"
                >
                  Mentor - Marketing
                </Text>
                <Img
                  className="h-[31px] mt-[9px] w-[31px]"
                  src="images/img_flatcoloriconsgoogle.svg"
                  alt="flatcoloriconsg"
                />
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-1 flex-col h-[505px] items-center justify-end p-[15px] shadow-bs1 w-full"
              style={{
                backgroundImage: "url('images/img_group1000001628.svg')",
              }}
            >
              <div className="flex flex-col items-center justify-start mt-4 w-[74%] md:w-full">
                <Img
                  className="h-[344px] md:h-auto object-cover w-full"
                  src="images/img_551a79b81ca3d42.png"
                  alt="551a79b81ca3dFortyTwo"
                />
                <Text
                  className="mt-[18px] text-2xl md:text-[22px] text-blue_gray-700_04 text-center sm:text-xl"
                  size="txtInterSemiBold24"
                >
                  Mr. Mukul Goyal
                </Text>
                <Text
                  className="mt-[3px] text-black-900_7f text-center text-lg"
                  size="txtInterMedium18Black9007f"
                >
                  Mentor - Marketing
                </Text>
                <Img
                  className="h-[31px] mt-[9px] w-[31px]"
                  src="images/img_flatcoloriconsgoogle.svg"
                  alt="flatcoloriconsg"
                />
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-1 flex-col h-[505px] items-center justify-start pb-[15px] px-[15px] shadow-bs1 w-full"
              style={{
                backgroundImage: "url('images/img_group1000001627.svg')",
              }}
            >
              <div className="flex flex-col justify-start w-[83%] md:w-full">
                <Img
                  className="h-[375px] sm:h-auto object-cover w-full"
                  src="images/img_81ac9ef6456e8ec.png"
                  alt="81ac9ef6456e8ec"
                />
                <Text
                  className="md:ml-[0] ml-[42px] mt-[18px] text-2xl md:text-[22px] text-blue_gray-700_04 text-center sm:text-xl"
                  size="txtInterSemiBold24"
                >
                  Mr. Mukul Goyal
                </Text>
                <Text
                  className="md:ml-[0] ml-[51px] mt-[3px] text-black-900_7f text-center text-lg"
                  size="txtInterMedium18Black9007f"
                >
                  Mentor - Marketing
                </Text>
                <Img
                  className="h-[31px] md:ml-[0] ml-[109px] mt-[9px] w-[31px]"
                  src="images/img_flatcoloriconsgoogle.svg"
                  alt="flatcoloriconsg"
                />
              </div>
            </div>
          </List>
          <Text
            className="md:ml-[0] ml-[126px] mt-28 md:text-5xl text-[64px] text-center text-orange-300"
            size="txtInterBold64"
          >
            <span className="text-orange-300 font-inter font-bold">
              Become a ThinkWht{" "}
            </span>
            <span className="text-blue_gray-700 font-inter font-bold">
              Mentor
            </span>
          </Text>
          <Img
            className="h-[29px] md:ml-[0] ml-[135px] mt-4"
            src="images/img_loremipsumissimply.svg"
            alt="loremipsumissim"
          />
          <div className="bg-amber-100 flex flex-col items-center justify-start max-w-[1222px] mt-[75px] mx-auto p-[9px] md:px-5 rounded-[49px] shadow-bs11 w-full">
            <div className="flex flex-col justify-start mb-[116px] mt-[62px] w-[99%] md:w-full">
              <Text
                className="md:ml-[0] ml-[43px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                size="txtInterRegular36"
              >
                <span className="text-blue-800_01 font-inter text-left font-normal">
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
              <div className="md:h-[455px] h-[475px] mt-[43px] relative w-full">
                <div className="absolute md:h-[412px] h-[463px] inset-[0] justify-center m-auto w-full">
                  <div className="bg-white-A700 h-[404px] ml-[347px] mt-2 rounded-[210px] w-[36%]"></div>
                  <div
                    className="absolute bg-cover bg-no-repeat md:h-[323px] h-[463px] inset-[0] justify-center m-auto p-11 md:px-10 sm:px-5 w-full"
                    style={{
                      backgroundImage: "url('images/img_group431.svg')",
                    }}
                  >
                    <Img
                      className="absolute h-[323px] left-[37%] object-cover top-[10%] w-[21%]"
                      src="images/img_toyfacestansparentbg29.png"
                      alt="toyfacestanspar"
                    />
                    <div className="absolute bg-white-A700 bottom-[11%] flex flex-col items-center justify-start p-[18px] right-[40%] rounded-[45px] w-[8%]">
                      <Img
                        className="h-10 my-[7px]"
                        src="images/img_camera_orange_300.svg"
                        alt="camera"
                      />
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute bottom-[0] left-[5%] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                  size="txtInterMedium36"
                >
                  <span className="text-black-900 font-inter text-left font-medium">
                    First Name
                  </span>
                  <span className="text-red-600 font-inter text-left font-medium">
                    *
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[54px] mt-[22px] w-[89%] md:w-full">
                <div className="bg-white-A700 border border-black-900 border-solid h-[60px] rounded-[10px] shadow-bs1 w-full"></div>
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
                    src="images/img_group1000001642.svg"
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
                  className="mt-[61px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                  size="txtInterMedium36"
                >
                  <span className="text-black-900 font-inter text-left font-medium">
                    Current Organization/Institute name
                  </span>
                  <span className="text-red-500_02 font-inter text-left font-medium">
                    *
                  </span>
                </Text>
                <div className="bg-white-A700 border border-black-900 border-solid h-[60px] mt-[21px] rounded-[10px] shadow-bs1 w-full"></div>
                <Text
                  className="mt-[61px] text-4xl sm:text-[32px] md:text-[34px] text-red-500_02"
                  size="txtInterMedium36Red50002"
                >
                  Industry*
                </Text>
                <div className="bg-white-A700 border border-black-900 border-solid h-[60px] mt-[21px] rounded-[10px] shadow-bs1 w-full"></div>
                <Text
                  className="mt-14 text-4xl sm:text-[32px] md:text-[34px] text-red-500_02"
                  size="txtInterMedium36Red50002"
                >
                  Work experience*
                </Text>
                <div className="bg-white-A700 border border-black-900 border-solid h-[60px] mt-[21px] rounded-[10px] shadow-bs1 w-full"></div>
                <Text
                  className="mt-[52px] text-4xl sm:text-[32px] md:text-[34px] text-red-500_02"
                  size="txtInterMedium36Red50002"
                >
                  Linkedin link*
                </Text>
                <div className="bg-white-A700 border border-black-900 border-solid h-[60px] mt-[25px] rounded-[10px] shadow-bs1 w-full"></div>
                <Text
                  className="mt-14 text-4xl sm:text-[32px] md:text-[34px] text-red-500_02"
                  size="txtInterMedium36Red50002"
                >
                  Language*
                </Text>
                <div className="flex md:flex-col flex-row gap-11 items-center justify-start mt-[21px] w-[59%] md:w-full">
                  <Button
                    className="border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[174px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Hindi
                  </Button>
                  <Button
                    className="border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[174px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    English
                  </Button>
                  <Button
                    className="border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[174px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Other
                  </Button>
                </div>
                <Text
                  className="mt-[52px] text-4xl sm:text-[32px] md:text-[34px] text-red-500_02"
                  size="txtInterMedium36Red50002"
                >
                  Skills*
                </Text>
                <div className="bg-white-A700 border border-black-900 border-solid h-[60px] mt-[25px] rounded-[10px] shadow-bs1 w-full"></div>
                <Text
                  className="mt-[71px] text-4xl sm:text-[32px] md:text-[34px] text-red-500_02"
                  size="txtInterMedium36Red50002"
                >
                  Bio/About you*
                </Text>
                <div className="bg-white-A700 border border-black-900 border-solid h-[448px] mt-[30px] rounded-[10px] shadow-bs1 w-full"></div>
                <Button
                  className="cursor-pointer font-semibold h-[72px] leading-[normal] mt-[69px] rounded-[36px] md:text-3xl sm:text-[28px] text-[32px] text-center w-[325px]"
                  color="blue_gray_700"
                  size="md"
                  variant="fill"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[116px] mt-[166px] md:text-5xl text-[64px] text-center text-orange-300"
            size="txtInterBold64"
          >
            <span className="text-orange-300 font-inter font-bold">
              Steps to become a{" "}
            </span>
            <span className="text-blue_gray-700 font-inter font-bold">
              Mentor
            </span>
          </Text>
          <Text
            className="md:ml-[0] ml-[118px] mt-1 text-blue_gray-400 text-xl"
            size="txtInterRegular20"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <div className="md:gap-10 gap-[146px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-between max-w-[1192px] mt-[91px] mx-auto md:px-5 w-full">
            <Img
              className="flex-1 h-3.5 w-full"
              src="images/img_tutor.svg"
              alt="tutor"
            />
            <Img
              className="flex-1 h-3.5 w-full"
              src="images/img_tutor.svg"
              alt="tutor_One"
            />
            <Img
              className="flex-1 h-3.5 w-full"
              src="images/img_tutor.svg"
              alt="tutor_Two"
            />
          </div>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[155px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:ml-[0] ml-[9px] mt-2 md:px-5 w-[92%]"
            orientation="horizontal"
          >
            <div className="h-[347px] relative w-full">
              <div className="h-[237px] ml-auto mr-[55px] w-[52%]">
                <div className="bg-gradient16  h-[237px] m-auto rounded-[118px] w-full"></div>
                <div className="absolute h-[211px] inset-y-[0] my-auto right-[0] w-[90%]">
                  <div className="bg-gradient16  h-[211px] m-auto rounded-[105px] w-full"></div>
                  <div className="absolute bg-gradient16  h-[177px] inset-y-[0] left-[3%] my-auto rounded-[88px] w-[84%]"></div>
                </div>
              </div>
              <Img
                className="absolute h-[347px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_womanworkingat.png"
                alt="womanworkingat"
              />
            </div>
            <div className="h-[332px] relative w-full">
              <div className="h-[237px] ml-[5px] w-[72%]">
                <div className="bg-gradient16  h-[237px] m-auto rounded-[118px] w-full"></div>
                <div className="absolute h-[211px] inset-y-[0] my-auto right-[0] w-[90%]">
                  <div className="bg-gradient16  h-[211px] m-auto rounded-[105px] w-full"></div>
                  <div className="absolute bg-gradient16  h-[177px] inset-y-[0] left-[3%] my-auto rounded-[88px] w-[84%]"></div>
                </div>
              </div>
              <Img
                className="absolute h-[332px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_guyworkingona.png"
                alt="guyworkingona"
              />
            </div>
            <div className="h-[341px] relative w-full">
              <div className="h-[237px] md:h-[244px] ml-0.5 mt-[7px] w-[87%]">
                <div className="bg-gradient16  h-[237px] m-auto rounded-[118px] w-full"></div>
                <div className="absolute h-[211px] inset-y-[0] my-auto right-[0] w-[90%]">
                  <div className="bg-gradient16  h-[211px] m-auto rounded-[105px] w-full"></div>
                  <div className="absolute bg-gradient16  h-[177px] inset-y-[0] left-[3%] my-auto rounded-[88px] w-[84%]"></div>
                </div>
              </div>
              <Img
                className="absolute h-[341px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_manandwomanworking.png"
                alt="manandwomanwork"
              />
            </div>
          </List>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center max-w-[1048px] mt-[9px] mx-auto md:px-5 w-full">
            <Img
              className="sm:flex-1 h-[152px] md:h-auto sm:mt-0 mt-0.5 object-cover w-[6%] sm:w-full"
              src="images/img_1_152x58.png"
              alt="One_Two"
            />
            <Img
              className="h-[53px] sm:ml-[0] ml-[57px]"
              src="images/img_vector143.svg"
              alt="vector143"
            />
            <Img
              className="sm:flex-1 h-[152px] md:h-auto sm:ml-[0] ml-[52px] object-cover w-[8%] sm:w-full"
              src="images/img_2_152x81.png"
              alt="Two"
            />
            <Img
              className="h-[53px] ml-11 sm:ml-[0]"
              src="images/img_vector144.svg"
              alt="vector144"
            />
            <Img
              className="sm:flex-1 h-[152px] md:h-auto mb-0.5 sm:ml-[0] ml-[41px] object-cover w-[8%] sm:w-full"
              src="images/img_3.png"
              alt="Three"
            />
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start max-w-[1173px] mt-2.5 mx-auto md:px-5 w-full">
            <Text
              className="mb-1.5 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-700"
              size="txtInterRegular32Bluegray700"
            >
              Fill the form
            </Text>
            <Text
              className="sm:ml-[0] ml-[238px] sm:mt-0 mt-1.5 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-700"
              size="txtInterRegular32Bluegray700"
            >
              Share all your details{" "}
            </Text>
            <Text
              className="mb-[5px] sm:ml-[0] ml-[200px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-700"
              size="txtInterRegular32Bluegray700"
            >
              Become Mentor{" "}
            </Text>
          </div>
          <div className="flex flex-row gap-[21px] items-center justify-end md:ml-[0] ml-[645px] mt-36 md:px-5 w-[17%] md:w-full">
            <Text
              className="sm:text-[44px] md:text-[50px] text-[58px] text-center text-indigo-900 tracking-[-1.16px]"
              size="txtInterSemiBold58"
            >
              FAQ’s
            </Text>
            <Img
              className="h-[65px]"
              src="images/img_ticket.svg"
              alt="ticket"
            />
          </div>
          <div className="flex md:flex-col flex-row gap-[45px] items-end justify-end md:ml-[0] ml-[74px] mt-[11px] md:px-5 w-[95%] md:w-full">
            <div className="flex flex-col gap-3 justify-start w-[49%] md:w-full">
              <Text
                className="md:ml-[0] ml-[529px] text-white-A700 text-xl"
                size="txtInterSemiBold20"
              >
                Our Products
              </Text>
              <div className="flex flex-col gap-[26px] items-center justify-start mr-[37px] w-[95%] md:w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-end p-7 sm:px-5 rounded-[16px] shadow-bs14 w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start mt-[11px] w-[98%] md:w-full">
                    <div className="flex sm:flex-col flex-row font-inter sm:gap-[57px] items-start justify-between w-full">
                      <Text
                        className="leading-[28.00px] sm:mt-0 mt-1 text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                        size="txtInterMedium22"
                      >
                        What qualifications or experience do I need to become a
                        mentor?
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
                <List
                  className="flex flex-col gap-[25px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 flex flex-1 flex-row sm:gap-10 items-center justify-between p-[23px] sm:px-5 rounded-[16px] shadow-bs14 w-full">
                    <Text
                      className="text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                      size="txtInterMedium22"
                    >
                      How do I become a mentor?
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
                      What happens after I submit my application?
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
            </div>
            <div className="flex flex-col items-start justify-start md:mt-0 mt-[37px] w-[49%] md:w-full">
              <div className="flex h-[122px] sm:h-[177px] justify-end relative w-[95%] md:w-full">
                <Img
                  className="h-px mb-2 ml-auto mr-5 mt-auto w-px"
                  src="images/img_vector_1x1.svg"
                  alt="vector_Three"
                />
                <div className="absolute bg-white-A700 flex sm:flex-col flex-row sm:gap-10 h-full inset-[0] items-center justify-between m-auto p-[31px] sm:px-5 rounded-[16px] shadow-bs14 w-full">
                  <Text
                    className="text-[22px] text-blue_gray-900_04 text-center sm:text-lg md:text-xl tracking-[-0.44px]"
                    size="txtInterMedium22"
                  >
                    Is there any selection process for mentors?
                  </Text>
                  <div className="bg-gray-50 flex flex-col items-center justify-start mr-2.5 sm:mt-0 my-2 p-[11px] rounded-lg">
                    <Img
                      className="h-[18px] w-[19px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </div>
                </div>
              </div>
              <List
                className="flex flex-col gap-[23px] mt-[23px] w-[95%]"
                orientation="vertical"
              >
                <div className="bg-white-A700 flex sm:flex-col flex-row gap-[27px] items-center justify-start p-[25px] sm:px-5 rounded-[16px] shadow-bs14 w-full">
                  <Text
                    className="sm:flex-1 mb-1 sm:mt-0 mt-[11px] text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl tracking-[-0.44px] w-[85%] sm:w-full"
                    size="txtInterMedium22"
                  >
                    Is there any cost associated with becoming a mentor?
                  </Text>
                  <div className="bg-gray-50 flex sm:flex-1 flex-col items-center justify-start sm:mt-0 my-3.5 p-[11px] rounded-lg w-[8%] sm:w-full">
                    <Img
                      className="h-[18px] w-[19px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-[49px] items-center justify-between p-[29px] sm:px-5 rounded-[16px] shadow-bs14 w-full">
                  <Text
                    className="text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl tracking-[-0.44px]"
                    size="txtInterMedium22"
                  >
                    How long does the mentorship program last?
                  </Text>
                  <div className="bg-gray-50 flex flex-col items-center justify-start mr-3 sm:mt-0 my-2.5 p-[11px] rounded-lg">
                    <Img
                      className="h-[18px] w-[19px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </div>
                </div>
              </List>
              <Img
                className="h-24 md:ml-[0] ml-[554px] mt-3 w-[97px]"
                src="images/img_airplane.svg"
                alt="airplane"
              />
            </div>
          </div>
          <Footer1 className="flex items-center justify-center mt-[173px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ApplyasamentorpageOnePage;
