import Title from "../Components/Title/Title"
import Paragrafo from "../Paragrafo/Paragrafo"
import image from '../assets/LOGO GS.png'

import './Card.styles.css'

function Card(){
    return(
        <div className="card-container">
            <img className="imagem" src={image} alt="logo tipo da empresa" />
            <Title />
            <Paragrafo />

        </div>

    )
}
export default Card