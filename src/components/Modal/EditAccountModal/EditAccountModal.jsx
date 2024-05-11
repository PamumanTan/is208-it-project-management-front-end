import React, { useId } from 'react'
import Modal from '../Modal'
import Button from '@mui/material/Button'
import { useForm } from 'react-hook-form'

export default function EditAccountModal({ open, onClose, onSubmit }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    return (
        <Modal title={'Sửa Tài Khoản'} open={open} onClose={onClose}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 px-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="id">Mã giáo viên</label>
                    {errors.id && (
                        <span className="text-xs italic text-red-500">
                            Bạn chưa điền Mã giáo viên
                        </span>
                    )}
                    <input
                        className="rounded border border-gray-500 px-2 py-1"
                        disabled
                        {...register('id', { required: true })}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email">Email</label>
                    {errors.email && (
                        <span className="text-xs italic text-red-500">Bạn chưa điền Email</span>
                    )}
                    <input
                        className="rounded border border-gray-500 px-2 py-1"
                        {...register('email', { required: true })}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="name">Họ và tên</label>
                    {errors.name && (
                        <span className="text-xs italic text-red-500">Bạn chưa điền Họ và tên</span>
                    )}
                    <input
                        className="rounded border border-gray-500 px-2 py-1"
                        {...register('name', { required: true })}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password">Mật khẩu</label>
                    {errors.password && (
                        <span className="text-xs italic text-red-500">Bạn chưa điền Password</span>
                    )}
                    <input
                        className="rounded border border-gray-500 px-2 py-1"
                        type="password"
                        {...register('password', { required: true })}
                    />
                </div>
                <div className="flex justify-end gap-2 py-4">
                    <Button variant="contained" color="error" type="button" onClick={onClose}>
                        Hủy
                    </Button>
                    <Button variant="contained" type="submit">
                        Tạo
                    </Button>
                </div>
            </form>
        </Modal>
    )
}
