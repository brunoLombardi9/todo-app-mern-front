import React from 'react'
import { useParams } from 'react-router-dom'
import CustomBox from '../components/CustomBox'

const Task = () => {
  const params = useParams()
  console.log(params.task)
  return (
    <CustomBox>
      Task
    </CustomBox>
  )
}

export default Task