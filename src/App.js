import React from 'react';
import { FaFacebook, FaGlobe } from 'react-icons/fa';
import './App.css';

function App() {
  const awardTextPart1 = (
    <ul style={{ fontFamily: 'Times New Roman' }}>
      <strong>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</strong>
      <li>
        C.R.I.'s energy-efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
      </li>
      <li>
        C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy-efficient smart pumps with IoT-enabled control panel.
      </li>
    </ul>
    
  );

  const awardTextPart2 = (
    <p  style={{ fontSize: '17px', lineHeight: '1.5' , textAlign: 'left' ,  fontFamily: 'Times New Roman'  }}>
    <div style={{ whiteSpace: 'nowrap' }}>
      <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
    </div>
    </p>
  );

  const awardTextPart3 = (
    <p style={{ fontSize: '16px', lineHeight: '1.5' ,  fontFamily: 'Times New Roman' }}>
      Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>.
      Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan,
      Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
    </p>
  );
  

  return (
    <div className="App">
      {/* Header with logo */}
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="Company Logo" />
        </div>
      </div>

      {/* Image 1 on the left-hand side */}
      <div className='image-container'>
      <img src={process.env.PUBLIC_URL + '/1.png'} alt="Left Image" style={{ width: '100%', maxWidth: '600px', margin: 'auto', float: 'left', marginRight: '20px' }} />
</div>
      <div className="App-header">
        <p>{awardTextPart1}</p>

        {/* Image 2 after the specified text */}
        <img src={process.env.PUBLIC_URL + '/2.png'} alt="Description of the image" style={{ width: '100%', maxWidth: '1200px', margin: 'auto' }} />

        <p>{awardTextPart3}</p>
        <p>{awardTextPart2}</p>


        {/* Border line after Image 2 */}
        <div style={{ borderTop: '1px solid #ccc', margin: '20px 0' }}></div>

        {/* Image 3 after the border line */}
        <img src={process.env.PUBLIC_URL + '/3.png'} alt="Description of the image" style={{ width: '100%', maxWidth: '1000px', margin: 'auto' }} />
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
        <div style={{ borderTop: '1px solid #000', margin: '20px 0', padding: '20px' }}>
          <p>
            <p  style={{ textAlign: 'center' }}><strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong></p>
            <p style={{ textAlign: 'center' }}>CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING |  AGRICULTURE & RESIDENTIAL</p>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="footer" style={{ backgroundColor: 'red', padding: '10px', color: 'white', textAlign: 'center' }}>
        <p style={{ display: 'inline-block', marginRight: '10px' , textAlign: 'left' }}>Tool-Free Number: 1800 200 1234</p>
        {/* Facebook Icon with link */}
        <a href="https://www.facebook.com/cripumps" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginRight: '10px' }}>
          <FaFacebook style={{ fontSize: '24px', color: 'white' }} />
        </a>
        {/* Company Facebook ID */}
        <span style={{ display: 'inline-block', marginRight: '20px' }}> www.facebook.com/cripumps</span>

        {/* Website Icon with link */}
        <a href="https://www.crigroups.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginRight: '10px' }}>
          <FaGlobe style={{ fontSize: '24px', color: 'white' }} />
        </a>
        {/* Company Website ID */}
        <span style={{ display: 'inline-block' }}> www.crigroups.com</span>
      </div>
    </div>
  );
}

export default App;
