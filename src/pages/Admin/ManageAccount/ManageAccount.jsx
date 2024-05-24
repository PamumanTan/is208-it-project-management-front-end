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
import { DeleteAccountModal } from '~/components/Modal/DeleteAccountModal'
import { EditAccountModal } from '~/components/Modal/EditAccountModal'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import accountAction from '~/services/axios/actions/account.action'
import { toast } from 'react-toastify'

export default function ManageAccount() {
    const queryClient = useQueryClient()
    const { data } = useQuery({
        queryKey: ['get-all-accounts'],
        queryFn: accountAction.getAllAccounts,
    })

    const [isOpenAddModal, setIsOpenAddModal] = useState(false)
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
    const [isOpenEditModal, setIsOpenEditModal] = useState(false)
    const [choseAccount, setChoseAccount] = useState(null)

    const handleCreateAccount = async (account) => {
        // console.log("account: ", account);
        try {
            const res = await toast.promise(
                accountAction.postNewAccount({
                    email: account.email,
                    teacherName: account.name,
                    password: account.password,
                }),
                {
                    pending: 'Đang tạo tài khoản mới',
                    success: 'Tạo tài khoản mới thành công',
                    error: 'Tạo tài khoản mới thất bại',
                },
            )

            queryClient.invalidateQueries({ queryKey: ['get-all-accounts'] })
            setIsOpenAddModal(false)
        } catch (error) {}
    }

    const handleDeleteClick = (account) => {
        setChoseAccount(account)
        setIsOpenDeleteModal(true)
    }

    const handleEditClick = (account) => {
        setChoseAccount(account)
        setIsOpenEditModal(true)
    }

    const handleEditAccount = async (account) => {
        // console.log('account: ', account);
        try {
            const res = await toast.promise(
                accountAction.putAccountById(choseAccount._id, {
                    email: account.email,
                    teacherName: account.name,
                }),
                {
                    pending: 'Đang sửa tài khoản',
                    success: 'Sửa thành công',
                    error: 'Sửa thất bại',
                },
            )

            queryClient.invalidateQueries({ queryKey: ['get-all-accounts'] })
            setIsOpenEditModal(false)
        } catch (error) {}
    }

    const handleDeleteAccount = async () => {
        try {
            const res = await toast.promise(accountAction.deleteAccountById(choseAccount._id), {
                pending: 'Đang xóa tài khoản',
                success: 'Xóa thành công',
                error: 'Xóa thất bại',
            })

            queryClient.invalidateQueries({ queryKey: ['get-all-accounts'] })
            setIsOpenDeleteModal(false)
        } catch (error) {}
    }

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
                        {data &&
                            data.map((value) => (
                                <TableRow
                                    // key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {value._id}
                                    </TableCell>
                                    <TableCell>{value.email}</TableCell>
                                    <TableCell>{value.teacherName}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-row justify-center gap-2">
                                            <Button
                                                variant="contained"
                                                color="info"
                                                onClick={() => handleEditClick(value)}
                                            >
                                                Sửa
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="error"
                                                onClick={() => handleDeleteClick(value)}
                                            >
                                                Xóa
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <AddAccountModal
                open={isOpenAddModal}
                onClose={() => setIsOpenAddModal(false)}
                onSubmit={handleCreateAccount}
            />
            <DeleteAccountModal
                name={choseAccount?.email || 'Unknown'}
                open={isOpenDeleteModal}
                onClose={() => setIsOpenDeleteModal(false)}
                onSubmit={handleDeleteAccount}
            />
            <EditAccountModal
                open={isOpenEditModal}
                onClose={() => setIsOpenEditModal(false)}
                account={choseAccount}
                onSubmit={handleEditAccount}
            />
        </div>
    )
}
