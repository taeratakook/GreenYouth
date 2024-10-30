import React from "react";
import cover from "../asset/cover.jpeg";

const Home = () => {
  return (
    <section id="home"
      className="bg-cover bg-center h-screen text-white"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="bg-transparan bg-opacity-60 h-full flex flex-col justify-center items-start text-left p-6">
        <h2 className="text-7xl text-lime-400 font-bold mb-4">Green Youth</h2>
        <p className="text-4xl italic text-lime-700 mb-8">Muda, Peduli, dan Beraksi. Itulah, Green Youth</p>
        <a href="#projects" className="bg-green-800 hover:bg-stone-50 text-white font-bold py-2 px-6 rounded-lg shadow-lgm transition duration-300">
          Let's Go
        </a>
      </div>
    </section>
  )
}

export default Home;
