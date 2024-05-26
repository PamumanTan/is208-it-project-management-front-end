import React from 'react'
import Modal from '../Modal'
import Button from '@mui/material/Button'

export default function LogOutModal({ open, onClose, onSubmit }) {
    return (
        <Modal
            title={'Đăng xuất'}
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
            <p className="p-4">Bạn có chắc muốn đăng xuất ?</p>
        </Modal>
    )
}
