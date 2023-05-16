import React from "react";
const today = new Date();

const Footer = () => {
  return (
    <footer className="relative bottom-0 py-2 w-full flex justify-center border border-t-rosyBrown">
      Writing to Better Health | Copyright &copy; {today.getFullYear()}
    </footer>
  );
};

export default Footer;
