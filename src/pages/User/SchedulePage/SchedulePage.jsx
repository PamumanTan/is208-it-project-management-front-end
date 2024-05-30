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
import DayButton from '~/components/Button/DayButton'

const SchedulePage = () => {
    const currentDate = new Date()
    const [data, setData] = useState()
    const [day, setDay] = useState(currentDate)

    // date handle
    const weekdays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']
    const dayOfWeek = currentDate.getDay() - 1
    const today = weekdays[dayOfWeek]
    // const day = new Date(currentDate)
    const firstDayOfWeek = new Date(currentDate)
    firstDayOfWeek.setDate(currentDate.getDate() - dayOfWeek)
    const lastDayOfWeek = new Date(currentDate)
    lastDayOfWeek.setDate(currentDate.getDate() + (6 - dayOfWeek))
    const firstDay = formatDate(firstDayOfWeek)
    const lastDay = formatDate(lastDayOfWeek)
    const changeDay = (index) => {
        let temp = new Date(day)
        temp.setDate(day.getDate() + index - (day.getDay() - 1))
        setDay(temp)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await lessonsAction.getTeacherLessonsNow()
                setData(res)
                setDay(currentDate)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    useEffect(() => {
        const fetchNewData = async () => {
            try {
                const res = await lessonsAction.getTeacherLessonsByDay(day)
                setData(res)
            } catch (error) {
                console.log(error)
            }
        }
        fetchNewData()
    }, [day])
    return (
        <div className="flex h-full w-full flex-col">
            <h1 className="mb-8 text-3xl font-bold">Thông tin lịch dạy ngày {formatDate(day)}</h1>
            <div className="flex w-full flex-row items-center justify-center">
                <Button size="large">
                    <ArrowCircleLeftIcon fontSize="large" />
                </Button>
                <div>
                    <h3>
                        {' '}
                        Tuần {getWeekNumber(day)} ({firstDay} - {lastDay})
                    </h3>
                </div>
                <Button size="large">
                    <ArrowCircleRightIcon fontSize="large" />
                </Button>
            </div>
            <div className="flex w-full flex-row items-center justify-center gap-5 py-3">
                {weekdays.map((value, index) => (
                    <DayButton
                        value={value}
                        index={index}
                        key={index}
                        toDay={day.getDay() - 1}
                        onClick={() => changeDay(index)}
                    />
                ))}
            </div>
            <Container>
                <TableContainer component={Paper}>
                    <Table
                        sx={{ minWidth: 650 }}
                        aria-label="simple table"
                        className="[&_th]:font-bold"
                    >
                        <TableHead>
                            <TableRow className="bg-slate-300 [&_th]:text-lg">
                                <TableCell align="center">Tiết</TableCell>
                                <TableCell align="center">Lớp</TableCell>
                                <TableCell align="center">Môn học</TableCell>
                                <TableCell align="center">Tình trạng</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="[&_td]:text-center [&_th]:text-center">
                            {data &&
                                data.map((value) => (
                                    <TableRow
                                        key={value._id}
                                        sx={{
                                            '&:last-child td, &:last-child th': { border: 0 },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {value.lessonNum}
                                        </TableCell>
                                        <TableCell>{value.class.className}</TableCell>
                                        <TableCell>{value.subject.subjectName}</TableCell>
                                        <TableCell>
                                            {value.status ? 'Đã nhận xét' : 'Chưa nhận xét'}
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {data && data.length == 0 && (
                    <div className="flex h-10 w-full items-center justify-center">
                        Không có lịch dạy
                    </div>
                )}
            </Container>
        </div>
    )
}

export default SchedulePage
