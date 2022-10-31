import React from "react";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import '../styles/Faqs.css';

export function Faqs() {

    return (
      <><Header /><section id="faq" className="faq-main">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="faq-list">
          <div className="question-box">
            <h2>Question</h2>
            <p class="card-text" id="response">
              Email addressent will be collectety. (This includes: Zelle, and any other forms of online payment we may offer.)</p>
          </div>
        </div>
      </section><Footer /></>
);
}