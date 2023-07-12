import React from "react";
import { Container } from "react-bootstrap";
import Topics from "./Topics";
import HomeScreen from "./HomeScreen";

const MainPage = () => {
  return (
    <Container className="py-3 main">
      <Topics />
      <HomeScreen />
    </Container>
  );
};

export default MainPage;
