import React from "react";

import { Button, Img, Input, Text } from "components";

const ResetpasswordPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <div className="flex flex-col gap-[55px] items-center justify-end w-full">
          <div className="bg-orange-200_01 sm:h-[736px] h-[737px] md:h-[820px] md:px-5 relative w-full">
            <div className="absolute h-[736px] md:h-[820px] inset-[0] justify-center m-auto w-[98%] md:w-full">
              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[90%]">
                <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-end md:mt-0 mt-[711px] w-[5%] md:w-full">
                    <Img
                      className="h-11 md:h-auto object-cover w-full"
                      src="images/img_card_44x58.png"
                      alt="card"
                    />
                  </div>
                  <div className="h-[736px] relative w-[70%] md:w-full">
                    <Img
                      className="h-[736px] m-auto object-cover w-full"
                      src="images/img_illustration.png"
                      alt="illustration"
                    />
                    <div className="absolute bottom-[3%] flex flex-col md:gap-10 gap-[153px] inset-x-[0] justify-start mx-auto w-[96%]">
                      <div className="flex flex-row sm:gap-10 gap-[435px] items-start justify-start mr-[97px] rotate-[180deg] w-[89%] md:w-full">
                        <div className="h-[284px] relative w-[26%]">
                          <Img
                            className="absolute h-[140px] inset-[0] justify-center m-auto object-cover w-full"
                            src="images/img_frontshapes.png"
                            alt="frontshapes"
                          />
                          <Img
                            className="absolute h-[284px] inset-y-[0] left-[0] my-auto object-cover w-[77%]"
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
                            className="absolute h-[97px] inset-[0] justify-center m-auto object-cover w-full"
                            src="images/img_frontshapes_97x118.png"
                            alt="frontshapes_Three"
                          />
                          <Img
                            className="absolute h-[197px] inset-y-[0] my-auto object-cover right-[0] w-[76%]"
                            src="images/img_saly16_197x90.png"
                            alt="salySixteen_One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-row sm:gap-10 items-start justify-between left-[0] rotate-[180deg] top-[21%] w-[53%]">
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
            <div className="absolute bg-gradient18  bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[75px] md:px-10 sm:px-5 rounded-tl-[100px] rounded-tr-[100px] w-full">
              <div className="flex flex-col items-center justify-start mt-[39px] w-4/5 md:w-full">
                <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                  <Text
                    className="md:text-5xl text-9xl text-white-A700"
                    size="txtInterBlack128"
                  >
                    Reset Password
                  </Text>
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-700_ba"
                    size="txtInterRegular40"
                  >
                    create a new password to login to your account
                  </Text>
                </div>
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
              Email Id
            </Text>
            <Input
              name="group548"
              placeholder="enter your email"
              className="!placeholder:text-blue_gray-400 !text-blue_gray-400 leading-[normal] md:text-3xl p-0 sm:text-[28px] text-[32px] text-left w-full"
              wrapClassName="border border-black-900 border-solid mt-[22px] rounded-[10px] w-full"
              color="white_A700"
              size="lg"
              variant="fill"
            ></Input>
            <Text
              className="mt-[81px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
              size="txtInterMedium36Bluegray700"
            >
              Password
            </Text>
            <Text
              className="bg-white-A700 border border-black-900 border-solid h-[99px] justify-center max-w-[1305px] md:max-w-full mt-[21px] pb-7 pt-[31px] sm:px-5 px-[35px] rounded-[10px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-shadow-ts w-full"
              size="txtInterRegular32"
            >
              {" "}
              enter your password
            </Text>
            <Text
              className="mt-20 text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
              size="txtInterMedium36Bluegray700"
            >
              Confirm Password
            </Text>
            <Text
              className="bg-white-A700 border border-black-900 border-solid h-[99px] justify-center max-w-[1305px] md:max-w-full mt-[22px] sm:px-5 px-[35px] py-[29px] rounded-[10px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400 text-shadow-ts w-full"
              size="txtInterRegular32"
            >
              confirm your password
            </Text>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[1305px] md:min-w-full mt-[103px] rounded-[15px] text-5xl sm:text-[38px] md:text-[44px] text-center"
              color="gray_200_03"
              size="2xl"
              variant="fill"
            >
              Sumbit
            </Button>
            <div className="flex flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[11px] mt-[49px] w-[99%] md:w-full">
              <Text
                className="mt-[5px] text-4xl sm:text-[32px] md:text-[34px] text-blue-800_05"
                size="txtInterRegular36Blue80005"
              >
                Login
              </Text>
              <Text
                className="mb-[5px] text-4xl sm:text-[32px] md:text-[34px] text-blue-800_05"
                size="txtInterRegular36Blue80005"
              >
                Create Account
              </Text>
            </div>
            <div className="bg-white-A700 border border-black-900 border-solid h-[103px] md:ml-[0] ml-[297px] mt-[370px] rounded-[10px] shadow-bs1 w-[11%]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetpasswordPage;
