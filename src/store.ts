import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

interface Store {
  id: string
  isAdmin: boolean
  isLogged: boolean,
  setId: (id: string) => void
  setIsAdmin: (isAdmin: boolean) => void
  setIsLogged: (isLogged: boolean) => void
}

const useUserStore = create(
  persist<Store>(
    set => ({
      id: "",
      isAdmin: false,
      isLogged: false,
      setId: id => set({ id }),
      setIsAdmin: isAdmin => set({ isAdmin }),
      setIsLogged: isLogged => set({ isLogged })
    }),
    {
      name: "user-data"
    }
  )
)

export default useUserStore
