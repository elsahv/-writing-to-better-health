import React from "react";
const today = new Date();

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full flex justify-center border border-t-slate-700">
      Writing to Better Health | Copyright &copy; {today.getFullYear()}
    </footer>
  );
};

export default Footer;
