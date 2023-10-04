import React from "react";

import { Img } from "components";

const ContactUsPageNavigator = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-48 relative w-48">
          <Img
            className="h-48 m-auto object-cover w-48"
            src="images/img_mask01.png"
            alt="maskOne"
          />
          <div className="absolute h-48 inset-[0] justify-center m-auto w-48">
            <Img
              className="h-48 m-auto object-cover w-48"
              src="images/img_mask01.png"
              alt="maskOne_One"
            />
            <div className="absolute h-48 inset-[0] justify-center m-auto w-48">
              <Img
                className="h-48 m-auto object-cover w-48"
                src="images/img_mask02.png"
                alt="maskTwo"
              />
              <div className="absolute h-48 inset-[0] justify-center m-auto w-48">
                <Img
                  className="h-48 m-auto object-cover w-48"
                  src="images/img_mask02.png"
                  alt="maskTwo_One"
                />
                <div className="absolute h-48 inset-[0] justify-center m-auto w-48">
                  <Img
                    className="h-48 m-auto object-cover w-48"
                    src="images/img_mask04.png"
                    alt="maskFour"
                  />
                  <Img
                    className="absolute h-48 inset-[0] justify-center m-auto object-cover w-48"
                    src="images/img_mask04.png"
                    alt="maskThree"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ContactUsPageNavigator.defaultProps = {};

export default ContactUsPageNavigator;
