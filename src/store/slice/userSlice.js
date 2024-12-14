export const createUserSlice = (set) => ({
    user: {},
    addUser: (user) => set((state) => {
        console.log(user)
        return { user }
    }),
})
  