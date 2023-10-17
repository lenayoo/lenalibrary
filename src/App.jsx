import './App.css'
import Nav from './pages/Nav'

function App() {

  return (
    <div className='app'>
     <Nav />
     <h1>Lena's Library</h1>
     <div className='main-img'>
      <img src='book-main.jpeg' className='book-main'/>
     </div>
    </div>
  )
}

export default App
