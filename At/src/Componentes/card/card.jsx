function Card (props){

     
    return(

        // <div className="cardDefinition">

        
        <div className="card" id={props.cor}>
            <div className="titulo">
            <div className="cardImg">
            <img src={props.img} />
            </div>
            </div>
           


           <div className="content">
            
            <h1 className="sub">{props.titulo}</h1>
            <h2 className="texto">{props.sub}</h2>
            <p>{props.texto}</p>
            
           </div>
            

        </div>

        // </div>

    );

}

export default Card