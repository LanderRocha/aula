import './Navbar.css'

function Navbar({item1, item2, item3, item4}){
    return(
        <div className='navbar'>
<div>
    Nome
</div>
<div className='navbar-content'>
<div className='navbar-content-children'>
    {item1}
</div>
<div className='navbar-content-children'>
{item2}
</div>
<div className='navbar-content-children'>
 {item3}
</div>
<div className='navbar-content-children'>
    {item4}
</div>
</div>
<div className='footer'>
    <footer>
<p>&copy; 2023 Lander Garbelini. Todos os direitos reservados.</p>

</footer>
</div>
</div>

    )
}

export default Navbar;