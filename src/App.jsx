import {Gatitos, Footer, Hero, Navbar, ConnectSection, Video} from "./components"


function App() {
  return <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
    <Navbar/>
    <Hero/>
    <Gatitos/>
    <ConnectSection/>
    <Video/>
    <Footer/>
  </div>;
}

export default App
