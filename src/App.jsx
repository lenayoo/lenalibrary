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
     <div className='main-quotes'>
      <p>당신은 확고하게 발을 디디며 앞으로 나아간다. 어디로 향하고 있는지 잘 모를 것이다. 안다고 할 수 없을 것이다. 하지만 이제 당신이 깃든 풍경은 데자뷔의 속성을 갖는다.
        깊숙한 상상 속 어딘가, 언젠가 가봤던 곳, 당신은 그것이 빚어지는 것을 인지한다. 당연해. 당신은 생각한다. <u><strong>바로 이거야.</strong></u> 글을 쓰고 있는 건 당신이 아니다. 딱히 그렇지 않다
        당신이 어둠 속에서 빚은 이것, 몇 번이고 실패하고 있을지도 모르겠다고 느꼈던 그것이 이제 상냥한 거인처럼 당신을 이끈다.</p>
     </div>
     <div className='main-form__div'>
        <form className='main-form'>
        <label>Add your book</label>
        <input />
        <label>Add quotes</label>
        <textarea />
        <button>submit</button>
        </form>
     </div>
    </div>
  )
}

export default App
