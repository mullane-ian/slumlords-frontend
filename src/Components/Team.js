import React from "react";
import TeamCard from "./TeamCard";

import "./team.scss";
import travis from '../assets/team/travis.jpg'
import dumper from '../assets/team/dump.png'
import ian from '../assets/team/ian.jpg'
console.log(travis)

export const Team=()=> {
  return (
    <div id='team' className="team-container">
      <div className="team-header">
        <p className="team-title">Meet The Team</p>
        <p className="team-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
          nam?
        </p>
      </div>
      <div className="team-cards">
        <TeamCard
          image={travis}
          name="Travis Pollock"
          work="Chief Executive"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos natus deleniti modi consequatur veritatis? Ullam?"
        />
        <TeamCard
          image={dumper}
          name="Dumper"
          work="Lead Artist"
          description="Placeat tenetur nulla ipsa modi, quos asperiores error nobis non voluptatibus dolor officiis inventore perspiciatis"
        />
        <TeamCard
          image="https://purepng.com/public/uploads/large/businessman-onj.png"

          name="Ryan"
          work="COO"
          description="Eveniet quaerat aspernatur illo natus modi vitae nam commodi obcaecati nostrum! Molestias officiis adipisci aliquid"
        />
                <TeamCard
          image={ian}

          name="Ian"
          work="CTO"
          description="Eveniet quaerat aspernatur illo natus modi vitae nam commodi obcaecati nostrum! Molestias officiis adipisci aliquid"
        />
      </div>
    </div>
  );
}

