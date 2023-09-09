import { Link } from "react-router-dom";

import social1 from "../assets/socials/twitter.png";
import social2 from "../assets/socials/linkedin.png";
import social3 from "../assets/socials/instagram.png";
import social4 from "../assets/socials/facebook.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-company">
          <h3>Auctionopolis</h3>
          <p>
            Discover a world of bidding excitement. Join us for thrilling
            auctions, exclusive finds, and unbeatable deals. Your trusted
            destination for buying and selling. Start bidding today!
          </p>
        </div>
        <div className="footer-quicklinks">
          <h3>Quicklinks</h3>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Blog</Link>
          <Link>Products</Link>
        </div>
        <div className="footer-resources">
          <h3>Resources</h3>
          <Link>Help</Link>
          <Link>Terms & Conditions</Link>
          <Link>FAQ</Link>
          <Link>Contact Us</Link>
          <Link>Support</Link>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="footer-social-icons">
            <Link>
              <img src={social1} className="social-logo" />
            </Link>
            <Link>
              <img src={social2} className="social-logo" />
            </Link>
            <Link>
              <img src={social3} className="social-logo" />
            </Link>
            <Link>
              <img src={social4} className="social-logo" />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>© 2023 Auctionopolis. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
