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
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const ClassPage = () => {
    const navigate = useNavigate()
    const param = useParams()
    const classData = {
        _id: param.slug,
    }
    const [students, setStudents] = useState([])
    const [className, setclassName] = useState('')
    const handleButtonClick = () => {
        toast.warning('Chức năng sẽ sớm được hoàn thiện !')
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await classAction.getClassStudent(classData._id)
                setclassName(res[0].class.className)
                setStudents(res)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    return (
        <div className="flex h-full w-full flex-col">
            <div className="flex flex-row justify-between">
                <h1 className="mb-8 text-3xl font-bold">Quản lý Lớp {className}</h1>
                <Button
                    onClick={() => {
                        navigate('/admin/manage-class')
                    }}
                >
                    Trở lại trang trước
                </Button>
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
                                <TableCell align="center">STT</TableCell>
                                <TableCell align="center">Tên</TableCell>
                                <TableCell align="center">Giới tính</TableCell>
                                <TableCell align="center">Chức năng</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="[&_th]:text-center">
                            {students &&
                                students.map((value, index) => (
                                    <TableRow
                                        key={value._id}
                                        sx={{
                                            '&:last-child td, &:last-child th': { border: 0 },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell align="center">{value.studentName}</TableCell>
                                        <TableCell align="center">{value.male}</TableCell>
                                        <TableCell align="center">
                                            <div className="flex flex-row items-center justify-center gap-5">
                                                <Button
                                                    variant="contained"
                                                    color="info"
                                                    onClick={handleButtonClick}
                                                >
                                                    Xem
                                                </Button>
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
                {students && students.length == 0 && (
                    <div className="flex h-10 w-full items-center justify-center">
                        Không có thông tin.
                    </div>
                )}
            </Container>
        </div>
    )
}

export default ClassPage
