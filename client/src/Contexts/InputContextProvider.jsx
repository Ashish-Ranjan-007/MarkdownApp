import React, { useState } from 'react'
import InputContext from './InputContext'

const InputContextProvider = ({children}) => {
    const[ view, setView] = useState()
  return (
    <InputContext.Provider value={{view,setView}}>
    {children}
    </InputContext.Provider>
  )
}

export default InputContextProvider