import React from "react";

import { Button, Img, Input, Text } from "components";
import Header2 from "components/Header2";

import { CloseSVG } from "../../assets/images";

const CompleteprofilePage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="font-inter h-[4033px] mx-auto pb-[82px] relative w-full">
        <div className="bg-white-A700 flex flex-col h-full items-center justify-start m-auto p-[55px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-start justify-start max-w-[1317px] mb-[95px] mt-[126px] mx-auto w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
              size="txtInterMedium36Bluegray700"
            >
              <span className="text-blue_gray-700 font-inter text-left font-medium">
                First Name
              </span>
              <span className="text-deep_orange-A700 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-start mt-[33px] p-[17px] w-full"
              style={{ backgroundImage: "url('images/img_group853.svg')" }}
            >
              <Text
                className="ml-4 md:ml-[0] text-blue_gray-400 text-xl"
                size="txtInterRegular20"
              >
                first name
              </Text>
            </div>
            <Text
              className="mt-[66px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
              size="txtInterMedium36Bluegray700"
            >
              <span className="text-blue_gray-700 font-inter text-left font-medium">
                Last Name
              </span>
              <span className="text-deep_orange-A700 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-start mt-8 p-[17px] w-full"
              style={{ backgroundImage: "url('images/img_group853.svg')" }}
            >
              <Text
                className="ml-4 md:ml-[0] text-blue_gray-400 text-xl"
                size="txtInterRegular20"
              >
                Last name
              </Text>
            </div>
            <Text
              className="mt-[51px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
              size="txtInterMedium36Bluegray700"
            >
              <span className="text-blue_gray-700 font-inter text-left font-medium">
                User Name
              </span>
              <span className="text-deep_orange-A700 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-start mt-8 p-[17px] w-full"
              style={{ backgroundImage: "url('images/img_group853.svg')" }}
            >
              <Text
                className="ml-4 md:ml-[0] text-blue_gray-400 text-xl"
                size="txtInterRegular20"
              >
                User name
              </Text>
            </div>
            <Text
              className="mt-[50px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
              size="txtInterMedium36Bluegray700"
            >
              <span className="text-blue_gray-700 font-inter text-left font-medium">
                Email Id
              </span>
              <span className="text-deep_orange-A700 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-start mt-[33px] p-[17px] w-full"
              style={{ backgroundImage: "url('images/img_group853.svg')" }}
            >
              <Text
                className="ml-4 md:ml-[0] text-blue_gray-400 text-xl"
                size="txtInterRegular20"
              >
                Email Id
              </Text>
            </div>
            <Text
              className="mt-[41px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
              size="txtInterMedium36Bluegray700"
            >
              <span className="text-blue_gray-700 font-inter text-left font-medium">
                Phone Number
              </span>
              <span className="text-deep_orange-A700 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-end mt-8 p-4 w-full"
              style={{ backgroundImage: "url('images/img_group853.svg')" }}
            >
              <div className="flex flex-row gap-[23px] items-center justify-start md:ml-[0] ml-[17px] w-[8%] md:w-full">
                <Img
                  className="h-[25px]"
                  src="images/img_television.svg"
                  alt="television"
                />
                <Text
                  className="text-blue_gray-400 text-xl"
                  size="txtInterRegular20"
                >
                  + 91
                </Text>
              </div>
            </div>
            <Text
              className="mt-[54px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
              size="txtInterMedium36Bluegray700"
            >
              <span className="text-blue_gray-700 font-inter text-left font-medium">
                Organization/College
              </span>
              <span className="text-deep_orange-A700 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-end mt-[29px] p-[15px] w-full"
              style={{ backgroundImage: "url('images/img_group853.svg')" }}
            >
              <Text
                className="md:ml-[0] ml-[26px] mt-[3px] text-blue_gray-400 text-xl"
                size="txtInterRegular20"
              >
                organization/college
              </Text>
            </div>
            <Text
              className="mt-[55px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
              size="txtInterMedium36Bluegray700"
            >
              <span className="text-blue_gray-700 font-inter text-left font-medium">
                Industry
              </span>
              <span className="text-deep_orange-A700 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-end mt-[29px] p-[15px] w-full"
              style={{ backgroundImage: "url('images/img_group853.svg')" }}
            >
              <Text
                className="md:ml-[0] ml-[26px] mt-[3px] text-blue_gray-400 text-xl"
                size="txtInterRegular20"
              >
                industry
              </Text>
            </div>
            <Text
              className="mt-[51px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
              size="txtInterMedium36Bluegray700"
            >
              <span className="text-blue_gray-700 font-inter text-left font-medium">
                State
              </span>
              <span className="text-deep_orange-A700 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-end mt-[33px] p-[17px] w-full"
              style={{ backgroundImage: "url('images/img_group853.svg')" }}
            >
              <Text
                className="ml-6 md:ml-[0] text-blue_gray-400 text-xl"
                size="txtInterRegular20"
              >
                state
              </Text>
            </div>
            <Text
              className="mt-[54px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
              size="txtInterMedium36Bluegray700"
            >
              <span className="text-blue_gray-700 font-inter text-left font-medium">
                Country
              </span>
              <span className="text-deep_orange-A700 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-start mt-[29px] p-[17px] w-full"
              style={{ backgroundImage: "url('images/img_group853.svg')" }}
            >
              <Text
                className="ml-6 md:ml-[0] text-blue_gray-400 text-xl"
                size="txtInterRegular20"
              >
                India
              </Text>
            </div>
            <Text
              className="mt-[50px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
              size="txtInterMedium36Bluegray700"
            >
              <span className="text-blue_gray-700 font-inter text-left font-medium">
                Gender
              </span>
              <span className="text-deep_orange-A700 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-start mt-[33px] p-[17px] w-full"
              style={{ backgroundImage: "url('images/img_group853.svg')" }}
            >
              <Text
                className="ml-6 md:ml-[0] text-blue_gray-400 text-xl"
                size="txtInterRegular20"
              >
                Gender
              </Text>
            </div>
            <Text
              className="mt-[54px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
              size="txtInterMedium36Bluegray700"
            >
              <span className="text-blue_gray-700 font-inter text-left font-medium">
                User Type
              </span>
              <span className="text-deep_orange-A700 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div className="gap-[58px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start mt-[33px] w-[69%] md:w-full">
              <Button
                className="!text-blue_gray-400 border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[260px] rounded-[33px] text-2xl md:text-[22px] text-center sm:text-xl w-full"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                College student
              </Button>
              <Button
                className="!text-blue_gray-400 border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[260px] rounded-[33px] text-2xl md:text-[22px] text-center sm:text-xl w-full"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                Professional
              </Button>
              <Button
                className="!text-blue_gray-400 border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[260px] rounded-[33px] text-2xl md:text-[22px] text-center sm:text-xl w-full"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                Fresher
              </Button>
            </div>
            <Text
              className="mt-[68px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
              size="txtInterMedium36Bluegray700"
            >
              <span className="text-blue_gray-700 font-inter text-left font-medium">
                Course
              </span>
              <span className="text-deep_orange-A700 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-start mt-[33px] p-[17px] w-full"
              style={{ backgroundImage: "url('images/img_group853.svg')" }}
            >
              <Text
                className="ml-6 md:ml-[0] text-blue_gray-400 text-xl"
                size="txtInterRegular20"
              >
                Course
              </Text>
            </div>
            <Text
              className="mt-[58px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
              size="txtInterMedium36Bluegray700"
            >
              <span className="text-blue_gray-700 font-inter text-left font-medium">
                Year of Graduation
              </span>
              <span className="text-deep_orange-A700 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div className="gap-14 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start mt-[47px] w-3/4 md:w-full">
              <Button
                className="!text-blue_gray-400 border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[204px] rounded-[33px] text-2xl md:text-[22px] text-center sm:text-xl w-full"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                2023
              </Button>
              <Button
                className="!text-blue_gray-400 border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[204px] rounded-[33px] text-2xl md:text-[22px] text-center sm:text-xl w-full"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                2024
              </Button>
              <Button
                className="!text-blue_gray-400 border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[204px] rounded-[33px] text-2xl md:text-[22px] text-center sm:text-xl w-full"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                2025
              </Button>
              <Button
                className="!text-blue_gray-400 border border-black-900 border-solid cursor-pointer leading-[normal] min-w-[204px] rounded-[33px] text-2xl md:text-[22px] text-center sm:text-xl w-full"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                2026
              </Button>
            </div>
            <Text
              className="mt-20 text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
              size="txtInterMedium36Bluegray700"
            >
              <span className="text-blue_gray-700 font-inter text-left font-medium">
                Summary
              </span>
              <span className="text-deep_orange-A700 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-start justify-start mt-[43px] p-[31px] sm:px-5 rounded-[10px] shadow-bs1 w-full">
              <Text
                className="mb-[111px] md:ml-[0] ml-[3px] text-blue_gray-400 text-xl"
                size="txtInterRegular20"
              >
                Add Summary
              </Text>
            </div>
            <Text
              className="mt-[76px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
              size="txtInterMedium36Bluegray700"
            >
              <span className="text-blue_gray-700 font-inter text-left font-medium">
                Skills
              </span>
              <span className="text-deep_orange-A700 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-start mt-[33px] p-[17px] w-full"
              style={{ backgroundImage: "url('images/img_group853.svg')" }}
            >
              <Text
                className="ml-6 md:ml-[0] text-blue_gray-400 text-xl"
                size="txtInterRegular20"
              >
                Add skills
              </Text>
            </div>
            <Text
              className="mt-[69px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
              size="txtInterMedium36Bluegray700"
            >
              <span className="text-blue_gray-700 font-inter text-left font-medium">
                Work Experience
              </span>
              <span className="text-deep_orange-A700 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-end mt-[29px] p-[15px] w-full"
              style={{ backgroundImage: "url('images/img_group853.svg')" }}
            >
              <Text
                className="md:ml-[0] ml-[26px] mt-[3px] text-blue_gray-400 text-xl"
                size="txtInterRegular20"
              >
                Add work experience
              </Text>
            </div>
            <Text
              className="mt-[76px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700"
              size="txtInterMedium36Bluegray700"
            >
              <span className="text-blue_gray-700 font-inter text-left font-medium">
                Education
              </span>
              <span className="text-deep_orange-A700 font-inter text-left font-medium">
                *
              </span>
            </Text>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-start mt-[33px] p-[17px] w-full"
              style={{ backgroundImage: "url('images/img_group853.svg')" }}
            >
              <Text
                className="ml-6 md:ml-[0] text-blue_gray-400 text-xl"
                size="txtInterRegular20"
              >
                Add Education
              </Text>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[79px] items-center justify-start mt-[84px] p-[17px] w-full"
              style={{ backgroundImage: "url('images/img_group105.png')" }}
            >
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                size="txtInterSemiBold36WhiteA700"
              >
                Sumbit
              </Text>
            </div>
          </div>
        </div>
        <Header2 className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto md:px-5 top-[0] w-full" />
      </div>
    </>
  );
};

export default CompleteprofilePage;
