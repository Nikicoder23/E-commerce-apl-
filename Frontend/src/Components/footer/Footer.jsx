import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./footer.css"

export default function Footer(){
    return(
        <footer className="footer">
            Built with
            <FontAwesomeIcon icon={faHeart} className="footer-icon"></FontAwesomeIcon>
             BY 
            <a href="https://www.google.com" target="_blank">Niki</a>
        </footer>
        
    );
}
