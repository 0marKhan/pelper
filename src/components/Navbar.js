import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SideNav from "../components/SideNav";

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ff00ff;
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 1rem;
`;

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);

  useEffect(() => {
    // Update the isSmallScreen state when the window is resized
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <StyledNavbar>
        Pelper
        {isSmallScreen && <SideNav />}
      </StyledNavbar>
    </div>
  );
};

export default Navbar;
