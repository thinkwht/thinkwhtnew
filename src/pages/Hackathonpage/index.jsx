import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer3 from "components/Footer3";
import Header3 from "components/Header3";

import { CloseSVG } from "../../assets/images";

const HackathonpagePage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <Header3 className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="md:h-[625px] h-[737px] max-w-[1331px] mt-[54px] mx-auto md:px-5 relative w-full">
            <div className="absolute bg-blue-800 md:h-[571px] h-[735px] inset-[0] justify-center m-auto p-[29px] sm:px-5 rounded-[20px] w-full">
              <div className="absolute h-[571px] inset-x-[0] mx-auto top-[9%] w-[89%] md:w-full">
                <div className="absolute h-[475px] left-[0] top-[2%] w-[62%] md:w-full">
                  <Img
                    className="h-[475px] m-auto object-cover w-full"
                    src="images/img_dottedbg.png"
                    alt="dottedbg"
                  />
                  <div className="absolute flex flex-col items-start justify-start left-[0] top-[11%] w-[82%]">
                    <Line className="bg-orange-200_04 h-0.5 w-[45%]" />
                    <Text
                      className="mt-[21px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.28px]"
                      size="txtInterBold32WhiteA700"
                    >
                      Put Your Coding Skills To Test With
                    </Text>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-lime-400 tracking-[1.60px]"
                      size="txtInterBlack40"
                    >
                      30 Hackathons
                    </Text>
                    <Text
                      className="mt-[3px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.28px]"
                      size="txtInterBold32WhiteA700"
                    >
                      Hosted by Premier Institutes{" "}
                    </Text>
                    <Text
                      className="mt-24 text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.96px]"
                      size="txtInterRegular24WhiteA700"
                    >
                      Cash Prize Pool Of :
                    </Text>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-lime-400 tracking-[1.60px]"
                      size="txtInterBlack40"
                    >
                      INR 50,000/ Iphone
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[0.96px]"
                      size="txtInterRegular24WhiteA700"
                    >
                      and exciting vouchers to be won
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute h-[571px] inset-y-[0] my-auto right-[0]"
                  src="images/img_group_black_900.svg"
                  alt="group"
                />
              </div>
              <Img
                className="absolute bottom-[12%] h-[91px] right-[10%]"
                src="images/img_group_black_900_91x598.svg"
                alt="group_One"
              />
              <Text
                className="absolute left-[6%] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 top-[9%] tracking-[1.92px]"
                size="txtInterBlack48WhiteA700"
              >
                ONLINE HACKATHON
              </Text>
              <Button
                className="absolute bottom-[24%] cursor-pointer font-medium left-[7%] min-w-[384px] sm:min-w-full rounded-lg text-center text-lg tracking-[0.72px]"
                color="blue_gray_900_05"
                size="md"
                variant="fill"
              >
                Participation Certification For All
              </Button>
              <Img
                className="absolute bottom-[4%] h-[118px] left-[4%] w-[118px]"
                src="images/img_iconparkcaution.svg"
                alt="iconparkcaution"
              />
            </div>
            <Img
              className="absolute bottom-[0] h-[134px] object-cover right-[1%] w-[12%]"
              src="images/img_thinkwhatlogohighfinal_70x90.png"
              alt="thinkwhatlogohi_One"
            />
          </div>
          <div className="md:h-[139px] h-[78px] md:ml-[0] ml-[87px] mt-[61px] md:px-5 relative w-[48%] md:w-full">
            <Text
              className="m-auto md:text-5xl text-[64px] text-blue-800_01"
              size="txtInterSemiBold64"
            >
              Ripple CBDC Innovate
            </Text>
            <Text
              className="absolute h-full inset-[0] justify-center m-auto md:text-5xl text-[64px] text-blue-800_01 w-max"
              size="txtInterSemiBold64"
            >
              Ripple CBDC Innovate
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1272px] mt-10 mx-auto md:px-5 w-full">
            <Img
              className="h-[49px] md:mt-0 mt-0.5"
              src="images/img_globe_blue_800_02.svg"
              alt="globe"
            />
            <Text
              className="md:ml-[0] ml-[22px] md:mt-0 mt-[5px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800_06 text-center tracking-[1.28px]"
              size="txtInterMedium32"
            >
              Online
            </Text>
            <Img
              className="h-[43px] md:ml-[0] ml-[58px] md:mt-0 mt-0.5"
              src="images/img_cilcontact.svg"
              alt="cilcontact"
            />
            <Text
              className="md:ml-[0] ml-[22px] md:mt-0 mt-2 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800_06 text-center tracking-[1.28px]"
              size="txtInterMedium32"
            >
              1000 participants
            </Text>
            <Img
              className="h-[33px] md:ml-[0] ml-[41px] md:mt-0 mt-[9px] w-8"
              src="images/img_bipen.svg"
              alt="bipen"
            />
            <Text
              className="md:ml-[0] ml-[33px] md:mt-0 mt-1.5 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800_06 text-center tracking-[1.28px]"
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
              className="md:ml-[0] ml-[23px] md:mt-0 mt-2 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800_06 text-center tracking-[1.28px]"
              size="txtInterMedium32"
            >
              52 Registered
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[448px] mt-[62px] md:px-5 w-[38%] md:w-full">
            <div className="flex flex-col gap-[49px] items-center justify-start w-full">
              <Text></Text>
              <div className="flex sm:flex-col flex-row gap-[23px] items-end justify-between w-full">
                <Text
                  className="sm:mt-0 mt-3.5 sm:text-[23px] md:text-[25px] text-[27px] text-blue_gray-700"
                  size="txtInterMedium27"
                >
                  Hackathon participation fees
                </Text>
                <Text
                  className="sm:text-[35.27px] md:text-[37.27px] text-[39.27px] text-blue-800_02"
                  size="txtInterBold3927"
                >
                  Rs. 350
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1241px] mt-[87px] mx-auto md:px-5 w-full">
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
            <div className="bg-blue-50 flex flex-col h-[89px] items-center justify-start mb-2.5 md:ml-[0] ml-[70px] p-3 rounded-lg w-[89px]">
              <Img
                className="h-[60px] my-0.5"
                src="images/img_user.svg"
                alt="user"
              />
            </div>
            <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[26px]">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800_06 text-center tracking-[1.28px]"
                size="txtInterMedium32"
              >
                Team Size
              </Text>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-center tracking-[1.28px]"
                size="txtInterRegular32"
              >
                1-3 members
              </Text>
            </div>
          </div>
          <Text
            className="leading-[51.00px] md:ml-[0] ml-[58px] mt-[88px] text-5xl sm:text-[38px] md:text-[44px] text-blue-800_01 tracking-[1.92px] w-[94%] sm:w-full"
            size="txtInterSemiBold48"
          >
            All that you need to know about CBDC Innovate Learn AI Skills
            Challenge
          </Text>
          <Text
            className="leading-[51.00px] md:ml-[0] ml-[54px] mt-[58px] text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl tracking-[0.96px] w-[93%] sm:w-full"
            size="txtInterRegular24Bluegray400"
          >
            The challenge ends on August 14, 2023, at 4:00 PM UTC (16:00). Make
            sure all modules in your challenge are complete before time runs
            out.
          </Text>
          <Text
            className="md:ml-[0] ml-[58px] mt-[29px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-400 tracking-[1.44px]"
            size="txtInterRegular36Bluegray400"
          >
            <span className="text-blue-800_01 font-inter text-left font-medium">
              Eligibility:
            </span>
            <span className="text-blue_gray-400 font-inter text-left font-normal">
              {" "}
            </span>
            <span className="md:text-3xl sm:text-[28px] text-blue_gray-400 font-inter text-left text-[32px] font-normal">
              Open for all(students, professionals, freelancers, entrepreneurs,
              etc)
            </span>
          </Text>
          <Text
            className="leading-[51.00px] md:ml-[0] ml-[54px] mt-[26px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-justify tracking-[1.28px] w-[93%] sm:w-full"
            size="txtInterRegular32Black900"
          >
            <span className="md:text-[34px] sm:text-[32px] text-blue-800_02 font-inter text-4xl font-medium">
              Important Reminders:{" "}
            </span>
            <span className="text-blue_gray-400 font-inter font-normal">
              By completing at least one of the four eligible challenges before
              August 14th, you will receive a Microsoft Learn AI Skills
              challenge badge and certificate of completion. These will be
              delivered to the email address associated with your Microsoft
              Learn profile
            </span>
            <span className="text-black-900 font-inter font-normal">.</span>
          </Text>
          <Text
            className="md:ml-[0] ml-[54px] mt-[25px] text-4xl sm:text-[32px] md:text-[34px] text-blue-800_02 text-justify tracking-[1.44px]"
            size="txtInterMedium36Blue80002"
          >
            Details :
          </Text>
          <div className="flex md:flex-col flex-row gap-5 items-center justify-start max-w-[1310px] mt-[25px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[3%] md:w-full">
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
            <div className="flex flex-col gap-[43px] items-center justify-start">
              <Text
                className="leading-[24.00px] text-2xl md:text-[22px] text-blue_gray-400 text-justify sm:text-xl tracking-[0.96px] w-full"
                size="txtInterRegular24Bluegray400"
              >
                The leaderboard shows how many modules you have completed out of
                the total number of modules in the collection. Any ties are
                listed alphabetically.
              </Text>
              <Text
                className="leading-[24.00px] text-2xl md:text-[22px] text-blue_gray-400 text-justify sm:text-xl tracking-[0.96px] w-full"
                size="txtInterRegular24Bluegray400"
              >
                Each Participant who successfully completes any one of the four
                challenges will get a Badge + Certificate of completion.
              </Text>
            </div>
          </div>
          <Text
            className="leading-[51.00px] md:ml-[0] ml-[58px] mt-[61px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-justify tracking-[1.28px] w-[93%] sm:w-full"
            size="txtInterRegular32Black900"
          >
            <span className="md:text-[34px] sm:text-[32px] text-blue-800_02 font-inter text-4xl font-medium">
              Participation:{" "}
            </span>
            <span className="md:text-[34px] sm:text-[32px] text-blue_gray-400 font-inter text-4xl font-normal">
              Copy and Paste this URL into the search bar to be a part of
              challenge + avail of a certificate and badge after completion of
              any 1 challenge successfully
            </span>
            <span className="text-black-900 font-inter font-normal">.</span>
          </Text>
          <Text
            className="md:ml-[0] ml-[54px] mt-[33px] text-4xl sm:text-[32px] md:text-[34px] text-blue-800_02 text-justify tracking-[1.44px]"
            size="txtInterMedium36Blue80002"
          >
            Challenge URL:
          </Text>
          <Text
            className="md:ml-[0] ml-[54px] mt-[33px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-justify tracking-[1.28px]"
            size="txtInterRegular32"
          >
            https://learn.microsoft.com/training/student-hub/?wt.mc_id=studentamb_106710
          </Text>
          <div className="h-[526px] md:h-[570px] max-w-[1381px] mt-11 mx-auto md:px-5 relative w-full">
            <div className="absolute bg-blue-800 flex flex-col h-max inset-[0] items-start justify-center m-auto p-[84px] md:px-10 sm:px-5 rounded-[24px] w-full">
              <div className="flex flex-col md:gap-10 gap-[73px] items-start justify-start ml-2 md:ml-[0] mt-0.5 w-[57%] md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start max-w-[691px] w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[1.92px] w-auto"
                    size="txtInterBlack48WhiteA700"
                  >
                    Registration Deadline{" "}
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[691px] md:max-w-full text-lg text-white-A700 tracking-[0.72px]"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet consectetur. Viverra lacinia sed
                    praesent pharetra quisque consectetur tellus elit.
                    Suspendisse ultrices vitae at platea. Euismod pretium sit
                    est etiam.
                  </Text>
                </div>
                <Button
                  className="!text-gray-900_04 cursor-pointer font-medium min-w-[306px] rounded-lg text-center text-lg tracking-[0.72px]"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  15 Aug 23, 12:00 AM IST
                </Button>
              </div>
            </div>
            <Img
              className="absolute h-[526px] inset-y-[0] my-auto object-cover right-[0] w-[52%]"
              src="images/img_dthreeeoceanmegaphone.png"
              alt="dthreeeoceanmeg"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[54px] mt-9 text-5xl sm:text-[38px] md:text-[44px] text-blue-800_02 text-justify tracking-[1.92px]"
            size="txtInterSemiBold48Blue80002"
          >
            <>What&#39;s at stake - Rewards and Prizes?</>
          </Text>
          <Text
            className="leading-[51.00px] md:ml-[0] ml-[57px] mt-[39px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-justify tracking-[1.28px] w-[87%] sm:w-full"
            size="txtInterRegular32"
          >
            Participation Certificate + Badge + One randomly selected
            participant will have a chance to get Linkedin 12 months premium
            voucher or XBox Game Pass!
          </Text>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[92px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1291px] mt-[65px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div
              className="bg-cover bg-no-repeat hover:cursor-pointer flex flex-1 flex-col gap-[29px] h-[693px] items-center justify-start rounded-[24px] hover:shadow-bs shadow-bs hover:w-full w-full"
              style={{ backgroundImage: "url('images/img_frame_693x376.png')" }}
            >
              <div className="h-[495px] relative w-full">
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex flex-col items-end justify-start w-full">
                    <div className="flex flex-row gap-[9px] items-center justify-between w-full">
                      <div className="bg-lime-100 h-[167px] w-[24%]"></div>
                      <div className="bg-black-900_0f h-[167px] w-[24%]"></div>
                      <div className="bg-black-900_0f h-[167px] w-[24%]"></div>
                      <div className="bg-black-900_0f h-[167px] w-[24%]"></div>
                    </div>
                    <div className="flex flex-row gap-[9px] items-center justify-end mt-[95px] w-3/4 md:w-full">
                      <div className="bg-black-900_0f h-[168px] w-[32%]"></div>
                      <div className="bg-black-900_0f h-[168px] w-[32%]"></div>
                      <div className="bg-black-900_0f h-[168px] w-[32%]"></div>
                    </div>
                    <Text
                      className="mt-[26px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                      size="txtInterBlack32WhiteA700"
                    >
                      Winner
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute h-[460px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                  src="images/img_dthreeeoceanpapermoney.png"
                  alt="dthreeeoceanpap"
                />
              </div>
              <div className="h-[169px] relative w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex flex-row gap-[9px] items-center justify-between w-full">
                    <div className="bg-black-900_0f h-[168px] w-[24%]"></div>
                    <div className="bg-black-900_0f h-[168px] w-[24%]"></div>
                    <div className="bg-black-900_0f h-[168px] w-[24%]"></div>
                    <div className="bg-lime-100 h-[169px] w-[24%]"></div>
                  </div>
                </div>
                <Text
                  className="absolute bottom-[26%] inset-x-[0] mx-auto text-2xl md:text-[22px] text-center text-gray-900_05 sm:text-xl w-[95%] sm:w-full"
                  size="txtInterBold24Gray90005"
                >
                  50,000 Cash Prize/Iphone & Goodies + Certificate
                </Text>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat hover:cursor-pointer flex flex-1 flex-col gap-[26px] h-[693px] items-center justify-start rounded-[24px] hover:shadow-bs hover:w-full w-full"
              style={{ backgroundImage: "url('images/img_frame_693x376.png')" }}
            >
              <div className="md:h-[481px] h-[498px] relative w-full">
                <div className="absolute flex h-[481px] inset-[0] justify-end m-auto w-full">
                  <div className="absolute bg-lime-100 h-[167px] left-[0] top-[0] w-[24%]"></div>
                  <div className="absolute bg-black-900_0f h-[167px] left-[26%] top-[0] w-[24%]"></div>
                  <div className="absolute bg-black-900_0f h-[167px] right-[26%] top-[0] w-[24%]"></div>
                  <div className="absolute bg-black-900_0f h-[167px] right-[0] top-[0] w-[24%]"></div>
                  <div className="flex flex-row gap-[9px] h-full items-center justify-between mb-[51px] ml-auto mt-auto w-3/4">
                    <div className="bg-black-900_0f h-[168px] w-[32%]"></div>
                    <div className="bg-black-900_0f h-[168px] w-[32%]"></div>
                    <div className="bg-black-900_0f h-[168px] w-[32%]"></div>
                  </div>
                  <Img
                    className="absolute h-[481px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_dthreeeoceangift.png"
                    alt="dthreeeoceangif"
                  />
                </div>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-max"
                  size="txtInterBlack32WhiteA700"
                >
                  First Runner Up
                </Text>
              </div>
              <div className="h-[169px] relative w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex flex-row gap-[9px] items-center justify-between w-full">
                    <div className="bg-black-900_0f h-[168px] w-[24%]"></div>
                    <div className="bg-black-900_0f h-[168px] w-[24%]"></div>
                    <div className="bg-black-900_0f h-[168px] w-[24%]"></div>
                    <div className="bg-lime-100 h-[169px] w-[24%]"></div>
                  </div>
                </div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto text-2xl md:text-[22px] text-center text-gray-900_05 sm:text-xl w-max"
                  size="txtInterBold24Gray90005"
                >
                  Goodies + Certificate
                </Text>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat hover:cursor-pointer flex flex-1 flex-col h-[693px] items-center justify-start rounded-[24px] hover:shadow-bs hover:w-full w-full"
              style={{ backgroundImage: "url('images/img_frame_693x376.png')" }}
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:h-[417px] h-[430px] relative w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex flex-col md:gap-10 gap-[95px] items-end justify-start w-full">
                      <div className="flex flex-row gap-[9px] items-center justify-between w-full">
                        <div className="bg-lime-100 h-[167px] w-[24%]"></div>
                        <div className="bg-black-900_0f h-[167px] w-[24%]"></div>
                        <div className="bg-black-900_0f h-[167px] w-[24%]"></div>
                        <div className="bg-black-900_0f h-[167px] w-[24%]"></div>
                      </div>
                      <div className="flex flex-row gap-[9px] items-center justify-end w-3/4 md:w-full">
                        <div className="bg-black-900_0f h-[168px] w-[32%]"></div>
                        <div className="bg-black-900_0f h-[168px] w-[32%]"></div>
                        <div className="bg-black-900_0f h-[168px] w-[32%]"></div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[417px] inset-[0] justify-center m-auto object-cover w-[98%]"
                    src="images/img_dthreeeoceanchecklist.png"
                    alt="dthreeeoceanche"
                  />
                </div>
                <Text
                  className="mt-[33px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                  size="txtInterBlack32WhiteA700"
                >
                  Second Runner Up
                </Text>
                <div className="flex flex-row gap-[9px] items-center justify-between mt-[21px] w-full">
                  <div className="bg-black-900_0f h-[168px] w-[24%]"></div>
                  <div className="h-[168px] relative w-[49%]">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <div className="flex flex-row gap-[9px] items-center justify-between w-full">
                        <div className="bg-black-900_0f h-[168px] w-[48%]"></div>
                        <div className="bg-black-900_0f h-[168px] w-[48%]"></div>
                      </div>
                    </div>
                    <Text
                      className="absolute h-max inset-y-[0] left-[11%] my-auto text-2xl md:text-[22px] text-center text-gray-900_05 sm:text-xl"
                      size="txtInterBold24Gray90005"
                    >
                      Certificate
                    </Text>
                  </div>
                  <div className="bg-lime-100 h-[169px] w-[24%]"></div>
                </div>
              </div>
            </div>
          </List>
          <Text
            className="md:ml-[0] ml-[53px] mt-[77px] text-3xl sm:text-[26px] md:text-[28px] text-justify text-red-500 tracking-[1.20px]"
            size="txtInterRegular30"
          >
            * All the prizes and certificate will be Released Within 35 days
            after the event is over
          </Text>
          <Footer3 className="flex items-center justify-center mt-[164px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HackathonpagePage;
