import React, { Component } from 'react';

class AthleteCard extends Component {
    render() {
        return (
            <div class="maincontainer">

            <div class="thecard">
      
              <div class="thefront"><h1>Ismo Laitela</h1><p>This is the front of the card. It contains important information. Please see overleaf for more details.</p></div>
      
              <div class="theback"><h1>Athlete statistics</h1><p>Some table of stats here.</p></div>
      
            </div>
          </div>
        );
    }
}

export default AthleteCard;