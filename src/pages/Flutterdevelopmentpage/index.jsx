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
import Footer2 from "components/Footer2";
import Header3 from "components/Header3";

import { CloseSVG } from "../../assets/images";

const FlutterdevelopmentpagePage = () => {
  const [group237897value, setGroup237897value] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 font-inter h-[12247px] mx-auto relative w-full">
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
          <Header3 className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div
            className="bg-cover bg-no-repeat font-lato md:h-[627px] sm:h-[691px] h-[796px] p-[38px] md:px-5 relative rounded-[10px] w-full"
            style={{ backgroundImage: "url('images/img_group601.png')" }}
          >
            <div className="absolute h-[627px] sm:h-[691px] inset-x-[0] mx-auto top-[5%] w-[85%] md:w-full">
              <div className="absolute bottom-[4%] flex flex-col items-center justify-start right-[0] w-[86%]">
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="backdrop-opacity-[0.5] bg-white-A700_87 blur-[500.00px] h-[372px] mb-[145px] rounded-[202px] w-[39%]"></div>
                  <Text
                    className="sm:mt-0 mt-[343px] sm:text-[40px] md:text-[46px] text-[50px] text-blue_gray-700"
                    size="txtLatoBlack50"
                  >
                    <span className="md:text-[38px] sm:text-4xl text-blue_gray-700 font-inter text-left text-[40px] font-black">
                      Start Your Learning as
                    </span>
                    <span className="md:text-[44px] sm:text-[38px] text-blue_gray-700 font-inter text-left text-5xl font-black">
                      {" "}
                    </span>
                    <span className="md:text-[44px] sm:text-[38px] text-orange-300 font-inter text-left text-5xl font-black">
                      FLUTTER DEVELOPER
                    </span>
                  </Text>
                </div>
              </div>
              <Img
                className="absolute h-[627px] inset-y-[0] left-[0] my-auto object-cover w-[69%]"
                src="images/img_1b9afd2ff0ec732.png"
                alt="1b9afd2ff0ec732"
              />
            </div>
          </div>
          <Text
            className="mt-[23px] text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900_05 text-center"
            size="txtInterBlack48"
          >
            About{" "}
          </Text>
          <Text
            className="mt-[83px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-justify w-[95%] sm:w-full"
            size="txtInterRegular32"
          >
            With Flutter, developers can use a single programming language,
            Dart, to build user interfaces, manage app logic, and interact with
            various device features. The framework comes with a rich set of
            pre-designed widgets and customizable UI components, enabling
            developers to create stunning, native-like interfaces that adapt to
            different screen sizes and devices.
          </Text>
          <Text
            className="mt-6 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-justify w-[93%] sm:w-full"
            size="txtInterRegular32"
          >
            Flutter Development is a modern and popular framework used for
            building cross-platform mobile applications. Developed by Google,
            Flutter allows developers to create high-performance and visually
            appealing apps for both Android and iOS using a single codebase.
          </Text>
          <div className="bg-orange-200_01 flex flex-col items-center justify-start max-w-[1373px] mt-[84px] p-[207px] md:px-5 rounded-[10px] w-full">
            <div className="flex flex-col items-center justify-start w-[14%] md:w-full">
              <Img
                className="h-[132px] md:h-auto object-cover w-full"
                src="images/img_image34.png"
                alt="image105"
              />
            </div>
          </div>
          <div className="bg-blue-800_01 flex flex-row font-inter items-center justify-start max-w-[1358px] mt-[130px] p-7 md:px-5 shadow-bs7 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-[25px] mt-0.5 w-[97%]">
              <div className="h-80 md:h-[249px] sm:h-[318px] relative w-[23%] md:w-full">
                <div className="absolute bg-white-A700 flex flex-col md:gap-10 gap-[109px] h-full inset-[0] items-center justify-center m-auto p-[15px] rounded-[13px] w-[99%]">
                  <Img
                    className="h-[117px] md:h-auto object-cover w-1/2 sm:w-full"
                    src="images/img_6b9b2b2308e589c.png"
                    alt="6b9b2b2308e589c"
                  />
                  <Button
                    className="cursor-pointer font-medium leading-[normal] mb-[5px] min-w-[210px] sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-center"
                    shape="round"
                    color="blue_gray_900_05"
                    size="md"
                    variant="fill"
                  >
                    Book Enquiry
                  </Button>
                </div>
                <Text
                  className="absolute bottom-[32%] capitalize inset-x-[0] mx-auto sm:text-[20.17px] md:text-[22.17px] text-[24.17px] text-black-900 text-center w-[99%] sm:w-full"
                  size="txtInterRegular2417"
                >
                  1 on 1 Doubt clearing sessions
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col justify-start md:ml-[0] ml-[46px] p-[9px] rounded-[13px] w-[22%] md:w-full">
                <Img
                  className="h-[147px] md:h-auto md:ml-[0] ml-[77px] object-cover w-[57%] sm:w-full"
                  src="images/img_fe7aa342d867f94.png"
                  alt="fe7aa342d867fNinetyFour"
                />
                <Text
                  className="capitalize ml-11 md:ml-[0] mt-1 sm:text-[20.17px] md:text-[22.17px] text-[24.17px] text-black-900"
                  size="txtInterRegular2417"
                >
                  Demo lecture
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] mb-2.5 min-w-[210px] mt-[51px] mx-auto sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-center"
                  shape="round"
                  color="blue_gray_900_05"
                  size="md"
                  variant="fill"
                >
                  Book Enquiry
                </Button>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-end md:ml-[0] ml-[53px] p-5 rounded-[13px] w-[22%] md:w-full">
                <Img
                  className="h-[133px] md:h-auto mt-[9px] object-cover w-[58%]"
                  src="images/img_1ddc6b322f82bf5.png"
                  alt="1ddc6b322f82bfFive"
                />
                <div className="flex flex-col gap-12 items-center justify-start mt-0.5 w-[90%] md:w-full">
                  <Text
                    className="capitalize sm:text-[20.17px] md:text-[22.17px] text-[24.17px] text-black-900"
                    size="txtInterRegular2417"
                  >
                    Course Enrollment
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[210px] sm:text-[17.49px] md:text-[19.49px] text-[21.49px] text-center"
                    shape="round"
                    color="blue_gray_900_05"
                    size="md"
                    variant="fill"
                  >
                    Book Enquiry
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col justify-start md:ml-[0] ml-[49px] p-[7px] rounded-[13px] w-[22%] md:w-full">
                <Img
                  className="h-[153px] md:h-auto ml-16 md:ml-[0] object-cover w-[154px] sm:w-full"
                  src="images/img_call2.png"
                  alt="callFour"
                />
                <Text
                  className="capitalize md:ml-[0] ml-[43px] mt-1.5 sm:text-[20.17px] md:text-[22.17px] text-[24.17px] text-black-900"
                  size="txtInterRegular2417"
                >
                  Call for enquiry
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] mb-3.5 min-w-[210px] mt-[45px] mx-auto text-center text-xl"
                  shape="round"
                  color="blue_gray_900_05"
                  size="md"
                  variant="fill"
                >
                  +91-6387889987{" "}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-inter items-center justify-start max-w-[1387px] mt-[77px] md:px-5 w-full">
            <div className="bg-blue_gray-900_05 flex flex-col items-center justify-center p-[35px] sm:px-5 w-full">
              <div className="bg-white-A700 border border-orange-300 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start my-[30px] p-[37px] sm:px-5 rounded-[16px] w-full">
                <div className="flex flex-row gap-[14.22px] items-center justify-center ml-1.5 md:ml-[0] w-auto">
                  <Img
                    className="h-[84px] md:h-auto object-cover w-[77px]"
                    src="images/img_ac69a8a063d7b73.png"
                    alt="ac69a8a063d7bSeventyThree"
                  />
                  <Text
                    className="capitalize text-base text-black-900 text-center"
                    size="txtInterRegular16Black900"
                  >
                    <>
                      60 Min <br />
                      Per/Live Class
                    </>
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-4/5 md:w-full">
                  <div className="flex md:flex-col flex-row gap-[-3px] items-center justify-start w-auto md:w-full">
                    <Img
                      className="h-28 md:h-auto object-cover w-[109px] sm:w-full"
                      src="images/img_1ddc6b322f82bf5_112x109.png"
                      alt="1ddc6b322f82bfFive_One"
                    />
                    <Text
                      className="capitalize text-base text-black-900 text-center w-auto"
                      size="txtInterRegular16Black900"
                    >
                      15 classes
                    </Text>
                    <div className="flex flex-row font-lato gap-[0.83px] items-center justify-start md:px-10 sm:px-5 px-[41.69px] w-auto">
                      <Img
                        className="h-[75px] md:h-auto object-cover w-[76px]"
                        src="images/img_27e82b6497ae69e.png"
                        alt="27e82b6497ae69e"
                      />
                      <div className="flex flex-col gap-1.5 justify-start">
                        <Text
                          className="text-[16.68px] text-blue_gray-900_06 text-center"
                          size="txtLatoMedium1668"
                        >
                          Course Duration
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[21px] text-[16.68px] text-blue_gray-900_06 text-center"
                          size="txtLatoMedium1668"
                        >
                          2 Month
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row font-lato gap-[10.01px] items-center justify-start w-auto sm:w-full">
                      <Img
                        className="h-[75px] md:h-auto object-cover w-[60px] sm:w-full"
                        src="images/img_b7f75073f10d397.png"
                        alt="b7f75073f10d397"
                      />
                      <div className="h-[65px] relative w-[83%] sm:w-full">
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row gap-36 items-start justify-start w-[77%] md:w-full">
                              <Text
                                className="text-[16.68px] text-blue_gray-900_06 text-center"
                                size="txtLatoMedium1668"
                              >
                                Program Fee
                              </Text>
                              <Text
                                className="text-[16.68px] text-blue_gray-900_06 text-center"
                                size="txtLatoMedium1668"
                              >
                                Class Days
                              </Text>
                            </div>
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="text-[16.68px] text-blue_gray-900_06 text-center"
                                size="txtLatoMedium1668"
                              >
                                ₹ 2000/month
                              </Text>
                              <Text
                                className="text-[16.68px] text-blue_gray-900_06 text-center"
                                size="txtLatoMedium1668"
                              >
                                Friday-Saturday-Sunday
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="absolute h-[65px] inset-y-[0] left-[31%] my-auto object-cover w-1/4"
                          src="images/img_484a24e151eac9b.png"
                          alt="484a24e151eac9b"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer font-medium leading-[normal] min-w-[526px] sm:min-w-full mt-[161px] rounded-[20px] text-5xl sm:text-[38px] md:text-[44px] text-center"
            color="blue_gray_700"
            size="xl"
            variant="fill"
          >
            Apply Now
          </Button>
        </div>
        <div className="absolute h-[451px] left-[8%] md:px-5 top-[27%] w-[37%] sm:w-full">
          <div className="absolute backdrop-opacity-[0.5] bg-orange-300 blur-[500.00px] bottom-[0] h-[254px] left-[0] rounded-[131px] w-1/2"></div>
          <Img
            className="absolute h-[451px] inset-y-[0] my-auto object-cover right-[0] w-[90%]"
            src="images/img_saly10.png"
            alt="salyTen"
          />
        </div>
        <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-start mx-auto w-full">
          <Line className="bg-black-900 h-px md:ml-[0] ml-[3px] w-full" />
          <div className="font-inter h-[1072px] md:h-[1095px] sm:h-[1511px] md:ml-[0] ml-[3px] mt-[140px] md:px-5 relative w-full">
            <div className="absolute h-[1003px] sm:h-[1371px] md:h-[955px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="h-[1003px] sm:h-[1371px] md:h-[955px] m-auto w-full">
                <div className="flex flex-col md:gap-10 gap-[516px] h-full items-center justify-start m-auto w-full">
                  <div className="h-[483px] md:h-[810px] sm:h-[852px] relative w-[78%] md:w-full">
                    <div className="h-[483px] md:h-[810px] sm:h-[852px] m-auto w-full">
                      <div className="absolute h-[452px] md:h-[810px] sm:h-[852px] inset-x-[0] mx-auto top-[0] w-full">
                        <div className="absolute bottom-[0] h-[418px] md:h-[810px] sm:h-[852px] inset-x-[0] mx-auto w-full">
                          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                            <List
                              className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                              orientation="horizontal"
                            >
                              <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                                <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start w-full">
                                  <div className="flex sm:flex-col flex-row sm:gap-[42px] items-center justify-between w-[97%] md:w-full">
                                    <Img
                                      className="h-[175px] md:h-auto object-cover"
                                      src="images/img_ellipse61.png"
                                      alt="ellipseSixtySeven"
                                    />
                                    <Img
                                      className="h-[175px] md:h-auto object-cover"
                                      src="images/img_ellipse61.png"
                                      alt="ellipseSixtyEight"
                                    />
                                  </div>
                                  <div className="flex sm:flex-col flex-row sm:gap-[42px] items-center justify-between w-[97%] md:w-full">
                                    <div
                                      className="bg-cover bg-no-repeat flex flex-col h-[175px] items-center justify-start p-[9px]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_ellipse61.png')",
                                      }}
                                    >
                                      <Img
                                        className="h-[146px] md:h-auto mb-[11px] object-cover w-3/4"
                                        src="images/img_470041cc33c554d.png"
                                        alt="470041cc33c554d"
                                      />
                                    </div>
                                    <Img
                                      className="h-[175px] md:h-auto object-cover"
                                      src="images/img_ellipse61.png"
                                      alt="ellipseSeventyTwo"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-1 flex-col md:gap-10 gap-[68px] items-center justify-start sm:ml-[0] w-full">
                                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[98%] md:w-full">
                                  <Img
                                    className="h-[175px] md:h-auto object-cover"
                                    src="images/img_ellipse61.png"
                                    alt="ellipseSixtyNine"
                                  />
                                  <Img
                                    className="h-[175px] md:h-auto object-cover"
                                    src="images/img_ellipse61.png"
                                    alt="ellipseSeventy"
                                  />
                                </div>
                                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[98%] md:w-full">
                                  <div
                                    className="bg-cover bg-no-repeat flex flex-col h-[175px] items-start justify-start p-[7px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_ellipse61.png')",
                                    }}
                                  >
                                    <Img
                                      className="h-[115px] md:h-auto my-[23px] object-cover w-[77%]"
                                      src="images/img_3b3a036a02a6b64.png"
                                      alt="3b3a036a02a6bSixtyFour"
                                    />
                                  </div>
                                  <Img
                                    className="h-[175px] md:h-auto object-cover"
                                    src="images/img_ellipse61.png"
                                    alt="ellipseSeventyFour"
                                  />
                                </div>
                              </div>
                            </List>
                          </div>
                          <div className="absolute flex sm:flex-col flex-row sm:gap-10 items-center justify-between left-[1%] top-[42%] w-[46%]">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtInterRegular24Black900"
                            >
                              Begineer Friendly
                            </Text>
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtInterRegular24Black900"
                            >
                              Certificate of training{" "}
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="absolute h-[213px] left-[21%] object-cover top-[0] w-[27%]"
                          src="images/img_b7f75073f10d397.png"
                          alt="b7f75073f10d397_One"
                        />
                        <div className="absolute flex flex-row h-max inset-y-[0] items-start justify-between my-auto right-[5%] w-[42%]">
                          <Text
                            className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtInterRegular24Black900"
                          >
                            Mobile Friendly
                          </Text>
                          <Text
                            className="mb-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtInterRegular24Black900"
                          >
                            Learn Online
                          </Text>
                        </div>
                      </div>
                      <div className="absolute flex sm:flex-col flex-row sm:gap-10 items-start justify-between right-[1%] top-[2%] w-[51%]">
                        <div className="h-[196px] md:h-[204px] mb-2 relative w-[47%] sm:w-full">
                          <Img
                            className="h-[196px] m-auto object-cover w-full"
                            src="images/img_977da6664e17df9.png"
                            alt="977da6664e17dfNine"
                          />
                          <Img
                            className="absolute h-[45px] inset-y-[0] my-auto object-cover right-[36%] w-[24%]"
                            src="images/img_0c93a27b8bce503_45x61.png"
                            alt="0c93a27b8bce503"
                          />
                        </div>
                        <Img
                          className="h-[181px] md:h-auto sm:mt-0 mt-[23px] object-cover"
                          src="images/img_fe7aa342d867f94.png"
                          alt="fe7aa342d867fNinetyFour_One"
                        />
                      </div>
                      <Img
                        className="absolute h-[195px] left-[0] object-cover top-[4%] w-1/5"
                        src="images/img_27e82b6497ae69e_195x215.png"
                        alt="27e82b6497ae69e_One"
                      />
                      <Text
                        className="absolute bottom-[0] left-[2%] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtInterRegular24Black900"
                      >
                        {" "}
                        24*7 Doubt clearing
                      </Text>
                      <Text
                        className="absolute bottom-[1%] left-[27%] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtInterRegular24Black900"
                      >
                        Download Content
                      </Text>
                      <Text
                        className="absolute bottom-[1%] right-[22%] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtInterRegular24Black900"
                      >
                        Hands-On Project Learning
                      </Text>
                      <Text
                        className="absolute bottom-[1%] right-[4%] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtInterRegular24Black900"
                      >
                        Assignments
                      </Text>
                    </div>
                    <div className="absolute bottom-[3%] flex sm:flex-col flex-row sm:gap-10 items-center justify-between right-[3%] w-[71%]">
                      <Img
                        className="h-[149px] md:h-auto object-cover"
                        src="images/img_cb12d999fa0aab7.png"
                        alt="cb12d999fa0aabSeven"
                      />
                      <Img
                        className="h-[207px] md:h-auto object-cover"
                        src="images/img_5a9df22ecd73b86.png"
                        alt="5a9df22ecd73bEightySix"
                      />
                    </div>
                  </div>
                  <Line className="bg-blue_gray-900_05 h-[3px] w-full" />
                </div>
                <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-10 items-start justify-between left-[4%] w-[83%]">
                  <Img
                    className="h-[815px]"
                    src="images/img_maskgroup_blue_gray_800_01.svg"
                    alt="maskgroup"
                  />
                  <div className="flex flex-col items-start justify-start md:mt-0 mt-[580px]">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center uppercase"
                      size="txtInterBold48"
                    >
                      COURSE STRUCTURE
                    </Text>
                    <Text
                      className="lowercase ml-0.5 md:ml-[0] mt-[3px] sm:text-[27px] md:text-[29px] text-[31px] text-gray-500 tracking-[0.62px]"
                      size="txtInterRegular31"
                    >
                      WHAT ALL WILL BE COVERED IN THIS COURSE{" "}
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="absolute bottom-[13%] h-[189px] left-[34%]"
                src="images/img_group_orange_300_189x215.svg"
                alt="group"
              />
            </div>
            <Img
              className="absolute bottom-[0] h-[594px] left-[0] object-cover w-[44%]"
              src="images/img_33c079b10fc6e0c.png"
              alt="33c079b10fc6e0c"
            />
          </div>
          <div className="flex md:flex-col flex-row font-inter gap-[34px] items-start justify-start max-w-[1125px] md:ml-[0] ml-[171px] mt-[75px] md:px-5 w-full">
            <div className="md:h-[1705px] h-[1718px] md:mt-0 mt-[9px] relative w-[4%] md:w-full">
              <Line className="absolute bg-blue_gray-100_03 h-[1705px] inset-[0] justify-center m-auto w-px" />
              <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                <div className="bg-light_blue-900 h-[31px] rounded-[16px] w-full"></div>
                <div className="bg-light_blue-900 h-8 mt-[205px] rounded-[16px] w-[33px]"></div>
                <div className="bg-light_blue-900 h-8 mt-[220px] rounded-[16px] w-[33px]"></div>
                <div className="bg-light_blue-900 h-8 mt-[204px] rounded-[16px] w-[33px]"></div>
                <div className="bg-light_blue-900 h-[31px] mt-[205px] rounded-[16px] w-full"></div>
                <div className="bg-light_blue-900 h-8 mt-56 rounded-[16px] w-[33px]"></div>
              </div>
              <div className="absolute bg-light_blue-900 bottom-[0] h-8 inset-x-[0] mx-auto rounded-[16px] w-[33px]"></div>
              <div className="absolute bg-light_blue-900_01 h-8 inset-x-[0] mx-auto rounded-[16px] top-[0] w-[33px]"></div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[94%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-orange-300 tracking-[0.96px]"
                  size="txtInterBold48Orange300"
                >
                  Class 1.
                </Text>
                <div className="flex flex-col gap-1.5 items-start justify-start md:mt-0 mt-0.5">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-light_blue-900_01 tracking-[0.80px]"
                    size="txtInterSemiBold40"
                  >
                    Introduction to Flutter Development
                  </Text>
                  <Text
                    className="text-black-900_a0 text-xl w-[88%] sm:w-full"
                    size="txtInterRegular20Black900a0"
                  >
                    We are a technology company on a mission to equip students
                    with relevant skills & practical exposure to help them get
                    the best possible start to their careers. Imagine a world
                    full of{" "}
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[66px] w-[58%] md:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-orange-300 tracking-[0.96px]"
                  size="txtInterBold48Orange300"
                >
                  Class 2.
                </Text>
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-blue-800_01 tracking-[0.80px]"
                  size="txtInterMedium40Blue80001"
                >
                  Flutter Basics
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[338px] mt-1 text-black-900_a0 text-xl w-3/5 sm:w-full"
                size="txtInterRegular20Black900a0"
              >
                We are a technology company on a mission to equip students with
                relevant skills & practical exposure to help them get the best
                possible start to their careers. Imagine a world full of{" "}
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-14 w-[92%] md:w-full">
                <Text
                  className="md:mt-0 mt-[5px] text-5xl sm:text-[38px] md:text-[44px] text-orange-300 tracking-[0.96px]"
                  size="txtInterBold48Orange300"
                >
                  Class 3.
                </Text>
                <div className="flex flex-col gap-1.5 items-start justify-start">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-blue-800_01 tracking-[0.80px]"
                    size="txtInterMedium40Blue80001"
                  >
                    Navigation and Routing
                  </Text>
                  <Text
                    className="text-black-900_a0 text-xl w-full"
                    size="txtInterRegular20Black900a0"
                  >
                    We are a technology company on a mission to equip students
                    with relevant skills & practical exposure to help them get
                    the best possible start to their careers. Imagine a world
                    full of{" "}
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between mt-[91px] w-[68%] md:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-orange-300 tracking-[0.96px]"
                  size="txtInterBold48Orange300"
                >
                  Class 4.
                </Text>
                <Text
                  className="sm:mt-0 mt-2 sm:text-4xl md:text-[38px] text-[40px] text-blue-800_01 tracking-[0.80px]"
                  size="txtInterMedium40Blue80001"
                >
                  Working with State
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[338px] mt-[5px] text-black-900_a0 text-xl w-3/5 sm:w-full"
                size="txtInterRegular20Black900a0"
              >
                We are a technology company on a mission to equip students with
                relevant skills & practical exposure to help them get the best
                possible start to their careers. Imagine a world full of{" "}
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[59px] w-3/5 md:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-orange-300 tracking-[0.96px]"
                  size="txtInterBold48Orange300"
                >
                  Class 5.
                </Text>
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-blue-800_01 tracking-[0.80px]"
                  size="txtInterMedium40Blue80001"
                >
                  Lists and Grids
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[334px] mt-1 text-black-900_a0 text-xl w-3/5 sm:w-full"
                size="txtInterRegular20Black900a0"
              >
                We are a technology company on a mission to equip students with
                relevant skills & practical exposure to help them get the best
                possible start to their careers. Imagine a world full of{" "}
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between ml-0.5 md:ml-[0] mt-[63px] w-[69%] md:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-orange-300 tracking-[0.96px]"
                  size="txtInterBold48Orange300"
                >
                  Class 6.
                </Text>
                <Text
                  className="mb-0.5 sm:mt-0 mt-[7px] sm:text-4xl md:text-[38px] text-[40px] text-blue-800_01 tracking-[0.80px]"
                  size="txtInterMedium40Blue80001"
                >
                  Networking and API{" "}
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[338px] mt-1 text-black-900_a0 text-xl w-3/5 sm:w-full"
                size="txtInterRegular20Black900a0"
              >
                We are a technology company on a mission to equip students with
                relevant skills & practical exposure to help them get the best
                possible start to their careers. Imagine a world full of{" "}
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between ml-0.5 md:ml-[0] mt-[81px] w-[86%] md:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-orange-300 tracking-[0.96px]"
                  size="txtInterBold48Orange300"
                >
                  Class 7.
                </Text>
                <Text
                  className="md:mt-0 mt-2 sm:text-4xl md:text-[38px] text-[40px] text-blue-800_01 tracking-[0.80px]"
                  size="txtInterMedium40Blue80001"
                >
                  Flutter Packages and Plugins
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[338px] mt-[9px] text-black-900_a0 text-xl w-3/5 sm:w-full"
                size="txtInterRegular20Black900a0"
              >
                We are a technology company on a mission to equip students with
                relevant skills & practical exposure to help them get the best
                possible start to their careers. Imagine a world full of{" "}
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between ml-0.5 md:ml-[0] mt-[54px] w-[55%] md:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-orange-300 tracking-[0.96px]"
                  size="txtInterBold48Orange300"
                >
                  Class 8.
                </Text>
                <Text
                  className="sm:mt-0 mt-[9px] sm:text-4xl md:text-[38px] text-[40px] text-blue-800_01 tracking-[0.80px]"
                  size="txtInterMedium40Blue80001"
                >
                  Final Project{" "}
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[338px] mt-1.5 text-black-900_a0 text-xl w-3/5 sm:w-full"
                size="txtInterRegular20Black900a0"
              >
                We are a technology company on a mission to equip students with
                relevant skills & practical exposure to help them get the best
                possible start to their careers. Imagine a world full of{" "}
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inter md:gap-5 items-start justify-start md:ml-[0] ml-[61px] mt-[234px] md:px-5 w-[86%] md:w-full">
            <div className="flex h-[732px] justify-end relative w-[47%] md:w-full">
              <div className="backdrop-opacity-[0.5] bg-blue_gray-800_01 blur-[500.00px] h-[177px] mb-64 ml-[181px] mt-auto rounded-[94px] w-[33%]"></div>
              <Img
                className="absolute h-[732px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_faa908ffc41205a.png"
                alt="faa908ffc41205a"
              />
            </div>
            <div className="flex flex-col md:gap-10 gap-[260px] justify-start ml-0.5 md:ml-[0] md:mt-0 mt-11 w-[54%] md:w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[79px] w-[88%] md:w-full">
                <Text
                  className="md:text-5xl text-[64px] text-blue_gray-900_05"
                  size="txtInterBold64Bluegray90005"
                >
                  1 on 1 Live Session{" "}
                </Text>
                <div className="flex sm:flex-col flex-row gap-[51px] items-center justify-start mt-[59px] w-[69%] md:w-full">
                  <Img
                    className="h-11 w-11"
                    src="images/img_mdimarkertick.svg"
                    alt="mdimarkertick"
                  />
                  <Text
                    className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                    size="txtInterRegular36"
                  >
                    Custom Schedule
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[51px] items-start justify-start mt-[45px] w-3/4 md:w-full">
                  <Img
                    className="h-[45px] sm:mt-0 mt-[5px] w-11"
                    src="images/img_mdimarkertick.svg"
                    alt="mdimarkertick_One"
                  />
                  <Text
                    className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                    size="txtInterRegular36"
                  >
                    Undivided Attention
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[51px] items-center justify-start mt-[41px] w-[68%] md:w-full">
                  <Img
                    className="h-11 w-11"
                    src="images/img_mdimarkertick.svg"
                    alt="mdimarkertick_Two"
                  />
                  <Text
                    className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                    size="txtInterRegular36"
                  >
                    Flexible Schedule
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[51px] items-center justify-start mt-[46px] w-[90%] md:w-full">
                  <Img
                    className="h-11 w-11"
                    src="images/img_mdimarkertick.svg"
                    alt="mdimarkertick_Three"
                  />
                  <Text
                    className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                    size="txtInterRegular36"
                  >
                    Focused Learning Speed
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row font-lato gap-[51px] items-start justify-start mt-[37px] w-[77%] md:w-full">
                  <Img
                    className="h-11 sm:mt-0 mt-[5px] w-11"
                    src="images/img_mdimarkertick.svg"
                    alt="mdimarkertick_Four"
                  />
                  <Text
                    className="mb-[5px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
                    size="txtLatoRegular36"
                  >
                    Interactive Discussion
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row font-lato gap-[51px] items-start justify-start mt-[46px] w-[88%] md:w-full">
                  <Img
                    className="h-11 w-11"
                    src="images/img_mdimarkertick.svg"
                    alt="mdimarkertick_Five"
                  />
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
                    size="txtLatoRegular36"
                  >
                    Feedback and Assessment
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-3.5 items-center justify-start w-[36%] md:w-full">
                <Text
                  className="sm:text-[44px] md:text-[50px] text-[58px] text-center text-indigo-900 tracking-[-1.16px]"
                  size="txtInterSemiBold58"
                >
                  FAQ’s
                </Text>
                <div className="md:h-[46px] h-[62px] relative w-[30%]">
                  <Img
                    className="absolute h-[46px] left-[0] rounded-[7px] top-[6%]"
                    src="images/img_volume_indigo_a400_46x42.svg"
                    alt="volume"
                  />
                  <div
                    className="absolute bg-cover bg-no-repeat md:h-[11px] h-[62px] inset-y-[0] my-auto p-3 right-[0] w-[61px]"
                    style={{
                      backgroundImage: "url('images/img_group935.svg')",
                    }}
                  >
                    <Img
                      className="absolute h-[11px] left-1/4 top-[24%]"
                      src="images/img_location_white_a700_11x14.svg"
                      alt="location"
                    />
                    <Img
                      className="absolute h-2 right-[19%] top-[37%]"
                      src="images/img_cut_white_a700.svg"
                      alt="cut"
                    />
                    <Img
                      className="absolute bottom-[27%] h-[9px] right-[26%]"
                      src="images/img_cut_white_a700.svg"
                      alt="cut_One"
                    />
                    <Img
                      className="absolute bottom-[39%] h-1 left-[19%] w-[5px]"
                      src="images/img_vector142stroke_white_a700.svg"
                      alt="vector142stroke"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inter md:gap-10 items-center justify-between max-w-[1355px] md:ml-[0] ml-[67px] mt-[43px] md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[46%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-end p-[27px] sm:px-5 rounded-[16px] shadow-bs14 w-full">
                <div className="flex flex-col items-center justify-start mt-[11px] w-[97%] md:w-full">
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
                          className="h-px my-1.5 rounded-[50%] w-[91%]"
                          src="images/img_vector_white_a700_2x19.svg"
                          alt="vector_One"
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
              <List
                className="flex flex-col gap-6 items-center w-full"
                orientation="vertical"
              >
                <div className="md:h-[113px] h-[116px] relative w-full">
                  <div className="bg-white-A700 flex flex-col h-full items-end justify-start m-auto p-[35px] sm:px-5 rounded-[16px] shadow-bs14 w-full">
                    <div className="bg-gray-50 flex flex-col items-center justify-start my-0.5 p-[11px] rounded-lg w-[9%] md:w-full">
                      <Img
                        className="h-[17px]"
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
                <div className="md:h-[113px] h-[116px] relative w-full">
                  <div className="bg-white-A700 flex flex-col h-full items-end justify-start m-auto p-[35px] sm:px-5 rounded-[16px] shadow-bs14 w-full">
                    <div className="bg-gray-50 flex flex-col items-center justify-start my-0.5 p-[11px] rounded-lg w-[9%] md:w-full">
                      <Img
                        className="h-[17px]"
                        src="images/img_plus.svg"
                        alt="plus"
                      />
                    </div>
                  </div>
                  <Text
                    className="absolute bottom-[30%] left-[5%] text-[22px] text-blue_gray-900_04 text-center sm:text-lg md:text-xl tracking-[-0.44px]"
                    size="txtInterMedium22"
                  >
                    {" "}
                    How is the course structured?
                  </Text>
                </div>
              </List>
            </div>
            <div className="flex md:flex-1 flex-col gap-[9px] justify-start w-[49%] md:w-full">
              <List
                className="flex flex-col gap-[22px] mr-[33px] w-[95%]"
                orientation="vertical"
              >
                <div className="md:h-[115px] h-[116px] relative w-full">
                  <div className="bg-white-A700 flex flex-col h-full items-end justify-start m-auto p-[38px] sm:px-5 rounded-[16px] shadow-bs14 w-full">
                    <div className="bg-gray-50 flex flex-col items-center justify-start mr-[3px] p-[11px] rounded-lg w-[9%] md:w-full">
                      <Img
                        className="h-[17px]"
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
                <div className="md:h-[115px] h-[116px] relative w-full">
                  <div className="bg-white-A700 flex flex-col h-full items-end justify-start m-auto p-[38px] sm:px-5 rounded-[16px] shadow-bs14 w-full">
                    <div className="bg-gray-50 flex flex-col items-center justify-start mr-1 p-[11px] rounded-lg w-[9%] md:w-full">
                      <Img
                        className="h-[17px]"
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
                <div className="md:h-[115px] h-[116px] relative w-full">
                  <div className="bg-white-A700 flex flex-col h-full items-end justify-start m-auto p-[38px] sm:px-5 rounded-[16px] shadow-bs14 w-full">
                    <div className="bg-gray-50 flex flex-col items-center justify-start mr-1 p-[11px] rounded-lg w-[9%] md:w-full">
                      <Img
                        className="h-[17px]"
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
                className="h-[100px] md:ml-[0] ml-[554px]"
                src="images/img_group_gray_800_100x98.svg"
                alt="group_One"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1134px] ml-10 md:ml-[0] mt-[81px] md:px-5 w-full">
            <Img
              className="h-[55px] md:h-auto md:mt-0 mt-[486px] object-cover"
              src="images/img_casuallife3d_57x90.png"
              alt="casuallife3d"
            />
            <div className="flex h-[619px] justify-end relative w-[82%] md:w-full">
              <div className="backdrop-opacity-[0.5] bg-orange-300 blur-[100.00px] h-[338px] mb-[102px] mt-auto mx-auto rounded-[184px] w-[41%]"></div>
              <Img
                className="absolute h-[619px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_f5da6d1e5d0dac9.png"
                alt="f5da6d1e5d0dacNine"
              />
            </div>
          </div>
          <Line className="bg-orange-300 h-px w-full" />
          <Text
            className="md:ml-[0] ml-[143px] mt-[88px] text-blue_gray-600 text-lg uppercase"
            size="txtPoppinsSemiBold18"
          >
            REVIEW
          </Text>
          <div className="font-inter h-[147px] md:h-[153px] md:ml-[0] ml-[143px] mt-1.5 md:px-5 relative w-[71%] md:w-full">
            <Text
              className="capitalize m-auto md:text-5xl text-[64px] text-blue_gray-900_01 text-justify"
              size="txtInterBold64Bluegray90001"
            >
              <>
                What students have to say
                <br />
                about Our course
              </>
            </Text>
            <Img
              className="absolute bottom-[0] h-[55px] object-cover right-[32%] w-[9%]"
              src="images/img_casuallife3d.png"
              alt="casuallife3d_One"
            />
          </div>
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
            className="flex font-roboto gap-[29px] max-w-[1354px] md:ml-[0] ml-[41px] mt-[85px] md:px-5 w-full"
            items={[...Array(12)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="flex flex-col mx-2.5 relative">
                  <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto p-[21px] sm:px-5 rounded-lg shadow-bs7 w-full">
                    <div className="flex flex-col gap-4 items-start justify-start mb-[53px] w-[95%] md:w-full">
                      <div className="flex flex-row gap-2 items-center justify-start ml-0.5 md:ml-[0] w-[28%] md:w-full">
                        <Img
                          className="h-[26px] md:h-auto object-cover w-[29%]"
                          src="images/img_f43ea641ea90098.png"
                          alt="f43ea641ea90098"
                        />
                        <Img
                          className="h-[26px] md:h-auto object-cover w-[29%]"
                          src="images/img_f43ea641ea90098.png"
                          alt="f43ea641ea90098_One"
                        />
                        <Img
                          className="h-[26px] md:h-auto object-cover w-[29%]"
                          src="images/img_f43ea641ea90098.png"
                          alt="f43ea641ea90098_Two"
                        />
                      </div>
                      <Text
                        className="leading-[156.50%] text-base text-blue_gray-900 tracking-[0.32px]"
                        size="txtRobotoRomanRegular16"
                      >
                        <>
                          “Teachings of the great explore of truth, <br />
                          the master-builder of human happiness. <br />
                          no one rejects,dislikes, or avoids pleasure <br />
                          itself, pleasure itself”
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-blue_gray-900_07 flex flex-row font-inter gap-[15px] items-center justify-center mt-[-28px] mx-auto p-2.5 rounded-[32px] w-[76%] z-[1]">
                    <Img
                      className="h-[45px] md:h-auto ml-[25px] rounded-[50%] w-[16%]"
                      src="images/img_ellipse34.png"
                      alt="ellipseThirtyFive"
                    />
                    <div className="flex flex-row gap-[25px] items-end justify-center mr-[25px] w-[64%]">
                      <Text
                        className="text-[17px] text-white-A700 tracking-[0.34px]"
                        size="txtInterMedium17"
                      >
                        Finlay Kirk
                      </Text>
                      <Text
                        className="mb-0.5 mt-[5px] text-[10px] text-white-A700 tracking-[0.20px]"
                        size="txtInterRegular10"
                      >
                        Web Developper
                      </Text>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer h-[11px] bg-blue_gray-900_07 w-[39px] rounded-[5px]" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer rounded-[50%] h-[13px] bg-gray-400_01 w-3.5"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <PagerIndicator
            className="flex h-[13px] justify-center md:ml-[0] ml-[655px] mt-[77px] w-[126px]"
            count={4}
            activeCss="inline-block cursor-pointer h-[11px] bg-blue_gray-900_07 w-[39px] rounded-[5px]"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-[13px] bg-gray-400_01 w-3.5"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block md:ml-[0] mx-[7.50px] sm:ml-[0]"
            unselectedWrapperCss="inline-block md:ml-[0] mx-[7.50px] sm:ml-[0]"
          />
          <Text
            className="md:ml-[0] ml-[339px] mt-[132px] md:text-5xl text-[64px] text-blue-800 text-center"
            size="txtInterBold64Blue800"
          >
            Certificate We Offer You
          </Text>
          <Text
            className="md:ml-[0] ml-[409px] mt-[19px] text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
            size="txtPoppinsMedium24Bluegray400"
          >
            Lorem Ipsum is simply dummy text of the printing.
          </Text>
          <div className="bg-blue_gray-100_02 h-[574px] max-w-[1257px] md:ml-[0] ml-[94px] mr-[89px] mt-[87px] md:px-5 w-full"></div>
          <Footer2 className="flex font-inter items-center justify-center mt-[149px] md:px-5 w-full" />
        </div>
        <div className="absolute h-[169px] md:px-5 right-[5%] top-[29%] w-[51%] md:w-full">
          <Text
            className="ml-[67px] my-auto text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
            size="txtInterBold48Black900"
          >
            Courses Highlights
          </Text>
          <div className="absolute font-poppins h-[169px] inset-[0] justify-center m-auto w-full">
            <Text
              className="absolute bottom-[7%] left-[0] text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
              size="txtPoppinsMedium24Bluegray400"
            >
              Lorem Ipsum is simply dummy text of the printing.
            </Text>
            <Img
              className="absolute h-[169px] inset-y-[0] my-auto right-[0] w-[168px]"
              src="images/img_group_gray_800_169x168.svg"
              alt="group_Three"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlutterdevelopmentpagePage;
