import React from 'react'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const Practise = () => {
    
  const search = useLocation().search;
  const link = new URLSearchParams(search).get('link')
  console.log(link);

  return (
    <div>{link}</div>
  )
}

export default Practise