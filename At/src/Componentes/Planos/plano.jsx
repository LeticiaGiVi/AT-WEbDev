function Planos (props){

     
    return(
        <div className="Planos">
            <h3>{props.titulo}</h3>
            <hr></hr>
            <div className="ContentPlanos">
                <img src={props.Img} alt="" />
            </div>
            <button id={props.cor}>{props.botao}</button>
        </div>
    );

}

export default Planos