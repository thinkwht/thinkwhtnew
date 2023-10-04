import React from "react";

import { Img, Input, Text } from "components";
import Header2 from "components/Header2";

import { CloseSVG } from "../../assets/images";

const CertificationPage = () => {
  const [group237897value, setGroup237897value] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[136px] w-full">
        <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start w-full">
          <div className="flex flex-col md:gap-10 gap-32 justify-start w-full">
            <Header2 className="flex flex-col items-center justify-center md:px-5 w-full" />
            <div className="flex md:flex-col flex-row gap-[27px] items-center justify-start md:ml-[0] ml-[92px] md:px-5 w-[81%] md:w-full">
              <Text
                className="md:text-5xl text-[80px] text-blue-800_01"
                size="txtInterBold80Blue80001"
              >
                Download Your Certificate
              </Text>
              <Img
                className="h-24"
                src="images/img_materialsymbolsdownload.svg"
                alt="materialsymbols"
              />
            </div>
          </div>
          <div className="bg-blue_gray-100_02 flex flex-col items-center justify-start max-w-[1287px] mx-auto p-[305px] md:px-5 w-full">
            <Img
              className="h-[69px]"
              src="images/img_location.svg"
              alt="location"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificationPage;
