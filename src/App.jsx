import './App.css'
import Header from './components/Header'
import ImageCard from './components/ImageCard'
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.png"
function App() {

  return (
    <>
      <Header/>
      <div className='grid md:grid-cols-3 gap-14 w-4/5 mx-auto'>
        <ImageCard img={img1}/>
        <ImageCard img={img2}/>
        <ImageCard img={img3}/>
      </div>
    </>
  )
}

export default App
