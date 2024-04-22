export default function Contato(){
    return(
        <>


<div className="Contato">

<div className="con">
<h1>
Dúvidas e suporte, entre em contato:
</h1>
<br />
<div className="icon-redes">

<div className="Icon">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAiYcI-U5tMsA4kqhwVGaMPl0kwwLmbvKt2yp5g-sgCA&s" alt="" />
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE80IrAW_T3t5809RrfriWhbYM-6wfAlD4D8kPwkiRgVCH7rLUeT9eXpI5OO4U9T0-4lU&usqp=CAU" alt="" />
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtcYwHWFXw0wVMnRtBwfniQUriDOMUTB1jf8I0pQxVg&s" alt="" />
</div>


</div>
 
</div>

<hr />


<div className="Forms">
<form>
    <p>Nome:
<input type="text" placeholder="Nome" cols="60" />
</p>
<p>Email:
<input type="email" placeholder="Email" cols="60" />
</p>

<p>Mensagem:</p>
<textarea name="" id="" cols="60" rows="10"></textarea>

<br />
<button className="Cont-button" type="Submit">Enviar</button>
</form>
</div>

</div>

        </>
    )
}