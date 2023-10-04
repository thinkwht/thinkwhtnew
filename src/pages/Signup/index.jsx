import React from "react";

import { Button, Img, Input, Text } from "components";

const SignupPage = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start pb-[129px] w-full">
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
            <div className="bg-orange-200_01 md:h-[554px] sm:h-[629px] h-[712px] md:px-5 relative w-full">
              <div className="absolute md:h-[554px] sm:h-[629px] h-[712px] inset-[0] justify-center m-auto w-[98%] md:w-full">
                <div className="absolute bottom-[0] md:h-[516px] h-[629px] inset-x-[0] mx-auto w-[99%] md:w-full">
                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[61%]">
                    <div className="flex flex-col md:gap-10 gap-[153px] justify-start w-full">
                      <div className="flex flex-row sm:gap-10 gap-[435px] items-start justify-start mr-[99px] rotate-[180deg] w-[89%] md:w-full">
                        <div className="h-[284px] relative w-[26%]">
                          <Img
                            className="absolute h-[140px] inset-[0] justify-center m-auto object-cover w-full"
                            src="images/img_frontshapes.png"
                            alt="frontshapes"
                          />
                          <Img
                            className="absolute h-[284px] inset-y-[0] left-[1%] my-auto object-cover w-[77%]"
                            src="images/img_saly16.png"
                            alt="salySixteen"
                          />
                        </div>
                        <Img
                          className="h-[116px] md:h-auto mt-[23px] object-cover w-[117px]"
                          src="images/img_frontshapes_116x117.png"
                          alt="frontshapes_One"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-between md:ml-[0] ml-[364px] w-[57%] md:w-full">
                        <Img
                          className="h-20 md:h-auto mt-4 object-cover"
                          src="images/img_frontshapes_80x74.png"
                          alt="frontshapes_Two"
                        />
                        <div className="h-[197px] relative w-[26%]">
                          <Img
                            className="absolute h-[97px] inset-[0] justify-center m-auto object-cover w-[98%]"
                            src="images/img_frontshapes_97x118.png"
                            alt="frontshapes_Three"
                          />
                          <Img
                            className="absolute h-[197px] inset-y-[0] my-auto object-cover right-[0] w-3/4"
                            src="images/img_saly16_197x90.png"
                            alt="salySixteen_One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-row sm:gap-10 items-start justify-between left-[0] rotate-[180deg] top-[12%] w-[54%]">
                    <div className="h-[284px] relative w-[26%]">
                      <Img
                        className="absolute h-[140px] inset-[0] justify-center m-auto object-cover w-full"
                        src="images/img_frontshapes.png"
                        alt="frontshapes_Four"
                      />
                      <Img
                        className="absolute h-[284px] inset-y-[0] left-[0] my-auto object-cover w-[77%]"
                        src="images/img_saly16.png"
                        alt="salySixteen_Two"
                      />
                    </div>
                    <Img
                      className="h-[116px] md:h-auto mt-36 object-cover w-[117px]"
                      src="images/img_frontshapes_116x117.png"
                      alt="frontshapes_Five"
                    />
                  </div>
                </div>
                <div className="absolute h-[554px] right-[0] top-[0] w-[52%] md:w-full">
                  <Img
                    className="h-[554px] m-auto object-cover w-full"
                    src="images/img_avatar_554x726.png"
                    alt="avatar"
                  />
                  <div className="absolute h-14 left-[30%] top-[0] w-[15%]">
                    <Img
                      className="h-14 m-auto object-cover w-full"
                      src="images/img_ellipse14.png"
                      alt="ellipseFourteen"
                    />
                    <Img
                      className="absolute h-[42px] left-[10%] object-cover top-[0] w-3/5"
                      src="images/img_image1_42x61.png"
                      alt="imageOne"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bg-gradient18  bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[90px] md:px-10 sm:px-5 rounded-tl-[100px] rounded-tr-[100px] w-full">
                <div className="flex flex-col justify-start w-[54%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="md:text-5xl text-9xl text-white-A700"
                      size="txtInterBlack128"
                    >
                      Welcome !
                    </Text>
                  </div>
                  <Text
                    className="ml-8 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-gray-700_02"
                    size="txtInterMedium32Gray70002"
                  >
                    Free Forever. No Credit Card Needed
                  </Text>
                </div>
              </div>
              <Img
                className="absolute h-[145px] left-[0] object-cover top-[0] w-[15%]"
                src="images/img_thinkwhatlogohighfinal_70x90.png"
                alt="thinkwhatlogohi"
              />
            </div>
            <div className="flex flex-col items-start justify-start max-w-[1306px] mx-auto md:px-5 w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
                size="txtInterMedium36Bluegray700"
              >
                First Name
              </Text>
              <Text
                className="bg-white-A700 border border-black-900 border-solid h-[99px] justify-center max-w-[1305px] md:max-w-full mt-[22px] pb-8 pt-[27px] sm:px-5 px-[35px] rounded-[10px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-shadow-ts w-full"
                size="txtInterRegular32"
              >
                first name
              </Text>
              <Text
                className="mt-[90px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
                size="txtInterMedium36Bluegray700"
              >
                Last Name
              </Text>
              <Text
                className="bg-white-A700 border border-black-900 border-solid h-[99px] justify-center max-w-[1305px] md:max-w-full mt-[26px] pb-[31px] pt-7 sm:px-5 px-[35px] rounded-[10px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-shadow-ts w-full"
                size="txtInterRegular32"
              >
                last name
              </Text>
              <div className="h-11 md:h-[134px] mt-[90px] relative w-[15%]">
                <Text
                  className="m-auto text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
                  size="txtInterMedium36Bluegray700"
                >
                  User Name
                </Text>
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700 w-max"
                  size="txtInterMedium36Bluegray700"
                >
                  User Name
                </Text>
              </div>
              <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-start justify-end mt-[26px] p-[29px] sm:px-5 rounded-[10px] shadow-bs1 w-full">
                <div className="h-[39px] ml-1.5 md:ml-[0] relative w-[13%]">
                  <Text
                    className="m-auto md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400"
                    size="txtInterRegular32"
                  >
                    user name
                  </Text>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 w-max"
                    size="txtInterRegular32"
                  >
                    user name
                  </Text>
                </div>
              </div>
              <Text
                className="mt-[89px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
                size="txtInterMedium36Bluegray700"
              >
                Gender
              </Text>
              <Text
                className="bg-white-A700 border border-black-900 border-solid h-[99px] justify-center max-w-[1305px] md:max-w-full mt-[27px] pb-7 pt-[31px] sm:px-5 px-[35px] rounded-[10px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-shadow-ts w-full"
                size="txtInterRegular32"
              >
                gender
              </Text>
              <Text
                className="mt-[89px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
                size="txtInterMedium36Bluegray700"
              >
                Email Id
              </Text>
              <Text
                className="bg-white-A700 border border-black-900 border-solid h-[99px] justify-center max-w-[1305px] md:max-w-full mt-[27px] pb-8 pt-[27px] sm:px-5 px-[35px] rounded-[10px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-shadow-ts w-full"
                size="txtInterRegular32"
              >
                email id
              </Text>
              <Text
                className="mt-[90px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
                size="txtInterMedium36Bluegray700"
              >
                Password
              </Text>
              <Input
                name="group175"
                placeholder="enter password"
                className="!placeholder:text-blue_gray-400 !text-blue_gray-400 leading-[normal] md:text-3xl p-0 sm:text-[28px] text-[32px] text-left w-full"
                wrapClassName="border border-black-900 border-solid mt-[26px] rounded-[10px] w-full"
                color="white_A700"
                size="lg"
                variant="fill"
              ></Input>
              <Text
                className="mt-[89px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
                size="txtInterMedium36Bluegray700"
              >
                Confirm Password
              </Text>
              <Input
                name="group174"
                placeholder="enter confirm password"
                className="!placeholder:text-blue_gray-400 !text-blue_gray-400 leading-[normal] md:text-3xl p-0 sm:text-[28px] text-[32px] text-left w-full"
                wrapClassName="border border-black-900 border-solid mt-[27px] rounded-[10px] w-full"
                color="white_A700"
                size="lg"
                variant="fill"
              ></Input>
              <div className="flex md:flex-col flex-row font-lato gap-[38px] items-end justify-start ml-2 md:ml-[0] mt-[55px] w-[90%] md:w-full">
                <Img
                  className="h-[53px] w-[53px]"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
                <Text
                  className="mb-1 md:mt-0 mt-[9px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtLatoMedium32"
                >
                  <span className="text-black-900 font-inter text-left font-medium">
                    By signing up, you agree to our{" "}
                  </span>
                  <span className="text-blue-700_01 font-inter text-left font-bold">
                    Terms and Conditions & Privacy Policy
                  </span>
                </Text>
              </div>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[1305px] md:min-w-full mt-[87px] rounded-[15px] text-5xl sm:text-[38px] md:text-[44px] text-center"
                size="lg"
                variant="gradient"
                color="orange_300_04_blue_800_04"
              >
                Sign up
              </Button>
              <Text
                className="md:ml-[0] ml-[399px] mt-[66px] text-4xl sm:text-[32px] md:text-[34px] text-blue-800_e8"
                size="txtInterMedium36Blue800e8"
              >
                Already have an account? Login
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
