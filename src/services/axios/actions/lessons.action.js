import { api } from '..'
import lessonsEndpoint from '../endpoints/lessons.endpoint'

const lessonsAction = {
    getLessonsNow() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await api.get(lessonsEndpoint['get-lessons-by-day'], {
                    params: {
                        day: new Date().toISOString(),
                    },
                })
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
