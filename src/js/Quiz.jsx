
import React from 'react'
import { useParams } from 'react-router-dom'
import Main from './Main';

export default function Quiz(props) {
    const param = useParams();
    console.log(param)

  return (
    <Main {...props} quizId = {param.quizId}/>
  )
}
