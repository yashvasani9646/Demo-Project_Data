import Poster from './Advretise-Posteer/Poster'
import Advertise from './Advrtise.faq/Advertise'
import './App.css'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Qna from './QNA/Qna'
import Testinomal from './Testinomal/Testinomal'
import Categories from './Top-Categories/Categories'

function App() {

  return (
    <div>
      <Navbar />
      <Poster/>
      <Categories/>
      <Testinomal/>
      <Qna/>
      <Advertise/>
      <Footer/>



    </div>
  )
}

export default App
