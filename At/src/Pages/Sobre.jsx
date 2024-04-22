import Main from "../Componentes/main/main";
import Planos from "../Componentes/Planos/plano.jsx";

export default function Sobre(){
    return(
        <>


<Main titulo='Bem-vindo à revolução dos vídeos!' texto='Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidadSomos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.' botao='Baixe o app' img ='../../public/ImagemHome2.png'/>  
<div className="Sobre">
    <h1>Planos</h1>
    <div  className="cardsPlanos">
        <Planos Img="../../public/ImagemPlano3.png" titulo="Individual" botao="Cadastrar"></Planos>
        <Planos Img="../../public/ImagemPlano2.png" titulo="Profissional - Times" botao="Cadastrar"></Planos>
        <Planos Img="../../public/ImagemPlano.png" titulo="Corporativo" botao="Entre em contato" cor='blue'></Planos>
    </div>
</div>
        </>
    )
}


