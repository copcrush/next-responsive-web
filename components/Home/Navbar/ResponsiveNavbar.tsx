"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const ResponsiveNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const openNavbarHandler = () => setShowNavbar(true);
  const closeNavbarHandler = () => setShowNavbar(false);

  return (
    <div>
      <Navbar openNavbar={openNavbarHandler} />
      <MobileNavbar showNavbar={showNavbar} closeNavbar={closeNavbarHandler} />
    </div>
  );
};

export default ResponsiveNavbar;
