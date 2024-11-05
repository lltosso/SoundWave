import './header.css'
import Nav from '../../Atomos/Nav/Nav'
import img from '../../../assets/images/logo.png'

function Header({title}) {
    return (
        <div className='clase1'>

        <div className='soundwave'>
        <img src={img}/>
        <p>{title}</p>
        </div>
        <Nav/>
       

        </div>

    )
}

export default Header