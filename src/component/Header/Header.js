import CANCEL from "../../assets/image/times-cancel.svg"
import LOGO_MVC from "../../assets/image/logo-mvc.png"


export default function Header() {

    return (
        <div className="nav">

            {/* Nav PC */}
            <nav className="nav__pc">
                <div className="logo_mvc ">
                    {/* <img src={LOGO_MVC} className="logo_mvc-child" /> */}
                </div>
                <ul className="nav__list">
                    <li>
                        <a href="" className="nav__link font-regular">About us</a>
                    </li>
                    <li>
                        <a href="" className="nav__link font-regular">Our Services</a>
                    </li>
                    <li>
                        <a href="" className="nav__link font-regular">Out Work</a>
                    </li>
                    <li>
                        <a href="" className="nav__link font-regular">Contact</a>
                    </li>
                    {/* <li>
                        <a href="" className="nav__link font-regular">Contact</a>
                    </li> */}
                </ul>
            </nav>
            <img src={LOGO_MVC} className="logo_mvc-child-mobile" />
            <label htmlFor="nav-mobile-input" className="nav_bars-btn">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
            </label>


            <input type="checkbox" hidden name="" className="nav_input" id="nav-mobile-input" />
            {/* <h1>HELLO</h1> */}
            <label htmlFor="nav-mobile-input" className="nav_overlay"></label>

            <nav className="nav__mobile">
                <img src={LOGO_MVC} className="logo_mvc-nav" />
                <label htmlFor="nav-mobile-input" >
                    <img src={CANCEL} className="nav_mobile-close" />
                </label>
                <ul className="nav__mobile-list">
                    <li>
                        <a href="" className="nav__mobile-link font-regular">About us</a>
                    </li>
                    <li>
                        <a href="" className="nav__mobile-link font-regular">Our Services</a>
                    </li>
                    <li>
                        <a href="" className="nav__mobile-link font-regular">Out Work</a>
                    </li>
                    <li>
                        <a href="" className="nav__mobile-link font-regular">Contact</a>
                    </li>
                    {/* <li>
                        <a href="" className="nav__mobile-link">Contact</a>
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}