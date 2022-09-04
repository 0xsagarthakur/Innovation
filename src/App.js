import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import Insurance from './components/Insurance'
import InsuranceType from './components/InsuranceType'
import KnowledgeCheck from './components/KnowledgeCheck'
import Path from './components/Path'
import Developer from './components/Developer'
import Conclusion from './components/Conclusion'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/Insurance' element={<Insurance/>}/>
        <Route path='/InsuranceType' element={<InsuranceType/>} />
        <Route path='/KnowledgeCheck' element={<KnowledgeCheck/>} />
        <Route path='/Path' element={<Path/>} />
        <Route path='/Developer' element={<Developer/>} />
        <Route path='/Conclusion' element={<Conclusion/>} />
      </Routes>
    </>
  )
}

export default App