import React from 'react'
import { useParams } from 'react-router-dom';
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery';

function Detail() {

  let params = useParams();

  return (
    <PhotoCardWithQuery id={params.id}/>
  )
}

export default Detail;