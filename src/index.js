import Unique_logo from './Unique_logo.jpg';
import pos11 from './posc11.jpg';
import './App.css';

<div className="App">
        <header className="App-header">
          <img src={Unique_logo} className="App-logo" alt="UNIQUEGRACEY" />
          <p>
            <h1>
              UNIQUEGRACEY BUSINESS WORLD
            </h1>
          </p>
          <nav className="navbar-menu">
            <ul className="nav">
              <li className="nav-item">
                <a 
                  className="nav-link"
                  href="#home"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link"
                  href="#about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </a>
              </li>
          </ul>
          </nav>
        </header>

      
    
    <div className="Body">
          <div className="Body-item">

            
            <p>
              <h2>
                Our services
              </h2>
            </p>
            <div className="Body-container">
              <section class="App-section-hero hero-homepage">
                <ul>
                  <li>
                    <h3>
                      DEPOSIT and WITHDRAWAL
                    </h3>
                  </li>
                </ul>
                <img src={pos11} className="App-logo" alt="POS Terminal" />
                <p>
                  <h4>
                    Need Cash Fast? We've Got You Covered!
                  </h4>

                  Tired of long lines and tedious processes? <br />

                  Introducing UNIQUEGRACEY, your one-stop solution for quick and convenient cash transactions.<br />

                  Instant Cash: Convert your funds into cold hard cash in a flash.<br />
                  Secure and Reliable: Your transactions are safe and protected.<br />
                  24/7 Service: Access our services whenever you need them.<br />
                  Don't let financial emergencies stress you out. Contact UNIQUEGRACEY today and experience the ease of cash-in, cash-out services.
                </p>
              </section>
            </div>
            <div className="Body-container">
              <section class="App-section-hero hero-homepage">
                <ul>
                  <li>
                    <img src={pos11} className="App-logo" alt="POS Terminal" />
                    <h3>
                      Get your Moniepoint Pos terminal and ATM card
                      </h3>
                  </li>
                </ul>
                <p>
                  Moniepoint POS and ATM: Your All-in-One Financial Solution.

                  Looking for a convenient way to manage your finances? Moniepoint POS and ATM offer a wide range of services, including:<br />

                  <li>Cash withdrawals</li>
                  <li>Cash deposits</li>
                  <li>Bill payments</li>
                  <li>Transfers</li>
                  <li>Airtime purchases</li >
                  Contact us to experience the future of banking.
                </p>
              </section>
              </div>

            <div className="Body-container">
              <section class="App-section-hero hero-homepage">
                <ul>
                  <li>
                    <h3>
                      Get your business registered with CAC
                    </h3>
                  </li>
                </ul>
                <p>
                  <h4>
                    Grow Your Business with CAC Registration
                  </h4>

                  Tired of operating your business informally?

                  Register your business with CAC today and enjoy the following benefits:
                  <li>
                    Legal recognition and protection
                  </li>
                  <li>
                    Enhanced credibility and trust
                  </li>
                  <li>
                    Access to government grants and loans
                  </li>
                  <li>
                    Simplified business transactions
                  </li>
                  Don't miss out on this opportunity to take your business to the next level.

                  Contact us today for more information and to start the registration process.
                </p>
              </section>
          </div>
            
          </div> 
          </div> 
    </div>
      );
    }
