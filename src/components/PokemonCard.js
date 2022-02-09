import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon : {name, sprites, hp}}) {

  const [showCard, setShowCard] = useState(true)

  function clicker() {
    setShowCard(!showCard)
  }

  const Front = <img src={sprites.front} alt="front"/>
  const Back = <img src={sprites.back} alt="back"/>

  return (
    <Card>
      <div>
        <div className="image" onClick={clicker}>
          {showCard ? Front : Back}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
