import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./../styles/Footer.css";

type Social = {
  name: string;
  url: string;
  icon: any;
};

const socials: Social[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: faFacebook,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: faInstagram,
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Explore Baltic States
        </p>

        <div className="social-links">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <FontAwesomeIcon className="social-icon" icon={social.icon} />
            </a>
          ))}
        </div>
        <a href="/cookie-policy" rel="noopener noreferrer" target="_blank">
          Cookie Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
