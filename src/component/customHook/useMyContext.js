import { useContext } from "react"

export const useWrappedContext = (context) => {
  const wrapped = useContext(context)
  return wrapped
}