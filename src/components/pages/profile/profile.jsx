import React from 'react';
import { 
    FaGraduationCap, 
    FaFlagCheckered, 
    FaUser,
    FaPlaceOfWorship,
    FaCalendarAlt,
    FaInbox,
    FaGlobe,
    FaMapMarkedAlt
} from 'react-icons/fa';
import { Fade, Zoom } from 'react-reveal';
import '../../styles/profile.scss';


const Profile = () => {
    return(
        <Fade>
            <Zoom><Biodata/></Zoom>
            <Education/>
        </Fade>
    );
};

const Biodata = () => {
    return(
        <div className="content-wrap">
            <h1 className="title">BIODATA</h1>
            <div className="biodata-wrap">
                <div className="bio-title">
                    <FaUser/> Nama
                </div>
                <div className="bio-value">
                    Andra Manday
                </div>
            </div>
            <div className="biodata-wrap">
                <div className="bio-title">
                    <FaPlaceOfWorship/> Tempat Lahir
                </div>
                <div className="bio-value">
                    Pariaman
                </div>
            </div>
            <div className="biodata-wrap">
                <div className="bio-title">
                    <FaCalendarAlt/> Tanggal Lahir
                </div>
                <div className="bio-value">
                    9 April 1989
                </div>
            </div>
            <div className="biodata-wrap">
                <div className="bio-title">
                    <FaInbox/> Email
                </div>
                <div className="bio-value">
                    andra.manday@gmail.com
                </div>
            </div>
            <div className="biodata-wrap">
                <div className="bio-title">
                    <FaGlobe/> Website
                </div>
                <div className="bio-value">
                    http://andra.antarracoding.com
                </div>
            </div>
            <div className="biodata-wrap">
                <div className="bio-title">
                    <FaMapMarkedAlt/> Lokasi
                </div>
                <div className="bio-value">
                    Jakarta Selatan, DKI Jakarta
                </div>
            </div>
        </div>
    );
}

const Education = () => {
    return(
        <div className="content-wrap">
            <h1 className="title">PERJALANAN PENDIDIKAN</h1>
            <div className="icon-star-end">
                <FaGraduationCap/>
            </div>
            <div className="education-wrap pos-l">
                <div className="edu-time">
                    <span>1995 s/d 1998</span>
                </div>
                <Zoom><div className="edu-desc">
                    <div className="desc-title">
                        SD NEGRI 32 KAMPUNG SAGIT
                    </div>
                    <div className="desc-content">
                        <p>Lorem ipsum dolor sit amets consescteturs sasipisicisng elit. Ipsam, doloremque. Voluptatibus unde eum, minima magni voluptas animi, architecto assumenda perspiciatis aliquid, similique itaque! Commodi veritatis illum natus aperiam, nulla culpa.</p>
                    </div>
                </div></Zoom>
            </div>
            <div className="education-wrap">
                <div className="edu-time">
                    <span>1998 s/d 20021</span>
                </div>
                <Zoom><div className="edu-desc">
                    <div className="desc-title">
                        SD NEGRI 09 PASIR PAUH
                    </div>
                    <div className="desc-content">
                        <p>Lorem ipsum dolor sit amets consescteturs sasipisicisng elit. Ipsam, doloremque. Voluptatibus unde eum, minima magni voluptas animi, architecto assumenda perspiciatis aliquid, similique itaque! Commodi veritatis illum natus aperiam, nulla culpa.</p>
                    </div>
                </div></Zoom>
            </div>
            <div className="education-wrap pos-l">
                <div className="edu-time">
                    <span>2001 s/d 2004</span>
                </div>
                <Zoom><div className="edu-desc">
                    <div className="desc-title">
                        SMP NEGRI 1 PARIAMAN
                    </div>
                    <div className="desc-content">
                        <p>Lorem ipsum dolor sit amets consescteturs sasipisicisng elit. Ipsam, doloremque. Voluptatibus unde eum, minima magni voluptas animi, architecto assumenda perspiciatis aliquid, similique itaque! Commodi veritatis illum natus aperiam, nulla culpa.</p>
                    </div>
                </div></Zoom>
            </div>
            <div className="education-wrap">
                <div className="edu-time">
                    <span>2004 s/d 2007</span>
                </div>
                <Zoom><div className="edu-desc">
                    <div className="desc-title">
                        SMA NEGRI 1 PARIAMAN
                    </div>
                    <div className="desc-content">
                        <p>Lorem ipsum dolor sit amets consescteturs sasipisicisng elit. Ipsam, doloremque. Voluptatibus unde eum, minima magni voluptas animi, architecto assumenda perspiciatis aliquid, similique itaque! Commodi veritatis illum natus aperiam, nulla culpa.</p>
                    </div>
                </div></Zoom>
            </div>
            <div className="education-wrap pos-l">
                <div className="edu-time">
                    <Fade><span>2007 s/d 2011</span></Fade>
                </div>
                <Zoom><div className="edu-desc">
                    <div className="desc-title">
                        UNIVERSITAS RIAU
                    </div>
                    <div className="desc-content">
                        <p>Lorem ipsum dolor sit amets consescteturs sasipisicisng elit. Ipsam, doloremque. Voluptatibus unde eum, minima magni voluptas animi, architecto assumenda perspiciatis aliquid, similique itaque! Commodi veritatis illum natus aperiam, nulla culpa.</p>
                    </div>
                </div></Zoom>
            </div>
            <div className="icon-star-end">
                <FaFlagCheckered/>
            </div>
        </div>
        
    );
};


export default Profile;