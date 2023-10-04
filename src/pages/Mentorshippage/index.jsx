import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import FrontendDevelopmentPageColumnEighteen from "components/FrontendDevelopmentPageColumnEighteen";
import Header4 from "components/Header4";

import { CloseSVG } from "../../assets/images";

const MentorshippagePage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <Header4 className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="font-asap md:h-[1132px] sm:h-[1179px] h-[1732px] max-w-[1373px] mt-[38px] mx-auto md:px-5 relative w-full">
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[98%]">
              <div className="flex flex-col md:gap-10 gap-[139px] justify-start w-full">
                <Img
                  className="h-[60px]"
                  src="images/img_grid.svg"
                  alt="grid"
                />
                <div className="h-[942px] md:h-[994px] ml-3 md:ml-[0] relative w-full">
                  <div className="h-[942px] md:h-[994px] m-auto w-full">
                    <div className="h-[942px] md:h-[994px] m-auto w-full">
                      <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[79%]">
                        <div className="flex md:flex-col flex-row gap-9 items-start justify-between w-full">
                          <Img
                            className="h-[19px] md:mt-0 mt-[326px] rounded-sm w-[19px]"
                            src="images/img_forward.svg"
                            alt="forward"
                          />
                          <div className="flex flex-col items-end justify-start">
                            <div className="flex flex-row sm:gap-10 gap-[500px] items-center justify-end w-[54%] md:w-full">
                              <div className="bg-white-A700 h-3 my-[3px] outline outline-[1px] outline-orange-200_06 rounded-md w-[11px]"></div>
                              <Img
                                className="h-[19px] rounded-sm w-[19px]"
                                src="images/img_forward.svg"
                                alt="forward_One"
                              />
                            </div>
                            <Text
                              className="mt-[247px] rotate-[-135deg] sm:text-[35px] md:text-[41px] text-[45px] text-light_blue-A100"
                              size="txtAsapRegular45"
                            >
                              +
                            </Text>
                            <div className="flex flex-row sm:gap-10 items-start justify-between mt-[373px] w-full">
                              <Img
                                className="h-5 mb-[11px] rounded w-[19px]"
                                src="images/img_location_white_a700_20x19.svg"
                                alt="location"
                              />
                              <div className="bg-white-A700 h-3 mt-[19px] outline outline-[1px] outline-gray-200_02 rounded-md w-[11px]"></div>
                            </div>
                            <div className="flex flex-row gap-[438px] items-start justify-end mt-[164px] w-1/2 md:w-full">
                              <Text
                                className="rotate-[-135deg] sm:text-[35px] md:text-[41px] text-[45px] text-gray-200_02"
                                size="txtAsapRegular45Gray20002"
                              >
                                +
                              </Text>
                              <Img
                                className="h-[19px] mt-1 rounded-sm w-[19px]"
                                src="images/img_forward.svg"
                                alt="forward_Two"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-[5%] flex flex-col items-center justify-start right-[0] w-[84%]">
                        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                          <div className="flex md:flex-1 flex-col md:gap-10 gap-[591px] justify-start w-[801px] md:w-full">
                            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                              <Img
                                className="h-[95px] md:h-auto mt-[60px] object-cover"
                                src="images/img_oval8.png"
                                alt="ovalEight"
                              />
                              <div className="h-[120px] md:h-[154px] mb-[35px] relative w-[119px]">
                                <Img
                                  className="absolute h-[119px] inset-[0] justify-center m-auto object-cover w-[96%]"
                                  src="images/img_oval8_119x114.png"
                                  alt="ovalEight_One"
                                />
                                <Img
                                  className="absolute bottom-[0] h-[98px] object-cover right-[0] rounded-[49px] w-[97px]"
                                  src="images/img_ellipse136.png"
                                  alt="ellipse136"
                                />
                              </div>
                            </div>
                            <Img
                              className="h-[53px] md:h-auto md:ml-[0] ml-[721px] object-cover w-[7%]"
                              src="images/img_oval8_53x51.png"
                              alt="ovalEight_Two"
                            />
                          </div>
                          <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[342px] w-[17%] md:w-full">
                            <Img
                              className="h-[191px] md:h-auto object-cover rounded-bl-[95px] rounded-br-[95px] w-full"
                              src="images/img_mask.png"
                              alt="mask"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-[21%] font-inter md:h-[276px] h-[407px] left-[0] w-[88%] md:w-full">
                      <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto">
                        <Text
                          className="leading-[34.00px] mb-[133px] text-2xl md:text-[22px] text-center text-gray-500_03 sm:text-xl w-3/4 sm:w-full"
                          size="txtInterRegular24Gray50003"
                        >
                          Book and meet over 6,086+ mentors for 1:1 mentorship
                          in our global community.
                        </Text>
                      </div>
                      <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                        <Text
                          className="leading-[87.00px] md:text-5xl text-[80px] text-center text-orange-400_01 w-full"
                          size="txtInterBold80Orange40001"
                        >
                          <span className="text-orange-400_01 font-inter font-bold">
                            Learn and grow with help from{" "}
                          </span>
                          <span className="text-blue_gray-700_03 font-inter font-bold">
                            world-class mentors
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[5%] flex md:flex-col flex-row font-inter md:gap-10 items-center justify-between right-[0] w-[90%]">
                    <div className="flex flex-col justify-start">
                      <Img
                        className="h-24 md:h-auto md:ml-[0] ml-[83px] object-cover rounded-[48px] w-[11%] sm:w-full"
                        src="images/img_ellipse138.png"
                        alt="ellipse138"
                      />
                      <div className="h-[102px] md:h-[553px] sm:h-[594px] mr-10 mt-[452px] relative w-[96%] md:w-full">
                        <div className="absolute bg-white-A700 border border-orange-300 border-solid flex sm:flex-col flex-row gap-[35px] h-max inset-[0] items-center justify-center m-auto p-[15px] rounded-[50px] shadow-bs19 w-full">
                          <Text
                            className="ml-8 sm:ml-[0] text-blue-800_01 text-lg tracking-[1.20px]"
                            size="txtInterMedium18Blue80001"
                          >
                            Search by company, or role
                          </Text>
                          <div className="flex sm:flex-1 flex-col items-center justify-start sm:mt-0 mt-[15px] w-[24%] sm:w-full">
                            <div className="flex flex-row gap-8 items-center justify-start pb-2.5 pr-2.5 w-full">
                              <Line className="bg-gray-200_01 h-[45px] w-px" />
                              <Text
                                className="text-gray-500_04 text-lg tracking-[1.20px]"
                                size="txtInterRegular18Gray50004"
                              >
                                Expertise
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-blue_gray-700_04 flex flex-col h-full inset-y-[0] items-center justify-end my-auto p-7 sm:px-5 right-[0] rounded-[49px] shadow-bs20 w-[13%]">
                          <Img
                            className="h-[42px] mt-[3px]"
                            src="images/img_search_white_a700.svg"
                            alt="search_One"
                          />
                        </div>
                      </div>
                      <Img
                        className="h-[55px] md:h-auto md:ml-[0] ml-[803px] mt-9 object-cover rounded-[27px] w-[54px] sm:w-full"
                        src="images/img_ellipse137.png"
                        alt="ellipse137"
                      />
                    </div>
                    <Img
                      className="h-48 md:h-auto object-cover rounded-[96px]"
                      src="images/img_ellipse135.png"
                      alt="ellipse135"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat font-inter h-[863px] inset-x-[0] mx-auto rounded-[30px] shadow-bs7 top-[0] w-full"
              style={{ backgroundImage: "url('images/img_mentorship.png')" }}
            >
              <div className="h-[863px] m-auto w-full">
                <div className="h-[863px] m-auto w-full">
                  <div className="absolute h-[863px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="h-[863px] m-auto object-cover rounded-[30px] w-full"
                      src="images/img_gradientsunset.png"
                      alt="gradientsunset"
                    />
                    <div className="absolute flex flex-col items-start justify-start left-[3%] top-[11%] w-[71%]">
                      <Text
                        className="md:ml-[0] ml-[3px] text-white-A700 text-xl"
                        size="txtInterRegular20WhiteA700"
                      >
                        A Mentoring Platform{" "}
                      </Text>
                      <Text
                        className="mt-1 md:text-5xl text-8xl text-white-A700"
                        size="txtInterBlack96"
                      >
                        MENTORSHIP OASIS
                      </Text>
                      <Input
                        name="group704"
                        placeholder="Apply As A Mentor"
                        className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-white-A700 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="md:ml-[0] ml-[3px] mt-[299px] rounded-[20px] w-[31%]"
                        color="blue_gray_700_03"
                        size="md"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                  <div className="absolute bg-orange-200_05 bottom-[0] h-[475px] right-[2%] rounded-[317px] shadow-bs7 w-[47%]"></div>
                  <div className="absolute bottom-[0] flex flex-col items-end justify-end right-[0] w-[51%]">
                    <div className="overflow-x-auto w-full">
                      <div className="flex flex-col md:gap-10 gap-[147px] items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[94%] md:w-full">
                          <div className="flex flex-col gap-6 justify-start w-[28%] md:w-full">
                            <Img
                              className="h-[123px] md:h-auto object-cover w-full"
                              src="images/img_doodle32.png"
                              alt="doodleThirtyTwo"
                            />
                            <div className="flex flex-col items-center justify-start ml-11 md:ml-[0] w-3/5 md:w-full">
                              <Img
                                className="h-[65px] md:h-auto object-cover w-full"
                                src="images/img_doodle51.png"
                                alt="doodleFiftyOne"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[221px] md:mt-0 mt-[126px] w-[17%] md:w-full">
                            <Img
                              className="h-[65px] md:h-auto object-cover w-full"
                              src="images/img_doodle41.png"
                              alt="doodleFortyOne"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-start md:mt-0 mt-16 w-1/4 md:w-full">
                            <Img
                              className="h-[119px] md:h-auto object-cover w-full"
                              src="images/img_doodle71.png"
                              alt="doodleSeventyOne"
                            />
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                          <div className="flex sm:flex-1 flex-col items-center justify-start shadow-bs21 w-1/5 sm:w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <Img
                                className="h-[85px] md:h-auto object-cover w-full"
                                src="images/img_doodle61.png"
                                alt="doodleSixtyOne"
                              />
                            </div>
                          </div>
                          <div className="flex sm:flex-1 flex-col items-center justify-start sm:mt-0 mt-[65px] shadow-bs21 w-[57%] sm:w-full">
                            <Img
                              className="h-[225px] md:h-auto object-cover w-full"
                              src="images/img_doodle21.png"
                              alt="doodleTwentyOne"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[3%] flex flex-col gap-[58px] justify-start left-[2%] w-[61%]">
                  <Img
                    className="h-36 md:h-auto md:ml-[0] ml-[611px] object-cover w-[27%]"
                    src="images/img_saly21.png"
                    alt="salyTwentyOne"
                  />
                  <div className="flex flex-row sm:gap-10 items-start justify-between mr-[78px] w-[91%] md:w-full">
                    <Img
                      className="h-[134px] md:h-auto object-cover"
                      src="images/img_thinkwhatlogohighfinal_70x90.png"
                      alt="thinkwhatlogohi_One"
                    />
                    <Img
                      className="h-[139px] md:h-auto mt-[78px] object-cover"
                      src="images/img_saly42.png"
                      alt="salyFortyTwo"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col gap-[7px] items-start justify-start left-[3%] top-[30%] w-1/2">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700_ad"
                  size="txtInterMedium32WhiteA700ad"
                >
                  <>
                    Enroll to look for a mentor with the kind <br />
                    of industry expertise you need to <br />
                    guide you. Our mentors are qualified and <br />
                    certified experts from reputable companies
                    <br />
                    with the adequate skill to mentor you.
                  </>
                </Text>
                <Img
                  className="h-[27px] md:ml-[0] ml-[3px]"
                  src="images/img_videocamera.svg"
                  alt="videocamera"
                />
              </div>
              <Img
                className="absolute h-[41px] right-[23%] top-[11%]"
                src="images/img_close_pink_300.svg"
                alt="close"
              />
              <Img
                className="absolute bottom-[0] h-[665px] object-cover right-[0] w-[47%]"
                src="images/img_25low1.png"
                alt="25lowOne"
              />
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[106px] mt-[84px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
            size="txtInterSemiBold50"
          >
            <span className="text-black-900 font-inter text-left font-semibold">
              <>&quot;Nurturing Guidance: </>
            </span>
            <span className="text-blue_gray-700 font-inter text-left font-semibold">
              Meet Our Esteemed Mentors
            </span>
            <span className="text-black-900 font-inter text-left font-semibold">
              <>&quot;</>
            </span>
          </Text>
          <Text
            className="md:ml-[0] ml-[257px] mt-[23px] text-base text-blue_gray-400"
            size="txtInterRegular16Bluegray400"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <div className="font-inter md:gap-5 gap-[83px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1276px] min-h-[auto] mt-28 mx-auto md:px-5 w-full">
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
          </div>
          <Button
            className="cursor-pointer font-medium leading-[normal] min-w-[378px] sm:min-w-full md:ml-[0] ml-[533px] mr-[529px] mt-[100px] rounded-[20px] shadow-bs text-2xl md:text-[22px] text-center sm:text-xl"
            color="blue_gray_700"
            size="xl"
            variant="fill"
          >
            Explore All Mentors
          </Button>
          <div className="flex flex-col font-inter items-center justify-start md:ml-[0] ml-[330px] mt-[107px] p-[9px] md:px-5">
            <Text
              className="mb-0.5 md:text-5xl text-[64px] text-center text-orange-400_01 tracking-[0.54px]"
              size="txtInterExtraBold64"
            >
              How it works
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[248px] mt-[5px] text-base text-blue_gray-400"
            size="txtInterRegular16Bluegray400"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <div className="flex md:flex-col flex-row font-inter md:gap-5 items-end justify-start max-w-[1253px] mt-[34px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-2.5 items-start justify-start md:mt-0 mt-9 w-[38%] md:w-full">
              <div className="md:h-[203px] h-[220px] relative w-full">
                <div className="absolute bottom-[0] h-[203px] left-[0] w-3/5">
                  <div className="h-[92px] ml-[70px] mt-[35px] outline outline-[35px] outline-blue-800_01 rounded-[47px] w-[34%]"></div>
                  <Img
                    className="absolute h-[203px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_recruitersearching.png"
                    alt="recruitersearch"
                  />
                </div>
                <Img
                  className="absolute h-[182px] right-[0] top-[0]"
                  src="images/img_path2.svg"
                  alt="pathTwo"
                />
              </div>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-700_04 text-center tracking-[0.53px]"
                size="txtInterBold32Bluegray70004"
              >
                1. Find a Mentor
              </Text>
            </div>
            <div className="flex flex-col ml-3 md:ml-[0] relative w-[24%] md:w-full">
              <div className="h-[285px] mx-auto w-full">
                <div className="h-[92px] ml-[55px] mt-[71px] outline outline-[35px] outline-blue-800_01 rounded-[47px] w-[32%]"></div>
                <Img
                  className="absolute h-[285px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_mantryingtoget.png"
                  alt="mantryingtoget"
                />
              </div>
              <Text
                className="ml-[41px] mt-[-18.12px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-700_04 text-center tracking-[0.53px] z-[1]"
                size="txtInterBold32Bluegray70004"
              >
                Connect
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-2 justify-start mb-0.5 md:ml-[0] ml-[13px] md:mt-0 mt-5 w-[37%] md:w-full">
              <div className="h-[236px] relative w-full">
                <div className="absolute flex flex-col items-center justify-start left-[0] top-[7%] w-[84%]">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Img
                      className="h-[182px]"
                      src="images/img_path2.svg"
                      alt="pathThree"
                    />
                    <div className="h-[92px] mt-2.5 outline outline-[35px] outline-blue-800_01 rounded-[47px] w-1/4"></div>
                  </div>
                </div>
                <Img
                  className="absolute h-[236px] inset-y-[0] my-auto object-cover right-[0] w-[55%]"
                  src="images/img_youngwomanchatting.png"
                  alt="youngwomanchatt"
                />
              </div>
              <Text
                className="md:ml-[0] ml-[244px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-700_04 text-center tracking-[0.53px]"
                size="txtInterBold32Bluegray70004"
              >
                Schedule
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row font-inter sm:gap-5 items-center justify-start max-w-[1335px] mt-[22px] mx-auto md:px-5 w-full">
            <Text
              className="text-base text-blue_gray-400 text-center"
              size="txtInterRegular16Bluegray400"
            >
              Lorem Ipsum is simply dummy simply text
            </Text>
            <Text
              className="sm:ml-[0] ml-[177px] text-base text-blue_gray-400 text-center"
              size="txtInterRegular16Bluegray400"
            >
              Lorem Ipsum is simply dummy simply text
            </Text>
            <Text
              className="sm:ml-[0] ml-[214px] text-base text-blue_gray-400 text-center"
              size="txtInterRegular16Bluegray400"
            >
              Lorem Ipsum is simply dummy simply text
            </Text>
          </div>
          <div className="flex flex-col font-inter items-center justify-start max-w-[1339px] mt-[43px] mx-auto md:px-5 w-full">
            <div className="sm:h-[356px] h-[358px] md:h-[547px] relative w-full">
              <div
                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[265px] inset-x-[0] items-center justify-start mx-auto w-full"
                style={{ backgroundImage: "url('images/img_group711.png')" }}
              >
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[265px] items-center justify-start w-full"
                  style={{ backgroundImage: "url('images/img_group711.png')" }}
                >
                  <Img
                    className="h-[265px] md:h-auto object-cover"
                    src="images/img_group711.png"
                    alt="frame237665"
                  />
                </div>
              </div>
              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[4%] my-auto w-[88%]">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex flex-col gap-[13px] items-center justify-start md:mt-0 mt-[141px]">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-700_04 text-center tracking-[0.53px]"
                      size="txtInterBlack48Bluegray70004"
                    >
                      <span className="text-blue_gray-700_04 font-inter font-black">
                        2100{" "}
                      </span>
                      <span className="text-blue-800_01 font-inter font-black">
                        +
                      </span>
                      <span className="text-blue_gray-700_04 font-inter font-black">
                        {" "}
                        Mentors in{" "}
                      </span>
                      <span className="text-blue-800_01 font-inter font-black">
                        THINKWHT
                      </span>
                    </Text>
                    <Text
                      className="leading-[28.00px] text-[15px] text-blue_gray-900_05 text-justify tracking-[0.53px] w-[99%] sm:w-full"
                      size="txtInterRegular15Bluegray90005"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                  </div>
                  <div className="h-[356px] relative w-[32%] md:w-full">
                    <Img
                      className="h-[356px] m-auto object-cover w-full"
                      src="images/img_manpointingat.png"
                      alt="manpointingat"
                    />
                    <Img
                      className="absolute h-[76px] left-[13%] object-cover top-[28%] w-1/5"
                      src="images/img_thinkwhatlogohighfinal_76x70.png"
                      alt="thinkwhatlogohi_Two"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="font-inter md:h-[202px] h-[78px] max-w-[1124px] mt-[124px] mx-auto md:px-5 relative w-full">
            <Text
              className="absolute h-full inset-[0] justify-center m-auto md:text-5xl text-[64px] text-blue_gray-700 text-center w-max"
              size="txtInterBold64Bluegray700"
            >
              Our Mentee Reviews
            </Text>
            <Img
              className="absolute bottom-[21%] h-10 inset-x-[0] mx-auto"
              src="images/img_group6.svg"
              alt="groupSix"
            />
          </div>
          <Img
            className="h-4 md:ml-[0] ml-[643px] mt-[31px]"
            src="images/img_group11.svg"
            alt="groupEleven"
          />
          <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between max-w-[1404px] mt-[76px] mx-auto md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat md:h-[421px] h-[469px] md:mt-0 mt-16 relative w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group7.svg')" }}
            >
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-[425px] items-center justify-end p-1.5 right-[0] top-[0] w-[89%]"
                style={{ backgroundImage: "url('images/img_group715.svg')" }}
              >
                <div className="flex flex-col items-center justify-start mt-[101px] w-[79%] md:w-full">
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtInterBold18"
                  >
                    Hannah Schmitt
                  </Text>
                  <Text
                    className="mt-[11px] text-center text-white-A700 text-xs"
                    size="txtInterRegular12WhiteA700"
                  >
                    Lead designer
                  </Text>
                  <Img
                    className="h-[27px] mt-1.5 w-[26px]"
                    src="images/img_clarityblockquoteline.svg"
                    alt="clarityblockquo"
                  />
                  <Text
                    className="mt-1 text-blue_gray-700_05 text-center text-xs w-full"
                    size="txtInterRegular12Bluegray70005"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus nibh mauris, nec turpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim{" "}
                  </Text>
                </div>
              </div>
              <Img
                className="absolute h-[94px] object-cover right-[33%] rounded-[47px] top-[0] w-[23%]"
                src="images/img_ellipse17.png"
                alt="ellipseSeventeen"
              />
            </div>
            <div className="md:h-[502px] h-[547px] relative w-[38%] md:w-full">
              <div className="absolute bottom-[0] md:h-[502px] h-[506px] inset-x-[0] mx-auto w-full">
                <Img
                  className="absolute h-[469px] right-[0] top-[0]"
                  src="images/img_vector6.svg"
                  alt="vectorSix"
                />
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto p-4 w-[88%]"
                  style={{ backgroundImage: "url('images/img_group714.svg')" }}
                >
                  <div className="flex flex-col items-center justify-start mb-[122px] mt-[91px] w-[98%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                      size="txtInterBold24Black900"
                    >
                      Hannah Schmitt
                    </Text>
                    <Text
                      className="mt-[18px] text-center text-lg text-white-A700"
                      size="txtInterRegular18"
                    >
                      Lead designer
                    </Text>
                    <Img
                      className="h-11 mt-[11px] w-[43px]"
                      src="images/img_clarityblockquoteline.svg"
                      alt="clarityblockquo_One"
                    />
                    <Text
                      className="mt-[9px] text-base text-blue_gray-700_05 text-center w-full"
                      size="txtInterRegular16Bluegray70005"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cursus nibh mauris, nec turpis orci lectus maecenas.
                      Suspendisse sed magna eget nibh in turpis. Consequat duis
                      diam lacus arcu. Faucibus venenatis felis id augue sit
                      cursus pellentesque enim{" "}
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[126px] left-[36%] object-cover rounded-[63px] top-[0] w-[24%]"
                src="images/img_ellipse16.png"
                alt="ellipseSixteen"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat md:h-[422px] h-[469px] md:mt-0 mt-[63px] relative w-[30%] md:w-full"
              style={{ backgroundImage: "url('images/img_group9.svg')" }}
            >
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-[425px] items-center justify-end left-[0] p-1.5 top-[0] w-[89%]"
                style={{ backgroundImage: "url('images/img_group716.svg')" }}
              >
                <div className="flex flex-col items-center justify-start mt-[102px] w-[79%] md:w-full">
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtInterBold18"
                  >
                    Hannah Schmitt
                  </Text>
                  <Text
                    className="mt-[11px] text-center text-white-A700 text-xs"
                    size="txtInterRegular12WhiteA700"
                  >
                    Lead designer
                  </Text>
                  <Img
                    className="h-[27px] mt-1.5 w-[26px]"
                    src="images/img_clarityblockquoteline.svg"
                    alt="clarityblockquo_Two"
                  />
                  <Text
                    className="mt-1 text-blue_gray-700_05 text-center text-xs w-full"
                    size="txtInterRegular12Bluegray70005"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus nibh mauris, nec turpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim{" "}
                  </Text>
                </div>
              </div>
              <Img
                className="absolute h-[94px] left-[33%] object-cover rounded-[47px] top-[0] w-[23%]"
                src="images/img_ellipse18.png"
                alt="ellipseEighteen"
              />
            </div>
          </div>
          <div className="flex flex-col font-inter items-center justify-start max-w-[1328px] mt-[110px] mx-auto md:px-5 w-full">
            <div className="bg-gray-900_10 flex flex-col items-start justify-start rounded-[24px] w-full">
              <div className="h-[370px] relative w-full">
                <div className="absolute bottom-[0] h-[344px] inset-x-[0] mx-auto w-full">
                  <div className="absolute h-[344px] inset-y-[0] my-auto right-[0] w-1/2 md:w-full">
                    <div className="h-[344px] m-auto w-full">
                      <Img
                        className="absolute bottom-[0] h-[230px] object-cover right-[0] w-[4%]"
                        src="images/img_blurpattern04.png"
                        alt="blurpatternFour"
                      />
                      <div className="absolute backdrop-opacity-[0.5] bg-indigo-400_03 blur-[600.00px] h-[344px] inset-[0] justify-center m-auto rounded-[316px] w-[97%]"></div>
                    </div>
                    <Img
                      className="absolute bottom-[8%] h-[196px] object-cover right-[0]"
                      src="images/img_linewave02.png"
                      alt="linewaveTwo"
                    />
                  </div>
                  <Text
                    className="absolute left-[11%] md:text-5xl text-[64px] text-gray-300 top-[3%]"
                    size="txtInterBlack64Gray300"
                  >
                    Become A Mentor
                  </Text>
                  <Img
                    className="absolute bottom-[0] h-[163px] left-[0] object-cover"
                    src="images/img_linewave01.png"
                    alt="linewaveOne"
                  />
                </div>
                <div className="absolute flex flex-col gap-5 items-start justify-start left-[11%] top-[35%]">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtInterRegular32WhiteA700"
                  >
                    & Guide ThinkWht Talent !
                  </Text>
                  <Text
                    className="text-white-A700_af text-xs w-full"
                    size="txtInterRegular12WhiteA700af"
                  >
                    Join the clan of 500+ mentors & guide talent to help them
                    create a difference. Through 1:1 sessions, share learnings
                    through your vast experience.
                  </Text>
                </div>
                <Img
                  className="absolute h-[370px] inset-y-[0] my-auto object-cover right-[8%] w-[31%]"
                  src="images/img_physicaldistancingglassiso.png"
                  alt="physicaldistanc"
                />
              </div>
              <Img
                className="md:h-auto h-px object-cover w-[24%]"
                src="images/img_blurpattern01.png"
                alt="blurpatternOne"
              />
            </div>
          </div>
          <div className="flex flex-row font-inter gap-[25px] items-start justify-end md:ml-[0] ml-[629px] mt-20 md:px-5 w-[17%] md:w-full">
            <Text
              className="sm:text-[44px] md:text-[50px] text-[58px] text-center text-indigo-900 tracking-[-1.16px]"
              size="txtInterSemiBold58"
            >
              FAQ’s
            </Text>
            <div className="md:h-12 h-[65px] relative w-[28%]">
              <Img
                className="absolute h-12 left-[0] rounded-[7px] top-[6%]"
                src="images/img_volume_indigo_a400.svg"
                alt="volume"
              />
              <div
                className="absolute bg-cover bg-no-repeat md:h-3 h-[65px] inset-y-[0] my-auto p-3 right-[0] w-[92%]"
                style={{ backgroundImage: "url('images/img_group606.svg')" }}
              >
                <Img
                  className="absolute h-3 left-1/4 top-1/4"
                  src="images/img_location_white_a700.svg"
                  alt="location_One"
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
          <Text
            className="md:ml-[0] ml-[587px] mt-[11px] text-white-A700 text-xl"
            size="txtInterSemiBold20"
          >
            Our Products
          </Text>
          <div className="flex md:flex-col flex-row font-inter md:gap-10 items-center justify-between max-w-[1354px] mt-3 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[26px] items-center justify-start w-[46%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-end p-7 sm:px-5 rounded-[16px] shadow-bs14 w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start mt-[11px] w-[98%] md:w-full">
                  <div className="flex sm:flex-col flex-row font-inter sm:gap-[57px] items-start justify-between w-full">
                    <Text
                      className="leading-[28.00px] sm:mt-0 mt-1 text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                      size="txtInterMedium22"
                    >
                      What is mentorship and why it is important ?
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
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between p-[23px] sm:px-5 rounded-[16px] shadow-bs14 w-full">
                  <Text
                    className="text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                    size="txtInterMedium22"
                  >
                    How does mentorship program work?
                  </Text>
                  <div className="bg-gray-50 flex flex-col items-center justify-start mr-[11px] sm:mt-0 my-4 p-[11px] rounded-lg">
                    <Img
                      className="h-[18px] w-[19px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between p-[26px] sm:px-5 rounded-[16px] shadow-bs14 w-full">
                  <Text
                    className="text-[22px] text-blue_gray-900_04 text-center sm:text-lg md:text-xl tracking-[-0.44px]"
                    size="txtInterMedium22"
                  >
                    What are benefits of being mentor ?
                  </Text>
                  <div className="bg-gray-50 flex flex-col items-center justify-start mr-2 sm:mt-0 my-[13px] p-[11px] rounded-lg">
                    <Img
                      className="h-[18px] w-[19px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </div>
                </div>
              </List>
            </div>
            <div className="flex md:flex-1 flex-col gap-3 justify-start w-[49%] md:w-full">
              <List
                className="flex flex-col gap-[23px] mr-[33px] w-[95%]"
                orientation="vertical"
              >
                <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-[25px] sm:px-5 rounded-[16px] shadow-bs14 w-full">
                  <Text
                    className="text-[22px] text-blue_gray-900_04 text-center sm:text-lg md:text-xl tracking-[-0.44px]"
                    size="txtInterMedium22"
                  >
                    How do I apply to become a mentor?
                  </Text>
                  <div className="bg-gray-50 flex flex-col items-center justify-start mr-4 sm:mt-0 my-3.5 p-[11px] rounded-lg">
                    <Img
                      className="h-[18px] w-[19px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex sm:flex-col flex-row gap-[27px] items-center justify-start p-[25px] sm:px-5 rounded-[16px] shadow-bs14 w-full">
                  <Text
                    className="sm:flex-1 mb-1 sm:mt-0 mt-[11px] text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl tracking-[-0.44px] w-[85%] sm:w-full"
                    size="txtInterMedium22"
                  >
                    Is the mentorship program limited to a specific field or
                    industry?
                  </Text>
                  <div className="bg-gray-50 flex sm:flex-1 flex-col items-center justify-start sm:mt-0 my-3.5 p-[11px] rounded-lg w-[8%] sm:w-full">
                    <Img
                      className="h-[18px] w-[19px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-[29px] sm:px-5 rounded-[16px] shadow-bs14 w-full">
                  <Text
                    className="text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl tracking-[-0.44px]"
                    size="txtInterMedium22"
                  >
                    Can I be both mentor and mentee?
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
              <div className="h-24 md:ml-[0] ml-[554px] relative w-[97px]">
                <Img
                  className="absolute h-24 inset-y-[0] my-auto right-[0]"
                  src="images/img_vector_gray_800.svg"
                  alt="vector_Three"
                />
                <Img
                  className="absolute bottom-[22%] h-[27px] left-[0] w-[27px]"
                  src="images/img_reply_gray_800.svg"
                  alt="reply"
                />
              </div>
            </div>
          </div>
          <div className="font-inter h-[1003px] md:h-[1161px] mt-[158px] md:px-5 relative w-full">
            <Img
              className="h-px ml-auto mr-[63px] mt-[233px] w-px"
              src="images/img_vector_1x1.svg"
              alt="vector_Four"
            />
            <footer className="absolute flex inset-[0] items-center justify-center m-auto w-full">
              <FrontendDevelopmentPageColumnEighteen className="flex flex-col items-center justify-center w-full" />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorshippagePage;
