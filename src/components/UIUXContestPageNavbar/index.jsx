import React from "react";

import { Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const UIUXContestPageNavbar = (props) => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Img
              className="h-[92px] md:h-auto object-cover"
              src="images/img_thinkwhatlogohighfinal.png"
              alt="thinkwhatlogohi_One"
            />
            <Input
              name="group237897"
              placeholder="Search"
              value={group237897value}
              onChange={(e) => setGroup237897value(e)}
              className="!placeholder:text-blue_gray-700 !text-blue_gray-700 font-inter font-medium leading-[normal] p-0 text-base text-center w-full"
              wrapClassName="flex md:flex-1 md:mt-0 my-[23px] rounded-[23px] md:w-full"
              prefix={
                <div className="h-4 mt-px mb-0.5 mr-5 w-4 bg-orange-300">
                  <Img
                    className="cursor-pointer h-4 my-auto"
                    src="images/img_search_orange_300.svg"
                    alt="search"
                  />
                </div>
              }
              suffix={
                <CloseSVG
                  fillColor="#275473"
                  className="cursor-pointer h-4 my-auto"
                  onClick={() => setGroup237897value("")}
                  style={{
                    visibility:
                      group237897value?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={16}
                  width={16}
                  viewBox="0 0 16 16"
                />
              }
              color="white_A700"
              size="sm"
              variant="fill"
            ></Input>
            <div className="flex flex-col items-center justify-start">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[92%] md:w-full">
                <Img
                  className="h-[18px] md:mt-0 mt-[5px]"
                  alt="home"
                  src="props?.homeimage"
                />
                <Img
                  className="h-5 md:ml-[0] ml-[60px] md:mt-0 mt-1 w-[19px]"
                  alt="info"
                  src="props?.infoimage"
                />
                <Img
                  className="h-[25px] md:ml-[0] ml-[65px]"
                  alt="call"
                  src="props?.callimage"
                />
                <Img
                  className="h-[19px] md:ml-[0] ml-[92px] md:mt-0 mt-1 w-[18px]"
                  src="images/img_computer.svg"
                  alt="computer"
                />
                <Img
                  className="h-[22px] md:ml-[0] ml-[88px] md:mt-0 mt-[3px] w-[21px]"
                  alt="download"
                  src="props?.downloadimage"
                />
                <Img
                  className="h-5 md:ml-[0] ml-[81px] md:mt-0 mt-1"
                  src="images/img_file.svg"
                  alt="file"
                />
                <Img
                  className="h-[23px] md:ml-[0] ml-[95px] w-6"
                  alt="reply"
                  src="props?.replyimage"
                />
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[3px] w-full">
                <Text
                  className="text-blue_gray-700 text-center text-xl"
                  size="txtLatoRegular20"
                >
                  {props?.hometext}
                </Text>
                <Text
                  className="text-blue_gray-700 text-center text-xl"
                  size="txtLatoMedium20"
                >
                  {props?.abouttext}
                </Text>
                <Text
                  className="text-blue_gray-700 text-center text-xl"
                  size="txtLatoRegular20"
                >
                  {props?.contacttext}
                </Text>
                <Text
                  className="text-blue_gray-700 text-center text-xl"
                  size="txtLatoMedium20"
                >
                  {props?.testimonalstext}
                </Text>
                <Text
                  className="text-center text-orange-300 text-xl"
                  size="txtLatoBlack20"
                >
                  {props?.eventstext}
                </Text>
                <Text
                  className="text-blue_gray-700 text-center text-xl"
                  size="txtLatoRegular20"
                >
                  {props?.placementtext}
                </Text>
                <Text
                  className="text-blue_gray-700 text-center text-xl"
                  size="txtLatoRegular20"
                >
                  {props?.mentorshiptext}
                </Text>
              </div>
            </div>
            <div className="bg-orange-300 flex flex-col items-center justify-start md:mt-0 my-[7px] pb-[5px] rounded-[38px]">
              <Img
                className="h-[72px] md:h-auto object-cover rounded-tl-[38px] rounded-tr-[38px] w-full"
                src="images/img_1.png"
                alt="One"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

UIUXContestPageNavbar.defaultProps = {
  homeimage: "images/img_home_blue_gray_700.svg",
  infoimage: "images/img_info.svg",
  callimage: "images/img_call_blue_gray_700.svg",
  downloadimage: "images/img_download.svg",
  replyimage: "images/img_reply.svg",
  hometext: "Home",
  abouttext: "About",
  contacttext: "Contact",
  testimonalstext: "Testimonals ",
  eventstext: "Events",
  placementtext: "Placement",
  mentorshiptext: "Mentorship",
};

export default UIUXContestPageNavbar;
