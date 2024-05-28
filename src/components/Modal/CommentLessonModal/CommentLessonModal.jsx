import React from 'react'
import Modal from '../Modal'
import Button from '@mui/material/Button'

export default function CommentLessonModal({
    open,
    onClose,
    onSubmit,
    classId,
    subject,
    lesson,
    comment,
    onChangeComment,
}) {
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit()
    }

    return (
        <Modal title={'Nhận xét buổi học'} open={open} onClose={onClose}>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 px-4 disabled:[&_input]:bg-gray-200 disabled:[&_input]:text-gray-500"
            >
                <div className="flex flex-col gap-1">
                    <label htmlFor="id">Mã lớp</label>

                    <input
                        className="rounded border border-gray-500 px-2 py-1"
                        value={classId}
                        disabled
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="subject">Môn học</label>

                    <input
                        className="rounded border border-gray-500 px-2 py-1"
                        value={subject}
                        disabled
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="name">Tiết học</label>

                    <input
                        className="rounded border border-gray-500 px-2 py-1"
                        value={lesson}
                        disabled
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="comment">Nhận xét</label>

                    <textarea
                        className="resize-none rounded border border-gray-500 px-2 py-1"
                        value={comment}
                        onChange={onChangeComment}
                        rows={3}
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
