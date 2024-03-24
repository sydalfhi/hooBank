import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {});

  return (
    <section className="font-popin text-white overflow-hidden   w-full relative  ">
      {/* potrait */}
      <p className=" portrait:hidden lg:hidden h-screen text-center font-bold text-[20px] flex  space-x-5 justify-center items-center ">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="30"
            viewBox="0 0 21 20"
          >
            <path
              fill="#fff"
              d="M2 10.941v7h12v-7zm0-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2m9.012-2h-2V2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H18v-2h.012V2h-7z"
            />
          </svg>
        </span>
        <span>For a better experience, please use portrait mode.</span>
      </p>

      <div className="2xl:max-w-[1440px] mx-auto landscape:hidden md:landscape:block">
        <div className="bulat absolute top-56 -left-24 hidden xl:block"></div>
        {/* header========================================== */}
        <header className="w-full md:px-10  mt-5 ">
          <nav className="flex justify-between items-center px-5  py-5">
            <div className="logo w-1/2 min-[688px]:w-[19vw] md:w-[14vw]">
              <img loading="lazy" src="assets/logo.svg" alt="logo" />
            </div>
            <div className="link">
              <img
                loading="lazy"
                src="assets/menu.svg"
                alt="menu"
                className="block md:hidden"
              />

              <ul className="space-x-16 hidden md:flex">
                <li>
                  <a href="#" data-replace="Home">
                    <span className="text-white font-popin font-semibold">
                      Home
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" data-replace="About">
                    <span className="text-white font-popin font-semibold">
                      About
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" data-replace="Service">
                    <span className=" text-white font-popin font-semibold">
                      Service
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" data-replace="Contact">
                    <span className="text-white font-popin font-semibold">
                      Contact
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        {/* end header======================================= */}

        {/* 1st======================================= */}
        <section className=" my-5  overflow-hidden md:mt-[50px] xl:mt-[60px]">
          <div className=" block md:flex md:justify-between">
            {/* left */}
            <div className=" w-full px-5 md:pl-10">
              <div
                data-aos="fade-up"
                className="diskon max-w-[90%] mx-auto space-x-3  flex justify-between  items-center md:max-w-[350px] md:mx-0 md:mr-auto xl:max-w-[400px] px-5"
              >
                <img loading="lazy" src="assets/Discount.svg" alt="diskon" />
                <div className="py-1">
                  <span className="font-semibold text-white/70">
                    <span className="font-semibold text-white/100">
                      20% &nbsp;
                    </span>
                    DISCOUNT FOR{" "}
                    <span className="font-semibold text-white/100" />1 MONTH
                  </span>{" "}
                  <span className="font-semibold">ACCOUNT</span>
                  <p />
                </div>
              </div>
              {/*  */}
              <div className="mt-10 px-2 md:px-5 ">
                <h1 className="text-heading  font-semibold flex flex-col -space-y-2 md:-space-y-3 xl:-space-y-5">
                  <span>The Next</span>
                  <span className=" generation">GENERATION</span>
                  <span className="whitespace-nowrap">Payment Method.</span>
                </h1>
                {/*  */}
                <p className="mt-10 text-paragraf max-w-[600px]">
                  Our team of experts uses a methodology to identify the credit
                  cards most likely to fit your needs. We examine annual
                  percentage rates, annual fees.
                </p>
              </div>
            </div>

            {/* right */}
            <div className="mt-10 md:mt-0 ">
              <div className="  relative h-full ">
                <img
                  loading="lazy"
                  src="assets/robot.png"
                  alt="robot hand"
                  className="w-[90%] ml-auto"
                />
              </div>
              <div className="segitiga absolute  xl:top-48 hidden xl:block" />
            </div>
          </div>
        </section>
        {/*end  1st======================================= */}

        {/* 2nd-=============================== */}
        <section
          className="mt-10 font-semibold"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <div className=" grid grid-cols-1 place-items-center md:grid-cols-3 xl:w-2/3 xl:gap-x-16 mx-auto md:px-[30px]">
            <div className=" flex  min-w-[260px] mt-3 justify-center items-center space-x-2 lg:space-x-3">
              <h1 className="text-[25px] lg:text-[40px]">$250M+</h1>
              <p className=" generation">TRANSACTION</p>
            </div>
            {/*  */}
            <div className=" flex  min-w-[260px] mt-3 justify-center items-center space-x-2 lg:space-x-3 ">
              <h1 className="text-[25px] lg:text-[40px]">3800+</h1>
              <p className=" generation">User Active</p>
            </div>
            {/*  */}

            <div className=" flex  min-w-[260px] mt-3 justify-center items-center space-x-2 lg:space-x-3">
              <h1 className="text-[25px] lg:text-[40px]">230+</h1>
              <p className=" generation whitespace-nowrap">
                TRUSTED BY COMPANY
              </p>
            </div>
          </div>
        </section>
        {/* end 2nd ==============================*/}

        {/* 3td =========================*/}
        <section
          className="  mt-12 w-full py-12 px-5  md:px-[30px] xl:px-[130px] 2xl:px-[50px] xl:mt-20"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="container flex flex-col md:flex-row justify-center items-center">
            <div className=" flex flex-col">
              <h1 className="title-heading">
                You do the business, we’ll handle the money.
              </h1>
              <p className="text-paragraf">
                With the right credit card, you can improve your financial life
                by building credit, earning rewards and saving money. But with
                hundreds of credit cards on the market.
              </p>
              <div className="flex justify-center md:justify-start items-center space-x-5 lg:space-x-10">
                <button className=" w-[60%] lg:w-1/3 py-4 mt-10 text-slate-900 rounded-lg tombol font-semibold hover:border-2 px-[19px]">
                  Get Started
                </button>
              </div>
            </div>

            <div className=" w-full mt-14 md:mt-0">
              <div className="container flex flex-col space-y-5 md:space-x-6 items-center justify-center">
                {/*  */}
                <div className="kotak w-5/6 m-auto hover:bg-slate-700 flex justify-around items-center px-4 py-3 space-x-5 rounded-2xl">
                  <div className="lingkaran bg-slate-700  rounded-full aspect-square w-24 flex justify-center items-center">
                    <img
                      loading="lazy"
                      src="assets/Star.svg"
                      alt="star"
                      className=" mx-5 "
                    />
                  </div>
                  {/* *================================ */}
                  <div className="flex flex-col ">
                    <h1 className="text-[19px] md:text-[18px] ">
                      100% Secured
                    </h1>
                    <p className=" sub-paragraf  ">
                      We take proactive steps make sure your information and
                      transactions are secure.
                    </p>
                  </div>
                </div>
                {/*  */}
                {/*  */}
                <div className="kotak w-5/6 m-auto hover:bg-slate-700 bg-slate-800 flex justify-around items-center px-4 py-3 space-x-5 rounded-2xl">
                  <div className="lingkaran bg-slate-700  rounded-full aspect-square w-24 flex justify-center items-center">
                    <img
                      loading="lazy"
                      src="assets/Shield.svg"
                      alt="star"
                      className=" mx-5 "
                    />
                  </div>
                  {/* *================================ */}
                  <div className="flex flex-col ">
                    <h1 className="text-[19px] md:text-[18px] ">
                      Balance Transfer
                    </h1>
                    <p className=" sub-paragraf">
                      A balance transfer credit card can save you a lot of money
                      in interest charges.
                    </p>
                  </div>
                </div>
                {/*  */}
                {/*  */}
                <div className="kotak w-5/6 m-auto hover:bg-slate-700  flex justify-around items-center px-4 py-3 space-x-5 rounded-2xl">
                  <div className="lingkaran bg-slate-700  rounded-full aspect-square w-24 flex justify-center items-center">
                    <img
                      loading="lazy"
                      src="assets/Send.svg"
                      alt="star"
                      className=" mx-5 "
                    />
                  </div>
                  {/* *================================ */}
                  <div className="flex flex-col ">
                    <h1 className="text-[19px] md:text-[18px] ">Rewards</h1>
                    <p className="sub-paragraf">
                      The best credit cards offer some tantalizing combinations
                      of promotions and prizes
                    </p>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </section>
        {/* end 3td =======================*/}

        {/* 4th  ========================= */}
        <section
          className="mt-14 md:mt-28  px-6 md:px-[30px] xl:px-[130px] 2xl:px-[50px]  relative "
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="bulat absolute  -left-30 hidden xl:block" />
          <div className="container flex flex-col md:flex-row items-start justify-between md:space-x-10 ">
            <div className="">
              <img
                loading="lazy"
                src="assets/bill.png"
                alt="bill"
                className="translate-x-2"
              />
            </div>

            <div className=" translate-y-10 large:px-6 md:px-0 ">
              <h1 className="title-heading font-bold">
                Easily control your billing &amp; invoicing.
              </h1>
              <p className="text-paragraf font-normal">
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                integer platea placerat.
              </p>
              <div className="kontnen flex space-x-5 justify-start items-center mt-6  ">
                <a href="#">
                  <img loading="lazy" src="assets/apple.svg" alt="apleStore" />
                </a>
                <a href="#">
                  <img loading="lazy" src="assets/google.svg" alt="playStore" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* end 4th  ======================*/}

        {/*  5th  ======================*/}
        <section
          className=" mt-32 px-8 md:px-[30px] xl:px-[130px] 2xl:px-[50px] "
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="container flex justify-around items-center flex-col md:flex-row md:space-x-5">
            <div>
              <h1 className="title-heading font-bold">
                Find a better card deal in few easy steps.
              </h1>
              <p className="text-white/70 mini:text-[14px] mt-5 sedang:text-[16px] w-full md:w-[75%] ">
                Arcu tortor, purus in mattis at sed integer faucibus. Aliquet
                quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
              </p>
              <button className="font-semibold w-[60%] lg:w-1/3 py-4 mt-10 text-slate-900 rounded-lg tombol hover:border-2 px-[19px]">
                Get Started
              </button>
            </div>
            {/*  */}
            <div className="kiri mt-10 md:mt-0">
              <img loading="lazy" src="assets/card.png" alt="card" />
            </div>
          </div>
        </section>
        {/* end 5th  ======================*/}

        {/* 6th */}
        <section
          className=" mt-32  px-5 "
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <div className=" flex flex-col  justify-around items-center md:w-[80%] mx-auto ">
            <div className="">
              <h1 className=" title-heading font-bold text-center md:text-left">
                What people are saying about us
              </h1>
            </div>
            <div className=" ">
              <p className="text-white/70 text-base w-ful md:w-[75%] mx-auto text-center ">
                Everything you need to accept card payments and grow your
                business anywhere on the planet.
              </p>
              <div className="bulat absolute -right-28 hidden xl:block" />
            </div>
          </div>
          <div className="mt-6 w-1/3 h-1 mx-auto bg-sky-500 rounded-full" />
        </section>
        {/*end  6th */}

        {/* 7th Section */}
        <section
          className=" mt-10 relative z-50"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="md:px-10 w-[80%] md:w-full lg:w-[80%] md:gap-y-6 mx-auto flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap lg:gap-y-0  justify-evenly items-center md:space-x-10">
            <div className="card w-[80vw] md:w-[45%] h-[350px] md:h-[400px] py-10 mt-5 md:mt-0 md:py-7 flex flex-col justify-center items-start px-10 space-y-10 cardInti">
              <img
                loading="lazy"
                src="assets/quotes.svg"
                alt="quotes"
                className="w-[42px]"
              />
              <p className="w-[88%] text-white/70 mini:text-[14px] sedang:text-[16px]">
                Money is only a tool. It will take you wherever you wish, but it
                will not replace you as the driver.
              </p>
              <div className="flex space-x-5">
                <img
                  loading="lazy"
                  src="assets/people02.png"
                  alt="people 2"
                  className="w-12 h-12"
                />

                <div className="flex flex-col space-y-1 -mt-2 mr-3">
                  <h1 className="text-[20px]">Syaid Alfarishi</h1>
                  <p className="text-white/70 mini:text-[14px] sedang:text-[16px]">
                    Front End Developer
                  </p>
                </div>
              </div>
            </div>

            <div className="card w-[80vw] md:w-[45%] h-[350px] md:h-[400px] py-10 mt-5 md:mt-0 md:py-7 flex flex-col justify-center items-start px-10 space-y-10  ">
              <img
                loading="lazy"
                src="assets/quotes.svg"
                alt="quotes"
                className="w-[42px]"
              />
              <p className="w-[88%] text-white/70 mini:text-[14px] sedang:text-[16px]">
                Money makes your life easier. If you&apos;re lucky to have it,
                you&apos;re lucky.
              </p>
              <div className="flex space-x-5">
                <img
                  loading="lazy"
                  src="assets/people01.png"
                  alt="people 1"
                  className="w-12 h-12"
                />

                <div className="flex flex-col space-y-1 -mt-2 mr-3">
                  <h1 className="text-[20px]">Herman Jensen</h1>
                  <p className="text-white/70 mini:text-[14px] sedang:text-[16px]">
                    Founder &amp; Leader
                  </p>
                </div>
              </div>
            </div>

            <div className="card w-[80vw] md:w-[45%] h-[350px] md:h-[400px] py-10 mt-5 md:mt-0 md:py-7 flex flex-col justify-center items-start px-10 space-y-10 ">
              <img
                loading="lazy"
                src="assets/quotes.svg"
                alt="quotes"
                className="w-[42px]"
              />
              <p className="w-[88%] text-white/70 mini:text-[14px] sedang:text-[16px]">
                It is usually people in the money business, finance, and
                international trade that are really rich.
              </p>
              <div className="flex space-x-5">
                <img
                  loading="lazy"
                  src="assets/people03.png"
                  alt="people 1"
                  className="w-12 h-12"
                />
                <div className="flex flex-col space-y-1 -mt-2 mr-3">
                  <h1 className="text-[20px]">Kenn Gallagher</h1>
                  <p className="text-white/70 mini:text-[14px] sedang:text-[16px]">
                    Founder &amp; Leader
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end 7th*/}

        {/* 8th*/}
        <section
          className=" mt-24"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="relative z-50 w-[80%] mx-auto flex justify-center  md:space-x-10  gap-5 lg:gap-0 lg:justify-evenly items-center flex-wrap lg:flex-nowrap">
            <img
              loading="lazy"
              src="assets/airbnb.png"
              alt="airbnb"
              className="w-[192px] hover:cursor-help hover:bg-white transition-all duration-300 p-5 min-h-[90px] object-contain rounded "
            />
            <img
              loading="lazy"
              src="assets/binance.png"
              alt="binance"
              className="w-[192px] hover:cursor-help hover:bg-white transition-all duration-300 p-5 min-h-[90px] object-contain rounded "
            />
            <img
              loading="lazy"
              src="assets/coinbase.png"
              alt="coinbase"
              className="w-[192px] hover:cursor-help hover:bg-white transition-all duration-300 p-5 min-h-[90px] object-contain rounded "
            />
            <img
              loading="lazy"
              src="assets/dropbox.png"
              alt="dropbox"
              className="w-[192px] hover:cursor-help hover:bg-white transition-all duration-300 p-5 min-h-[90px] object-contain rounded "
            />
          </div>
          <div className="bulat absolute -left-28 hidden xl:block" />
        </section>
        {/* end 8th*/}

        {/* 9th */}
        <section
          className=" mt-24 "
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <div className=" kotakHire w-[90%] px-6 py-7 lg:w-[80%] flex flex-col lg:flex-row justify-between lg:space-x-5 items-center mx-auto lg:pl-[97px] lg:pr-[100px]">
            <div className="lg:w-[70%] w-full">
              <h1 className="text-[36px] md:text-[48px] font-bold text-center lg:text-left ">
                Let’s try our service now!
              </h1>
              <p className="text-white/70 mini:text-[14px] sedang:text-[16px] lg:w-[80%] w-full mt-4   text-center lg:text-left">
                Everything you need to accept card payments and grow your
                business anywhere on the planet.
              </p>
            </div>
            {/*  */}
            <div className="lg:w-[30%] w-full mt-6  mx-auto flex justify-center items-center ">
              <button className=" font-semibold w-[170px] py-[18px] px-[33px]  text-slate-900  lg:translate-x-16 rounded-lg tombol ">
                Get Started
              </button>
            </div>
          </div>
        </section>
        {/* end 9th */}

        {/*  footer */}
        <footer className="mt-24  ">
          <div className="container pt-10 w-[90%]  flex justify-evenly items-start flex-col md:flex-row px-10 md:px-5 space-x-10">
            {/*  */}
            <div className="mt-10 md:mt-0">
              <img
                loading="lazy"
                src="assets/logo.svg"
                className="w-[250px]"
                alt="logo"
              />
              <p className="text-white/70 mini:text-[14px] sedang:text-[16px] w-[80%] mt-5">
                A new way to make the payments easy, reliable and secure.
              </p>
            </div>
            {/*  */}
            <div className="mt-10 md:mt-0">
              <h1 className="text-[18px]">Usefull Links</h1>
              <ul className="mt-5">
                <li className="my-2">
                  <a href="#" id="style-2" data-replace="Contet">
                    <span className="footer-link">Content</span>
                  </a>
                </li>
                <li className="my-2">
                  <a href="#" id="style-2" data-replace="How it Works">
                    <span className="footer-link">How it Works</span>
                  </a>
                </li>
                <li className="my-2">
                  <a href="#" id="style-2" data-replace="Create">
                    <span className="footer-link">Create</span>
                  </a>
                </li>
                <li className="my-2">
                  <a href="#" id="style-2" data-replace="Explore">
                    <span className="footer-link">Explore</span>
                  </a>
                </li>
                <li className="my-2">
                  <a href="#" id="style-2" data-replace="Terms & Services">
                    <span className="footer-link">Terms &amp; Services</span>
                  </a>
                </li>
              </ul>
            </div>
            {/*  */}
            <div className="mt-10 md:mt-0">
              <h1 className="text-[18px]">Community</h1>
              <ul className="mt-5">
                <li className="my-2">
                  <a href="#" id="style-2" data-replace="Help Center">
                    <span className="footer-link">Help Center</span>
                  </a>
                </li>
                <li className="my-2">
                  <a href="#" id="style-2" data-replace="Partners">
                    <span className="footer-link">Partners</span>
                  </a>
                </li>
                <li className="my-2">
                  <a href="#" id="style-2" data-replace="Suggestions">
                    <span className="footer-link">Suggestions</span>
                  </a>
                </li>
                <li className="my-2">
                  <a href="#" id="style-2" data-replace="Blog">
                    <span className="footer-link">Blog</span>
                  </a>
                </li>
                <li className="my-2">
                  <a href="#" id="style-2" data-replace="Newsletters">
                    <span className="footer-link">Newsletters</span>
                  </a>
                </li>
              </ul>
            </div>
            {/*  */}
            <div className="mt-10 md:mt-0">
              <h1 className="text-[18px]">Partner</h1>
              <ul className="mt-5">
                <li className="my-2">
                  <a href="#" id="style-2" data-replace="Our Partner">
                    <span className="footer-link">Our Partner</span>
                  </a>
                </li>
                <li className="my-2">
                  <a href="#" id="style-2" data-replace="Become a Partner">
                    <span className="footer-link">Become a Partner</span>
                  </a>
                </li>
              </ul>
            </div>
            {/*  */}
          </div>
          <div className="end mt-6  flex justify-between items-center px-10 pb-4">
            <div className="">
              <p className="text-white/70 mini:text-[14px] sedang:text-[16px] text-[14px]">
                &#0169; 2024 - Syaid Alfarishi
              </p>
            </div>
            <div className="flex justify-between items-center space-x-5 ">
              <a href="https://www.instagram.com/sydalfhi_/">
                <img
                  loading="lazy"
                  src="assets/instagram.svg"
                  alt="instagram"
                />
              </a>
              <a href="https://web.facebook.com/syaid.alfatishi/">
                <img loading="lazy" src="assets/facebook.svg" alt="facebook" />
              </a>
              <a href="#">
                <img loading="lazy" src="assets/twitter.svg" alt="twitter" />
              </a>
              <a href="#">
                <img loading="lazy" src="assets/linkedin.svg" alt="linkedin" />
              </a>
            </div>
          </div>
        </footer>

        {/* end footer */}
      </div>
    </section>
  );
}
