import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import lessonsAction from '~/services/axios/actions/lessons.action'
import { getWeekNumber, formatDate } from '~/helpers/formats/date.format'

const TimeTablePage = () => {
    const [data, setdata] = useState()
    const weekdays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']
    const lessonNum = ['1', '2', '3', '4', '5', ' ', '6', '7', '8', '9', '10']
    return (
        <div className="flex h-full w-full flex-col">
            <h1 className="mb-8 text-3xl font-bold">Thời khóa biểu</h1>
            <Container>
                <TableContainer component={Paper}>
                    <Table
                        sx={{ minWidth: 650 }}
                        aria-label="simple table"
                        className="[&_th]:font-bold"
                    >
                        <TableHead>
                            <TableRow className="bg-slate-300 [&_th]:text-lg">
                                {weekdays.map((value) => (
                                    <TableCell align="center">{value}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody className="[&_td]:text-center [&_th]:text-center"></TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}

export default TimeTablePage
