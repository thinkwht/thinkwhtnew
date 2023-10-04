import React from "react";

import { Button, Img, Input, Line, List, Radio, Text } from "components";
import Footer1 from "components/Footer1";
import Header3 from "components/Header3";

import { CloseSVG } from "../../assets/images";

const UIUXContestpageOnePage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <Header3 className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="md:h-[594px] h-[939px] mx-auto w-full">
              <div className="absolute bg-blue-800 h-[528px] inset-x-[0] mx-auto top-[0] w-full"></div>
              <div
                className="absolute bg-cover bg-no-repeat bottom-[0] md:h-[594px] h-[881px] inset-x-[0] mx-auto p-2.5 w-full"
                style={{ backgroundImage: "url('images/img_group682.svg')" }}
              >
                <div className="absolute bottom-[13%] font-inter h-[591px] md:h-[594px] right-[2%] w-[84%] md:w-full">
                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[85%]">
                    <div className="bg-gray-900 border-2 border-gray-700 border-solid flex flex-col items-center justify-start p-[5px] rounded-bl rounded-br rounded-tl-[28px] rounded-tr-[28px] w-[81%] md:w-full">
                      <div className="bg-black-900 flex flex-col items-center justify-start p-4 rounded-tl-[22px] rounded-tr-[22px] w-full">
                        <div className="h-[480px] md:h-[496px] my-2 relative w-full">
                          <div className="absolute md:h-[411px] h-[480px] inset-[0] justify-center m-auto w-full">
                            <div className="absolute bg-white-A700 md:h-[411px] h-[479px] inset-[0] justify-center m-auto pl-2.5 pt-2.5 w-full">
                              <Img
                                className="absolute bottom-[0] h-[411px] right-[0]"
                                src="images/img_rectangle20.svg"
                                alt="rectangleTwenty"
                              />
                              <Img
                                className="absolute h-[68px] left-[8%] object-cover top-[2%] w-[14%]"
                                src="images/img_thinkwhatlogohighfinal.png"
                                alt="thinkwhatlogohi_One"
                              />
                              <Text
                                className="absolute left-[3%] md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900_07 top-1/4"
                                size="txtInterExtraBold32"
                              >
                                Crafting Experiences :
                              </Text>
                              <div className="absolute flex sm:flex-col flex-row sm:gap-5 items-start justify-start right-[8%] top-[8%] w-[62%]">
                                <Text
                                  className="text-center text-gray-900_07 text-sm"
                                  size="txtInterMedium14"
                                >
                                  Home
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[90px] text-center text-gray-900_07 text-sm"
                                  size="txtInterMedium14"
                                >
                                  About{" "}
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[70px] text-center text-gray-900_07 text-sm"
                                  size="txtInterMedium14"
                                >
                                  Contact
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[65px] text-gray-900_07 text-sm"
                                  size="txtInterMedium14"
                                >
                                  +91-6387889987{" "}
                                </Text>
                              </div>
                            </div>
                            <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[13%] w-1/2">
                              <Img
                                className="h-[295px] md:h-auto object-cover w-full"
                                src="images/img_screen.png"
                                alt="screen"
                              />
                            </div>
                          </div>
                          <div className="absolute bottom-[20%] flex flex-col md:gap-10 gap-[77px] justify-start left-[3%] w-[59%]">
                            <Text
                              className="leading-[90.00%] text-base text-blue_gray-400"
                              size="txtInterRegular16Bluegray400"
                            >
                              <>
                                “ Step into the world of creativity and
                                innovation with our
                                <br /> UI/UX Design Contest!”
                              </>
                            </Text>
                            <div className="bg-gray-900_07 flex flex-row gap-[50px] items-center justify-start md:ml-[0] ml-[7px] mr-[117px] p-[5px] w-[73%] md:w-full">
                              <Text
                                className="ml-[11px] mt-[3px] text-center text-white-A700 text-xs"
                                size="txtInterMedium12"
                              >
                                Bring Out Your Creativity
                              </Text>
                              <Img
                                className="h-3.5"
                                src="images/img_arrowright_orange_300.svg"
                                alt="arrowright"
                              />
                            </div>
                          </div>
                          <div className="absolute bg-orange-A200_01 h-[23px] left-[9%] top-[40%] w-[46%]"></div>
                          <Text
                            className="absolute left-[4%] text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900_07 top-[35%]"
                            size="txtInterBlack36Gray90007"
                          >
                            UI/UX Design Challenge
                          </Text>
                          <div className="absolute bg-white-A700_6c h-[480px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                      </div>
                      <Text
                        className="text-[13px] text-center text-gray-500"
                        size="txtInterThin13"
                      >
                        Macbook Pro
                      </Text>
                    </div>
                    <Img
                      className="h-[30px] md:h-auto object-cover"
                      src="images/img_bottom.png"
                      alt="bottom"
                    />
                    <div className="backdrop-opacity-[0.5] bg-black-900 blur-[44.00px] h-2.5 rounded-[452px] w-[90%]"></div>
                  </div>
                  <Button
                    className="cursor-pointer flex items-center justify-center left-[0] min-w-[201px] rounded-[5px] top-[4%]"
                    rightIcon={
                      <Img
                        className="h-[25px] mt-0.5 mb-px ml-[11px] left-[1%] absolute inset-y-[0]"
                        src="images/img_maximize.svg"
                        alt="maximize"
                      />
                    }
                    shape="round"
                    color="gray_900_08"
                    size="xs"
                    variant="fill"
                  >
                    <div className="font-medium leading-[normal] md:text-[22px] sm:text-xl text-2xl text-left">
                      Get started
                    </div>
                  </Button>
                </div>
                <Text
                  className="absolute left-[10%] md:text-5xl text-[80px] text-white-A700 top-[4%] tracking-[3.20px]"
                  size="txtInterBlack80"
                >
                  UI/UX CONTEST
                </Text>
                <Text
                  className="absolute left-[3%] md:text-5xl text-[352px] text-orange-200_05 top-[1%]"
                  size="txtLatoExtraBold352"
                >
                  “
                </Text>
              </div>
            </div>
            <Text
              className="leading-[51.00px] mt-[-1px] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-justify tracking-[1.28px] w-[93%] sm:w-full z-[1]"
              size="txtInterRegular32"
            >
              <>
                This contest is your opportunity to showcase your skills in user
                interface (UI) and user experience (UX) design, designing
                interfaces that are not only visually stunning but also
                intuitive and seamless. Whether you&#39;re a seasoned designer
                or a budding talent, join us in shaping the future of digital
                interactions. Let your imagination run wild, and let your
                designs transform the way people engage with technology. Get
                ready to design the future!&quot;
              </>
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[89px] mt-[67px] md:text-5xl text-[64px] text-blue-800 tracking-[2.56px]"
            size="txtInterBlack64Blue800"
          >
            <span className="text-orange-200_05 font-inter text-left font-black">
              “
            </span>
            <span className="text-blue-800 font-inter text-left font-black">
              COURSE HIGHLIGHTS -{" "}
            </span>
            <span className="text-blue_gray-800_07 font-inter text-left font-black">
              SYLLABUS
            </span>
            <span className="text-orange-200_05 font-inter text-left font-black">
              ”
            </span>
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1320px] mt-[102px] mx-auto md:px-5 w-full">
            <div className="bg-gradient10  flex md:flex-1 flex-col justify-end pt-14 rounded-[40px] w-[29%] md:w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[27px] mr-[195px] w-[41%] md:w-full">
                <Text className="text-white-A700 text-xl" size="txtInterBold20">
                  2023 trends
                </Text>
                <Text
                  className="mt-3 sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                  size="txtInterBold27"
                >
                  Design App
                </Text>
                <Img
                  className="h-[42px] mt-[5px]"
                  src="images/img_frame.svg"
                  alt="frame"
                />
              </div>
              <div className="h-[634px] md:h-[637px] mt-[3px] relative w-full">
                <Img
                  className="h-[634px] m-auto object-cover w-full"
                  src="images/img_image_634x375.png"
                  alt="image_Five"
                />
                <div className="absolute h-[634px] inset-[0] justify-center m-auto w-full">
                  <div className="h-[634px] m-auto w-full">
                    <Img
                      className="h-[634px] m-auto object-cover w-full"
                      src="images/img_image_1.png"
                      alt="image_Six"
                    />
                    <div className="absolute bg-light_blue-400_02 bottom-[0] h-[38px] inset-x-[0] mx-auto w-full"></div>
                  </div>
                  <Text
                    className="absolute bottom-[6%] left-[7%] text-base text-white-A700"
                    size="txtInterBold16"
                  >
                    UI/UX{" "}
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gradient11  flex md:flex-1 flex-col gap-[9px] justify-end md:ml-[0] ml-[95px] pt-14 rounded-[40px] w-[29%] md:w-full">
              <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[31px] mr-[95px]">
                <Text
                  className="text-blue-800_01 text-xl"
                  size="txtInterBold20Blue80001"
                >
                  2023 trends
                </Text>
                <Text
                  className="sm:text-[23px] md:text-[25px] text-[27px] text-blue-800_01"
                  size="txtInterBold27Blue80001"
                >
                  Website Designing
                </Text>
              </div>
              <div className="h-[676px] relative w-full">
                <Img
                  className="h-[42px] mb-[-7px] ml-[31px] z-[1]"
                  src="images/img_frame.svg"
                  alt="frame_One"
                />
                <div className="h-[641px] mt-auto mx-auto w-full">
                  <Img
                    className="h-[641px] m-auto object-cover w-full"
                    src="images/img_14.png"
                    alt="Fourteen"
                  />
                  <Text
                    className="absolute bottom-[5%] left-[6%] text-base text-white-A700"
                    size="txtInterBold16"
                  >
                    UI/UX{" "}
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="h-px md:ml-[0] ml-[25px] md:mt-0 mt-[134px]"
              src="images/img_line.svg"
              alt="line"
            />
            <div className="bg-gradient12  flex md:flex-1 flex-col gap-[9px] items-center justify-end md:ml-[0] ml-[42px] pt-[57px] rounded-[40px] w-[29%] md:w-full">
              <div className="flex flex-col gap-3 items-start justify-start">
                <Text className="text-white-A700 text-xl" size="txtInterBold20">
                  2023 trends
                </Text>
                <Text
                  className="sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                  size="txtInterBold27"
                >
                  Designing Landing Page
                </Text>
              </div>
              <div className="md:h-[668px] h-[675px] relative w-full">
                <div className="absolute h-[668px] inset-[0] justify-center m-auto w-full">
                  <div className="h-[668px] m-auto w-full">
                    <Img
                      className="absolute h-[668px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_image_668x375.png"
                      alt="image_Nine"
                    />
                    <Img
                      className="absolute bottom-[16%] h-[263px] object-cover right-[0] w-[56%]"
                      src="images/img_image_263x208.png"
                      alt="image_Ten"
                    />
                    <Img
                      className="absolute bottom-[0] h-[375px] object-cover right-[0] w-[88%]"
                      src="images/img_image_375x328.png"
                      alt="image_Eleven"
                    />
                  </div>
                  <Text
                    className="absolute bottom-[5%] left-[8%] text-base text-white-A700"
                    size="txtInterBold16"
                  >
                    UI/UX{" "}
                  </Text>
                </div>
                <Img
                  className="absolute h-[42px] left-[8%] top-[0]"
                  src="images/img_frame.svg"
                  alt="frame_Two"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1316px] mt-[84px] mx-auto md:px-5 w-full">
            <div className="bg-gradient12  flex md:flex-1 flex-col gap-[9px] justify-end pt-[57px] rounded-[40px] w-[29%] md:w-full">
              <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[31px] mr-[182px]">
                <Text className="text-white-A700 text-xl" size="txtInterBold20">
                  2023 trends
                </Text>
                <Text
                  className="sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                  size="txtInterBold27"
                >
                  Card Design
                </Text>
              </div>
              <div className="md:h-[668px] h-[675px] relative w-full">
                <div className="absolute h-[668px] inset-[0] justify-center m-auto w-full">
                  <div className="h-[668px] m-auto w-full">
                    <Img
                      className="absolute h-[668px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_image_668x375.png"
                      alt="image_Thirteen"
                    />
                    <Img
                      className="absolute bottom-[16%] h-[263px] object-cover right-[0] w-[56%]"
                      src="images/img_image_2.png"
                      alt="image_Fourteen"
                    />
                    <Img
                      className="absolute bottom-[0] h-[375px] object-cover right-[0] w-[88%]"
                      src="images/img_image_375x328.png"
                      alt="image_Fifteen"
                    />
                  </div>
                  <Text
                    className="absolute bottom-[5%] left-[8%] text-base text-white-A700"
                    size="txtInterBold16"
                  >
                    UI/UX{" "}
                  </Text>
                </div>
                <Img
                  className="absolute h-[42px] left-[8%] top-[0]"
                  src="images/img_frame.svg"
                  alt="frame_Three"
                />
              </div>
            </div>
            <div className="bg-gradient10  flex md:flex-1 flex-col justify-end pt-14 rounded-[40px] w-[29%] md:w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[27px] mr-[61px] w-[77%] md:w-full">
                <Text className="text-white-A700 text-xl" size="txtInterBold20">
                  2023 trends
                </Text>
                <Text
                  className="mt-3 sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                  size="txtInterBold27"
                >
                  Re-Design of Website
                </Text>
                <Img
                  className="h-[42px] mt-[5px]"
                  src="images/img_frame.svg"
                  alt="frame_Four"
                />
              </div>
              <div className="h-[634px] md:h-[637px] mt-[3px] relative w-full">
                <Img
                  className="h-[634px] m-auto object-cover w-full"
                  src="images/img_image_3.png"
                  alt="image_Eighteen"
                />
                <div className="absolute h-[634px] inset-[0] justify-center m-auto w-full">
                  <div className="h-[634px] m-auto w-full">
                    <Img
                      className="h-[634px] m-auto object-cover w-full"
                      src="images/img_image_4.png"
                      alt="image_Nineteen"
                    />
                    <div className="absolute bg-light_blue-400_02 bottom-[0] h-[38px] inset-x-[0] mx-auto w-full"></div>
                  </div>
                  <Text
                    className="absolute bottom-[6%] left-[7%] text-base text-white-A700"
                    size="txtInterBold16"
                  >
                    UI/UX{" "}
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gradient11  flex md:flex-1 flex-col gap-[9px] justify-end pt-14 rounded-[40px] w-[29%] md:w-full">
              <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[31px] mr-[93px]">
                <Text
                  className="text-blue-800_01 text-xl"
                  size="txtInterBold20Blue80001"
                >
                  2023 trends
                </Text>
                <Text
                  className="sm:text-[23px] md:text-[25px] text-[27px] text-blue-800_01"
                  size="txtInterBold27Blue80001"
                >
                  Application Design
                </Text>
              </div>
              <div className="h-[676px] relative w-full">
                <Img
                  className="h-[42px] mb-[-14px] ml-[31px] z-[1]"
                  src="images/img_frame.svg"
                  alt="frame_Five"
                />
                <div className="h-[648px] mt-auto mx-auto w-full">
                  <Img
                    className="h-[648px] m-auto object-cover w-full"
                    src="images/img_14_648x375.png"
                    alt="Fourteen_One"
                  />
                  <Text
                    className="absolute bottom-[6%] left-[6%] text-base text-white-A700"
                    size="txtInterBold16"
                  >
                    UI/UX{" "}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[111px] mt-[156px] md:text-5xl text-[64px] text-orange-300 tracking-[2.56px]"
            size="txtInterBlack64"
          >
            <span className="text-orange-300 font-inter text-left font-black">
              Explore{" "}
            </span>
            <span className="text-blue-800_01 font-inter text-left font-black">
              UI/UX
            </span>
            <span className="text-orange-300 font-inter text-left font-black">
              {" "}
              Contests{" "}
            </span>
          </Text>
          <List
            className="flex flex-col gap-[44.5px] items-center max-w-[1206px] mt-[59px] mx-auto md:px-5 w-full"
            orientation="vertical"
          >
            <div className="flex h-[351px] md:h-[681px] justify-end relative w-full">
              <Img
                className="h-[45px] mb-[119px] ml-[488px] mt-auto w-[46px]"
                src="images/img_user.svg"
                alt="user"
              />
              <div className="absolute border border-orange-200_03 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-[23px] sm:px-5 rounded-[20px] w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[85px] items-center justify-start ml-3 md:ml-[0] w-[91%] md:w-full">
                  <Img
                    className="h-[305px] sm:h-auto object-cover w-[36%] md:w-full"
                    src="images/img_rectangle4507.png"
                    alt="rectangle4507"
                  />
                  <div className="flex flex-col items-start justify-start w-[57%] md:w-full">
                    <Text
                      className="sm:text-[40px] md:text-[46px] text-[50px] text-blue-800_01"
                      size="txtInterMedium50Blue80001"
                    >
                      App Design
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-3 w-[81%] md:w-full">
                      <Radio
                        value="4daysleft"
                        className="mb-3 sm:mt-0 mt-4 sm:pr-5 text-base text-black-900 text-center tracking-[0.64px]"
                        inputClassName="bg-deep_orange-100 mr-[5px] rounded-[15px]"
                        checked={false}
                        name="4daysleft"
                        label="4 days left"
                        id="4daysleft"
                      ></Radio>
                      <Img
                        className="h-[59px] sm:ml-[0] ml-[113px] w-[59px]"
                        src="images/img_globe.svg"
                        alt="globe"
                      />
                      <Text
                        className="ml-7 sm:ml-[0] sm:mt-0 mt-[11px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_a5 text-center tracking-[1.28px]"
                        size="txtInterRegular32Black900a5"
                      >
                        Online
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[82px] mt-10 w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-600_01 sm:text-xl tracking-[0.96px] w-auto"
                        size="txtInterRegular24Gray60001"
                      >
                        7200-8000 Participants
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[29px] w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900_05 tracking-[1.92px]"
                        size="txtInterBlack48"
                      >
                        ₹
                      </Text>
                      <Text
                        className="ml-9 sm:ml-[0] sm:mt-0 mt-[13px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_a0 tracking-[1.28px]"
                        size="txtInterSemiBold32"
                      >
                        50,000
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[60px] sm:mt-0 mt-[15px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[0.96px]"
                        size="txtInterRegular24Black900"
                      >
                        Prizes
                      </Text>
                      <Button
                        className="cursor-pointer font-medium h-[58px] leading-[normal] sm:ml-[0] ml-[70px] rounded-[29px] text-2xl md:text-[22px] text-center sm:text-xl w-[207px]"
                        color="blue_gray_700"
                        size="md"
                        variant="fill"
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Line className="self-center h-1 bg-blue_gray-900_75 w-[21%]" />
            <div className="flex h-[351px] md:h-[681px] justify-end relative w-full">
              <Img
                className="h-[45px] mb-[119px] ml-[490px] mt-auto w-[46px]"
                src="images/img_user.svg"
                alt="user"
              />
              <div className="absolute border border-orange-200_03 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-[23px] sm:px-5 rounded-[20px] w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[81px] items-center justify-start ml-4 md:ml-[0] w-[90%] md:w-full">
                  <Img
                    className="h-[305px] sm:h-auto object-cover w-[36%] md:w-full"
                    src="images/img_rectangle4509.png"
                    alt="rectangle4509"
                  />
                  <div className="flex flex-col items-start justify-start w-[57%] md:w-full">
                    <Text
                      className="sm:text-[40px] md:text-[46px] text-[50px] text-blue-800_01"
                      size="txtInterMedium50Blue80001"
                    >
                      Website Design
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-3 w-[81%] md:w-full">
                      <Radio
                        value="20daysleft"
                        className="mb-3 sm:mt-0 mt-4 sm:pr-5 text-base text-black-900 text-center tracking-[0.64px]"
                        inputClassName="bg-deep_orange-100 mr-[5px] rounded-[15px]"
                        checked={false}
                        name="20daysleft"
                        label="20 days left"
                        id="20daysleft"
                      ></Radio>
                      <Img
                        className="h-[59px] sm:ml-[0] ml-[113px] w-[59px]"
                        src="images/img_globe.svg"
                        alt="globe"
                      />
                      <Text
                        className="ml-7 sm:ml-[0] sm:mt-0 mt-[11px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_a5 text-center tracking-[1.28px]"
                        size="txtInterRegular32Black900a5"
                      >
                        Online
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[87px] mt-[37px] w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-600_01 sm:text-xl tracking-[0.96px] w-auto"
                        size="txtInterRegular24Gray60001"
                      >
                        6200-4000 Participants
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-8 w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900_05 tracking-[1.92px]"
                        size="txtInterBlack48"
                      >
                        ₹
                      </Text>
                      <Text
                        className="ml-9 sm:ml-[0] sm:mt-0 mt-[13px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_a0 tracking-[1.28px]"
                        size="txtInterSemiBold32"
                      >
                        30,000
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[59px] sm:mt-0 mt-[15px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[0.96px]"
                        size="txtInterRegular24Black900"
                      >
                        Prizes
                      </Text>
                      <Button
                        className="cursor-pointer font-medium h-[58px] leading-[normal] sm:ml-[0] ml-[70px] rounded-[29px] text-2xl md:text-[22px] text-center sm:text-xl w-[207px]"
                        color="blue_gray_700"
                        size="md"
                        variant="fill"
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </List>
          <Button
            className="cursor-pointer flex h-[70px] items-center justify-center md:ml-[0] ml-[547px] mr-[573px] mt-[76px] rounded-[5px] w-80"
            rightIcon={
              <Img
                className="h-[25px] mt-0.5 mb-px ml-[11px]"
                src="images/img_maximize.svg"
                alt="maximize"
              />
            }
            shape="round"
            color="blue_800"
            size="lg"
            variant="fill"
          >
            <div className="font-medium leading-[normal] md:text-[22px] sm:text-xl text-2xl text-left">
              View all UI Contests
            </div>
          </Button>
          <div className="flex flex-row gap-3.5 items-center justify-end md:ml-[0] ml-[634px] mt-[119px] md:px-5 w-[17%] md:w-full">
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
                style={{ backgroundImage: "url('images/img_group606.svg')" }}
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
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1355px] mt-[49px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[26px] items-center justify-start w-[46%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-end p-7 sm:px-5 rounded-[16px] shadow-bs14 w-full">
                <div className="flex flex-col items-center justify-start mt-[11px] w-[98%] md:w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row font-inter sm:gap-[57px] items-start justify-between w-full">
                      <Text
                        className="leading-[28.00px] sm:mt-0 mt-1 text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                        size="txtInterMedium22"
                      >
                        Who is eligible to apply for the internship program?
                      </Text>
                      <div className="bg-indigo-900 flex flex-col items-center justify-start mb-[18px] p-3 rounded-lg">
                        <Img
                          className="h-0.5 my-1.5 rounded-[50%] w-[91%]"
                          src="images/img_vector_white_a700_2x19.svg"
                          alt="vector"
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
                    className="absolute bottom-[37%] left-[5%] text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                    size="txtInterMedium22"
                  >
                    {" "}
                    How do I apply for internship?
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
                    className="absolute h-max inset-y-[0] left-[4%] my-auto text-[22px] text-blue_gray-900_04 text-center sm:text-lg md:text-xl tracking-[-0.44px]"
                    size="txtInterMedium22"
                  >
                    Is the internship program paid?
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
                    className="absolute bottom-[34%] left-[3%] text-[22px] text-blue_gray-900_04 text-center sm:text-lg md:text-xl tracking-[-0.44px]"
                    size="txtInterMedium22"
                  >
                    What is the duration for the internship program?
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
                    What projects or task will I be working on during internship
                    program?
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
                    className="absolute bottom-[23%] left-[4%] text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl tracking-[-0.44px] w-[87%] sm:w-full"
                    size="txtInterMedium22"
                  >
                    Will I receive a certificate after completing the
                    internship?
                  </Text>
                </div>
              </List>
              <Img
                className="h-[104px] md:ml-[0] ml-[554px]"
                src="images/img_group_gray_800.svg"
                alt="group"
              />
            </div>
          </div>
          <Footer1 className="flex items-center justify-center mt-[138px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default UIUXContestpageOnePage;
