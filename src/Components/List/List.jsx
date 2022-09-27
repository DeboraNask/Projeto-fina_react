import cardapios from "./datas"

const List = () =>{
    return(
        <div>
            {cardapios.map(cardapio => 
                <div>
                    <h1 key={cardapios.id}>
                        {cardapio.name}
                    </h1>
                    <p>
                        {cardapio.peso}
                    </p>
                    <img className= "imageCardapio" alt={cardapio.name} src={cardapio.imagem}/>
                </div>
            )
            }
        </div>
        
    )
}

export default List
