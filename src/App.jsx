import Title from './Components/Title/Title'
import Paragrafo from './Paragrafo/Paragrafo'
import List from './Components/List/List'
import Photo from './Components/Photo/Photo'
import Relogio from './Components/Relogio/Relogio'
import Comment from './Components/Comment/Comment'

import './App.css'

function App() {
  return (
    <div className='app'>
      <img src={image} alt="logo da empresa" />
      <Title />
      <List />
      <Photo />
      <Comment />
    </div>
  )
}

export default App
