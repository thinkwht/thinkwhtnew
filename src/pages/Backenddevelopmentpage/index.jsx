import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer1 from "components/Footer1";
import Header3 from "components/Header3";

import { CloseSVG } from "../../assets/images";

const BackenddevelopmentpagePage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <Header3 className="flex flex-col font-inter items-center justify-center md:px-5 w-full" />
        <div
          className="bg-cover bg-no-repeat flex flex-row font-lato h-[796px] items-center justify-start p-6 sm:px-5 rounded-[10px] w-full"
          style={{ backgroundImage: "url('images/img_group601.png')" }}
        >
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-3.5 mt-6 md:px-5 w-[93%]">
            <div className="h-[724px] relative w-[65%] md:w-full">
              <div className="backdrop-opacity-[0.5] bg-white-A700_87 blur-[500.00px] h-[372px] ml-auto mr-[182px] mt-[77px] rounded-[202px] w-[49%]"></div>
              <Img
                className="absolute h-[724px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_15c5facdfcd4ad8.png"
                alt="15c5facdfcd4adEight"
              />
            </div>
            <Text
              className="md:ml-[0] ml-[3px] md:mt-0 mt-[420px] sm:text-[40px] md:text-[46px] text-[50px] text-blue_gray-700 w-[36%] sm:w-full"
              size="txtLatoBlack50"
            >
              <span className="md:text-[38px] sm:text-4xl text-blue_gray-700 font-inter text-left text-[40px] font-black">
                Start Your Learning as
              </span>
              <span className="md:text-[44px] sm:text-[38px] text-blue_gray-700 font-inter text-left text-5xl font-black">
                {" "}
              </span>
              <span className="md:text-[44px] sm:text-[38px] text-orange-300 font-inter text-left text-5xl font-black">
                BACK
              </span>
              <span className="md:text-[44px] sm:text-[38px] text-orange-300 font-inter text-left text-5xl font-black">
                END DEVELOPER
              </span>
            </Text>
          </div>
        </div>
        <Text
          className="mt-[23px] text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900_05 text-center"
          size="txtInterBlack48"
        >
          About
        </Text>
        <Text
          className="mt-[85px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-justify w-[95%] sm:w-full"
          size="txtInterRegular32"
        >
          Backend development refers to the process of creating and maintaining
          the server-side of a website, web application, or software. It
          involves the implementation of the logic, databases, and server
          components that power the functionalities and data processing required
          for the application to work seamlessly.
        </Text>
        <Text
          className="mt-6 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-justify w-[95%] sm:w-full"
          size="txtInterRegular32"
        >
          Backend Development languages and frameworks can vary, with popular
          choices including Python (with frameworks like Django or Flask),
          Node.js (using frameworks like Express.js), Ruby on Rails, Java, and
          PHP, among others. These technologies enable developers to manage and
          manipulate data, handle user requests, and interact with databases
          efficiently.
        </Text>
        <div className="bg-orange-200_01 flex flex-col items-center justify-start max-w-[1373px] mt-[87px] mx-auto p-[217px] md:px-5 rounded-[10px] w-full">
          <div className="flex flex-col items-center justify-start w-[15%] md:w-full">
            <Img
              className="h-[138px] md:h-auto object-cover w-full"
              src="images/img_image34.png"
              alt="image105"
            />
          </div>
        </div>
        <div className="bg-blue-800_01 flex flex-row font-inter items-center justify-start max-w-[1358px] mt-32 mx-auto p-7 md:px-5 shadow-bs7 w-full">
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
                alt="callThree"
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
        <div className="flex flex-col font-inter items-center justify-start max-w-[1387px] mt-[77px] mx-auto md:px-5 w-full">
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
        <Text
          className="mt-[7297px] md:text-5xl text-[64px] text-blue-800 text-center"
          size="txtInterBold64Blue800"
        >
          Certificate We Offer You
        </Text>
        <Text
          className="mt-[19px] text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
          size="txtPoppinsMedium24Bluegray400"
        >
          Lorem Ipsum is simply dummy text of the printing.
        </Text>
        <div className="bg-blue_gray-100_02 h-[574px] max-w-[1257px] mt-[87px] mx-auto md:px-5 w-full"></div>
        <Footer1 className="flex font-inter items-center justify-center mt-[142px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default BackenddevelopmentpagePage;
