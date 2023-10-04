import React from "react";

import { Img, Line, Text } from "components";

const Footer4 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div
          className="bg-cover bg-no-repeat h-[1003px] md:h-[1118px] relative w-full"
          style={{ backgroundImage: "url('images/img_group238014.png')" }}
        >
          <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[3%] w-[97%]">
            <div className="sm:h-[566px] h-[629px] md:h-[731px] relative w-[99%] md:w-full">
              <div className="absolute bottom-[1%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[119px] w-1/4 md:w-full">
                    <div className="h-[25px] relative w-[96%]">
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-white-A700 text-xl w-max"
                        size="txtInterSemiBold20"
                      >
                        Built with in India for the world
                      </Text>
                      <Img
                        className="absolute bottom-[0] h-[19px] left-[31%] object-cover w-[19px]"
                        src="images/img_love10291831.png"
                        alt="love10291831"
                      />
                    </div>
                    <Line className="bg-white-A700_7f h-px mt-[7px] w-full" />
                    <ul className="flex flex-col items-start justify-start mt-[21px] w-[93%] md:w-full common-column-list">
                      <li>
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtInterBold20"
                        >
                          Stay Connected
                        </Text>
                      </li>
                      <li>
                        <div className="flex flex-row gap-5 items-start justify-start mt-[21px]">
                          <Img
                            className="h-[17px] mt-1"
                            src="images/img_vector_white_a700.svg"
                            alt="vector_Four"
                          />
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtPoppinsMedium20"
                          >
                            info@thinkwht.com
                          </Text>
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-row gap-5 items-start justify-start mt-[7px]">
                          <Img
                            className="h-[17px] mt-1"
                            src="images/img_vector_white_a700.svg"
                            alt="vector_Five"
                          />
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtPoppinsMedium20"
                          >
                            admissions@thinkwht.com
                          </Text>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[37px] justify-start w-3/5 md:w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between mr-[73px] w-[91%] md:w-full">
                      <Text
                        className="text-base text-deep_orange-50"
                        size="txtInterRegular16Deeporange50"
                      >
                        <>
                          Hiring <br />
                          <br />
                          Engagement{" "}
                        </>
                      </Text>
                      <Text
                        className="text-base text-deep_orange-50"
                        size="txtInterRegular16Deeporange50"
                      >
                        <>
                          Be a Mentor
                          <br />
                          <br />
                          Explore Mentors
                          <br />
                          <br />
                          Mentorship FAQs
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col md:gap-10 gap-[82px] items-start justify-start md:ml-[0] ml-[570px]">
                      <Text
                        className="text-base text-deep_orange-50"
                        size="txtInterRegular16Deeporange50"
                      >
                        <>
                          Internships
                          <br />
                          <br />
                          Campus Ambassador
                        </>
                      </Text>
                      <Text
                        className="text-base text-deep_orange-50"
                        size="txtInterRegular16Deeporange50"
                      >
                        <>
                          Mern-Stack Development <br />
                          <br />
                          Dev Ops Engineering <br />
                          <br />
                          Full-Stack Development <br />
                          <br />
                          Master in Java Script <br />
                          <br />
                          Human Resource (HR)
                          <br />
                          <br />
                          Data Science
                          <br />
                          <br />
                          Business Development Associate (BDA)
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="absolute right-[23%] text-base text-deep_orange-50 top-[9%]"
                size="txtInterRegular16Deeporange50"
              >
                <>
                  UI/UX
                  <br />
                  <br />
                  DSA <br />
                  <br />
                  Java <br />
                  <br />
                  React JS <br />
                  <br />
                  Angular JS <br />
                  <br />
                  Google Cloud
                  <br />
                  <br />
                  Digital Marketing <br />
                  <br />
                  Flutter Development
                  <br />
                  <br />
                  Frontend Development
                  <br />
                  <br />
                  Backend Development{" "}
                </>
              </Text>
              <div className="absolute flex md:flex-col flex-row md:gap-5 items-start justify-start right-[9%] top-[1%] w-1/2">
                <Text
                  className="mb-0.5 text-white-A700 text-xl"
                  size="txtInterSemiBold20"
                >
                  Our Solutions
                </Text>
                <Text
                  className="md:ml-[0] ml-[149px] md:mt-0 mt-0.5 text-white-A700 text-xl"
                  size="txtInterSemiBold20"
                >
                  Training Courses
                </Text>
                <Text
                  className="md:ml-[0] ml-[121px] text-white-A700 text-xl"
                  size="txtInterSemiBold20"
                >
                  Mentorship
                </Text>
              </div>
              <div className="absolute flex flex-col md:gap-10 gap-[101px] items-start justify-start right-[1%] top-[27%]">
                <Text
                  className="text-white-A700 text-xl"
                  size="txtInterSemiBold20"
                >
                  Apply
                </Text>
                <Text
                  className="text-white-A700 text-xl w-full"
                  size="txtInterSemiBold20"
                >
                  Placement Guarantee Programme
                </Text>
              </div>
              <div className="absolute bottom-[30%] flex flex-col gap-[15px] justify-start left-[1%] w-[55%]">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <Img
                    className="h-6"
                    src="images/img_call_white_a700.svg"
                    alt="call_One"
                  />
                  <Text
                    className="mb-2 ml-3 sm:ml-[0] text-white-A700 text-xl"
                    size="txtInterMedium20"
                  >
                    +91-6387889987{" "}
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[346px] sm:mt-0 mt-2 text-white-A700 text-xl"
                    size="txtInterSemiBold20"
                  >
                    Placement Student
                  </Text>
                </div>
                <div className="flex flex-row sm:gap-10 gap-[420px] items-start justify-end md:ml-[0] ml-[108px] w-[82%] md:w-full">
                  <Img
                    className="h-4 mt-[3px]"
                    src="images/img_vector_white_a700_16x22.svg"
                    alt="vector_Six"
                  />
                  <Text
                    className="text-base text-deep_orange-50"
                    size="txtInterRegular16Deeporange50"
                  >
                    Our Placed Students
                  </Text>
                </div>
              </div>
              <Img
                className="absolute h-48 left-[3%] object-cover top-[0] w-[17%]"
                src="images/img_thinkwhatlogohighfinal.png"
                alt="thinkwhatlogohi_Two"
              />
              <div className="absolute flex flex-col gap-2.5 items-start justify-start left-[41%] top-[22%]">
                <Text
                  className="text-white-A700 text-xl"
                  size="txtInterSemiBold20"
                >
                  Participate
                </Text>
                <Text
                  className="text-base text-deep_orange-50"
                  size="txtInterRegular16Deeporange50"
                >
                  <>
                    UI/UX Contest
                    <br />
                    <br />
                    Hackathons
                  </>
                </Text>
                <Text
                  className="text-white-A700 text-xl"
                  size="txtInterSemiBold20"
                >
                  {" "}
                  Educators
                </Text>
                <Text
                  className="text-base text-deep_orange-50"
                  size="txtInterRegular16Deeporange50"
                >
                  <>
                    Apply Now <br />
                    <br />
                    Educator T&C
                  </>
                </Text>
              </div>
              <div className="absolute bottom-[11%] flex flex-col gap-[9px] items-start justify-start left-[0]">
                <Text className="text-white-A700 text-xl" size="txtInterBold20">
                  Stay Updated
                </Text>
                <Text
                  className="text-base text-white-A700 w-full"
                  size="txtInterMedium16"
                >
                  <>
                    We&#39;ll send you updates on the latest opportunities to
                    showcase your talent and get hired and rewarded regularly.
                  </>
                </Text>
              </div>
              <Line className="absolute bg-white-A700_7f bottom-[28%] h-px left-[0] w-1/4" />
              <div className="absolute bg-white-A700 bottom-[0] flex flex-col items-start justify-end left-[0] p-3 rounded-[10px]">
                <Text
                  className="md:ml-[0] ml-[5px] text-[15px] text-blue_gray-400"
                  size="txtInterRegular15Bluegray400"
                >
                  Sign up for our newsletter
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-7 items-center justify-start md:ml-[0] ml-[455px] mt-[19px] w-[68%] md:w-full">
              <Line className="bg-white-A700_7f h-px w-full" />
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[92%] md:w-full">
                <div className="flex flex-col gap-[13px] items-start justify-start">
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtInterSemiBold20"
                  >
                    Our Properties
                  </Text>
                  <Text
                    className="text-base text-deep_orange-50"
                    size="txtInterRegular16Deeporange50"
                  >
                    <>
                      Campus Hiring Meet 2023 <br />
                      <br />
                      ThinkWht Awards 2023 <br />
                      <br />
                      ThinkWht Community Head
                    </>
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[51%] md:w-full">
                  <ul className="flex flex-col items-start justify-start w-full common-column-list">
                    <li>
                      <ul className="flex flex-row items-start justify-between md:w-full common-column-list">
                        <li>
                          <Text
                            className="text-base text-deep_orange-50"
                            size="txtInterRegular16Deeporange50"
                          >
                            Home
                          </Text>
                        </li>
                        <li>
                          <Line className="bg-white-A700 h-[18px] mb-[5px] mt-0.5 w-px" />
                        </li>
                        <li>
                          <Text
                            className="mt-0.5 text-base text-deep_orange-50"
                            size="txtInterRegular16Deeporange50"
                          >
                            About us{" "}
                          </Text>
                        </li>
                        <li>
                          <Line className="bg-white-A700 h-[18px] mb-[5px] mt-0.5 w-px" />
                        </li>
                        <li>
                          <Text
                            className="text-base text-deep_orange-50"
                            size="txtInterRegular16Deeporange50"
                          >
                            Contact us{" "}
                          </Text>
                        </li>
                        <li>
                          <Line className="bg-white-A700 h-[18px] mb-[5px] mt-0.5 w-px" />
                        </li>
                        <li>
                          <Text
                            className="text-base text-deep_orange-50"
                            size="txtInterRegular16Deeporange50"
                          >
                            Careers
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="bg-green-400 h-[23px] justify-center mt-0.5 pt-[5px] px-[11px] rounded-[11px] text-[13px] text-white-A700"
                            size="txtInterSemiBold13"
                          >
                            We’re hiring
                          </Text>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul className="flex flex-row items-start justify-between mt-[7px] md:w-full common-column-list">
                        <li>
                          <Text
                            className="text-base text-deep_orange-50"
                            size="txtInterRegular16Deeporange50"
                          >
                            Disclaimer
                          </Text>
                        </li>
                        <li>
                          <Line className="bg-white-A700 h-[18px] mb-0.5 w-px" />
                        </li>
                        <li>
                          <Text
                            className="text-base text-deep_orange-50"
                            size="txtInterRegular16Deeporange50"
                          >
                            FAQs
                          </Text>
                        </li>
                        <li>
                          <Line className="bg-white-A700 h-[18px] mb-0.5 w-px" />
                        </li>
                        <li>
                          <Text
                            className="text-base text-deep_orange-50"
                            size="txtInterRegular16Deeporange50"
                          >
                            Blogs
                          </Text>
                        </li>
                        <li>
                          <Line className="bg-white-A700 h-[18px] mb-0.5 w-px" />
                        </li>
                        <li>
                          <Text
                            className="text-base text-deep_orange-50"
                            size="txtInterRegular16Deeporange50"
                          >
                            Events
                          </Text>
                        </li>
                        <li>
                          <Line className="bg-white-A700 h-[18px] mb-0.5 w-px" />
                        </li>
                        <li>
                          <Text
                            className="text-base text-deep_orange-50"
                            size="txtInterRegular16Deeporange50"
                          >
                            Testimonals
                          </Text>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[11px]">
                        <Text
                          className="text-base text-deep_orange-50"
                          size="txtInterRegular16Deeporange50"
                        >
                          Courses
                        </Text>
                        <Line className="bg-white-A700 h-[18px] sm:h-px mb-0.5 ml-3 sm:ml-[0] sm:w-full w-px" />
                        <Text
                          className="sm:ml-[0] ml-[13px] text-base text-deep_orange-50"
                          size="txtInterRegular16Deeporange50"
                        >
                          Terms and Conditions
                        </Text>
                        <Line className="bg-white-A700 h-[18px] sm:h-px mb-0.5 sm:ml-[0] ml-[11px] sm:w-full w-px" />
                        <Text
                          className="ml-3 sm:ml-[0] text-base text-deep_orange-50"
                          size="txtInterRegular16Deeporange50"
                        >
                          Privacy Policy
                        </Text>
                        <Line className="bg-white-A700 h-[18px] sm:h-px mb-0.5 ml-2.5 sm:ml-[0] sm:w-full w-px" />
                      </div>
                    </li>
                    <li>
                      <Text
                        className="mt-[11px] text-base text-deep_orange-50"
                        size="txtInterRegular16Deeporange50"
                      >
                        Refund and Cancellation
                      </Text>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Line className="bg-white-A700_7f h-px mt-[54px] w-1/4" />
          </div>
          <div className="absolute bottom-[27%] flex flex-col justify-start left-[4%] w-[23%]">
            <div className="flex flex-row items-start justify-start md:ml-[0] ml-[5px] w-[27%] md:w-full">
              <Img
                className="h-4 mt-[3px] w-4"
                src="images/img_camera.svg"
                alt="camera"
              />
              <Img
                className="h-[19px] ml-[21px] w-[18px]"
                src="images/img_linkedin.svg"
                alt="linkedin"
              />
              <Img
                className="h-[19px] ml-[19px]"
                src="images/img_facebook.svg"
                alt="facebook"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[47px] items-end justify-start md:ml-[0] ml-[277px] mt-36 p-2.5 rounded-bl-[10px] rounded-br-[10px] w-[46px] md:w-full"
              style={{ backgroundImage: "url('images/img_group876.svg')" }}
            >
              <Img
                className="h-5 my-0.5"
                src="images/img_send.svg"
                alt="send"
              />
            </div>
            <div className="flex flex-row gap-7 items-center justify-between mt-5 w-full">
              <div className="bg-blue_gray-700 flex flex-col items-center justify-end p-3.5 rounded-[10px]">
                <Text
                  className="mt-0.5 text-[11px] text-white-A700"
                  size="txtInterSemiBold11"
                >
                  Share your story now
                </Text>
              </div>
              <div className="bg-blue_gray-700 flex flex-col items-end justify-start p-1.5 rounded-[10px]">
                <Text
                  className="mb-[7px] mt-[11px] text-[10px] text-white-A700"
                  size="txtInterSemiBold10"
                >
                  Publish Oppurtunities
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute h-[1003px] inset-y-[0] left-[0] my-auto w-[36%] sm:w-full">
            <div className="h-[1003px] m-auto w-full">
              <Img
                className="h-[1003px] m-auto object-cover w-full"
                src="images/img_4799d32e64cad76_1003x509.png"
                alt="4799d32e64cadSeventySix"
              />
              <div className="absolute bg-blue_gray-700 bottom-[3%] flex flex-col items-end justify-end left-[11%] p-[9px] rounded-[10px]">
                <Text
                  className="mr-[25px] mt-0.5 text-[10px] text-white-A700"
                  size="txtInterSemiBold10"
                >
                  100 % safe and secure payments
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[4%] flex flex-col gap-[47px] justify-start left-[17%] w-[61%]">
              <Img
                className="h-[13px] ml-40 md:ml-[0]"
                src="images/img_volume_white_a700.svg"
                alt="volume"
              />
              <div className="flex flex-row items-start justify-between w-full">
                <Img
                  className="h-[200px] mb-[5px]"
                  src="images/img_group_white_a700_200x19.svg"
                  alt="group_Three"
                />
                <Img
                  className="h-6 md:h-auto mt-[182px] object-cover"
                  src="images/img_download1removebgpreview.png"
                  alt="download1remove"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer4.defaultProps = {};

export default Footer4;
