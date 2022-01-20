import React from 'react';
import '../styles/about.css';

export default function About() {
  return (
    <div className="about">
      <h1 className="about-title">About Creature Collab</h1>
      <section className="about-blurb">
        <p>
          It all began one fateful day when four coding warriors crossed paths
          at General Assembly and combined foces to create this service you now
          know as Creature Collab.
        </p>
        <p>
          In these times of isolation, the hero's journey can feel exccedingly
          lonesome. Our collective brain child was born from the desire to find
          fellow fantasy enthusiasts and forge friendships based on shared
          interests in all things fictional and fun. Our cast of characters
          include:
        </p>
      </section>
      <div className="characters-flex-container">
        <div className="Katie">
          Katie, Our Fearless Gatekeeper
          <img
            className="gloomhaven"
            alt="gloomhaven character"
            src="https://img.search.brave.com/z-CuenZp2XOFxHmV65q1HYc5x52HqxL1zxqoHespMog/rs:fit:857:1200:1/g:ce/aHR0cHM6Ly9jZG5h/LmFydHN0YXRpb24u/Y29tL3AvYXNzZXRz/L2ltYWdlcy9pbWFn/ZXMvMDAxLzM1Mi85/NTYvbGFyZ2UvYWxl/eGFuZHItZWxpY2hl/di1vcmNoaWQtc3Bl/bGx3ZWF2ZXIuanBn/PzE0NTYwMjMwNTc"
          />
        </div>
        <div className="Randall">
          Randall, Our Creative Conjurer
          <img
            className="conjurer"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9167f62d-3009-4057-bae0-bfb96ae5353f/d9fybza-fb2b9059-b8d7-4a5a-9a1e-365a408b4585.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkxNjdmNjJkLTMwMDktNDA1Ny1iYWUwLWJmYjk2YWU1MzUzZlwvZDlmeWJ6YS1mYjJiOTA1OS1iOGQ3LTRhNWEtOWExZS0zNjVhNDA4YjQ1ODUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jCCdE1B7LjSW6y1pvGUYdPMWJtlI8Vih3ML4ydd_piQ"
            alt="conjurer"
          />
        </div>
        <div className="Benjamin">
          Benjamin, Our Samwise of Software
          <img
            className="samwise"
            src="https://news24viral.com/wp-content/uploads/2021/07/1625396338_623_The-Lord-of-the-Rings-Is-Sam-the-most-important.jpg"
            alt="samwise gamgee"
          />
        </div>
        <div className="Charlie">
          And Charlie, Our Developer Druid
          <img
            className="madrigal"
            src="https://i.pinimg.com/564x/dc/ca/20/dcca20b42e949eb4f3e6b8294df4dcd9.jpg"
            alt="madrigal"
          />
        </div>
      </div>
    </div>
  );
}
