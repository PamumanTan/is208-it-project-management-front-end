import React from 'react'
import MuiModal from '@mui/material/Modal'
import { cn } from '~/helpers/cn'

export default function Modal({ open, onClose, title, children, buttons, className }) {
    return (
        <MuiModal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div
                className={cn(
                    'absolute left-1/2 top-1/2 min-w-[400px] -translate-x-1/2 -translate-y-1/2 rounded bg-white shadow',
                    className,
                )}
            >
                <div className="modal-header flex items-center justify-center p-4">
                    <h1 className="text-center text-2xl font-bold">{title}</h1>
                </div>

                {children}

                {buttons && (
                    <div className="modal-footer flex justify-end gap-2 p-4">{buttons}</div>
                )}
            </div>
        </MuiModal>
    )
}
