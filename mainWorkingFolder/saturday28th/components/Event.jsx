import React from 'react'

const Event = () => {
    function handleClick(e){
        e.preventDefault();
        console.log("clicked");
    }
  return (
    <form onSubmit={handleClick}>
        <button type="submit">submit</button>

    </form>
  )
}

export default Event
