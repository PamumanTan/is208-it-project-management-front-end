import { create } from 'zustand'

const initialState = {
    id: null,
    username: null,
    email: null,
    isAdmin: false,
    isLogin: false,
    isLoading: true,
}

const userStore = create((set) => ({
    ...initialState,
    login: (user) => {
        set({
            id: user.id,
            username: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isLogin: true,
            isLoading: false,
        })
    },
    logout: () => {
        set(initialState)
    },
}))

export default userStore
