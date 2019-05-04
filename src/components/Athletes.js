import React, { Component } from 'react';
import AthleteCard from './AthleteCard'

class Athletes extends Component {
    render() {
        return (
            <div>
                Here are the athletes
                <AthleteCard />
            </div>
        );
    }
}

export default Athletes;