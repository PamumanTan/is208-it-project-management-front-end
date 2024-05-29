import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'
import { CommentLessonModal } from '~/components/Modal/CommentLessonModal'
import { useQuery } from '@tanstack/react-query'
import lessonsAction from '~/services/axios/actions/lessons.action'
import { toast } from 'react-toastify'

export default function LessonPage() {
    const { data } = useQuery({
        queryKey: ['get-all-lessons'],
        queryFn: lessonsAction.getTeacherLessonsNow,
    })
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)
    /**
     * @type {[import('~/types/lesson.d').Lesson | null]}
     */
    const [choseLesson, setChoseLesson] = useState(null)
    const [comment, setComment] = useState('')

    // console.log('data: ', data)

    const handleCommentModalOpen = (lesson) => {
        setChoseLesson(lesson)
        setIsCommentModalOpen(true)
        setComment(lesson.comment || '')
    }

    const handleChangeComment = (e) => {
        setComment(e.target.value)
    }

    const handleCommentSubmit = async () => {
        try {
            const res = await toast.promise(
                lessonsAction.postCommentToLesson(choseLesson._id, comment),
                {
                    pending: 'Đang lưu nhận xét',
                    success: 'Lưu thành công',
                    error: 'Lưu thất bại',
                },
            )

            setIsCommentModalOpen(false)
        } catch (error) {}
    }

    return (
        <Container>
            <h2 className="mb-8 text-3xl font-bold">Lịch học hôm nay</h2>
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 650 }}
                    aria-label="simple table"
                    className="[&_th]:font-bold"
                >
                    <TableHead>
                        <TableRow className="[&_th]:text-lg">
                            <TableCell align="center">Tiết</TableCell>
                            <TableCell align="center">Lớp</TableCell>
                            <TableCell align="center">Môn học</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="[&_td]:text-center [&_th]:text-center">
                        {data &&
                            data.map((value) => (
                                <TableRow
                                    key={value._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {value.lessonNum}
                                    </TableCell>
                                    <TableCell>{value.class.className}</TableCell>
                                    <TableCell>{value.subject.subjectName}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-row justify-center gap-2">
                                            <Button variant="contained" color="info">
                                                Điểm danh
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="success"
                                                onClick={() => handleCommentModalOpen(value)}
                                            >
                                                Nhận xét
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <CommentLessonModal
                open={isCommentModalOpen}
                onClose={() => setIsCommentModalOpen(false)}
                classId={choseLesson?.class.className}
                lesson={choseLesson?.lessonNum}
                subject={choseLesson?.subject.subjectName}
                comment={comment}
                onChangeComment={handleChangeComment}
                onSubmit={handleCommentSubmit}
            />
        </Container>
    )
}
