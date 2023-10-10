import React, { useEffect } from "react";
import styled from "styled-components";

import HeadingText from "../components/HeadingText";
import SearchBox from "../UI/SearchBox";

const SearchBoxCenter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SearchHint = styled.p`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  color: #a0a0a0;
`;

function Home() {
  return (
    <>
      <HeadingText />
      <SearchBoxCenter>
        <SearchBox
          id="outlined-basic"
          label="Search Type of Nonprofit Organizations"
          variant="outlined"
          style={{ margin: "1.5rem 0rem 0 0rem" }}
        />
      </SearchBoxCenter>
      <SearchHint>Enter keyword for example: cancer, animal</SearchHint>
    </>
  );
}

export default Home;
