import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Routes'
import { useGlobalStates } from './utils/global.context'


const Navbar = () => {

  const {state,dispatch}=useGlobalStates()

  const style={color: state.dark && '#FFF'};
  return (
    <div className='container'style={{ backgroundColor: state.dark && '#566573' }}>
        <div className='nav_title'>
          <p className='p1' style={{color: state.dark && 'white'}}>DH</p>
          <p className='p2' style={{color: state.dark && 'pink'}}>Odonto</p>
        </div>
        
        <nav>
          <Link to={routes.home}className='link' style={style}><p>Home</p></Link>
          <Link to={routes.contact} style={style}><p>Contact</p></Link>
          <Link to={routes.favs} style={style}><p>Favs</p></Link>
          <button onClick={()=>dispatch(!state.dark ? { type: 'dark' }: { type: 'light' })} className='btn'
          style={{ color: state.dark && 'white', background: state.dark && '#db7093' }}>{state.dark ?'🌞' : '🌛'}</button>
        </nav>
    </div>
  )
}

export default Navbar