import './rodape.css'

function Rodape({titulo1, item1, item2, item3, titulo2, item4, item5}){
    return(
       <div className='footer-body'>
        <div className='title' >
            {titulo1}
        </div>
        <div className='itens'>
        <div>
            {item1}
        </div>
        <div>
            {item2}
        </div>
        <div>
            {item3}
        </div></div>
        <div className='title'>
            {titulo2}
        </div>
        <div className='itens'>
        <div>
            {item4}
        </div>
        <div>
            {item5}
        </div>
        </div>
       </div>
                
        

    )
}

export default Rodape;