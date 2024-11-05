import './Paginasound.css'
import img from '../../assets/images/landing-page-girl.png'
import Button from '../Atomos/Button/button'



function Paginasound({ title, text }) {
    return (
        <div className='girl'>

            <div className='description'>
                <img src={img} />
                <h2 className='titulo'>{title}</h2>
                <div className='title2'>
                    <p className='text'>Feel the music</p>
                    <p className='text2'> Stream over 20 thousands songs with one click</p>
                    <Button/>
                </div>
            </div>

        </div>

    )
}

export default Paginasound