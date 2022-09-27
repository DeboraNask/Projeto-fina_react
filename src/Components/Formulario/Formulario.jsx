function Formulario() {
    function ligaClik(){
        console.log('estou clicando')
    }

    function ligaInput(event) {
        console.log(event.target.value)

    }

    return(
        <div>
          <input onChange={ligaInput} placeholder="Digite seu nome" />
          <button onClick={ligaClik}>Enviar</button>        
        </div>
    )
}

export default Formulario

// react fragment - essa div é "fantasma"
//capturar input
//ligar o click do botão