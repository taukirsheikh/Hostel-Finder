import React from 'react'
import Navbar from '../homeComponents/navbar'
import SearchbarComponent from './SearchComponent'
import HostelDetailsCard from './SearchedList'

export const SearchScreen = () => {
  return (
    <>
    <Navbar/>
    <SearchbarComponent/>
    <HostelDetailsCard/>
    
   
    </>
  )
}
