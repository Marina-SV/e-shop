
import "./Footer.css"
import FBImg from "../images/FB.png"
import VkImg from "../images/Vk.png"
import InstaImg from "../images/Insta.png"
import WhAppImg from "../images/WhApp.png"




export default function Footer() {
    return (
        <footer className="footer-wrapper">
            <div className="footer-container">
                <div className="contact-info">
                    <p className="footer-contacts">Contacts:</p>
                    <p className="footer-infomation">E-mail:  info@coryanderson.ru</p>
                    <p className="footer-infomation">Phone:  +7 495 142 67 93</p>
                </div>
                <div className="footer-media">
                    <p className="footer-contacts"> WeRSM:</p>
                    <img className="social-media-img" src={FBImg} />
                    <img className="social-media-img" src={VkImg} />
                    <img className="social-media-img" src={InstaImg} />
                    <img className="social-media-img" src={WhAppImg} />
                </div>
            </div>
        </footer>
    )
}