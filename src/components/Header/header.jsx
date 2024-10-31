import './header.css'
import Nav from '../Nav/Nav'
import img from '../../assets/images/logo.png'

function Header({title}) {
    return (
        <>
        <div>
        <img src={img}/>
        <h1>{title}</h1>
        </div>
        <Nav/>
       

        </>

    )
}

export default Header