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
          <h3>Katie, Our Fearless Gatekeeper</h3>
          <img
            className="gloomhaven"
            alt="gloomhaven character"
            src="https://img.search.brave.com/z-CuenZp2XOFxHmV65q1HYc5x52HqxL1zxqoHespMog/rs:fit:857:1200:1/g:ce/aHR0cHM6Ly9jZG5h/LmFydHN0YXRpb24u/Y29tL3AvYXNzZXRz/L2ltYWdlcy9pbWFn/ZXMvMDAxLzM1Mi85/NTYvbGFyZ2UvYWxl/eGFuZHItZWxpY2hl/di1vcmNoaWQtc3Bl/bGx3ZWF2ZXIuanBn/PzE0NTYwMjMwNTc"
          />
        </div>
        <div className="Randall">
          <h3>Randall, Our Creative Conjurer</h3>
          <img
            className="conjurer"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f63901a5-d2d7-494e-9ce5-9cdd5b310080/ddba41k-bcdac2fb-d296-463b-a7cb-ac0941c2387d.png/v1/fill/w_1280,h_1707,q_80,strp/appa_avatar_by_iskvoreets_ddba41k-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcwNyIsInBhdGgiOiJcL2ZcL2Y2MzkwMWE1LWQyZDctNDk0ZS05Y2U1LTljZGQ1YjMxMDA4MFwvZGRiYTQxay1iY2RhYzJmYi1kMjk2LTQ2M2ItYTdjYi1hYzA5NDFjMjM4N2QucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.oIQeb7rSeEAAIqmEgr_N5LbUX1mPuMvqlek_p-le5_o"
            alt="appa"
          />
        </div>
        <div className="Benjamin">
          <h3>Benjamin, Our Samwise of Software</h3>
          <img
            className="samwise"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1daa8576-72ca-43ca-b428-0ad88450a32a/d5scrmc-1789033a-65f8-41c8-a537-c81cf65ce0c8.jpg/v1/fill/w_800,h_1114,q_75,strp/_whole_lotta_rosie_cotton__by_vashperado_d5scrmc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTExNCIsInBhdGgiOiJcL2ZcLzFkYWE4NTc2LTcyY2EtNDNjYS1iNDI4LTBhZDg4NDUwYTMyYVwvZDVzY3JtYy0xNzg5MDMzYS02NWY4LTQxYzgtYTUzNy1jODFjZjY1Y2UwYzguanBnIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5Zbcf74kHfsRwwEp0ESfdpLQYeOZttlCX2yV0HaqWYU"
            alt="samwise gamgee"
          />
        </div>
        <div className="Charlie">
          <h3>And Charlie, Our Developer Druid</h3>
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
