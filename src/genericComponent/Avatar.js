import { Avatar } from "@mui/material";
import React from "react";

export default function AvatarComponent({ src, alt, onClick, styledName }) {
  return <Avatar alt={alt} src={src} onClick={onClick} style={styledName} />;
}
