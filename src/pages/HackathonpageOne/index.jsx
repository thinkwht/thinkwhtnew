import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  SelectBox,
  Text,
} from "components";
import Footer1 from "components/Footer1";
import Header3 from "components/Header3";

import { CloseSVG } from "../../assets/images";

const searchboxOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HackathonpageOnePage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header3 className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="h-[742px] sm:h-[820px] mx-auto w-full">
              <div className="absolute h-[742px] sm:h-[820px] inset-y-[0] my-auto right-[0] w-[96%] md:w-full">
                <div className="h-[742px] sm:h-[820px] m-auto w-full">
                  <div className="h-[742px] sm:h-[820px] m-auto w-full">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <Text
                          className="sm:mt-0 mt-24 md:text-5xl text-[64px] text-orange-300 tracking-[2.56px]"
                          size="txtInterBlack64"
                        >
                          HACKATHONS{" "}
                        </Text>
                        <div className="bg-blue_gray-700 h-[742px] w-[55%]"></div>
                      </div>
                    </div>
                    <Text
                      className="absolute left-[0] text-2xl md:text-[22px] text-blue-800_01 sm:text-xl top-1/4 tracking-[0.96px] w-[33%] sm:w-full"
                      size="txtInterLight24Blue80001"
                    >
                      Join Our Hackathon For Coding Challenge Like No Other
                    </Text>
                    <Img
                      className="absolute h-[432px] right-[7%] top-[7%]"
                      src="images/img_line1.svg"
                      alt="lineOne"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[694px] object-cover right-[5%] w-[37%]"
                    src="images/img_pexelsphotoby.png"
                    alt="pexelsphotoby"
                  />
                </div>
                <Img
                  className="absolute h-[152px] left-[20%] top-[33%]"
                  src="images/img_iconparkcaution.svg"
                  alt="iconparkcaution"
                />
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center left-[4%] rounded-[5px] top-[40%] w-[199px]"
                rightIcon={
                  <Img
                    className="h-[25px] mt-0.5 mb-px ml-[11px] left-[1%] absolute inset-y-[0]"
                    src="images/img_maximize.svg"
                    alt="maximize"
                  />
                }
                shape="round"
                color="deep_orange_100"
                size="xs"
                variant="fill"
              >
                <div className="font-medium leading-[normal] md:text-[22px] sm:text-xl text-2xl text-left">
                  Get started
                </div>
              </Button>
              <div className="absolute backdrop-opacity-[0.5] bg-orange-300 blur-[500.00px] h-[193px] left-[0] rounded-[96px] top-[8%] w-[12%]"></div>
              <div className="absolute backdrop-opacity-[0.5] bg-blue_gray-700 blur-[500.00px] bottom-[37%] h-[90px] left-[33%] rounded-[45px] w-[7%]"></div>
            </div>
            <div className="bg-white-A700 flex flex-row gap-[29px] items-end justify-start mb-[226px] mt-[-NaNpx] mx-auto p-[5px] rounded-md shadow-bs17 w-[21%] z-[1]">
              <div className="bg-gray-100_01 flex flex-col items-center justify-start my-[11px] p-2 rounded-[1px] w-[12%]">
                <Img
                  className="h-3.5 mt-1 w-3.5"
                  src="images/img_component4.svg"
                  alt="componentFour"
                />
                <Img
                  className="h-3.5 mt-1 w-3.5"
                  src="images/img_search.svg"
                  alt="search_One"
                />
                <Img
                  className="h-3.5 mt-1 w-3.5"
                  src="images/img_component6.svg"
                  alt="componentSix"
                />
                <Img
                  className="h-3.5 mb-1 mt-[69px] w-3.5"
                  src="images/img_component3.svg"
                  alt="componentThree"
                />
              </div>
              <Text
                className="mb-2 mt-[26px] text-[8.89px] text-black-900 w-[73%] sm:w-full"
                size="txtInterLight889"
              >
                <span className="text-black-900 font-inter text-left font-light">
                  class{" "}
                </span>
                <span className="text-orange-A200 font-inter text-left font-light">
                  Hackathon
                </span>
                <span className="text-black-900 font-inter text-left font-light">
                  <>
                    :<br /> def __init__(self, name, date, duration, theme,
                    problem_statement, mentors, prizes):
                    <br /> self.name = name
                    <br /> self.date ={" "}
                  </>
                </span>
                <span className="text-orange-300 font-inter text-left font-light">
                  date
                </span>
                <span className="text-black-900 font-inter text-left font-light">
                  <>
                    <br /> self.duration = duration
                    <br /> self.theme = theme
                    <br /> self.problem_statement = problem_statement
                    <br /> self.mentors ={" "}
                  </>
                </span>
                <span className="text-orange-300 font-inter text-left font-light">
                  mentors
                </span>
                <span className="text-black-900 font-inter text-left font-light">
                  <>
                    <br /> self.prizes ={" "}
                  </>
                </span>
                <span className="text-indigo-900_02 font-inter text-left font-light">
                  prizes
                </span>
                <span className="text-black-900 font-inter text-left font-light">
                  <>
                    <br /> self.teams = []
                    <br />
                    <br />
                  </>
                </span>
              </Text>
            </div>
            <SelectBox
              className="mt-[-47px] mx-auto rounded-[12px] shadow-bs18 w-[73%] sm:w-full z-[1]"
              indicator={
                <Img
                  className="h-4 mr-[0] w-4 right-[0] mt-[-NaNpx] z-[1]"
                  src="images/img_materialsymbolsclose.svg"
                  alt="material-symbols:close"
                />
              }
              isSearchable={false}
              options={searchboxOptionsList}
              isMulti={false}
              getOptionLabel={(e) => (
                <div className="flex items-center">
                  <Img
                    className="h-6 mr-[35px] w-6 right-[2%] mt-[-NaNpx] z-[1]"
                    src="images/img_search_gray_600_01.svg"
                    alt="search"
                  />
                  <span>{e.label}</span>
                </div>
              )}
              name="searchbox"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            />
          </div>
          <Text
            className="mt-[63px] text-2xl md:text-[22px] text-blue_gray-400 text-justify sm:text-xl tracking-[0.96px] w-[95%] sm:w-full"
            size="txtInterRegular24Bluegray400"
          >
            Our Hackathon page is a thrilling hub for tech enthusiasts and
            problem solvers. Get ready to unleash your creativity, test your
            coding skills, and collaborate with like-minded individuals. Our
            Hackathons are designed to challenge your abilities and provide a
            platform to turn your ideas into reality.
          </Text>
          <Text
            className="mt-[9px] text-2xl md:text-[22px] text-blue_gray-400 text-justify sm:text-xl tracking-[0.96px] w-[95%] sm:w-full"
            size="txtInterRegular24Bluegray400"
          >
            A hackathon is an intense, collaborative event where teams of
            innovators gather to brainstorm, design, and develop solutions,
            often in the form of software or hardware prototypes, within a
            limited timeframe, fostering creativity and technological
            advancement.
          </Text>
          <div className="flex md:flex-col flex-row gap-8 items-end justify-start mt-[50px] md:px-5 w-[44%] md:w-full">
            <Text
              className="md:text-5xl text-[64px] text-orange-300 tracking-[2.56px]"
              size="txtInterBlack64"
            >
              Hackathons{" "}
            </Text>
            <Text
              className="mb-[3px] md:mt-0 mt-[13px] sm:text-[40px] md:text-[46px] text-[50px] text-blue_gray-700"
              size="txtInterMedium50"
            >
              For You
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-20 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1249px] mt-[41px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="md:h-[668px] h-[670px] relative w-full">
              <div className="bg-blue_gray-700 h-72 mt-[26px] mx-auto rounded-[10px] w-[90%]"></div>
              <div className="absolute border border-orange-200_03 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[17px] rounded-[20px] shadow-bs7 w-full">
                <div className="flex flex-col items-start justify-start mb-[23px] mt-[9px] w-full">
                  <Img
                    className="h-72 sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_image109.png"
                    alt="image109"
                  />
                  <Text
                    className="md:ml-[0] ml-[5px] mt-[21px] text-3xl sm:text-[26px] md:text-[28px] text-blue-800_01"
                    size="txtInterMedium30Blue80001"
                  >
                    Ripple CBDC Innovate
                  </Text>
                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[5px] mt-[13px] w-[74%] md:w-full">
                    <Radio
                      value="16daysleft"
                      className="text-[11px] text-black-900 text-center tracking-[0.44px]"
                      inputClassName="bg-deep_orange-100 mr-[5px] rounded-[12px]"
                      checked={false}
                      name="16daysleft"
                      label="16 days left"
                      id="16daysleft"
                    ></Radio>
                    <Img
                      className="h-[27px] ml-14 w-7"
                      src="images/img_globe.svg"
                      alt="globe"
                    />
                    <Text
                      className="ml-[11px] mt-1 text-[11px] text-black-900 text-center tracking-[0.44px]"
                      size="txtInterRegular11"
                    >
                      Online
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start md:ml-[0] ml-[5px] mt-[19px] w-auto">
                    <Img
                      className="h-4 w-4"
                      src="images/img_heroiconsusers.svg"
                      alt="heroiconsusers"
                    />
                    <Text
                      className="text-gray-600_01 text-xs tracking-[0.48px] w-auto"
                      size="txtInterRegular12"
                    >
                      6200-4000 Participants
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[17px] items-start justify-center md:ml-[0] ml-[65px] mt-[11px] w-3/5 md:w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-blue-800 tracking-[1.92px]"
                      size="txtInterBlack48Blue800"
                    >
                      ₹
                    </Text>
                    <div className="flex flex-col justify-start mt-[13px]">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_a0 tracking-[1.28px]"
                        size="txtInterSemiBold32"
                      >
                        2,00,000
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[30px] mt-0.5 text-[15px] text-black-900 text-center tracking-[0.60px]"
                        size="txtInterRegular15"
                      >
                        Prizes
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium h-[58px] leading-[normal] ml-16 md:ml-[0] mt-[31px] rounded-[29px] text-2xl md:text-[22px] text-center sm:text-xl w-[207px]"
                    color="blue_gray_700"
                    size="md"
                    variant="fill"
                  >
                    Register
                  </Button>
                </div>
              </div>
            </div>
            <div className="md:h-[668px] h-[670px] relative w-full">
              <div className="bg-blue_gray-700 h-72 mt-[26px] mx-auto rounded-[10px] w-[90%]"></div>
              <div className="absolute border border-orange-200_03 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-4 rounded-[20px] shadow-bs w-full">
                <div className="flex flex-col items-start justify-start mb-6 mt-2.5 w-[99%] md:w-full">
                  <Img
                    className="h-72 sm:h-auto object-cover rounded-[10px] w-full"
                    src="images/img_image109_288x326.png"
                    alt="image109"
                  />
                  <Text
                    className="md:ml-[0] ml-[5px] mt-[21px] text-3xl sm:text-[26px] md:text-[28px] text-blue-800_01"
                    size="txtInterMedium30Blue80001"
                  >
                    Grid Esports Data Jam
                  </Text>
                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[5px] mt-[13px] w-[73%] md:w-full">
                    <Radio
                      value="6daysleft"
                      className="text-[11px] text-black-900 text-center tracking-[0.44px]"
                      inputClassName="bg-deep_orange-100 mr-[5px] rounded-[12px]"
                      checked={false}
                      name="6daysleft"
                      label="6 days left"
                      id="6daysleft"
                    ></Radio>
                    <Img
                      className="h-[27px] ml-14 w-7"
                      src="images/img_globe.svg"
                      alt="globe"
                    />
                    <Text
                      className="ml-[11px] mt-1 text-[11px] text-black-900 text-center tracking-[0.44px]"
                      size="txtInterRegular11"
                    >
                      Online
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start md:ml-[0] ml-[5px] mt-[19px] w-auto">
                    <Img
                      className="h-4 w-4"
                      src="images/img_heroiconsusers.svg"
                      alt="heroiconsusers"
                    />
                    <Text
                      className="text-gray-600_01 text-xs tracking-[0.48px] w-auto"
                      size="txtInterRegular12"
                    >
                      6200-4000 Participants
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[17px] items-start justify-start md:ml-[0] ml-[65px] mt-[11px] w-1/2 md:w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-blue-800 tracking-[1.92px]"
                      size="txtInterBlack48Blue800"
                    >
                      ₹
                    </Text>
                    <div className="flex flex-col justify-start mt-[13px]">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_a0 tracking-[1.28px]"
                        size="txtInterSemiBold32"
                      >
                        50,000
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[30px] mt-0.5 text-[15px] text-black-900 text-center tracking-[0.60px]"
                        size="txtInterRegular15"
                      >
                        Prizes
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium h-[58px] leading-[normal] md:ml-[0] ml-[58px] mt-[31px] rounded-[29px] text-2xl md:text-[22px] text-center sm:text-xl w-[207px]"
                    color="blue_gray_700"
                    size="md"
                    variant="fill"
                  >
                    Register
                  </Button>
                </div>
              </div>
            </div>
            <div className="md:h-[668px] h-[670px] relative w-full">
              <div className="bg-blue_gray-700 h-72 mt-[26px] mx-auto rounded-[10px] w-[90%]"></div>
              <div className="absolute border border-orange-200_03 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[17px] rounded-[20px] shadow-bs7 w-full">
                <div className="flex flex-col items-start justify-start mb-[23px] mt-[9px] w-full">
                  <Img
                    className="h-72 sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_image109_1.png"
                    alt="image109"
                  />
                  <Text
                    className="md:ml-[0] ml-[5px] mt-[21px] text-3xl sm:text-[26px] md:text-[28px] text-blue-800_01"
                    size="txtInterMedium30Blue80001"
                  >
                    Privacy 4Web3{" "}
                  </Text>
                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[5px] mt-[13px] w-[74%] md:w-full">
                    <Radio
                      value="1daysleft"
                      className="text-[11px] text-black-900 text-center tracking-[0.44px]"
                      inputClassName="bg-deep_orange-100 mr-[5px] rounded-[12px]"
                      checked={false}
                      name="1daysleft"
                      label="1 days left"
                      id="1daysleft"
                    ></Radio>
                    <Img
                      className="h-[27px] ml-14 w-7"
                      src="images/img_globe.svg"
                      alt="globe"
                    />
                    <Text
                      className="ml-[11px] mt-1 text-[11px] text-black-900 text-center tracking-[0.44px]"
                      size="txtInterRegular11"
                    >
                      Online
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start md:ml-[0] ml-[5px] mt-[19px] w-auto">
                    <Img
                      className="h-4 w-4"
                      src="images/img_heroiconsusers.svg"
                      alt="heroiconsusers"
                    />
                    <Text
                      className="text-gray-600_01 text-xs tracking-[0.48px] w-auto"
                      size="txtInterRegular12"
                    >
                      6200-4000 Participants
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[17px] items-start justify-start md:ml-[0] ml-[65px] mt-[11px] w-[49%] md:w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-blue-800 tracking-[1.92px]"
                      size="txtInterBlack48Blue800"
                    >
                      ₹
                    </Text>
                    <div className="flex flex-col items-center justify-start mt-[13px]">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_a0 tracking-[1.28px]"
                        size="txtInterSemiBold32"
                      >
                        10,000
                      </Text>
                      <Text
                        className="mt-0.5 text-[15px] text-black-900 text-center tracking-[0.60px]"
                        size="txtInterRegular15"
                      >
                        Prizes
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium h-[58px] leading-[normal] md:ml-[0] ml-[52px] mt-[31px] rounded-[29px] text-2xl md:text-[22px] text-center sm:text-xl w-[207px]"
                    color="blue_gray_700"
                    size="md"
                    variant="fill"
                  >
                    Register
                  </Button>
                </div>
              </div>
            </div>
          </List>
          <Button
            className="cursor-pointer flex h-[70px] items-center justify-center mt-[77px] rounded-[5px] w-80"
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
              View all Hackathons
            </div>
          </Button>
          <Footer1 className="flex items-center justify-center mt-[136px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HackathonpageOnePage;
