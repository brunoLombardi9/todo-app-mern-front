import { Typography } from '@mui/material'
import React from 'react'
import { CustomBox } from './'

const TaskDetails = () => {
    return (
        <>
            <CustomBox>
                <Typography textAlign="center" color="white">Nombre de a tarea</Typography>

            </CustomBox>

            <CustomBox>
                <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, nihil voluptatibus. Fugit repudiandae deleniti nulla veritatis, sunt eos similique velit magni. Tempora omnis alias, quam reprehenderit doloribus id voluptatibus expedita?</Typography>
            </CustomBox>

        </>
    )
}

export default TaskDetails