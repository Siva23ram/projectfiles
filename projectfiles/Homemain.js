import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './project.css';
import { blueGrey } from '@mui/material/colors';
import ImageSlider from './ImageSlider';
import Update from './Update';
let Home=()=>
{
    let n=useNavigate()
    function Gohome(){
        n('/')
    }
    function GoAbout(){
        return(
           n(<h1>this is a about page</h1>)
        )
    }
    function Booking(){
      n('/booking')
    }
    function Delet(){
      n("/cancel")
    }
    function Up(){
      n('/update')
    }
    function Book(){
      n('/book')
    }
    
    
      const slides = [
        { url: "http://localhost:3000/hotel1.jpg", title: "Frontview" },
        { url: "http://localhost:3000/enterance.jpg", title: "Enterance" },
        { url: "http://localhost:3000/ammai.jpg",title: "Reception" },
        { url: "http://localhost:3000/checkin.jpg", title: "CheckIn" },
        { url: "http://localhost:3000/room1.jpg", title: "Room1" },
        { url: "http://localhost:3000/luxury.jpg", title: "LuxuryRoom" },
        { url: "http://localhost:3000/restaurent.jpg", title: "Food" }, 
        { url: "http://localhost:3000/bar.jpg", title: "Bar" }, 
        { url: "http://localhost:3000/swim.jpg", title: "Swimmingpool" },
      ];
      const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
      };
    return(
      <div>

            <div class='hom'>
                <nav>
                    
                     <Button onClick={Gohome}>Home</Button>
                   <Button href="#contact info">contact info</Button>
                          <Button href="#specifications">specifications</Button>
                        <Button href="#overview">overview</Button>
                        <Button  onClick={Booking}>Booking</Button>
                        <Button onClick={Up}> Update Booking</Button>
                        <Button onClick={Book}>Booking Details</Button>
                        <Button onClick={Delet}>Cancel Booking</Button>
                </nav>
            </div>
  <h1><marquee>Welcome to SSRH Hotel</marquee> </h1>
<div class='ab'>
  <section id="pictures">

        <div>
          <h1>Have a Nice Holiday</h1>
          <div style={containerStyles}>
            <ImageSlider slides={slides} />
          </div>
        </div>
        </section>
  <section id="facilities">
    <h3>Facilities</h3>
    <div class='fac'>
<li>Semi open & outdoor restaurant</li>
<li>Poolside bar</li>
<li>150 Capacity outdoor terrace</li>
<li>Swimming pool/ Jacuzzi</li>
<li>Public computer</li>
<li>Disable rooms & Interconnecting rooms</li>
<li>24 Hour security</li>
</div>



    </section>
  <section id="specifications">
    <h2>Specifications</h2>
    <p class='spe'><b>Masala Kraft: </b><br/>
Masala Kraft is the specialty Indian restaurant, that blends
culinary innovations with traditional methods.<br/>
<b>Wasabi by Morimoto:</b><br/>
Wasabi by Morimoto offers an authentic Japanese culinary,
using ingredients that are specially flown down from Japan.<br/>
<b>Golden Dragon</b><br/>
The Golden Dragon has an illustrious history of over 40 years of
serving fine Szechuan and Cantonese cuisine in Mumbai.
<b>Souk</b>
<br/>
Souk offers a selection of authentic, light Eastern Mediterranean
cuisine, along with panoramic views of the city harbour.<br/>
<b>Chefs Studio</b><br/>
The Chefs Studio, an exclusive private dining space, lifts the
culinary experiences to a new level - providing a setting that is
refined, yet comfortable.<br/>
<b>Casablanca</b><br/>
Located on the rooftop of the Tower, the cozy Chef’s table,
makes private occasions truly special. An exclusive Middle
Eastern menu romances your palate, while the surroundings
delight you.<br/>
UNIQUE DINING EXPERIENCES The hotel offers an array of dining experiences unlike any other in the country.
<b>Shamiana</b><br/>
Shamiana, the original coffee shop of the city, offers an all-day
dining experience with an international à la carte menu.<br/>
<b>Sea Lounge</b><br/>
Sea lounge offers old colonial charm with an elaborate buffet
spread of classic English delicacies and Local Indian favourites.<br/>
<b></b>La Passerie<br/>
La Patisserie, the Cake Shop & Delicatessen, is the perfect
choice for celebration treats and take-away goodies.<br/>
<b>Harbour Bar</b><br/>
The Harbour Bar, first licensed bar in the city, is our stylish
lounge bar serving a selection of fine malts, international wines and 
    </p>
    </section>
  <section id="overview">
    <h2>Over view</h2>
    <p class='over'> Get away from the hustle and the bustle of the city and the intimidating atmosphere of fashionable 5 star hotels. If you are looking for a peaceful cocoon to unwind after exploring the many attractions in the area, Astan Hotel Galata is an ideal place for you.

Astan Hotel Galata is perfectly located in the historical and cultural Galata district in Istanbul, half way between İstiklal Street and Karaköy and just a short walk away from the heart of the city, Taksim Square. Perfectly harmonising the authentic surrounding with modern accommodation facilities, all 8 rooms offer state-of-the art technology, comfy beds, rain showers, exclusive bathroom amenities and sitting area with large armchairs to relax after a long day of exploring one of the most diverse cities in the world. A continental breakfast is served on the terrace overlooking the Bosphorus or in the comfort of your room at your choice.

Along the nearby narrow streets of Galata, you will find small, cosy cafés and restaurants, local shops offering art crafts, haute couture fashion ateliers, art galleries, entertainment on İstiklal Street and many other surprises that you can expect from the hotel’s privileged location. The famous Camondo steps at the doorway will lead you to the tram within minutes, which will take you to the Old City, Sultanahmet Mosque, Hagia Sophia, Topkapi Palace and the astonishing Bosphorus strait & the Golden Horn with easy access to ferries.<br/>
         </p>
        </section>
        Back to top: <Button type='contained' href="#top">Back to Top</Button>
        <section id="contact info">
          <div class="con">
    <h3>CONTACT INFO</h3>
    <div >
    <div class="c1">CONTACTNUMBERS:7997711223,7569112238</div>

    <div class="c2 ">landline number:513360</div>
   <div class="c3"> Email id : SSRHhotel@gmail.com</div>
   <a href='https://www.tajhotels.com/'>about</a>
    </div>
    </div>
    </section>
  <div>
    
</div>
</div>
</div>
    
    )
};
export default Home;