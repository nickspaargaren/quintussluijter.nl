import "./style.css";
import { dom, library } from "@fortawesome/fontawesome-svg-core";
import {
	faFacebookSquare,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import FiatPunto from './uploads/Fiat-punto.jpg'

document.querySelector('#app').innerHTML = `
  <div class="vak bovenkant">
    <div class="inhoud">
      <div class="logo">
        <h2>Quintus Sluijter</h2>
      </div>
      <nav>
        <ul>
          <li>Portfolio</li>
          <li class="sep"></li>
          <li id="contact">Contact</li>
        </ul>
      </nav>
    </div>
  </div>

  <div class="vak header">
    <div class="inhoud">
      <h1>Signmaker.<br /><strong>Jup, dat ben ik.</strong></h1>
    </div>
    <div class="vak social">
      <div class="inhoud">
        <a href="https://fb.com/quintus.sluijter" target="_blank" class="sociallink facebook" aria-label="Facebook">
          <span class="icoon"><i class="fab fa-facebook-square"></i></span>
        </a>
        <a href="https://instagram.com/kwiebel" target="_blank" class="sociallink instagram" aria-label="Instagram">
          <span class="icoon"><i class="fab fa-instagram"></i></span>
        </a>
        <div class="cleared"></div>
      </div>
    </div>
  </div>

  <div class="vak">
    <div class="inhoud">
      <h2 style="text-align:center"><em>Over mij</em><br />Quintus Sluijter</h2>
      <p style="text-align:center">Hier komen de blokken.</p>
    </div>
  </div>

  <div class="vak portfolio">
    <div class="inhoud">
      <h2><em>Recente</em><br>Projecten</h2>
      <div class="item" id="29">
        <div class="afbeelding">
          <img src="${FiatPunto}" alt="Fiat Punto" width="286" height="173">
        </div>
      </div>
      <div class="cleared"></div>
    </div>
  </div>

  <div class="vak">
    <div class="inhoud">
      <h2><em>Quintus Sluijter</em><br>Neem contact op</h2>
      <form>
        <table style="border-spacing: 0px;">
          <tr>
            <td>
              <input type="input" name="naam" placeholder="Uw naam" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="input" name="email" placeholder="Email" />
            </td>
          </tr>
          <tr>
            <td>
              <textarea type="input" name="bericht" placeholder="Bericht" style="height: 200px;"></textarea>
            </td>
          </tr>
        </table>
        <button type="submit" class="knop" value="Versturen">Versturen</button>
      </form>
    </div>
  </div>
`

library.add(faFacebookSquare, faInstagram);

dom.i2svg();
