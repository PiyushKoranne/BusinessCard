import './BusinessCard.css';
import React from 'react';
import {GrMail} from 'react-icons/gr';
import {FiMail} from 'react-icons/fi';
import {SiLinkedin} from 'react-icons/si';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';
import{FaFacebookMessenger} from 'react-icons/fa';


const BusinessCard = () => {
    return (
        <div className='BusinessCard--Card'>
            <div className='BusinessCard--Card--Section1'>
                <div className='ProfilePic'></div>
                <h6 className='BusinessCard--Card--Section1--Name'>PIYUSH KORANNE</h6>
                <h5 className='BusinessCard--Card--Section1--Status'><code>Being A River</code></h5>
                <div className='BusinessCard--Card--Section1--ButtonPanel'>
                <div className='BusinessCard--Card--Section1--Button1'><GrMail />Email</div>
                <div className='BusinessCard--Card--Section1--Button2'><SiLinkedin />LinkedIn</div>
                </div>                

            </div>
            <div className='BusinessCard--Card--Section2'>
                <h6>About</h6>
                <p>I am Piyush, a Data Analyst who also likes to dabble in Front End Development. I have
                    been working as a data analyst for one year now.
                </p>
            </div>
            <div className='BusinessCard--Card--Section3'>
                <h6>Interests</h6>
                <p>My Interests include cooking, swimming, reading, I am a die har F1 fan. 
                    I also like to get philosolical every now and then.
                </p>
            </div>
            <div className='BusinessCard--Card--Section4'>
                <FaTwitterSquare id='BusinessCard--Card--Section4--Twit' fontSize='1.2em'/>
                <FaFacebookSquare id='BusinessCard--Card--Section4--Face' fontSize='1.2em'/>
                <FaInstagram id='BusinessCard--Card--Section4--Insta' fontSize='1.2em'/>
                <FaGithubSquare id='BusinessCard--Card--Section4--Git' fontSize='1.2em'/>
                <FaFacebookMessenger id='BusinessCard--Card--Section4--Msg' fontSize='1.2em'/>
            </div>
        </div>
    );
}

export default BusinessCard;