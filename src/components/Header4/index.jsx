import React from "react";

import { Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const Header4 = (props) => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <div className="bg-white-A700 flex flex-col items-center justify-center p-1.5 shadow-bs7 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[94%] md:w-full">
            <Img
              className="h-[92px] md:h-auto object-cover"
              src="images/img_thinkwhatlogohighfinal.png"
              alt="thinkwhatlogohi"
            />
            <Input
              name="group237897"
              placeholder="Search"
              value={group237897value}
              onChange={(e) => setGroup237897value(e)}
              className="!placeholder:text-blue_gray-700 !text-blue_gray-700 font-inter font-medium leading-[normal] p-0 text-base text-center w-full"
              wrapClassName="flex md:mt-0 my-[23px] rounded-[23px] md:w-full"
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
                  src="images/img_home_blue_gray_700.svg"
                  alt="home"
                />
                <Img
                  className="h-5 md:ml-[0] ml-[60px] md:mt-0 mt-1 w-[19px]"
                  src="images/img_info.svg"
                  alt="info"
                />
                <Img
                  className="h-[25px] md:ml-[0] ml-[65px]"
                  src="images/img_call_blue_gray_700.svg"
                  alt="call"
                />
                <Img
                  className="h-[19px] md:ml-[0] ml-[92px] md:mt-0 mt-1 w-[18px]"
                  src="images/img_computer.svg"
                  alt="computer"
                />
                <Img
                  className="h-[22px] md:ml-[0] ml-[88px] md:mt-0 mt-[3px] w-[21px]"
                  src="images/img_vector.svg"
                  alt="vector"
                />
                <Img
                  className="h-5 md:ml-[0] ml-[81px] md:mt-0 mt-1"
                  src="images/img_file.svg"
                  alt="file"
                />
                <Img
                  className="h-[23px] md:ml-[0] ml-[95px] w-6"
                  src="images/img_vector_orange_300_23x24.svg"
                  alt="vector_One"
                />
              </div>
              <ul className="flex sm:flex-col flex-row md:hidden items-center justify-between mt-0.5 w-full common-row-list">
                <li>
                  <Text
                    className="hover:font-black text-blue_gray-700 text-center hover:text-orange-300 text-xl"
                    size="txtLatoRegular20"
                  >
                    Home
                  </Text>
                </li>
                <li>
                  <Text
                    className="hover:font-black text-blue_gray-700 text-center hover:text-orange-300 text-xl"
                    size="txtLatoMedium20"
                  >
                    About
                  </Text>
                </li>
                <li>
                  <Text
                    className="hover:font-black text-blue_gray-700 text-center hover:text-orange-300 text-xl"
                    size="txtLatoRegular20"
                  >
                    Contact
                  </Text>
                </li>
                <li>
                  <Text
                    className="hover:font-black text-blue_gray-700 text-center hover:text-orange-300 text-xl"
                    size="txtLatoMedium20"
                  >
                    Testimonals{" "}
                  </Text>
                </li>
                <li>
                  <Text
                    className="hover:font-black text-blue_gray-700 text-center hover:text-orange-300 text-xl"
                    size="txtLatoRegular20"
                  >
                    Events
                  </Text>
                </li>
                <li>
                  <Text
                    className="hover:font-black text-blue_gray-700 text-center hover:text-orange-300 text-xl"
                    size="txtLatoRegular20"
                  >
                    Placement
                  </Text>
                </li>
                <li>
                  <Text
                    className="hover:font-black text-center text-orange-300 text-xl"
                    size="txtLatoBlack20"
                  >
                    Mentorship
                  </Text>
                </li>
              </ul>
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
      </header>
    </>
  );
};

Header4.defaultProps = {};

export default Header4;
