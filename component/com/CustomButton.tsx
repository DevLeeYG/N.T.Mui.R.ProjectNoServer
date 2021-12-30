import * as React from "react";
import clsx from "clsx";
import Stack from "@mui/material/Stack";
import { ButtonUnstyledProps, useButton } from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import { Props } from "../Props";
import { TextField, Box, Typography } from "@mui/material";
import stlyed from "styled-components";

const SignUpAndFind = stlyed.span`
    color : #007fff;
    cursor: pointer;
    font-weight: 600;
    font-family: Helvetica, Arial, sans-serif;
    &:hover {
        color : #1100ff;
    }
`;

const CustomButtonRoot = styled("button")`
  background-color: #007fff;
  padding: 15px 20px;
  border-radius: 3px;
  margin-top: 15px;
  width: 100%;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #0059b2;
  }

  &.active {
    background-color: #004386;
  }

  &.focusVisible {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`;

const Select = styled("div")`
  text-align: center;
  margin-top: 15px;
`;

const CustomButton = React.forwardRef(function CustomButton(
  prop: ButtonUnstyledProps,
  ref: React.ForwardedRef<any>
) {
  const { children } = prop;
  const { active, disabled, focusVisible, getRootProps } = useButton({
    ...prop,
    ref,
    component: CustomButtonRoot,
  });

  const classes = {
    active,
    disabled,
    focusVisible,
  };

  return (
    <CustomButtonRoot {...getRootProps()} className={clsx(classes)}>
      {children}
    </CustomButtonRoot>
  );
});

export default function UseButton() {
  return (
    <Box>
      <Stack spacing={2} direction="row">
        <CustomButton onClick={() => console.log("click!")}>
          로그인
        </CustomButton>
      </Stack>
      <Select>
        <SignUpAndFind>sign up</SignUpAndFind>

        <em> / </em>
        <SignUpAndFind>find id</SignUpAndFind>
      </Select>
    </Box>
  );
}
