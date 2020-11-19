import React from 'react';
import povertyday from "../src/imgs/povertyday.gif";
import equip from "../src/imgs/equip.jpg";
import trans from "../src/imgs/trans.jpg";
import warehouse from "../src/imgs/Warehouse.jpg";
import market from "../src/imgs/market.jpg";
import './landing.css';

function App() {
  return (

    <div className="App">
    <section id="header">
      <div className="header container">
        <div className="nav-bar">
          <div className="brand">
            <a href="#hero"><h1>QuadAg</h1></a>
          </div>
          <div className="nav-list">
            <div className="hamburger"><div className="bar"></div></div>
            <ul>
              <li><a href="#hero" data-after="Home">Home</a></li>
              <li><a href="#services" data-after="Service">Services</a></li>
              <li><a href="#projects" data-after="Projects">Projects</a></li>
              <li><a href="#about" data-after="About">About</a></li>
              <li><a href="#agent" data-after="Agent">Agent</a></li>
              <li><a href="#contact" data-after="Contact">Contact</a></li>
              <li><a href="login1.html" type="button" className="but">Login</a></li>
              <li><a href="register1.html" type="button" className="but">Register</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/*End Header*/}

    {/*Hero Section*/}
    <section id="hero">
      <div className="hero container">
        <div>
          <h1>QuadAgri, <span></span></h1>
          <h1>Digital Food distribution platform</h1>
          <a href="#projects" type="button" className="cta">Learn More</a>
        </div>
      </div>
    </section>
    {/*End Hero Section*/}

    {/*Service Section*/}
    <section id="services">
      <div className="services container">
        <div className="service-top">
          <h1 className="section-title">Services</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti maiores pariatur assumenda quas magni et, doloribus quod voluptate quasi molestiae magnam officiis dolorum, dolor provident atque molestias voluptatum explicabo!</p>
        </div>
        <div className="service-bottom">
          <div className="service-item">
            <div className="icon"><img src="https://img.icons8.com/color/48/000000/money-bag-franc.png"/></div>
            <h2>Invest</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed architecto placeat beatae tenetur officia quod</p>
          </div>
          <div className="service-item">
            <div className="icon"><img src="https://img.icons8.com/color/48/000000/buy.png"/></div>
            <h2>Link Retailers</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed architecto placeat beatae tenetur officia quod</p>
          </div>
          <div className="service-item">
            <div className="icon"><img src="https://img.icons8.com/color/48/000000/tractor.png"/></div>
            <h2>24/7 Transport</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed architecto placeat beatae tenetur officia quod</p>
          </div>
          <div className="service-item">
            <div className="icon"><img src="https://img.icons8.com/color/96/000000/barn.png"/></div>
            <h2>Storage</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed architecto placeat beatae tenetur officia quod</p>
          </div>
        </div>
      </div>
    </section>
    {/*End Service Section*/}

    {/*Projects Section*/}
    <section id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title">Recent <span>Projects</span></h1>
        </div>
        <div className="all-projects">
          <div className="project-item">
            <div className="project-info">
              <h1>Project 1</h1>
              <h2>Reduce Poverty</h2>
              <p>By eliminating exploitative buying from the value chain, smallholder farmers are able to become financially independent, get enough money to take care of their families and needs thereby alleviating them from poverty</p>
            </div>
            <div className="project-img">
              <img
                src={povertyday}
                alt="img"
              />
            </div>
          </div>
          <div className="project-item">
            <div className="project-info">
              <h1>Project 2</h1>
              <h2>Fram Efficiency</h2>
              <p>Agritech now allows farmers to make maximum use of their farmlands, by growing numerous crops on the same piece of land. It allows for detailed and precise quantities of fertilizers, seeds and even water supply which will ensure maximum yields for the season</p>
            </div>
            <div className="project-img">
              <img
                src={equip}
                alt="img"
              />
            </div>
          </div>
          <div className="project-item">
            <div className="project-info">
              <h1>Project 3</h1>
              <h2>Improve Transportation</h2>
              <p>Improved transportation will encourage farmers to work harder in the rural areas for increased production, add value to their products, reduce spoilage and wastage</p>
            </div>
            <div className="project-img">
              <img
                src={trans}
                alt="img"
              />
            </div>
          </div>
          <div className="project-item">
            <div className="project-info">
              <h1>Project 4</h1>
              <h2>Storage Facilities</h2>
              <p>Warehouses help in price stabilization of agricultural commodities by checking the tendency to making post-harvest sales among the farmers. Warehouses also offer the facility of market information to persons who hold their produce in them</p>
            </div>
            <div className="project-img">
              <img
                src={warehouse}
                alt="img"
              />
            </div>
          </div>
          <div className="project-item">
            <div className="project-info">
              <h1>Project 5</h1>
              <h2>Agricultural Marketing</h2>
              <p>Agricultural marketing plays an important role not only in stimulating production and consumption, but in accelerating the pace of economic development. The agriculture marketing system plays a dual role in economic development in countries whose resources are primarily agricultural</p>
            </div>
            <div className="project-img">
              <img
                src={market}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*End Projects Section*/}

      {/*Contact Section*/}
      <section id="about">
        <div className="about container">
          <div><h1 className="section-title">About <span>Us</span></h1></div>
          <h1>Simplifying Agriculture with Technology</h1>
          <p>Our Agrotech platforms solve these different problems- Ranging from providing investment opportunities(take part in Farming Indirectly), Order produce from the farm and also become a retailer(employment opportunity). After Investing, weekly updates will be sent to each investor as part of our fair and transparent term of Business. We also help order and deliver produce from the farm straight to your doorstep. We also Connect farmers with Transport and Storage Facilities(Backyard) thereby encouraging one constituency, one storage facility</p>

          <div className="about-items">
            <div className="about-item">
              <div className="icon"><img src="https://ca.slack-edge.com/T01CJB8EK7C-U01CX0C29Q9-e22a97dd0a56-512" className="about-img"/></div>
              <div className="about-info">
                <h1>Akins Kolapo Precious</h1>
                <p>CoFounder</p>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>

              </div>
            </div>
            <div className="about-item">
              <div className="icon"><img src="https://ca.slack-edge.com/T01CJB8EK7C-U01CG6CKJQ5-589ddb09214d-512" className="about-img"/></div>
              <div className="about-info">
                <h1>AbdulRasheed Idris</h1>
                <p>CoFounder</p>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>

              </div>
            </div>
            <div className="about-item">
              <div className="icon"><img src="https://ca.slack-edge.com/T018L7UGPSR-U018RG7LTAR-5a43574de280-512" className="about-img"/></div>
              <div className="about-info">
                <h1>Ninyo Esther</h1>
                <h2>CoFounder</h2>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>

        </div>
    </section>
    {/*End About Section*/}

    <section id="agent">
      <div className="about container">
        <div>
          <h1 className="section-title">Agen<span>ts</span></h1>
          <p className="agenth">QuadAG agents are the lifeline of QuadAg's activities. QuadAg agents interface directly with smallholder <br />farmers in various communities, districts and regions in Nigeria.</p>

           <img src="agent.jpg" className="img">
           <div className="agentp">
           <h1 className="team-title">Our Agents do the following:</h1>
                <p> &#185; Onboarding smallholder farmers onto the our platform. Agents visit communities where smallholder farmers who deal in sorghum, rice, maize, millet and soybean are registered onto the platform to trade. Agents also work with farmers to carry out trading activities.</p>
                <p> &#178; Facilitating trade deals on behalf of Smallholder farmers. Agents deal with buyers who wish to purchase directly from smallholder farmers. AgroCenta agents are trained in the field of technology, sales and marketing to effectively help smallholder farmers who have little or no knowledge of technology trade easily.</p>
                <p> &#179; Gathering market information and statistical data. Agents are assigned to major trading markets across the country to collate data on market pricing for various commodities. This information is relayed to smallholder farmers via Voice technologies in languages they read and understand.</p>
        </div>
      </div>

      </div>
  </section>

    {/*Contact Section*/}
    <section id="contact">
      <div className="contact container">
        <div><h1 className="section-title" style="margin-top: 20px">Contact <span>info</span></h1></div>
        <div className="contact-items">
          <div className="contact-item">
            <div className="icon"><img src="https://img.icons8.com/color/48/000000/phone.png"/></div>
            <div className="contact-info">
              <h1>Phone</h1>
              <p>Our phone lines will be on from <br />
                 8:30am to 4pm, Mondays to Fridays <br />
                 12:00pm to 5pm, Weekend <br />
               </p>
              <h2>+234 8037 8471 55</h2>
              <h2>+234 8037 3986 22</h2>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon"><img src="https://img.icons8.com/color/96/000000/gmail.png" /></div>
            <div className="contact-info">
              <h1>Email</h1>
              <p>All official correspondence and enquiries should be forwared to</p>
              <h2><b><a href="mailto:QuadAgri@gmail.com">QuadAgri@gmail.com</a></b></h2>

            </div>
          </div>
          <div className="contact-item">
            <div className="icon"><img src="https://img.icons8.com/color/48/000000/order-delivered.png" /></div>
            <div className="contact-info">
              <h1>Office Address</h1>
              <h2>State, Nigeria</h2>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15762.179405064702!2d7.4922416!3d9.01395965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1603025600878!5m2!1sen!2sng" width="100" height="100" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*End Contact Section*/}

    {/*Footer*/}
    <section id="footer">
      <div className="footer container">
        <div className="brand"><h1>QuadAg</h1></div>
        <h2>Your Complete Agri Solution</h2>
        <div className="social-icon">
          <div className="social-item">
            <a href="#"><img src="https://img.icons8.com/color/96/000000/facebook-new.png"/></a>
          </div>
          <div className="social-item">
            <a href="#"><img src="https://img.icons8.com/color/96/000000/linkedin.png"/></a>
          </div>
          <div className="social-item">
            <a href="#"><img src="https://img.icons8.com/color/96/000000/twitter.png"/></a>
          </div>
        </div>
        <p>Copyright © 2020 QuadAg. All rights reserved</p>
      </div>
    </section>

    </div>
  );
}

export default App;
