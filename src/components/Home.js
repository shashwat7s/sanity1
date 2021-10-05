import React from "react";
import image from "../Home.jpg";

export default function Home() {
  return (
    
    <main>
      <title>Shashwat</title>
      <img
        src={image}
        alt="3d-Render"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-4xl text-black-100 font-bold leading-none lg:leading-snug home-name">
          Welcome!
        </h1>
      </section>
    </main>
  );
}