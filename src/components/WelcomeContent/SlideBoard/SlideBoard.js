import React from 'react';
import chair from '../../../images/chair.png';
import principal from '../../../images/principal.png';
import video from '../../../images/video.png';
import dbbl from '../../../images/dbbl.png';
import idea from '../../../images/idea.png';
import award from '../../../images/award.png';
import './SlideBoard.css';

const SlideBoard = () => {
    return (
        <section className="slideBoard">
            <div>
                <p className="nav-newsText m-0">Chairman Message</p>
                <div className="message-box">
                    <img className="img-fluid" src={chair} alt="" />
                    <p>Gp. Jahangir Alam Talukdar, psc</p>
                </div>

                <p className="nav-newsText m-0">Principal Message</p>
                <div className="message-box">
                    <img className="img-fluid" src={principal} alt="" />
                    <p>Scd Ldr. Rabiul Islam Chowdhury, psc</p>
                </div>
            </div>

            <div className=" bg-light">
                <p className="nav-newsText">Notice Board</p>

                <div className="noticeBoard">
                    <div className="notice-box p-1 m-2">
                        <p style={{marginRight: '10px'}}>Nov 10 2021</p>
                        <p style={{borderRight: '1px solid black'}}></p>
                        <p>Admission will be start from Novemebr 25, 2021 for the class of KG to Ten</p>
                    </div>
                    <div className="notice-box p-1 m-2">
                        <p style={{marginRight: '10px'}}>Nov 10 2021</p>
                        <p style={{borderRight: '1px solid black'}}></p>
                        <p>Admission will be start from Novemebr 25, 2021 for the class of KG to Ten</p>
                    </div> 
                    <div className="notice-box p-1 m-2">
                        <p style={{marginRight: '10px'}}>Nov 10 2021</p>
                        <p style={{borderRight: '1px solid black'}}></p>
                        <p>Admission will be start from Novemebr 25, 2021 for the class of KG to Ten</p>
                    </div>
                    <div className="notice-box p-1 m-2">
                        <p style={{marginRight: '10px'}}>Nov 10 2021</p>
                        <p style={{borderRight: '1px solid black'}}></p>
                        <p>Admission will be start from Novemebr 25, 2021 for the class of KG to Ten</p>
                    </div> 
                    <div className="notice-box p-1 m-2">
                        <p style={{marginRight: '10px'}}>Nov 10 2021</p>
                        <p style={{borderRight: '1px solid black'}}></p>
                        <p>Admission will be start from Novemebr 25, 2021 for the class of KG to Ten</p>
                    </div>
                    <div className="notice-box p-1 m-2">
                        <p style={{marginRight: '10px'}}>Nov 10 2021</p>
                        <p style={{borderRight: '1px solid black'}}></p>
                        <p>Admission will be start from Novemebr 25, 2021 for the class of KG to Ten</p>
                    </div>
           
                </div>
                    <div className="noticeAll text-end my-3">
                        <a  href="">See all</a>
                    </div>
            </div>

                <div className="dbbl">
                    <img className="img-fluid w-100 rounded" src={dbbl} alt="" />
                </div>

                    <div className="video-box my-3">
                        <img className="img-fluid w-100" src={video} alt="" />
                    </div>

                    <div className="fb-box">
                        <p className="nav-newsText">Facebook Page</p>
                    </div>

                    <div className="technology">
                        <p className="nav-newsText">Technology Partner</p>
                        <img src={idea} alt="" />
                        <a target="_blank" href="https://ideasolutionbd.com/">www.ideasolutionbd.com</a>
                    </div>

                    <div className="award">
                        <p className="nav-newsText m-0">Wining Award</p>
                        <img className="img-fluid w-100" src={award} alt="" />
                    </div>

        </section>
    );
};

export default SlideBoard;