import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'
import { AddAccountModal } from '~/components/Modal/AddAccountModal'

export default function ManageAccount() {
    const [isOpenAddModal, setIsOpenAddModal] = useState(false)

    return (
        <div className="container flex flex-col gap-4 p-8">
            <h1 className="text-2xl font-bold">Quản Lí Tài Khoản</h1>
            <div className="flex justify-end">
                <Button variant="contained" onClick={() => setIsOpenAddModal(true)}>
                    Tạo tài khoản
                </Button>
            </div>
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 650 }}
                    aria-label="simple table"
                    className="[&_th]:font-bold"
                >
                    <TableHead>
                        <TableRow className="[&_th]:text-lg">
                            <TableCell align="center">Mã giáo viên</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Họ và tên</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="[&_td]:text-center [&_th]:text-center">
                        <TableRow
                            // key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                GV001
                            </TableCell>
                            <TableCell>giaovien001@gmail.com</TableCell>
                            <TableCell>Nguyen Van A</TableCell>
                            <TableCell>
                                <div className="flex flex-row justify-center gap-2">
                                    <Button variant="contained" color="info">
                                        Sửa
                                    </Button>
                                    <Button variant="contained" color="error">
                                        Xóa
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <AddAccountModal open={isOpenAddModal} onClose={() => setIsOpenAddModal(false)} />
        </div>
    )
}
