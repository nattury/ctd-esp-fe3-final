import React from 'react'
import Card from '../Components/Card'
import { useGlobalStates } from '../Components/utils/global.context'

const Home = () => {

   const {data}=useGlobalStates()
  return (
    <main className="" >
      <h1 >Home</h1>
      <div className='card-grid'>
        {data.map((e)=><Card name={e.name} id={e.id} username={e.username}/>)}
        <Card/>
      </div>
    </main>
  )
}

export default Home