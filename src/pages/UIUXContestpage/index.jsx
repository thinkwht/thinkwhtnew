import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer2 from "components/Footer2";
import UIUXContestPageNavbar from "components/UIUXContestPageNavbar";

import { CloseSVG } from "../../assets/images";

const UIUXContestpagePage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="h-[1003px] md:h-[981px] md:px-5 relative w-full">
            <div className="absolute h-[1003px] md:h-[981px] inset-[0] justify-center m-auto w-[98%] md:w-full">
              <Text
                className="absolute bottom-[0] left-[4%] md:text-5xl text-[64px] text-blue-800_01"
                size="txtInterSemiBold64"
              >
                App Design
              </Text>
              <div className="absolute h-[981px] inset-[0] justify-center m-auto w-full">
                <div className="absolute md:h-[780px] h-[819px] inset-x-[0] mx-auto top-[3%] w-[99%] md:w-full">
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[710px] inset-x-[0] items-center justify-start mx-auto p-8 sm:px-5 w-full"
                    style={{
                      backgroundImage: "url('images/img_group667.svg')",
                    }}
                  >
                    <div className="bg-white-A700_6c flex flex-col justify-end mb-[5px] p-4 rounded-lg w-[94%] md:w-full">
                      <Text
                        className="md:ml-[0] ml-[46px] mr-[748px] mt-[43px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[1.92px]"
                        size="txtInterBlack48WhiteA700"
                      >
                        UI/UX CONTEST{" "}
                      </Text>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[29px] mr-[666px] mt-1 w-[43%] md:w-full">
                        <Line className="bg-blue_gray-900_09 h-0.5 w-[52%]" />
                        <Text
                          className="md:ml-[0] ml-[5px] mt-8 md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.28px]"
                          size="txtInterBold32WhiteA700"
                        >
                          Put Your UI Skills To Test With
                        </Text>
                        <Text
                          className="ml-1.5 md:ml-[0] mt-[3px] sm:text-4xl md:text-[38px] text-[40px] text-indigo-900_03 tracking-[1.60px]"
                          size="txtInterBlack40Indigo90003"
                        >
                          30 UI/UX
                        </Text>
                        <Text
                          className="ml-1.5 md:ml-[0] mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.28px]"
                          size="txtInterBold32WhiteA700"
                        >
                          Hosted by Premier Institutes{" "}
                        </Text>
                        <Text
                          className="ml-1.5 md:ml-[0] mt-10 text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.96px]"
                          size="txtInterRegular24WhiteA700"
                        >
                          Cash Prize Pool Of :
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[5px] mt-[13px] sm:text-4xl md:text-[38px] text-[40px] text-indigo-900_03 tracking-[1.60px]"
                          size="txtInterBlack40Indigo90003"
                        >
                          INR 50,000/ Iphone
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[5px] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.96px]"
                          size="txtInterRegular24WhiteA700"
                        >
                          and exciting vouchers to be won
                        </Text>
                        <div className="bg-blue_gray-900_05 flex flex-col items-start justify-start md:ml-[0] ml-[5px] mt-[34px] px-10 sm:px-5 py-3 rounded-lg w-auto sm:w-full">
                          <Text
                            className="text-lg text-white-A700 tracking-[0.72px] w-auto"
                            size="txtInterMedium18"
                          >
                            Participation Certification For All
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start ml-1.5 md:ml-[0] w-[18%] md:w-full">
                          <div className="md:h-[94px] h-[98px] relative w-full">
                            <Img
                              className="absolute h-[94px] inset-[0] justify-center m-auto"
                              src="images/img_line2.svg"
                              alt="lineTwo"
                            />
                            <Img
                              className="absolute h-[94px] inset-[0] justify-center m-auto"
                              src="images/img_car.svg"
                              alt="car"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[780px] right-[10%] top-[0]"
                    src="images/img_element.svg"
                    alt="element"
                  />
                </div>
                <Img
                  className="absolute bottom-[16%] h-[134px] object-cover right-[7%] w-[11%]"
                  src="images/img_thinkwhatlogohighfinal_70x90.png"
                  alt="thinkwhatlogohi"
                />
                <Img
                  className="absolute h-[981px] inset-y-[0] my-auto object-cover right-[0] w-[62%]"
                  src="images/img_2.png"
                  alt="Two"
                />
              </div>
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
              <UIUXContestPageNavbar className="bg-white-A700 flex flex-col items-center justify-start p-1.5 shadow-bs7 w-full" />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1288px] mt-[26px] mx-auto md:px-5 w-full">
            <Img
              className="h-[49px] md:mt-0 mt-1"
              src="images/img_globe_blue_800_02.svg"
              alt="globe"
            />
            <Text
              className="md:ml-[0] ml-[22px] md:mt-0 mt-[7px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800_06 text-center tracking-[1.28px]"
              size="txtInterMedium32"
            >
              Online
            </Text>
            <Img
              className="h-[34px] md:ml-[0] ml-[60px] md:mt-0 mt-2"
              src="images/img_user_blue_800_02.svg"
              alt="user"
            />
            <Text
              className="md:ml-[0] ml-[23px] md:mt-0 mt-2.5 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800_06 text-center tracking-[1.28px]"
              size="txtInterMedium32"
            >
              1000 participants
            </Text>
            <Img
              className="h-8 md:ml-[0] ml-[39px] md:mt-0 mt-2.5 w-[31px]"
              src="images/img_edit.svg"
              alt="edit"
            />
            <Text
              className="md:ml-[0] ml-[31px] md:mt-0 mt-1.5 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800_06 text-center tracking-[1.28px]"
              size="txtInterMedium32"
            >
              Eligibility : All
            </Text>
            <Img
              className="h-[46px] md:ml-[0] ml-[49px]"
              src="images/img_clock.svg"
              alt="clock"
            />
            <Text
              className="md:ml-[0] ml-[25px] md:mt-0 mt-2 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800_06 text-center tracking-[1.28px]"
              size="txtInterMedium32"
            >
              100 Registered
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[418px] mt-[65px] md:px-5 w-2/5 md:w-full">
            <div className="flex flex-col gap-14 items-center justify-start w-full">
              <Text></Text>
              <div className="flex sm:flex-col flex-row gap-[13px] items-end justify-between w-full">
                <Text
                  className="sm:mt-0 mt-3.5 sm:text-[23px] md:text-[25px] text-[27px] text-blue_gray-700"
                  size="txtInterMedium27"
                >
                  UI/UX contest participation fees
                </Text>
                <Text
                  className="sm:text-[35.27px] md:text-[37.27px] text-[39.27px] text-blue-800_02"
                  size="txtInterBold3927"
                >
                  Rs. 150
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1236px] mt-[85px] mx-auto md:px-5 w-full">
            <div className="bg-blue-50 flex flex-col h-[89px] items-center justify-start md:mt-0 my-[5px] p-4 rounded-lg w-[89px]">
              <Img
                className="h-[53px] w-[54px]"
                src="images/img_calendar_blue_800_01.svg"
                alt="calendar"
              />
            </div>
            <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[29px] md:mt-0 mt-[5px]">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800_06 text-center tracking-[1.28px]"
                size="txtInterMedium32"
              >
                Registration Deadline
              </Text>
              <Text
                className="ml-1 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-center tracking-[1.28px]"
                size="txtInterRegular32"
              >
                7 days left
              </Text>
            </div>
            <Img
              className="h-[89px] md:ml-[0] ml-[51px] rounded-lg w-[89px]"
              src="images/img_frame79.svg"
              alt="frameSeventyNine"
            />
            <div className="flex flex-col gap-[5px] items-start justify-start ml-8 md:ml-[0] md:mt-0 mt-[5px]">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800_06 text-center tracking-[1.28px]"
                size="txtInterMedium32"
              >
                Impressions
              </Text>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-center tracking-[1.28px]"
                size="txtInterRegular32"
              >
                2,666
              </Text>
            </div>
            <div className="bg-blue-50 flex flex-col h-[89px] items-center justify-start mb-2.5 md:ml-[0] ml-[70px] p-[7px] rounded-lg w-[89px]">
              <Img
                className="h-[75px]"
                src="images/img_group1000001622.svg"
                alt="group1000001622"
              />
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[26px]">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800_06 text-center tracking-[1.28px]"
                size="txtInterMedium32"
              >
                Participation
              </Text>
              <Text
                className="md:ml-[0] ml-[3px] mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-center tracking-[1.28px]"
                size="txtInterRegular32"
              >
                Individual
              </Text>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[84px] mt-[117px] text-5xl sm:text-[38px] md:text-[44px] text-blue-800_01 tracking-[1.92px]"
            size="txtInterSemiBold48"
          >
            All that you need to know about UI/UX Contest
          </Text>
          <Text
            className="leading-[51.00px] md:ml-[0] ml-[79px] mt-[51px] text-2xl md:text-[22px] text-blue_gray-400 text-justify sm:text-xl tracking-[0.96px]"
            size="txtInterRegular24Bluegray400"
          >
            <>
              Get ready to unleash your creativity in —the UI/UX Contest, hosted
              by the Entrepreneurship Cell (E-Cell) at IIIT Bhagalpur in
              collaboration with Zuno.UI/UX design is the heart and soul of
              successful startups, and this contest is your chance to showcase
              your skills and win exciting prizes. With a prize pool worth 2
              lakhs, this is an opportunity you don&#39;t want to miss!
              <br />
              Join this UI/UX contest to showcase your design skills and win
              amazing prizes! This is a unique opportunity to gain recognition
              and take your design skills to the next level!
            </>
          </Text>
          <Text
            className="md:ml-[0] ml-[79px] mt-[66px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
            size="txtInterMedium48Black900"
          >
            <span className="text-blue-800_01 font-inter text-left font-medium">
              Contest Duration:
            </span>
            <span className="text-black-900 font-inter text-left font-medium">
              {" "}
            </span>
            <span className="text-blue_gray-400 font-inter text-left font-normal">
              22 May- 2 June 2023
            </span>
          </Text>
          <Text
            className="md:ml-[0] ml-[79px] mt-[17px] text-2xl md:text-[22px] text-blue_gray-400 text-justify sm:text-xl w-[91%] sm:w-full"
            size="txtInterRegular24Bluegray400"
          >
            <span className="text-blue_gray-400 font-inter font-normal">
              This Contest is{" "}
            </span>
            <span className="text-blue-800_01 font-inter font-medium">
              free
            </span>
            <span className="text-blue_gray-400 font-inter font-normal">
              <>
                {" "}
                of cost, so don&#39;t miss this opportunity to showcase your
                design skills and gain recognition in the design community. We
                can&#39;t wait to see your creations!
              </>
            </span>
          </Text>
          <Text
            className="md:ml-[0] ml-[78px] mt-[52px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-justify"
            size="txtInterMedium40Black900"
          >
            <span className="text-blue-800_01 font-inter font-medium">
              Contest Task:
            </span>
            <span className="text-black-900 font-inter font-medium"> </span>
            <span className="text-blue_gray-400 font-inter font-normal">
              Design a visually appealing and user-friendl
            </span>
            <span className="text-blue_gray-400 tracking-[1.60px] font-inter font-normal">
              y
            </span>
            <span className="text-blue_gray-400 font-inter font-normal">
              <>
                {" "}
                homepage for https://www.foundit.in
                <br />
              </>
            </span>
          </Text>
          <Text
            className="md:ml-[0] ml-[79px] mt-[73px] text-4xl sm:text-[32px] md:text-[34px] text-blue-800_02 text-justify tracking-[1.44px]"
            size="txtInterMedium36Blue80002"
          >
            Submission Format :
          </Text>
          <div className="flex md:flex-col flex-row gap-[29px] items-center justify-start md:ml-[0] ml-[114px] mt-[41px] md:px-5 w-[73%] md:w-full">
            <div className="flex flex-col items-start justify-start w-[4%] md:w-full">
              <div className="h-[91px] relative w-full">
                <Line className="bg-blue_gray-400 h-[53px] mb-[-2px] ml-auto mr-[18px] w-px z-[1]" />
                <div className="bg-blue_gray-900_05 border border-solid border-white-A700 flex flex-col items-center justify-start mt-auto mx-auto p-[9px] rounded-[20px] w-[39px]">
                  <div className="bg-white-A700 h-[21px] rounded-[10px] w-[91%]"></div>
                </div>
              </div>
              <Line className="bg-blue_gray-400 h-[53px] ml-5 md:ml-[0] w-px" />
              <div className="bg-blue_gray-900_05 border border-solid border-white-A700 flex flex-col items-center justify-start p-[9px] rounded-[20px] w-[39px] md:w-full">
                <div className="bg-white-A700 h-[21px] rounded-[10px] w-[91%]"></div>
              </div>
              <Line className="bg-blue_gray-400 h-[53px] ml-5 md:ml-[0] w-px" />
            </div>
            <div className="flex flex-col gap-[54px] items-start justify-start">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-justify"
                size="txtInterRegular32"
              >
                Figma (link), Sketch(link), PDF, .psd, .png, .jpeg, adobe
                XD(link)
              </Text>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-justify"
                size="txtInterRegular32"
              >
                Upload your files with a maximum size of 5 MB.
              </Text>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[74px] mt-[55px] text-4xl sm:text-[32px] md:text-[34px] text-blue-800_02 text-justify tracking-[1.44px]"
            size="txtInterMedium36Blue80002"
          >
            Evaluation Criteria :
          </Text>
          <div className="flex md:flex-col flex-row gap-[26px] items-end justify-start max-w-[1279px] mt-14 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start mb-1 w-[4%] md:w-full">
              <div className="h-[91px] relative w-full">
                <Line className="bg-blue_gray-400 h-[53px] mb-[-2px] ml-auto mr-[18px] w-px z-[1]" />
                <div className="bg-blue_gray-900_05 border border-solid border-white-A700 flex flex-col items-center justify-start mt-auto mx-auto p-[9px] rounded-[20px] w-[39px]">
                  <div className="bg-white-A700 h-[21px] rounded-[10px] w-[91%]"></div>
                </div>
              </div>
              <Line className="bg-blue_gray-400 h-[53px] ml-5 md:ml-[0] w-px" />
              <div className="bg-blue_gray-900_05 border border-solid border-white-A700 flex flex-col items-center justify-start p-[9px] rounded-[20px] w-[39px] md:w-full">
                <div className="bg-white-A700 h-[21px] rounded-[10px] w-[91%]"></div>
              </div>
              <Line className="bg-blue_gray-400 h-[53px] ml-5 md:ml-[0] w-px" />
            </div>
            <div className="flex flex-col gap-[17px] items-center justify-start md:mt-0 mt-5">
              <Text
                className="leading-[51.00px] text-2xl md:text-[22px] text-blue_gray-400 text-justify sm:text-xl tracking-[0.96px] w-full"
                size="txtInterMedium24Bluegray400"
              >
                To create an effective landing page with clear messaging of
                benefits, a simple layout for easy navigation, and visual design
                that aligns with the brand and creates credibility.
              </Text>
              <Text
                className="leading-[51.00px] text-2xl md:text-[22px] text-blue_gray-400 text-justify sm:text-xl tracking-[0.96px] w-full"
                size="txtInterMedium24Bluegray400"
              >
                You will be judged on the basis of a few of these criterias like
                creativity & originality, user experience & functionality,
                visual design and aesthetics.
              </Text>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[92px] mt-[75px] text-4xl sm:text-[32px] md:text-[34px] text-blue-800_02 text-justify tracking-[1.44px]"
            size="txtInterMedium36Blue80002"
          >
            Deliverables :
          </Text>
          <Text
            className="leading-[51.00px] md:ml-[0] ml-[74px] mt-[38px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-justify tracking-[1.28px] w-[90%] sm:w-full"
            size="txtInterRegular32"
          >
            A high-fidelity design mockup of the homepage should be designed in
            Figma
          </Text>
          <Text
            className="md:ml-[0] ml-[90px] mt-[43px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-justify tracking-[1.28px]"
            size="txtInterRegular32"
          >
            A brief explanation of the design choices and rationale behind the
            design
          </Text>
          <Text
            className="leading-[51.00px] md:ml-[0] ml-[74px] mt-[89px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-justify tracking-[1.28px] w-[90%] sm:w-full"
            size="txtInterRegular32"
          >
            A description of how the design meets the requirements outlined in
            the brief
          </Text>
          <Text
            className="md:ml-[0] ml-[90px] mt-[55px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-justify tracking-[1.28px]"
            size="txtInterRegular32"
          >
            Please use the Content on the current homepage as placeholders
          </Text>
          <div className="h-[437px] sm:h-[545px] md:h-[692px] max-w-[1382px] mt-[108px] mx-auto md:px-5 relative w-full">
            <div className="h-[437px] md:h-[584px] m-auto w-full">
              <div className="absolute bg-blue-800_01 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[78px] md:px-10 sm:px-5 rounded-[24px] w-full">
                <div className="flex flex-col items-center justify-start mb-[22px] md:ml-[0] ml-[21px] w-3/5 md:w-full">
                  <div className="flex md:flex-col flex-row gap-[25px] items-start justify-between w-full">
                    <div className="flex flex-col gap-[41px] items-start justify-start">
                      <div className="flex flex-col gap-4 items-start justify-start w-[558px] sm:w-full">
                        <Text
                          className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[1.92px] w-auto"
                          size="txtInterBlack48WhiteA700"
                        >
                          Registration Deadline{" "}
                        </Text>
                        <Text
                          className="leading-[24.00px] max-w-[552px] md:max-w-full text-lg text-white-A700 tracking-[0.72px]"
                          size="txtInterRegular18"
                        >
                          Lorem ipsum dolor sit amet consectetur. Viverra
                          lacinia sed praesent pharetra quisque consectetur
                          tellus elit. Suspendisse ultrices vitae at platea.
                          Euismod pretium sit est etiam.
                        </Text>
                      </div>
                      <Button
                        className="!text-blue-900 cursor-pointer font-medium min-w-[306px] rounded-lg text-center text-lg tracking-[0.72px]"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        15 Aug 23, 12:00 AM IST
                      </Button>
                    </div>
                    <Img
                      className="h-[121px] md:h-auto md:mt-0 mt-[114px] object-cover"
                      src="images/img_bluebubbles.png"
                      alt="bluebubbles"
                    />
                  </div>
                </div>
              </div>
              <Img
                className="absolute bottom-[3%] h-[298px] object-cover right-[0] w-[23%]"
                src="images/img_bluebubbles_298x313.png"
                alt="bluebubbles_One"
              />
            </div>
            <Img
              className="absolute h-[437px] inset-y-[0] my-auto object-cover right-[6%] w-[44%]"
              src="images/img_dealviaphones.png"
              alt="dealviaphones"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[89px] mt-[151px] text-5xl sm:text-[38px] md:text-[44px] text-blue-800_02 text-justify tracking-[1.92px]"
            size="txtInterSemiBold48Blue80002"
          >
            <>What&#39;s at stake - Rewards and Prizes?</>
          </Text>
          <Text
            className="leading-[51.00px] md:ml-[0] ml-[89px] mt-[62px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-justify tracking-[1.28px] w-[87%] sm:w-full"
            size="txtInterRegular32"
          >
            Participation Certificate + Badge + One randomly selected
            participant will have a chance to get Linkedin 12 months premium
            voucher or XBox Game Pass!
          </Text>
          <div className="md:h-[1522px] sm:h-[2309px] h-[691px] max-w-[1307px] mt-[100px] mx-auto md:px-5 relative w-full">
            <div className="absolute md:h-[1422px] sm:h-[2209px] h-[691px] inset-[0] justify-center m-auto w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[68px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-gradient13  h-[691px] sm:ml-[0] relative rounded-[24px] w-full">
                    <div className="absolute md:h-[540px] sm:h-[553px] h-[691px] inset-[0] justify-center m-auto w-full">
                      <div className="md:h-[540px] sm:h-[553px] h-[691px] m-auto w-full">
                        <div className="absolute bottom-[0] md:h-[447px] h-[553px] inset-x-[0] mx-auto w-full">
                          <div className="md:h-[389px] h-[553px] m-auto w-full">
                            <div className="md:h-[318px] h-[553px] m-auto w-full">
                              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                <div className="flex flex-col md:gap-10 gap-[275px] items-end justify-start w-full">
                                  <Img
                                    className="h-[163px]"
                                    src="images/img_vector_light_green_100.svg"
                                    alt="vector"
                                  />
                                  <Img
                                    className="h-[115px] md:h-auto object-cover"
                                    src="images/img_vector_115x390.png"
                                    alt="vector_One"
                                  />
                                </div>
                              </div>
                              <Img
                                className="absolute h-[313px] left-[0] object-cover top-[3%]"
                                src="images/img_vector_313x261.png"
                                alt="vector_Two"
                              />
                            </div>
                            <Img
                              className="absolute bottom-[0] h-[389px] inset-x-[0] mx-auto object-cover w-[390px]"
                              src="images/img_vector_115x390.png"
                              alt="vector_Three"
                            />
                          </div>
                          <Img
                            className="absolute h-[447px] inset-x-[0] mx-auto object-cover top-[1%]"
                            src="images/img_vector_447x390.png"
                            alt="vector_Four"
                          />
                        </div>
                        <Img
                          className="absolute h-[540px] inset-x-[0] mx-auto object-cover top-[0]"
                          src="images/img_vector_540x390.png"
                          alt="vector_Five"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[15%] h-[303px] left-[1%] object-cover"
                        src="images/img_vector_115x390.png"
                        alt="vector_Six"
                      />
                    </div>
                    <Img
                      className="absolute h-[229px] left-[0] object-cover top-[15%] w-[39%]"
                      src="images/img_ellipse.png"
                      alt="ellipse"
                    />
                    <Img
                      className="absolute h-[506px] left-[0] object-cover top-[0]"
                      src="images/img_vector_506x345.png"
                      alt="vector_Seven"
                    />
                    <div className="absolute bg-deep_purple-A700_9e flex flex-col gap-[45px] h-full inset-[0] items-center justify-center m-auto pt-1.5 px-1.5 rounded-[24px] w-full">
                      <Text
                        className="mt-9 md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-[94%] sm:w-full"
                        size="txtInterBlack32WhiteA700"
                      >
                        10,00 Cash Prize/Android Phone
                      </Text>
                      <Img
                        className="h-[526px] md:h-auto object-cover w-full"
                        src="images/img_phoneandmoney.png"
                        alt="phoneandmoney"
                      />
                    </div>
                  </div>
                  <div className="bg-gradient13  md:h-[688px] h-[691px] sm:ml-[0] relative rounded-[24px] w-full">
                    <div className="absolute md:h-[540px] sm:h-[553px] h-[691px] inset-[0] justify-center m-auto w-full">
                      <div className="md:h-[540px] sm:h-[553px] h-[691px] m-auto w-full">
                        <div className="absolute bottom-[0] md:h-[447px] h-[553px] inset-x-[0] mx-auto w-full">
                          <div className="md:h-[389px] h-[553px] m-auto w-full">
                            <div className="md:h-[318px] h-[553px] m-auto w-full">
                              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                <div className="flex flex-col md:gap-10 gap-[275px] items-end justify-start w-full">
                                  <Img
                                    className="h-[163px]"
                                    src="images/img_vector_light_green_100.svg"
                                    alt="vector"
                                  />
                                  <Img
                                    className="h-[115px] md:h-auto object-cover"
                                    src="images/img_vector_115x390.png"
                                    alt="vector_One"
                                  />
                                </div>
                              </div>
                              <Img
                                className="absolute h-[313px] left-[0] object-cover top-[3%]"
                                src="images/img_vector_313x261.png"
                                alt="vector_Two"
                              />
                            </div>
                            <Img
                              className="absolute bottom-[0] h-[389px] inset-x-[0] mx-auto object-cover w-[390px]"
                              src="images/img_vector_115x390.png"
                              alt="vector_Three"
                            />
                          </div>
                          <Img
                            className="absolute h-[447px] inset-x-[0] mx-auto object-cover top-[1%]"
                            src="images/img_vector_447x390.png"
                            alt="vector_Four"
                          />
                        </div>
                        <Img
                          className="absolute h-[540px] inset-x-[0] mx-auto object-cover top-[0]"
                          src="images/img_vector_540x390.png"
                          alt="vector_Five"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[15%] h-[303px] left-[1%] object-cover"
                        src="images/img_vector_115x390.png"
                        alt="vector_Six"
                      />
                    </div>
                    <div className="absolute backdrop-opacity-[0.5] bg-gradient14  blur-[50.00px] h-[229px] left-[0] rounded-[114px] top-[15%] w-[39%]"></div>
                    <Img
                      className="absolute h-[506px] left-[0] object-cover top-[0]"
                      src="images/img_vector_506x345.png"
                      alt="vector_Seven"
                    />
                    <div className="absolute bg-deep_purple-A700_9e flex flex-col h-full inset-[0] items-center justify-center m-auto p-[22px] sm:px-5 rounded-[24px] w-full">
                      <Text
                        className="mb-[576px] mt-[29px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                        size="txtInterBlack32WhiteA700"
                      >
                        Goodies + Certificate
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient13  md:h-[690px] h-[691px] sm:ml-[0] relative rounded-[24px] w-full">
                    <div className="absolute md:h-[540px] sm:h-[553px] h-[691px] inset-[0] justify-center m-auto w-full">
                      <div className="md:h-[540px] sm:h-[553px] h-[691px] m-auto w-full">
                        <div className="absolute bottom-[0] md:h-[447px] h-[553px] inset-x-[0] mx-auto w-full">
                          <div className="md:h-[389px] h-[553px] m-auto w-full">
                            <div className="md:h-[318px] h-[553px] m-auto w-full">
                              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                <div className="flex flex-col md:gap-10 gap-[275px] items-end justify-start w-full">
                                  <Img
                                    className="h-[163px] md:h-auto object-cover"
                                    src="images/img_vector_light_green_100_163x368.png"
                                    alt="vector"
                                  />
                                  <Img
                                    className="h-[115px] md:h-auto object-cover"
                                    src="images/img_vector_115x390.png"
                                    alt="vector_One"
                                  />
                                </div>
                              </div>
                              <Img
                                className="absolute h-[313px] left-[0] object-cover top-[3%]"
                                src="images/img_vector_313x261.png"
                                alt="vector_Two"
                              />
                            </div>
                            <Img
                              className="absolute bottom-[0] h-[389px] inset-x-[0] mx-auto object-cover w-[390px]"
                              src="images/img_vector_115x390.png"
                              alt="vector_Three"
                            />
                          </div>
                          <Img
                            className="absolute h-[447px] inset-x-[0] mx-auto object-cover top-[1%]"
                            src="images/img_vector_447x390.png"
                            alt="vector_Four"
                          />
                        </div>
                        <Img
                          className="absolute h-[540px] inset-x-[0] mx-auto object-cover top-[0]"
                          src="images/img_vector_540x390.png"
                          alt="vector_Five"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[15%] h-[303px] left-[1%] object-cover"
                        src="images/img_vector_115x390.png"
                        alt="vector_Six"
                      />
                    </div>
                    <div className="absolute backdrop-opacity-[0.5] bg-gradient14  blur-[50.00px] h-[229px] left-[0] rounded-[114px] top-[15%] w-[39%]"></div>
                    <Img
                      className="absolute h-[506px] left-[0] object-cover top-[0]"
                      src="images/img_vector_506x345.png"
                      alt="vector_Seven"
                    />
                    <div className="absolute bg-deep_purple-A700_9e flex flex-col h-full inset-[0] items-center justify-center m-auto p-[59px] md:px-10 sm:px-5 rounded-[24px] w-full">
                      <Text
                        className="mb-[528px] text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700"
                        size="txtInterBlack36"
                      >
                        Certificate
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="absolute bottom-[10%] flex md:flex-col flex-row md:gap-[54px] items-center justify-between right-[0] w-[65%]">
                <Img
                  className="h-[388px] sm:h-auto object-cover w-[389px] md:w-full"
                  src="images/img_kado.png"
                  alt="kado"
                />
                <Img
                  className="h-[514px] md:h-auto object-cover"
                  src="images/img_diplomacertificate.png"
                  alt="diplomacertific"
                />
              </div>
            </div>
            <Img
              className="absolute bottom-[0] h-[390px] inset-x-[0] mx-auto"
              src="images/img_card.svg"
              alt="card"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[62px] mt-[76px] text-3xl sm:text-[26px] md:text-[28px] text-justify text-red-500 tracking-[1.20px]"
            size="txtInterRegular30"
          >
            * All the prizes and certificate will be Released Within 35 days
            after the event is over
          </Text>
          <Footer2 className="flex items-center justify-center mt-[109px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default UIUXContestpagePage;
