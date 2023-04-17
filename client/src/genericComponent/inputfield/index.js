import { InputBase } from "@mui/material";
import React from "react";

export default function InputField({ placeholder, className }) {
  return <InputBase placeholder={placeholder} className={className} />;
}
