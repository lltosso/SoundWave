import './Paginasound.css'

function Paginasound({title, text}) {
    return (
        <>
        <div className='top'>
     <div className='logo'>
        <h2 className='titulo'>{title}</h2>
        
        <p className='text'>{text}</p>
    </div>
    </div>
        
        </>

    )
}

export default Paginasound