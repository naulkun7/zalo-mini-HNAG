import React from "react"
import TinderCard from "react-tinder-card"
import PropType from "prop-types"

export default function MyTinderCard({ children, onSwipe, onCardLeftScreen }) {
  return (
    <TinderCard
      onSwipe={onSwipe}
      onCardLeftScreen={onCardLeftScreen}
      // preventSwipe={["right", "left"]}
    >
      {children}
    </TinderCard>
  )
}

MyTinderCard.propTypes = {
  children: PropType.node.isRequired,
  onSwipe: PropType.func.isRequired,
  onCardLeftScreen: PropType.func.isRequired,
}
