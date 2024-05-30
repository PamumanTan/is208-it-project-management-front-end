import { api } from '..'
import lessonsEndpoint from '../endpoints/lessons.endpoint'

/**
 * @typedef Lesson
 * @type {import('~/types/lesson.d').Lesson}
 */

const lessonsAction = {
    /**
     *
     * @returns {Promise<Lesson[]>}
     */
    getLessonsNow() {
        return new Promise(async (resolve, reject) => {
            try {
                const day = new Date().toISOString()
                const res = await api.get(`${lessonsEndpoint['get-lessons-by-day']}/${day}`)
                const data = res.data.data
                resolve(data)
            } catch (error) {
                reject(error)
            }
        })
    },
    /**
     *
     * @returns {Promise<Lesson[]>}
     */
    getTeacherLessonsNow() {
        return new Promise(async (resolve, reject) => {
            try {
                const day = new Date().toISOString()
                const res = await api.get(`${lessonsEndpoint['get-teacher-lessons-by-day']}/${day}`)
                const data = res.data.data
                resolve(data)
            } catch (error) {
                reject(error)
            }
        })
    },
    /**
     *
     * @returns {Promise<Lesson[]>}
     */
    getTeacherLessonsByDay(date) {
        return new Promise(async (resolve, reject) => {
            try {
                const day = date.toISOString()
                const res = await api.get(`${lessonsEndpoint['get-teacher-lessons-by-day']}/${day}`)
                const data = res.data.data
                resolve(data)
            } catch (error) {
                reject(error)
            }
        })
    },
    postCommentToLesson(lessonId, comment) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await api.post(
                    `${lessonsEndpoint['post-comment-to-lesson']}/${lessonId}/comment`,
                    {
                        comment,
                    },
                )

                const data = res.data
                resolve(data)
            } catch (error) {
                reject(error)
            }
        })
    },
}

export default lessonsAction
