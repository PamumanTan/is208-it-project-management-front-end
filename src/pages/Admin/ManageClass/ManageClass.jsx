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
import classAction from '~/services/axios/actions/class.action'
import userAction from '~/services/axios/actions/user.action'
import { Link, useNavigate } from 'react-router-dom'

const ManageClass = () => {
    const [classData, setClassData] = useState([])
    const [teacherData, setTeacherData] = useState([])
    const navigate = useNavigate()
    const handleViewClass = (value) => {
        navigate(`/manage-class/${value}`)
    }
    const handleButtonClick = () => {
        toast.warning('Chức năng sẽ sớm được hoàn thiện !')
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await classAction.getAllClass()
                const updatedClassData = await Promise.all(
                    res.map(async (value) => {
                        const resTeacherData = await userAction.getUserByID(value.formTeacher)
                        value.formTeacher = resTeacherData.teacherName
                        return value
                    }),
                )
                setClassData(updatedClassData)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    return (
        <div className="flex h-full w-full flex-col">
            <h1 className="mb-8 text-3xl font-bold">Quản lý Lớp học</h1>
            <Container>
                <TableContainer component={Paper}>
                    <Table
                        sx={{ minWidth: 650 }}
                        aria-label="simple table"
                        className="[&_th]:font-bold"
                    >
                        <TableHead>
                            <TableRow className="bg-slate-300 [&_th]:text-lg">
                                <TableCell align="center">STT</TableCell>
                                <TableCell align="center">Lớp</TableCell>
                                <TableCell align="center">GVCN</TableCell>
                                <TableCell align="center">Chức năng</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="[&_th]:text-center">
                            {classData &&
                                classData.map((value, index) => (
                                    <TableRow
                                        key={value._id}
                                        sx={{
                                            '&:last-child td, &:last-child th': { border: 0 },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell align="center">{value.className}</TableCell>
                                        <TableCell align="center">{value.formTeacher}</TableCell>
                                        <TableCell align="center">
                                            <div className="flex flex-row items-center justify-center gap-5">
                                                {/* <Link to={`/manage-class/${value._id}`}> */}
                                                <Button
                                                    variant="contained"
                                                    color="info"
                                                    onClick={() => {
                                                        handleViewClass(value._id)
                                                    }}
                                                >
                                                    Xem
                                                </Button>
                                                {/* </Link> */}
                                                <Button
                                                    variant="contained"
                                                    color="error"
                                                    onClick={handleButtonClick}
                                                >
                                                    Xóa
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    color="warning"
                                                    onClick={handleButtonClick}
                                                >
                                                    Sửa
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {classData && classData.length == 0 && (
                    <div className="flex h-10 w-full items-center justify-center">
                        Không có thông tin.
                    </div>
                )}
            </Container>
        </div>
    )
}

export default ManageClass
