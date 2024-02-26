import React, { useState } from 'react'
import { AiFillLike } from 'react-icons/ai'

function LikeButton() {
  const[liked, setLiked] = useState(false);
  const handleClick = () => {
    setLiked(!liked)
  }
  
  if(liked)
    return (
      <AiFillLike
      color="blue" 
      size="50" 
      onClick={handleClick}/>)

    else return (
      <AiFillLike
      color="grey" 
      size="50" 
      onClick={handleClick}/>)  
}

export default LikeButton