import { useDispatch } from "react-redux"
import { setEditBlockId, setIsLoading } from "../../store/app"

function useSubmit<T>(submitFn: (data: T) => Promise<void>) {
  const dispatch = useDispatch()

  const submit = async (data: T) => {
    try {
      dispatch(setIsLoading(true))
      await submitFn(data)
      dispatch(setEditBlockId(""))
    } finally {
      dispatch(setIsLoading(false))
    }
  }

  return submit
}

export default useSubmit
