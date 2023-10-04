import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Line, Text } from "components";
import UIUXPageOneCalender from "components/UIUXPageOneCalender";

const UIUXpageOneModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[78%]"
      overlayClassName="bg-black-900_3f fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <UIUXPageOneCalender
          className="bg-white-A700 flex flex-col items-center justify-start max-w-[1112px] mb-[10109px] mt-[63px] mx-auto p-8 md:px-5 rounded-[30px] w-full"
          weekdays1={
            <Text className="absolute font-light h-max inset-[0] justify-center m-auto text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-400 w-max">
              <span className="text-blue_gray-400 font-inter text-left">
                {" "}
                7 8 9 10{" "}
              </span>
              <span className="text-blue-800_01 font-inter text-left">
                11 12 13
              </span>
            </Text>
          }
        />
      </div>
    </ModalProvider>
  );
};

export default UIUXpageOneModal;
