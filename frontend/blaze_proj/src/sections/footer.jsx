import React from "react";
import "./footer.css";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import Youtube from "../assets/Youtube.svg";
import linkedin from "../assets/linkedin.svg";
import cse from "../assets/cse_logo.svg";
import arrow from "../assets/arrow.svg";


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        {/* Left: logo + copyright */}
        <div className="footer-col footer-col--left">
          <img src={cse} alt="image-icon"  />
          <p className="footer-copyright">
            © {new Date().getFullYear()} DevBlaze
          </p>
        </div>

        {/* Center: social icons + address */}
        <div className="footer-col footer-col--center">
          <ul className="social-list" aria-label="Social links">
            <li>
              <a href="#" aria-label="Instagram" className="social-link">
               <img src={instagram} alt="image-icon"  />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook" className="social-link">
               <img src={facebook} alt="image-icon" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="YouTube" className="social-link">
                <img src={Youtube} alt="image-icon"  />
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn" className="social-link">
               <img src={linkedin} alt="image-icon"  />
              </a>
            </li>
            <li>
              <a href="#" aria-label="X" className="social-link">
                <img src={twitter} alt="image-icon" />
              </a>
            </li>
          </ul>

          <p className="footer-address">
            Ecole Nationale Supérieure d'Informatique (ESI ex.INI), Algiers, Oued
            Smar 16309, Algeria
          </p>
        </div>

        {/* Right: contact + up button */}
        <div className="footer-col footer-col--right">
          <button
            className="scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Back to top"
          >
             <img src={arrow} alt="image-icon" />
          </button>

          <div className="contact-block">
            <a className="contact-phone" href="tel:+213782351931">
              +213782351931
            </a>
            <a className="contact-email" href="mailto:cse@esi.dz">
              cse@esi.dz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
