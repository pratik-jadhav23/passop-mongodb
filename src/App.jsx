import './App.css'
import Navbar from './Components/Navbar'
import Manager from './Components/Manager'
import Login from './Components/Login'

function App() {

  return (
    <div className=''>
      {/* Background */}
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */}
      </div>
      <Login />
      <Navbar />
      <Manager />
    </div>
  )
}

export default App
