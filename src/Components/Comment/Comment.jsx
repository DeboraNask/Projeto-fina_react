import {useState} from 'react'

function Comment () {
    const[comentário, setComment] = useState("Seu comentário vai ficar aqui")
    function (capturaComement) {
        setComment(e.target.value)
    }

    return(
        <> 
          <input onChance={capturaComement} placeholder "digite seu comentário" />
          <p>{Comment}</p>
          </>
    )

}

export default Comment