import React from "react";

const Features = () => {
  return (
    <div className="max-w-7xl bg-indigo-600 min-h-80 rounded-xl px-6 py-12 mx-auto my-16">
      <h2 className="text-5xl mb-14 text-white underline text-center font-playwrite">
        What We Offer
      </h2>
      <div className="features-container items-center justify-center flex gap-12">
        <div className="feature-card hover:-translate-y-4 transition group h-100 bg-white w-1/4 rounded-xl px-3 py-6 border items-center">
          <div className="dotted-border-container border-dashed border border-indigo-600 border-2 rounded rounded-xl py-8 px-5">
            <h3 className="text-4xl text-indigo-600 font-serif text-center mb-8">
              SEAFOOD
            </h3>
            <p className="text-indigo-600 font-sans text-base text-center group-hover:-translate-y-1 transition duration-400 ">
              Dolor suscipit adipisci voluptates dolores consequuntur libero
              deserunt tempore quis officiis, eius ducimus quod at mollitia est,
              nulla excepturi! Magni, iusto quo!
            </p>
          </div>
        </div>
        <div className="feature-card hover:-translate-y-4 transition group h-100 bg-white w-1/4 rounded-xl px-3 py-6 border items-center">
          <div className="dotted-border-container border-dashed border border-indigo-600 border-2 rounded rounded-xl py-8 px-5">
            <h3 className="text-4xl text-indigo-600 font-serif text-center mb-8">
              PIZZAS
            </h3>
            <p className="text-indigo-600 font-sans text-base text-center group-hover:-translate-y-1 transition duration-400 ">
              Dolor suscipit adipisci voluptates dolores consequuntur libero
              deserunt tempore quis officiis, eius ducimus quod at mollitia est,
              nulla excepturi! Magni, iusto quo!
            </p>
          </div>
        </div>
        <div className="feature-card hover:-translate-y-4 transition group h-100 bg-white w-1/4 rounded-xl px-3 py-6 border items-center">
          <div className="dotted-border-container border-dashed border border-indigo-600 border-2 rounded rounded-xl py-8 px-5">
            <h3 className="text-4xl text-indigo-600 font-serif text-center mb-8">
              PASTAS
            </h3>
            <p className="text-indigo-600 font-sans text-base text-center group-hover:-translate-y-1 transition duration-400 ">
              Dolor suscipit adipisci voluptates dolores consequuntur libero
              deserunt tempore quis officiis, eius ducimus quod at mollitia est,
              nulla excepturi! Magni, iusto quo!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
