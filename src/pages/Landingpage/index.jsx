import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";
import LandingPageThreeObjectother04 from "components/LandingPageThreeObjectother04";

import { CloseSVG } from "../../assets/images";

const LandingpagePage = () => {
  const [group237897value, setGroup237897value] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 h-[13773px] mx-auto relative w-full">
        <div className="absolute flex flex-col inset-x-[0] justify-start mx-auto top-[0] w-full">
          <Header1 className="bg-white-A700 flex flex-col font-inter items-center justify-center md:px-5 shadow-bs7 w-full" />
          <div className="bg-blue_gray-700 font-inter md:h-[1222px] h-[1441px] md:px-5 relative rounded-bl-[20px] rounded-br-[20px] w-[1440px] md:w-full">
            <div className="absolute bg-gray-300 bottom-[0] h-[1222px] right-[0] rounded-tl-[200px] rounded-tr-[200px] w-[27%]"></div>
            <div className="absolute bg-gray-300_01 bottom-[0] h-[586px] left-[19%] rounded-tl-[200px] rounded-tr-[200px] w-[27%]"></div>
            <div className="flex flex-col h-full items-start justify-start ml-[120px] mt-[120px] w-[54%]">
              <Text
                className="leading-[83.00px] md:ml-[0] ml-[3px] md:text-5xl text-[80px] text-black-900"
                size="txtPoppinsSemiBold80"
              >
                <span className="text-white-A700 font-inter text-left font-bold">
                  Give the Best Start to
                </span>
                <span className="text-white-A700 font-inter text-left font-extrabold">
                  {" "}
                </span>
                <span className="text-orange-300 font-inter text-left font-extrabold">
                  Your Career
                </span>
                <span className="text-blue-300 font-inter text-left font-extrabold">
                  <>
                    {" "}
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-left font-normal">
                  <>
                    <br />
                  </>
                </span>
              </Text>
              <Text
                className="md:ml-[0] ml-[3px] mt-11 sm:text-4xl md:text-[38px] text-[40px] text-justify text-white-A700"
                size="txtInterMedium40"
              >
                <span className="text-white-A700 font-inter font-medium">
                  WHAT IS THINK
                </span>
                <span className="text-orange-300 font-inter font-medium">
                  WHT
                </span>
                <span className="md:text-5xl text-orange-300 font-inter text-[64px] font-black">
                  ?
                </span>
              </Text>
              <Text
                className="md:ml-[0] ml-[3px] mt-[26px] text-2xl md:text-[22px] text-justify text-white-A700_f9 sm:text-xl w-full"
                size="txtInterLight24"
              >
                Thinkwht is an innovative and user-friendly educational course
                website that aims to empower learners of all ages and
                backgrounds with a diverse range of knowledge and skills. The
                platform is designed to provide a seamless and enriching
                learning experience through its wide array of courses, catering
                to various subjects and disciplines.
              </Text>
              <div className="flex sm:flex-col flex-row font-lato gap-[23px] items-center justify-start mt-[29px] w-[56%] md:w-full">
                <Button
                  className="!text-white-A700 cursor-pointer font-black leading-[normal] rounded-[15px] text-center text-xl w-[203px]"
                  color="orange_300"
                  size="lg"
                  variant="fill"
                >
                  Training
                </Button>
                <div className="bg-white-A700 border border-black-900_2b border-solid flex flex-col items-center justify-center sm:px-5 px-[30px] py-[18px] rounded-[15px] w-[207px]">
                  <Text
                    className="text-center text-orange-300 text-xl w-auto"
                    size="txtLatoBlack20"
                  >
                    Internship
                  </Text>
                </div>
              </div>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex md:flex-col flex-row md:gap-10 h-full inset-[0] items-start justify-between m-auto pt-2.5 px-2.5 w-[1440px] md:w-full"
              style={{ backgroundImage: "url('images/img_group856.svg')" }}
            >
              <div className="flex flex-col gap-[5px] items-end justify-start md:ml-[0] ml-[17px] md:mt-0 mt-[1293px] w-[12%] md:w-full">
                <div className="flex flex-row gap-1.5 items-center justify-start w-[92%] md:w-full">
                  <Img
                    className="h-5 md:h-auto object-cover w-5"
                    src="images/img_pngroundplay.png"
                    alt="pngroundplay"
                  />
                  <Text
                    className="text-white-A700 text-xl tracking-[0.40px]"
                    size="txtInterMedium20"
                  >
                    Watch Video
                  </Text>
                </div>
                <div className="bg-white-A700_cc flex flex-col font-nunitosans items-center justify-end p-1.5 rounded-[20px] w-full">
                  <div className="flex flex-row gap-1.5 items-center justify-between w-[95%] md:w-full">
                    <Img
                      className="h-6"
                      src="images/img_calendar_light_blue_400_24x26.svg"
                      alt="calendar"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-700 sm:text-xl tracking-[0.48px]"
                        size="txtNunitoSansBold24"
                      >
                        250k
                      </Text>
                      <Text
                        className="text-blue_gray-700_01 text-sm tracking-[0.28px]"
                        size="txtNunitoSansSemiBold14"
                      >
                        Assisted Student
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[995px] md:mt-0 mt-[436px] relative w-[65%] md:w-full">
                <div className="absolute bottom-[29%] flex flex-row items-start justify-between left-[2%] w-[48%]">
                  <div className="backdrop-opacity-[0.5] bg-blue_gray-900_87 blur-[200.00px] h-[136px] mt-[89px] rounded-[68px] w-[30%]"></div>
                  <div className="h-[187px] md:h-[225px] mb-[38px] relative w-[47%]">
                    <div className="backdrop-opacity-[0.5] bg-white-A700_87 blur-[200.00px] h-[187px] m-auto rounded-[101px] w-full"></div>
                    <div className="absolute backdrop-opacity-[0.5] bg-white-A700_31 blur-[200.00px] h-[187px] inset-[0] justify-center m-auto rounded-[101px] w-full"></div>
                  </div>
                </div>
                <div className="absolute backdrop-opacity-[0.5] bg-blue_gray-900_87 blur-[200.00px] bottom-[4%] h-[187px] right-[10%] rounded-[101px] w-[23%]"></div>
                <div className="backdrop-opacity-[0.5] bg-blue_gray-900_87 blur-[200.00px] h-[265px] ml-auto mr-[68px] rounded-[132px] w-1/4"></div>
                <Img
                  className="absolute h-[995px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_108304b187ad563.png"
                  alt="108304b187ad563"
                />
              </div>
            </div>
          </div>
          <div className="font-poppins md:h-[854px] h-[902px] max-w-[1398px] md:ml-[0] ml-[19px] mt-[33px] md:px-5 relative w-full">
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-[609px] inset-x-[0] items-start justify-start mx-auto p-[39px] sm:px-5 top-[0] w-full"
              style={{ backgroundImage: "url('images/img_group852.svg')" }}
            >
              <div className="flex flex-col justify-start mb-[222px] mt-[67px] w-[47%] md:w-full">
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px]">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-orange-300"
                    size="txtPoppinsBold50"
                  >
                    Have any queries ?
                  </Text>
                  <Text
                    className="leading-[83.00px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                    size="txtPoppinsMedium24"
                  >
                    Get a free councelling session from our campus
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-7 items-start justify-start mt-[5px] w-[83%] md:w-full">
                  <Img
                    className="h-28 md:h-auto sm:mt-0 mt-2 object-cover w-[111px] sm:w-full"
                    src="images/img_call2.png"
                    alt="callTwo"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="leading-[83.00px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                      size="txtPoppinsRegular24"
                    >
                      Call us on our troll fee number
                    </Text>
                    <Text
                      className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsRegular24"
                    >
                      1800-123-3598
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-amber-100 bottom-[0] flex flex-col font-inter items-center justify-start p-[39px] sm:px-5 right-[3%] rounded-[49px] shadow-bs11 w-1/2">
              <div className="h-[270px] md:h-[275px] mt-1.5 relative w-[99%] md:w-full">
                <div className="flex flex-col gap-[19px] h-full items-start justify-start mx-auto w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                    size="txtInterMedium36"
                  >
                    <span className="text-black-900 font-inter text-left font-medium">
                      Name
                    </span>
                    <span className="text-red-A400 font-inter text-left font-medium">
                      *
                    </span>
                  </Text>
                  <div className="bg-white-A700 border border-black-900 border-solid h-[59px] rounded-[10px] w-full"></div>
                </div>
                <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                    size="txtInterMedium36"
                  >
                    <span className="text-black-900 font-inter text-left font-medium">
                      Name
                    </span>
                    <span className="text-red-A400 font-inter text-left font-medium">
                      *
                    </span>
                  </Text>
                  <div className="bg-white-A700 border border-black-900 border-solid h-[59px] mt-[19px] rounded-[10px] w-full"></div>
                  <Text
                    className="mt-6 text-4xl sm:text-[32px] md:text-[34px] text-red-A400"
                    size="txtInterMedium36RedA400"
                  >
                    Email Id*
                  </Text>
                  <div className="bg-white-A700 border border-black-900 border-solid h-[59px] mt-5 rounded-[10px] w-full"></div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start mt-[26px] w-[99%] md:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                  size="txtInterMedium36"
                >
                  <span className="text-black-900 font-inter text-left font-medium">
                    Contact Number
                  </span>
                  <span className="text-red-A400 font-inter text-left font-medium">
                    *
                  </span>
                </Text>
                <div className="bg-white-A700 border border-black-900 border-solid h-[59px] mt-5 rounded-[10px] w-full"></div>
                <Text
                  className="mt-6 text-4xl sm:text-[32px] md:text-[34px] text-red-A400"
                  size="txtInterMedium36RedA400"
                >
                  Course Name*
                </Text>
                <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-end justify-start mt-5 p-[25px] sm:px-5 rounded-[10px] w-full">
                  <Img
                    className="h-[9px] mr-[15px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] mb-[30px] min-w-[605px] md:min-w-full mt-[52px] rounded-[10px] text-4xl sm:text-[32px] md:text-[34px] text-center"
                color="blue_gray_700"
                size="xl"
                variant="fill"
              >
                Request a call back
              </Button>
            </div>
          </div>
          <div className="font-inter h-[190px] md:h-[269px] sm:h-[475px] mt-[79px] md:px-5 relative w-full">
            <div className="flex flex-col h-full items-center justify-center ml-[113px] my-auto w-[326px]">
              <Text
                className="max-w-[326px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                size="txtInterMedium24"
              >
                Accomplished Educators from Leading Enterprises:
              </Text>
            </div>
            <div className="absolute border border-gray-400 border-solid flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-center justify-center m-auto p-[58px] md:px-10 sm:px-5 w-full">
              <Img
                className="sm:flex-1 h-[71px] md:h-auto sm:mt-0 mt-[3px] object-cover w-[16%] sm:w-full"
                src="images/img_image104.png"
                alt="image104"
              />
              <Img
                className="sm:flex-1 h-[65px] md:h-auto ml-7 sm:ml-[0] object-cover w-[13%] sm:w-full"
                src="images/img_image102.png"
                alt="image102"
              />
              <Img
                className="sm:flex-1 h-[49px] md:h-auto sm:ml-[0] ml-[66px] object-cover w-[12%] sm:w-full"
                src="images/img_image103.png"
                alt="image103"
              />
              <Img
                className="sm:flex-1 h-[35px] md:h-auto sm:ml-[0] ml-[66px] mr-[109px] object-cover w-[10%] sm:w-full"
                src="images/img_uberlogoremovebgpreview.png"
                alt="uberlogoremoveb"
              />
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[401px] mt-[81px] md:text-5xl text-[64px] text-center text-orange-300"
            size="txtInterBold64"
          >
            TRAINING COURSES
          </Text>
          <div className="flex md:flex-col flex-row font-inter md:gap-5 items-start justify-start max-w-[1401px] ml-6 md:ml-[0] mt-[100px] md:px-5 w-full">
            <Img
              className="h-[43px] md:mt-0 mt-[265px] rounded-[5px]"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
            <div className="bg-blue_gray-900 h-[540px] mb-1 md:ml-[0] ml-[25px] pt-[68px] relative rounded-[20px] w-[29%] md:w-full">
              <Text
                className="mb-[-9px] ml-[60px] sm:text-[31px] md:text-[33px] text-[35px] text-white-A700 w-[33%] sm:w-full z-[1]"
                size="txtInterBold35"
              >
                UI/UX Design
              </Text>
              <Button
                className="!text-black-900 border border-black-900_19 border-solid capitalize cursor-pointer font-medium leading-[normal] mb-[undefinedpx] min-w-[147px] ml-auto mr-[19px] mt-auto text-[15.75px] text-center z-[1]"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                explore now
              </Button>
              <div className="md:h-[390px] h-[393px] mt-auto mx-auto w-full">
                <Img
                  className="absolute bottom-[0] h-[238px] inset-x-[0] mx-auto object-cover rounded-[20px] w-full"
                  src="images/img_7f8bf600d4564d9.png"
                  alt="7f8bf600d4564dNine"
                />
                <Img
                  className="absolute h-[390px] inset-y-[0] left-[0] my-auto object-cover w-[89%]"
                  src="images/img_6840a500ac1f010.png"
                  alt="6840a500ac1f010"
                />
              </div>
            </div>
            <div className="bg-blue_gray-900 flex md:flex-1 flex-col md:gap-10 gap-[89px] justify-end mb-1 md:ml-[0] ml-[46px] pt-[63px] rounded-[20px] w-[29%] md:w-full">
              <Text
                className="ml-9 md:ml-[0] mr-[7px] sm:text-[31px] md:text-[33px] text-[35px] text-white-A700 w-[90%] sm:w-full"
                size="txtInterBold35"
              >
                Frontend Development
              </Text>
              <div className="h-[309px] relative w-full">
                <div className="absolute bottom-[0] h-[238px] inset-x-[0] mx-auto w-full">
                  <Img
                    className="h-[238px] m-auto object-cover rounded-[20px] w-full"
                    src="images/img_7f8bf600d4564d9.png"
                    alt="7f8bf600d4564dNine_One"
                  />
                  <div className="absolute bg-white-A700 border border-black-900_19 border-solid bottom-[13%] flex flex-col items-center justify-end sm:px-5 px-[26.25px] py-[13.12px] right-[3%] rounded-md w-auto">
                    <Text
                      className="capitalize text-[15.75px] text-black-900 w-auto"
                      size="txtInterMedium1575"
                    >
                      explore now
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-3/4">
                  <Img
                    className="h-[309px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                    src="images/img_90d36e79ca71c63.png"
                    alt="90d36e79ca71cSixtyThree"
                  />
                </div>
              </div>
            </div>
            <div className="md:h-[540px] h-[544px] md:ml-[0] ml-[45px] relative w-[29%] md:w-full">
              <div className="absolute md:h-[540px] h-[544px] inset-[0] justify-center m-auto w-[99%] sm:w-full">
                <div className="md:h-[540px] h-[544px] m-auto w-full">
                  <div className="absolute bg-blue_gray-900 h-[540px] inset-[0] justify-center m-auto rounded-[20px] w-full"></div>
                  <Img
                    className="absolute bottom-[0] h-[238px] inset-x-[0] mx-auto object-cover rounded-[20px] w-full"
                    src="images/img_7f8bf600d4564d9.png"
                    alt="7f8bf600d4564dNine_Two"
                  />
                </div>
                <Img
                  className="absolute bottom-[1%] h-[387px] left-[0] object-cover w-[69%]"
                  src="images/img_5559c46bed4b410.png"
                  alt="5559c46bed4b410"
                />
              </div>
              <Text
                className="absolute right-[0] sm:text-[31px] md:text-[33px] text-[35px] text-white-A700 top-[12%] w-[89%] sm:w-full"
                size="txtInterBold35"
              >
                Backend Development
              </Text>
              <Button
                className="!text-black-900 absolute border border-black-900_19 border-solid bottom-[6%] capitalize cursor-pointer font-medium leading-[normal] min-w-[147px] right-[7%] text-[15.75px] text-center"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                explore now
              </Button>
            </div>
            <Img
              className="h-[43px] ml-5 md:ml-[0] md:mt-0 mt-[266px] rounded-[5px]"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-center md:ml-[0] ml-[657px] mt-[78px] md:px-5 w-[9%] md:w-full">
            <div className="bg-blue_gray-700 h-3 rounded-md w-[31%]"></div>
            <div className="bg-gray-400_01 h-3.5 rounded-[50%] w-3.5"></div>
            <div className="bg-gray-400_01 h-3.5 rounded-[50%] w-3.5"></div>
            <div className="bg-gray-400_01 h-3.5 rounded-[50%] w-3.5"></div>
          </div>
          <div className="font-inter h-[402px] md:h-[433px] mt-[31px] md:px-5 relative w-full">
            <div
              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[296px] inset-x-[0] items-end justify-start mx-auto p-[66px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group854.svg')" }}
            >
              <div className="flex flex-col gap-9 items-start justify-start mb-0.5 mr-2.5">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-justify text-white-A700 w-full"
                  size="txtInterBlack36"
                >
                  Training your way to success and Apply to jobs with confidence
                </Text>
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                  size="txtInterMedium30"
                >
                  Learn, Grow and get Hired!
                </Text>
              </div>
            </div>
            <Img
              className="absolute h-[402px] inset-y-[0] left-[4%] my-auto object-cover w-[28%]"
              src="images/img_cd038fc3ed09f3e.png"
              alt="cd038fc3ed09f3e"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[105px] mt-[107px] text-blue_gray-600 text-lg uppercase"
            size="txtPoppinsSemiBold18"
          >
            Testimonials
          </Text>
          <div className="font-inter h-[154px] md:h-[172px] md:ml-[0] ml-[105px] mt-[18px] md:px-5 relative w-[71%] md:w-full">
            <Text
              className="capitalize m-auto md:text-5xl text-[64px] text-blue_gray-900_01 text-justify"
              size="txtInterBold64Bluegray90001"
            >
              <>
                What students have to say
                <br />
                about us
              </>
            </Text>
            <Img
              className="absolute bottom-[0] h-[57px] left-[34%] object-cover w-[9%]"
              src="images/img_casuallife3d.png"
              alt="casuallife3d"
            />
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-start justify-end md:ml-[0] ml-[469px] mt-[41px] md:px-5 w-[64%] md:w-full">
            <Img
              className="h-[41px] md:mt-0 mt-[154px] rounded-[5px]"
              src="images/img_arrowleft.svg"
              alt="arrowleft_One"
            />
            <div className="sm:h-[272px] h-[335px] md:h-[408px] md:ml-[0] ml-[13px] relative w-[91%] md:w-full">
              <div className="absolute bottom-[0] h-64 md:h-[231px] right-[0] w-[96%] md:w-full">
                <div className="absolute backdrop-opacity-[0.5] bg-orange-300 blur-[500.00px] bottom-[0] h-[205px] right-[0] rounded-[102px] w-[21%]"></div>
                <div className="absolute bg-white-A700 h-[231px] inset-x-[0] mx-auto outline outline-[1px] outline-black-900 rounded-[10px] shadow-bs10 top-[0] w-full"></div>
              </div>
              <div className="absolute bg-white-A700 flex flex-col items-center justify-start left-[0] p-9 sm:px-5 rounded-[10px] shadow-bs10 top-[0] w-[96%]">
                <div className="flex md:flex-col flex-row gap-[26px] items-start justify-start mb-10 mt-2.5 w-[99%] md:w-full">
                  <div className="flex h-[130px] justify-end relative w-[18%] md:w-full">
                    <div className="bg-blue_gray-700 h-[92px] mt-auto mx-auto rounded-[48px] w-[81%]"></div>
                    <Img
                      className="absolute h-[130px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_373ff491701d97e.png"
                      alt="373ff491701d97e"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start md:mt-0 mt-[18px]">
                    <Text
                      className="text-blue_gray-600 text-lg"
                      size="txtPoppinsSemiBold18"
                    >
                      Mike taylor
                    </Text>
                    <Text
                      className="mt-[3px] text-blue_gray-600 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Pune, Maharashtra
                    </Text>
                    <Text
                      className="leading-[32.00px] mt-[15px] text-base text-blue_gray-600 w-full"
                      size="txtPoppinsMedium16"
                    >
                      “On the Windows talking painted pasture yet its express
                      parties use. Sure last upon he same as knew next. Of
                      believed or diverted no.”
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="h-[43px] md:ml-[0] ml-[18px] md:mt-0 mt-[154px] rounded-[5px]"
              src="images/img_arrowright.svg"
              alt="arrowright_One"
            />
          </div>
          <div className="bg-gradient3  h-[421px] md:h-[541px] mt-[120px] pl-[25px] md:px-5 relative w-full">
            <div className="absolute h-[421px] inset-y-[0] my-auto right-[0] w-[62%] md:w-full">
              <div className="h-[421px] m-auto w-full">
                <Img
                  className="absolute bottom-[0] h-[174px] left-[0] rounded-[10px]"
                  src="images/img_vector_white_a700_174x782.svg"
                  alt="vector_One"
                />
                <Img
                  className="absolute h-[421px] inset-y-[0] my-auto object-cover right-[0] rounded-[10px]"
                  src="images/img_vector_421x650.png"
                  alt="vector_Two"
                />
              </div>
              <Img
                className="absolute h-[410px] inset-y-[0] left-[26%] my-auto object-cover w-[44%]"
                src="images/img_studebnt13.png"
                alt="studebntThirteen"
              />
            </div>
            <Img
              className="absolute bottom-[0] h-[403px] object-cover right-[14%] w-[28%]"
              src="images/img_studebnt12.png"
              alt="studebntTwelve"
            />
            <div className="absolute flex flex-col font-montserrat gap-2 justify-start left-[6%] top-[3%] w-[17%]">
              <Img
                className="h-[70px] md:h-auto object-cover w-[39%] sm:w-full"
                src="images/img_thinkwhatlogohighfinal_70x90.png"
                alt="thinkwhatlogohi_One"
              />
              <Text
                className="ml-2.5 md:ml-[0] text-sm text-white-A700 tracking-[0.28px] uppercase"
                size="txtMontserratRomanMedium14"
              >
                India’s No.1 online Classes
              </Text>
            </div>
            <Text
              className="absolute bg-clip-text bg-gradient4  leading-[60.00px] left-[2%] sm:text-[40px] md:text-[46px] text-[50px] text-transparent top-[28%] tracking-[1.00px] uppercase w-1/2 sm:w-full"
              size="txtMontserratRomanBold50"
            >
              pLACEMENT GUARANTEE PROGRAMME
            </Text>
            <Text
              className="absolute bottom-[27%] leading-[26.00px] left-[2%] text-[13px] text-justify text-white-A700 tracking-[0.26px] w-[47%] sm:w-full"
              size="txtPoppinsRegular13"
            >
              Flexible Easy To Access Learning Opportunities Can Bring A
              Significant Change In How Individuals Prefer To Learn! Upheed Can
              Offer You To Enjoy The Beauty Of ELearning!
            </Text>
            <Button
              className="!text-white-A700 absolute bottom-[16%] cursor-pointer font-medium font-poppins h-[38px] leading-[normal] left-[2%] rounded-[10px] text-[15px] text-center w-[137px]"
              color="orange_300"
              size="xs"
              variant="fill"
            >
              Get Started
            </Button>
          </div>
          <Text
            className="md:ml-[0] ml-[177px] mt-[125px] md:text-5xl text-[64px] text-blue_gray-900_02 text-center"
            size="txtInterBold64Bluegray90002"
          >
            Placement Guarantee Programme{" "}
          </Text>
          <Text
            className="md:ml-[0] ml-[78px] mt-[22px] text-2xl md:text-[22px] text-black-900_66 text-justify sm:text-xl w-[88%] sm:w-full"
            size="txtInterRegular24"
          >
            <>
              Placement guarantee ensures that upon successful completion of a
              program or course, you&#39;ll be placed in a job or internship
              relevant to your field of study, providing valuable career
              opportunities and real-world experience.
            </>
          </Text>
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between max-w-[1257px] md:ml-[0] ml-[93px] mt-[34px] md:px-5 w-full">
            <div className="flex flex-col relative w-[28%] md:w-full">
              <div className="md:h-[350px] h-[694px] mx-auto w-full">
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[99%]">
                  <div className="h-[350px] relative w-full">
                    <div className="absolute h-[350px] inset-[0] justify-center m-auto w-full">
                      <div className="h-[350px] m-auto w-full">
                        <div className="absolute bg-amber-200 bottom-[7%] flex flex-col inset-x-[0] items-center justify-end mx-auto pt-[31px] sm:px-5 px-[31px] rounded-[20px] w-[99%]">
                          <Img
                            className="h-px mt-[241px]"
                            src="images/img_group10140.svg"
                            alt="group10140"
                          />
                        </div>
                        <Img
                          className="absolute h-[350px] inset-[0] justify-center m-auto"
                          src="images/img_vector2.svg"
                          alt="vectorTwo"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[7%] h-[273px] inset-x-[0] mx-auto object-cover w-[99%]"
                        src="images/img_codebughd4.png"
                        alt="codebughdFour"
                      />
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[6%] flex flex-col h-[94px] inset-x-[0] items-center justify-start mx-auto p-[13px] w-[99%]"
                      style={{
                        backgroundImage: "url('images/img_group862.png')",
                      }}
                    >
                      <div className="flex flex-col gap-3 items-center justify-start w-[85%] md:w-full">
                        <Img
                          className="h-[5px]"
                          src="images/img_arrowup.svg"
                          alt="arrowup"
                        />
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-black-900 text-xl"
                              size="txtPoppinsBold20"
                            >
                              Java Script
                            </Text>
                            <Input
                              name="frame228"
                              placeholder="Learn More"
                              className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-white-A700 sm:h-auto text-[8px] text-center w-full"
                              wrapClassName="w-[57%]"
                              shape="round"
                              color="blue_gray_700"
                              size="xs"
                              variant="fill"
                            ></Input>
                          </div>
                          <Button
                            className="flex h-10 items-center justify-center mb-1.5 rounded-[10px] w-10"
                            color="white_A700"
                            size="xs"
                            variant="fill"
                          >
                            <Img src="images/img_volume.svg" alt="volume" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[99%]">
                  <div className="md:h-[272px] h-[351px] relative w-full">
                    <div className="md:h-[272px] h-[351px] m-auto w-full">
                      <div className="absolute bg-blue_gray-100 bottom-[7%] h-[272px] inset-x-[0] mx-auto rounded-[20px] w-[99%]"></div>
                      <div
                        className="absolute bg-cover bg-no-repeat flex md:h-[223px] h-[351px] inset-[0] justify-end m-auto p-1.5 w-[99%]"
                        style={{
                          backgroundImage: "url('images/img_vector2.svg')",
                        }}
                      >
                        <Img
                          className="h-[5px] mb-[95px] mt-auto mx-auto"
                          src="images/img_arrowup.svg"
                          alt="arrowup_One"
                        />
                        <Img
                          className="absolute h-[223px] object-cover right-[2%] top-[15%] w-[81%]"
                          src="images/img_prompthd1.png"
                          alt="prompthdOne"
                        />
                      </div>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[7%] flex flex-col h-[93px] inset-x-[0] items-center justify-start mx-auto p-[13px] w-[99%]"
                      style={{
                        backgroundImage: "url('images/img_group864.png')",
                      }}
                    >
                      <div className="flex flex-row items-center justify-between w-[89%] md:w-full">
                        <div className="flex flex-col gap-1.5 justify-start w-[52%]">
                          <Img
                            className="h-[5px] md:ml-[0] ml-[132px]"
                            src="images/img_arrowup.svg"
                            alt="arrowup_Two"
                          />
                          <div className="flex flex-col gap-1.5 items-start justify-start mr-[11px] w-[93%] md:w-full">
                            <Text
                              className="text-black-900 text-xl"
                              size="txtPoppinsBold20"
                            >
                              Mern - Stack{" "}
                            </Text>
                            <Input
                              name="frame231"
                              placeholder="Learn More"
                              className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-white-A700 sm:h-auto text-[8px] text-center w-full"
                              wrapClassName="w-1/2"
                              shape="round"
                              color="blue_gray_700"
                              size="xs"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                        <div className="bg-white-A700 h-10 md:h-11 mb-2.5 mt-[15px] p-1.5 relative rounded-[10px] w-10">
                          <div className="absolute md:h-[19px] h-[21px] inset-y-[0] my-auto right-[15%] w-[58%]">
                            <Img
                              className="absolute bottom-[0] h-[19px] right-[0] w-[19px]"
                              src="images/img_map.svg"
                              alt="map"
                            />
                            <Img
                              className="absolute h-4 left-[0] top-[0]"
                              src="images/img_vector_blue_gray_700_02.svg"
                              alt="vector_Three"
                            />
                          </div>
                          <Img
                            className="absolute h-4 left-[15%] top-[15%]"
                            src="images/img_vector_blue_gray_700_02_16x10.svg"
                            alt="vector_Four"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[-14.53px] mx-auto w-[98%] z-[1]">
                <div className="h-[347px] relative w-full">
                  <div className="h-[347px] m-auto w-full">
                    <div className="h-[347px] m-auto w-full">
                      <div className="absolute bg-amber-200 bottom-[7%] h-[272px] inset-x-[0] mx-auto rounded-[20px] w-full"></div>
                      <Img
                        className="absolute h-[347px] inset-[0] justify-center m-auto"
                        src="images/img_vector2.svg"
                        alt="vectorTwo_One"
                      />
                    </div>
                    <Img
                      className="absolute h-[245px] inset-y-[0] my-auto object-cover right-[0] w-4/5"
                      src="images/img_hackinghd1.png"
                      alt="hackinghdOne"
                    />
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[7%] flex flex-col h-[93px] inset-x-[0] items-center justify-start mx-auto p-[13px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group864.png')",
                    }}
                  >
                    <div className="flex flex-row items-center justify-between w-[89%] md:w-full">
                      <div className="flex flex-col gap-1.5 justify-start w-[52%]">
                        <Img
                          className="h-[5px] md:ml-[0] ml-[132px]"
                          src="images/img_arrowup.svg"
                          alt="arrowup_Three"
                        />
                        <div className="flex flex-col gap-1.5 items-start justify-start mr-[7px] w-[95%] md:w-full">
                          <Text
                            className="text-black-900 text-xl"
                            size="txtPoppinsBold20"
                          >
                            Data Science
                          </Text>
                          <Input
                            name="frame234"
                            placeholder="Learn More"
                            className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-white-A700 rotate-[-1deg] sm:h-auto text-[8px] text-center w-full"
                            wrapClassName="w-[49%]"
                            shape="round"
                            color="blue_gray_700"
                            size="xs"
                            variant="fill"
                          ></Input>
                        </div>
                      </div>
                      <div className="bg-white-A700 h-10 md:h-[43px] mb-2.5 mt-3.5 p-1.5 relative rounded-[10px] w-10">
                        <div className="absolute md:h-[19px] h-[21px] inset-y-[0] my-auto right-[15%] w-[58%]">
                          <Img
                            className="absolute bottom-[0] h-[19px] right-[0] w-[19px]"
                            src="images/img_map.svg"
                            alt="map_One"
                          />
                          <Img
                            className="absolute h-4 left-[0] top-[0]"
                            src="images/img_vector_blue_gray_700_02.svg"
                            alt="vector_Five"
                          />
                        </div>
                        <Img
                          className="absolute h-4 left-[15%] top-[15%]"
                          src="images/img_vector_blue_gray_700_02_16x10.svg"
                          alt="vector_Six"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:h-[350px] h-[693px] relative w-[28%] md:w-full">
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[99%]">
                <div className="md:h-[350px] h-[351px] relative w-full">
                  <div className="md:h-[350px] h-[351px] m-auto w-full">
                    <div className="absolute bg-blue_gray-900_33 bottom-[7%] h-[272px] inset-x-[0] mx-auto rounded-[20px] w-[99%]"></div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-1.5 w-[99%]"
                      style={{
                        backgroundImage: "url('images/img_vector2.svg')",
                      }}
                    >
                      <Img
                        className="h-[266px] md:h-auto mb-[25px] mt-[47px] object-cover w-[85%]"
                        src="images/img_createchatbothd.png"
                        alt="createchatbothd"
                      />
                    </div>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[7%] flex flex-col h-[93px] inset-x-[0] items-center justify-start mx-auto p-[11px] w-[99%]"
                    style={{
                      backgroundImage: "url('images/img_group862.png')",
                    }}
                  >
                    <div className="flex flex-col gap-3 items-center justify-start mb-[3px] w-[88%] md:w-full">
                      <Img
                        className="h-[5px]"
                        src="images/img_arrowup.svg"
                        alt="arrowup_Four"
                      />
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-col items-start justify-start w-[42%]">
                          <Text
                            className="text-black-900 text-xl"
                            size="txtPoppinsBold20"
                          >
                            Full - Stack{" "}
                          </Text>
                          <Input
                            name="frame229"
                            placeholder="Learn More"
                            className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-white-A700 sm:h-auto text-[8px] text-center w-full"
                            wrapClassName="mt-0.5 w-[58%]"
                            shape="round"
                            color="blue_gray_700"
                            size="xs"
                            variant="fill"
                          ></Input>
                        </div>
                        <div className="bg-white-A700 h-10 md:h-7 mb-1.5 mt-[3px] p-1.5 relative rounded-[10px] w-10">
                          <div className="absolute md:h-[19px] h-[21px] inset-y-[0] my-auto right-[15%] w-[58%]">
                            <Img
                              className="absolute bottom-[0] h-[19px] right-[0] w-[19px]"
                              src="images/img_map.svg"
                              alt="map_Two"
                            />
                            <Img
                              className="absolute h-4 left-[0] top-[0]"
                              src="images/img_vector_blue_gray_700_02.svg"
                              alt="vector_Seven"
                            />
                          </div>
                          <Img
                            className="absolute h-4 left-[15%] top-[15%]"
                            src="images/img_vector_blue_gray_700_02_16x10.svg"
                            alt="vector_Eight"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[97%]">
                <div className="h-[347px] relative w-full">
                  <div className="h-[347px] m-auto w-full">
                    <div className="h-[347px] m-auto w-full">
                      <div className="absolute bg-amber-200 bottom-[7%] h-[272px] inset-x-[0] mx-auto rounded-[20px] w-full"></div>
                      <Img
                        className="absolute h-[347px] inset-[0] justify-center m-auto"
                        src="images/img_vector2.svg"
                        alt="vectorTwo_Two"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[7%] h-[272px] object-cover right-[0] w-[272px]"
                      src="images/img_warningpassword.png"
                      alt="warningpassword"
                    />
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[7%] flex flex-col h-[93px] inset-x-[0] items-center justify-start mx-auto p-[13px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group864.png')",
                    }}
                  >
                    <div className="flex flex-col gap-[7px] items-center justify-start mb-0.5 w-[89%] md:w-full">
                      <Img
                        className="h-[5px]"
                        src="images/img_arrowup.svg"
                        alt="arrowup_Five"
                      />
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-col items-start justify-start w-[24%]">
                          <Text
                            className="text-black-900 text-xl"
                            size="txtPoppinsBold20"
                          >
                            BDA
                          </Text>
                          <Input
                            name="frame232"
                            placeholder="Learn More"
                            className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-white-A700 rotate-[-1deg] sm:h-auto text-[8px] text-center w-full"
                            wrapClassName="mt-1 w-full"
                            shape="round"
                            color="blue_gray_700"
                            size="xs"
                            variant="fill"
                          ></Input>
                        </div>
                        <div className="bg-white-A700 h-10 md:h-[30px] mb-[9px] mt-0.5 p-1.5 relative rounded-[10px] w-10">
                          <div className="absolute md:h-[19px] h-[21px] inset-y-[0] my-auto right-[15%] w-[58%]">
                            <Img
                              className="absolute bottom-[0] h-[19px] right-[0] w-[19px]"
                              src="images/img_map.svg"
                              alt="map_Three"
                            />
                            <Img
                              className="absolute h-4 left-[0] top-[0]"
                              src="images/img_vector_blue_gray_700_02.svg"
                              alt="vector_Nine"
                            />
                          </div>
                          <Img
                            className="absolute h-4 left-[15%] top-[15%]"
                            src="images/img_vector_blue_gray_700_02_16x10.svg"
                            alt="vector_Ten"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:h-[351px] h-[694px] relative w-[28%] md:w-full">
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[99%]">
                <div className="h-[351px] relative w-full">
                  <div className="h-[351px] m-auto w-full">
                    <div className="h-[351px] m-auto w-full">
                      <div className="absolute bg-amber-200 bottom-[7%] h-[272px] inset-x-[0] mx-auto rounded-[20px] w-[99%]"></div>
                      <Img
                        className="absolute h-[351px] inset-[0] justify-center m-auto"
                        src="images/img_vector2.svg"
                        alt="vectorTwo_Three"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[9%] h-[264px] inset-x-[0] mx-auto object-cover w-[99%]"
                      src="images/img_analyticsreport.png"
                      alt="analyticsreport"
                    />
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[7%] flex flex-col h-[93px] inset-x-[0] items-center justify-start mx-auto p-[11px] w-[99%]"
                    style={{
                      backgroundImage: "url('images/img_group862.png')",
                    }}
                  >
                    <div className="flex flex-col gap-3.5 items-center justify-start w-[88%] md:w-full">
                      <Img
                        className="h-[5px]"
                        src="images/img_arrowup.svg"
                        alt="arrowup_Six"
                      />
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-black-900 text-xl"
                            size="txtPoppinsBold20"
                          >
                            Dev Ops
                          </Text>
                          <Input
                            name="frame230"
                            placeholder="Learn More"
                            className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-white-A700 sm:h-auto text-[8px] text-center w-full"
                            wrapClassName="mt-[3px] w-[78%]"
                            shape="round"
                            color="blue_gray_700"
                            size="xs"
                            variant="fill"
                          ></Input>
                        </div>
                        <Button
                          className="flex h-10 items-center justify-center mb-2.5 rounded-[10px] w-10"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        >
                          <Img src="images/img_music.svg" alt="music" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[97%]">
                <div className="md:h-[345px] h-[347px] relative w-full">
                  <div className="md:h-[345px] h-[347px] m-auto w-full">
                    <div className="absolute bg-blue_gray-100 bottom-[7%] h-[272px] inset-x-[0] mx-auto rounded-[20px] w-full"></div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-[21px] sm:px-5 w-[99%]"
                      style={{
                        backgroundImage: "url('images/img_vector2.svg')",
                      }}
                    >
                      <Img
                        className="h-[235px] md:h-auto my-[34px] object-cover w-[88%]"
                        src="images/img_securedatahd.png"
                        alt="securedatahd"
                      />
                    </div>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[7%] flex flex-col h-[93px] inset-x-[0] items-center justify-start mx-auto p-[13px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group864.png')",
                    }}
                  >
                    <div className="flex flex-row items-center justify-between mb-0.5 w-[89%] md:w-full">
                      <div className="flex flex-col gap-[7px] justify-start w-[65%]">
                        <Img
                          className="h-[5px] md:ml-[0] ml-[132px]"
                          src="images/img_arrowup.svg"
                          alt="arrowup_Seven"
                        />
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-black-900 text-xl"
                            size="txtPoppinsBold20"
                          >
                            Human Resource
                          </Text>
                          <Input
                            name="frame233"
                            placeholder="Learn More"
                            className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-white-A700 rotate-[-1deg] sm:h-auto text-[8px] text-center w-full"
                            wrapClassName="mt-1 w-[38%]"
                            shape="round"
                            color="blue_gray_700"
                            size="xs"
                            variant="fill"
                          ></Input>
                        </div>
                      </div>
                      <div className="bg-white-A700 h-10 md:h-[42px] mb-[9px] mt-3.5 p-1.5 relative rounded-[10px] w-10">
                        <div className="absolute md:h-[19px] h-[21px] inset-y-[0] my-auto right-[15%] w-[58%]">
                          <Img
                            className="absolute bottom-[0] h-[19px] right-[0] w-[19px]"
                            src="images/img_map.svg"
                            alt="map_Four"
                          />
                          <Img
                            className="absolute h-4 left-[0] top-[0]"
                            src="images/img_vector_blue_gray_700_02.svg"
                            alt="vector_Eleven"
                          />
                        </div>
                        <Img
                          className="absolute h-4 left-[15%] top-[15%]"
                          src="images/img_vector_blue_gray_700_02_16x10.svg"
                          alt="vector_Twelve"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="font-inter h-[444px] md:h-[481px] sm:h-[687px] md:ml-[0] ml-[202px] mt-[37px] md:px-5 relative w-[79%] md:w-full">
            <div className="absolute bottom-[3%] flex flex-col gap-12 items-start justify-start left-[0] w-[567px] sm:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-[567px] sm:w-full">
                <Text
                  className="md:text-5xl text-[64px] text-blue_gray-900 tracking-[2.56px] w-auto"
                  size="txtInterBold64Bluegray900"
                >
                  Why We are Best
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[552px] md:max-w-full text-base text-gray-900 tracking-[0.64px]"
                  size="txtInterRegular16"
                >
                  Lorem ipsum dolor sit amet consectetur. Viverra lacinia sed
                  praesent pharetra quisque consectetur tellus elit. Suspendisse
                  ultrices vitae at platea. Euismod pretium sit est etiam.
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                <div className="gap-4 sm:gap-5 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700 border hover:border-0 border-blue_gray-100_01 border-solid hover:cursor-pointer flex flex-1 flex-row gap-4 items-center justify-start pl-6 pr-10 sm:px-5 py-4 rounded-lg hover:shadow-bs12 shadow-bs12 hover:w-full w-full">
                    <Button
                      className="flex h-10 items-center justify-center rounded-lg w-10"
                      color="blue_50"
                      size="xs"
                      variant="fill"
                    >
                      <Img src="images/img_frame57.png" alt="frameFiftySeven" />
                    </Button>
                    <Text
                      className="text-base text-gray-900 tracking-[0.64px] w-auto"
                      size="txtInterLight16"
                    >
                      Certification
                    </Text>
                  </div>
                  <div className="bg-white-A700 border hover:border-0 border-blue_gray-100_01 border-solid hover:cursor-pointer flex flex-1 flex-row gap-4 items-center justify-start pl-6 pr-10 sm:px-5 py-4 rounded-lg hover:shadow-bs12 hover:w-full w-full">
                    <Button
                      className="flex h-10 items-center justify-center rounded-lg w-10"
                      color="blue_50"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        src="images/img_frame57_40x40.png"
                        alt="frameFiftySeven"
                      />
                    </Button>
                    <Text
                      className="text-base text-gray-900 tracking-[0.64px] w-auto"
                      size="txtInterLight16"
                    >
                      Top Companies
                    </Text>
                  </div>
                  <div className="bg-white-A700 border hover:border-0 border-blue_gray-100_01 border-solid hover:cursor-pointer flex flex-1 flex-row gap-4 items-center justify-start pl-6 pr-10 sm:px-5 py-4 rounded-lg hover:shadow-bs12 hover:w-full w-full">
                    <Button
                      className="flex h-10 items-center justify-center rounded-lg w-10"
                      color="blue_50"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        src="images/img_frame57_1.png"
                        alt="frameFiftySeven"
                      />
                    </Button>
                    <Text
                      className="text-base text-gray-900 tracking-[0.64px] w-auto"
                      size="txtInterLight16"
                    >
                      No Extra Charge
                    </Text>
                  </div>
                  <div className="bg-white-A700 border hover:border-0 border-blue_gray-100_01 border-solid hover:cursor-pointer flex flex-1 flex-row gap-4 items-center justify-start pl-6 pr-10 sm:px-5 py-4 rounded-lg hover:shadow-bs12 hover:w-full w-full">
                    <Button
                      className="flex h-10 items-center justify-center rounded-lg w-10"
                      color="blue_50"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        src="images/img_frame57_2.png"
                        alt="frameFiftySeven"
                      />
                    </Button>
                    <Text
                      className="text-base text-gray-900 tracking-[0.64px] w-auto"
                      size="txtInterLight16"
                    >
                      Work Experience
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[51%]">
              <div className="flex flex-col items-center justify-start w-full">
                <LandingPageThreeObjectother04 className="h-[444px] sm:h-[650px] relative rotate-[180deg] w-full" />
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[463px] mt-[116px] text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center"
            size="txtInterBold48"
          >
            OUR TOP EDUCATORS
          </Text>
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 2 },
              1050: { items: 3 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="flex font-poppins gap-[77px] max-w-[1342px] md:ml-[0] ml-[49px] mt-[70px] md:px-5 w-full"
            items={[...Array(9)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="flex h-[498px] justify-end mx-2.5 relative">
                  <Text
                    className="mb-[35px] ml-[133px] mt-auto text-center text-white-A700 text-xl"
                    size="txtPoppinsMedium20"
                  >
                    Fine Arts
                  </Text>
                  <div className="absolute bg-white-A700 h-[498px] inset-[0] justify-center m-auto rounded-[20px] shadow-bs7 w-full">
                    <div className="h-[485px] m-auto w-[88%]">
                      <Img
                        className="h-[485px] m-auto object-cover w-full"
                        src="images/img_d005dbd521d642d.png"
                        alt="d005dbd521d642d"
                      />
                      <div className="absolute bottom-[14%] flex flex-col gap-1.5 inset-x-[0] items-center justify-start mx-auto w-[77%]">
                        <Text
                          className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                          size="txtPoppinsBold40"
                        >
                          Suchno Basu
                        </Text>
                        <div className="bg-white-A700 h-3 rounded-md w-[26%]"></div>
                      </div>
                    </div>
                    <div className="absolute bg-gradient5  flex flex-col h-full inset-[0] items-center justify-center m-auto pt-[13px] px-[13px] rounded-[20px] w-full">
                      <div className="h-[485px] relative w-[95%]">
                        <Img
                          className="h-[485px] m-auto object-cover w-full"
                          src="images/img_d005dbd521d642d_485x348.png"
                          alt="d005dbd521d642d_One"
                        />
                        <div className="absolute bottom-[16%] flex flex-col gap-1.5 items-center justify-start right-[8%] w-[77%]">
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                            size="txtPoppinsBold40"
                          >
                            Suchno Basu
                          </Text>
                          <div className="bg-white-A700 h-3 rounded-md w-[26%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer rounded-[50%] h-3 bg-blue_gray-800 w-2.5" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer rounded-[50%] h-3 bg-gray-300_02 w-2.5"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <PagerIndicator
            className="flex h-3 justify-center md:ml-[0] ml-[687px] mt-[50px] w-[75px]"
            count={3}
            activeCss="inline-block cursor-pointer rounded-[50%] h-3 bg-blue_gray-800 w-2.5"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-3 bg-gray-300_02 w-2.5"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block md:ml-[0] mx-[11.21px] sm:ml-[0]"
            unselectedWrapperCss="inline-block md:ml-[0] mx-[11.21px] sm:ml-[0]"
          />
        </div>
        <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-start mx-auto w-full">
          <div className="flex md:flex-col flex-row font-inter md:gap-5 items-center justify-end md:ml-[0] ml-[139px] md:px-5 w-[85%] md:w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="md:text-5xl text-[64px] text-blue_gray-900 text-center"
                size="txtInterBold64Bluegray900"
              >
                <span className="text-blue_gray-900 font-inter font-bold">
                  100
                </span>
                <span className="md:text-[44px] sm:text-[38px] text-blue_gray-900 font-inter text-5xl font-bold">
                  k
                </span>
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-blue-900_01 text-center sm:text-xl"
                size="txtInterRegular24Blue90001"
              >
                Active Users
              </Text>
            </div>
            <div className="flex flex-col justify-start mb-0.5 md:ml-[0] ml-[179px]">
              <Text
                className="md:text-5xl text-[64px] text-blue_gray-900 text-center"
                size="txtInterBold64Bluegray900"
              >
                <span className="text-blue_gray-900 font-inter font-bold">
                  100
                </span>
                <span className="md:text-[44px] sm:text-[38px] text-blue_gray-900 font-inter text-5xl font-bold">
                  k
                </span>
              </Text>
              <Text
                className="ml-2 md:ml-[0] text-2xl md:text-[22px] text-blue-900_01 text-center sm:text-xl"
                size="txtInterRegular24Blue90001"
              >
                Placed Students
              </Text>
            </div>
            <div className="flex flex-col items-end justify-start md:ml-[0] ml-[154px]">
              <Text
                className="mr-[3px] md:text-5xl text-[64px] text-blue_gray-900 text-center"
                size="txtInterBold64Bluegray900"
              >
                <span className="text-blue_gray-900 font-inter font-bold">
                  100
                </span>
                <span className="md:text-[44px] sm:text-[38px] text-blue_gray-900 font-inter text-5xl font-bold">
                  k
                </span>
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-blue-900_01 text-center sm:text-xl"
                size="txtInterRegular24Blue90001"
              >
                Daily Joining
              </Text>
            </div>
            <div className="flex flex-col justify-start md:ml-[0] ml-[206px]">
              <Text
                className="md:text-5xl text-[64px] text-blue_gray-900 text-center"
                size="txtInterBold64Bluegray900"
              >
                <span className="text-blue_gray-900 font-inter font-bold">
                  100
                </span>
                <span className="md:text-[44px] sm:text-[38px] text-blue_gray-900 font-inter text-5xl font-bold">
                  k
                </span>
              </Text>
              <Text
                className="md:ml-[0] ml-[11px] text-2xl md:text-[22px] text-blue-900_01 text-center sm:text-xl"
                size="txtInterRegular24Blue90001"
              >
                Total Students
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between max-w-[1387px] md:ml-[0] ml-[25px] mt-12 md:px-5 w-full">
            <Img
              className="h-px md:mt-0 mt-[350px] w-px"
              src="images/img_vector_gray_800_1x1.svg"
              alt="vector_Thirteen"
            />
            <div className="h-[479px] relative w-[38%] md:w-full">
              <div className="backdrop-opacity-[0.5] bg-orange-300 blur-[100.00px] h-[292px] ml-11 my-auto rounded-[146px] w-[291px]"></div>
              <Img
                className="absolute h-[479px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_69f8f990f32a229.png"
                alt="69f8f990f32a229"
              />
            </div>
            <div className="flex flex-col md:gap-10 gap-[73px] justify-start">
              <Img
                className="h-20 md:h-auto md:ml-[0] ml-[471px] object-cover w-[14%]"
                src="images/img_casuallife3d_80x97.png"
                alt="casuallife3d_One"
              />
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                <Button
                  className="!text-blue_gray-900 border border-orange-300 border-solid cursor-pointer font-bold leading-[normal] mb-16 min-w-[546px] sm:min-w-full rounded-[10px] text-5xl sm:text-[38px] md:text-[44px] text-center"
                  color="white_A700"
                  size="2xl"
                  variant="fill"
                >
                  COURSE REVIEW
                </Button>
                <Img
                  className="h-[104px] sm:mt-0 mt-[75px]"
                  src="images/img_group_gray_800.svg"
                  alt="group"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1324px] md:ml-[0] ml-[65px] mt-[67px] md:px-5 w-full">
            <div className="flex md:flex-col flex-row font-roboto md:gap-10 items-start justify-between w-full">
              <Img
                className="h-[43px] md:mt-0 mt-[106px] rounded-[5px]"
                src="images/img_arrowleft.svg"
                alt="arrowleft_Two"
              />
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState1}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 2 },
                }}
                onSlideChanged={(e) => {
                  setsliderState1(e?.item);
                }}
                ref={sliderRef1}
                className="flex gap-9"
                items={[...Array(8)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="bg-white-A700 flex flex-col items-center justify-start mx-2.5 p-3 rounded-tl-[20px] rounded-tr-[20px] shadow-bs7">
                      <div className="flex flex-col gap-[23px] justify-start mb-1 w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                          <Img
                            className="sm:flex-1 h-[145px] md:h-auto object-cover w-[29%] sm:w-full"
                            src="images/img_0289a5d6a23c0bb.png"
                            alt="0289a5d6a23c0bb"
                          />
                          <Text
                            className="leading-[156.50%] text-[19px] text-blue_gray-900 tracking-[0.38px]"
                            size="txtRobotoRomanRegular19"
                          >
                            <>
                              “Teachings of the great explore of truth, <br />
                              the master-builder of human happiness. <br />
                              no one rejects,dislikes, or avoids pleasure <br />
                              itself, pleasure itself”
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-row gap-4 items-start justify-start md:ml-[0] ml-[159px] w-[30%] md:w-full">
                          <Img
                            className="h-[47px] md:h-auto rounded-[50%] w-[47px]"
                            src="images/img_ellipse34.png"
                            alt="ellipseThirtyFour"
                          />
                          <div className="flex flex-col items-start justify-start mt-1">
                            <Text
                              className="text-[17px] text-blue_gray-900_03 tracking-[0.34px]"
                              size="txtRobotoRomanMedium17"
                            >
                              Finlay Kirk
                            </Text>
                            <Text
                              className="mt-1 text-[13px] text-black-900 tracking-[0.26px]"
                              size="txtRobotoRomanRegular13"
                            >
                              Web Developper
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer h-3 bg-blue_gray-900_05 w-[39px] rounded-md" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer rounded-[50%] h-3.5 bg-gray-400_01 w-3.5"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
              <Img
                className="h-[43px] md:mt-0 mt-[107px] rounded-[5px]"
                src="images/img_arrowright.svg"
                alt="arrowright_Two"
              />
            </div>
            <PagerIndicator
              className="flex h-3.5 justify-center mt-[79px] w-[126px]"
              count={4}
              activeCss="inline-block cursor-pointer h-3 bg-blue_gray-900_05 w-[39px] rounded-md"
              activeIndex={sliderState1}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-3.5 bg-gray-400_01 w-3.5"
              sliderRef={sliderRef1}
              selectedWrapperCss="inline-block md:ml-[0] mx-[7.50px] sm:ml-[0]"
              unselectedWrapperCss="inline-block md:ml-[0] mx-[7.50px] sm:ml-[0]"
            />
            <Button
              className="!text-blue_gray-900 border border-orange-200_01 border-solid cursor-pointer font-bold font-inter leading-[normal] min-w-[408px] sm:min-w-full mt-[149px] rounded-[20px] sm:text-4xl md:text-[38px] text-[40px] text-center"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              EVENTS
            </Button>
            <div className="font-inter h-[341px] sm:h-[431px] md:h-[800px] mt-[92px] relative w-[95%] md:w-full">
              <div className="absolute h-[339px] md:h-[708px] inset-[0] justify-center m-auto w-full">
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-end justify-end left-[0] my-auto p-[30px] sm:px-5 w-[48%]"
                  style={{ backgroundImage: "url('images/img_group853.svg')" }}
                >
                  <Img
                    className="h-[29px] mb-[60px] mt-[183px]"
                    src="images/img_refresh.svg"
                    alt="refresh"
                  />
                </div>
                <div className="absolute flex md:flex-col flex-row md:gap-10 h-full inset-[0] items-center justify-between m-auto w-full">
                  <div className="h-[336px] md:mt-0 mt-[3px] relative w-[48%] md:w-full">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[68px] h-max inset-[0] justify-center m-auto p-[13px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group873.png')",
                      }}
                    >
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px] mr-[260px] mt-[39px] w-[51%] md:w-full">
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
                          size="txtInterSemiBold36"
                        >
                          UI/UX CONTEST
                        </Text>
                        <Button
                          className="!text-black-900 border border-orange-200_01 border-solid capitalize cursor-pointer font-medium leading-[normal] min-w-[147px] mt-[27px] text-[15.75px] text-center"
                          shape="round"
                          color="white_A700"
                          size="sm"
                          variant="fill"
                        >
                          explore now
                        </Button>
                        <Img
                          className="h-[29px] ml-2 md:ml-[0] mt-[11px]"
                          src="images/img_refresh_gray_800.svg"
                          alt="refresh_One"
                        />
                      </div>
                      <Img
                        className="h-px mb-[39px] md:ml-[0] ml-[562px] w-px"
                        src="images/img_vector_gray_800_1x1.svg"
                        alt="vector_Fourteen"
                      />
                    </div>
                    <Img
                      className="absolute h-[336px] inset-y-[0] my-auto object-cover right-[1%] w-[52%]"
                      src="images/img_bff6430a8fa5890.png"
                      alt="bff6430a8fa5890"
                    />
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[335px] items-end justify-start p-[47px] md:px-10 sm:px-5 w-[48%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_group872.png')",
                    }}
                  >
                    <div className="flex flex-col justify-start mb-[67px] mt-[11px] w-[48%] md:w-full">
                      <Text
                        className="mr-2 text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
                        size="txtInterSemiBold36"
                      >
                        HACKATHON
                      </Text>
                      <Button
                        className="!text-black-900 border border-blue_gray-900 border-solid capitalize cursor-pointer font-medium leading-[normal] min-w-[147px] md:ml-[0] ml-[78px] mr-3.5 mt-[29px] text-[15.75px] text-center"
                        shape="round"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        explore now
                      </Button>
                      <Img
                        className="h-[29px] md:ml-[0] ml-[206px] mt-[13px]"
                        src="images/img_refresh.svg"
                        alt="refresh_Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[336px] inset-y-[0] my-auto object-cover right-[17%] w-[31%]"
                src="images/img_490f1e39dab1d74.png"
                alt="490f1e39dab1dSeventyFour"
              />
            </div>
          </div>
          <div className="bg-orange-200_01 flex flex-col items-center justify-start max-w-[1373px] mt-[119px] mx-auto p-[217px] md:px-5 rounded-[10px] w-full">
            <div className="flex flex-col items-center justify-start w-[15%] md:w-full">
              <Img
                className="h-[138px] md:h-auto object-cover w-full"
                src="images/img_image34.png"
                alt="imageThirtyFour"
              />
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[462px] mt-[89px] md:text-5xl text-[64px] text-blue_gray-900_02 text-center"
            size="txtInterBold64Bluegray90002"
          >
            Recent Blogpost
          </Text>
          <Text
            className="md:ml-[0] ml-[421px] mt-[11px] text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
            size="txtPoppinsMedium24Bluegray400"
          >
            Lorem Ipsum is simply dummy text of the printing.
          </Text>
          <List
            className="sm:flex-col flex-row font-inter md:gap-10 gap-[93px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1266px] md:ml-[0] ml-[87px] mt-[88px] md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="h-[500px] relative shadow-bs13 w-full">
              <Img
                className="h-[500px] m-auto object-cover w-full"
                src="images/img_image.png"
                alt="image"
              />
              <div className="absolute bottom-[8%] flex flex-col gap-[34px] inset-x-[0] items-start justify-start mx-auto w-[83%]">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[0.20px]"
                  size="txtInterBold28"
                >
                  Future of Work
                </Text>
                <Text
                  className="leading-[30.00px] text-white-A700 text-xl w-full"
                  size="txtInterMedium20"
                >
                  Majority of peole will work in jobs that don’t exist today.
                </Text>
                <div className="flex flex-row font-opensans items-center justify-between w-full">
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-row gap-3 items-start justify-between w-full">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_avatar.png"
                        alt="avatar"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start">
                        <Text
                          className="text-base text-white-A700"
                          size="txtOpenSansSemiBold16"
                        >
                          Lina Hicks
                        </Text>
                        <div className="flex flex-row gap-2 items-start justify-start w-full">
                          <div className="bg-teal-400 flex flex-col h-4 items-center justify-start p-1 rounded-[50%] w-4">
                            <Img
                              className="h-1"
                              src="images/img_icon.svg"
                              alt="icon"
                            />
                          </div>
                          <Text
                            className="italic text-sm text-white-A700"
                            size="txtOpenSansItalic14"
                          >
                            Verified writer
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="text-base text-right text-white-A700"
                    size="txtOpenSansSemiBold16"
                  >
                    02 May
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start shadow-bs13 w-full">
              <div className="h-[500px] relative w-full">
                <Img
                  className="h-[500px] m-auto object-cover rounded-[16px] w-full"
                  src="images/img_base.png"
                  alt="base"
                />
                <div className="absolute bg-gradient6  flex flex-col h-full inset-[0] items-center justify-center m-auto p-8 sm:px-5 rounded-[16px] w-full">
                  <div className="flex flex-col gap-[34px] items-start justify-start mb-2 mt-[239px] w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[0.20px]"
                      size="txtInterBold28"
                    >
                      Future of Data
                    </Text>
                    <Text
                      className="leading-[30.00px] text-white-A700 text-xl w-full"
                      size="txtInterMedium20"
                    >
                      Thanks to never-ending piles of data & the amount of
                      insight
                    </Text>
                    <div className="flex flex-row font-opensans items-center justify-between w-full">
                      <div className="flex flex-col items-center justify-start pt-0.5">
                        <div className="flex flex-row gap-3 items-start justify-between w-full">
                          <Img
                            className="h-10 md:h-auto rounded-[50%] w-10"
                            src="images/img_avatar_40x40.png"
                            alt="avatar"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-base text-white-A700"
                              size="txtOpenSansSemiBold16"
                            >
                              Tyler Murray
                            </Text>
                            <div className="flex flex-row gap-2 items-start justify-start mt-[3px] w-full">
                              <div className="bg-teal-400 flex flex-col h-4 items-center justify-start p-1 rounded-[50%] w-4">
                                <Img
                                  className="h-1"
                                  src="images/img_icon.svg"
                                  alt="icon"
                                />
                              </div>
                              <Text
                                className="italic text-sm text-white-A700"
                                size="txtOpenSansItalic14"
                              >
                                Verified writer
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="text-base text-right text-white-A700"
                        size="txtOpenSansSemiBold16"
                      >
                        02 May
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[500px] relative shadow-bs13 w-full">
              <Img
                className="h-[500px] m-auto object-cover w-full"
                src="images/img_image_500x360.png"
                alt="image"
              />
              <div className="absolute bottom-[8%] flex flex-col inset-x-[0] items-start justify-start mx-auto w-[83%]">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[0.20px]"
                  size="txtInterBold28"
                >
                  Future of Learning
                </Text>
                <Text
                  className="leading-[30.00px] mt-[31px] text-white-A700 text-xl w-full"
                  size="txtInterMedium20"
                >
                  A constant ability to learn will be on the most crucial skills
                </Text>
                <div className="flex flex-row font-opensans items-center justify-between mt-9 w-full">
                  <div className="flex flex-col items-center justify-start pt-0.5">
                    <div className="flex flex-row gap-3 items-start justify-between w-full">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_avatar_1.png"
                        alt="avatar"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-white-A700"
                          size="txtOpenSansSemiBold16"
                        >
                          Warren Casey
                        </Text>
                        <div className="flex flex-row gap-2 items-start justify-start mt-[3px] w-full">
                          <div className="bg-teal-400 flex flex-col h-4 items-center justify-start p-1 rounded-[50%] w-4">
                            <Img
                              className="h-1"
                              src="images/img_icon.svg"
                              alt="icon"
                            />
                          </div>
                          <Text
                            className="italic text-sm text-white-A700"
                            size="txtOpenSansItalic14"
                          >
                            Verified writer
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="text-base text-right text-white-A700"
                    size="txtOpenSansSemiBold16"
                  >
                    02 May
                  </Text>
                </div>
              </div>
            </div>
          </List>
          <Button
            className="cursor-pointer flex h-[70px] items-center justify-center md:ml-[0] ml-[572px] mr-[548px] mt-[98px] rounded-[5px] w-80"
            rightIcon={
              <Img
                className="h-[25px] mt-px mb-1 ml-[11px]"
                src="images/img_maximize.svg"
                alt="maximize"
              />
            }
            shape="round"
            color="blue_800"
            size="lg"
            variant="fill"
          >
            <div className="font-inter font-medium leading-[normal] md:text-[22px] sm:text-xl text-2xl text-left">
              View all Blogs{" "}
            </div>
          </Button>
          <div className="flex flex-col font-inter items-center justify-start max-w-[1355px] md:ml-[0] ml-[63px] mt-[98px] md:px-5 w-full">
            <div className="flex flex-col gap-[49px] items-center justify-start w-full">
              <div className="flex flex-row gap-6 items-start justify-center w-[18%] md:w-full">
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
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-[26px] items-center justify-start w-[46%] md:w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-end p-7 sm:px-5 rounded-[16px] shadow-bs14 w-full">
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
                              alt="vector_Fifteen"
                            />
                          </div>
                        </div>
                        <Text
                          className="leading-[30.00px] text-blue_gray-500 text-lg w-[89%] sm:w-full"
                          size="txtDMSansRegular18"
                        >
                          Ut enim ad minim veniam quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat aute irure dolor
                        </Text>
                      </div>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-[25px] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="md:h-[118px] h-[122px] relative w-full">
                      <div className="bg-white-A700 flex flex-col h-full items-end justify-start m-auto p-[35px] sm:px-5 rounded-[16px] shadow-bs14 w-full">
                        <div className="bg-gray-50 flex flex-col items-center justify-start my-1 p-[11px] rounded-lg w-[9%] md:w-full">
                          <Img
                            className="h-[18px] w-[19px]"
                            src="images/img_plus.svg"
                            alt="plus"
                          />
                        </div>
                      </div>
                      <Text
                        className="absolute bottom-[36%] left-[5%] text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                        size="txtInterMedium22"
                      >
                        {" "}
                        What software will I be using in the course?
                      </Text>
                    </div>
                    <div className="md:h-[118px] h-[122px] relative w-full">
                      <div className="bg-white-A700 flex flex-col h-full items-end justify-start m-auto p-[35px] sm:px-5 rounded-[16px] shadow-bs14 w-full">
                        <div className="bg-gray-50 flex flex-col items-center justify-start my-1 p-[11px] rounded-lg w-[9%] md:w-full">
                          <Img
                            className="h-[18px] w-[19px]"
                            src="images/img_plus.svg"
                            alt="plus"
                          />
                        </div>
                      </div>
                      <Text
                        className="absolute bottom-[31%] left-[5%] text-[22px] text-blue_gray-900_04 text-center sm:text-lg md:text-xl tracking-[-0.44px]"
                        size="txtInterMedium22"
                      >
                        {" "}
                        How is the course structured?
                      </Text>
                    </div>
                  </List>
                </div>
                <div className="flex md:flex-1 flex-col gap-2.5 justify-start w-[49%] md:w-full">
                  <List
                    className="flex flex-col gap-[23px] mr-[33px] w-[95%]"
                    orientation="vertical"
                  >
                    <div className="md:h-[120px] h-[122px] relative w-full">
                      <div className="bg-white-A700 flex flex-col h-full items-end justify-start m-auto p-10 sm:px-5 rounded-[16px] shadow-bs14 w-full">
                        <div className="bg-gray-50 flex flex-col items-center justify-start p-[11px] rounded-lg w-[9%] md:w-full">
                          <Img
                            className="h-[18px] w-[19px]"
                            src="images/img_plus.svg"
                            alt="plus"
                          />
                        </div>
                      </div>
                      <Text
                        className="absolute bottom-[34%] left-[5%] text-[22px] text-blue_gray-900_04 text-center sm:text-lg md:text-xl tracking-[-0.44px]"
                        size="txtInterMedium22"
                      >
                        Will I receive a certificate upon completion?
                      </Text>
                    </div>
                    <div className="md:h-[120px] h-[122px] relative w-full">
                      <div className="bg-white-A700 flex flex-col h-full items-end justify-start m-auto p-10 sm:px-5 rounded-[16px] shadow-bs14 w-full">
                        <div className="bg-gray-50 flex flex-col items-center justify-start mr-0.5 p-[11px] rounded-lg w-[9%] md:w-full">
                          <Img
                            className="h-[18px] w-[19px]"
                            src="images/img_plus.svg"
                            alt="plus"
                          />
                        </div>
                      </div>
                      <Text
                        className="absolute bottom-1/4 left-[4%] text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl tracking-[-0.44px] w-[78%] sm:w-full"
                        size="txtInterMedium22"
                      >
                        Are there any job placement or internship opportunities
                        after the course?
                      </Text>
                    </div>
                    <div className="md:h-[120px] h-[122px] relative w-full">
                      <div className="bg-white-A700 flex flex-col h-full items-end justify-start m-auto p-10 sm:px-5 rounded-[16px] shadow-bs14 w-full">
                        <div className="bg-gray-50 flex flex-col items-center justify-start mr-0.5 p-[11px] rounded-lg w-[9%] md:w-full">
                          <Img
                            className="h-[18px] w-[19px]"
                            src="images/img_plus.svg"
                            alt="plus"
                          />
                        </div>
                      </div>
                      <Text
                        className="absolute bottom-[34%] left-[5%] text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl tracking-[-0.44px]"
                        size="txtInterMedium22"
                      >
                        How can I enroll in the course?
                      </Text>
                    </div>
                  </List>
                  <Img
                    className="h-[104px] md:ml-[0] ml-[554px]"
                    src="images/img_group_gray_800.svg"
                    alt="group_One"
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer className="flex font-inter items-center justify-center mt-[119px] md:px-5 w-full" />
        </div>
        <div className="absolute bottom-[41%] flex flex-col inset-x-[0] items-center justify-start mx-auto md:px-5">
          <Text
            className="md:text-5xl text-[64px] text-blue_gray-900_02 text-center"
            size="txtInterBold64Bluegray90002"
          >
            Target Reach
          </Text>
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
            size="txtPoppinsMedium24Bluegray400"
          >
            Lorem Ipsum is simply dummy text of the printing.
          </Text>
        </div>
        <Img
          className="absolute bottom-[40%] h-[104px] left-[1%]"
          src="images/img_group_gray_800_104x98.svg"
          alt="group_Three"
        />
        <div className="absolute bottom-[38%] flex sm:flex-col flex-row sm:gap-10 items-end justify-between md:px-5 right-[3%] w-[43%]">
          <div className="sm:h-[273px] h-[278px] md:h-[300px] sm:mt-0 mt-[27px] relative w-2/5 sm:w-full">
            <Img
              className="absolute bottom-[0] h-64 object-cover right-[0]"
              src="images/img_ellipse61.png"
              alt="ellipseSixtyTwo"
            />
            <Img
              className="absolute h-[273px] inset-y-[0] left-[0] my-auto object-cover w-[91%]"
              src="images/img_79c5a3bd0df3ec1.png"
              alt="79c5a3bd0df3ecOne"
            />
          </div>
          <div className="md:h-[292px] h-[305px] relative w-[43%] sm:w-full">
            <Img
              className="absolute bottom-[0] h-[262px] left-[0] object-cover"
              src="images/img_ellipse61.png"
              alt="ellipseSixtyOne"
            />
            <Img
              className="absolute h-[292px] object-cover right-[0] top-[0] w-[89%]"
              src="images/img_1336e3b9ed2bea0.png"
              alt="1336e3b9ed2beaZero"
            />
          </div>
        </div>
        <div className="absolute bottom-[38%] flex md:flex-col flex-row gap-[45px] items-start justify-start left-[4%] md:px-5 w-[45%]">
          <div className="h-[273px] relative w-[48%] md:w-full">
            <Img
              className="h-64 m-auto object-cover"
              src="images/img_ellipse61.png"
              alt="ellipseSixty"
            />
            <Img
              className="absolute h-[273px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_b40021e580b7bdb.png"
              alt="b40021e580b7bdb"
            />
          </div>
          <div className="h-[260px] relative w-[46%] md:w-full">
            <Img
              className="absolute h-[260px] inset-[0] justify-center m-auto object-cover"
              src="images/img_ellipse61.png"
              alt="ellipseSixtyThree"
            />
            <Img
              className="absolute h-[233px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_70a91510a6ca690.png"
              alt="70a91510a6ca690"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingpagePage;
