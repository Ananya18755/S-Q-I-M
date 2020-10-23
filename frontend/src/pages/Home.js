import React from "react";
import "../styles/home.css";
import bot from '../bot.png';

export default function Home() {
  return (
    <div className="home_page">
      <div className="home_header">
        <center>
          <h1>S.Q.I.M</h1>
          <p>A smart query and information management sytem</p>
        </center>
      </div>
      <div className="home_sub">
        <div className="home_description">
          <h1>About</h1>
          <p>
            adasd dfajd qadawdojm adjad jm fsdfs 
            sfsd sdf sdf sdfssd fsefs wsef sdf swefs sdf
             eswdf sdf sd fsd dfs sdfsdfsd  aodjma daodasm 
             jdoaa sdd d asdd asda adas sd affgdfhgtrf g erdgrg
             fsd fg h ddgv dfvgdfg gfdhbdg fgd gfdhdf g gdf g
             gfdg dhdgfh 
          </p>
        </div>
        {/* <h1> some image </h1> */}
        <img src={bot} content="width=device-width, initial-scale=1"  alt='image' />
      </div>
    </div>
  );
}
