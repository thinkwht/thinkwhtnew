import React from "react";

import { Button, Img, Text } from "components";

const MentorPageOneCalender = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border border-black-900 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[5px] p-[29px] sm:px-5 rounded-[10px] w-full">
          <Img
            className="h-[55px] sm:ml-[0] ml-[21px]"
            src="images/img_calendar_blue_800_01.svg"
            alt="calendar"
          />
          <Text
            className="sm:ml-[0] ml-[68px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-700"
            size="txtInterRegular40Bluegray700"
          >
            {props?.timeThree}
          </Text>
          <Img
            className="h-[53px] ml-80 sm:ml-[0]"
            src="images/img_mdipen.svg"
            alt="mdipen"
          />
        </div>
        <Text
          className="mt-[49px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
          size="txtInterRegular36"
        >
          {props?.username}
        </Text>
        <div className="bg-white-A700 border border-black-900 border-solid h-[79px] mt-[21px] rounded-[10px] w-full"></div>
        <Text
          className="mt-[41px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
          size="txtInterRegular36"
        >
          {props?.useremail}
        </Text>
        <div className="bg-white-A700 border border-black-900 border-solid h-[79px] mt-[22px] rounded-[10px] w-full"></div>
        <Text
          className="mt-[54px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
          size="txtInterRegular36"
        >
          {props?.userphonenumber}
        </Text>
        <div className="bg-white-A700 border border-black-900 border-solid flex flex-row gap-[38px] items-center justify-start mt-[21px] p-3.5 rounded-[10px] w-full">
          <Img
            className="h-[46px] ml-[31px]"
            src="images/img_twemojiflagindia.svg"
            alt="twemojiflagindi"
          />
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-700"
            size="txtInterRegular40Bluegray700"
          >
            {props?.ninetyone}
          </Text>
        </div>
        <div className="md:h-[588px] h-[683px] ml-6 md:ml-[0] mt-2.5 relative w-[91%] md:w-full">
          <Img
            className="absolute h-[578px] object-cover right-[18%] top-[0] w-3/5"
            src="images/img_mywikiremovebgpreview.png"
            alt="mywikiremovebgp"
          />
          <div className="absolute bottom-[0] flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-start mx-auto w-full">
            <Img
              className="sm:flex-1 h-[101px] md:h-auto object-cover w-[21%] sm:w-full"
              src="images/img_paytmlogoremovebgpreview.png"
              alt="paytmlogoremove"
            />
            <Img
              className="sm:flex-1 h-[50px] md:h-auto ml-12 sm:ml-[0] object-cover rounded-[1px] w-[7%] sm:w-full"
              src="images/img_unnamed21.png"
              alt="unnamedTwentyOne"
            />
            <Img
              className="sm:flex-1 h-[168px] md:h-auto ml-5 sm:ml-[0] object-cover w-[33%] sm:w-full"
              src="images/img_111562googlepa.png"
              alt="111562googlepa"
            />
            <Img
              className="sm:flex-1 h-[119px] md:h-auto ml-5 sm:ml-[0] object-cover w-[31%] sm:w-full"
              src="images/img_bhimupiremovebgpreview.png"
              alt="bhimupiremovebg"
            />
          </div>
        </div>
        <Button
          className="!text-blue_gray-700 cursor-pointer font-inter font-medium leading-[normal] mb-[43px] min-w-[583px] sm:min-w-full md:ml-[0] ml-[186px] rounded-[57px] text-5xl sm:text-[38px] md:text-[44px] text-center"
          color="orange_300"
          size="2xl"
          variant="fill"
        >
          {props?.paynowbuttontext}
        </Button>
      </div>
    </>
  );
};

MentorPageOneCalender.defaultProps = {
  timeThree: "11 Aug 23 , 8:30 PM",
  username: "Name",
  useremail: "Email",
  userphonenumber: "Phone Number",
  ninetyone: "+91",
  paynowbuttontext: "Pay Now",
};

export default MentorPageOneCalender;
