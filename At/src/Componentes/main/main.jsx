function Main (props){

     
    return(

        <div className="Main">
           
           <div className="texto">
            <h1>{props.titulo}</h1>
            <p>{props.texto}</p>
            <button>{props.botao}</button>
           </div>
            
            <div className="Img">
            <img src={props.img} />
            </div>

        </div>


    );

}

export default Main