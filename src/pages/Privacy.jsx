import React from 'react';
import { HeaderSecondary } from '../components/HeaderSecondary';
import { Footer } from '../components/Footer';

import "../styles/Privacy.css";

export function Privacy() {
  return (
    <><><HeaderSecondary/><section className="privacy">
      <h1 className="privacy-title">Privacy Policy</h1>
      <div className="container-privacy">
          <p className="card-text" id="">
            Email addresses and telephone numbers obtained by the FiveStarsCarService.com website are only used to contact you regarding:<br></br>(1) the transportation request which you have submitted, until such time as you have indicated to us whether you wish to accept or decline our bid.<br></br> (2) offering you the option to setup of a customer account with us, if you did accept a bid from us; and <br></br>(3) promotional offers, if you chose to setup an account with us and did not opt out of receiving such offers at the time of setting up the account or at anytime afterwards.
            When you choose to use a credit card to pay online for services ordered on this website, your payment will be collected in a way which adheres to international PCI (payment card industry) compliance standards for data security. (This includes: Zelle, and any other forms of online payment we may offer.)</p>
        </div>
    </section></><Footer /></>
  );
}