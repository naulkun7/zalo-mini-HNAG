import React from "react";
import TinderCard from "react-tinder-card";

export default function MyTinderCard({ children, onSwipe, onCardLeftScreen }) {
  return (
    <TinderCard
      onSwipe={onSwipe}
      onCardLeftScreen={onCardLeftScreen}
      // preventSwipe={["right", "left"]}
    >
      {children}
    </TinderCard>
  );
}
