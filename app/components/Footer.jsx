import React from "react";
const today = new Date();

const Footer = () => {
  return (
    <footer className="flex justify-center p-3 border border-t-slate-700  ">
      Writing to Better Health | Copyright &copy; {today.getFullYear()}
    </footer>
  );
};

export default Footer;
