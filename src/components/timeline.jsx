import React from 'react';
import './timeline.css';
import { Link } from 'react-router-dom';
import Button from '../components/button';
import line from '../assets/line.gif';
import timelinebadge from '../assets/timelineBadge.jpeg';
import timelinebadgedate from '../assets/timelineBadgeDate.jpeg';


function Timeline() {
    return (
        <div id="timeline" style={{ backgroundImage: `url(${line})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1>Timeline</h1>
            <div id="timelinecontainer">
                <div className="badgecontainer">
                    <img id="badge" src={timelinebadge} alt="timeline badge" />
                    <div id="absolutecontainerone">
                        <div id="badgedatecontainer">
                            <img id="badgedate" src={timelinebadgedate} alt="timeline badge date" />
                            <p id="badgetext">2023-01-01</p>
                        </div>
                    </div>
                    <div className='badgetextcontainer'>
                        <p className='badgeinnertext'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio beatae aperiam atque iusto vel provident quis. Nemo porro quod minima necessitatibus nobis omnis, voluptatibus commodi maiores ipsam velit totam suscipit!</p>
                    </div>
                </div>
                <div className="badgecontainer">
                    <img id="badge" className="evenbadge" src={timelinebadge} alt="timeline badge" />
                    <div id="absolutecontainertwo">
                        <div id="badgedatecontainer">
                            <img id="badgedate" src={timelinebadgedate} alt="timeline badge date" />
                            <p id="badgetext">2023-01-01</p>
                        </div>
                    </div>
                    <div className='badgetextcontainer'>
                        <p className='badgeinnertext'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio beatae aperiam atque iusto vel provident quis. Nemo porro quod minima necessitatibus nobis omnis, voluptatibus commodi maiores ipsam velit totam suscipit!</p>
                    </div>
                </div>
                <div className="badgecontainer">
                    <img id="badge" src={timelinebadge} alt="timeline badge" />
                    <div id="absolutecontainerthree">
                        <div id="badgedatecontainer">
                            <img id="badgedate" src={timelinebadgedate} alt="timeline badge date" />
                            <p id="badgetext">2023-01-01</p>
                        </div>
                    </div>
                </div>
                <div className="badgecontainer">
                    <img id="badge" className="evenbadge" src={timelinebadge} alt="timeline badge" />
                    <div id="absolutecontainerfour">
                        <div id="badgedatecontainer">
                            <img id="badgedate" src={timelinebadgedate} alt="timeline badge date" />
                            <p id="badgetext">2023-01-01</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
