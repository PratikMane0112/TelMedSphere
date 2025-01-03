import React, { useState, useEffect, useContext } from "react";
import Modal from '@mui/material/Modal';
import useDocTitle from "../hooks/useDocTitle";
import { IoMdClose } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";
import { Alert } from "@mui/material";
import { BsEmojiAngry, BsEmojiFrown, BsEmojiExpressionless, BsEmojiSmile, BsEmojiLaughing } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineLightBulb, HiUserGroup } from "react-icons/hi";
import { FaVideo } from "react-icons/fa";
import httpClient from "../httpClient";
import Preloader from "../components/common/Preloader";
import commonContext from "../contexts/common/commonContext";
import useScrollDisable from "../hooks/useScrollDisable";
import HealthFact from "../components/facts/HealthFact";


const Home = () => {
    useDocTitle("Home");
    const navigate = useNavigate();

    const { isLoading, toggleLoading } = useContext(commonContext);

    const [haslastMeet, setHasLastMeet] = useState(localStorage.getItem("lastMeetWith")!==undefined && localStorage.getItem("lastMeetWith")!==null && localStorage.getItem("lastMeetWith")!=="null");
    const [feedbackRate, setFeedbackRate] = useState(3);
    const [feedbackAlert, setFeedbackAlert] = useState(false);
    const [searchPatient, setSearchPatient] = useState(localStorage.getItem("setSearchPatient")!==undefined && localStorage.getItem("setSearchPatient")!==null && localStorage.getItem("setSearchPatient")==="true");
    const isDoctor = localStorage.getItem("usertype")==="doctor";
    const [searching, setSearching] = useState(localStorage.getItem("searching")!==undefined && localStorage.getItem("searching")!==null ? localStorage.getItem("searching")==="2" ? 2 : 1 : 0);
    const [patient_name, setPatient_name] = useState(localStorage.getItem("curpname")!==undefined && localStorage.getItem("curpname")!==null && localStorage.getItem("curpname")!=="null" ? localStorage.getItem("curpname") : "");
    const [meetlink, setMeetlink] = useState(localStorage.getItem("curmlink")!==undefined && localStorage.getItem("curmlink")!==null && localStorage.getItem("curmlink")!=="null" ? localStorage.getItem("curmlink") : "");
    const userNotExists = localStorage.getItem("usertype")===undefined || localStorage.getItem("usertype")===null;
    const [joinmeet, setJoinmeet] = useState(false);
    const [message, setMessage] = useState("");
    const [joinlink, setJoinlink] = useState("");
    const [doctormail, setDoctorMail] = useState("");
    const [doctorname, setDoctorName] = useState("");
    const [isConnecting, setIsConnecting] = useState(false);
    const [isAlert, setIsAlert] = useState("");
    const [availablemodal, setAvailablemodal] = useState(false);
    const [alertmessage, setAlertmessage] = useState("");
    const [available, setAvailable] = useState(localStorage.getItem("available")===undefined || localStorage.getItem("available")===null || localStorage.getItem("available")==="true");
    const [isVerified, setVerified] = useState(localStorage.getItem("verified")!==undefined && localStorage.getItem("verified")!==null && localStorage.getItem("verified")==="true");
    const [verCont, setVerCont] = useState("Your Account is not verified yet! Please verify for appointments!!");
    const [verAlert, setVerAlert] = useState(false);


    const handleFeedbackClose = () => {

        httpClient.post('/doctor_app', {
            email: localStorage.getItem("lastMeetMail"),
            stars: feedbackRate
        });
        localStorage.setItem("lastMeetWith", null);
        setHasLastMeet(false);

        setFeedbackAlert(true);
        setTimeout(() => {
            setHasLastMeet(false);
            setFeedbackAlert(false);
        }, 2000);
    };
    const ratings = ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"];

    const [upcomingAppointments, setUpcomingAppointments] = useState([]);

    useEffect(() => {
        const now = new Date(new Date().getTime() - 10*60000);

        if(userNotExists) {
            navigate("/");
        }

        if(!userNotExists) {
            if (!isDoctor) { 
            toggleLoading(true);
            httpClient.post('/patient_apo', { email: localStorage.getItem('email') })
                .then((res) => {
                    let upcoming = [];
                    res.data.appointments.sort().reverse().forEach((appointment) => {
                        if (new Date(appointment.date+" " + appointment.time) >= now) {
                            upcoming.unshift(appointment);
                        }
                    });
                    toggleLoading(false);
                    setUpcomingAppointments(upcoming);
                })
                .catch((err) => {
                    toggleLoading(false);
                    console.log(err);
                })
            }
            else {
                toggleLoading(true);
                httpClient.post('/set_appointment', { email: localStorage.getItem('email') })
                    .then((res) => {
                        let upcoming = [];
                        res.data.appointments.sort().reverse().forEach((appointment) => {
                            if(new Date(appointment.date+" "+appointment.time) >= now){
                                upcoming.unshift(appointment);
                            }
                        });
                        toggleLoading(false);
                        setUpcomingAppointments(upcoming)
                    })
                    .catch((err) => {
                        toggleLoading(false);
                        console.log(err);
                    })
            }
        }
        // eslint-disable-next-line
    }, []);

    const searchmeet = () => {
        setSearchPatient(true);
        setSearching(0);
        httpClient.post('make_meet', { email: localStorage.getItem('email') })
            .then((res) => {
                console.log(res.data);
                if (res.data.link===null) {
                    setTimeout(() => {
                        setSearching(1);
                    }, 1000);
                    setTimeout(() => {
                        setSearchPatient(false);
                    }, 2000);
                }
                else {
                    setPatient_name(res.data.link['name']);
                    setMeetlink(res.data.link['link']);
                    setTimeout(() => {
                        setSearching(2);
                    }, 2000);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // setInterval(() => {
    //     httpClient.post('make_meet', { email: localStorage.getItem('email') })
    //         .then((res) => {
    //             if (res.data.link!==null) {
    //                 setPatient_name(res.data.link['name']);
    //                 setMeetlink(res.data.link['link']);
    //                 setSearchPatient(true);
    //                 setSearching(2);
    //             }
    //             else {
    //                 setSearchPatient(false);
    //                 setSearching(0);
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, 25000);

    {localStorage.getItem("usertype")==="doctor" &&
    setInterval(() => {
        setMeetlink(localStorage.getItem("curmlink"));
        setPatient_name(localStorage.getItem("curpname"));
        setSearching(localStorage.getItem("searching")==="2" ? 2 : localStorage.getItem("searching")==="1" ? 1 : 0);
        setSearchPatient(localStorage.getItem("setSearchPatient") === "true" ? true : false);
    }, 10000);}

    const handleappointmentmeet = (doc, demail, link) => {
        if(doc){
            setJoinlink(link);
            setDoctorMail(demail);
            setDoctorName(doc);
            setJoinmeet(true);
        }
        else{
            httpClient.post("meet_status", {email: localStorage.getItem("email"), link: link})
            httpClient.put("/currently_in_meet", {email: localStorage.getItem("email")})
            .then(res => {
                setSearchPatient(false);
                navigate(link);
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    const handlemeet = () => {
        httpClient.post("/meet_status", { "email": doctormail }).then((res) => {
            if ((res.status === 208 && res.data.link === joinlink) || res.status === 200) {
              httpClient.put("/make_meet", {
                "email": doctormail,
                "link": joinlink,
                "patient": localStorage.getItem("username")
              }).then((res) => {
                setTimeout(() => {
                  httpClient.post("/currently_in_meet", { "email": doctormail }).then((res) => {
                    if (res.data.curmeet) {
                      setIsConnecting(false);
                      navigate(joinlink)
                    }
                    else {
                      httpClient.put('/delete_meet', { "email": doctormail })
                      setIsConnecting(false);
                      setMessage(res.data.message);
                    }
                  })
                }, 30000);
              }).catch(() => {
                // console.log(res)
              })
            }
            else {
              setIsConnecting(false);
              setMessage(res.data.message);
            }
          }).catch(() => {
            // console.log(res)
          })
    }

    const iamavailable = () => {
        setIsAlert("success");
        setAlertmessage("Now, patients can meet you")
        setAvailablemodal(false);
        setTimeout(() => {
            httpClient.put("/doctor_avilability", { "email": localStorage.getItem("email") })
            setIsAlert("");
            setAlertmessage("");
            setAvailable(true);
            localStorage.setItem("available", true);
        }, 3000);
    }

    const iamnotavailable = () => {
        setIsAlert("error");
        setAlertmessage("Now, patients can't meet you")
        setAvailablemodal(false);
        setTimeout(() => {
            httpClient.put("/doc_status", { "email": localStorage.getItem("email") })
            setIsAlert("");
            setAlertmessage("");
            setAvailable(false);
            localStorage.setItem("available", false);
        }, 3000);
    }

    const check = () => {
        httpClient.post("/verify", { "email": localStorage.getItem("email") })
            .then((res) => {
                console.log(res.data);
                if (res.data.verified) {
                    setVerCont("Yayy! Your Account is verified!!")
                    setVerAlert(true);
                    setTimeout(() => {
                        setVerified(true);
                    }, 2000);
                    localStorage.setItem("verified", true);
                }
                else {
                    setVerCont("Oops! Your Account isn't verified yet!!");
                    setVerAlert(false);
                    setTimeout(() => {
                        setVerCont("Your Account is not verified yet! Please verify for appointments!!");
                        setVerified(false);
                    }, 2000);
                    localStorage.setItem("verified", false);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // const news = [{message: "Hello! all, today is the holiday", doctor: "Sam"}, {message: "Please be safe and stay at home", doctor: "Joe"}];

    useScrollDisable(isLoading);

    if(isLoading) {
        return <Preloader />;
    }


    return (
        <>
            <div id="home-page">
                {isDoctor && !isVerified && <Alert severity={verAlert ? "success" : "error"} style={{
                    position: "fixed", top: "100px", width: "100%", display: "flex", justifyContent: "center"
                    }}>{verCont}</Alert>}

                {isDoctor && !isVerified && (
                    <div className="check-verify-status">
                        <h3>Wanna check your verification status? </h3>
                        <button onClick={check}>Check</button>
                    </div>
                )}

                {isDoctor && (
                    <div className="is-meet-div">
                        <div className="meet-bg"></div>
                        <div className="main">
                            <div className="content-div">
                                <h2>Is there any patient waiting?</h2>
                                <p>Search for a patient now</p>
                            </div>
                            <div className="test-btn">
                                <button onClick={() => {
                                    searchmeet()}}
                                    disabled={!isVerified}
                                    >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* { !isDoctor && (
                    <div className="dis-pred-test-div">
                        <div className="test-bg"></div>
                        <div className="main">
                            <div className="content-div">
                                <h2>Feeling Dizzy?</h2>
                                <p>Test your health now</p>
                            </div>
                            <div className="test-btn">
                                <button onClick={() => navigate('/disease-prediction')}>
                                    Test now
                                </button>
                            </div>
                        </div>
                    </div>
                )} */}


                <div className="upcoming-appointments">
                    <h2>Upcoming Appointments</h2>
                    <div className="main">
                        <ul>
                            {upcomingAppointments.map((item, index) => (
                                <li className="appt-item" key={index}>
                                    <div className="content">
                                        <p>{new Date(item.date + " " + item.time).toString().slice(0,3) + "," + new Date(item.date + " " + item.time).toString().slice(3, 16) + "at " + new Date(item.date + " " + item.time).toString().slice(16,21)},</p>
                                        <p> By {item.doctor ? item.doctor : item.patient}</p>
                                    </div>
                                    <button className="join-btn" disabled={new Date(item.date+" "+item.time) > new Date()} onClick={() => handleappointmentmeet(item.doctor,item.demail,item.link)}>Join</button>
                                </li>
                            ))}
                            {upcomingAppointments.length===0 && <li className="appt-item"><div className="content">No appointments found...</div>{!isDoctor && <button className="join-btn" onClick={() => navigate('/doctors')}>Book</button>}</li>}
                        </ul>
                    </div>
                </div>

                {/* <div className="news-section">
                    <h2>News from Our Doctors</h2>
                    <div className="content">
                        {news.length > 0 && <div className="messages">
                            <div className="head">Recent Messages {`(`}<Link to="/news" className="news-link">Check older messages</Link>{`)`}</div>
                            {news.map((item, ind) => (
                                <div key={ind} className="message-item">
                                    <div className="msg-name">Dr. {item.doctor}</div>
                                    <div className="msg-text">{item.message}</div>
                                </div>
                            ))}
                        </div>}
                        {news.length===0 && <div className="no-messages">No messages found recently...</div>}
                        {isDoctor && <div className="post-message">
                            <input type="text" placeholder="Any Message..." />
                            <button>Send</button>
                        </div>}
                    </div>
                </div> */}

                <div className="todays-tip">
                    <div className="head">
                        <HiOutlineLightBulb className="bulb-icon"/>
                        <h2>Healthy Fact of the Day</h2>
                    </div>
                    <div className="content">
                       <HealthFact/>
                    </div>
                </div>

                {
                    isDoctor && isVerified && (
                        <div className="make-available" onClick={() => setAvailablemodal(true)}>
                            { isAlert!=="" && <Alert severity={isAlert} className='avilability_alert'>{alertmessage}</Alert> }
                            Set your availability
                            <span className={`doctor_status ${available? "available" : ""}`}></span>
                        </div>
                    )      
                }
            </div>
            <Modal
                open={haslastMeet && (!isDoctor)}
                onClose={handleFeedbackClose}
                >
                <div id="feedback-modal">
                    <div className="close_btn_div">
                        <IoMdClose onClick={handleFeedbackClose} />
                    </div>
                    <div className="feedback-details">
                        { feedbackAlert && <Alert severity="success">Thank you for your response</Alert>}
                        <h3>Feedback</h3>
                        <div className="consultation-qn">How was your consultation with {localStorage.getItem("lastMeetWith")}?</div>
                        <div className="ratings">
                            <div className="rating-icons">
                                <div className="icon" style={{color: `${feedbackRate===0? "red" : "grey"}`}} onClick={() => setFeedbackRate(0)}><BsEmojiAngry /></div>
                                <div className="icon" style={{color: `${feedbackRate===1? "red" : "grey"}`}} onClick={() => setFeedbackRate(1)}><BsEmojiFrown /></div>
                                <div className="icon" style={{color: `${feedbackRate===2? "orange" : "grey"}`}} onClick={() => setFeedbackRate(2)}><BsEmojiExpressionless /></div>
                                <div className="icon" style={{color: `${feedbackRate===3? "green" : "grey"}`}} onClick={() => setFeedbackRate(3)}><BsEmojiSmile /></div>
                                <div className="icon" style={{color: `${feedbackRate===4? "green" : "grey"}`}} onClick={() => setFeedbackRate(4)}><BsEmojiLaughing /></div>
                            </div>
                            <div className="rating-text">
                                {ratings[feedbackRate]}
                            </div>
                        </div>
                    </div>
                    <div className="submit-btn">
                        <button onClick={handleFeedbackClose} disabled={feedbackAlert}>{feedbackAlert? "Submitted" : "Submit" }</button>
                    </div>
                </div>
            </Modal>
            <Modal
                open={haslastMeet && isDoctor}
                onClose={() => {
                    localStorage.setItem("lastMeetWith", null);
                    setHasLastMeet(false);
                }}
                >
                <div id="feedback-modal">
                    <div className="close_btn_div">
                        <IoMdClose onClick={() => {
                            localStorage.setItem("lastMeetWith", null);
                            httpClient.put('/delete_meet', { "email": doctormail })
                            setHasLastMeet(false);
                        }} />
                    </div>
                    <div className="doctor-feedback">
                        <h3>Thank You <BsEmojiSmile /> </h3>
                        <div className="thankyou-note">
                            Thank you, {localStorage.getItem("username")}!!<br /> You just treated one more life!
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal
                open={searchPatient}
                onClose={() => {
                    // httpClient.put('/delete_meet', { email: localStorage.getItem("email")})
                    setSearchPatient(false)
                }}
                >
                <div id="search-patient-modal">
                    <div className="close_btn_div">
                        <IoMdClose onClick={() => {
                            // httpClient.put('/delete_meet', { email: localStorage.getItem("email")})
                            setSearchPatient(false)}} />
                    </div>
                    {searching===0 && (
                        <div className="searching-div">
                            <div className="search-div">
                                <HiUserGroup className="patients-icon" />
                                <div className="circle">
                                    <div className="search-img-div">
                                        <img className="search-img" src="search-img.png" alt="searching" />
                                    </div>
                                </div>
                            </div>
                            <h3>Searching...</h3>
                        </div>
                    )}
                    {searching===1 && (
                        <div className="searching-div">
                            <div className="search-div">
                                <HiUserGroup className="patients-icon" />
                                <div className="done-icon-div">
                                    <IoCheckmarkDone className="done-icon" />
                                </div>
                            </div>
                            <h3>No Patients Found!</h3>
                        </div>
                    )}
                    {searching===2 && (
                        <div className="searching-div">
                            <h3>Patient Found!</h3>
                            <div className="connect-details">
                                <div>Name: {patient_name}</div>
                                <div className="connect-div">
                                    <button
                                     onClick={() => {
                                        httpClient.post("meet_status", {email: localStorage.getItem("email")})
                                        httpClient.put("/currently_in_meet", {email: localStorage.getItem("email")})
                                        .then(res => {
                                            setSearchPatient(false);
                                            localStorage.setItem("setSearchPatient", false)
                                            navigate(`${meetlink}`);
                                        })
                                        .catch(err => {
                                            console.log(err)
                                        })
                                        }}
                                    >Connect now <FaVideo /></button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Modal>
            <Modal
            open={joinmeet}
            onClose={() => {
                setJoinmeet(false);
                setIsConnecting(false);
                setMessage(false);
            setDoctorMail("");
            setDoctorName("");
            setJoinlink("");
            }}
            >
                <div id="meet-modal">
                <div className="close_btn_div">
                    <IoMdClose onClick={() => {
                    setJoinmeet(false);
                    setIsConnecting(false);
                    setMessage(false);
                setDoctorMail("");
                setDoctorName("");
                setJoinlink("");
                    }} />
                </div>
                <div className="meet-details">
                    {message && <div className="not-available-note">Oops! {doctorname} is currently in another meet, you can wait a few minutes or else try againg. </div>}
                </div>
                    {
                isConnecting ? (
                <div className="instant-meet-div">
                    <div className="loader">
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    </div>
                    <div>Connecting...</div>
                </div>
                ) : (
                <div className="instant-meet-div">
                    <button onClick={() => {
                    setIsConnecting(true);
                    handlemeet();
                    }}>Connect <FaVideo /></button>
                </div>
                )
            }
            </div>
            </Modal>
            <Modal
                open={availablemodal}
                onClose={() => {
                    setAvailablemodal(false);
                }}
            >
                <div id="available-modal">
                    <div className="close_btn_div">
                        <IoMdClose onClick={() => {
                        setAvailablemodal(false);
                        }} />
                    </div>
                    <div className="available-details">
                        <div className="note" onClick={()=>iamavailable()}>Yes, I am available!</div>
                        <div className="note" onClick={()=>iamnotavailable()}>No, I am not available!</div>
                    </div>
                </div>


            </Modal>

        </>
    );
};

export default Home;