import React, { useEffect } from 'react'
import { useContext } from 'react'
import Output from './Output'
import Input from './Input'
import InputContextProvider from '../Contexts/InputContextProvider'

const Landing = () => {

  return (
    <div className='w-full flex flex-col sm:flex-col md:flex-col justify-center sm:gap-10 md:gap-8 items-center' >
      <InputContextProvider> 
        <Input/>
        <Output/>
        </InputContextProvider>
    </div>
  )
}

export default Landing