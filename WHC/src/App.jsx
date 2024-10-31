import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Storyblog from './pages/Storyblog'
import Educationalresources from './pages/Educationalresources'
import Chatbot from './pages/Chatbot'

function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/educational-resources' element={<Educationalresources/>} />
          <Route path='/chat-bot' element={<Chatbot/>} />
          <Route path='/story-blog' element={<Storyblog/>} />
          <Route path='/about' element={<About/>}/>
        </Routes>
    </>
  )
}

export default App
