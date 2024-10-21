import { FC, ReactNode, useEffect } from "react"
import { useDispatch } from "react-redux"
import { UnknownAction } from "@reduxjs/toolkit"

type Props = {
  asyncThunk: () => void
  children: ReactNode
}

const PageWrapper: FC<Props> = ({ children, asyncThunk }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(asyncThunk() as unknown as UnknownAction)
  }, [asyncThunk, dispatch])

  return <>{children}</>
}

export default PageWrapper
