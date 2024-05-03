import './App.css'
import BannerFundo from './components/BannerFundo/BannerFundo'
import ContainerPrincipal from './components/ContainerPrincipal/ContainerPrincipal'

function App() {

  return (
    <>
      <div className="header">
        <BannerFundo />
      </div>
      <div className="main">
        <ContainerPrincipal />
      </div>
    </>
  )
}

export default App
