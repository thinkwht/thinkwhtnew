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
import Footer4 from "components/Footer4";
import Header3 from "components/Header3";

import { CloseSVG } from "../../assets/images";

const DSApagePage = () => {
  const [group237897value, setGroup237897value] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 font-inter h-[12386px] mx-auto relative w-full">
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
          <Header3 className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="md:h-[796px] h-[850px] md:px-5 relative w-full">
            <Text
              className="absolute bottom-[0] inset-x-[0] mx-auto text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900_05 text-center w-max"
              size="txtInterBlack48"
            >
              About{" "}
            </Text>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-row font-lato h-[796px] inset-x-[0] items-center justify-start mx-auto p-[50px] md:px-10 sm:px-5 rounded-[10px] top-[0] w-full"
              style={{ backgroundImage: "url('images/img_group601.png')" }}
            >
              <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-start justify-start ml-[60px] mt-9 w-[91%]">
                <div className="h-[660px] relative w-[57%] md:w-full">
                  <div className="backdrop-opacity-[0.5] bg-white-A700_87 blur-[500.00px] h-[372px] ml-auto mr-[113px] mt-[39px] rounded-[202px] w-3/5"></div>
                  <Img
                    className="absolute h-[660px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_ad99cb1571b3d81.png"
                    alt="ad99cb1571b3dEightyOne"
                  />
                </div>
                <Text
                  className="md:mt-0 mt-[411px] sm:text-[40px] md:text-[46px] text-[50px] text-blue_gray-700 w-[38%] sm:w-full"
                  size="txtLatoBlack50"
                >
                  <span className="md:text-[38px] sm:text-4xl text-blue_gray-700 font-inter text-left text-[40px] font-black">
                    Start Your Learning as
                  </span>
                  <span className="md:text-[44px] sm:text-[38px] text-blue_gray-700 font-inter text-left text-5xl font-black">
                    {" "}
                  </span>
                  <span className="md:text-[44px] sm:text-[38px] text-orange-300 font-inter text-left text-5xl font-black">
                    DSA
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="mt-20 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-justify w-[95%] sm:w-full"
            size="txtInterRegular32"
          >
            DSA stands for Data Structures and Algorithms. It is a fundamental
            and essential topic in computer science and programming. DSA deals
            with organizing and manipulating data efficiently to solve various
            computational problems. It forms the backbone of writing efficient
            and optimized code.
          </Text>
          <div className="bg-orange-200_01 flex flex-col items-center justify-start max-w-[1373px] mt-[381px] p-[217px] md:px-5 rounded-[10px] w-full">
            <div className="flex flex-col items-center justify-start w-[15%] md:w-full">
              <Img
                className="h-[138px] md:h-auto object-cover w-full"
                src="images/img_image34.png"
                alt="image105"
              />
            </div>
          </div>
          <div className="bg-blue-800_01 flex flex-row items-center justify-start max-w-[1358px] mt-[133px] p-7 md:px-5 shadow-bs7 w-full">
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
                  alt="callNine"
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
          <div className="flex flex-col items-center justify-start max-w-[1387px] mt-[77px] md:px-5 w-full">
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
            className="cursor-pointer font-medium leading-[normal] min-w-[526px] sm:min-w-full mt-[173px] rounded-[20px] text-5xl sm:text-[38px] md:text-[44px] text-center"
            color="blue_gray_700"
            size="xl"
            variant="fill"
          >
            Apply Now
          </Button>
        </div>
        <div className="absolute h-[471px] left-[8%] md:px-5 top-[27%] w-[37%] sm:w-full">
          <div className="absolute backdrop-opacity-[0.5] bg-orange-300 blur-[500.00px] bottom-[0] h-[265px] left-[0] rounded-[132px] w-1/2"></div>
          <Img
            className="absolute h-[471px] inset-y-[0] my-auto object-cover right-[0] w-[471px]"
            src="images/img_saly10.png"
            alt="salyTen"
          />
        </div>
        <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[135px] inset-x-[0] items-center justify-start mx-auto w-full">
          <div className="flex flex-col justify-start max-w-[1432px] md:px-5 w-full">
            <Line className="bg-black-900 h-px w-full" />
            <div className="font-inter h-[1120px] md:h-[1141px] sm:h-[1576px] mt-[146px] relative w-full">
              <div className="absolute h-[1048px] sm:h-[1430px] md:h-[995px] inset-x-[0] mx-auto top-[0] w-full">
                <div className="h-[1048px] sm:h-[1430px] md:h-[995px] m-auto w-full">
                  <div className="flex flex-col md:gap-10 gap-[540px] h-full items-center justify-start m-auto w-full">
                    <div className="h-[504px] md:h-[842px] sm:h-[887px] relative w-[78%] md:w-full">
                      <div className="h-[504px] md:h-[842px] sm:h-[887px] m-auto w-full">
                        <div className="absolute h-[472px] md:h-[842px] sm:h-[887px] inset-x-[0] mx-auto top-[0] w-full">
                          <div className="absolute bottom-[0] h-[437px] md:h-[842px] sm:h-[887px] inset-x-[0] mx-auto w-full">
                            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                              <List
                                className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                                orientation="horizontal"
                              >
                                <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                                  <div className="flex flex-col md:gap-10 gap-[71px] items-center justify-start w-full">
                                    <div className="flex sm:flex-col flex-row sm:gap-[42px] items-center justify-between w-[97%] md:w-full">
                                      <Img
                                        className="h-[183px] md:h-auto object-cover"
                                        src="images/img_ellipse61.png"
                                        alt="ellipseSixtySeven"
                                      />
                                      <Img
                                        className="h-[183px] md:h-auto object-cover"
                                        src="images/img_ellipse61.png"
                                        alt="ellipseSixtyEight"
                                      />
                                    </div>
                                    <div className="flex sm:flex-col flex-row sm:gap-[42px] items-center justify-between w-[97%] md:w-full">
                                      <div
                                        className="bg-cover bg-no-repeat flex flex-col h-[183px] items-center justify-start p-2.5"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_ellipse61.png')",
                                        }}
                                      >
                                        <Img
                                          className="h-[152px] md:h-auto mb-[11px] object-cover w-3/4"
                                          src="images/img_470041cc33c554d.png"
                                          alt="470041cc33c554d"
                                        />
                                      </div>
                                      <Img
                                        className="h-[183px] md:h-auto object-cover"
                                        src="images/img_ellipse61.png"
                                        alt="ellipseSeventyTwo"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-1 flex-col md:gap-10 gap-[71px] items-center justify-start sm:ml-[0] w-full">
                                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[98%] md:w-full">
                                    <Img
                                      className="h-[183px] md:h-auto object-cover"
                                      src="images/img_ellipse61.png"
                                      alt="ellipseSixtyNine"
                                    />
                                    <Img
                                      className="h-[183px] md:h-auto object-cover"
                                      src="images/img_ellipse61.png"
                                      alt="ellipseSeventy"
                                    />
                                  </div>
                                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[98%] md:w-full">
                                    <div
                                      className="bg-cover bg-no-repeat flex flex-col h-[183px] items-start justify-start p-[7px]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_ellipse61.png')",
                                      }}
                                    >
                                      <Img
                                        className="h-[120px] md:h-auto my-6 object-cover w-[77%]"
                                        src="images/img_3b3a036a02a6b64.png"
                                        alt="3b3a036a02a6bSixtyFour"
                                      />
                                    </div>
                                    <Img
                                      className="h-[183px] md:h-auto object-cover"
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
                            className="absolute h-[222px] left-[21%] object-cover top-[0] w-[27%]"
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
                          <div className="h-[205px] md:h-[213px] mb-2 relative w-[47%] sm:w-full">
                            <Img
                              className="h-[205px] m-auto object-cover w-full"
                              src="images/img_977da6664e17df9.png"
                              alt="977da6664e17dfNine"
                            />
                            <Img
                              className="absolute h-[47px] inset-y-[0] my-auto object-cover right-[36%] w-[24%]"
                              src="images/img_0c93a27b8bce503.png"
                              alt="0c93a27b8bce503"
                            />
                          </div>
                          <Img
                            className="h-[189px] md:h-auto sm:mt-0 mt-6 object-cover"
                            src="images/img_fe7aa342d867f94.png"
                            alt="fe7aa342d867fNinetyFour_One"
                          />
                        </div>
                        <Img
                          className="absolute h-[204px] left-[0] object-cover top-[4%] w-1/5"
                          src="images/img_27e82b6497ae69e_204x215.png"
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
                          className="h-[156px] md:h-auto object-cover"
                          src="images/img_cb12d999fa0aab7.png"
                          alt="cb12d999fa0aabSeven"
                        />
                        <Img
                          className="h-[216px] md:h-auto object-cover w-[216px]"
                          src="images/img_5a9df22ecd73b86.png"
                          alt="5a9df22ecd73bEightySix"
                        />
                      </div>
                    </div>
                    <Line className="bg-blue_gray-900_05 h-[3px] w-full" />
                  </div>
                  <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-10 items-start justify-between left-[4%] w-[83%]">
                    <Img
                      className="h-[852px]"
                      src="images/img_maskgroup.svg"
                      alt="maskgroup"
                    />
                    <div className="flex flex-col gap-1.5 items-start justify-start md:mt-0 mt-[606px]">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center uppercase"
                        size="txtInterBold48"
                      >
                        COURSE STRUCTURE
                      </Text>
                      <Text
                        className="lowercase ml-0.5 md:ml-[0] sm:text-[27px] md:text-[29px] text-[31px] text-gray-500 tracking-[0.62px]"
                        size="txtInterRegular31"
                      >
                        WHAT ALL WILL BE COVERED IN THIS COURSE{" "}
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[13%] h-[197px] left-[34%]"
                  src="images/img_group_orange_300.svg"
                  alt="group"
                />
              </div>
              <Img
                className="absolute bottom-[0] h-[621px] left-[0] object-cover w-[621px]"
                src="images/img_33c079b10fc6e0c.png"
                alt="33c079b10fc6e0c"
              />
            </div>
            <div className="flex md:flex-col flex-row font-inter gap-[34px] items-start justify-start md:ml-[0] ml-[168px] mt-[78px] w-[73%] md:w-full">
              <div className="md:h-[1781px] h-[1794px] md:mt-0 mt-2.5 relative w-[4%] md:w-full">
                <Line className="absolute bg-blue_gray-100_03 h-[1781px] inset-[0] justify-center m-auto w-px" />
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                  <div className="bg-light_blue-900 h-[33px] rounded-[16px] w-[33px]"></div>
                  <div className="bg-light_blue-900 h-[33px] mt-[214px] rounded-[16px] w-[33px]"></div>
                  <div className="bg-light_blue-900 h-[33px] mt-[230px] rounded-[16px] w-[33px]"></div>
                  <div className="bg-light_blue-900 h-[33px] mt-[214px] rounded-[16px] w-[33px]"></div>
                  <div className="bg-light_blue-900 h-[33px] mt-[214px] rounded-[16px] w-[33px]"></div>
                  <div className="bg-light_blue-900 h-[33px] mt-[234px] rounded-[16px] w-[33px]"></div>
                </div>
                <div className="absolute bg-light_blue-900 bottom-[0] h-[33px] inset-x-[0] mx-auto rounded-[16px] w-[33px]"></div>
                <div className="absolute bg-light_blue-900_01 h-[33px] inset-x-[0] mx-auto rounded-[16px] top-[0] w-[33px]"></div>
              </div>
              <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[95%] md:w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-orange-300 tracking-[0.96px]"
                    size="txtInterBold48Orange300"
                  >
                    Class 1.
                  </Text>
                  <Text
                    className="md:mt-0 mt-0.5 sm:text-4xl md:text-[38px] text-[40px] text-light_blue-900_01 tracking-[0.80px]"
                    size="txtInterSemiBold40"
                  >
                    Introduction to Programming
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[338px] text-black-900_a0 text-xl w-[66%] sm:w-full"
                  size="txtInterRegular20Black900a0"
                >
                  We are a technology company on a mission to equip students
                  with relevant skills & practical exposure to help them get the
                  best possible start to their careers. Imagine a world full of{" "}
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[68px] w-[89%] md:w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-orange-300 tracking-[0.96px]"
                    size="txtInterBold48Orange300"
                  >
                    Class 2.
                  </Text>
                  <Text
                    className="md:mt-0 mt-0.5 sm:text-4xl md:text-[38px] text-[40px] text-blue-800_01 tracking-[0.80px]"
                    size="txtInterMedium40Blue80001"
                  >
                    Introduction to Algorithms
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[338px] mt-0.5 text-black-900_a0 text-xl w-[66%] sm:w-full"
                  size="txtInterRegular20Black900a0"
                >
                  We are a technology company on a mission to equip students
                  with relevant skills & practical exposure to help them get the
                  best possible start to their careers. Imagine a world full of{" "}
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[60px] w-full">
                  <Text
                    className="md:mt-0 mt-2.5 text-5xl sm:text-[38px] md:text-[44px] text-orange-300 tracking-[0.96px]"
                    size="txtInterBold48Orange300"
                  >
                    Class 3.
                  </Text>
                  <div className="flex flex-col gap-3.5 items-start justify-start">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-blue-800_01 tracking-[0.80px]"
                      size="txtInterMedium40Blue80001"
                    >
                      Introduction Data Structures
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
                <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between mt-[94px] w-[79%] md:w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-orange-300 tracking-[0.96px]"
                    size="txtInterBold48Orange300"
                  >
                    Class 4.
                  </Text>
                  <Text
                    className="md:mt-0 mt-2 sm:text-4xl md:text-[38px] text-[40px] text-blue-800_01 tracking-[0.80px]"
                    size="txtInterMedium40Blue80001"
                  >
                    Searching Algorithms{" "}
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[338px] mt-2 text-black-900_a0 text-xl w-[66%] sm:w-full"
                  size="txtInterRegular20Black900a0"
                >
                  We are a technology company on a mission to equip students
                  with relevant skills & practical exposure to help them get the
                  best possible start to their careers. Imagine a world full of{" "}
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between mt-16 w-[74%] md:w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-orange-300 tracking-[0.96px]"
                    size="txtInterBold48Orange300"
                  >
                    Class 5.
                  </Text>
                  <Text
                    className="sm:mt-0 mt-2 sm:text-4xl md:text-[38px] text-[40px] text-blue-800_01 tracking-[0.80px]"
                    size="txtInterMedium40Blue80001"
                  >
                    Sorting Algorithms{" "}
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[334px] mt-[7px] text-black-900_a0 text-xl w-[66%] sm:w-full"
                  size="txtInterRegular20Black900a0"
                >
                  We are a technology company on a mission to equip students
                  with relevant skills & practical exposure to help them get the
                  best possible start to their careers. Imagine a world full of{" "}
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between ml-0.5 md:ml-[0] mt-[65px] w-3/4 md:w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-orange-300 tracking-[0.96px]"
                    size="txtInterBold48Orange300"
                  >
                    Class 6.
                  </Text>
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-blue-800_01 tracking-[0.80px]"
                    size="txtInterMedium40Blue80001"
                  >
                    Stacks and Queues
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[338px] mt-[17px] text-black-900_a0 text-xl w-[66%] sm:w-full"
                  size="txtInterRegular20Black900a0"
                >
                  We are a technology company on a mission to equip students
                  with relevant skills & practical exposure to help them get the
                  best possible start to their careers. Imagine a world full of{" "}
                </Text>
                <div className="flex flex-row items-center justify-between ml-0.5 md:ml-[0] mt-[75px] w-[46%] md:w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-orange-300 tracking-[0.96px]"
                    size="txtInterBold48Orange300"
                  >
                    Class 7.
                  </Text>
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-blue-800_01 tracking-[0.80px]"
                    size="txtInterMedium40Blue80001"
                  >
                    Trees
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[338px] mt-[18px] text-black-900_a0 text-xl w-[66%] sm:w-full"
                  size="txtInterRegular20Black900a0"
                >
                  We are a technology company on a mission to equip students
                  with relevant skills & practical exposure to help them get the
                  best possible start to their careers. Imagine a world full of{" "}
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between ml-0.5 md:ml-[0] mt-[50px] w-[81%] md:w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-orange-300 tracking-[0.96px]"
                    size="txtInterBold48Orange300"
                  >
                    Class 8.
                  </Text>
                  <Text
                    className="md:mt-0 mt-[9px] sm:text-4xl md:text-[38px] text-[40px] text-blue-800_01 tracking-[0.80px]"
                    size="txtInterMedium40Blue80001"
                  >
                    Introduction to Graphs
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[338px] mt-[9px] text-black-900_a0 text-xl w-[66%] sm:w-full"
                  size="txtInterRegular20Black900a0"
                >
                  We are a technology company on a mission to equip students
                  with relevant skills & practical exposure to help them get the
                  best possible start to their careers. Imagine a world full of{" "}
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-inter gap-2 items-start justify-start md:ml-[0] ml-[63px] mt-[116px] w-[87%] md:w-full">
              <div className="flex h-[765px] justify-end relative w-[47%] md:w-full">
                <div className="backdrop-opacity-[0.5] bg-blue_gray-800_01 blur-[500.00px] h-[184px] mb-[268px] ml-[181px] mt-auto rounded-[94px] w-[33%]"></div>
                <Img
                  className="absolute h-[765px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_faa908ffc41205a.png"
                  alt="faa908ffc41205a"
                />
              </div>
              <div className="flex flex-col md:gap-10 gap-[191px] justify-start md:mt-0 mt-[46px] w-[53%] md:w-full">
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[73px] w-[89%] md:w-full">
                  <Text
                    className="md:text-5xl text-[64px] text-blue_gray-900_05"
                    size="txtInterBold64Bluegray90005"
                  >
                    1 on 1 Live Session{" "}
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-[51px] items-start justify-start mt-[65px] w-[69%] md:w-full">
                    <Img
                      className="h-[46px]"
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
                  <div className="flex sm:flex-col flex-row gap-[51px] items-start justify-start mt-[47px] w-3/4 md:w-full">
                    <Img
                      className="h-[46px] sm:mt-0 mt-1.5"
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
                  <div className="flex sm:flex-col flex-row gap-[51px] items-start justify-start mt-[43px] w-[68%] md:w-full">
                    <Img
                      className="h-[46px]"
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
                  <div className="flex sm:flex-col flex-row gap-[51px] items-center justify-start mt-12 w-[90%] md:w-full">
                    <Img
                      className="h-[46px]"
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
                  <div className="flex sm:flex-col flex-row font-lato gap-[51px] items-start justify-start mt-10 w-[77%] md:w-full">
                    <Img
                      className="h-[46px] sm:mt-0 mt-1"
                      src="images/img_mdimarkertick.svg"
                      alt="mdimarkertick_Four"
                    />
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
                      size="txtLatoRegular36"
                    >
                      Interactive Discussion
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row font-lato gap-[51px] items-start justify-start mt-12 w-[88%] md:w-full">
                    <Img
                      className="h-[46px]"
                      src="images/img_mdimarkertick.svg"
                      alt="mdimarkertick_Five"
                    />
                    <Text
                      className="sm:mt-0 mt-0.5 text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
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
                  <div className="md:h-12 h-[65px] relative w-[30%]">
                    <Img
                      className="absolute h-12 left-[0] rounded-[7px] top-[6%]"
                      src="images/img_volume_indigo_a400.svg"
                      alt="volume"
                    />
                    <div
                      className="absolute bg-cover bg-no-repeat md:h-3 h-[65px] inset-y-[0] my-auto p-3 right-[0] w-[90%]"
                      style={{
                        backgroundImage: "url('images/img_group606.svg')",
                      }}
                    >
                      <Img
                        className="absolute h-3 left-1/4 top-1/4"
                        src="images/img_location_white_a700.svg"
                        alt="location"
                      />
                      <Img
                        className="absolute h-2 right-[18%] top-[37%]"
                        src="images/img_cut.svg"
                        alt="cut"
                      />
                      <Img
                        className="absolute bottom-[28%] h-[9px] right-[26%]"
                        src="images/img_cut.svg"
                        alt="cut_One"
                      />
                      <Img
                        className="absolute bottom-[38%] h-1 left-[18%] w-[5px]"
                        src="images/img_vector142stroke.svg"
                        alt="vector142stroke"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-inter md:gap-10 gap-[83px] items-center justify-end md:ml-[0] ml-[75px] mt-[49px] w-[95%] md:w-full">
              <div className="flex flex-col gap-[26px] items-center justify-start w-[46%] md:w-full">
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
                            alt="vector_One"
                          />
                        </div>
                      </div>
                      <Text
                        className="leading-[30.00px] text-blue_gray-500 text-lg w-[89%] sm:w-full"
                        size="txtDMSansRegular18"
                      >
                        Ut enim ad minim veniam quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat
                        aute irure dolor
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
              <div className="flex flex-col gap-2.5 justify-start w-[49%] md:w-full">
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
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between ml-11 md:ml-[0] mt-[50px] w-4/5 md:w-full">
              <Img
                className="h-[57px] md:h-auto md:mt-0 mt-[509px] object-cover"
                src="images/img_casuallife3d_57x90.png"
                alt="casuallife3d"
              />
              <div className="flex h-[647px] justify-end relative w-[82%] md:w-full">
                <div className="backdrop-opacity-[0.5] bg-orange-300 blur-[100.00px] h-[353px] mb-[107px] mt-auto mx-auto rounded-[184px] w-[41%]"></div>
                <Img
                  className="absolute h-[647px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_f5da6d1e5d0dac9.png"
                  alt="f5da6d1e5d0dacNine"
                />
              </div>
            </div>
            <Line className="bg-orange-300 h-px ml-1 md:ml-[0] w-full" />
            <Text
              className="md:ml-[0] ml-[147px] mt-[92px] text-blue_gray-600 text-lg uppercase"
              size="txtPoppinsSemiBold18"
            >
              REVIEW
            </Text>
            <div className="font-inter h-[154px] md:h-[161px] md:ml-[0] ml-[147px] mt-[7px] relative w-[71%] md:w-full">
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
                className="absolute bottom-[0] h-[57px] object-cover right-[32%] w-[9%]"
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
              className="flex font-roboto gap-[29px] md:ml-[0] ml-[45px] mt-[89px] w-[95%]"
              items={[...Array(12)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex flex-col mx-2.5 relative">
                    <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto p-[22px] sm:px-5 rounded-lg shadow-bs7 w-full">
                      <div className="flex flex-col gap-[17px] items-start justify-start mb-[55px] w-[96%] md:w-full">
                        <div className="flex flex-row gap-2 items-center justify-start ml-0.5 md:ml-[0] w-[28%] md:w-full">
                          <Img
                            className="h-[27px] md:h-auto object-cover w-7"
                            src="images/img_f43ea641ea90098.png"
                            alt="f43ea641ea90098"
                          />
                          <Img
                            className="h-[27px] md:h-auto object-cover w-7"
                            src="images/img_f43ea641ea90098.png"
                            alt="f43ea641ea90098_One"
                          />
                          <Img
                            className="h-[27px] md:h-auto object-cover w-7"
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
                    <div className="bg-blue_gray-900_07 flex flex-row font-inter gap-[15px] items-center justify-center mt-[-29px] mx-auto p-2.5 rounded-[34px] w-[76%] z-[1]">
                      <Img
                        className="h-[47px] md:h-auto ml-[25px] rounded-[50%] w-[47px]"
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
                          className="mt-1.5 text-[10px] text-white-A700 tracking-[0.20px]"
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
                    <div className="inline-block cursor-pointer h-3 bg-blue_gray-900_07 w-[39px] rounded-md" />
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
            <PagerIndicator
              className="flex h-3.5 justify-center md:ml-[0] ml-[664px] mt-[77px] w-[126px]"
              count={4}
              activeCss="inline-block cursor-pointer h-3 bg-blue_gray-900_07 w-[39px] rounded-md"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-3.5 bg-gray-400_01 w-3.5"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block md:ml-[0] mx-[7.50px] sm:ml-[0]"
              unselectedWrapperCss="inline-block md:ml-[0] mx-[7.50px] sm:ml-[0]"
            />
            <Text
              className="md:ml-[0] ml-[328px] mt-[139px] md:text-5xl text-[64px] text-blue-800 text-center"
              size="txtInterBold64Blue800"
            >
              Certificate We Offer You
            </Text>
            <Text
              className="md:ml-[0] ml-[398px] mt-[19px] text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
              size="txtPoppinsMedium24Bluegray400"
            >
              Lorem Ipsum is simply dummy text of the printing.
            </Text>
            <div className="bg-blue_gray-100_02 h-[574px] md:ml-[0] ml-[95px] mr-20 mt-[79px] w-[88%]"></div>
          </div>
          <Footer4 className="flex items-center justify-center md:px-5 w-full" />
        </div>
        <div className="absolute h-44 md:px-5 right-[4%] top-[29%] w-[51%] md:w-full">
          <Text
            className="ml-[67px] mt-[55px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
            size="txtInterBold48Black900"
          >
            Courses Highlights
          </Text>
          <div className="absolute font-poppins h-44 inset-[0] justify-center m-auto w-full">
            <Text
              className="absolute bottom-[7%] left-[0] text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
              size="txtPoppinsMedium24Bluegray400"
            >
              Lorem Ipsum is simply dummy text of the printing.
            </Text>
            <Img
              className="absolute h-44 inset-y-[0] my-auto right-[0]"
              src="images/img_group_gray_800_176x168.svg"
              alt="group_Three"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DSApagePage;
