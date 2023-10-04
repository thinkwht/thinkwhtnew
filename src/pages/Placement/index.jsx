import React from "react";

import { Button, Img, Input, Line, PagerIndicator, Text } from "components";
import Footer1 from "components/Footer1";
import Header3 from "components/Header3";

import { CloseSVG } from "../../assets/images";

const PlacementPage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header3 className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="md:h-[530px] sm:h-[591px] h-[978px] md:px-5 relative w-full">
            <div className="md:h-[477px] h-[978px] m-auto w-full">
              <div className="absolute bg-blue_gray-700 md:h-[61px] h-[841px] inset-x-[0] mx-auto p-[65px] md:px-10 sm:px-5 top-[0] w-full">
                <Img
                  className="absolute h-[46px] right-[8%] top-[13%]"
                  src="images/img_vector6_orange_300.svg"
                  alt="vectorSix"
                />
                <Text
                  className="absolute inset-x-[0] mx-auto sm:text-[40px] md:text-[46px] text-[50px] text-light_blue-50 top-[12%] w-max"
                  size="txtInterBlack50Lightblue50"
                >
                  From Campus to Career “Meet our Placed Students”
                </Text>
              </div>
              <div className="absolute bottom-[0] font-lato md:h-[477px] h-[793px] right-[8%] w-[74%] md:w-full">
                <div className="absolute flex flex-col inset-y-[0] left-[0] my-auto w-[79%] md:w-full">
                  <div className="md:h-[477px] h-[707px] mx-auto w-full">
                    <div className="absolute md:h-[477px] h-[707px] inset-y-[0] left-[0] my-auto w-[96%] md:w-full">
                      <div className="md:h-[477px] h-[707px] m-auto w-full">
                        <Img
                          className="absolute h-[477px] left-[0] object-cover top-[0] w-[63%]"
                          src="images/img_5143537removebgpreview.png"
                          alt="5143537removebg"
                        />
                        <div className="absolute bottom-[0] md:h-[458px] h-[519px] right-[0] w-[69%] sm:w-full">
                          <div className="absolute bottom-[0] h-[458px] left-[0] w-[87%] sm:w-full">
                            <div className="absolute border border-solid border-white-A700_9e h-[458px] inset-[0] justify-center m-auto rounded-[236px] w-full"></div>
                            <div className="absolute h-[449px] inset-[0] justify-center m-auto w-[98%] sm:w-full">
                              <div className="bg-blue_gray-700 h-[449px] m-auto rounded-[231px] w-full"></div>
                              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[97%]">
                                <Img
                                  className="h-[449px] md:h-auto object-cover rounded-bl-[231px] rounded-br-[231px] w-full"
                                  src="images/img_happyyoungwom.png"
                                  alt="happyyoungwom"
                                />
                              </div>
                            </div>
                          </div>
                          <Img
                            className="absolute h-[417px] inset-x-[0] mx-auto object-cover top-[0] w-[98%]"
                            src="images/img_happyyoungwom_417x530.png"
                            alt="happyyoungwom_One"
                          />
                        </div>
                      </div>
                      <Img
                        className="absolute h-[139px] right-[3%] top-[22%]"
                        src="images/img_ellipse4.svg"
                        alt="ellipseFour"
                      />
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[7%] flex flex-col h-[79px] items-end justify-start left-[22%] p-1.5 w-[11%]"
                        style={{
                          backgroundImage: "url('images/img_group569.svg')",
                        }}
                      >
                        <Img
                          className="h-[66px]"
                          src="images/img_contrast.svg"
                          alt="contrast"
                        />
                      </div>
                    </div>
                    <Img
                      className="absolute h-[79px] right-[0] top-[38%]"
                      src="images/img_close_blue_600_01.svg"
                      alt="close"
                    />
                  </div>
                  <Img
                    className="h-[139px] ml-auto mr-[50px] mt-[-NaNpx] z-[1]"
                    src="images/img_ellipse7.svg"
                    alt="ellipseSeven"
                  />
                  <Img
                    className="h-[150px] ml-[169px] mt-[-65.07px] z-[1]"
                    src="images/img_ellipse9.svg"
                    alt="ellipseNine_One"
                  />
                </div>
                <div className="absolute bg-gradient18  flex flex-col items-center justify-end p-[18px] right-[0] rounded-[10px] top-[32%] w-[44%]">
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-[96%] md:w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[70px] items-center justify-start p-[17px] w-[70px]"
                      style={{
                        backgroundImage: "url('images/img_group570.svg')",
                      }}
                    >
                      <Text
                        className="my-1.5 text-center text-lg text-orange-300"
                        size="txtLatoBlack18"
                      >
                        80%
                      </Text>
                    </div>
                    <div className="flex flex-col font-inter gap-[9px] items-start justify-start">
                      <Text
                        className="text-blue-50_01 text-center text-xl"
                        size="txtInterSemiBold20Blue5001"
                      >
                        Our Successful Placements
                      </Text>
                      <Text
                        className="text-base text-justify text-white-A700"
                        size="txtInterRegular16WhiteA700"
                      >
                        Of Our Students Got Successfully Placed{" "}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[19%] w-[87%]">
              <Text
                className="leading-[140.00%] text-justify text-white-A700_ad text-xl w-full"
                size="txtInterRegular20WhiteA700ad"
              >
                Explore the impressive journeys of our alumni who have
                successfully embarked on their career paths. Our placed
                graduates have achieved remarkable milestones and made
                significant contributions in their respective fields.
              </Text>
              <Button
                className="!text-blue_gray-700 cursor-pointer font-medium min-w-[194px] mt-[30px] rounded-[20px] text-[15px] text-center"
                color="orange_300"
                size="sm"
                variant="fill"
              >
                Learn more
              </Button>
              <div className="bg-gradient18  flex flex-col items-center justify-start md:ml-[0] ml-[118px] mt-[297px] p-3 rounded-[10px] w-[38%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between mb-[18px] mt-[15px] w-[98%] md:w-full">
                  <Button
                    className="flex h-[50px] items-center justify-center rounded-[12px] w-[50px]"
                    color="orange_300_42"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_upload.svg"
                      alt="upload"
                    />
                  </Button>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-blue-50_02 text-center text-xl"
                      size="txtInterSemiBold20Blue5002"
                    >
                      Successfully Verified
                    </Text>
                    <Text
                      className="mt-1 text-[13px] text-white-A700"
                      size="txtInterRegular13"
                    >
                      <>
                        &quot;Empowering Futures: Hundreds of Successful
                        Placements&quot;
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="mt-1.5 md:text-5xl text-[64px] text-blue-800_01 text-center"
            size="txtInterBold64Blue80001"
          >
            Our Top Placed Students{" "}
          </Text>
          <div className="md:gap-5 gap-[83px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-7xl min-h-[auto] mt-[69px] mx-auto md:px-5 w-full">
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
          <PagerIndicator
            className="flex h-3.5 justify-center mt-[81px] w-[126px]"
            count={4}
            activeCss="inline-block cursor-pointer h-3 bg-blue_gray-900_05 w-[39px] rounded-md"
            activeIndex={1}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-3.5 bg-gray-400_01 w-3.5"
            selectedWrapperCss="inline-block md:ml-[0] mx-[7.50px] sm:ml-[0]"
            unselectedWrapperCss="inline-block md:ml-[0] mx-[7.50px] sm:ml-[0]"
          />
          <div className="md:h-[180px] h-[78px] max-w-[1124px] mt-[102px] mx-auto md:px-5 relative w-full">
            <Text
              className="absolute h-full inset-[0] justify-center m-auto md:text-5xl text-[64px] text-blue_gray-700 text-center w-max"
              size="txtInterBold64Bluegray700"
            >
              Our Students Reviews
            </Text>
            <Img
              className="absolute bottom-[21%] h-10 inset-x-[0] mx-auto"
              src="images/img_group6.svg"
              alt="group1000001775"
            />
          </div>
          <Img
            className="h-4 mt-[31px]"
            src="images/img_group11.svg"
            alt="group1000001774"
          />
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1404px] mt-[76px] mx-auto md:px-5 w-full">
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
                  alt="vectorSix_One"
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
          <div className="md:gap-5 gap-[83px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1283px] min-h-[auto] mt-[124px] mx-auto md:px-5 w-full">
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
          <div className="flex flex-col items-center justify-start max-w-[1339px] mt-6 mx-auto md:px-5 w-full">
            <div className="h-[358px] sm:h-[398px] md:h-[466px] relative w-full">
              <div
                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[265px] inset-x-[0] items-center justify-start mx-auto w-full"
                style={{ backgroundImage: "url('images/img_group711.png')" }}
              >
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[265px] items-center justify-start w-full"
                  style={{ backgroundImage: "url('images/img_group711.png')" }}
                >
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-gradient19  h-[265px] sm:h-[398px] relative rotate-[180deg] rounded-[24px] w-full">
                      <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                        <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                          <Img
                            className="h-[133px] md:h-auto object-cover"
                            src="images/img_ellipse5.png"
                            alt="ellipseFive"
                          />
                          <Img
                            className="h-[265px] md:h-auto object-cover"
                            src="images/img_ellipse5.png"
                            alt="ellipseOne"
                          />
                        </div>
                      </div>
                      <Text
                        className="absolute left-[4%] rotate-[180deg] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-700_04 text-center top-[22%] tracking-[0.53px]"
                        size="txtInterBlack40Bluegray70004"
                      >
                        <span className="text-blue_gray-700_04 font-inter font-black">
                          3100+
                        </span>
                        <span className="text-blue_gray-700_04 font-inter font-black">
                          {" "}
                          Placed Students
                        </span>
                        <span className="text-blue_gray-700_04 font-inter font-black">
                          {" "}
                          in{" "}
                        </span>
                        <span className="text-blue-800_01 font-inter font-black">
                          THINKWHT
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-y-[0] items-start justify-between left-[4%] my-auto w-[88%]">
                <Img
                  className="h-[70px] md:mt-0 mt-[221px]"
                  src="images/img_loremipsumdolor.svg"
                  alt="loremipsumdolor"
                />
                <div className="h-[356px] relative w-[32%] md:w-full">
                  <Img
                    className="h-[356px] m-auto object-cover w-full"
                    src="images/img_manpointingat.png"
                    alt="manpointingat"
                  />
                  <Img
                    className="absolute h-[76px] left-[14%] object-cover top-[30%] w-[18%]"
                    src="images/img_thinkwhatlogohighfinal_76x70.png"
                    alt="thinkwhatlogohi_One"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1003px] md:h-[1168px] mt-[165px] md:px-5 relative w-full">
            <Img
              className="h-px ml-auto mr-[63px] w-px"
              src="images/img_vector_1x1.svg"
              alt="vector_Two"
            />
            <Footer1 className="absolute flex inset-[0] items-center justify-center m-auto w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlacementPage;
