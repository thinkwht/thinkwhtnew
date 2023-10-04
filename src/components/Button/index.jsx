import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-md" };
const variants = {
  fill: {
    deep_orange_100: "bg-deep_orange-100 text-blue_gray-900_05",
    gray_900_08: "bg-gray-900_08 text-white-A700",
    blue_gray_700: "bg-blue_gray-700 text-white-A700",
    blue_gray_700_03: "bg-blue_gray-700_03 shadow-bs text-white-A700",
    white_A700: "bg-white-A700 shadow-bs1 text-blue-800_01",
    orange_300_42: "bg-orange-300_42",
    blue_800_04: "bg-blue-800_04",
    gray_200_03: "bg-gray-200_03 text-blue-800_01",
    orange_300: "bg-orange-300 shadow-bs text-blue-800",
    cyan_700: "bg-cyan-700",
    deep_purple_200: "bg-deep_purple-200 shadow-bs4 text-white-A700",
    blue_800_01: "bg-blue-800_01 text-white-A700",
    white_A700_26: "bg-white-A700_26 text-white-A700",
    blue_800: "bg-blue-800 text-white-A700",
    blue_50: "bg-blue-50",
    blue_gray_900_05: "bg-blue_gray-900_05 text-white-A700",
  },
  gradient: {
    orange_300_04_blue_800_04: "bg-gradient  text-white-A700",
    orange_300_blue_gray_700: "bg-gradient1  shadow-bs2 text-white-A700",
  },
  outline: {
    black_900: "border border-black-900 border-solid",
    gray_300_02: "border border-gray-300_02 border-solid text-gray-600_02",
  },
};
const sizes = {
  xs: "p-[7px]",
  sm: "p-3",
  md: "p-[15px]",
  lg: "p-[18px]",
  xl: "p-[23px] sm:px-5",
  "2xl": "p-7 sm:px-5",
  "3xl": "p-[33px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "gradient", "outline"]),
  color: PropTypes.oneOf([
    "deep_orange_100",
    "gray_900_08",
    "blue_gray_700",
    "blue_gray_700_03",
    "white_A700",
    "orange_300_42",
    "blue_800_04",
    "gray_200_03",
    "orange_300",
    "cyan_700",
    "deep_purple_200",
    "blue_800_01",
    "white_A700_26",
    "blue_800",
    "blue_50",
    "blue_gray_900_05",
    "orange_300_04_blue_800_04",
    "orange_300_blue_gray_700",
    "black_900",
    "gray_300_02",
  ]),
};

export { Button };
