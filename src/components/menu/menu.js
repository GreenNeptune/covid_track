import React from 'react'
import MenuBtn from '../menuBtn/menuItemBtn'
function Menu(props) {

  return (
    <menu>
      <MenuBtn title="click me" date={new Date()} />
    </menu>
  )
}




export default Menu