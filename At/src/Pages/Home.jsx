import Card from "../Componentes/card/card";
import Main from "../Componentes/main/main";


export default function Home2 (){

    return(

<>
<Main titulo='Crie seus vídeos online' texto='Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade' botao='Começar agora!' img ='../../public/ImagemHome.png'/>  


      <div className='cards'>

<Card titulo='01' img='' cor='orange' sub='Youtube' texto='Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.'/>

<Card titulo='02' img='' cor='yellow' sub='Tiktok' texto='Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.'/>

<Card titulo='03' img='' cor='green' sub='Facebook' texto='Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.'/>

<Card titulo='04' img='' cor='blue' sub='Instagram' texto='Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.'/>
</div>
</>
    )

}



