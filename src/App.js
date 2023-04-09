import React, { useState } from "react";
import bgMobile from "./images/bg-main-mobile.png";
import bgDesktop from "./images/bg-main-desktop.png";
import logo from "./images/card-logo.svg";
import tick from "./images/icon-complete.svg";


export default function App() {
  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  function handleMonth (event) {
    const { value } = event.target;
    const formattedValue = value.padStart(2, "0");
  if (formattedValue >= "01" && formattedValue <= "12") {
    setMonth(formattedValue);
  }
    };   
  
  
  function handleChange(event) {
    const { value } = event.target;
    setCardNumber(value); 
  
    if (!isValidCardNumber(value)) {
      setCardNumberError('Por favor, insira um número de cartão de crédito válido.');
    } else {
      setCardNumberError('');
    }
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    
      if (validateForm()) {
        console.log("Form submitted successfully");
        
      } else {
        console.log("Form validation failed");
        
      }
    };
  
    const validateForm = () => {
      if (!name || !cardNumber || !month || !year || !cvc) {
        return false;
      }
      return true;
    };
      
    if (cardNumberError === '') {    
    }
        

  function isValidCardNumber(cardNumber) {
    
    cardNumber = cardNumber.replace(/\s/g,"");

    
    if (cardNumber.length < 13 || cardNumber.length > 19) {
      return false;
    }
    
    if (!/^\d+$/.test(cardNumber)) {
      return false;
    }
    
    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i));
  
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
  
      sum += digit;
      shouldDouble = !shouldDouble;
    } 
    
    return sum % 10 === 0;
  }

  function handleYearInput(e) {
    const input = e.target;
    const maxLength = input.getAttribute("maxLength");
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  }

  return (
    
      <section>
        <div className="absolute -z-10 w-full">
          <picture>
            <source media="(min-width: 1024px)" srcSet={bgDesktop} className="h-full md:w-1/3"/>
            <img src={bgMobile} alt="" className="w-full md:w-1/3" />
          </picture>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
          <div className="mt-10 mx-5 grid grid-cols-1">
            <article className="front-card p-5 flex flex-col justify-between">
              <img src={logo} alt="" className="w-20 lg:w-28" />

              <div>
                <h2 className="text-white text-xl lg:text-3xl mb-6 tracking-widest">
                  {cardNumber.replace(/\s/g,"").replace(/(\d{4})/g, "$1 ").trim()}

                </h2>

                <ul className="flex items-center justify-between">
                  <li className="text-white uppercase text-base lg:text-xl tracking-widest mb-2" placeholder="Seu Nome Aqui">
                    {name}
                  </li>
                  <div className="flex ">
                    <li className="text-white text-base lg:text-xl tracking-widest mb-2" placeholder="MM/YY">
                      {month}/
                    </li>
                    <li className="text-white text-base lg:text-xl tracking-widest mb-2" placeholder="MM/YY">
                      {year}
                    </li> 
                  </div>
                                
                </ul>
              </div>
            </article>

            <article className="back-card relative lg:ml-20">
              <p className="absolute right-10 text-lg lg:text-xl text-white tracking-widest">
                {cvc}
              </p>
            </article>
          </div>

          <div className="pt-8 px-5 pb-20">
            {!confirmed && (
              <form {...handleSubmit} className="flex flex-col justify-center gap-7 max-w-lg lg:h-screen">
                <div>
                  <label htmlFor="cardholder_name">Cardholder Name</label>
                  <input
                    type="text"
                    name="cardholder_name"
                    id="cardholder_name"
                    placeholder="Karoline Gaia Alexandre"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {!name && (
                      <span style={{ color: "red" }}>
                      O campo nome é obrigatório.
                      </span>)}  
                </div>

                <div>
                  <label htmlFor="card_number">Card Number</label>
                  <input
                    type="text"
                    name="card_number"
                    id="card_number"
                    placeholder="1234 5678 9012 3456"
                    required
                    maxLength={16}
                    value={cardNumber} onChange={handleChange} />
                    {cardNumberError && <span style={{ color: 'red' }}>{
                    cardNumberError}</span>}                  
                </div>

                <article className="flex items-center justify-between gap-8">
                  <div className="flex-1">
                    <label htmlFor="expiry_date">Exp. Date (MM)</label>
                    <input
                      type="number"
                      name="expiry_date"
                      id="expiry_date"
                      placeholder="MM"
                      required
                      min="1"
                      max="12"
                      maxLength={2}
                      value={month}
                      onChange={handleMonth}
                      onInput={handleYearInput}
                    />
                    {!month && (
                      <span style={{ color: "red" }}>
                      O campo do ano é obrigatório.
                      </span>)}             
                  </div>
                  <div className="flex-1">
                    <label htmlFor="expiry_date">Exp. Date (YY)</label>
                    <input
                      type="number"
                      name="expiry_date"
                      id="expiry_date"
                      placeholder="YY"
                      required
                      value={year}
                      min="23"
                      max="28"                      
                      maxLength={2}
                      onChange={(e) => setYear(e.target.value)}
                      onInput={handleYearInput}
                    />                    
                     {!year && (
                      <span style={{ color: "red" }}>
                      O campo do ano é obrigatório.
                      </span>)}                   
                    </div>
                  

                  <div className="flex-1 w-4">
                    <label htmlFor="cvc">CVC</label>
                    <input
                      type="text"
                      name="cvc"
                      id="cvc"
                      placeholder="e.g. 123"
                      maxLength={3}
                      required
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                    />
                    {!cvc && (
                      <span style={{ color: "red" }}>
                      O campo cvc é obrigatório.
                      </span>)}  
                  </div>
                </article>

                <button type="submit" {...handleSubmit} onClick={() => {
                  setConfirmed(true);             
                }} className="btn">
                  Confirm
                </button>
              </form>
            )}
            {confirmed && <ThankYou setConfirmed={setConfirmed} />}
          </div>
        </div>
      </section>
    
  );
}

function ThankYou({ setConfirmed }) {  
  return (
    <>
      <div className="thank-you flex flex-col items-center justify-center lg:h-screen max-w-lg mx-auto">
        <img src={tick} alt="" className="block mx-auto" />
        <h1 className="text-slate-800 text-3xl my-6 uppercase text-center">
          Thank you!
        </h1>
        <p className="text-slate-400 text-center">
          We've added your card details
        </p>
        <button
          onClick={() => setConfirmed(false)}
          className="btn block mx-auto mt-10 w-full"
        >
          Continue
        </button>
      </div>
    </>
  );
}