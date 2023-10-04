import React from "react";

import { Img, Input, Line, Text } from "components";
import Footer3 from "components/Footer3";
import TermsConditionsNavbar from "components/TermsConditionsNavbar";

import { CloseSVG } from "../../assets/images";

const TermsconditionsPage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-end mx-auto w-full">
        <div className="font-poppins sm:h-[655px] md:h-[671px] h-[714px] md:px-5 relative w-full">
          <div className="absolute h-[655px] right-[0] top-[0] w-[44%] md:w-full">
            <Img
              className="h-[655px] m-auto object-cover rotate-[-148deg] w-full"
              src="images/img_ellipse4_655x623.png"
              alt="ellipseFour"
            />
            <Img
              className="absolute h-[439px] inset-y-[0] left-[1%] my-auto object-cover w-[66%]"
              src="images/img_hdd.png"
              alt="hdd"
            />
          </div>
          <div className="absolute flex flex-col font-inter inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
            <TermsConditionsNavbar className="bg-white-A700 flex flex-col items-center justify-start p-1.5 shadow-bs7 w-full" />
          </div>
          <div className="absolute bottom-[21%] flex flex-col font-inter gap-[38px] items-center justify-start left-[4%] w-[49%]">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="md:text-5xl text-[70px] text-blue-800_01"
                size="txtInterBlack70Blue80001"
              >
                Terms & Conditions
              </Text>
            </div>
            <div className="flex flex-col md:gap-10 gap-[102px] items-start justify-start">
              <Text
                className="text-blue_gray-400 text-justify text-xl w-full"
                size="txtInterRegular20"
              >
                So you think you are at the right place? If yes, every
                collaboration has its own terms of use. Here’s our terms and
                conditions.
              </Text>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-justify text-orange-300"
                size="txtPoppinsMedium36"
              >
                Terms of Use
              </Text>
            </div>
          </div>
          <Text
            className="absolute bottom-[0] inset-x-[0] mx-auto text-blue_gray-700_07 text-justify text-xl w-[90%] sm:w-full"
            size="txtPoppinsRegular20Bluegray70007"
          >
            <>
              Your use of ThinkWht products, software, services and websites
              (referred to collectively as the “Services” in this document) is
              subject to the terms of a legal agreement between you and ThinkWht
              . Please read the following terms and conditions very carefully as
              your use of services is subject to your acceptance of and
              compliance with the following terms and conditions
              (&quot;Terms&quot;).
            </>
          </Text>
        </div>
        <Text
          className="mt-10 text-blue_gray-700_07 text-justify text-xl w-[90%] sm:w-full"
          size="txtInterRegular20Bluegray70007"
        >
          By subscribing to or using any of our services, you agree that you
          have read, understood and are bound by the Terms, regardless of how
          you subscribe to or use the services. If you do not want to be bound
          by the Terms, you must not subscribe to or use our services.
        </Text>
        <Text
          className="mt-[52px] text-blue_gray-700_07 text-justify text-xl w-[90%] sm:w-full"
          size="txtPoppinsRegular20Bluegray70007"
        >
          <>
            In these Terms, references to &quot;you&quot;, &quot;User&quot;,
            “Visitor” shall mean the end user accessing the Website, its
            contents and using the Services offered through the Website, and
            &quot;we&quot;, &quot;us&quot; and &quot;our&quot; shall mean
            ThinkWht.com and its affiliates
          </>
        </Text>
        <div className="flex flex-col font-poppins items-start mt-[85px] md:px-10 sm:px-5 px-[73px] w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-justify text-orange-300"
            size="txtPoppinsMedium36"
          >
            User Agreement
          </Text>
        </div>
        <Text
          className="mt-[25px] text-blue_gray-400 text-justify text-xl w-[90%] sm:w-full"
          size="txtInterBlack20"
        >
          <span className="text-blue_gray-700_07 font-inter font-normal">
            These Terms of Use govern your use of Services offered through
          </span>
          <span className="text-blue-800_01 font-inter font-normal"> </span>
          <a
            href="javascript:"
            className="text-blue-800_01 font-inter font-normal underline"
          >
            https://thinkwht.com
          </a>
          <span className="text-blue-800_01 font-inter font-normal"> </span>
          <span className="text-blue_gray-700_07 font-inter font-normal">
            <>
              (“Site”). You agree to access &quot;the site&quot;, subject to the
              terms and conditions of use as set out here. You may not use the
              Services if you do not accept the Terms.
            </>
          </span>
        </Text>
        <Text
          className="mt-9 text-blue_gray-700_07 text-justify text-xl w-[90%] sm:w-full"
          size="txtPoppinsRegular20Bluegray70007"
        >
          ThinkWht.com may add to or change or update these Terms of Use, from
          time to time entirely at its own discretion. You are responsible for
          checking these Terms of Use periodically to remain in compliance with
          these terms. Your use of a Site after any amendment to the Terms of
          Use shall constitute your acceptance of these terms and you also agree
          to be bound by any such changes/revisions.
        </Text>
        <div className="flex flex-col font-poppins gap-[27px] items-start mt-[83px] md:px-10 sm:px-5 px-[73px] w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-justify text-orange-300"
            size="txtPoppinsMedium36"
          >
            Accepting the terms
          </Text>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-blue-800_01 text-justify"
            size="txtPoppinsRegular32"
          >
            You can accept the Terms by:
          </Text>
        </div>
        <Text
          className="mt-[30px] text-2xl md:text-[22px] text-blue_gray-700_07 text-justify sm:text-xl"
          size="txtPoppinsRegular24Bluegray70007"
        >
          <>
            clicking to accept or agree to the Terms, where this option is made
            available to you by ThinkWht in the user interface for any Service;
            or
            <br />
            by actually using the Services. In this case, you understand and
            agree that ThinkWht will treat your use of the Services as
            acceptance of the Terms from that point onwards.
          </>
        </Text>
        <Text
          className="mt-[53px] text-2xl md:text-[22px] text-blue-800_01 text-justify sm:text-xl w-[90%] sm:w-full"
          size="txtPoppinsRegular24Blue80001"
        >
          You may not use the Services and may not accept the Terms if you are
          not of legal age to form a binding contract with ThinkWht. Before you
          continue, you should print off or save a local copy of the Terms for
          your records.
        </Text>
        <div className="flex flex-col font-poppins items-start mt-[87px] md:px-10 sm:px-5 px-[73px] w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-justify text-orange-300"
            size="txtPoppinsMedium36"
          >
            Your Passwords and Account Security
          </Text>
        </div>
        <Text
          className="mt-[23px] text-blue_gray-700_07 text-justify text-xl"
          size="txtPoppinsRegular20Bluegray70007"
        >
          <>
            You agree and understand that you are responsible for maintaining
            the confidentiality of passwords associated with any account you use
            to access the Services.
            <br />
            Accordingly, you agree that you will be solely responsible to Unstop
            for all activities that occur under your account.
            <br />
            If you become aware of any unauthorized use of your password or of
            your account, you agree to notify ThinkWht immediately at
            help@ThinkWht.com
          </>
        </Text>
        <div className="flex flex-col font-poppins items-start mt-[97px] md:px-10 sm:px-5 px-[73px] w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-justify text-orange-300"
            size="txtPoppinsMedium36"
          >
            Privacy Policy
          </Text>
        </div>
        <Text
          className="mt-[35px] text-blue_gray-700_07 text-justify text-xl w-[89%] sm:w-full"
          size="txtInterRegular20Bluegray70007"
        >
          The User hereby consents, expresses and agrees that he/she has read
          and fully understands the Privacy Policy of Unstop.com in respect of
          the Website. The user further consents that the terms and contents of
          such Privacy Policy are acceptable to him.
        </Text>
        <div className="flex flex-col font-poppins items-start mt-24 md:px-10 sm:px-5 px-[73px] w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-justify text-orange-300"
            size="txtPoppinsMedium36"
          >
            Fee Payments
          </Text>
        </div>
        <Text
          className="mt-[29px] text-blue_gray-700_07 text-justify text-xl w-[90%] sm:w-full"
          size="txtPoppinsRegular20Bluegray70007"
        >
          ThinkWht.com reserves the right to charge listing/advertising/product
          usage fees as well as transaction fees based on certain completed
          transactions using the ThinkWht.com Services. ThinkWht.com further
          reserves the right to alter any and all fees from time to time,
          without notice. The User shall be liable to pay all applicable
          charges, fees, duties, taxes, levies and assessments for availing the
          ThinkWht.com Services.
        </Text>
        <div className="flex flex-col font-poppins items-start mt-[94px] md:px-10 sm:px-5 px-[73px] w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-justify text-orange-300"
            size="txtPoppinsMedium36"
          >
            Cancellation/Refund Policy
          </Text>
        </div>
        <Text
          className="mt-[49px] text-blue_gray-700_07 text-justify text-xl w-[91%] sm:w-full"
          size="txtPoppinsMedium20Bluegray70007"
        >
          <span className="text-blue_gray-700_07 font-poppins font-normal">
            All sales/purchase of services are final with no refund or exchange
            permitted. However, if in a transaction performed by you on the
            site, money has been charged to your card or bank account without
            the delivery of the services, then you may inform us by sending an
            email to or an email address mentioned on the Contact Us page.{" "}
          </span>
          <span className="text-blue-800_01 font-poppins font-normal">
            ThinkWht
          </span>
          <a
            href="javascript:"
            className="text-blue-800_01 font-poppins font-normal underline"
          >
            .com
          </a>
          <span className="text-blue-800_01 font-poppins font-normal"> </span>
          <span className="text-blue_gray-700_07 font-poppins font-normal">
            shall investigate the incident and if it is found that money was
            indeed charged to your card or bank account without delivery of the
            service, then you will be refunded the money within 21 working days
            from the date of receipt of your email. All refunds will be credited
            back to source of the payment after deducting the service charges
            and taxes(if applicable). It will take 3-21 days for the money to
            show in your bank account depending on your bank’s policy.
          </span>
        </Text>
        <div className="flex flex-col font-poppins items-start mt-[93px] md:px-10 sm:px-5 px-[73px] w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-justify text-orange-300"
            size="txtPoppinsMedium36"
          >
            Governing Law
          </Text>
        </div>
        <Text
          className="mt-[39px] text-2xl md:text-[22px] text-blue_gray-700_07 text-justify sm:text-xl w-[91%] sm:w-full"
          size="txtPoppinsRegular24Bluegray70007"
        >
          These terms shall be governed by and constructed in accordance with
          the laws of India without reference to conflict of laws principles and
          disputes arising in relation hereto shall be subject to the exclusive
          jurisdiction of the courts at Delhi.
        </Text>
        <div className="flex flex-col font-poppins items-start mt-[100px] md:px-10 sm:px-5 px-[73px] w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-justify text-orange-300"
            size="txtPoppinsMedium36"
          >
            Severability
          </Text>
        </div>
        <Text
          className="mt-10 text-blue_gray-700_07 text-justify text-xl w-[91%] sm:w-full"
          size="txtInterRegular20Bluegray70007"
        >
          If any provision of the Terms is determined to be invalid or
          unenforceable in whole or in part, such invalidity or unenforceability
          shall attach only to such provision or part of such provision and the
          remaining part of such provision and all other provisions of these
          Terms shall continue to be in full force and effect.
        </Text>
        <Footer3 className="flex font-inter items-center justify-center mt-[187px] md:px-5 w-full" />
        <div className="flex flex-col items-end mt-[2092px] md:px-10 sm:px-5 px-[63px] w-full">
          <Img
            className="h-px w-px"
            src="images/img_vector_1x1.svg"
            alt="vector_Five"
          />
        </div>
      </div>
    </>
  );
};

export default TermsconditionsPage;
