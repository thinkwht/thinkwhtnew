import React from "react";

import { Img, Line, Text } from "components";

const FrontendDevelopmentPageColumnEighteen = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat h-[1003px] md:h-[1118px] relative w-full"
          style={{ backgroundImage: "url('images/img_group238014.png')" }}
        >
          <div className="h-[1003px] md:h-[1118px] m-auto w-full">
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
                          {props?.languageFour}
                        </Text>
                        <Img
                          className="absolute bottom-[0] h-[19px] left-[31%] object-cover w-[19px]"
                          src="images/img_love10291831.png"
                          alt="love10291831"
                        />
                      </div>
                      <Line className="bg-white-A700_7f h-px mt-[7px] w-full" />
                      <ul className="flex flex-col items-start justify-start mt-[21px] w-[93%] md:w-full">
                        <li>
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtInterBold20"
                          >
                            {props?.stayconnected}
                          </Text>
                        </li>
                        <li>
                          <div className="flex flex-row gap-5 items-start justify-start mt-[21px]">
                            <Img
                              className="h-[17px] mt-1"
                              src="images/img_vector_white_a700.svg"
                              alt="vector_Sixteen"
                            />
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtPoppinsMedium20"
                            >
                              {props?.email}
                            </Text>
                          </div>
                        </li>
                        <li>
                          <div className="flex flex-row gap-5 items-start justify-start mt-[7px]">
                            <Img
                              className="h-[17px] mt-1"
                              src="images/img_vector_white_a700.svg"
                              alt="vector_Seventeen"
                            />
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtPoppinsMedium20"
                            >
                              {props?.emailOne}
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
                          {props?.languageFive}
                        </Text>
                        <Text
                          className="text-base text-deep_orange-50"
                          size="txtInterRegular16Deeporange50"
                        >
                          {props?.beamentorexplorOne}
                        </Text>
                      </div>
                      <div className="flex flex-col md:gap-10 gap-[82px] items-start justify-start md:ml-[0] ml-[570px]">
                        <Text
                          className="text-base text-deep_orange-50 w-[77%] sm:w-full"
                          size="txtInterRegular16Deeporange50"
                        >
                          {props?.internshipscampOne}
                        </Text>
                        <Text
                          className="text-base text-deep_orange-50 w-full"
                          size="txtInterRegular16Deeporange50"
                        >
                          {props?.descriptionSix}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute right-[23%] text-base text-deep_orange-50 top-[9%] w-[16%] sm:w-full"
                  size="txtInterRegular16Deeporange50"
                >
                  {props?.descriptionSeven}
                </Text>
                <div className="absolute flex md:flex-col flex-row md:gap-5 items-start justify-start right-[9%] top-[1%] w-1/2">
                  <Text
                    className="mb-0.5 text-white-A700 text-xl"
                    size="txtInterSemiBold20"
                  >
                    {props?.oursolutions}
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[149px] md:mt-0 mt-0.5 text-white-A700 text-xl"
                    size="txtInterSemiBold20"
                  >
                    {props?.trainingcoursesOne}
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[121px] text-white-A700 text-xl"
                    size="txtInterSemiBold20"
                  >
                    {props?.mentorshipOne}
                  </Text>
                </div>
                <div className="absolute flex flex-col md:gap-10 gap-[101px] items-start justify-start right-[1%] top-[27%]">
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtInterSemiBold20"
                  >
                    {props?.apply}
                  </Text>
                  <Text
                    className="text-white-A700 text-xl w-full"
                    size="txtInterSemiBold20"
                  >
                    {props?.placementguaranThree}
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
                      {props?.mobileno}
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[346px] sm:mt-0 mt-2 text-white-A700 text-xl"
                      size="txtInterSemiBold20"
                    >
                      {props?.placementstudenOne}
                    </Text>
                  </div>
                  <div className="flex flex-row sm:gap-10 gap-[420px] items-start justify-end md:ml-[0] ml-[108px] w-[82%] md:w-full">
                    <Img
                      className="h-4 mt-[3px]"
                      src="images/img_vector_white_a700_16x22.svg"
                      alt="vector_Eighteen"
                    />
                    <Text
                      className="text-base text-deep_orange-50"
                      size="txtInterRegular16Deeporange50"
                    >
                      {props?.ourplacedstudenOne}
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
                    {props?.participate}
                  </Text>
                  <Text
                    className="text-base text-deep_orange-50 w-[99%] sm:w-full"
                    size="txtInterRegular16Deeporange50"
                  >
                    {props?.uiuxcontesthackOne}
                  </Text>
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtInterSemiBold20"
                  >
                    {props?.languageSix}
                  </Text>
                  <Text
                    className="text-base text-deep_orange-50 w-full"
                    size="txtInterRegular16Deeporange50"
                  >
                    {props?.applynoweducatoOne}
                  </Text>
                </div>
                <div className="absolute bottom-[11%] flex flex-col gap-[9px] items-start justify-start left-[0]">
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtInterBold20"
                  >
                    {props?.stayupdated}
                  </Text>
                  <Text
                    className="text-base text-white-A700 w-full"
                    size="txtInterMedium16"
                  >
                    {props?.wellsendyouupdaOne}
                  </Text>
                </div>
                <Line className="absolute bg-white-A700_7f bottom-[28%] h-px left-[0] w-1/4" />
                <div className="absolute bg-white-A700 bottom-[0] flex flex-col items-start justify-end left-[0] p-3 rounded-[10px]">
                  <Text
                    className="md:ml-[0] ml-[5px] text-[15px] text-blue_gray-400"
                    size="txtInterRegular15Bluegray400"
                  >
                    {props?.signupforour}
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
                      {props?.ourproperties}
                    </Text>
                    <Text
                      className="text-base text-deep_orange-50 w-full"
                      size="txtInterRegular16Deeporange50"
                    >
                      {props?.descriptionEight}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[51%] md:w-full">
                    <ul className="flex flex-col items-start justify-start w-full">
                      <li>
                        <ul className="flex flex-row items-start justify-between">
                          <li>
                            <Text
                              className="text-base text-deep_orange-50"
                              size="txtInterRegular16Deeporange50"
                            >
                              {props?.homeTwo}
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
                              {props?.languageSeven}
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
                              {props?.languageEight}
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
                              {props?.careers}
                            </Text>
                          </li>
                          <li>
                            <Text
                              className="bg-green-400 h-[23px] justify-center mt-0.5 pt-[5px] px-[11px] rounded-[11px] text-[13px] text-white-A700"
                              size="txtInterSemiBold13"
                            >
                              {props?.group851}
                            </Text>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul className="flex flex-row items-start justify-between mt-[7px]">
                          <li>
                            <Text
                              className="text-base text-deep_orange-50"
                              size="txtInterRegular16Deeporange50"
                            >
                              {props?.disclaimer}
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
                              {props?.faqsOne}
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
                              {props?.blogs}
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
                              {props?.eventsTwo}
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
                              {props?.testimonals}
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
                            {props?.courses}
                          </Text>
                          <Line className="bg-white-A700 h-[18px] sm:h-px mb-0.5 ml-3 sm:ml-[0] sm:w-full w-px" />
                          <Text
                            className="sm:ml-[0] ml-[13px] text-base text-deep_orange-50"
                            size="txtInterRegular16Deeporange50"
                          >
                            {props?.termandcondition}
                          </Text>
                          <Line className="bg-white-A700 h-[18px] sm:h-px mb-0.5 sm:ml-[0] ml-[11px] sm:w-full w-px" />
                          <Text
                            className="ml-3 sm:ml-[0] text-base text-deep_orange-50"
                            size="txtInterRegular16Deeporange50"
                          >
                            {props?.privacypolicy}
                          </Text>
                          <Line className="bg-white-A700 h-[18px] sm:h-px mb-0.5 ml-2.5 sm:ml-[0] sm:w-full w-px" />
                        </div>
                      </li>
                      <li>
                        <Text
                          className="mt-[11px] text-base text-deep_orange-50"
                          size="txtInterRegular16Deeporange50"
                        >
                          {props?.refundandcancelOne}
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
                    {props?.shareyourstory}
                  </Text>
                </div>
                <div className="bg-blue_gray-700 flex flex-col items-end justify-start p-1.5 rounded-[10px]">
                  <Text
                    className="mb-[7px] mt-[11px] text-[10px] text-white-A700"
                    size="txtInterSemiBold10"
                  >
                    {props?.publishoppurtunOne}
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute h-[1003px] inset-y-[0] left-[0] my-auto w-[36%] sm:w-full">
              <div className="h-[1003px] m-auto w-full">
                <Img
                  className="absolute h-[1003px] inset-[0] justify-center m-auto object-cover w-full"
                  alt="4799d32e64cadSeventySix"
                  src="props?.p4799d32e64cadseventysix"
                />
                <div className="absolute bg-blue_gray-700 bottom-[3%] flex flex-col items-end justify-end left-[11%] p-[9px] rounded-[10px]">
                  <Text
                    className="mr-[25px] mt-0.5 text-[10px] text-white-A700"
                    size="txtInterSemiBold10"
                  >
                    {props?.p100safeandsecurone}
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[4%] flex flex-col gap-[47px] justify-start left-[17%] w-[61%]">
                <Img
                  className="h-[13px] ml-40 md:ml-[0]"
                  src="images/img_volume_white_a700.svg"
                  alt="volume_One"
                />
                <div className="flex flex-row items-start justify-between w-full">
                  <Img
                    className="h-[200px] mb-[5px]"
                    src="images/img_group_white_a700_200x19.svg"
                    alt="group_Four"
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
          <div className="absolute bottom-[5%] flex flex-col gap-10 items-center justify-start right-[0] w-[65%]">
            <Line className="bg-white-A700_7f h-px w-full" />
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[91%] md:w-full">
              <Text
                className="md:mt-0 mt-0.5 text-sm text-white-A700"
                size="txtInterSemiBold14"
              >
                {props?.priceTwo}
              </Text>
              <Text
                className="mb-0.5 text-sm text-white-A700"
                size="txtInterSemiBold14"
              >
                {props?.languageNine}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FrontendDevelopmentPageColumnEighteen.defaultProps = {
  languageFour: "Built with       in India for the world",
  stayconnected: "Stay Connected",
  email: "info@thinkwht.com",
  emailOne: "admissions@thinkwht.com",
  languageFive: (
    <>
      Hiring <br />
      <br />
      Engagement{" "}
    </>
  ),
  beamentorexplorOne: (
    <>
      Be a Mentor
      <br />
      <br />
      Explore Mentors
      <br />
      <br />
      Mentorship FAQs
    </>
  ),
  internshipscampOne: (
    <>
      Internships
      <br />
      <br />
      Campus Ambassador
    </>
  ),
  descriptionSix: (
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
  ),
  descriptionSeven: (
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
  ),
  oursolutions: "Our Solutions",
  trainingcoursesOne: "Training Courses",
  mentorshipOne: "Mentorship",
  apply: "Apply",
  placementguaranThree: "Placement Guarantee Programme",
  mobileno: "+91-6387889987 ",
  placementstudenOne: "Placement Student",
  ourplacedstudenOne: "Our Placed Students",
  participate: "Participate",
  uiuxcontesthackOne: (
    <>
      UI/UX Contest
      <br />
      <br />
      Hackathons
    </>
  ),
  languageSix: " Educators",
  applynoweducatoOne: (
    <>
      Apply Now <br />
      <br />
      Educator T&C
    </>
  ),
  stayupdated: "Stay Updated",
  wellsendyouupdaOne: (
    <>
      We&#39;ll send you updates on the latest opportunities to showcase your
      talent and get hired and rewarded regularly.
    </>
  ),
  signupforour: "Sign up for our newsletter",
  ourproperties: "Our Properties",
  descriptionEight: (
    <>
      Campus Hiring Meet 2023 <br />
      <br />
      ThinkWht Awards 2023 <br />
      <br />
      ThinkWht Community Head
    </>
  ),
  homeTwo: "Home",
  languageSeven: "About us ",
  languageEight: "Contact us ",
  careers: "Careers",
  group851: "We’re hiring",
  disclaimer: "Disclaimer",
  faqsOne: "FAQs",
  blogs: "Blogs",
  eventsTwo: "Events",
  testimonals: "Testimonals",
  courses: "Courses",
  termandcondition: "Terms and Conditions",
  privacypolicy: "Privacy Policy",
  refundandcancelOne: "Refund and Cancellation",
  shareyourstory: "Share your story now",
  publishoppurtunOne: "Publish Oppurtunities",
  p4799d32e64cadseventysix: "images/img_4799d32e64cad76.png",
  p100safeandsecurone: "100 % safe and secure payments",
};

export default FrontendDevelopmentPageColumnEighteen;
