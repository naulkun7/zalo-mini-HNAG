import React from "react"
import TinderCard from "react-tinder-card"

export default function TinderCard() {
  return (
    <TinderCard
      onSwipe={onSwipe}
      onCardLeftScreen={() => onCardLeftScreen("fooBar")}
      preventSwipe={["right", "left"]}
    >
      Hello, World!
    </TinderCard>
  )
}
