import React from "react";
import styled from "styled-components";

import Card from "../components/Card";

const NonProfitName = styled.h3`
  font-size: 1.4rem;
  margin: 3rem 0 0 1.5rem;
`;

const CardContainer = styled.div`
  display: flex;
  margin: 0 1rem 0 1rem;
`;

const SeeMore = styled.div`
  color: #ff00ff;
  margin: 0.5rem 0 0 1.5rem;
`;

const NonProfitSection = (props) => {
  return (
    <div>
      <NonProfitName>{props.heading}</NonProfitName>
      <SeeMore>See More</SeeMore>
      <CardContainer>
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </div>
  );
};

export default NonProfitSection;
