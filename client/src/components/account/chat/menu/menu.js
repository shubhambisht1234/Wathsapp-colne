import React from "react";
import Header from "./Header";
import Conversacion from "./Conversacion";
import Serarch from "./Serarch";

export default function Menu({ setChatListOpen }) {
  return (
    <>
      <Header />
      <Serarch />
      <Conversacion setChatListOpen={setChatListOpen} />
    </>
  );
}
