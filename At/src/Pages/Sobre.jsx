import Main from "../Componentes/main/main";
import Planos from "../Componentes/Planos/plano.jsx";

export default function Sobre(){
    return(
        <>


<Main titulo='Bem-vindo à revolução dos vídeos!' texto='Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidadSomos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.' botao='Baixe o app' img ='public/at-img.jpeg'/>  
<div className="cardsSobre">

<Planos></Planos>
</div>
        </>
    )
}


