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
import { scheduleData, teacherNames } from '~/helpers/mockupData'
import DayButton from '~/components/Button/DayButton'
import SubTeacherModal from '~/components/Modal/SubTeacherModal/SubTeacherModal'
import { toast } from 'react-toastify'

const ManageSchedule = () => {
    const [data, setdata] = useState([])
    const currentDate = new Date()
    const [day, setDay] = useState(currentDate)
    const [openModal, setopenModal] = useState(false)
    const [subData, setsubData] = useState()
    // date handle
    const weekdays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']
    const dayOfWeek = currentDate.getDay() - 1
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
        setdata(scheduleData)
    }, [])
    return (
        <div className="flex h-full w-full flex-col">
            <h1 className="mb-8 text-3xl font-bold">Quản lý lịch dạy</h1>
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
                                <TableCell align="center">Giáo viên</TableCell>
                                <TableCell align="center">Tình trạng</TableCell>
                                <TableCell align="center">Phân công</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="[&_th]:text-center">
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
                                        <TableCell align="center">
                                            {value.class.className}
                                        </TableCell>
                                        <TableCell align="center">
                                            {value.subject.subjectName}
                                        </TableCell>
                                        <TableCell align="center">
                                            <div>{value.subject.teacherName}</div>
                                        </TableCell>
                                        <TableCell align="center">
                                            {value.status ? 'Đã nhận xét' : 'Chưa nhận xét'}
                                        </TableCell>
                                        <TableCell align="center">
                                            {value.status ? (
                                                <Button variant="contained" disabled color="error">
                                                    Phân công dạy thay
                                                </Button>
                                            ) : (
                                                <Button
                                                    variant="contained"
                                                    onClick={() => {
                                                        setsubData(value)
                                                        setopenModal(true)
                                                    }}
                                                >
                                                    Phân công dạy thay
                                                </Button>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {data && data.length == 0 && (
                    <div className="flex h-10 w-full items-center justify-center">
                        Không có thông tin.
                    </div>
                )}
                <div className="fixed">
                    <SubTeacherModal
                        value={subData}
                        open={openModal}
                        onClose={() => setopenModal(false)}
                        onSubmit={() => {
                            toast.error('Hiện chưa thể đăng ký dạy thay !')
                            setopenModal(false)
                        }}
                        names={teacherNames.filter((name) => name !== subData?.subject.teacherName)}
                    />
                </div>
            </Container>
        </div>
    )
}

export default ManageSchedule
