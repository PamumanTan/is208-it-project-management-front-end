import React from 'react'
import Modal from '../Modal'
import Button from '@mui/material/Button'

export default function DeleteAccountModal({ name, open, onClose, onSubmit }) {
    return (
        <Modal
            title={'Xóa Tài Khoản'}
            open={open}
            onClose={onClose}
            buttons={
                <>
                    <Button variant="contained" onClick={onClose} color="error">
                        Hủy
                    </Button>
                    <Button variant="contained" onClick={onSubmit}>
                        Xác nhận
                    </Button>
                </>
            }
        >
            <p className="p-4">
                Bạn có chắc muốn xóa tài khoản <strong className="text-primary">{name}</strong>{' '}
                không?
            </p>
        </Modal>
    )
}
