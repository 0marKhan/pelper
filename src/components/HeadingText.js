import React from "react";
import styled from "styled-components";

const AllignedText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  font-size: 1.8rem;
  font-weight: bold;

  @media (max-width: 415px) {
    font-size: 1.2rem;
  }
`;

const Line = styled.div`
  margin-bottom: 0.5rem;
`;

const Purple = styled.span`
  color: #ff00ff;
`;

const HeadingText = () => {
  return (
    <AllignedText>
      <Line>Creating Impact Together</Line>
      <div>
        {" "}
        Navigating the Path of <Purple>Compassion</Purple>.
      </div>
    </AllignedText>
  );
};

export default HeadingText;
