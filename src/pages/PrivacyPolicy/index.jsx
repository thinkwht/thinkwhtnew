import React from "react";

import { Img, Input, Line, Text } from "components";
import Footer3 from "components/Footer3";
import TermsConditionsNavbar from "components/TermsConditionsNavbar";

import { CloseSVG } from "../../assets/images";

const PrivacyPolicyPage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="sm:h-[655px] md:h-[671px] h-[720px] md:px-5 relative w-full">
            <div className="absolute h-[655px] right-[0] top-[0] w-[44%] md:w-full">
              <Img
                className="h-[655px] m-auto object-cover rotate-[-148deg] w-full"
                src="images/img_ellipse4_6.png"
                alt="ellipseFour"
              />
              <Img
                className="absolute bottom-[13%] h-[431px] left-[13%] object-cover w-[68%]"
                src="images/img_imac.png"
                alt="imac"
              />
            </div>
            <div className="absolute flex flex-col font-inter inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
              <TermsConditionsNavbar className="bg-white-A700 flex flex-col items-center justify-start p-1.5 shadow-bs7 w-full" />
            </div>
            <div className="absolute flex flex-col font-inter items-center justify-start left-[5%] top-[34%]">
              <Text
                className="md:text-5xl text-[70px] text-blue-800_01"
                size="txtInterBlack70Blue80001"
              >
                Privacy Policy
              </Text>
            </div>
            <Text
              className="absolute bottom-[22%] left-[5%] text-4xl sm:text-[32px] md:text-[34px] text-justify text-orange-300"
              size="txtPoppinsMedium36"
            >
              Privacy Policy
            </Text>
            <Text
              className="absolute bottom-[0] inset-x-[0] mx-auto text-blue_gray-700_08 text-justify text-xl w-[90%] sm:w-full"
              size="txtPoppinsRegular20Bluegray70008"
            >
              At Unstop.com, we recognize that privacy is important. This
              Privacy Policy applies to the use of website, contents and all of
              the services offered by Unstop.com. In addition, where more
              detailed information is needed to explain our privacy practices,
              we post supplementary privacy notices to describe how particular
              services process personal information, which can be found along
              with the particular services.
            </Text>
            <Text
              className="absolute bottom-[42%] left-[5%] text-blue_gray-700_07 text-justify text-xl w-[56%] sm:w-full"
              size="txtPoppinsRegular20Bluegray70007"
            >
              Every human or organisation has three levels of openness: Public,
              Personal and Private. We do believe in your rights to privacy.
            </Text>
          </div>
          <Text
            className="mt-[30px] text-blue_gray-700_07 text-justify text-xl w-[90%] sm:w-full"
            size="txtPoppinsRegular20Bluegray70007"
          >
            <span className="text-blue_gray-700_07 font-poppins font-normal">
              This policy describes how FLIVE Consulting Private Limited, parent
              company of Unstop.com (also referred to as “Unstop“, “we”, “our”
              or “us”) will make use of your data when you use the website
            </span>
            <span className="text-blue-800_01 font-poppins font-normal"> </span>
            <a
              href="javascript:"
              className="text-blue-800_01 font-poppins font-normal underline"
            >
              https://thinkwht.com/
            </a>
            <span className="text-blue-800_01 font-poppins font-normal"> </span>
            <span className="text-blue_gray-700_07 font-poppins font-normal">
              (“the Platform”).
            </span>
          </Text>
          <Text
            className="mt-[35px] text-blue_gray-700_07 text-justify text-xl w-[91%] sm:w-full"
            size="txtPoppinsRegular20Bluegray70007"
          >
            The Platform is a gamified engagements, hiring and opportunity
            listing and hosting technology platform which enables clients to
            organise events and connects them with Participants/Candidates for
            providing them services through the Platform which include the
            following:
          </Text>
          <Text
            className="mt-6 text-blue_gray-700_07 text-justify text-xl"
            size="txtPoppinsRegular20Bluegray70007"
          >
            <>
              Limited, non-exclusive, non-transferable, non-sublicensable
              license to clients to use the Platform to list, organise, conduct,
              and administer different kind of opportunities like quizzes,
              hackathons, simulations or any other event type available on the
              Platform and provide administrative features to interact with
              Participants;
              <br />
              Limited, non-exclusive, non-transferable, non-sublicensable
              license to clients to use the Platform to hire and conduct the
              recruitment process like assessments, group discussions,
              interviews and anything else that is available as a
              service/product on the Platform and provide administrative
              features to interact with candidates;
              <br />
              Enabling clients to promote, market and advertise their
              opportunities by creating a promotional page of their opportunity
              and to monetize their opportunity;
              <br />
              Limited, non-exclusive, non-transferable, non-sublicensable
              license to Participants to register, interact, attend and
              participate in opportunities conducted by clients through the
              Platform, and/or
              <br />
              Any other services ancillary to the above Services.
            </>
          </Text>
        </div>
        <Text
          className="md:ml-[0] ml-[73px] mr-[1254px] mt-[75px] text-4xl sm:text-[32px] md:text-[34px] text-justify text-orange-300"
          size="txtPoppinsMedium36"
        >
          Scope
        </Text>
        <Text
          className="md:ml-[0] ml-[72px] mr-[473px] mt-[41px] text-2xl md:text-[22px] text-blue_gray-700_07 text-justify sm:text-xl"
          size="txtPoppinsRegular24Bluegray70007"
        >
          This policy applies to ThinkWht’s contents, products, services and
          websites.
        </Text>
        <div className="flex flex-col items-center mt-[31px] md:px-10 sm:px-5 px-[73px] w-full">
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-700_07 text-justify sm:text-xl w-full"
            size="txtPoppinsRegular24Bluegray70007"
          >
            The Privacy Policy does not apply to practices of companies and
            institutions that FLIVE Consulting Private Limited (Unstop) does not
            own or control, or to the people that FLIVE Consulting Private
            Limited (Unstop) does not employ or manage.
          </Text>
        </div>
        <Text
          className="md:ml-[0] ml-[73px] mr-[812px] mt-[52px] text-4xl sm:text-[32px] md:text-[34px] text-justify text-orange-300"
          size="txtPoppinsMedium36"
        >
          Information collection and use
        </Text>
        <div className="flex flex-col items-center mt-[53px] md:px-10 sm:px-5 px-[55px] w-full">
          <Text
            className="text-2xl md:text-[22px] text-blue-800_01 text-justify sm:text-xl w-[98%] sm:w-full"
            size="txtPoppinsRegular24Blue80001"
          >
            We offer a number of services that require you to register for an
            account or provide any personal information to us. In order to
            provide our full range of services, we may collect the following
            types of information:
          </Text>
          <Text
            className="mt-16 text-2xl md:text-[22px] text-blue_gray-700_07 text-justify sm:text-xl"
            size="txtPoppinsRegular24Bluegray70007"
          >
            <>
              full name, image (profile picture), e-mail address, residential
              address (including post code, city, country), mobile/telephone
              number, login details (including username), title or designation,
              date of birth, gender, what are you doing, and name of the
              organisation, if applicable;
              <br />
              tracking information such as, but not limited to the IP address of
              your device and device ID when connected to the internet
              (including the operating system), your browser information, time
              zone setting and location, internet service provider, type of
              camera, microphone or speakers and other information associated
              with your interaction with the Platform such as details of your
              Platform usage for analytics, your browsing behaviour and the
              pages you visit;
              <br />
              your responses to assessments like quizzes, hackathons, document
              submissions, simulation games, treasure hunt, case sim games,
              brand stories and any such gamified assessment for any opportunity
              or job listing;
              <br />
              your payment details and other information regarding payments you
              make available to us, where you buy a ticket (in case you are a
              Participant) or a subscription plan (in case you are a client, and
              you purchase a subscription plan made available by Unstop to
              clients upon payment of subscription fees), as may be applicable;
              <br />
              your responses to various information capturing forms created by
              the client on the platform as part of the process/structure of the
              opportunity organised by the client;
              <br />
              your marketing preferences, including any consents you have given
              us;
              <br />
              information related to the browser or device you use to access our
              Platform;
            </>
          </Text>
          <Text
            className="mt-[61px] text-2xl md:text-[22px] text-blue-800_01 text-justify sm:text-xl w-[99%] sm:w-full"
            size="txtPoppinsRegular24Blue80001"
          >
            For use of some specific services, providing some specific
            personally identifiable information shall be compulsory/mandatory
            and some additional details might be added on top of the ones
            mentioned above.
          </Text>
          <Text
            className="mt-[51px] text-blue_gray-700_07 text-justify text-xl w-[99%] sm:w-full"
            size="txtPoppinsRegular20Bluegray70007"
          >
            Sometimes, we receive information about you from third parties.
            Personal information that you provide to those sites may be sent to
            THINKWHT in order to deliver the service. We process such
            information in accordance with this Privacy Policy. The affiliated
            sites may have different privacy practices and we encourage you to
            read their privacy policies. In particular: from social media
            providers such as Facebook, LinkedIn, Twitter or Google when you
            login to THINKWHT using your login details from such providers.
            Where you link your LinkedIn profile to your Unstop account we may
            receive information from your LinkedIn profile as well.
          </Text>
          <Text
            className="mt-[58px] text-blue_gray-700_07 text-justify text-xl w-[97%] sm:w-full"
            size="txtPoppinsRegular20Bluegray70007"
          >
            This Privacy Policy applies to Unstop contents and services only. We
            do not exercise control over the sites displayed as search results
            or links from within our various services. These other sites may
            place their own cookies or other files on your computer, collect
            data or solicit personal information from you.
          </Text>
          <Text
            className="mt-[21px] text-blue_gray-700_07 text-justify text-xl w-[98%] sm:w-full"
            size="txtPoppinsRegular20Bluegray70007"
          >
            THINKWHT also automatically receives and records information on
            shared server logs from your browser including your IP address,
            cookie information and the page you requested.
          </Text>
          <Text
            className="mt-14 text-blue_gray-700_07 text-justify text-xl w-[99%] sm:w-full"
            size="txtPoppinsRegular20Bluegray70007"
          >
            In addition, when you use THINKWHT site services, you may make some
            of your personal information public. If you post personal
            information online that is accessible to the public, you may receive
            unsolicited messages from other parties in return and THINKWHT site
            will not be responsible for the use or misuse of such information.
            In particular: contact us section in each opportunity.
          </Text>
          <Text
            className="mt-[33px] text-blue_gray-700_07 text-justify text-xl w-[99%] sm:w-full"
            size="txtPoppinsRegular20Bluegray70007"
          >
            Email communication that you send us via the email links on the Site
            may be shared with company representatives, partners or employees.
            From time to time, we may send you service-related emails, such as a
            welcome email when you come in touch with the Site.
          </Text>
        </div>
        <Text
          className="md:ml-[0] ml-[68px] mr-[369px] mt-11 md:text-3xl sm:text-[28px] text-[32px] text-blue-800_01 text-justify"
          size="txtPoppinsRegular32"
        >
          We use your email address and/or phone number to send you:
        </Text>
        <div className="flex flex-col gap-[49px] items-center mt-[43px] md:px-10 sm:px-5 px-[46px] w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-700_07 text-justify"
            size="txtPoppinsRegular32Bluegray70007"
          >
            <>
              Password reminder and registration confirmation
              <br />
              Special offers
              <br />
              Newsletters
              <br />
              Changes in the service&#39;s policy or terms of use
              <br />
              Event based communications such as new event information, invites,
              reminders,{" "}
            </>
          </Text>
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-700_07 text-justify sm:text-xl w-[98%] sm:w-full"
            size="txtPoppinsRegular24Bluegray70007"
          >
            Note: We send users newsletters and updates upon registration. We
            send newsletters and/or promotional emails on behalf of our alliance
            partners. As regards special offers, newsletters, new event
            information, invites and reminders, you shall have the option to
            unsubscribe the same at our website.
          </Text>
        </div>
        <Text
          className="md:ml-[0] ml-[59px] mr-[793px] mt-[74px] md:text-3xl sm:text-[28px] text-[32px] text-blue-800_01 text-justify"
          size="txtPoppinsRegular32"
        >
          We use your personal information to:
        </Text>
        <Text
          className="md:ml-[0] ml-[46px] mr-[114px] mt-[42px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-700_07 text-justify"
          size="txtPoppinsRegular32Bluegray70007"
        >
          <>
            help us provide personalized features
            <br />
            tailor our sites to your interest
            <br />
            to get in touch with you in the case of password retrieval and
            policy changes
            <br />
            to provide the services requested by you
            <br />
            to preserve social history as governed by existing law or policy
          </>
        </Text>
        <Text
          className="md:ml-[0] ml-[59px] mr-[732px] mt-[89px] md:text-3xl sm:text-[28px] text-[32px] text-blue-800_01 text-justify"
          size="txtPoppinsRegular32"
        >
          We use contact information internally to:
        </Text>
        <Text
          className="md:ml-[0] ml-[46px] mr-[177px] mt-[42px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-700_07 text-justify"
          size="txtPoppinsRegular32Bluegray70007"
        >
          <>
            direct our efforts for product improvement
            <br />
            contact you as a survey respondent
            <br />
            notify you if you win any contest
            <br />
            send you promotional materials from our contest sponsors or
            advertisers
          </>
        </Text>
        <Text
          className="ml-16 md:ml-[0] mr-[982px] mt-[79px] text-4xl sm:text-[32px] md:text-[34px] text-justify text-orange-300"
          size="txtPoppinsMedium36"
        >
          Withdrawing Consent
        </Text>
        <div className="flex flex-col items-center mt-10 md:px-10 sm:px-5 px-[60px] w-full">
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-700_07 text-justify sm:text-xl w-full"
            size="txtPoppinsMedium24Bluegray70007"
          >
            <span className="text-blue_gray-700_07 font-poppins font-normal">
              Wherever we rely on your consent, you will always be able to
              withdraw that consent, although we may have other legal grounds
              for processing your data for other purposes, such as those set out
              above. In some cases, we are able to send you direct marketing
              without your consent, where we rely on our legitimate interests.
              You have an absolute right to opt-out of direct marketing, or
              profiling we carry out for direct marketing, at any time. You can
              do this by following the instructions in the communication where
              this is an electronic message, or by contacting us using the
              following details:{" "}
            </span>
            <a
              href="javascript:"
              className="text-blue-800_01 font-poppins font-normal underline"
            >
              help@thinkwht.com
            </a>
          </Text>
        </div>
        <Text
          className="ml-16 md:ml-[0] mr-[212px] mt-[71px] text-4xl sm:text-[32px] md:text-[34px] text-justify text-orange-300"
          size="txtPoppinsMedium36"
        >
          Information shared by Participant/Candidate directly with client{" "}
        </Text>
        <div className="flex flex-col gap-[26px] items-center mt-11 md:px-10 px-14 sm:px-5 w-full">
          <Text
            className="text-blue_gray-700_07 text-justify text-xl w-full"
            size="txtPoppinsRegular20Bluegray70007"
          >
            The client may request for certain information of the
            Participant/Candidate during an Event/Opportunity/Job organised by
            the client which is in addition to the information obtained by the
            Platform. Such information shared by Participants with clients may
            include certain special categories of information such as data
            revealing racial or ethnic origin, political opinions, religious or
            philosophical beliefs, or trade union membership, and the processing
            of genetic data, biometric data for the purpose of uniquely
            identifying a person, data concerning health or data concerning a
            person’s sex life or sexual orientation. Please note that any such
            information shared by the Participant with the client is being
            provided directly by Participant to client and Unstop and/or
            Platform is in no manner involved in such sharing of information.
            THINKWHT shall in no manner be responsible and/or liable for the
            use, misuse, or treatment of such information and this Privacy
            Notice does not govern any such information shared by the
            Participant/Candidate with the Client.
          </Text>
          <Text
            className="text-blue-800_01 text-xl w-full"
            size="txtPoppinsRegular20Blue80001"
          >
            During the course of our Services, we will transfer your personal
            data to India. However, depending on the location of the organizer,
            your data may be transferred to other countries as well.
          </Text>
        </div>
        <Text
          className="ml-16 md:ml-[0] mr-[1287px] mt-[39px] text-4xl sm:text-[32px] md:text-[34px] text-justify text-orange-300"
          size="txtPoppinsMedium36"
        >
          Links
        </Text>
        <div className="flex flex-col items-center mt-[27px] md:px-10 sm:px-5 px-[60px] w-full">
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-700_07 text-justify sm:text-xl w-full"
            size="txtPoppinsRegular24Bluegray70007"
          >
            THINKWHT.com may present links in a format that enables us to keep
            track of whether these links have been followed. We use this
            information to improve the quality of customized content and
            advertising.
          </Text>
        </div>
        <Text
          className="ml-16 md:ml-[0] mr-[1118px] mt-[39px] text-4xl sm:text-[32px] md:text-[34px] text-justify text-orange-300"
          size="txtPoppinsMedium36"
        >
          Affiliated Sites
        </Text>
        <div className="flex flex-col items-center mt-[45px] md:px-10 px-14 sm:px-5 w-full">
          <Text
            className="text-blue_gray-700_07 text-justify text-xl w-full"
            size="txtPoppinsRegular20Bluegray70007"
          >
            THINKWHT.com may offer some services in connection with other
            websites. Personal information that you provide to those sites may
            be sent to us in order to deliver the service. We process such
            information in accordance with this Privacy Policy. The affiliated
            sites may have different privacy practices and we encourage you to
            read their privacy policies.
          </Text>
        </div>
        <Text
          className="ml-16 md:ml-[0] mr-[1229px] mt-12 text-4xl sm:text-[32px] md:text-[34px] text-justify text-orange-300"
          size="txtPoppinsMedium36"
        >
          Security
        </Text>
        <Text
          className="md:ml-[0] ml-[63px] mr-[487px] mt-6 text-blue_gray-700_07 text-justify text-xl"
          size="txtPoppinsRegular20Bluegray70007"
        >
          Your THINKWHT account information is password-protected for your
          privacy and security.
        </Text>
        <Text
          className="ml-16 md:ml-[0] mr-[833px] mt-16 text-4xl sm:text-[32px] md:text-[34px] text-justify text-orange-300"
          size="txtPoppinsMedium36"
        >
          Changes to this Privacy Policy
        </Text>
        <div className="flex flex-col items-center mt-[35px] md:px-10 sm:px-5 px-[60px] w-full">
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-700_07 text-justify sm:text-xl w-full"
            size="txtPoppinsRegular24Bluegray70007"
          >
            THINKWHT site may amend this Privacy Policy from time to time. We
            will not reduce your rights under this Privacy Policy without your
            explicit consent, and we expect most such changes will be minor. If
            we make any substantial changes in the way we use your personal
            information, we will notify you by posting a prominent announcement
            on our pages.
          </Text>
        </div>
        <Text
          className="ml-16 md:ml-[0] mr-[1066px] mt-[71px] text-4xl sm:text-[32px] md:text-[34px] text-justify text-orange-300"
          size="txtPoppinsMedium36"
        >
          Account Deletion
        </Text>
        <div className="flex flex-col md:gap-10 gap-[157px] items-center mt-9 pr-0.5 w-full">
          <Text
            className="text-2xl md:text-[22px] text-blue-800_01 text-justify sm:text-xl"
            size="txtPoppinsMedium24Blue80001"
          >
            <span className="text-blue-800_01 font-poppins font-normal">
              If you wish to delete your account you can email us at{" "}
            </span>
            <span className="text-blue-800_01 font-poppins font-normal">
              support@thinkwht.com
            </span>
            <span className="text-blue-800_01 font-poppins font-normal">
              {" "}
              from your registered email.
            </span>
          </Text>
          <Footer3 className="flex font-inter items-center justify-center md:px-5 w-full" />
        </div>
        <div className="flex flex-col items-end mt-[719px] md:px-10 sm:px-5 px-[63px] w-full">
          <Img
            className="h-px w-px"
            src="images/img_vector_3.svg"
            alt="vector_Five"
          />
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
