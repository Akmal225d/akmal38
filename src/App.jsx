import React from "react";
import "./App.css";
const App = () => {
  return (
    <>
      <section className="card">
        <div className="container">
          <div className="card__box">
            <p>Digital Agency</p>
            <div className="card__section">
              <p>home</p>
              <p>About</p>
              <p>Testimonials</p>
              <p>contact</p>
            </div>
          </div>
        </div>
      </section>

      <section className="building">
        <div className="container">
          <div className="building__box">
            <div className="building__box1">
              <h1>
                Building digital, <br /> Products, brands & experience
              </h1>
              <p>
                Digital Agency is your online team mangement tool that easy and
                prompt
              </p>
              <button>Contact Us</button>
            </div>
            <img className="building__box2" src="./businesman.png" alt="" />
          </div>
        </div>
      </section>

      <section className="companies">
        <div className="container">
          <p>Trusted by 4,000+ companies</p>
          <div className="telefone">
            <img src="./logo.png" alt="" />
            <img src="./logo1.png" alt="" />
            <img src="./logo2.png" alt="" />
            <img src="./logo3.png" alt="" />
          </div>
        </div>
      </section>

      <section className="branding">
        <div className="container">
          <div className="branding__card">
            <img src="./desiger.png" alt="" />
            <div className="branding__box">
              <h1>Branding & Design system</h1>
              <p>
                Commonly used in the graphic, print & publishing industris for
                previewing visual layout and mockups
              </p>
              -->
            </div>
          </div>
        </div>
      </section>

      <section className="custome">
        <div className="container">
          <div className="custome__card1">
            <div className="custome__card">
              <h1>Custome & Plugin Development</h1>
              <p>
                Commonly used in the graphic, print & publishing industris for
                previewing visual layout and mockups
              </p>
              -->
            </div>
            <img src="data.png" alt="" />
          </div>
        </div>
      </section>

      <section className="read">
        <div className="container">
          <div className="read__box">
            <div className="read__card">
              <p>TESTIMONIALS</p>
              <h1>Read What Other have to Say</h1>

              <div className="cards">
                <div className="card">
                  <img src="./beliy.png" alt="" />
                  <h3>Andrew Rathore</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ullamcorper scelerisque mi, in malesuada felis
                    malesuada vel.{" "}
                  </p>
                </div>

                <div className="card">
                  <img src="./wumen.png" alt="" />
                  <h3>Vera Duncan</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ullamcorper scelerisque mi, in malesuada felis
                    malesuada vel.{" "}
                  </p>
                </div>

                <div className="card">
                  <img src="./niga.png" alt="" />
                  <h3>Mark Smith</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ullamcorper scelerisque mi, in malesuada felis
                    malesuada vel.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="part">
        \
        <div className="container">
          <div className="part__box">
            <img className="image" src="./customer-support.png" alt="" />
            <div className="part__box1">
              <h1>Be a part of the next big thing</h1>
              <p>
                We work with Brans, Startups, to SMEs. Colaborate for more
                impact and growt
              </p>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="container">
          <div className="footer__box">
            <div className="footer__wrapper">
              <div className="footer__contacts">
                <h4>Digital Agency</h4>
                <p>
                  Building digital products, <br />
                  brands & experience
                </p>
              </div>

              <div className="footer__resources">
                <h5>Resources</h5>
                <a href="">Guides</a>
                <a href="">Blog</a>
                <a href="">Cuistomer Stories</a>
                <a href="">Glossery</a>
              </div>

              <div className="footer__company">
                <h5>Company</h5>
                <a href="">About Us</a>
                <a href="">Careers</a>
                <a href="">Partners</a>
                <a href="">Contact Us </a>
              </div>

              <div className="footer__social">
                <h5>Social Media</h5>
                <a href="">LinkedIn</a>
                <a href="">Facebook</a>
                <a href="">Instagram</a>
                <a href="">Twitter</a>
              </div>
            </div>

            <div className="footer__text">
         <p>© Matheus. Todos os direitos reservados</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
