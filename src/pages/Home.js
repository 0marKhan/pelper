import React from "react";
import styled from "styled-components";

import HeadingText from "../components/HeadingText";
import SearchBox from "../UI/SearchBox";
import NonProfitSection from "../components/NonProfitSection";
import NonProfitNames from "../components/NonProfitNames";

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

const MainContainer = styled.div`
  display: flex;
  flex: 1;
`;

const LeftContainer = styled.div`
  flex: 2.2;
  @media (max-width: 1000px) {
    flex: 1; /* Takes the full width when screen is smaller */
  }
`;

const RightContainer = styled.div`
  flex: 1;
  margin-top: 3rem;
  @media (max-width: 1000px) {
    display: none; /* Hide when screen is smaller */
  }
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

      <MainContainer>
        <LeftContainer>
          <NonProfitSection heading="Adoption Nonprofits" />
          <NonProfitSection heading="Cancer Nonprofits" />
          <NonProfitSection heading="Religion Nonprofits" />
        </LeftContainer>
        <RightContainer>
          <NonProfitNames />
        </RightContainer>
      </MainContainer>
    </>
  );
}

export default Home;
