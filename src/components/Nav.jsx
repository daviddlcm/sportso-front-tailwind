import ButtonCreateAccount from "./ButtonCreateAccount"
import ButtonLogin from "./ButtonLogin"
function Nav() {
  return (
    <nav className="w-full my-6 md:my-0">
        <ul className="md:grid grid-cols-6 items-center w-9/12 text-center w-full gap-4">
            <li>
            <a href="/" className="text-xs px-0 font-orbitron text-center text-gray-200 md:text-sm">Home</a>
            </li>
            <li>
            <a href="/about" className="text-xs px-0 font-orbitron text-center text-gray-200 md:text-sm">About us</a>
            </li>
            <li>
            <a href="/contact" className="text-xs px-0 font-orbitron text-center text-gray-200 md:text-sm">Contact us</a>
            </li>
            <li className="my-2">
            <ButtonLogin/>
            </li>
            <li className="col-span-2 flex justify-center">
                    <ButtonCreateAccount/>
            </li>
        </ul>
    </nav>
  )
}

export default Nav