import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #333333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 20px;
  color: #fff;
  width: 300px;
  height: 33.8rem;
  margin: 4.8rem 1.5rem 0 0;
`;

const Nonprofits = styled.div`
  color: #a0a0a0;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const List = styled.div`
  padding-top: 1.5rem;
`;

const NavbarNames = [
  "Adoption Nonprofits",
  "Animal Nonprofits",
  "Autism Nonprofits",
  "Islam Nonprofits",
  "Buddhism Nonprofits",
  "Cancer Nonprofits",
  "Christianity Nonprofits",
  "Disease Nonprofits",
  "Hinduism Nonprofits",
  "Health Nonprofits",
  "Immigrants Nonprofits",
  "Justice Nonprofits",
  "Refugees Nonprofits",
  "Religion Nonprofits",
];

const NonProfitNames = () => {
  return (
    <CardContainer>
      <List>
        {NavbarNames.map((name, index) => (
          <Nonprofits key={index}>{name}</Nonprofits>
        ))}
      </List>
    </CardContainer>
  );
};

export default NonProfitNames;
