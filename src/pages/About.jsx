import React from 'react';
import Banner from '../components/banner';
import Collapse from '../components/collapse';
import aboutData from "../data/about.json"

function About() {
    return(
        <div>
            <Banner/>
            {aboutData.map(item => (
                <Collapse key={item.id} header={<div>{item.title}</div>}>
                    <p>{item.description}</p>
                </Collapse>
            ))}
        </div>
    )
};

export default About