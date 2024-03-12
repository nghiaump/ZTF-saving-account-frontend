import React from "react";
import CustomNavbar from "../components/CustomNavbar";

export default function MainLayout({
  navbar = <CustomNavbar />,
  body,
  footer = <></>,
}) {
  return (
    <>
      {navbar}
      {body}
      {footer}
    </>
  );
}
