import { Outlet } from "react-router-dom"
import NavBar from "./NavBar";
import Footer from "./Footer";


export function Layout () {
    return (
        <div>
            <NavBar/>
            <div>
              <Outlet />
            </div>
            <Footer/>
        </div>
    )
}