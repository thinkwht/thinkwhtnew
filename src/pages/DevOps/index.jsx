import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Radio,
  Text,
} from "components";
import Footer1 from "components/Footer1";
import Header3 from "components/Header3";

import { CloseSVG } from "../../assets/images";

const DevOpsPage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <Header3 className="flex flex-col font-inter items-center justify-center md:px-5 w-full" />
          <div
            className="bg-cover bg-no-repeat bg-white-A700 md:h-[563px] h-[749px] pt-[41px] md:px-5 relative w-full"
            style={{ backgroundImage: "url('images/img_landingpage3.png')" }}
          >
            <div className="absolute bottom-[0] md:h-[563px] h-[707px] inset-x-[0] mx-auto w-full">
              <div className="absolute bottom-[0] font-inter md:h-[563px] h-[636px] right-[0] w-[95%] md:w-full">
                <div className="absolute flex flex-col items-center justify-start left-[1%] top-[0] w-[95%]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="md:text-5xl text-[100px] text-center text-shadow-ts1 text-white-A700 uppercase"
                      size="txtPoppinsExtraBold100"
                    >
                      DEVOps Engineer
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[270px] md:text-5xl text-[61px] text-blue_gray-700 tracking-[6.10px] uppercase"
                      size="txtPoppinsBold61"
                    >
                      DEvOPS Experience
                    </Text>
                    <Button
                      className="cursor-pointer font-inter font-semibold leading-[normal] min-w-[173px] mt-[222px] text-base text-center uppercase"
                      shape="square"
                      color="blue_gray_700"
                      size="lg"
                      variant="fill"
                    >
                      VIEW COURSE
                    </Button>
                  </div>
                </div>
                <div className="absolute flex flex-col items-center justify-start right-[3%] top-[19%] w-[7%]">
                  <div className="md:h-[242px] h-[261px] relative w-full">
                    <div className="absolute h-[242px] inset-y-[0] my-auto right-[8%] w-[3%]">
                      <Line className="absolute bg-blue_gray-100_02 h-[242px] inset-[0] justify-center m-auto w-px" />
                      <Line className="absolute bg-blue_gray-700 h-[62px] inset-x-[0] mx-auto top-[0] w-0.5" />
                    </div>
                    <Radio
                      value="DevOps"
                      className="font-medium leading-[normal] mx-auto sm:pr-5 text-base text-blue_gray-700 text-right"
                      inputClassName="absolute bg-white-A700 border border-blue_gray-700 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                      checked={true}
                      name="devops"
                      label="Dev Ops "
                      id="DevOps"
                    ></Radio>
                    <div className="absolute flex flex-col gap-[42px] h-max inset-[0] items-end justify-center m-auto w-[94%] sm:w-full">
                      <Radio
                        value="Courses"
                        className="font-medium leading-[normal] sm:pr-5 text-[13.3px] text-blue_gray-100_02 text-right"
                        inputClassName="bg-white-A700 border border-blue_gray-100_02 border-solid h-3 mr-[5px] w-3"
                        checked={false}
                        name="courses"
                        label="Courses"
                        id="Courses"
                      ></Radio>
                      <Radio
                        value="Interview"
                        className="font-medium leading-[normal] sm:pr-5 text-[13.3px] text-blue_gray-100_02 text-right"
                        inputClassName="bg-white-A700 border border-blue_gray-100_02 border-solid h-3 mr-[5px] w-3"
                        checked={false}
                        name="interview"
                        label="Interview"
                        id="Interview"
                      ></Radio>
                      <Radio
                        value="Placement"
                        className="font-medium leading-[normal] sm:pr-5 text-[13.3px] text-blue_gray-100_02 text-right"
                        inputClassName="bg-white-A700 border border-blue_gray-100_02 border-solid h-3 mr-[5px] w-3"
                        checked={false}
                        name="placementOne"
                        label="Placement"
                        id="Placement"
                      ></Radio>
                    </div>
                    <Radio
                      value="GetHelp"
                      className="font-medium leading-[normal] sm:pr-5 text-[13.3px] text-blue_gray-100_02 text-right"
                      inputClassName="absolute bg-white-A700 border border-blue_gray-100_02 border-solid h-3 mr-[5px] w-3"
                      checked={false}
                      name="gethelp"
                      label="Get Help"
                      id="GetHelp"
                    ></Radio>
                  </div>
                </div>
                <div className="absolute bottom-[0] flex flex-col items-end justify-end overflow-auto right-[0] rotate-[180deg] w-[8%]">
                  <div className="overflow-x-auto w-full">
                    <div className="flex flex-col justify-start w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-col justify-start w-1/2">
                          <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                            <div className="md:h-4 h-[73px] relative w-4/5">
                              <div className="absolute md:h-4 h-[63px] inset-x-[0] mx-auto top-[0] w-full">
                                <div className="absolute md:h-4 h-[55px] right-[0] top-[0] w-[97%]">
                                  <div className="absolute h-10 md:h-4 right-[0] top-[0] w-[89%]">
                                    <div className="absolute md:h-4 h-[33px] right-[0] top-[0] w-[87%]">
                                      <div className="absolute md:h-4 h-[25px] right-[0] top-[0] w-[77%]">
                                        <div className="absolute md:h-4 h-[19px] right-[0] top-[0] w-[19px]">
                                          <Text
                                            className="absolute right-[0] rotate-[-16deg] text-[13px] text-deep_purple-500_01 top-[0]"
                                            size="txtInterMedium13"
                                          >
                                            D
                                          </Text>
                                          <Text
                                            className="absolute bottom-[0] left-[0] rotate-[-26deg] text-[13px] text-deep_purple-500_01"
                                            size="txtInterMedium13"
                                          >
                                            E
                                          </Text>
                                        </div>
                                        <Text
                                          className="absolute bottom-[0] left-[0] rotate-[-37deg] text-[13px] text-deep_purple-500_01"
                                          size="txtInterMedium13"
                                        >
                                          V
                                        </Text>
                                      </div>
                                      <Text
                                        className="absolute bottom-[0] left-[0] rotate-[-47deg] text-[13px] text-deep_purple-500_01"
                                        size="txtInterMedium13"
                                      >
                                        O
                                      </Text>
                                    </div>
                                    <Text
                                      className="absolute bottom-[0] left-[0] rotate-[-56deg] text-[13px] text-deep_purple-500_01"
                                      size="txtInterMedium13"
                                    >
                                      P
                                    </Text>
                                  </div>
                                  <Text
                                    className="absolute bottom-[0] left-[0] rotate-[-71deg] text-[13px] text-deep_purple-500_01"
                                    size="txtInterMedium13"
                                  >
                                    Z
                                  </Text>
                                </div>
                                <Text
                                  className="absolute bottom-[0] left-[0] rotate-[-81deg] text-[13px] text-deep_purple-500_01"
                                  size="txtInterMedium13"
                                >
                                  O
                                </Text>
                              </div>
                              <Text
                                className="absolute bottom-[0] h-2.5 left-[0] rotate-[-92deg] text-[13px] text-deep_purple-500_01"
                                size="txtInterMedium13"
                              >
                                N
                              </Text>
                            </div>
                            <Text
                              className="rotate-[-1deg] text-[13px] text-deep_purple-500_01"
                              size="txtInterMedium13"
                            >
                              -
                            </Text>
                          </div>
                          <Text
                            className="rotate-[-101deg] text-[13px] text-deep_purple-500_01"
                            size="txtInterMedium13"
                          >
                            E
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[5px] rotate-[-116deg] text-[13px] text-deep_purple-500_01"
                            size="txtInterMedium13"
                          >
                            2
                          </Text>
                          <Text
                            className="ml-2.5 md:ml-[0] rotate-[-125deg] text-[13px] text-deep_purple-500_01"
                            size="txtInterMedium13"
                          >
                            0
                          </Text>
                          <Text
                            className="ml-4 md:ml-[0] rotate-[-134deg] text-[13px] text-deep_purple-500_01"
                            size="txtInterMedium13"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex flex-col justify-start w-[19px]">
                          <Text
                            className="rotate-[13deg] text-[13px] text-deep_purple-500_01"
                            size="txtInterMedium13"
                          >
                            E
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[7px] rotate-[23deg] text-[13px] text-deep_purple-500_01"
                            size="txtInterMedium13"
                          >
                            C
                          </Text>
                        </div>
                        <div className="flex flex-col justify-start mt-2 w-[29%]">
                          <Text
                            className="rotate-[33deg] text-[13px] text-deep_purple-500_01"
                            size="txtInterMedium13"
                          >
                            N
                          </Text>
                          <div className="md:h-[5px] h-[9px] ml-2 md:ml-[0] relative w-[39%]">
                            <Text
                              className="absolute bottom-[0] right-[0] rotate-[50deg] text-[13px] text-deep_purple-500_01"
                              size="txtInterMedium13"
                            >
                              I
                            </Text>
                            <Text
                              className="absolute left-[0] rotate-[42deg] text-[13px] text-deep_purple-500_01 top-[0]"
                              size="txtInterMedium13"
                            >
                              E
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start ml-4 md:ml-[0] w-[57%] md:w-full">
                            <Text
                              className="ml-0.5 md:ml-[0] rotate-[57deg] text-[13px] text-deep_purple-500_01"
                              size="txtInterMedium13"
                            >
                              R
                            </Text>
                            <Text
                              className="ml-2.5 md:ml-[0] mt-[9px] rotate-[75deg] text-[13px] text-deep_purple-500_01"
                              size="txtInterMedium13"
                            >
                              P
                            </Text>
                            <Text
                              className="ml-3 md:ml-[0] mt-[3px] rotate-[85deg] text-[13px] text-deep_purple-500_01"
                              size="txtInterMedium13"
                            >
                              X
                            </Text>
                            <div className="h-4 md:h-[38px] mt-7 relative w-[15px]">
                              <Text
                                className="absolute bottom-[0] left-[0] rotate-[127deg] text-[13px] text-deep_purple-500_01"
                                size="txtInterMedium13"
                              >
                                I
                              </Text>
                              <Text
                                className="absolute right-[0] rotate-[119deg] text-[13px] text-deep_purple-500_01 top-[0]"
                                size="txtInterMedium13"
                              >
                                N
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[95px] mt-0.5 rotate-[147deg] text-[13px] text-deep_purple-500_01"
                        size="txtInterMedium13"
                      >
                        A
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[0] h-[563px] left-[30%] object-cover w-[33%]"
                  src="images/img_saly38.png"
                  alt="salyThirtyEight"
                />
                <div className="absolute bottom-[38%] flex flex-row gap-5 items-start justify-center left-[16%] w-[14%]">
                  <Img
                    className="h-[45px] md:h-auto mt-2 object-cover w-[41%]"
                    src="images/img_image115.png"
                    alt="image115"
                  />
                  <Img
                    className="h-[46px] md:h-auto mb-[7px] object-cover w-[49%]"
                    src="images/img_nodejs100x6022339.png"
                    alt="nodejs100x60223"
                  />
                </div>
                <div className="absolute bottom-[26%] flex flex-col gap-2 items-center justify-start left-[3%] w-[8%]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-5 items-center justify-start p-1 w-5"
                    style={{
                      backgroundImage: "url('images/img_group1243.svg')",
                    }}
                  >
                    <Img
                      className="h-2.5"
                      src="images/img_airplane_blue_700_02.svg"
                      alt="airplane"
                    />
                  </div>
                  <Text
                    className="text-[13.3px] text-blue-700_02 text-center tracking-[1.06px] uppercase"
                    size="txtInterRegular133"
                  >
                    SCROLL DOWN
                  </Text>
                </div>
                <Button
                  className="cursor-pointer flex items-center justify-center left-[0] min-w-[211px] mt-[244px] rounded-[30px] top-[38%]"
                  leftIcon={
                    <Img
                      className="h-6 mr-2.5 right-[1%] absolute"
                      src="images/img_iconsax_linear_videocircle.svg"
                      alt="Iconsax/Linear/videocircle"
                    />
                  }
                  size="lg"
                  variant="gradient"
                  color="orange_300_blue_gray_700"
                >
                  <div className="capitalize font-medium text-base text-left">
                    Watch Video
                  </div>
                </Button>
              </div>
              <Text
                className="absolute inset-x-[0] mx-auto sm:text-[27.2px] md:text-[29.2px] text-[31.2px] text-blue_gray-300_02 text-center top-[0] tracking-[15.60px] uppercase w-max"
                size="txtPoppinsRegular312"
              >
                Enter to World of
              </Text>
              <div className="absolute flex flex-col font-inter items-start justify-start left-[0] top-[7%] w-[5%]">
                <div className="overflow-x-auto w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                    <div className="flex flex-col justify-start w-[53%]">
                      <div className="flex flex-row items-start justify-evenly md:ml-[0] ml-[9px] w-[88%] md:w-full">
                        <div className="md:h-3.5 h-[35px] mt-[3px] relative w-[63%]">
                          <div className="absolute bottom-[0] md:h-[11px] h-[30px] left-[0] w-[29px]">
                            <div className="absolute bottom-[0] md:h-2.5 h-[23px] left-[0] w-[73%]">
                              <div className="absolute bottom-[0] md:h-2.5 h-4 left-[0] w-[15px]">
                                <Text
                                  className="absolute bottom-[0] left-[0] rotate-[57deg] text-[13px] text-deep_purple-500_01"
                                  size="txtInterMedium13"
                                >
                                  R
                                </Text>
                                <Text
                                  className="absolute right-[0] rotate-[50deg] text-[13px] text-deep_purple-500_01 top-[0]"
                                  size="txtInterMedium13"
                                >
                                  I
                                </Text>
                              </div>
                              <Text
                                className="absolute h-2.5 right-[0] rotate-[42deg] text-[13px] text-deep_purple-500_01 top-[0]"
                                size="txtInterMedium13"
                              >
                                E
                              </Text>
                            </div>
                            <Text
                              className="absolute right-[0] rotate-[33deg] text-[13px] text-deep_purple-500_01 top-[0]"
                              size="txtInterMedium13"
                            >
                              N
                            </Text>
                          </div>
                          <Text
                            className="absolute right-[0] rotate-[23deg] text-[13px] text-deep_purple-500_01 top-[0]"
                            size="txtInterMedium13"
                          >
                            C
                          </Text>
                        </div>
                        <Text
                          className="rotate-[13deg] text-[13px] text-deep_purple-500_01"
                          size="txtInterMedium13"
                        >
                          E
                        </Text>
                        <Text
                          className="rotate-[-1deg] text-[13px] text-deep_purple-500_01"
                          size="txtInterMedium13"
                        >
                          -
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-[9px]">
                        <Text
                          className="rotate-[75deg] text-[13px] text-deep_purple-500_01"
                          size="txtInterMedium13"
                        >
                          P
                        </Text>
                        <Text
                          className="mt-[3px] rotate-[85deg] text-[13px] text-deep_purple-500_01"
                          size="txtInterMedium13"
                        >
                          X
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[7px] mt-7 rotate-[119deg] text-[13px] text-deep_purple-500_01"
                          size="txtInterMedium13"
                        >
                          N
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[13px] rotate-[127deg] text-[13px] text-deep_purple-500_01"
                          size="txtInterMedium13"
                        >
                          I
                        </Text>
                      </div>
                      <div className="md:h-2 h-[23px] md:ml-[0] ml-[19px] relative w-[43%]">
                        <div className="absolute bottom-[0] md:h-2 h-3.5 right-[0] w-[67%]">
                          <Text
                            className="absolute bottom-[0] right-[0] rotate-[157deg] text-[13px] text-deep_purple-500_01"
                            size="txtInterMedium13"
                          >
                            G
                          </Text>
                          <Text
                            className="absolute left-[0] rotate-[147deg] text-[13px] text-deep_purple-500_01 top-[0]"
                            size="txtInterMedium13"
                          >
                            A
                          </Text>
                        </div>
                        <Text
                          className="absolute left-[0] rotate-[136deg] text-[13px] text-deep_purple-500_01 top-[0]"
                          size="txtInterMedium13"
                        >
                          M
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start w-2/5">
                      <Text
                        className="rotate-[-16deg] text-[13px] text-deep_purple-500_01"
                        size="txtInterMedium13"
                      >
                        D
                      </Text>
                      <div className="flex flex-col justify-start md:ml-[0] ml-[7px] w-[86%] md:w-full">
                        <Text
                          className="ml-0.5 md:ml-[0] rotate-[-26deg] text-[13px] text-deep_purple-500_01"
                          size="txtInterMedium13"
                        >
                          E
                        </Text>
                        <Text
                          className="ml-2.5 md:ml-[0] rotate-[-37deg] text-[13px] text-deep_purple-500_01"
                          size="txtInterMedium13"
                        >
                          V
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[19px] rotate-[-47deg] text-[13px] text-deep_purple-500_01"
                          size="txtInterMedium13"
                        >
                          O
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[25px] rotate-[-56deg] text-[13px] text-deep_purple-500_01"
                          size="txtInterMedium13"
                        >
                          P
                        </Text>
                        <Text
                          className="ml-8 md:ml-[0] rotate-[-71deg] text-[13px] text-deep_purple-500_01"
                          size="txtInterMedium13"
                        >
                          Z
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[35px] rotate-[-81deg] text-[13px] text-deep_purple-500_01"
                          size="txtInterMedium13"
                        >
                          O
                        </Text>
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <Text
                            className="mt-[50px] rotate-[-158deg] text-[13px] text-deep_purple-500_01"
                            size="txtInterMedium13"
                          >
                            -
                          </Text>
                          <div className="md:h-[22px] h-[59px] mb-1.5 relative w-[79%]">
                            <div className="absolute md:h-4 h-[53px] right-[0] top-[0] w-[78%]">
                              <div className="absolute md:h-4 h-[45px] right-[0] top-[0] w-[79%]">
                                <div className="absolute md:h-4 h-[37px] right-[0] top-[0] w-[78%]">
                                  <div className="absolute md:h-4 h-[23px] right-[0] top-[0] w-[71%]">
                                    <Text
                                      className="absolute right-[0] rotate-[-92deg] text-[13px] text-deep_purple-500_01 top-[0]"
                                      size="txtInterMedium13"
                                    >
                                      N
                                    </Text>
                                    <Text
                                      className="absolute bottom-[0] left-[0] rotate-[-101deg] text-[13px] text-deep_purple-500_01"
                                      size="txtInterMedium13"
                                    >
                                      E
                                    </Text>
                                  </div>
                                  <Text
                                    className="absolute bottom-[0] left-[0] rotate-[-116deg] text-[13px] text-deep_purple-500_01"
                                    size="txtInterMedium13"
                                  >
                                    2
                                  </Text>
                                </div>
                                <Text
                                  className="absolute bottom-[0] left-[0] rotate-[-125deg] text-[13px] text-deep_purple-500_01"
                                  size="txtInterMedium13"
                                >
                                  0
                                </Text>
                              </div>
                              <Text
                                className="absolute bottom-[0] left-[0] rotate-[-134deg] text-[13px] text-deep_purple-500_01"
                                size="txtInterMedium13"
                              >
                                2
                              </Text>
                            </div>
                            <Text
                              className="absolute bottom-[0] left-[0] rotate-[-144deg] text-[13px] text-deep_purple-500_01"
                              size="txtInterMedium13"
                            >
                              4
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[644px] mt-[73px] text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900_05 text-center"
            size="txtInterBlack48"
          >
            About{" "}
          </Text>
          <Text
            className="ml-14 md:ml-[0] mt-[23px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-justify w-[92%] sm:w-full"
            size="txtInterRegular32"
          >
            Full-stack development refers to the practice of designing,
            building, and maintaining the entire software application stack,
            encompassing both the front end (client-side) and back end
            (server-side) components.
          </Text>
          <div className="flex flex-col font-inter gap-[58px] items-center justify-start max-w-[1358px] mt-12 mx-auto md:px-5 w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-justify w-[98%] sm:w-full"
              size="txtInterRegular32"
            >
              <>
                {" "}
                A full-stack developer is proficient in a range of technologies
                and frameworks required to handle all aspects of software
                development, from user interface design and user experience
                (UI/UX) to server logic, databases, and server infrastructure.
                Here&#39;s a brief breakdown of key components in full-stack
                development:
              </>
            </Text>
            <div className="bg-blue-800_01 flex flex-row items-center justify-start p-7 sm:px-5 shadow-bs7 w-full">
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
                    alt="callTen"
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
          </div>
          <div className="flex flex-col font-inter items-center justify-start max-w-[1387px] mt-[83px] mx-auto md:px-5 w-full">
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
                  <div className="flex relative w-[984px] md:w-full">
                    <div className="flex my-auto w-1/2 sm:w-full">
                      <div className="flex my-auto w-[39%]">
                        <Img
                          className="h-28 my-auto object-cover w-[109px]"
                          src="images/img_1ddc6b322f82bf5_112x109.png"
                          alt="1ddc6b322f82bfFive_One"
                        />
                        <Text
                          className="capitalize ml-[-3px] my-auto text-base text-black-900 text-center w-auto z-[1]"
                          size="txtInterRegular16Black900"
                        >
                          15 classes
                        </Text>
                      </div>
                      <div className="flex flex-row font-lato gap-[0.83px] items-center justify-start ml-[-3px] my-auto md:px-10 sm:px-5 px-[41.69px] w-auto z-[1]">
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
                    </div>
                    <div className="flex sm:flex-col flex-row font-lato gap-[10.01px] items-center justify-between ml-[-3px] my-auto w-auto z-[1]">
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
          <div className="flex max-w-[1260px] mt-28 mx-auto md:px-5 relative w-full">
            <div className="flex flex-col items-center justify-start my-auto w-[91%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="backdrop-opacity-[0.5] bg-orange-300 blur-[500.00px] h-[265px] md:mt-0 mt-[290px] rounded-[132px] w-[24%]"></div>
                <div className="flex flex-col justify-start mb-[60px]">
                  <div className="bg-blue_gray-700 flex flex-col font-inter items-center justify-end mr-[264px] p-[21px] sm:px-5 rounded-[20px]">
                    <Text
                      className="mt-2 text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                      size="txtInterMedium48"
                    >
                      Apply Now
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[253px] mt-[277px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                    size="txtInterBold48Black900"
                  >
                    Courses Highlights
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[186px] mt-3 text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
                    size="txtPoppinsMedium24Bluegray400"
                  >
                    Lorem Ipsum is simply dummy text of the printing.
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="h-[471px] ml-[undefinedpx] mt-auto object-cover w-[471px] z-[1]"
              src="images/img_saly10.png"
              alt="salyTen"
            />
            <Img
              className="h-44 mb-[46px] ml-[-49.18px] mt-auto z-[1]"
              src="images/img_group_gray_800_176x168.svg"
              alt="group"
            />
          </div>
          <Line className="bg-black-900 h-px mr-[5px] mt-[83px] w-full" />
          <div className="font-inter md:h-[1061px] h-[1098px] sm:h-[1474px] mt-[66px] md:px-5 relative w-full">
            <div className="absolute h-[1026px] sm:h-[1408px] md:h-[995px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="h-[1026px] sm:h-[1408px] md:h-[995px] m-auto w-full">
                <div className="flex flex-col md:gap-10 gap-[518px] h-full items-center justify-start m-auto w-full">
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
                className="absolute bottom-[14%] h-[197px] left-[34%]"
                src="images/img_group_orange_300.svg"
                alt="group_One"
              />
            </div>
            <Img
              className="absolute bottom-[0] h-[621px] left-[0] object-cover w-[621px]"
              src="images/img_33c079b10fc6e0c.png"
              alt="33c079b10fc6e0c"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[63px] mt-[66px] sm:text-[40px] md:text-[46px] text-[50px] text-orange-300 tracking-[1.00px]"
            size="txtInterBlack50Orange300"
          >
            This is where you embark on an amazing journey!
          </Text>
          <Text
            className="md:ml-[0] ml-[373px] mt-1.5 text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
            size="txtPoppinsMedium24Bluegray400"
          >
            Lorem Ipsum is simply dummy text of the printing.
          </Text>
          <Text
            className="md:ml-[0] ml-[532px] mt-[88px] sm:text-[35.43px] md:text-[41.43px] text-[45.43px] text-blue_gray-700 text-center tracking-[1.09px] uppercase"
            size="txtInterBold4543"
          >
            How It Works
          </Text>
          <div className="flex md:flex-col flex-row font-montserrat md:gap-10 gap-[158px] items-start justify-end md:ml-[0] ml-[289px] mt-[99px] md:px-5 w-[76%] md:w-full">
            <div className="flex md:h-auto mb-[87px] relative w-[366px]">
              <Text
                className="my-auto md:text-5xl text-[286.22px] text-blue_gray-700 text-center tracking-[1.14px] uppercase w-[171px]"
                size="txtMontserratBold28622"
              >
                0
              </Text>
              <Img
                className="h-[170px] ml-[-38.66px] my-auto object-cover w-[222px] z-[1]"
                src="images/img_saly27.png"
                alt="salyTwentySeven"
              />
            </div>
            <div className="flex flex-col gap-[27.26px] h-[207px] md:h-auto items-start justify-start md:mt-0 mt-[229px] w-auto sm:w-full">
              <div className="flex flex-col gap-[9.09px] h-[54px] md:h-auto items-start justify-center w-[562px] sm:w-full">
                <Text
                  className="sm:text-[23.26px] md:text-[25.26px] text-[27.26px] text-blue_gray-700 text-center tracking-[1.09px] uppercase w-auto"
                  size="txtMontserratBold2726"
                >
                  Phase 0
                </Text>
                <Line className="bg-blue_gray-700 h-[5px] w-full" />
              </div>
              <div className="flex flex-col font-inter h-[126px] md:h-auto items-start justify-start w-[570px] sm:w-full">
                <Text
                  className="leading-[30.00px] max-w-[570px] md:max-w-full text-2xl md:text-[22px] text-black-900_72 text-justify sm:text-xl"
                  size="txtInterRegular24Black90072"
                >
                  Get to know about the platform , the amazing features ,
                  amazing curriculum , real - time 1 on 1 doubt resolution
                  system , mentor connect and much more{" "}
                </Text>
              </div>
            </div>
          </div>
          <div className="font-montserrat md:h-[400px] h-[403px] md:ml-[0] ml-[60px] mt-12 md:px-5 relative w-[81%] md:w-full">
            <div className="md:h-[352px] h-[403px] m-auto w-full">
              <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-end left-[0] my-auto md:pr-10 sm:pr-5 pr-[191px] pt-[191px] w-[92%]">
                <div className="flex flex-col gap-[27.26px] h-[211px] md:h-auto items-end justify-center w-auto sm:w-full">
                  <div className="flex flex-col gap-[9.09px] h-[54px] md:h-auto items-end justify-start w-[562px] sm:w-full">
                    <Text
                      className="sm:text-[23.26px] md:text-[25.26px] text-[27.26px] text-blue_gray-700 text-center tracking-[1.09px] uppercase w-auto"
                      size="txtMontserratBold2726"
                    >
                      Phase 1
                    </Text>
                    <Line className="bg-deep_purple-100 h-[5px] w-full" />
                  </div>
                  <div className="h-[132px] md:h-[87px] relative w-full">
                    <div className="absolute flex flex-col font-poppins md:h-auto h-full inset-y-[0] items-end justify-start my-auto right-[0] w-auto">
                      <Text
                        className="text-[14.54px] text-blue_gray-700 text-right w-auto"
                        size="txtPoppinsSemiBold1454"
                      >
                        Month 0 - 4{" "}
                      </Text>
                    </div>
                    <Text
                      className="absolute bottom-[5%] inset-x-[0] mx-auto text-2xl md:text-[22px] text-black-900_77 text-justify sm:text-xl tracking-[-0.15px] w-full"
                      size="txtInterRegular24Black90077"
                    >
                      Start your car towards programming & master data structure
                      Crack any DS & Algo interview round.
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[351px] object-cover right-[0] rounded-[28px] top-[0] w-[26%]"
                src="images/img_saly33_351x296.png"
                alt="salyThirtyThree"
              />
            </div>
            <div className="absolute flex flex-col h-[333px] md:h-auto items-center justify-center right-[6%] top-[3%] w-[360px]">
              <div className="flex flex-col h-[333px] md:h-auto items-end justify-center w-[130px]">
                <Text
                  className="md:text-5xl text-[272.59px] text-center text-orange-300_8e tracking-[1.09px] uppercase w-[130px]"
                  size="txtMontserratBold27259"
                >
                  1
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-montserrat md:gap-10 items-start justify-between max-w-[1191px] mt-[53px] mx-auto md:px-5 w-full">
            <div className="h-[333px] md:h-[415px] mb-[82px] relative w-[494px] sm:w-full">
              <Img
                className="absolute h-[263px] inset-y-[0] left-[0] my-auto object-cover w-[368px]"
                src="images/img_saly25.png"
                alt="salyTwentyFive"
              />
              <Text
                className="absolute h-full inset-y-[0] my-auto right-[0] md:text-5xl text-[272.59px] text-center text-orange-300_8e tracking-[1.09px] uppercase w-[152px]"
                size="txtMontserratBold27259"
              >
                2
              </Text>
            </div>
            <div className="flex sm:flex-1 flex-col gap-[27.26px] h-[253px] md:h-auto items-start justify-start md:mt-0 mt-[162px] w-auto sm:w-full">
              <div className="flex flex-col gap-[9.09px] h-[94px] md:h-auto items-start justify-center w-[562px] sm:w-full">
                <Text
                  className="sm:text-[23.26px] md:text-[25.26px] text-[27.26px] text-blue_gray-700 tracking-[1.09px] uppercase w-auto"
                  size="txtMontserratBold2726"
                >
                  phase 2
                </Text>
                <Line className="bg-deep_purple-100 h-[5px] w-full" />
              </div>
              <div className="h-[132px] md:h-[58px] relative w-[93%] sm:w-full">
                <div className="absolute flex flex-col font-poppins md:h-auto h-full inset-y-[0] items-start justify-start left-[0] my-auto w-auto">
                  <Text
                    className="text-[14.54px] text-blue_gray-700 w-auto"
                    size="txtPoppinsSemiBold1454"
                  >
                    Month 5 - 6
                  </Text>
                </div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto text-2xl md:text-[22px] text-black-900_87 text-justify sm:text-xl tracking-[-0.15px] w-full"
                  size="txtInterRegular24Black90087"
                >
                  Make a pitstop-Build Amazing Responsive Websites. And become
                  Front end developer
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-montserrat md:gap-10 gap-[175px] items-start justify-start md:ml-[0] ml-[66px] mt-[53px] md:px-5 w-4/5 md:w-full">
            <div className="flex flex-col gap-[27.26px] h-[214px] md:h-auto items-end justify-center md:mt-0 mt-[201px] w-auto sm:w-full">
              <div className="flex flex-col font-montserrat gap-[9.09px] h-[54px] md:h-auto items-end justify-start w-[562px] sm:w-full">
                <Text
                  className="sm:text-[23.26px] md:text-[25.26px] text-[27.26px] text-blue_gray-700 text-center tracking-[1.09px] uppercase w-auto"
                  size="txtMontserratBold2726"
                >
                  phase 3
                </Text>
                <Line className="bg-deep_purple-100 h-[5px] w-full" />
              </div>
              <div className="flex flex-col font-poppins items-end justify-start w-auto">
                <Text
                  className="text-[14.54px] text-blue_gray-700 text-right w-auto"
                  size="txtPoppinsSemiBold1454"
                >
                  Month 7 - 8
                </Text>
              </div>
              <Text
                className="max-w-[544px] md:max-w-full text-2xl md:text-[22px] text-black-900_84 text-justify sm:text-xl tracking-[-0.15px]"
                size="txtInterRegular24Black90084"
              >
                Get back on the road-write scalable backend servers using
                Nodejs. And become a Full Stack Developer
              </Text>
            </div>
            <div className="h-[333px] md:h-[416px] mb-[83px] relative w-[36%] md:w-full">
              <div className="absolute flex flex-col md:h-auto h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[360px]">
                <Text
                  className="md:text-5xl text-[272.59px] text-center text-orange-300_8e tracking-[1.09px] uppercase w-[151px]"
                  size="txtMontserratBold27259"
                >
                  3
                </Text>
              </div>
              <Img
                className="absolute bottom-[6%] h-[270px] object-cover right-[0] w-[73%]"
                src="images/img_saly35.png"
                alt="salyThirtyFive"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-montserrat md:gap-10 items-start justify-between max-w-[1113px] mt-32 mx-auto md:px-5 w-full">
            <div className="h-[333px] md:h-[417px] mb-[84px] relative w-[380px] sm:w-full">
              <Img
                className="absolute h-[305px] inset-y-[0] left-[0] my-auto object-cover w-[245px]"
                src="images/img_saly26_305x245.png"
                alt="salyTwentySix"
              />
              <Text
                className="absolute h-full inset-y-[0] my-auto right-[0] md:text-5xl text-[272.59px] text-center text-orange-300_8e tracking-[1.09px] uppercase w-44"
                size="txtMontserratBold27259"
              >
                4
              </Text>
            </div>
            <div className="flex sm:flex-1 flex-col gap-[27.26px] h-[253px] md:h-auto items-start justify-start md:mt-0 mt-[164px] w-auto sm:w-full">
              <div className="flex flex-col gap-[9.09px] h-[94px] md:h-auto items-start justify-center w-[562px] sm:w-full">
                <Text
                  className="sm:text-[23.26px] md:text-[25.26px] text-[27.26px] text-blue_gray-700 tracking-[1.09px] uppercase w-auto"
                  size="txtMontserratBold2726"
                >
                  phase 4
                </Text>
                <Line className="bg-deep_purple-100 h-[5px] w-full" />
              </div>
              <div className="h-[132px] md:h-[87px] relative w-[99%] sm:w-full">
                <div className="absolute flex flex-col font-poppins md:h-auto h-full inset-y-[0] items-start justify-start left-[0] my-auto w-auto">
                  <Text
                    className="text-[14.54px] text-blue_gray-700 w-auto"
                    size="txtPoppinsSemiBold1454"
                  >
                    Month 9
                  </Text>
                </div>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto text-2xl md:text-[22px] text-black-900_77 text-justify sm:text-xl tracking-[-0.15px] w-full"
                  size="txtInterRegular24Black90077"
                >
                  Stock up your car-learn amazing library for frontend, React.
                  And become Master of Front end
                </Text>
              </div>
            </div>
          </div>
          <div className="font-montserrat h-[406px] md:h-[446px] md:ml-[0] ml-[66px] mt-[71px] md:px-5 relative w-[81%] md:w-full">
            <div className="absolute md:h-[375px] h-[406px] inset-y-[0] left-[0] my-auto w-[96%] md:w-full">
              <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto md:pr-10 sm:pr-5 pr-[194px] pt-[194px] w-full">
                <div className="flex flex-col gap-[27.26px] h-[211px] md:h-auto items-end justify-center w-auto sm:w-full">
                  <div className="flex flex-col font-montserrat gap-[9.09px] h-[54px] md:h-auto items-end justify-start w-[562px] sm:w-full">
                    <Text
                      className="sm:text-[23.26px] md:text-[25.26px] text-[27.26px] text-blue_gray-700 text-center tracking-[1.09px] uppercase w-auto"
                      size="txtMontserratBold2726"
                    >
                      phase 5
                    </Text>
                    <Line className="bg-deep_purple-100 h-[5px] w-full" />
                  </div>
                  <Text
                    className="text-[14.54px] text-blue_gray-700 text-right w-auto"
                    size="txtPoppinsSemiBold1454"
                  >
                    Month 9 onwards
                  </Text>
                  <Text
                    className="max-w-[559px] md:max-w-full text-2xl md:text-[22px] text-black-900_89 text-justify sm:text-xl tracking-[-0.15px]"
                    size="txtInterRegular24Black90089"
                  >
                    Look out of your window-dream company is nearing Get ready
                    for placements.
                  </Text>
                </div>
              </div>
              <Text
                className="absolute right-[18%] md:text-5xl text-[272.59px] text-center text-orange-300_8e top-[0] tracking-[1.09px] uppercase"
                size="txtMontserratBold27259"
              >
                5
              </Text>
            </div>
            <Img
              className="absolute h-[327px] object-cover right-[0] top-[5%] w-[29%]"
              src="images/img_saly34.png"
              alt="salyThirtyFour"
            />
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[69px] mt-[25px] md:px-5 w-[35%] md:w-full">
            <Img
              className="h-[55px] md:h-auto object-cover w-1/4 sm:w-full"
              src="images/img_google1.png"
              alt="googleTwo"
            />
            <Img
              className="h-[29px] md:h-auto ml-8 sm:ml-[0] object-cover w-[19%] sm:w-full"
              src="images/img_amzonlogo1.png"
              alt="amzonlogoTwo"
            />
            <Img
              className="h-[29px] md:h-auto sm:ml-[0] ml-[35px] object-cover w-[19%] sm:w-full"
              src="images/img_micro1.png"
              alt="microTwo"
            />
            <Img
              className="h-6 md:h-auto sm:ml-[0] ml-[38px] object-cover w-[18%] sm:w-full"
              src="images/img_adobe1.png"
              alt="adobeTwo"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[504px] mt-[98px] md:text-5xl text-[64px] text-blue_gray-700 tracking-[-0.15px]"
            size="txtInterBlack64Bluegray700"
          >
            THE RESULTS
          </Text>
          <List
            className="sm:flex-col flex-row font-poppins gap-[43px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1328px] mt-[89px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-center justify-start rounded-[30px] shadow-bs26 w-full">
              <div className="bg-white-A700 md:h-[229px] h-[267px] p-3.5 relative rounded-[30px] shadow-bs7 w-full">
                <Text
                  className="leading-[106.00%] my-auto md:text-5xl text-8xl text-black-900_05 tracking-[-1.92px] w-[89%] sm:w-full"
                  size="txtPoppinsBlack96"
                >
                  OWN YOUR
                </Text>
                <div className="absolute flex flex-col font-inter inset-x-[0] items-center justify-start mx-auto top-[11%]">
                  <Text
                    className="md:text-5xl text-[64px] text-blue_gray-700 tracking-[-0.58px]"
                    size="txtInterBlack64Bluegray700"
                  >
                    <span className="text-blue_gray-700 font-inter text-left font-black">
                      <>
                        11 LPA
                        <br />
                      </>
                    </span>
                    <span className="text-blue_gray-700 font-inter text-left font-bold">
                      <>
                        <br />
                      </>
                    </span>
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_89 text-justify sm:text-xl tracking-[-0.15px]"
                    size="txtInterRegular24Black90089"
                  >
                    Average CTC
                  </Text>
                </div>
                <Img
                  className="absolute bottom-[9%] h-[98px] left-[30%] object-cover w-[35%]"
                  src="images/img_saly45.png"
                  alt="salyFortyFive"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col font-inter items-center justify-start rounded-[30px] shadow-bs26 w-full">
              <div className="bg-blue_gray-600_03 md:h-[229px] h-[267px] p-[11px] relative rounded-[30px] shadow-bs7 w-full">
                <div className="absolute h-[229px] inset-y-[0] left-[3%] my-auto w-[89%]">
                  <div className="h-[229px] m-auto w-full">
                    <Text
                      className="leading-[106.00%] m-auto md:text-5xl text-8xl text-black-900_05 tracking-[-1.92px] w-full"
                      size="txtPoppinsBlack96"
                    >
                      OWN YOUR
                    </Text>
                    <Text
                      className="absolute right-[30%] md:text-5xl text-[64px] text-white-A700 top-[6%] tracking-[-0.15px]"
                      size="txtInterBlack64WhiteA700"
                    >
                      40x
                    </Text>
                  </div>
                  <Text
                    className="absolute right-[15%] text-2xl md:text-[22px] text-justify text-white-A700_ad sm:text-xl top-[39%] tracking-[-0.15px]"
                    size="txtInterRegular24WhiteA700ad"
                  >
                    Return on Investment
                  </Text>
                </div>
                <Img
                  className="absolute bottom-[4%] h-[122px] inset-x-[0] mx-auto object-cover w-[30%]"
                  src="images/img_saly44.png"
                  alt="salyFortyFour"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col font-poppins items-center justify-start rounded-[30px] shadow-bs26 w-full">
              <div className="bg-white-A700 md:h-[229px] h-[267px] pt-3.5 px-3.5 relative rounded-[30px] shadow-bs7 w-full">
                <div className="absolute h-[229px] inset-y-[0] left-[5%] my-auto w-[89%]">
                  <Text
                    className="leading-[106.00%] m-auto md:text-5xl text-8xl text-black-900_05 tracking-[-1.92px] w-full"
                    size="txtPoppinsBlack96"
                  >
                    OWN YOUR
                  </Text>
                  <div className="absolute flex flex-col font-inter items-center justify-start right-[1%] top-[6%]">
                    <Text
                      className="md:text-5xl text-[64px] text-blue_gray-700 tracking-[-0.58px]"
                      size="txtInterBlack64Bluegray700"
                    >
                      95%
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_89 text-justify sm:text-xl tracking-[-0.15px]"
                      size="txtInterRegular24Black90089"
                    >
                      Students bag dream tech jobs
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[0] h-[121px] inset-x-[0] mx-auto object-cover w-[31%]"
                  src="images/img_saly37.png"
                  alt="salyThirtySeven"
                />
              </div>
            </div>
          </List>
          <div className="flex sm:flex-col flex-row font-inter gap-[26px] items-center justify-center md:ml-[0] ml-[505px] mt-32 md:px-5 w-[29%] md:w-full">
            <Img
              className="h-[35px] w-[34px]"
              src="images/img_download_blue_gray_600_03.svg"
              alt="download"
            />
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-700 tracking-[-0.15px]"
              size="txtInterBlack40Bluegray700"
            >
              <span className="text-blue_gray-700 font-inter text-left font-medium">
                Download the
              </span>
              <span className="text-orange-300 font-inter text-left font-medium">
                {" "}
                PDF
              </span>
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-inter md:gap-10 items-center justify-between max-w-[1235px] mt-28 mx-auto md:px-5 w-full">
            <div className="flex h-[765px] justify-end relative w-[47%] md:w-full">
              <div className="backdrop-opacity-[0.5] bg-blue_gray-800_01 blur-[500.00px] h-[184px] mb-[268px] ml-[181px] mt-auto rounded-[94px] w-[33%]"></div>
              <Img
                className="absolute h-[765px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_faa908ffc41205a.png"
                alt="faa908ffc41205a"
              />
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[47%] md:w-full">
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
          </div>
          <div className="flex flex-row font-inter gap-3.5 items-center justify-center md:ml-[0] ml-[613px] mt-[127px] md:px-5 w-[17%] md:w-full">
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
          <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between max-w-[1365px] mt-[49px] mx-auto md:px-5 w-full">
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
            <div className="flex md:flex-1 flex-col gap-8 justify-start w-[49%] md:w-full">
              <List
                className="flex flex-col gap-[23px] mr-[43px] w-[94%]"
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
                className="h-[104px] md:ml-[0] ml-[564px]"
                src="images/img_group_gray_800.svg"
                alt="group_Two"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1134px] mt-[33px] mx-auto md:px-5 w-full">
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
          <Line className="bg-orange-300 h-px w-full" />
          <Text
            className="md:ml-[0] ml-[73px] mt-[90px] text-blue_gray-600 text-lg uppercase"
            size="txtPoppinsSemiBold18"
          >
            REVIEW
          </Text>
          <div className="font-inter h-[154px] md:h-[161px] md:ml-[0] ml-[73px] mt-[7px] md:px-5 relative w-[71%] md:w-full">
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
          <List
            className="sm:flex-col flex-row font-roboto gap-[29px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1354px] mt-[91px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col relative w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto p-[22px] sm:px-5 rounded-lg shadow-bs7 w-full">
                <div className="flex flex-col gap-[17px] items-start justify-start mb-[55px] w-[96%] md:w-full">
                  <div className="flex flex-row items-center justify-start w-[28%] md:w-full">
                    <Img
                      className="h-[27px] md:h-auto object-cover w-7"
                      src="images/img_f43ea641ea90098.png"
                      alt="f43ea641ea90098"
                    />
                    <Img
                      className="h-[27px] md:h-auto ml-2.5 object-cover w-7"
                      src="images/img_f43ea641ea90098.png"
                      alt="f43ea641ea90098_One"
                    />
                    <Img
                      className="h-[27px] md:h-auto ml-2 object-cover w-7"
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
            <div className="flex flex-col relative w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto p-[22px] sm:px-5 rounded-lg shadow-bs7 w-full">
                <div className="flex flex-col gap-[17px] items-start justify-start mb-[55px] w-[96%] md:w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-[28%] md:w-full">
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
                  alt="ellipseSeventySix"
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
            <div className="flex flex-col relative w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto p-[22px] sm:px-5 rounded-lg shadow-bs7 w-full">
                <div className="flex flex-col gap-[17px] items-start justify-start mb-[55px] w-[96%] md:w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-[18%] md:w-full">
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
                  alt="ellipseSeventySeven"
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
          </List>
          <PagerIndicator
            className="flex h-3.5 justify-center md:ml-[0] ml-[657px] mt-[116px] w-[126px]"
            count={4}
            activeCss="inline-block cursor-pointer h-3 bg-blue_gray-900_07 w-[39px] rounded-md"
            activeIndex={1}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-3.5 bg-gray-400_01 w-3.5"
            selectedWrapperCss="inline-block md:ml-[0] mx-[7.50px] sm:ml-[0]"
            unselectedWrapperCss="inline-block md:ml-[0] mx-[7.50px] sm:ml-[0]"
          />
          <Text
            className="md:ml-[0] ml-[337px] mt-[114px] md:text-5xl text-[64px] text-blue-800 text-center"
            size="txtInterBold64Blue800"
          >
            Certificate We Offer You
          </Text>
          <Text
            className="md:ml-[0] ml-[407px] mt-[19px] text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
            size="txtPoppinsMedium24Bluegray400"
          >
            Lorem Ipsum is simply dummy text of the printing.
          </Text>
          <div className="bg-blue_gray-100_02 h-[574px] max-w-[1257px] mt-[79px] mx-auto md:px-5 w-full"></div>
          <Footer1 className="flex font-inter items-center justify-center mt-[155px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default DevOpsPage;
