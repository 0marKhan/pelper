import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #333333;
  width: 100%;
  margin: 1.5rem 0.5rem 0.5rem 0.5rem;
  height: 4rem;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #fff;
`;

const Card = () => {
  return (
    <CardContainer>
      <div>Non profit 1</div>
      <div>lorem epsum</div>
    </CardContainer>
  );
};

export default Card;
