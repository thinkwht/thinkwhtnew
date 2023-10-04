import React from "react";

import { Button, Img, Line, Text } from "components";

const UIUXPageOneCalender = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[31px] items-center justify-start mb-[82px] mt-[25px] w-full">
          <div className="flex flex-col gap-[22px] items-center justify-start w-[92%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-[98%] md:w-full">
              <Text
                className="mt-[31px] text-5xl sm:text-[38px] md:text-[44px] text-blue-800_01"
                size="txtInterSemiBold48"
              >
                {props?.date}
              </Text>
              {!!props?.close ? (
                <Img className="h-9 w-[35px]" alt="close" src="props?.close" />
              ) : null}
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
              <Text
                className="sm:mt-0 mt-1 sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-700"
                size="txtInterRegular40Bluegray700"
              >
                {props?.month}
              </Text>
              <Text
                className="sm:ml-[0] ml-[31px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-700"
                size="txtInterRegular40Bluegray700"
              >
                {props?.year}
              </Text>
              <Img
                className="h-14 sm:ml-[0] ml-[481px] sm:mt-0 mt-1"
                src="images/img_fluentiosarrow24filled.svg"
                alt="fluentiosarrowTwo"
              />
              <Img
                className="h-14 sm:ml-[0] ml-[79px] sm:mt-0 mt-1"
                src="images/img_fluentiosarrow24filled_blue_800_01.svg"
                alt="fluentiosarrowTwo_One"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start w-full">
            <div className="h-px relative w-full">
              <Line className="absolute bg-black-900 h-px inset-[0] justify-center m-auto w-full" />
              <Line className="absolute bg-black-900 h-px inset-[0] justify-center m-auto w-full" />
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[101px] mt-[70px] w-4/5 md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtInterRegular48"
              >
                {props?.mon}
              </Text>
              <Text
                className="ml-6 md:ml-[0] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtInterRegular48"
              >
                {props?.tue}
              </Text>
              <Text
                className="md:ml-[0] ml-[38px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtInterRegular48"
              >
                {props?.wed}
              </Text>
              <Text
                className="md:ml-[0] ml-[33px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtInterRegular48"
              >
                {props?.thu}
              </Text>
              <Text
                className="md:ml-[0] ml-[46px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtInterRegular48"
              >
                {props?.fri}
              </Text>
              <Text
                className="md:ml-[0] ml-[45px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtInterRegular48"
              >
                {props?.sat}
              </Text>
              <Text
                className="md:ml-[0] ml-[45px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtInterRegular48"
              >
                {props?.sun}
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[270px] mt-[59px] text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-400"
              size="txtInterLight48"
            >
              {props?.weekdays}
            </Text>
            <div className="h-20 md:h-[127px] md:ml-[0] ml-[129px] mt-[47px] relative w-[76%] md:w-full">
              {props?.weekdays1}
              <div className="absolute border border-black-900 border-solid h-20 inset-y-[0] my-auto right-[29%] rounded-[41px] w-[11%]"></div>
            </div>
            <Text
              className="md:ml-[0] ml-[116px] mt-[47px] text-5xl sm:text-[38px] md:text-[44px] text-blue-800_01"
              size="txtInterLight48Blue80001"
            >
              {props?.weekdays3}
            </Text>
            <div className="md:h-[117px] h-[59px] md:ml-[0] ml-[117px] mt-[58px] relative w-[76%] md:w-full">
              <Text
                className="absolute h-full inset-[0] justify-center m-auto text-5xl sm:text-[38px] md:text-[44px] text-blue-800_01 w-max"
                size="txtInterLight48Blue80001"
              >
                {props?.weekdays4}
              </Text>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto text-5xl sm:text-[38px] md:text-[44px] text-blue-800_01 w-max"
                size="txtInterLight48Blue80001"
              >
                {props?.weekdays5}
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[117px] mt-[57px] text-5xl sm:text-[38px] md:text-[44px] text-blue-800_01"
              size="txtInterLight48Blue80001"
            >
              {props?.weekdays6}
            </Text>
            {!!props?.time ? (
              <Text
                className="md:ml-[0] ml-[55px] mt-[100px] text-5xl sm:text-[38px] md:text-[44px] text-blue-800_01"
                size="txtInterSemiBold48"
              >
                {props?.time}
              </Text>
            ) : null}
            <Line className="bg-black-900 h-px mt-[27px] w-full" />
            <div className="gap-[58px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between md:ml-[0] ml-[43px] mt-[52px] w-[91%] md:w-full">
              {!!props?.time1 ? (
                <Button
                  className="!text-blue-800_01 cursor-pointer font-inter font-semibold min-w-[277px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-center w-full"
                  shape="round"
                  color="black_900"
                  size="xl"
                  variant="outline"
                >
                  {props?.time1}
                </Button>
              ) : null}
              {!!props?.time2 ? (
                <Text
                  className="border border-black-900 border-solid pb-[19px] pt-[23px] sm:px-5 px-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-blue-800_01 w-full"
                  size="txtInterSemiBold32Blue80001"
                >
                  {props?.time2}
                </Text>
              ) : null}
              {!!props?.time3 ? (
                <Text
                  className="border border-black-900 border-solid pb-[19px] pt-[23px] sm:px-5 px-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-blue-800_01 w-full"
                  size="txtInterSemiBold32Blue80001"
                >
                  {props?.time3}
                </Text>
              ) : null}
            </div>
            <div className="gap-[58px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between md:ml-[0] ml-[43px] mt-[52px] w-[91%] md:w-full">
              {!!props?.time4 ? (
                <Text
                  className="border border-black-900 border-solid pb-[18px] pt-6 sm:px-5 px-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-blue-800_01 w-full"
                  size="txtInterSemiBold32Blue80001"
                >
                  {props?.time4}
                </Text>
              ) : null}
              {!!props?.time5 ? (
                <Button
                  className="!text-blue-800_01 cursor-pointer font-inter font-semibold min-w-[277px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-center w-full"
                  shape="round"
                  color="black_900"
                  size="xl"
                  variant="outline"
                >
                  {props?.time5}
                </Button>
              ) : null}
              {!!props?.time6 ? (
                <Button
                  className="!text-blue-800_01 cursor-pointer font-inter font-semibold min-w-[277px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-center w-full"
                  shape="round"
                  color="black_900"
                  size="xl"
                  variant="outline"
                >
                  {props?.time6}
                </Button>
              ) : null}
            </div>
            {!!props?.booksession ? (
              <Button
                className="!text-blue_gray-700 cursor-pointer font-inter font-medium leading-[normal] min-w-[583px] sm:min-w-full md:ml-[0] ml-[212px] mr-[246px] mt-[105px] rounded-[57px] text-5xl sm:text-[38px] md:text-[44px] text-center"
                color="orange_300"
                size="2xl"
                variant="fill"
              >
                {props?.booksession}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

UIUXPageOneCalender.defaultProps = {
  date: "Pick a date",
  month: "August",
  year: "2023",
  mon: "Mon",
  tue: "Tue",
  wed: "Wed",
  thu: "Thu",
  fri: "Fri",
  sat: "Sat",
  sun: "Sun",
  weekdays: "       1       2       3      4       5       6",
  weekdays1: (
    <Text
      className="absolute h-max inset-[0] justify-center m-auto text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-400 w-max"
      size="txtInterLight48"
    >
      <span className="text-blue_gray-400 font-inter text-left font-light">
        {" "}
        7 8 9 10{" "}
      </span>
      <span className="text-blue-800_01 font-inter text-left font-light">
        11 12 13
      </span>
    </Text>
  ),
  weekdays3: "      14      15      16     17     18      19    20",
  weekdays4: "      21      22     23     24    25     26    27",
  weekdays5: "      21      22     23     24    25     26    27",
  weekdays6: "      28     29     30      31",
};

export default UIUXPageOneCalender;
