import bgMobile from "./images/bg-main-mobile.png";
import bgDesktop from "./images/bg-main-desktop.png";
import logo from "./images/card-logo.svg";



export default function App() { 

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
                    0000 0000 0000 0000
                </h2>

                <ul className="flex items-center justify-between">
                  <li className="text-white uppercase text-base lg:text-xl tracking-widest mb-2" placeholder="Seu Nome Aqui">
                    Karoline Gaia Alexandre
                  </li>
                  <div className="flex ">
                    <li className="text-white text-base lg:text-xl tracking-widest mb-2" placeholder="MM/YY">
                      03/
                    </li>
                    <li className="text-white text-base lg:text-xl tracking-widest mb-2" placeholder="MM/YY">
                      23
                    </li> 
                  </div>
                                
                </ul>
              </div>
            </article>

            <article className="back-card relative lg:ml-20">
              <p className="absolute right-10 text-lg lg:text-xl text-white tracking-widest">
                123
              </p>
            </article>
          </div>

          <div className="pt-8 px-5 pb-20">
            {!confirmed && (
              <form className="flex flex-col justify-center gap-7 max-w-lg lg:h-screen">
                <div>
                  <label htmlFor="cardholder_name">Cardholder Name</label>
                  <input
                    type="text"
                    name="cardholder_name"
                    id="cardholder_name"
                    placeholder="Karoline Gaia Alexandre"
                    required
                    value= ""
                    onChange={''}
                  />
                   
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
                    value={cardNumber} onChange={''} />
                                     
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
                      value={''}
                      onChange={''}
                      
                    />
                                
                  </div>
                  <div className="flex-1">
                    <label htmlFor="expiry_date">Exp. Date (YY)</label>
                    <input
                      type="number"
                      name="expiry_date"
                      id="expiry_date"
                      placeholder="YY"
                      required
                      value={''}
                      min="23"
                      max="28"                      
                      maxLength={2}
                      onChange={''}
                      
                    />                    
                                       
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
                      value={''}
                      onChange={''}
                    />
                    
                  </div>
                </article>

                <button type="submit" onClick={() => {
                  setConfirmed(true);             
                }} className="btn">
                  Confirm
                </button>
              </form>
            )}
           
          </div>
        </div>
      </section>
    
  );
}
