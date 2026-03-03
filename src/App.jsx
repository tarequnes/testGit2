import Header from "./components/Header";
import style from "./App.module.css";
import Footer from "./components/Footer";
import Home from "./section/Home";
import About from "./section/About";
import Contact from "./section/Contact";
import Products from "./section/Products";
function App () {
    return(
     <>
      <Header/>
       <main>
        <Home/>
        <About/>
        <Contact/>
        <Products/>
       </main>
      <Footer/>
     </>
    )
}

export default App;