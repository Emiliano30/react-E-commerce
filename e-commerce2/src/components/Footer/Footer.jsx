import {Youtube, Tiktok, TwitterX, Instagram} from '@boxicons/react'

function Footer() {
    return(
     <footer className="footer footer-title footer-horizontal bg-base-200 text-base-content rounded-box p-3 flex flex-row justify-between items-center">
        <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
        </aside>
        <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
            <div className="grid grid-flow-col gap-2 pr-3">
            <a>
                <TwitterX />
            </a>
            <a>
                <Tiktok />
            </a>
            <a>
                <Youtube />
            </a>
            <a>
                <Instagram />
            </a>
            </div>
        </nav>
    </footer>
);
}


export default Footer;