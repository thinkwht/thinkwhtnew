import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer3 from "components/Footer3";
import Header3 from "components/Header3";

import { CloseSVG } from "../../assets/images";

const CampusHiringPage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-start justify-end w-full">
          <Header3 className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="h-[659px] md:h-[694px] md:px-5 relative w-full">
            <div className="absolute bg-blue-800_02 flex flex-col inset-x-[0] items-start justify-start mx-auto p-[50px] md:px-10 sm:px-5 top-[0] w-full">
              <Text
                className="ml-0.5 md:ml-[0] mt-[55px] md:text-5xl text-[70px] text-white-A700 tracking-[-2.80px]"
                size="txtInterBlack70WhiteA700"
              >
                Join the Learning Tribe ,
              </Text>
              <Text
                className="mt-0.5 md:text-5xl text-[70px] text-white-A700 tracking-[-2.80px]"
                size="txtInterBlack70WhiteA700"
              >
                <span className="text-white-A700 font-inter text-left font-black">
                  Time to{" "}
                </span>
                <span className="text-white-A700 font-inter text-left font-black">
                  Grow
                </span>
                <span className="text-white-A700 font-inter text-left font-black">
                  {" "}
                  and Thrive
                </span>
              </Text>
              <Button
                className="!text-blue_gray-700 cursor-pointer font-medium mb-[54px] min-w-[194px] mt-[45px] rounded-[20px] text-[15px] text-center"
                color="orange_300"
                size="sm"
                variant="fill"
              >
                View all jobs
              </Button>
            </div>
            <div className="absolute bottom-[6%] flex flex-col font-readexpro items-center justify-start right-[3%] w-[36%]">
              <div className="h-[553px] md:h-[694px] relative w-full">
                <div className="h-[552px] md:h-[694px] my-auto w-[96%] sm:w-full">
                  <div className="absolute h-[510px] left-[0] top-[0] w-[81%] sm:w-full">
                    <div className="bg-orange-300_05 h-[298px] mt-[30px] rounded-[50%] w-[298px]"></div>
                    <Img
                      className="absolute h-[510px] inset-[0] justify-center m-auto object-cover rounded-[197px] w-full"
                      src="images/img_benparkerohke.png"
                      alt="benparkerohke_One"
                    />
                  </div>
                  <div className="absolute bottom-[0] flex h-[372px] md:h-[694px] justify-end right-[0] w-[63%]">
                    <div className="bg-orange-300_05 h-[607px] mt-auto mx-auto rounded-[153px] shadow-bs25 w-full"></div>
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[5px] pr-[5px] w-full">
                      <Img
                        className="h-[344px] md:h-auto mb-[345px] object-cover rounded-bl-[814px] rounded-br-[814px] w-full"
                        src="images/img_budkadamdinsur.png"
                        alt="budkadamdinsur_One"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[35%] flex flex-col h-[114px] items-center justify-start left-[31%] p-7 sm:px-5 rounded w-[114px]"
                  style={{
                    backgroundImage: "url('images/img_group10808.png')",
                  }}
                >
                  <Text
                    className="my-4 text-black-900 text-center text-lg"
                    size="txtReadexProBold18"
                  >
                    Hiring
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col font-inter items-center justify-start left-[4%]">
              <Text
                className="md:text-5xl text-[70px] text-blue_gray-700"
                size="txtInterBold70"
              >
                Join Our Team
              </Text>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[58px] mt-6 text-2xl md:text-[22px] text-blue_gray-700_07 text-justify sm:text-xl w-[92%] sm:w-full"
            size="txtInterRegular24Bluegray70007"
          >
            <>
              At THINKWHT, we persevere to live up to our reputation as the
              world&#39;s most valuable and loved Ed-tech company. We believe in
              revolutionizing education, building a generation of active
              learners and in that mission, we learn, we grow, we have immense
              fun and live to express what is dear to us - make everyone fall in
              love with learning!
            </>
          </Text>
          <div className="md:gap-10 gap-[61px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between max-w-[1364px] mt-16 mx-auto md:px-5 w-full">
            <div className="flex flex-1 flex-col items-center justify-start rounded-[30px] shadow-bs26 w-full">
              <div className="bg-orange-300 md:h-[229px] h-[267px] p-3.5 relative rounded-[30px] shadow-bs7 w-full">
                <div className="flex flex-col font-inter gap-[38px] h-full justify-start ml-[9px] mt-[17px] w-[72%]">
                  <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[7px] w-[98%] md:w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-700"
                        size="txtInterBold40"
                      >
                        BDA
                      </Text>
                    </div>
                    <Text
                      className="text-base text-blue_gray-700_07 text-justify w-full"
                      size="txtInterRegular16Bluegray70007"
                    >
                      Develop exceptional content through progressive pedagogy
                    </Text>
                  </div>
                  <div className="bg-blue_gray-900_05 flex flex-col font-poppins items-center justify-start mr-[63px] p-[11px] rounded-[23px]">
                    <Text
                      className="text-base text-white-A700"
                      size="txtPoppinsBold16"
                    >
                      START YOUR JOURNEY
                    </Text>
                  </div>
                </div>
                <Text
                  className="absolute h-max inset-y-[0] leading-[106.00%] left-[5%] my-auto md:text-5xl text-8xl text-black-900_05 tracking-[-1.92px] w-[89%] sm:w-full"
                  size="txtPoppinsBlack96"
                >
                  OWN YOUR
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start rounded-[30px] shadow-bs26 w-full">
              <div className="bg-blue-400 flex md:h-[229px] h-[267px] justify-end p-3.5 relative rounded-[30px] shadow-bs7 w-full">
                <div className="absolute flex flex-col font-inter inset-x-[0] items-center justify-start mx-auto top-[13%]">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                    size="txtInterBold40WhiteA700"
                  >
                    Customer Support
                  </Text>
                </div>
                <div className="flex flex-col font-inter gap-[38px] h-full justify-start mb-[33px] ml-[9px] mt-auto w-[72%]">
                  <Text
                    className="md:ml-[0] ml-[7px] text-base text-justify text-white-A700_dd w-[98%] sm:w-full"
                    size="txtInterRegular16WhiteA700dd"
                  >
                    Develop exceptional content through progressive pedagogy
                  </Text>
                  <div className="bg-blue_gray-900_05 flex flex-col font-poppins items-center justify-start mr-[63px] p-[11px] rounded-[23px]">
                    <Text
                      className="text-base text-white-A700"
                      size="txtPoppinsBold16"
                    >
                      START YOUR JOURNEY
                    </Text>
                  </div>
                </div>
                <Text
                  className="absolute h-max inset-y-[0] leading-[106.00%] left-[5%] my-auto md:text-5xl text-8xl text-black-900_07 tracking-[-1.92px] w-[89%] sm:w-full"
                  size="txtPoppinsBlack96Black90007"
                >
                  OWN YOUR
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start rounded-[30px] shadow-bs26 w-full">
              <div className="bg-orange-300 md:h-[229px] h-[267px] p-3.5 relative rounded-[30px] shadow-bs7 w-full">
                <div className="flex flex-col font-inter gap-[38px] h-full justify-start ml-[9px] mt-[21px] w-[83%]">
                  <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[7px] w-[98%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-700"
                        size="txtInterBold40"
                      >
                        Digital Marketing
                      </Text>
                    </div>
                    <Text
                      className="text-base text-blue_gray-700_07 text-justify w-[87%] sm:w-full"
                      size="txtInterRegular16Bluegray70007"
                    >
                      Develop exceptional content through progressive pedagogy
                    </Text>
                  </div>
                  <div className="bg-blue_gray-900_05 flex flex-col font-poppins items-center justify-start mr-[108px] p-[11px] rounded-[23px]">
                    <Text
                      className="text-base text-white-A700"
                      size="txtPoppinsBold16"
                    >
                      START YOUR JOURNEY
                    </Text>
                  </div>
                </div>
                <Text
                  className="absolute h-max inset-y-[0] leading-[106.00%] left-[5%] my-auto md:text-5xl text-8xl text-black-900_05 tracking-[-1.92px] w-[89%] sm:w-full"
                  size="txtPoppinsBlack96"
                >
                  OWN YOUR
                </Text>
              </div>
            </div>
          </div>
          <Footer3 className="flex items-center justify-center mt-[129px] md:px-5 w-full" />
          <Img
            className="h-px md:ml-[0] ml-[1376px] mt-[4594px] w-px"
            src="images/img_vector_1x1.svg"
            alt="vector_Five"
          />
        </div>
      </div>
    </>
  );
};

export default CampusHiringPage;
