import React from "react";

import { Img, Text } from "components";

const ThinkWhtCommunityStackhere = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[140px] h-[236px] m-auto w-full">
          <Img
            className="absolute bottom-[0] h-[140px] inset-x-[0] mx-auto"
            src="images/img_vector_white_a700_140x316.svg"
            alt="vector_Two"
          />
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col h-[135px] inset-x-[0] items-center justify-end mx-auto p-[18px] top-[0] w-[97%]"
            style={{ backgroundImage: "url('images/img_group279.svg')" }}
          >
            <Img
              className="h-[97px]"
              src="images/img_group_orange_300_97x273.svg"
              alt="group_Two"
            />
          </div>
        </div>
        <div
          className="absolute bg-cover bg-no-repeat bottom-[9%] flex flex-col h-[97px] inset-x-[0] items-center justify-start mx-auto p-1.5"
          style={{ backgroundImage: "url('images/img_group280.svg')" }}
        >
          <Text
            className="mb-[33px] sm:text-[35.32px] md:text-[37.32px] text-[39.32px] text-center text-white-A700"
            size="txtJuaRegular3932"
          >
            {props?.here}
          </Text>
        </div>
      </div>
    </>
  );
};

ThinkWhtCommunityStackhere.defaultProps = { here: "HERE" };

export default ThinkWhtCommunityStackhere;
