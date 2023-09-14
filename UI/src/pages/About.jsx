import img from "../assets/img/about-img.jpg";

function About() {
  return (
    <>
      <div className="about-body">
        <div className="about-header-container">
          <h1 className="about-header about-a">A</h1>
          <h1 className="about-header about-rest">bout</h1>
        </div>
        <div className="about-container">
          <img src={img} className="about-img" />
          <div className="about-content">
            <h2 className="about-content-header">Our Story</h2>
            <p className="about-content-text">
              At Auctionopolis, we believe in the power of auctions to bring
              together buyers and sellers in an exciting and dynamic
              marketplace. Our journey began with a passion for connecting
              people with unique items and helping sellers reach a wider
              audience.
              <br />
              <br />
              Founded in 2023, Auctionopolis has grown from a small startup to a
              thriving online auction platform with a global reach. We take
              pride in providing a secure, user-friendly, and trustworthy
              environment for our community of buyers and sellers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
