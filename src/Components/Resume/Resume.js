import React from 'react'
import './Resume.css';
import Pic1 from '../../assets/kylian-mbappe.jpg';

function Resume()
{
    const resume = [1,2,3,4]
    return (
        <div>
            <h2 className="title text-center">Resumé des match & Goal</h2>
            <div className="row">
                {
                    resume.map(item => {
                        return (
                            <div className="col mt-3" key={item}>
                                <a href="#" title="barcalona vs liverbool">
                                    <img src={Pic1} alt='resume picture'/>
                                        <h4 className="res">Real Madride vs barcalona</h4>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Resume;