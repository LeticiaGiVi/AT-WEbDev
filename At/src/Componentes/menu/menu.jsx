import{Link} from 'react-router-dom'

function Menu (){

    return(
    <header>
   <Link to="/">Home</Link>
   <Link to="/sobre">Sobre</Link>
   <Link to="/contato">Contato</Link>
    </header>
    );
}

export default Menu