import React from "react";
import NavBar from "../Components/NavBar";
import img from "../assets/undraw_online_payments_re_y8f2.svg";
import img2 from "../assets/undraw_stripe_payments_re_chlm.svg";
import img3 from "../assets/world.svg";
import img4 from "../assets/enterp.svg";
import img5 from "../assets/organ.svg";
import { AiOutlineRight } from "react-icons/ai";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  document.title = "Paystack | Home";

  return (
    <div>
      <NavBar />
      <main className="  flex flex-col md:flex-row p-1 md:p-4 content-center justify-center items-center md:h-screen">
        <div className="basis-2/4  p-4 h-full pt-32 ">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl py-5 px-1 ">
            Modern online and offline payments
          </h1>
          <p className="text-black text-base  md:text-xl py-4 md:py-8">
            Paystack helps businesses in Africa get paid by anyone, anywhere in
            the world
          </p>
          <div className="flex content-center">
            <Link  to="/register">
            <button className="bg-btn px-2 md:px-4 lg:px-6  py-1 md:py-3 text-sm  rounded-lg  mt-1 text-black">
              Create account
            </button>
            </Link>
            <span className="text-center text-sm ml-2 md:ml-4 mt-2 md:mt-5">
              Or contact for sales
            </span>
          </div>
        </div>
        <div className="basis-2/4">
          <img src={img} alt="" className="w-4/5 h-4/5" />
        </div>
      </main>
      <div className="bg-w  p-4 flex flex-col">
        <div>
          <h1 className="font-bold text-2xl md:text-4xl lg:text-4xl py-5 px-1">
            Simple, easy payments
          </h1>
          <p className="text-black text-base  md:text-xl py-4 md:py-8">
            Building a business is hard. Getting paid shouldn't be.
          </p>
        </div>
        <div className="flex  flex-col-reverse md:flex-row">
          <div className="basis-2/4">
            <img src={img2} alt="" />
          </div>
          <div className="basis-2/4 flex flex-col">
            <h1 className="font-bold text-2xl md:text-4xl lg:text-4xl py-5 px-1  ">
              Delight customers with a seamless payments experience
            </h1>
            <p className="text-black text-base  md:text-xl py-4 md:py-8">
              Give your customers the gift of modern, frictionless, painless
              payments. Integrate Paystack once and let your customers pay you
              however they want.
            </p>
            <ul className="grid-cols-1 md:grid-cols-2    grid  list-disc px-6">
              <li>Mobile Money</li>
              <li>Aitel Money</li>
              <li>Bank Transfer</li>
              <li>Card</li>
            </ul>
            <h1 className="font-bold text-2xl md:text-4xl lg:text-4xl py-5 px-1  ">
              Enjoy phenomenal transaction success rates
            </h1>
            <p className="text-black text-base  md:text-xl py-4 md:py-8">
              We automatically route payments through the most optimal channels,
              ensuring the highest transaction success rates in the market.
            </p>
          </div>
        </div>
      </div>
      <main className="p-4 md:mt-8">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-4xl py-5 px-1 ">
          Trusted by 60,000+ businesses
        </h1>
        <p className="text-black text-base  md:text-xl py-4 md:py-8">
          Thousands of organizations of all sizes trust Paystack to grow their
          business.
        </p>
        <section className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 grid-rows-1 sm:grid-rows-2 md:grid-rows-1 my-20">
          <article className="flex flex-col p-4 item-center justify-between shadow-lg rounded-lg bg-w">
            <div className="basis-2/5">
              <img src={img3} alt="" className="h-40 w-40" />
            </div>
            <div className="basis-2/5">
              <h1 className="font-bold text-base md:text-1xl lg:text-2xl py-5 px-1">
                Lorem, ipsum dolor.
              </h1>
              <p className="text-black text-base  md:text-xl py-4 md:py-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, saepe.
              </p>
            </div>
            <div className="basis">
              <a href="#link" className="basis flex text-btn">
                {/* <span> */}
                <AiOutlineRight className=" mt-6 md:mt-5 border-2 text-sm md:text-2xl border-btn border-solid rounded-full" />
                {/* </span> */}

                <span className="text-black  text-sm  md:text-xl py-4 ml-2 mt-1 underline px-1">
                  Learn more
                </span>
              </a>
            </div>
          </article>
          <article className="flex flex-col p-4 item-center justify-between shadow-lg rounded-lg bg-w">
            <div className="basis-2/5">
              <img src={img4} alt="" className="h-40 w-40" />
            </div>
            <div className="basis-2/5">
              <h1 className="font-bold text-base md:text-1xl lg:text-2xl py-5 px-1">
                Lorem, ipsum dolor.
              </h1>

              <p className="text-black text-base  md:text-xl py-4 md:py-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, saepe.
              </p>
            </div>
            <div>
              <a href="#link" className="basis flex text-btn">
                {/* <span> */}
                <AiOutlineRight className=" mt-6 md:mt-5 border-2 text-sm md:text-2xl border-btn border-solid rounded-full" />
                {/* </span> */}

                <span className="text-black  text-sm md:text-xl py-4 ml-2 mt-1 underline px-1">
                  Learn more
                </span>
              </a>
            </div>
          </article>
          <article className="flex flex-col p-4 item-center justify-between shadow-lg rounded-lg  bg-w">
            <div className="basis-2/5">
              <img src={img5} alt="" className="h-40 w-40" />
            </div>
            <div className="basis-2/5">
              <h1 className="font-bold text-base md:text-1xl lg:text-2xl py-5 px-1 ">
                Lorem, ipsum dolor.
              </h1>

              <p className="text-black text-base  md:text-xl py-4 md:py-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, saepe.
              </p>
            </div>
            <div>
              <a href="#link" className="basis flex text-btn">
                {/* <span> */}
                <AiOutlineRight className=" mt-6 md:mt-5 border-2 text-sm md:text-2xl border-btn border-solid rounded-full" />
                {/* </span> */}

                <span className="text-black  text-sm md:text-xl py-4 ml-2 mt-1 underline px-1">
                  Learn more
                </span>
              </a>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
