import Nav from "./Nav"
import logo from "../assets/logo.png"

function Header() {
  return (
    <div className="m-10 grid md:grid-cols-8">
        <div className="col-start-1 col-end-4 ">
            <div className="flex items-center">
            <img src={logo} alt="logo" />
            <h1 className="font-orbitron text-orange-400 font-semibold text-4xl">Sportso</h1>
            </div>
            <h1 className="font-orbitron text-white font-semibold xl:ml-20">Photographers On Demand</h1>
        </div>
        <div className="my-auto col-span-full xl:col-start-4 col-end-9 my-auto ">
            <Nav/>
        </div>
        
    </div>
  )
}

export default Header