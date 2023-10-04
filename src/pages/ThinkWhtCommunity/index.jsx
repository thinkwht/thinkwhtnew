import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer4 from "components/Footer4";
import Header3 from "components/Header3";
import ThinkWhtCommunityStackhere from "components/ThinkWhtCommunityStackhere";

import { CloseSVG } from "../../assets/images";

const ThinkWhtCommunityPage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <Header3 className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="md:h-[1064px] h-[1323px] sm:h-[928px] md:px-5 relative w-full">
            <div className="md:h-[1064px] h-[1323px] sm:h-[928px] m-auto w-full">
              <div className="md:h-[1064px] h-[1323px] sm:h-[928px] m-auto w-full">
                <div className="md:h-[1064px] h-[1323px] sm:h-[928px] m-auto w-full">
                  <div className="absolute flex flex-col inset-x-[0] mx-auto top-[0] w-full">
                    <div className="bg-blue-800_01 flex flex-col items-start justify-start mx-auto p-[60px] md:px-10 sm:px-5 w-full">
                      <div className="flex flex-col items-start justify-start mb-1 md:ml-[0] ml-[22px] w-[77%] md:w-full">
                        <Text
                          className="md:text-5xl text-[64px] text-orange-300"
                          size="txtInterBlack64"
                        >
                          THINKWHT COMMUNITY HEAD{" "}
                        </Text>
                        <Text
                          className="mt-5 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                          size="txtInterRegular32WhiteA700"
                        >
                          Qualify our test and earn 5k per month
                        </Text>
                        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[17px] w-[94%] md:w-full">
                          <div className="flex flex-col md:gap-10 gap-[420px] justify-start md:mt-0 mt-4 w-[24%] md:w-full">
                            <Button
                              className="!text-blue_gray-700 cursor-pointer font-medium min-w-[224px] rounded-[28px] text-center text-xl"
                              color="orange_300"
                              size="md"
                              variant="fill"
                            >
                              Apply now
                            </Button>
                            <Img
                              className="h-[93px] md:ml-[0] ml-[23px] w-[92px]"
                              src="images/img_settings_white_a700.svg"
                              alt="settings"
                            />
                          </div>
                          <div className="h-[650px] relative w-[64%] md:w-full">
                            <Img
                              className="h-[130px] mb-[-53px] ml-[201px] object-cover w-1/4 z-[1]"
                              src="images/img_crownhd1.png"
                              alt="crownhdOne"
                            />
                            <div className="md:h-[557px] h-[573px] mt-auto mx-auto w-full">
                              <Img
                                className="absolute h-[557px] inset-[0] justify-center m-auto"
                                src="images/img_group1000001878.svg"
                                alt="group1000001878"
                              />
                              <Img
                                className="absolute h-[509px] left-[8%] object-cover top-[0] w-[65%]"
                                src="images/img_unsplashkipqvvtoc1s.png"
                                alt="unsplashkipqvvt"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-[392px] ml-[52px] mt-[-69.62px] z-[1]"
                      src="images/img_group1000001876.svg"
                      alt="group1000001876"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[385px] right-[6%]"
                    src="images/img_group1000001876.svg"
                    alt="group1000001877"
                  />
                </div>
                <Img
                  className="absolute bottom-[4%] h-[418px] object-cover right-[10%] w-[22%]"
                  src="images/img_unsplashy9l5wmifay.png"
                  alt="unsplashy9l5wmi"
                />
              </div>
              <div className="absolute bottom-[24%] flex flex-row sm:gap-10 items-start justify-between left-[22%] w-[49%]">
                <Img
                  className="h-[111px] md:h-auto mb-[90px] object-cover w-[110px]"
                  src="images/img_group1761.png"
                  alt="group1761"
                />
                <Img
                  className="h-[111px] md:h-auto mt-[90px] object-cover w-[110px]"
                  src="images/img_group1764.png"
                  alt="group1764"
                />
              </div>
            </div>
            <div className="absolute bottom-[9%] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto w-[86%]">
              <Img
                className="h-[415px] sm:h-auto md:mt-0 mt-[57px] object-cover w-[19%] md:w-full"
                src="images/img_unsplash0zx1bdv5bny.png"
                alt="unsplash0zx1bdv"
              />
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[283px] items-start justify-start md:ml-[0] ml-[119px] p-14 md:px-10 sm:px-5 w-[36%] md:w-full"
                style={{ backgroundImage: "url('images/img_group256.svg')" }}
              >
                <div className="flex flex-col items-center justify-start mb-0.5 mt-[11px] rotate-[17deg]">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-700 w-full"
                    size="txtInterMedium32Bluegray700"
                  >
                    Be the face of your college
                  </Text>
                </div>
              </div>
              <Img
                className="h-[84px] md:ml-[0] ml-[359px] md:mt-0 mt-[69px]"
                src="images/img_minimize.svg"
                alt="minimize"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[899px] mt-[118px] mx-auto md:px-5 w-full">
            <Text
              className="md:text-5xl text-8xl text-blue_gray-700"
              size="txtInterBlack96Bluegray700"
            >
              Program Structure
            </Text>
          </div>
          <div className="h-44 md:h-[274px] md:ml-[0] ml-[650px] mt-[98px] md:px-5 relative w-[11%]">
            <div className="absolute bg-black-900 h-44 inset-y-[0] left-[0] my-auto rounded-[30px] w-[96%]"></div>
            <div className="absolute bg-amber-100 border-[3px] border-blue-800_01 border-solid flex flex-col gap-[7px] h-full inset-y-[0] items-center justify-start my-auto p-1.5 right-[0] rounded-[30px] w-[96%]">
              <div className="h-[102px] relative w-[88%]">
                <Img
                  className="absolute h-[102px] inset-y-[0] left-[10%] my-auto object-cover w-[74%]"
                  src="images/img_thinkwhatlogohighfinal_70x90.png"
                  alt="thinkwhatlogohi_One"
                />
                <Line className="absolute bg-blue-800_01 bottom-[6%] h-px inset-x-[0] mx-auto w-full" />
              </div>
              <Text
                className="mb-3.5 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-700"
                size="txtInterMedium32Bluegray700"
              >
                Team
              </Text>
            </div>
          </div>
          <Line className="bg-blue-800_01 h-[45px] md:ml-[0] ml-[728px] mr-[711px] mt-[41px] rotate-[-91deg] w-px" />
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-center md:ml-[0] ml-[358px] md:px-5 w-[54%] md:w-full">
            <Img className="h-[23px]" src="images/img_lock.svg" alt="lock" />
            <Line className="bg-blue-800_01 h-0.5 mb-[21px] rounded-[1px] w-[99%]" />
            <Img
              className="h-[23px]"
              src="images/img_question.svg"
              alt="question"
            />
          </div>
          <div className="flex flex-row sm:gap-10 items-start justify-between max-w-[891px] mt-[21px] mx-auto md:px-5 w-full">
            <div className="h-44 md:h-[182px] mb-1.5 relative w-[14%]">
              <Img
                className="absolute bottom-[0] h-[133px] inset-x-[0] mx-auto"
                src="images/img_group1000001795.svg"
                alt="group1000001795"
              />
              <Img
                className="absolute h-44 inset-[0] justify-center m-auto object-cover w-[98%]"
                src="images/img_unsplashkipqvvtoc1s.png"
                alt="unsplashkipqvvt_One"
              />
            </div>
            <div className="h-[175px] md:h-[182px] mt-[7px] relative w-[15%]">
              <Img
                className="absolute bottom-[0] h-[133px] left-[0]"
                src="images/img_group1000001795.svg"
                alt="group1000001797"
              />
              <Img
                className="absolute h-[175px] inset-[0] justify-center m-auto object-cover w-[97%]"
                src="images/img_unsplashy9l5wmifay_175x122.png"
                alt="unsplashy9l5wmi_One"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start max-w-[1344px] mt-5 mx-auto md:px-5 w-full">
            <div className="h-[70px] md:h-[78px] mb-2 relative w-[44%] md:w-full">
              <div className="absolute flex flex-col h-full inset-y-[0] justify-start left-[0] my-auto w-[55%]">
                <Line className="bg-orange-300 h-[37px] md:ml-[0] ml-[312px] w-0.5" />
                <Img
                  className="h-[33px] mr-[306px]"
                  src="images/img_vector157.svg"
                  alt="vector157"
                />
              </div>
              <Line className="absolute bg-orange-300 bottom-[46%] h-px inset-x-[0] mx-auto w-[99%]" />
            </div>
            <Img
              className="h-[33px] mb-2 md:mt-0 mt-9"
              src="images/img_vector156.svg"
              alt="vector156"
            />
            <Img
              className="h-[33px] md:ml-[0] ml-[170px] md:mt-0 mt-[45px]"
              src="images/img_vector164.svg"
              alt="vector164"
            />
            <div className="h-[70px] md:mt-0 mt-[7px] relative w-[44%] md:w-full">
              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[48%]">
                <div className="flex flex-row items-start justify-between w-full">
                  <Line className="bg-orange-300 h-[37px] mb-8 w-0.5" />
                  <Img
                    className="h-[33px] mt-[37px]"
                    src="images/img_vector156.svg"
                    alt="vector163"
                  />
                </div>
              </div>
              <Line className="absolute bg-orange-300 bottom-[46%] h-px inset-x-[0] mx-auto w-[99%]" />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1402px] mt-6 mx-auto md:px-5 w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-8 grid grid-cols-2 md:mt-0 mt-[3px] w-[14%] md:w-full"
              orientation="horizontal"
            >
              <div className="h-[92px] relative w-full">
                <div className="absolute bg-black-900 h-[92px] inset-[0] justify-center m-auto rounded-[30px] w-[97%]"></div>
                <div className="absolute bg-blue_gray-700 border-[3px] border-solid border-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto rounded-[30px] w-[97%]">
                  <Img
                    className="h-[88px] md:h-auto ml-0.5 md:ml-[0] object-cover w-[86%]"
                    src="images/img_unsplashghmsapoko0.png"
                    alt="unsplashghmsapo"
                  />
                </div>
              </div>
              <div className="h-[92px] relative w-full">
                <div className="absolute bg-black-900 h-[92px] inset-[0] justify-center m-auto rounded-[30px] w-[97%]"></div>
                <div className="absolute bg-blue_gray-700 border-[3px] border-solid border-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[30px] w-[97%]">
                  <Img
                    className="h-[87px] md:h-auto mt-[3px] object-cover w-[91%]"
                    src="images/img_unsplashajiqzdaud7a.png"
                    alt="unsplashajiqzda"
                  />
                </div>
              </div>
            </List>
            <div className="h-[92px] md:ml-[0] ml-[25px] md:mt-0 mt-0.5 relative w-[6%] md:w-full">
              <div className="absolute bg-black-900 h-[92px] inset-[0] justify-center m-auto rounded-[30px] w-[97%]"></div>
              <div className="absolute bg-blue_gray-700 border-[3px] border-solid border-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[30px] w-[97%]">
                <Img
                  className="h-[91px] md:h-auto object-cover w-[78%]"
                  src="images/img_unsplashghmsapoko0_91x59.png"
                  alt="unsplashghmsapo"
                />
              </div>
            </div>
            <div className="h-[92px] md:ml-[0] ml-[49px] md:mt-0 mt-0.5 relative w-[6%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start ml-5 w-[9%]"
                style={{ backgroundImage: "url('images/img_group264.svg')" }}
              >
                <Img
                  className="h-[34px]"
                  src="images/img_group264.svg"
                  alt="lightbulb"
                />
              </div>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                style={{ backgroundImage: "url('images/img_group260.svg')" }}
              >
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[92px] items-center justify-start p-0.5 w-full"
                  style={{ backgroundImage: "url('images/img_group260.svg')" }}
                >
                  <div className="h-[88px] relative w-[86%]">
                    <Img
                      className="h-[88px] m-auto object-cover w-full"
                      src="images/img_unsplashghmsapoko0.png"
                      alt="unsplashghmsapo_One"
                    />
                    <Img
                      className="absolute h-[88px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_unsplashghmsapoko0.png"
                      alt="unsplashghmsapo_Two"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[92px] items-center justify-start md:ml-[0] ml-[26px] md:mt-0 mt-0.5 w-[6%] md:w-full"
              style={{ backgroundImage: "url('images/img_group260.svg')" }}
            >
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[92px] items-end justify-end p-0.5 w-full"
                style={{ backgroundImage: "url('images/img_group260.svg')" }}
              >
                <div className="h-[86px] relative w-[91%]">
                  <Img
                    className="h-[86px] m-auto object-cover w-full"
                    src="images/img_unsplashajiqzdaud7a.png"
                    alt="unsplashajiqzda"
                  />
                  <Img
                    className="absolute h-[86px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_unsplashajiqzdaud7a.png"
                    alt="unsplashajiqzda_One"
                  />
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[92px] items-center justify-start md:ml-[0] ml-[26px] md:mt-0 mt-0.5 w-[6%] md:w-full"
              style={{ backgroundImage: "url('images/img_group260.svg')" }}
            >
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[92px] items-end justify-start w-full"
                style={{ backgroundImage: "url('images/img_group260.svg')" }}
              >
                <div className="h-[91px] mr-[7px] relative w-[76%]">
                  <Img
                    className="h-[91px] m-auto object-cover w-full"
                    src="images/img_unsplashghmsapoko0_91x59.png"
                    alt="unsplashghmsapo_Three"
                  />
                  <Img
                    className="absolute h-[91px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_unsplashghmsapoko0_91x59.png"
                    alt="unsplashghmsapo_Four"
                  />
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[92px] items-center justify-start mb-0.5 md:ml-[0] ml-[111px] p-0.5 w-[6%] md:w-full"
              style={{ backgroundImage: "url('images/img_group260.svg')" }}
            >
              <Img
                className="h-[88px] md:h-auto object-cover w-[86%]"
                src="images/img_unsplashghmsapoko0.png"
                alt="unsplashghmsapo_Five"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[92px] items-end justify-start mb-0.5 ml-8 md:ml-[0] pt-[3px] px-[3px] w-[6%] md:w-full"
              style={{ backgroundImage: "url('images/img_group260.svg')" }}
            >
              <Img
                className="h-[88px] md:h-auto object-cover w-[95%]"
                src="images/img_unsplashajiqzdaud7a.png"
                alt="unsplashajiqzda_Two"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[92px] items-center justify-start mb-[3px] md:ml-[0] ml-[25px] px-2 w-[6%] md:w-full"
              style={{ backgroundImage: "url('images/img_group260.svg')" }}
            >
              <Img
                className="h-[91px] md:h-auto object-cover w-[96%]"
                src="images/img_unsplashghmsapoko0_91x59.png"
                alt="unsplashghmsapo_Six"
              />
            </div>
            <div className="h-[92px] md:h-[95px] mb-[3px] md:ml-[0] ml-[49px] relative w-[6%] md:w-full">
              <div className="h-[34px] ml-5 w-[8%]">
                <Line className="bg-blue_gray-700 h-[34px] m-auto w-1.5" />
                <Line className="absolute bg-blue_gray-700 h-[34px] inset-[0] justify-center m-auto w-1.5" />
              </div>
              <div className="absolute h-[92px] inset-[0] justify-center m-auto w-full">
                <div className="h-[92px] m-auto w-full">
                  <div className="absolute bg-black-900 h-[92px] inset-[0] justify-center m-auto rounded-[30px] w-[97%]"></div>
                  <div className="absolute bg-blue_gray-700 border-[3px] border-solid border-white-A700 h-[92px] inset-[0] justify-center m-auto rounded-[30px] w-[97%]"></div>
                </div>
                <div className="absolute h-[92px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute bg-black-900 h-[92px] inset-[0] justify-center m-auto rounded-[30px] w-[97%]"></div>
                  <div className="absolute bg-blue_gray-700 border-[3px] border-solid border-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[30px] w-[97%]">
                    <div className="h-[88px] relative w-[84%]">
                      <Img
                        className="h-[88px] m-auto object-cover w-full"
                        src="images/img_unsplashghmsapoko0.png"
                        alt="unsplashghmsapo_Seven"
                      />
                      <Img
                        className="absolute h-[88px] inset-[0] justify-center m-auto object-cover w-full"
                        src="images/img_unsplashghmsapoko0.png"
                        alt="unsplashghmsapo_Eight"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[26px] grid grid-cols-2 mb-[3px] md:ml-[0] ml-[26px] w-[14%] md:w-full"
              orientation="horizontal"
            >
              <div className="h-[92px] relative w-full">
                <div className="h-[92px] m-auto w-full">
                  <div className="absolute bg-black-900 h-[92px] inset-[0] justify-center m-auto rounded-[30px] w-[97%]"></div>
                  <div className="absolute bg-blue_gray-700 border-[3px] border-solid border-white-A700 h-[92px] inset-[0] justify-center m-auto rounded-[30px] w-[97%]"></div>
                </div>
                <div className="absolute h-[92px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute bg-black-900 h-[92px] inset-[0] justify-center m-auto rounded-[30px] w-[97%]"></div>
                  <div className="absolute bg-blue_gray-700 border-[3px] border-solid border-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[30px] w-[97%]">
                    <div className="h-[86px] md:h-[89px] mt-[3px] relative w-[92%]">
                      <Img
                        className="h-[86px] m-auto object-cover w-full"
                        src="images/img_unsplashajiqzdaud7a.png"
                        alt="unsplashajiqzda"
                      />
                      <Img
                        className="absolute h-[86px] inset-[0] justify-center m-auto object-cover w-full"
                        src="images/img_unsplashajiqzdaud7a.png"
                        alt="unsplashajiqzda_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[92px] relative w-full">
                <div className="absolute h-[92px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute bg-black-900 h-[92px] inset-[0] justify-center m-auto rounded-[30px] w-[97%]"></div>
                  <div className="absolute bg-blue_gray-700 border-[3px] border-solid border-white-A700 h-[92px] inset-[0] justify-center m-auto rounded-[30px] w-[97%]"></div>
                  <div className="absolute h-[92px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute bg-black-900 h-[92px] inset-[0] justify-center m-auto rounded-[30px] w-[97%]"></div>
                    <div className="absolute bg-blue_gray-700 border-[3px] border-solid border-white-A700 h-[92px] inset-[0] justify-center m-auto rounded-[30px] w-[97%]"></div>
                  </div>
                </div>
                <div className="absolute h-[92px] inset-y-[0] my-auto right-[10%] w-[76%]">
                  <Img
                    className="h-[92px] m-auto object-cover w-full"
                    src="images/img_unsplashghmsapoko0_91x59.png"
                    alt="unsplashghmsapo"
                  />
                  <Img
                    className="absolute h-[92px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_unsplashghmsapoko0_91x59.png"
                    alt="unsplashghmsapo_One"
                  />
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-row font-poppins gap-[23px] items-center justify-start md:ml-[0] ml-[37px] mt-[106px] md:px-5 w-[23%] md:w-full">
            <Img
              className="h-[62px]"
              src="images/img_arrowdown_orange_300.svg"
              alt="arrowdown"
            />
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900_05"
              size="txtPoppinsMedium36Bluegray90005"
            >
              Team ThinkWht
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-center justify-start md:ml-[0] ml-[37px] mt-10 md:px-5 w-[86%] md:w-full">
            <Img
              className="h-[109px]"
              src="images/img_line83.svg"
              alt="lineEightyThree"
            />
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[23px]">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_05"
                size="txtPoppinsMedium32"
              >
                ThinkWht Regional Student Directors
              </Text>
              <Text
                className="text-blue_gray-400 text-xl"
                size="txtPoppinsRegular20Bluegray400"
              >
                Connected directlty with the ThinkWht Team
              </Text>
            </div>
            <Img
              className="h-[154px] md:ml-[0] ml-[41px]"
              src="images/img_line83.svg"
              alt="lineEightyFour"
            />
            <div className="flex flex-col items-start justify-start ml-4 md:ml-[0]">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_05"
                size="txtPoppinsMedium32"
              >
                Campus Representatives
              </Text>
              <Text
                className="mt-[3px] text-blue_gray-400 text-xl"
                size="txtPoppinsRegular20Bluegray400"
              >
                Representatives to report to regional student directors
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inter gap-3.5 items-start justify-start max-w-[1296px] mt-[103px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[99%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[90px] items-center justify-start w-[99%] md:w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="md:text-5xl text-[64px] text-blue_gray-900_05"
                    size="txtInterBold64Bluegray90005"
                  >
                    Perks & Incentives
                  </Text>
                </div>
                <div className="bg-blue-800_01 flex flex-col font-poppins items-center justify-start rounded-[10px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
                    <div className="bg-blue_gray-700 flex md:flex-1 flex-col md:gap-10 gap-[520px] items-center justify-end rounded-[10px] w-[26%] md:w-full">
                      <Text
                        className="mt-[73px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-[85%] sm:w-full"
                        size="txtPoppinsMedium40"
                      >
                        Awards and Merchandise
                      </Text>
                      <Img
                        className="h-[648px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                        src="images/img_0908329720454_648x315.png"
                        alt="0908329720454"
                      />
                    </div>
                    <div className="bg-orange-300 flex md:flex-1 flex-col md:gap-10 gap-[546px] items-center justify-end pt-20 rounded-[10px] w-[26%] md:w-full">
                      <Text
                        className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-[93%] sm:w-full"
                        size="txtPoppinsMedium38"
                      >
                        Job Placement and Internship
                      </Text>
                      <div className="flex h-[623px] justify-end relative w-full">
                        <Img
                          className="h-[429px] mt-auto mx-auto"
                          src="images/img_vector419.svg"
                          alt="vector419"
                        />
                        <Img
                          className="absolute h-[623px] inset-[0] justify-center m-auto object-cover w-full"
                          src="images/img_studebnt14.png"
                          alt="studebntFourteen"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col font-inter justify-start md:mt-0 mt-[70px] w-[49%] md:w-full">
                      <Text
                        className="md:ml-[0] ml-[33px] md:text-5xl text-[64px] text-white-A700 w-3/4 sm:w-full"
                        size="txtInterExtraBold64WhiteA700"
                      >
                        Upskilling & Enhancing CV
                      </Text>
                      <Line className="bg-blue_gray-900_05 h-px md:ml-[0] ml-[19px] mr-[313px] mt-[17px] w-[46%]" />
                      <div className="flex md:h-[1121px] h-[879px] justify-end mt-[242px] relative w-full">
                        <div className="flex flex-row h-full items-start justify-between mb-[261px] ml-auto mt-auto rotate-[180deg] w-[72%]">
                          <Img
                            className="h-[170px]"
                            src="images/img_group_white_a700_170x42.svg"
                            alt="group"
                          />
                          <Img
                            className="h-[170px]"
                            src="images/img_group_white_a700_170x42.svg"
                            alt="group_One"
                          />
                          <div className="flex flex-col items-center justify-start">
                            <div className="md:h-[140px] sm:h-[169px] h-[170px] relative w-full">
                              <Img
                                className="absolute bottom-[0] h-[50px] inset-x-[0] mx-auto"
                                src="images/img_grid_teal_200.svg"
                                alt="grid"
                              />
                              <Img
                                className="h-[50px] mx-auto"
                                src="images/img_grid_teal_200.svg"
                                alt="grid_One"
                              />
                              <div className="absolute flex flex-col md:gap-10 gap-[69px] h-full inset-[0] items-center justify-center m-auto w-full">
                                <Img
                                  className="h-[50px]"
                                  src="images/img_grid_white_a700.svg"
                                  alt="grid_Two"
                                />
                                <Img
                                  className="h-[50px]"
                                  src="images/img_grid_white_a700.svg"
                                  alt="grid_Three"
                                />
                              </div>
                            </div>
                          </div>
                          <List
                            className="sm:flex-col flex-row gap-[55px] grid grid-cols-2"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                              <div className="md:h-[292px] h-[294px] relative w-full">
                                <Img
                                  className="absolute bottom-[0] h-[50px] inset-x-[0] mx-auto"
                                  src="images/img_grid_teal_200.svg"
                                  alt="grid"
                                />
                                <Img
                                  className="absolute h-[50px] inset-[0] justify-center m-auto"
                                  src="images/img_grid_teal_200.svg"
                                  alt="grid_One"
                                />
                                <Img
                                  className="h-[50px] mx-auto"
                                  src="images/img_grid_teal_200.svg"
                                  alt="grid_Two"
                                />
                                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                                  <Img
                                    className="h-[50px]"
                                    src="images/img_grid_white_a700.svg"
                                    alt="grid_Three"
                                  />
                                  <Img
                                    className="h-[50px] mt-[69px]"
                                    src="images/img_grid_white_a700.svg"
                                    alt="grid_Four"
                                  />
                                  <Img
                                    className="h-[50px] mt-[73px]"
                                    src="images/img_grid_white_a700.svg"
                                    alt="grid_Five"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                              <div className="md:h-[292px] h-[294px] relative w-full">
                                <Img
                                  className="absolute bottom-[0] h-[50px] inset-x-[0] mx-auto"
                                  src="images/img_grid_teal_200.svg"
                                  alt="grid"
                                />
                                <Img
                                  className="absolute h-[50px] inset-[0] justify-center m-auto"
                                  src="images/img_grid_teal_200.svg"
                                  alt="grid_One"
                                />
                                <Img
                                  className="h-[50px] mx-auto"
                                  src="images/img_grid_teal_200.svg"
                                  alt="grid_Two"
                                />
                                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                                  <Img
                                    className="h-[50px]"
                                    src="images/img_grid_white_a700.svg"
                                    alt="grid_Three"
                                  />
                                  <Img
                                    className="h-[50px] mt-[69px]"
                                    src="images/img_grid_white_a700.svg"
                                    alt="grid_Four"
                                  />
                                  <Img
                                    className="h-[50px] mt-[73px]"
                                    src="images/img_grid_white_a700.svg"
                                    alt="grid_Five"
                                  />
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                        <Img
                          className="absolute h-[879px] inset-[0] justify-center m-auto object-cover w-full"
                          src="images/img_excitedbrunett.png"
                          alt="excitedbrunett"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[332px] mt-[146px]">
                <Text
                  className="md:text-5xl text-[64px] text-blue_gray-900_05"
                  size="txtInterBold64Bluegray90005"
                >
                  Application Process
                </Text>
              </div>
              <Text
                className="ml-1.5 md:ml-[0] mt-[22px] text-2xl md:text-[22px] text-blue_gray-400 text-justify sm:text-xl w-[99%] sm:w-full"
                size="txtInterRegular24Bluegray400"
              >
                This page typically serves as a guide for individuals who are
                interested in becoming part of an organization, accessing a
                service, or participating in an event.
              </Text>
              <ThinkWhtCommunityStackhere className="font-jua md:h-[190px] h-[236px] md:ml-[0] ml-[474px] mt-[50px] relative w-1/4" />
              <div className="bg-blue-600_01 flex md:flex-col flex-row font-inter md:gap-5 items-center justify-evenly mt-[99px] rounded-[20px] w-[99%] md:w-full">
                <div className="bg-orange-300 flex flex-col items-center justify-start p-[75px] md:px-10 sm:px-5 rounded-tl-[20px] rounded-tr-[20px]">
                  <Text
                    className="md:text-5xl text-9xl text-white-A700"
                    size="txtInterBlack128"
                  >
                    1
                  </Text>
                </div>
                <Img
                  className="h-[308px] sm:h-auto object-cover rounded-[20px] w-[81%] md:w-full"
                  src="images/img_rectangle5246.png"
                  alt="rectangle5246"
                />
              </div>
              <div className="flex flex-col font-inter items-center justify-start mt-[86px]">
                <Text
                  className="md:text-5xl text-[64px] text-blue_gray-700"
                  size="txtInterBold64Bluegray700"
                >
                  Registrations
                </Text>
              </div>
              <div className="bg-blue-600_01 flex md:flex-col flex-row font-inter md:gap-5 items-center justify-evenly mt-[172px] rounded-[20px] w-[99%] md:w-full">
                <div className="bg-orange-300 flex flex-col items-center justify-start p-[75px] md:px-10 sm:px-5 rounded-tl-[20px] rounded-tr-[20px]">
                  <Text
                    className="mb-0.5 md:text-5xl text-9xl text-white-A700"
                    size="txtInterBlack128"
                  >
                    2
                  </Text>
                </div>
                <Img
                  className="h-[308px] sm:h-auto object-cover rounded-[20px] w-[81%] md:w-full"
                  src="images/img_unsplashtffn3bylc5s.png"
                  alt="unsplashtffn3by"
                />
              </div>
              <div className="flex flex-col font-inter items-center justify-start mt-[87px]">
                <Text
                  className="md:text-5xl text-[64px] text-blue_gray-700"
                  size="txtInterBold64Bluegray700"
                >
                  Profile Shortlisting
                </Text>
              </div>
              <Text
                className="mt-[22px] text-black-900_89 text-justify text-xl w-full"
                size="txtInterRegular20Black90089"
              >
                <>
                  Profile shortlisting is the selection process where potential
                  candidates&#39; resumes or profiles are carefully reviewed and
                  evaluated based on specific criteria or qualifications to
                  determine their suitability for a job, program, or
                  opportunity.
                </>
              </Text>
              <div className="font-inter h-[309px] md:h-[404px] mt-[95px] relative w-[99%] md:w-full">
                <div className="absolute bg-blue-600_01 flex flex-col h-max inset-[0] items-start justify-center m-auto rounded-[20px] w-full">
                  <div className="bg-orange-300 flex flex-col items-center justify-start p-[75px] md:px-10 sm:px-5 rounded-tl-[20px] rounded-tr-[20px]">
                    <Text
                      className="md:text-5xl text-9xl text-white-A700"
                      size="txtInterBlack128"
                    >
                      3
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute h-[309px] inset-y-[0] my-auto object-cover right-[0] rounded-[20px] w-[81%]"
                  src="images/img_unsplashoxv3bzr7jxi.png"
                  alt="unsplashoxv3bzr"
                />
              </div>
              <Text
                className="mt-[86px] md:text-5xl text-[64px] text-blue_gray-700"
                size="txtInterBold64Bluegray700"
              >
                Diagnosis Test
              </Text>
              <Text
                className="mt-[35px] text-gray-600 text-justify text-xl w-[99%] sm:w-full"
                size="txtInterRegular20Gray600"
              >
                A diagnosis test is a medical or diagnostic procedure conducted
                to identify, evaluate, or confirm a specific health condition,
                illness, or disease in a patient. These tests often involve
                various methods, such as medical imaging, blood tests, or
                physical examinations, to provide healthcare professionals with
                essential information for accurate diagnosis and treatment
                planning.
              </Text>
              <div className="bg-blue-600_01 flex flex-col font-inter items-start justify-start mt-24 rounded-[20px] w-[99%] md:w-full">
                <div className="bg-orange-300 flex flex-col items-start justify-center p-[73px] md:px-10 sm:px-5 rounded-tl-[20px] rounded-tr-[20px]">
                  <Text
                    className="my-[3px] md:text-5xl text-9xl text-white-A700"
                    size="txtInterBlack128"
                  >
                    4
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-inter items-center justify-start ml-1.5 md:ml-[0] mt-20">
                <Text
                  className="md:text-5xl text-[64px] text-blue_gray-700"
                  size="txtInterBold64Bluegray700"
                >
                  Interviews
                </Text>
              </div>
            </div>
            <Img
              className="h-px md:mt-0 mt-[3995px] w-px"
              src="images/img_vector_1x1.svg"
              alt="vector_Three"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[86px] mt-[42px] text-gray-600 text-justify text-xl w-[90%] sm:w-full"
            size="txtInterRegular20Gray600"
          >
            Interviews are structured conversations between individuals or
            groups, often used in employment, research, or journalism, to gather
            information, assess qualifications, or discuss a particular topic.
            They serve as a crucial method for evaluating candidates, conducting
            investigations, or sharing insights through question-and-answer
            interactions.
          </Text>
          <Footer4 className="flex font-inter items-center justify-center mt-[113px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ThinkWhtCommunityPage;
