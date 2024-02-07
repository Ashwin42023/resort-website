import React from 'react'
import LayoutPage from '@/component/layout';
import RoomsPage from '@/component/roomspage';

function Rooms() {
  return (
    <RoomsPage/>
  )
}
Rooms.getLayout = function getLayout(page) {
    return <LayoutPage>{page}</LayoutPage>;
  };

export default Rooms