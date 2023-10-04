import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import ContactUsPageNavigator from "components/ContactUsPageNavigator";
import Footer1 from "components/Footer1";
import Header3 from "components/Header3";

import { CloseSVG } from "../../assets/images";

const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ContactuspagePage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="font-inter h-[716px] md:px-5 relative w-full">
            <Header3 className="flex flex-col items-center justify-center mb-[-1px] mx-auto w-full z-[1]" />
            <div className="bg-blue_gray-700 flex flex-col items-center justify-start mt-auto mx-auto p-[68px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col justify-start mb-9 w-[94%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[443px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-orange-300"
                  size="txtInterBlack50Orange300"
                >
                  CONTACT US
                </Text>
                <Text
                  className="md:ml-[0] ml-[202px] mt-3 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                  size="txtInterRegular24WhiteA700"
                >
                  <>
                    &quot;Connect with us for any inquiries, support, or
                    collaboration opportunities.&quot;
                  </>
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[58px] mt-10 w-[96%] md:w-full">
                  <ContactUsPageNavigator className="flex flex-col h-48 items-center justify-start md:mt-0 mt-[18px] w-48" />
                  <Img
                    className="h-[185px] sm:h-auto md:ml-[0] ml-[248px] md:mt-0 mt-[22px] object-cover w-[22%] md:w-full"
                    src="images/img_89df44cf61342a1.png"
                    alt="89df44cf61342aOne"
                  />
                  <Img
                    className="h-[199px] sm:h-auto mb-[11px] md:ml-[0] ml-[197px] object-cover w-[24%] md:w-full"
                    src="images/img_medicine.png"
                    alt="medicine"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mr-11 mt-2 w-[97%] md:w-full">
                  <Text
                    className="text-center text-white-A700 text-xl w-[29%] sm:w-full"
                    size="txtInterMedium20"
                  >
                    Veer Bahadur SinghPurvanchal University, JAUNPUR-222003,
                    UttarPradesh{" "}
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[213px] md:mt-0 mt-2 text-white-A700 text-xl"
                    size="txtInterMedium20"
                  >
                    +91-6387889987{" "}
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[278px] md:mt-0 mt-1 text-white-A700 text-xl"
                    size="txtInterMedium20"
                  >
                    info@thinkwhat.co
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[549px] mt-[89px] md:text-5xl text-[64px] text-blue_gray-900_02 text-center"
            size="txtInterBold64Bluegray90002"
          >
            Target Reach
          </Text>
          <Text
            className="md:ml-[0] ml-[453px] text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
            size="txtPoppinsMedium24Bluegray400"
          >
            Lorem Ipsum is simply dummy text of the printing.
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1313px] mt-[52px] mx-auto md:px-5 w-full">
            <div className="h-[273px] md:mt-0 mt-7 relative w-[24%] md:w-full">
              <Img
                className="h-64 mx-auto object-cover"
                src="images/img_ellipse61.png"
                alt="ellipse131"
              />
              <Img
                className="absolute h-[273px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_b40021e580b7bdb.png"
                alt="b40021e580b7bdb"
              />
            </div>
            <div className="h-64 md:ml-[0] ml-[38px] md:mt-0 mt-7 relative w-[22%] md:w-full">
              <Img
                className="absolute h-64 inset-[0] justify-center m-auto object-cover"
                src="images/img_ellipse61.png"
                alt="ellipse130"
              />
              <Img
                className="absolute h-[233px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_70a91510a6ca690.png"
                alt="70a91510a6ca690"
              />
            </div>
            <div className="md:h-[273px] h-[278px] md:ml-[0] ml-[85px] md:mt-0 mt-[19px] relative w-[19%] md:w-full">
              <Img
                className="absolute bottom-[0] h-64 object-cover right-[0]"
                src="images/img_ellipse61.png"
                alt="ellipse129"
              />
              <Img
                className="absolute h-[273px] inset-y-[0] left-[0] my-auto object-cover w-[91%]"
                src="images/img_79c5a3bd0df3ec1.png"
                alt="79c5a3bd0df3ecOne"
              />
            </div>
            <div className="md:h-[276px] h-[297px] mb-1 md:ml-[0] ml-[108px] relative w-[19%] md:w-full">
              <Img
                className="absolute bottom-[0] h-[262px] inset-x-[0] mx-auto object-cover"
                src="images/img_ellipse61.png"
                alt="ellipse128"
              />
              <Img
                className="absolute h-[272px] object-cover right-[0] top-[0] w-[85%]"
                src="images/img_1336e3b9ed2bea0.png"
                alt="1336e3b9ed2beaZero"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inter md:gap-5 items-center justify-start max-w-[1219px] mt-0.5 mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="md:text-5xl text-[64px] text-blue_gray-900 text-center"
                size="txtInterBold64Bluegray900"
              >
                <span className="text-blue_gray-900 font-inter font-bold">
                  100
                </span>
                <span className="md:text-[44px] sm:text-[38px] text-blue_gray-900 font-inter text-5xl font-bold">
                  k
                </span>
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-blue-900_01 text-center sm:text-xl"
                size="txtInterRegular24Blue90001"
              >
                Active Users
              </Text>
            </div>
            <div className="h-[101px] md:h-[76px] mb-0.5 md:ml-[0] ml-[179px] relative w-[16%] md:w-full">
              <Text
                className="absolute left-[0] md:text-5xl text-[64px] text-blue_gray-900 text-center top-[0]"
                size="txtInterBold64Bluegray900"
              >
                <span className="text-blue_gray-900 font-inter font-bold">
                  100
                </span>
                <span className="md:text-[44px] sm:text-[38px] text-blue_gray-900 font-inter text-5xl font-bold">
                  k
                </span>
              </Text>
              <Text
                className="absolute bottom-[0] right-[0] text-2xl md:text-[22px] text-blue-900_01 text-center sm:text-xl"
                size="txtInterRegular24Blue90001"
              >
                Placed Students
              </Text>
            </div>
            <div className="flex flex-col items-end justify-start md:ml-[0] ml-[154px]">
              <Text
                className="mr-[3px] md:text-5xl text-[64px] text-blue_gray-900 text-center"
                size="txtInterBold64Bluegray900"
              >
                <span className="text-blue_gray-900 font-inter font-bold">
                  100
                </span>
                <span className="md:text-[44px] sm:text-[38px] text-blue_gray-900 font-inter text-5xl font-bold">
                  k
                </span>
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-blue-900_01 text-center sm:text-xl"
                size="txtInterRegular24Blue90001"
              >
                Daily Joining
              </Text>
            </div>
            <div className="md:h-[73px] h-[98px] md:ml-[0] ml-[206px] relative w-[15%] md:w-full">
              <Text
                className="absolute left-[0] md:text-5xl text-[64px] text-blue_gray-900 text-center top-[0]"
                size="txtInterBold64Bluegray900"
              >
                <span className="text-blue_gray-900 font-inter font-bold">
                  100
                </span>
                <span className="md:text-[44px] sm:text-[38px] text-blue_gray-900 font-inter text-5xl font-bold">
                  k
                </span>
              </Text>
              <Text
                className="absolute bottom-[0] right-[0] text-2xl md:text-[22px] text-blue-900_01 text-center sm:text-xl"
                size="txtInterRegular24Blue90001"
              >
                Total Students
              </Text>
            </div>
          </div>
          <div className="bg-blue_gray-100_02 flex flex-col font-inter items-center justify-start max-w-[1270px] mt-[129px] mx-auto p-[335px] md:px-5 w-full">
            <Text
              className="mb-[25px] md:text-5xl text-[64px] text-black-900 text-center"
              size="txtInterRegular64"
            >
              Google maps
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[174px] mt-[136px] md:text-5xl text-[64px] text-center text-orange-300"
            size="txtInterBold64"
          >
            LET’S CONNECT
          </Text>
          <Text
            className="md:ml-[0] ml-[174px] text-2xl md:text-[22px] text-blue-800_01 sm:text-xl"
            size="txtPoppinsMedium24Blue80001"
          >
            Lorem Ipsum is simply dummy text of the printing.
          </Text>
          <div className="bg-amber-100 flex flex-col font-inter items-start justify-start max-w-[1222px] mt-[25px] mx-auto p-[39px] md:px-5 rounded-[49px] shadow-bs11 w-full">
            <Text
              className="ml-9 md:ml-[0] mt-[42px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-[97%] sm:w-full"
              size="txtInterRegular36"
            >
              <span className="text-blue_gray-700 font-inter text-left font-normal">
                <>&quot;</>
              </span>
              <span className="text-blue_gray-700 font-inter text-left font-medium">
                Start the Conversation
              </span>
              <span className="text-black-900 font-inter text-left font-normal">
                {" "}
                -{" "}
              </span>
              <span className="text-blue_gray-400 font-inter text-left font-normal">
                <>Let&#39;s connect and explore opportunities together.&quot;</>
              </span>
            </Text>
            <div className="flex flex-col gap-[21px] items-start justify-start ml-9 md:ml-[0] mt-[59px] w-[92%] md:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                size="txtInterMedium36"
              >
                Name*
              </Text>
              <div className="bg-white-A700 border border-black-900 border-solid h-[60px] rounded-[10px] w-full"></div>
            </div>
            <div className="flex flex-col gap-[27px] items-start justify-start ml-9 md:ml-[0] mt-[30px] w-[92%] md:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                size="txtInterMedium36"
              >
                Email*
              </Text>
              <div className="bg-white-A700 border border-black-900 border-solid h-[60px] rounded-[10px] w-full"></div>
            </div>
            <div className="flex flex-col items-center justify-start ml-9 md:ml-[0] mt-[26px] w-[92%] md:w-full">
              <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                  size="txtInterMedium36"
                >
                  Phone number*
                </Text>
                <div className="flex sm:flex-col flex-row gap-[21px] items-start justify-between w-full">
                  <SelectBox
                    className="border border-black-900 border-solid sm:flex-1 font-medium leading-[normal] mb-[5px] text-2xl md:text-[22px] text-left sm:text-xl w-[9%] sm:w-full"
                    placeholderClassName="text-black-900"
                    isSearchable={false}
                    placeholder="+91"
                    isMulti={false}
                    options={optionsList}
                    name="groupThirtySeven"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  />
                  <div className="bg-white-A700 border border-black-900 border-solid h-[60px] sm:mt-0 mt-[5px] rounded-[10px] w-[90%]"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[25px] items-start justify-start ml-9 md:ml-[0] mt-[25px] w-[92%] md:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                size="txtInterMedium36"
              >
                Location*
              </Text>
              <div className="bg-white-A700 border border-black-900 border-solid h-[60px] rounded-[10px] w-full"></div>
            </div>
            <div className="flex flex-col gap-[21px] items-start justify-start ml-9 md:ml-[0] mt-[29px] w-[92%] md:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                size="txtInterMedium36"
              >
                Any message for us*
              </Text>
              <div className="bg-white-A700 border border-black-900 border-solid h-[60px] rounded-[10px] w-full"></div>
            </div>
            <Button
              className="cursor-pointer font-semibold h-[72px] leading-[normal] mb-[39px] md:ml-[0] ml-[51px] mt-[54px] rounded-[36px] md:text-3xl sm:text-[28px] text-[32px] text-center w-[325px]"
              color="blue_gray_700"
              size="md"
              variant="fill"
            >
              Submit
            </Button>
          </div>
          <Footer1 className="flex font-inter items-center justify-center mt-[153px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ContactuspagePage;
