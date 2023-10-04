import React from "react";

import { Img, Input, Line, Text } from "components";
import Footer3 from "components/Footer3";
import TermsConditionsNavbar from "components/TermsConditionsNavbar";

import { CloseSVG } from "../../assets/images";

const RefundPolicyPage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="font-inter h-[655px] md:h-[671px] mx-auto w-full">
            <div className="h-[655px] md:h-[671px] m-auto w-full">
              <Img
                className="absolute h-[655px] inset-y-[0] my-auto object-cover right-[0] rotate-[-148deg] w-[44%]"
                src="images/img_ellipse4_8.png"
                alt="ellipseFour"
              />
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                <TermsConditionsNavbar className="bg-white-A700 flex flex-col items-center justify-start p-1.5 shadow-bs7 w-full" />
              </div>
              <div className="absolute flex flex-col items-center justify-start left-[5%] top-[33%]">
                <Text
                  className="md:text-5xl text-[67px] text-blue-800_01 w-full"
                  size="txtInterBlack67"
                >
                  REFUND & CANCELLATION POLICY
                </Text>
              </div>
            </div>
            <Img
              className="absolute h-[462px] inset-y-[0] my-auto object-cover right-[10%] w-[33%]"
              src="images/img_image_462x464.png"
              alt="image_Three"
            />
          </div>
          <div className="flex flex-col font-poppins gap-[43px] items-start justify-start mb-[321px] ml-[73px] mt-[-NaNpx] z-[1]">
            <Text
              className="text-black-900 text-justify text-xl"
              size="txtPoppinsRegular20"
            >
              <span className="text-black-900 font-poppins font-normal">
                <>
                  Subject - Refund Policy for Limited Offer Product
                  <br />
                  Reference -<br />
                  Reference Number (App ID / Mobile Nos of Customer / SO ID){" "}
                </>
              </span>
              <span className="text-blue_gray-400 font-poppins font-normal">
                ___________________
              </span>
            </Text>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-justify text-orange-300"
              size="txtPoppinsRegular32Orange300"
            >
              Dear Sir/Madam,
            </Text>
          </div>
          <Text
            className="mt-[-22.19px] mx-auto text-blue_gray-700_07 text-justify text-xl z-[1]"
            size="txtPoppinsRegular20Bluegray70007"
          >
            <span className="text-blue_gray-700_07 font-poppins font-normal">
              <>
                Thank you for choosing THINKWHT and we welcome you to the
                THINKWHT’S family!
                <br />
                At{" "}
              </>
            </span>
            <span className="text-blue_gray-700_07 font-poppins font-normal">
              ELVDRIVE Scooter LLP
            </span>
            <span className="text-blue_gray-700_07 font-poppins font-normal">
              {" "}
              (hereinafter “THINKWHT”/ “we”/ “our”/ “us”), we value the trust of
              our customers (“Customer(s)”/ “you”/ “your” / “Subscriber(s)”) and
              wish to inform you that you have purchased one of the{" "}
            </span>
            <span className="text-blue_gray-700_07 font-poppins font-normal">
              THINKWHT
            </span>
            <span className="text-blue_gray-700_07 font-poppins font-normal">
              {" "}
              product/services as set out in subsequent Annexures (hereinafter
              referred as “Limited Offer Product(s)”), under a special limited
              period offer wherein the refund terms mentioned hereunder will
              apply to your purchase
            </span>
            <a
              href="javascript:"
              className="text-blue_gray-700_07 font-poppins font-normal underline"
            >
              [1]
            </a>
            <span className="text-blue_gray-700_07 font-poppins font-normal">
              <>
                {" "}
                of the relevant Limited Offer Product(s).
                <br />
                Your access to or the usage of the Limited Offer Product(s)
                shall be governed by the relevant Terms of Use and Privacy
                Policies of the relevant Limited Offer Product(s) available on
                the relevant mobile application/website. If you wish to cancel
                your subscription and/or return the Limited Offer Product(s),
                you shall be required to submit your cancellation request by
                either writing to{" "}
              </>
            </span>
            <a
              href="javascript:"
              className="text-blue_gray-700_07 font-poppins font-normal underline"
            >
              can
            </a>
            <span className="text-blue_gray-700_07 font-poppins font-normal">
              {" "}
            </span>
            <span className="text-blue_gray-700_07 font-poppins font-normal">
              or call us at{" "}
            </span>
            <span className="text-blue_gray-700_07 font-poppins font-normal">
              9519984930
            </span>
            <span className="text-blue_gray-700_07 font-poppins font-normal">
              {" "}
              Only for MTS and LTS courses, please reach out to us at{" "}
            </span>
            <a
              href="javascript:"
              className="text-blue_gray-700_07 font-poppins font-normal underline"
            >
              help@
            </a>
            <span className="text-blue_gray-700_07 font-poppins font-normal">
              thinkwht.com{" "}
            </span>
            <span className="text-blue_gray-700_07 font-poppins font-normal">
              and{" "}
            </span>
            <span className="text-blue_gray-700_07 font-poppins font-normal">
              cancellation@thinkwht.com
            </span>
          </Text>
        </div>
        <Text
          className="mt-[146px] text-blue_gray-700_07 text-justify text-xl w-[92%] sm:w-full"
          size="txtPoppinsRegular20Bluegray70007"
        >
          If you choose to cancel or return the Limited Offer Product(s); a)
          within FREE LOOK-UP PERIOD, you shall be eligible for a full refund
          (except for Books in case of THINKWHT’S Exam Prep courses), b) in the
          LOOK-UP PERIOD, you shall be eligible for a partial refund as detailed
          in subsequent Annexures. Post LOOK-UP PERIOD you shall not be eligible
          for any refunds whatsoever. The duration of LOOK-UP PERIOD and
          eligible refund calculations vary by Products and are detailed in
          subsequent Annexures.
        </Text>
        <Text
          className="mt-9 text-blue_gray-700_07 text-justify text-xl"
          size="txtPoppinsRegular20Bluegray70007"
        >
          <>
            Across all Products, FREE LOOK-UP PERIOD and LOOK-UP PERIOD are
            dependent upon the Delivery Date, the definition of which also vary
            by Products and are mentioned in subsequent Annexures.
            <br />
            Fee component types can be across registration, administration fee,
            device, course fee, books, etc. and will vary as per product
            <br />
            Return of Device(s) which form part of Limited Offer Product(s):
            Refund requests for learning Devices forming part of Limited Offer
            Product(s), shall be processed only if; a) the application for
            cancellation/return is submitted within FREE LOOK-UP PERIOD, b) the
            issued Devices are received by us, at the below mentioned address,
            in an undamaged and working condition with all its accessories
            (including without limitation charger, cables, SD Card etc.) at your
            own cost, within 30 (thirty) days pursuant to the email sent by us
            requesting you to return the Device, and c) while returning the
            Device, specify the Order ID, your registered mobile number through
            which the Limited Offer Product was purchased and the Reference ID
            mentioned above in this letter. Devices can be retained and need not
            be returned by you if the cancellation/return request for the
            Limited Offer Product is raised after FREE LOOK-UP PERIOD. We shall
            not be liable for any damage caused to the Device during the return
            transit, from your end.
          </>
        </Text>
        <Text
          className="mt-[137px] text-blue_gray-700_07 text-justify text-xl"
          size="txtPoppinsRegular20Bluegray70007"
        >
          <span className="text-blue_gray-700_07 font-poppins font-normal">
            THINKWHT{" "}
          </span>
          <span className="text-blue_gray-700_07 font-poppins font-normal">
            Support Team,{" "}
          </span>
          <span className="text-blue_gray-700_07 font-poppins font-normal">
            THINKWHT
          </span>
          <span className="text-blue_gray-700_07 font-poppins font-normal">
            <>
              {" "}
              <br />
              Plot Nos. 183 to 187 & 254 to, 258,
              <br />
              2nd Floor, Bommasandra Jigani Link Rd,
              <br />
              Bommasandra Industrial Area,
              <br />
              Bengaluru, Karnataka PINCODE 562106
              <br />
              For any Limited Offer Product(s) purchased by you, you shall not
              be eligible for any refunds, whatsoever in the following events:
              <br />
              If the request for cancellations/return is submitted after expiry
              of the LOOK-UP PERIOD of the respective Product
              <br />
              If your access/subscription to the Limited Offer Product(s) is
              cancelled on account of discovery of credible proof regarding any
              breach of Limited Offer Product(s)’s Terms of Use. The decision of
              BYJU’S shall be final and binding in this regard
              <br />
              If due to a force majeure event (such as acts of God, government
              restrictions or other events beyond our control), we have to
              discontinue the Limited Offer Product(s) that you have already
              availed; then we are under no obligation to refund the fee for
              such portion of the service already availed by you. We are also
              not liable to provide any additional service in lieu of the
              service so discontinued.
              <br />
              Any other refund policy, mentioned anywhere on our website or any
              other place, does not hold true for the Limited Offer Product(s).
              Refunds for all other product(s)/service(s) offered by BYJU’S
              (which are not specified in subsequent Annexures) shall be
              governed through their respective refund policies/terms of use.
              <br />
              Mode of Refund: All applicable refunds shall be processed through
              online transfer in Indian Rupees only, to the source account from
              where the payment was originally made; a) within a reasonable
              period of 28 days from the date a written confirmation from our
              end is provided to you approving the cancellation where a Limited
              Offer Product(s) does not include a Device, b) within a reasonable
              period of 28 days from the date a written confirmation from our
              end is provided to you approving the cancellation, which will be
              sent only after receipt of damage free Device in working condition
              where the Limited Offer Product(s) includes Device(s). In no
              event, will the applicable refund amount be greater than the
              amount paid for your purchase. In the event you had availed
              credit/financing facility while purchasing the Limited Offer
              Product(s) from us, your refunds shall be processed accordingly
              with your lender/financing partner
              <br />
              If your payment instrument/account through which original payment
              was made, is not active or does not support refunds, you shall be
              required to provide other bank account details belonging to you
              for processing the relevant refund. We shall not be responsible
              and/ or accountable for crediting refund money to the wrong
              account due to incorrect details furnished by you. You shall be
              required to furnish a declaration for transfer of refund to
              another bank account in the format and manner as may be required
              by us
              <br />
              In case you have not received the refund within the above
              mentioned 14 days period, then please reach out to us at
              9243500459 or write to us at{" "}
            </>
          </span>
          <a
            href="javascript:"
            className="text-blue_gray-700_07 font-poppins font-normal underline"
          >
            cancellations@byjus.com
          </a>
          <span className="text-blue_gray-700_07 font-poppins font-normal">
            . For any other queries, please write to us at{" "}
          </span>
          <a
            href="javascript:"
            className="text-blue_gray-700_07 font-poppins font-normal underline"
          >
            support@byjus.com
          </a>
          <span className="text-blue_gray-700_07 font-poppins font-normal">
            <>
              .<br />
              On account of cancellation of the service(s) procured by you under
              the Limited Offer Product(s), the services to be provided by us
              from the date of cancellation, up to exhaustion or expiry of such
              service(s), shall be considered as services not performed.
              Accordingly, for return/ cancellation of product(s)/ service(s),
              we will issue a GST credit note to you, which otherwise may not be
              issued if the withdrawal and issuance are beyond the timelines
              allowed under applicable law. In case the cancellation request
              submission date is after the prescribed timeline, we may issue a
              commercial credit note, on your request. You may be required to
              furnish a declaration for the same, in the format and manner as
              may be required by us.
              <br />
              We reserve the right to modify/ replace this Policy at any time,
              as deemed fit by us, without any prior notice to you.
              <br />
              You confirm and acknowledge that you have read and understood the
              terms set out in this document and accept the same.
              <br />
              Further, you undertake not to dispute the refund terms provided
              under this document by Think & Learn Pvt. Ltd. or raise any claims
              beyond the scope provided under this document.
            </>
          </span>
        </Text>
        <div className="bg-gray-50 border-[3px] border-black-900 border-solid flex flex-row items-center justify-start max-w-[1343px] mt-[67px] mx-auto pt-[3px] md:px-5 px-[3px] rounded-[20px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-[102px] w-[90%]">
            <Text
              className="md:mt-0 mt-[87px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-400 text-justify"
              size="txtPoppinsRegular36"
            >
              <>
                Yours sincerely,
                <br />
                ____________
                <br />
                Think & Learn Private Limited
                <br />
                Date:
                <br />
                Name of Employee:
                <br />
                TNL ID:
              </>
            </Text>
            <Line className="bg-black-900 h-[516px] md:h-px ml-10 md:ml-[0] md:w-full w-px" />
            <Text
              className="md:ml-[0] ml-[77px] md:mt-0 mt-[87px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-400"
              size="txtPoppinsRegular32Bluegray400"
            >
              <>
                Accepted and Acknowledged by,
                <br />
                Customer’s Signature ___________________
                <br />
                Name:
                <br />
                Mobile Number:
                <br />
                Date:
              </>
            </Text>
          </div>
        </div>
        <Text
          className="mt-[65px] md:text-3xl sm:text-[28px] text-[32px] text-blue-800_01 text-justify w-[93%] sm:w-full"
          size="txtPoppinsRegular32"
        >
          *Short term courses of 90 days or fewer will not be applicable under
          this refund policy
        </Text>
        <Text
          className="mt-[42px] text-blue_gray-700_07 text-justify text-xl"
          size="txtPoppinsRegular20Bluegray70007"
        >
          <>
            For aforementioned Limited Offer Products in Annexure I, Delivery
            Date shall mean the following: (a) Limited Offer Product(s) which
            includes a Device, Delivery Date shall be the date on which the
            Device has been delivered to you. (b) Limited Offer Product(s) which
            does not include a Device, Delivery Date shall be the date on which
            the invoice for purchase of the Limited Offer Products(s) is
            generated by us
            <br />
            For aforementioned Limited Offer Products, FREE LOOK-UP PERIOD shall
            be within 14 days after the Delivery Date and LOOK-UP PERIOD shall
            be post 14 days after the Delivery Date and up to the completion of
            60 days from the Delivery Date
            <br />
            As mentioned previously, if you choose to cancel or return the
            Limited Offer Product(s); a) within FREE LOOK-UP PERIOD, you shall
            be eligible for a full refund*, b) in the LOOK-UP PERIOD, you shall
            be eligible for a partial refund as detailed in Table A. Post
            LOOK-UP PERIOD you shall not be eligible for any refunds whatsoever.
          </>
        </Text>
        <Text
          className="mt-11 text-2xl md:text-[22px] text-blue_gray-700_07 text-justify sm:text-xl"
          size="txtPoppinsRegular24Bluegray70007"
        >
          <span className="text-blue-800_01 font-poppins font-normal">
            <>
              Fee Components of each Limited Offer Product(s)
              <br />
            </>
          </span>
          <span className="text-blue_gray-700_07 font-poppins font-normal">
            <>
              Fee component type
              <br />
              FREE LOOK UP PERIOD: Up to 14 Days after Delivery Date
              <br />
              LOOK-UP PERIOD: Post 14 days after Delivery Date and till
              completion of 60 days after the Delivery Date
              <br />
              Post LOOK-UP period: Post 60 days after the Delivery Date
              <br />
              Registration Fees paid for Limited Offer Product(s) [Please refer
              to Note 1.]
              <br />
            </>
          </span>
          <span className="text-blue-800_01 font-poppins font-normal">
            <>
              A<br />
            </>
          </span>
          <span className="text-blue_gray-700_07 font-poppins font-normal">
            <>
              100% Refund
              <br />
              No Refund
              <br />
              No Refund
              <br />
              Device Fees** paid for the device included in the Limited Offer
              Product(s)
              <br />
            </>
          </span>
          <span className="text-blue-800_01 font-poppins font-normal">
            <>
              A<br />
            </>
          </span>
          <span className="text-blue_gray-700_07 font-poppins font-normal">
            <>
              100% Refund
              <br />
              No Refund
              <br />
              No Refund
              <br />
              Course Fees paid for the service(s) included in the Limited Offer
              Product(s) [Please refer to Note 2]
              <br />
            </>
          </span>
          <span className="text-blue-800_01 font-poppins font-normal">
            <>
              B<br />
            </>
          </span>
          <span className="text-blue_gray-700_07 font-poppins font-normal">
            <>
              100% Refund
              <br />
              Partial Refund- Deduction of course fee for one quarter only (As
              per the illustration in Annexure II)
              <br />
              No Refund
            </>
          </span>
        </Text>
        <Text
          className="mt-[46px] text-2xl md:text-[22px] text-blue_gray-700_07 text-justify sm:text-xl"
          size="txtPoppinsRegular24Bluegray70007"
        >
          <>
            * No refunds will be entertained in the months of February and March
            (i.e. the last two months of the academic year) unless the refund
            claimed is within 14 days after the Delivery Date.
            <br />
            ** Refund requests for Device Fees shall be processed only upon
            receipt of original and damage free Device, as delivered by BYJU’S
            to you, along with all accessories and components.
            <br />
            ***Illustrations are provided ahead in this Annexure
            <br />
            Note 1: The Registration Fee is Rs. 7000/- and on the invoice, forms
            part of Course Fee. If siblings subscribe to different Limited Offer
            Product(s) simultaneously, then the Registration Fee for second and
            third child will be Rs. 3500 each. In case of sibling refund,
            registration fee of Rs. 7000 will be retained by the company until
            entire order is refunded
            <br />
            Note 2: For the purposes of the terms set out in this letter, Course
            Fee shall mean the amount arrived at by deducting a) the applicable
            Registration Fee (please refer to Note 1); and b) the Device Fee as
            mentioned in the relevant invoice.
          </>
        </Text>
        <Text
          className="mt-[30px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-700_07 text-justify"
          size="txtPoppinsRegular32Bluegray70007"
        >
          <span className="text-blue-800_01 font-poppins font-normal">
            <>
              Fee Components of each Limited Offer Product(s)
              <br />
            </>
          </span>
          <span className="text-blue_gray-700_07 font-poppins font-normal">
            <>
              Fee component Type
              <br />
              FREE LOOK-UP PERIOD: Up to 14 Days after Delivery Date
              <br />
              LOOK-UP PERIOD: Post 14 days after Delivery Date and till
              completion of 45 days after the Delivery Date
              <br />
              Post LOOK-UP period: Post 45 days after the Delivery Date
              <br />
              Administration fee (only Applicable for IAS Online live classes
              program users)
              <br />
            </>
          </span>
          <span className="text-blue-800_01 font-poppins font-normal">
            <>
              A<br />
            </>
          </span>
          <span className="text-blue_gray-700_07 font-poppins font-normal">
            <>
              100% Refund
              <br />
              No Refund
              <br />
              No Refund
              <br />
              Registration Fees paid for Limited Offer Product(s) [Please refer
              to Note 1.]
              <br />
            </>
          </span>
          <span className="text-blue-800_01 font-poppins font-normal">
            <>
              A<br />
            </>
          </span>
          <span className="text-blue_gray-700_07 font-poppins font-normal">
            <>
              100% Refund
              <br />
              No Refund
              <br />
              No Refund
              <br />
              Device Fees paid for the device included in the Limited Offer
              Product(s)
              <br />
            </>
          </span>
          <span className="text-blue-800_01 font-poppins font-normal">
            <>
              A<br />
            </>
          </span>
          <span className="text-blue_gray-700_07 font-poppins font-normal">
            <>
              100% Refund
              <br />
              No Refund
              <br />
              No Refund
              <br />
              Course Fees paid for the service(s) included in the Limited Offer
              Product(s) [Please refer to Note 2]
              <br />
            </>
          </span>
          <span className="text-blue-800_01 font-poppins font-normal">
            <>
              B<br />
            </>
          </span>
          <span className="text-blue_gray-700_07 font-poppins font-normal">
            <>
              100% Refund
              <br />
              Partial Refund- Deduction of course fee for one quarter only (As
              per the illustration in Annexure II)
              <br />
              No Refund
              <br />
              Study Material fees paid for the books included in the Limited
              Offer Product(s)
              <br />
            </>
          </span>
          <span className="text-blue-800_01 font-poppins font-normal">
            <>
              C<br />
            </>
          </span>
          <span className="text-blue_gray-700_07 font-poppins font-normal">
            <>
              No Refund
              <br />
              No Refund
              <br />
              No Refund
            </>
          </span>
        </Text>
        <Text
          className="mt-[72px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-700_07 text-justify"
          size="txtPoppinsRegular32Bluegray70007"
        >
          <>
            Note:
            <br />
            Course fee will be the total amount after deducting device/book fee
            and registration fee from total product cost
            <br />
            No refund for course purchased 3 months before the first Exam date
            unless claimed in FREE LOOK-UP PERIOD
            <br />
            Note 1: The Registration Fee is Rs. 7000/- for IAS courses and on
            the invoice, forms part of Course Fee
            <br />
            Note 2: The Registration Fee is Rs. 5000/- for CAT, GATE & CLAT
            courses and on the invoice, forms part of Course Fee
            <br />
            Note 3: The Registration Fee is Rs. 3000/- for MTS & LTS courses and
            on the invoice, forms part of Course Fee
            <br />
            Note 4: For the purposes of the terms set out in this letter, In
            case of online live classes Course Fee shall mean the amount arrived
            at by deducting device cost and study material cost and registration
            fee from total fees.
            <br />
            No refund for MTS and LTS courses unless claimed within the FREE
            LOOK UP PERIOD
            <br />
            Illustrations are provided in Annexure II – Illustrations
          </>
        </Text>
        <div className="flex font-inter h-[1003px] md:h-[1160px] justify-end mt-[157px] md:px-5 relative w-full">
          <Img
            className="h-px mb-[237px] ml-auto mr-[61px] mt-auto w-px"
            src="images/img_vector_3.svg"
            alt="vector_Two"
          />
          <Footer3 className="absolute flex inset-[0] items-center justify-center m-auto w-full" />
        </div>
      </div>
    </>
  );
};

export default RefundPolicyPage;
