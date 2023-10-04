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
import FrontendDevelopmentPageColumnEighteen from "components/FrontendDevelopmentPageColumnEighteen";
import Header4 from "components/Header4";
import MentorPageColumn from "components/MentorPageColumn";
import MentorPageOneCalender from "components/MentorPageOneCalender";

import { CloseSVG } from "../../assets/images";

const MentorpageOnePage = () => {
  const [group237897value, setGroup237897value] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[1433px] justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="h-[5500px] sm:h-[5530px] md:h-[5989px] md:px-5 relative w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Header4 className="flex flex-col items-center justify-center w-full" />
                <div className="bg-blue_gray-700 h-[600px] md:h-[946px] relative rotate-[180deg] w-full">
                  <div className="h-[600px] md:h-[946px] m-auto w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 h-full items-start justify-between m-auto w-full">
                      <div className="flex relative w-[42%] md:w-full">
                        <Img
                          className="h-[600px] my-auto object-cover w-[82%]"
                          src="images/img_0908329720454_600x484.png"
                          alt="0908329720454"
                        />
                        <Img
                          className="h-[314px] ml-[-103px] object-cover z-[1]"
                          src="images/img_vector_314x213.png"
                          alt="vector_Two"
                        />
                      </div>
                      <div className="h-[306px] relative w-1/5 md:w-full">
                        <Img
                          className="h-[306px] m-auto object-cover w-full"
                          src="images/img_ellipse2_1.png"
                          alt="ellipseTwo"
                        />
                        <Img
                          className="absolute bottom-[18%] h-[135px] right-[16%] w-[135px]"
                          src="images/img_group49.svg"
                          alt="groupFortyNine"
                        />
                      </div>
                    </div>
                    <div className="absolute flex flex-col md:gap-10 gap-[100px] h-max inset-y-[0] justify-start my-auto right-[7%]">
                      <Text
                        className="rotate-[180deg] md:text-5xl text-8xl text-justify text-light_blue-200"
                        size="txtInterBlack96Lightblue200"
                      >
                        Ashish Tripathy
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[78px] rotate-[180deg] text-5xl sm:text-[38px] md:text-[44px] text-justify text-white-A700"
                        size="txtInterBold48WhiteA700"
                      >
                        12 years
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bottom-[8%] flex flex-col gap-[21px] justify-start right-[3%] w-[61%]">
                    <Text
                      className="md:ml-[0] ml-[49px] rotate-[180deg] md:text-3xl sm:text-[28px] text-[32px] text-justify text-white-A700"
                      size="txtInterExtraBold32WhiteA700"
                    >
                      Senior Data Scientist at LinkedIn{" "}
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mr-[292px] w-[67%] md:w-full">
                      <Img
                        className="h-[141px] md:h-auto object-cover w-[27%] sm:w-full"
                        src="images/img_badgefront.png"
                        alt="badgefront"
                      />
                      <Text
                        className="sm:ml-[0] ml-[185px] rotate-[180deg] text-2xl md:text-[22px] text-justify text-white-A700 sm:text-xl"
                        size="txtInterRegular24WhiteA700"
                      >
                        Of Experience
                      </Text>
                      <Line className="bg-white-A700 h-[71px] sm:h-px mb-[39px] sm:ml-[0] ml-[19px] sm:mt-0 mt-[31px] sm:w-full w-px" />
                      <Img
                        className="h-11 sm:ml-[0] ml-[21px] w-[45px]"
                        src="images/img_linkedin_white_a700.svg"
                        alt="linkedin"
                      />
                    </div>
                    <Button
                      className="!text-blue_gray-900_05 cursor-pointer font-medium leading-[normal] min-w-[293px] md:ml-[0] ml-[584px] rotate-[180deg] rounded-[36px] text-2xl md:text-[22px] text-center sm:text-xl"
                      color="orange_300"
                      size="xl"
                      variant="fill"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
                <Text
                  className="mt-[77px] md:text-5xl text-[64px] text-blue_gray-700"
                  size="txtInterSemiBold64Bluegray700"
                >
                  About Mentor{" "}
                </Text>
                <Text
                  className="leading-[72.00px] mt-[42px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-400 text-justify w-[90%] sm:w-full"
                  size="txtInterRegular36Bluegray400"
                >
                  10+ years of experience as a data scientist working on very
                  current problems on social media content, payments abuse,
                  insurance, retail and telecom. I have built production machine
                  learning models that help prevent million dollars worth of
                  fraud and catch abusive contents. My patented ml based
                  solution enables auto deep dives of data. I have trained 300 +
                  developers in ML and mentored 20+ professionals.
                </Text>
                <Text
                  className="mt-16 md:text-5xl text-[64px] text-blue_gray-700 text-center"
                  size="txtInterSemiBold64Bluegray700"
                >
                  Expert in
                </Text>
                <div className="flex md:flex-col flex-row gap-12 items-center justify-start mt-[72px] w-[85%] md:w-full">
                  <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-center justify-start p-7 sm:px-5 rounded-[49px]">
                    <Text
                      className="mb-1 mt-[7px] text-2xl md:text-[22px] text-blue-800_01 sm:text-xl"
                      size="txtInterRegular24Blue80001"
                    >
                      #Cases study competitions and innovative challenges
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-12 grid sm:grid-cols-1 grid-cols-2 w-[42%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-center justify-end p-8 sm:px-5 rounded-[49px] w-full">
                      <Text
                        className="mt-[3px] text-2xl md:text-[22px] text-blue-800_01 sm:text-xl"
                        size="txtInterRegular24Blue80001"
                      >
                        #Consulting
                      </Text>
                    </div>
                    <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-center justify-end p-8 sm:px-5 rounded-[49px] w-full">
                      <Text
                        className="mt-[3px] text-2xl md:text-[22px] text-blue-800_01 sm:text-xl"
                        size="txtInterRegular24Blue80001"
                      >
                        #Strategy
                      </Text>
                    </div>
                  </List>
                </div>
                <div className="flex md:flex-col flex-row gap-[50px] items-center justify-start mt-[51px] w-[66%] md:w-full">
                  <Button
                    className="border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[357px] rounded-[49px] text-2xl md:text-[22px] text-center sm:text-xl"
                    color="white_A700"
                    size="3xl"
                    variant="fill"
                  >
                    #Resume and CV Review
                  </Button>
                  <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-center justify-end p-8 sm:px-5 rounded-[49px]">
                    <Text
                      className="mt-0.5 text-2xl md:text-[22px] text-blue-800_01 sm:text-xl"
                      size="txtInterRegular24Blue80001"
                    >
                      #CAT Preparation and Case Interviews
                    </Text>
                  </div>
                </div>
                <Text
                  className="mt-[118px] md:text-5xl text-[64px] text-blue_gray-700 text-center"
                  size="txtInterSemiBold64Bluegray700"
                >
                  Fluent in
                </Text>
                <div className="flex sm:flex-col flex-row gap-[49px] items-center justify-start mt-[51px] w-[27%] md:w-full">
                  <Button
                    className="border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[169px] rounded-[49px] text-2xl md:text-[22px] text-center sm:text-xl"
                    color="white_A700"
                    size="3xl"
                    variant="fill"
                  >
                    #Hindi
                  </Button>
                  <Button
                    className="border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[169px] rounded-[49px] text-2xl md:text-[22px] text-center sm:text-xl"
                    color="white_A700"
                    size="3xl"
                    variant="fill"
                  >
                    #English
                  </Button>
                </div>
                <div className="bg-blue_gray-700 flex flex-col items-start justify-start mt-[85px] rotate-[90deg] rounded-[24px] w-[90%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-[31px] items-center justify-start w-[95%] md:w-full">
                    <Img
                      className="h-[380px] sm:h-auto object-cover w-[48%] md:w-full"
                      src="images/img_3dmorphiscalendar.png"
                      alt="3dmorphiscalend"
                    />
                    <div className="flex flex-col items-end justify-start w-1/2 md:w-full">
                      <Text
                        className="rotate-[-90deg] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[1.92px]"
                        size="txtInterBlack48WhiteA700"
                      >
                        Resume Discussion{" "}
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mr-2 mt-[25px] w-[99%] md:w-full">
                        <Text
                          className="sm:mt-0 mt-[5px] rotate-[-90deg] text-4xl sm:text-[32px] md:text-[34px] text-justify text-white-A700"
                          size="txtInterRegular36WhiteA700"
                        >
                          Video Meeting
                        </Text>
                        <Line className="bg-white-A700 sm:h-[3px] h-[53px] rotate-[-180deg] w-[3px] sm:w-full" />
                        <Text
                          className="rotate-[-90deg] text-4xl sm:text-[32px] md:text-[34px] text-justify text-white-A700"
                          size="txtInterRegular36WhiteA700"
                        >
                          30 Min
                        </Text>
                        <Text
                          className="rotate-[-90deg] sm:text-4xl md:text-[38px] text-[40px] text-justify text-white-A700"
                          size="txtInterBlack40WhiteA700"
                        >
                          ₹ 2000
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[293px] mt-[58px] rounded-[36px] text-2xl md:text-[22px] text-center sm:text-xl"
                        color="orange_300"
                        size="xl"
                        variant="fill"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-800 h-[380px] md:h-[473px] sm:h-[618px] mt-[93px] relative rotate-[90deg] rounded-[24px] w-[90%] md:w-full">
                  <div className="bg-blue_gray-700 h-[380px] m-auto w-full"></div>
                  <div className="absolute flex flex-col h-max inset-y-[0] items-end justify-start my-auto right-[5%] w-[48%]">
                    <Text
                      className="rotate-[-90deg] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[1.92px]"
                      size="txtInterBlack48WhiteA700"
                    >
                      Career Guidance
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mr-2.5 mt-[25px] w-[99%] md:w-full">
                      <Text
                        className="sm:mt-0 mt-[5px] rotate-[-90deg] text-4xl sm:text-[32px] md:text-[34px] text-justify text-white-A700"
                        size="txtInterRegular36WhiteA700"
                      >
                        Video Meeting
                      </Text>
                      <Line className="bg-white-A700 sm:h-[3px] h-[53px] rotate-[-180deg] w-[3px] sm:w-full" />
                      <Text
                        className="rotate-[-90deg] text-4xl sm:text-[32px] md:text-[34px] text-justify text-white-A700"
                        size="txtInterRegular36WhiteA700"
                      >
                        45 Min
                      </Text>
                      <Text
                        className="rotate-[-90deg] sm:text-4xl md:text-[38px] text-[40px] text-justify text-white-A700"
                        size="txtInterBlack40WhiteA700"
                      >
                        ₹ 3000
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[291px] mr-[3px] mt-[58px] rounded-[36px] text-2xl md:text-[22px] text-center sm:text-xl"
                      color="orange_300"
                      size="xl"
                      variant="fill"
                    >
                      Book Now
                    </Button>
                  </div>
                  <Img
                    className="absolute h-[380px] inset-y-[0] left-[0] my-auto object-cover w-[46%]"
                    src="images/img_3dmorphisbusiness.png"
                    alt="3dmorphisbusine"
                  />
                </div>
                <div className="bg-blue-800 h-[380px] md:h-[489px] sm:h-[634px] mt-[109px] relative rotate-[90deg] rounded-[24px] w-[90%] md:w-full">
                  <div className="bg-blue_gray-700 h-[380px] m-auto w-full"></div>
                  <div className="absolute flex flex-col h-max inset-y-[0] items-end justify-start my-auto right-[5%] w-[48%]">
                    <Text
                      className="rotate-[-90deg] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[1.92px]"
                      size="txtInterBlack48WhiteA700"
                    >
                      Career Guidance
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mr-[9px] mt-[25px] w-[99%] md:w-full">
                      <Text
                        className="sm:mt-0 mt-[5px] rotate-[-90deg] text-4xl sm:text-[32px] md:text-[34px] text-justify text-white-A700"
                        size="txtInterRegular36WhiteA700"
                      >
                        Video Meeting
                      </Text>
                      <Line className="bg-white-A700 sm:h-[3px] h-[53px] rotate-[-180deg] w-[3px] sm:w-full" />
                      <Text
                        className="rotate-[-90deg] text-4xl sm:text-[32px] md:text-[34px] text-justify text-white-A700"
                        size="txtInterRegular36WhiteA700"
                      >
                        60 Min
                      </Text>
                      <Text
                        className="rotate-[-90deg] sm:text-4xl md:text-[38px] text-[40px] text-justify text-white-A700"
                        size="txtInterBlack40WhiteA700"
                      >
                        ₹ 4000
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[291px] mr-[3px] mt-[58px] rounded-[36px] text-2xl md:text-[22px] text-center sm:text-xl"
                      color="orange_300"
                      size="xl"
                      variant="fill"
                    >
                      Book Now
                    </Button>
                  </div>
                  <Img
                    className="absolute h-[379px] inset-y-[0] left-[8%] my-auto object-cover w-[39%]"
                    src="images/img_3dmorphisbank.png"
                    alt="3dmorphisbank"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mt-[129px] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col h-[640px] md:h-auto items-start justify-start max-w-[1433px] pb-36 md:px-10 px-40 sm:px-5 w-full">
                      <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1120px] w-full">
                          <div className="flex md:flex-1 flex-col gap-4 items-start justify-start w-[603px] md:w-full">
                            <Text
                              className="md:text-5xl text-[64px] text-blue_gray-700 tracking-[2.56px] w-auto"
                              size="txtInterMedium64"
                            >
                              Client’s comments
                            </Text>
                            <Text
                              className="leading-[24.00px] max-w-[552px] md:max-w-full text-base text-gray-900 tracking-[0.64px]"
                              size="txtInterRegular16"
                            >
                              Lorem ipsum dolor sit amet consectetur. Viverra
                              lacinia sed praesent pharetra quisque consectetur
                              tellus elit.{" "}
                            </Text>
                          </div>
                          <Img
                            className="h-12 w-[104px]"
                            src="images/img_frame39.svg"
                            alt="frameThirtyNine"
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
                          className="gap-4 w-auto"
                          items={[...Array(9)].map(() => (
                            <React.Fragment key={Math.random()}>
                              <MentorPageColumn
                                className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col gap-6 items-center justify-start mx-2.5 md:px-10 sm:px-5 px-[46px] py-10 rounded-[12px]"
                                loremipsumdolorOne={
                                  <Text className="leading-[24.00px] max-w-[270px] md:max-w-full text-base text-center text-gray-900 tracking-[0.10px]">
                                    <span className="text-gray-900 font-inter font-normal">
                                      Lorem ipsum dolor sit amet consectetur.
                                      Sed non sit sed nunc nam nunc tellus.{" "}
                                    </span>
                                    <span className="text-gray-900 font-inter font-normal">
                                      {" "}
                                      Sed non sit sed nunc nam nunc tellus.{" "}
                                    </span>
                                  </Text>
                                }
                              />
                            </React.Fragment>
                          ))}
                          renderDotsItem={({ isActive }) => {
                            if (isActive) {
                              return (
                                <div className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-blue_gray-900 w-[11px]" />
                              );
                            }
                            return (
                              <div
                                className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray-300_02 w-[11px]"
                                role="button"
                                tabIndex={0}
                              />
                            );
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <PagerIndicator
                  className="flex h-[15px] justify-center w-[86px]"
                  count={3}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-blue_gray-900 w-[11px]"
                  activeIndex={sliderState}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray-300_02 w-[11px]"
                  sliderRef={sliderRef}
                  selectedWrapperCss="inline-block md:ml-[0] mx-[12.85px] sm:ml-[0]"
                  unselectedWrapperCss="inline-block md:ml-[0] mx-[12.85px] sm:ml-[0]"
                />
              </div>
            </div>
            <div className="absolute bg-black-900_3f flex flex-col h-full inset-[0] items-center justify-center m-auto p-[162px] md:px-10 sm:px-5 w-full">
              <MentorPageOneCalender className="bg-white-A700 flex flex-col items-start justify-start mb-[3471px] mt-6 p-16 md:px-10 sm:px-5 rounded-[30px] shadow-bs9 w-full" />
            </div>
            <footer className="absolute bottom-[0] flex inset-x-[0] items-center justify-center mx-auto w-full">
              <FrontendDevelopmentPageColumnEighteen
                className="flex flex-col items-center justify-center w-full"
                p4799d32e64cadseventysix="images/img_4799d32e64cad76_1003x503.png"
              />
            </footer>
          </div>
        </div>
        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[63px] w-full">
          <Img
            className="h-px w-px"
            src="images/img_vector_1x1.svg"
            alt="vector_Six"
          />
        </div>
      </div>
    </>
  );
};

export default MentorpageOnePage;
