import React from "react";

import { Img, Input, Line, Text } from "components";
import Footer1 from "components/Footer1";
import Header3 from "components/Header3";

import { CloseSVG } from "../../assets/images";

const AboutuspagePage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col font-inter items-center justify-start w-full">
            <Header3 className="flex flex-col items-center justify-center md:px-5 w-full" />
            <div className="sm:h-[508px] h-[531px] md:h-[587px] md:px-5 relative w-full">
              <div className="absolute bg-orange-200_01 flex flex-col inset-x-[0] items-start justify-end mx-auto p-[15px] top-[0] w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[22px] mt-3.5 w-[92%] md:w-full">
                  <div className="backdrop-opacity-[0.5] bg-white-A700_6c blur-[100.00px] h-[359px] rounded-[179px] w-[27%]"></div>
                  <div className="flex flex-col gap-4 items-start justify-start">
                    <Text
                      className="md:text-5xl text-[75.68px] text-black-900_3a text-center"
                      size="txtInterBold7568"
                    >
                      <span className="text-black-900_3a font-inter font-bold">
                        WHAT IS{" "}
                      </span>
                      <span className="text-blue_gray-700 font-inter font-bold">
                        THINKWHT
                      </span>
                      <span className="text-black-900_3a font-inter font-bold">
                        {" "}
                      </span>
                      <span className="text-blue_gray-700 font-inter font-bold">
                        ?
                      </span>
                    </Text>
                    <Text
                      className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsRegular24"
                    >
                      Lorem Ipsum is simply dummy text of the printing.
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="absolute bottom-[0] h-[508px] left-[4%] object-cover w-[32%]"
                src="images/img_de2b0d656f0d69d.png"
                alt="de2b0d656f0d69d"
              />
            </div>
            <div className="md:h-[263px] h-[340px] max-w-[1345px] mt-[70px] mx-auto md:px-5 relative w-full">
              <div className="absolute backdrop-opacity-[0.5] bg-orange-300 blur-[500.00px] h-[193px] inset-y-[0] my-auto right-[1%] rounded-[96px] w-[12%]"></div>
              <Text
                className="absolute inset-x-[0] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-justify top-[0] w-full"
                size="txtInterRegular32"
              >
                Welcome to ThinkWHT, your premier destination for online courses
                that cater to diverse learners seeking knowledge, skills, and
                personal growth. Our platform offers a wide array of
                high-quality courses, carefully curated to suit various
                interests, career goals, and academic pursuits.
              </Text>
              <Text
                className="absolute bottom-[0] inset-x-[0] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-justify w-full"
                size="txtInterRegular32"
              >
                With ThinkWHT, you can embark on a transformative learning
                journey from the comfort of your home or on-the-go, as we bring
                education directly to your fingertips. Our team of expert
                instructors, industry professionals, and thought leaders curate
                engaging content that is both informative and inspiring.
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[58px] items-center justify-between max-w-[1391px] mt-[91px] mx-auto md:px-5 w-full">
              <div className="md:h-[398px] h-[401px] relative w-[31%] md:w-full">
                <div className="absolute bg-orange-50 flex flex-col gap-6 h-max inset-[0] items-start justify-center m-auto p-5 rounded-[20px] w-full">
                  <Text
                    className="mt-[203px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtInterBlack32"
                  >
                    OUR MISSION
                  </Text>
                  <Text
                    className="mb-[35px] md:ml-[0] ml-[3px] text-base text-blue_gray-400 w-[98%] sm:w-full"
                    size="txtInterRegular16Bluegray400"
                  >
                    <>
                      &quot;Enabling learners to achieve their full potential
                      through a diverse and innovative online course
                      platform.&quot;
                    </>
                  </Text>
                </div>
                <div className="absolute flex flex-col items-center justify-start right-[4%] top-[0] w-[48%]">
                  <Img
                    className="h-[217px] md:h-auto object-cover w-full"
                    src="images/img_objectother13.png"
                    alt="objectotherThirteen"
                  />
                </div>
              </div>
              <div className="bg-blue_gray-700_bf flex md:flex-1 flex-col gap-[9px] justify-start md:mt-0 mt-1 p-[5px] rounded-[20px] w-[31%] md:w-full">
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[189px] w-[52%] md:w-full">
                  <Img
                    className="h-[209px] md:h-auto object-cover w-full"
                    src="images/img_objectother06.png"
                    alt="objectotherSix"
                  />
                </div>
                <div className="flex flex-col gap-5 items-start justify-start mb-[54px] md:ml-[0] ml-[17px] mr-[31px]">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtInterBlack32WhiteA700"
                  >
                    OUR VISION
                  </Text>
                  <Text
                    className="text-base text-white-A700 w-full"
                    size="txtInterRegular16WhiteA700"
                  >
                    <>
                      &quot;Empowering learners worldwide with accessible,
                      high-quality education for personal and professional
                      growth.&quot;
                    </>
                  </Text>
                </div>
              </div>
              <div className="md:h-[398px] h-[403px] relative w-[31%] md:w-full">
                <div className="absolute bg-orange-300_b5 flex flex-col gap-[17px] h-max inset-[0] items-start justify-center m-auto p-[25px] sm:px-5 rounded-[20px] w-full">
                  <Text
                    className="mt-52 md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtInterBlack32"
                  >
                    OUR VALUES
                  </Text>
                  <Text
                    className="mb-[27px] text-base text-blue_gray-400 w-full"
                    size="txtInterRegular16Bluegray400"
                  >
                    <>
                      &quot;Fostering a culture of excellence, inclusivity, and
                      continuous learning to empower our global community of
                      learners.&quot;
                    </>
                  </Text>
                </div>
                <div className="absolute flex flex-col items-center justify-start right-[1%] top-[0] w-[230px]">
                  <Img
                    className="h-[231px] md:h-auto object-cover w-[230px] sm:w-full"
                    src="images/img_objectother15.png"
                    alt="objectotherFifteen"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mt-32 p-[38px] sm:px-5 shadow-bs16 w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start mt-[3px] md:px-5">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-blue_gray-900_c9 text-center"
                size="txtInterBlack50"
              >
                <span className="text-blue_gray-900_c9 font-inter font-black">
                  WHY TO CHOOSE{" "}
                </span>
                <span className="text-orange-300_c4 font-inter font-black">
                  THINKWHT ?
                </span>
              </Text>
              <Text
                className="text-blue_gray-400 text-center text-xl"
                size="txtInterRegular20"
              >
                <>
                  &quot;Choose Think - Empowering minds through transformative
                  online learning experiences.&quot;
                </>
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inter md:gap-5 items-start justify-start mt-[122px] md:px-5 w-[93%] md:w-full">
            <Img
              className="h-[193px] sm:h-auto md:mt-0 mt-[106px] object-cover w-[10%] md:w-full"
              src="images/img_ellipse127.png"
              alt="ellipse127"
            />
            <div className="flex flex-col gap-[52px] justify-start w-[91%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start pb-[13px] px-[13px] rounded-[10px] shadow-bs7 w-[229px] md:w-full">
                  <div className="flex flex-col items-center justify-start mb-0.5 w-full">
                    <Img
                      className="h-[213px] md:h-auto object-cover w-full"
                      src="images/img_objectother03.png"
                      alt="objectotherThree"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start md:ml-[0] ml-[236px] p-3.5 rounded-[10px] shadow-bs7 w-[229px] md:w-full">
                  <div className="flex flex-col items-center justify-start my-[3px] w-full">
                    <Img
                      className="h-[195px] md:h-auto object-cover w-full"
                      src="images/img_objectother01.png"
                      alt="objectotherOne"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start md:ml-[0] ml-[230px] p-6 sm:px-5 rounded-[10px] shadow-bs7 w-[229px] md:w-full">
                  <div className="flex flex-col items-center justify-start my-1 w-full">
                    <Img
                      className="h-[173px] md:h-auto object-cover w-full"
                      src="images/img_objectother17.png"
                      alt="objectotherSeventeen"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[27px] w-[98%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <Text
                    className="mb-0.5 text-2xl md:text-[22px] text-blue_gray-700 sm:text-xl"
                    size="txtInterBold24"
                  >
                    Learn with Us
                  </Text>
                  <Text
                    className="mb-0.5 sm:ml-[0] ml-[314px] text-2xl md:text-[22px] text-blue_gray-700 sm:text-xl"
                    size="txtInterBold24"
                  >
                    Grow with Us
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[216px] sm:mt-0 mt-0.5 text-2xl md:text-[22px] text-blue_gray-700 sm:text-xl"
                    size="txtInterBold24"
                  >
                    Get Internship Opportunities
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[77%] md:w-full">
                  <Line className="bg-orange-300 h-[3px] w-[7%]" />
                  <Line className="bg-orange-300 h-[3px] md:ml-[0] ml-[412px] w-[8%]" />
                  <Line className="bg-orange-300 h-[3px] md:ml-[0] ml-[303px] w-[7%]" />
                </div>
                <Text
                  className="md:ml-[0] ml-[147px] mt-[141px] md:text-5xl text-[64px] text-blue-800_01 text-center"
                  size="txtInterBold64Blue80001"
                >
                  Video
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 gap-[67px] items-center justify-start max-w-[1217px] mt-[41px] mx-auto md:px-5 w-full">
            <div className="flex h-[394px] justify-end relative w-[46%] md:w-full">
              <Img
                className="h-[18px] mb-[9px] ml-[18px] mt-auto object-cover w-[2%]"
                src="images/img_f43ea641ea90098.png"
                alt="f43ea641ea90098"
              />
              <div className="absolute bg-orange-200_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-32 md:px-10 sm:px-5 rounded-[10px] w-full">
                <Img
                  className="h-[138px] md:h-auto object-cover w-[46%]"
                  src="images/img_image34.png"
                  alt="image108"
                />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[13px] items-center justify-start w-1/2 md:w-full">
              <Text
                className="text-black-900 text-justify text-xl w-full"
                size="txtPoppinsRegular20"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              </Text>
              <div className="md:h-[156px] h-[226px] relative w-full">
                <Text
                  className="absolute inset-x-[0] mx-auto text-black-900 text-justify text-xl top-[0] w-full"
                  size="txtPoppinsRegular20"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit vitae. Est tellus vitae, nullam
                  lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                  ullamcorper velit.
                </Text>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto text-black-900 text-justify text-xl w-full"
                  size="txtPoppinsRegular20"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="mt-[170px] md:text-5xl text-[64px] text-blue_gray-900_02 text-center"
            size="txtInterBold64Bluegray90002"
          >
            Target Reach
          </Text>
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
            size="txtPoppinsMedium24Bluegray400"
          >
            Lorem Ipsum is simply dummy text of the printing.
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start max-w-[1322px] mt-[54px] mx-auto md:px-5 w-full">
            <div className="h-[273px] md:h-[286px] mb-[13px] md:mt-0 mt-6 relative w-[23%] md:w-full">
              <Img
                className="h-[257px] ml-[34px] my-auto object-cover"
                src="images/img_ellipse61.png"
                alt="ellipseSixty"
              />
              <Img
                className="absolute h-[273px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_b40021e580b7bdb.png"
                alt="b40021e580b7bdb"
              />
            </div>
            <div className="h-64 md:h-[269px] mb-[13px] md:ml-[0] ml-[25px] md:mt-0 mt-[41px] relative w-[22%] md:w-full">
              <Img
                className="absolute h-64 inset-[0] justify-center m-auto object-cover"
                src="images/img_ellipse61.png"
                alt="ellipseSixtyThree"
              />
              <Img
                className="absolute h-[233px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_70a91510a6ca690.png"
                alt="70a91510a6ca690"
              />
            </div>
            <div className="md:h-[273px] h-[278px] md:ml-[0] ml-[85px] md:mt-0 mt-8 relative w-[19%] md:w-full">
              <Img
                className="absolute bottom-[0] h-64 object-cover right-[0]"
                src="images/img_ellipse61.png"
                alt="ellipseSixtyTwo"
              />
              <Img
                className="absolute h-[273px] inset-y-[0] left-[0] my-auto object-cover w-[91%]"
                src="images/img_79c5a3bd0df3ec1.png"
                alt="79c5a3bd0df3ecOne"
              />
            </div>
            <div className="md:h-[305px] h-[310px] md:ml-[0] ml-[108px] relative w-[21%] md:w-full">
              <Img
                className="absolute bottom-[0] h-[262px] left-[0] object-cover"
                src="images/img_ellipse61.png"
                alt="ellipseSixtyOne"
              />
              <Img
                className="absolute h-[305px] inset-y-[0] my-auto object-cover right-[0] w-[93%]"
                src="images/img_1336e3b9ed2bea0.png"
                alt="1336e3b9ed2beaZero"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inter md:gap-5 items-center justify-start max-w-[1219px] mt-1.5 mx-auto md:px-5 w-full">
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
            <div className="h-[100px] md:h-[74px] md:ml-[0] ml-[154px] relative w-[13%] md:w-full">
              <Text
                className="absolute inset-x-[0] mx-auto md:text-5xl text-[64px] text-blue_gray-900 text-center top-[0] w-max"
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
          <Footer1 className="flex font-inter items-center justify-center mt-[155px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AboutuspagePage;
