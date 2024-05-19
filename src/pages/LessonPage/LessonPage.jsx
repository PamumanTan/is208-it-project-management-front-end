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

export default function LessonPage() {
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)
    const [choseLesson, setChoseLesson] = useState(null)
    const [comment, setComment] = useState('')

    const handleCommentModalOpen = (id) => {
        setIsCommentModalOpen(true)
        setComment('')
    }

    const handleChangeComment = (e) => {
        setComment(e.target.value)
    }

    const handleCommentSubmit = async () => {
        try {
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
                        <TableRow
                            // key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                1
                            </TableCell>
                            <TableCell>10A1</TableCell>
                            <TableCell>Toán</TableCell>
                            <TableCell>
                                <div className="flex flex-row justify-center gap-2">
                                    <Button variant="contained" color="info">
                                        Điểm danh
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={handleCommentModalOpen}
                                    >
                                        Nhận xét
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <CommentLessonModal
                open={isCommentModalOpen}
                onClose={() => setIsCommentModalOpen(false)}
                classId={'10A1'}
                lesson={'1'}
                subject={'Toán'}
                comment={comment}
                onChangeComment={handleChangeComment}
                onSubmit={handleCommentSubmit}
            />
        </Container>
    )
}
