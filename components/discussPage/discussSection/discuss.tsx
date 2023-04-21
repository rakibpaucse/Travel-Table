import React,{useState} from 'react'
import Image from 'next/image'
import Style from './discuss.module.scss'
import TravelImage from 'assets/travelArts/rb/1.png'
import PlaneImage from 'assets/gif/p1.gif'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Discuss = () => { 

    const defaultFormData = {name:'', email:'',phnNo: '' , message: ''}

    const [formData, setFormData] = useState(defaultFormData)
    const [showModal, setShowModal] = useState(false)
    const [showGif, setShowGif] = useState(true)

    const handleFormData = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setShowModal(true)
        setShowGif(true)

        var data = new FormData(e.currentTarget)
        let formObject = Object.fromEntries(data.entries())

        setFormData(structuredClone(formObject))
        e.currentTarget.reset()
    }

    const handleOkBtn = () => {
        setFormData(defaultFormData)
        setShowModal(false)
        setShowGif(true)
    }

    const handleGif = () => {
        let timeOut = setTimeout(() => { setShowGif(false) }, 1500)
        return () => clearTimeout(timeOut)
    }

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        arrows : true,
        dots:true,

        responsive : [{
            breakpoint : 1400,
            settings :{
                slidesToShow: 2,
            }
        },
        {
            breakpoint : 600,
            settings :{
                slidesToShow: 1,
                dots:false,
                centerMode : false
            }
        }],
      };

    const feedBackDetails = [
        {
            id:1,
            cusName:'Khatri Agarwal',
            image:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8YXZhdGFyfHx8fHx8MTY4MTQwNzk5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
            comment:'As a traveler I need to travel frequently. Informations I get from this website is a life saver for me. Thanks for this.'
        },
        {
            id:2,
            cusName:'Nguyen Louis',
            image:'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8YXZhdGFyfHx8fHx8MTY4MTQwODA0MQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
            comment:'I wanted to go abroad for heigher study, so I need to get information about many city. Then this website help me a lot.'
        },
        {
            id:3,
            cusName:'Aamina Etenesh',
            image:'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8YXZhdGFyfHx8fHx8MTY4MTQwODE3OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
            comment:'I was looking for a city on which I can move permanently. Then I research from this website and it works like a charm.'
        },
        {
            id:4,
            cusName:'Alis Breman',
            image:'https://images.unsplash.com/photo-1632922267756-9b71242b1592?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8YXZhdGFyfHx8fHx8MTY4MTQwODE0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
            comment:'Once I will go for a world tour. From this website I am taking notes and planing for my world tour. Thanks Team Travel Table.'
        },
        {
            id:5,
            cusName:'Brad Johnson',
            image:'https://images.unsplash.com/photo-1599566147214-ce487862ea4f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8YXZhdGFyfHx8fHx8MTY4MTQwODA2Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
            comment:'I am a economy professor. I gether a lot of information from here. Those are useful for my research about global economy.'
        },
    ]

    return (
        <div className={Style.sectionHolder}>

            <div className={Style.feedBackHolder}>
                <div className= {`${Style.title} ${Style.sampleTitle}`} > What People Think About Us. </div>

                <Slider {...settings}>
                    {
                        feedBackDetails.map( feedBack => 
                            <div className={Style.slide} key={feedBack.id} >
                                <p> {feedBack.cusName} </p>
                                <img src={feedBack.image} alt="" />
                                <p> {feedBack.comment} </p>
                            </div>
                            )
                    }
                </Slider>
            </div>

            <div className={Style.testimonialHolder}>

            </div>

            <div className={Style.testimonialHolder}>
                    <div className= {`${Style.title} ${Style.sampleTitle}`} > What People Think About Us. </div>
                    
                    <div className={Style.imgHolder} >
                        <div >
                            <Image className={Style.travelImage} src={TravelImage} alt='Image of World Travel' />
                        </div>
                        <div className= {Style.formHolder}>
                            <div className={Style.titleHolder}>
                                <h1>Give A Thought...</h1>
                            </div>

                            <form onSubmit={handleFormData} className= {`${Style.form} ${Style.inputHolder}`}>
                                <div className={Style.fullLength}>
                                    <div className= {`${Style.wide} ${Style.styledInput}`} >
                                        <input name="name" className={Style.input} type="text" required />
                                        <label>Name</label> 
                                    </div>
                                </div>
                                <div className={Style.halfLength}>
                                    <div className={Style.styledInput}>
                                        <input name="email" className={Style.input} type="text" required />
                                        <label>Email</label> 
                                    </div>
                                    <div className={Style.styledInput} >
                                        <input name="phnNo" className={Style.input} type="text" required />
                                        <label>Phone Number</label> 
                                    </div>
                                </div>
                                
                                
                                <div className={Style.fullLength}>
                                    <div className={`${Style.wide} ${Style.styledInput}`} >
                                        <textarea name="message" className={Style.textarea} required defaultValue={""} />
                                        <label>Message</label>
                                    </div>
                                </div>

                                <div className={Style.btnHolder}>
                                    <button type='submit' className={Style.submtBtn} > Send Message</button>
                                </div>
                        

                                {
                                    showModal && 
                                <div className={Style.detailsModal} >
                                    <div className={Style.detailsModalTitle}>
                                        <h1> { `Your Thought is ${showGif ? "Saving..." : "Saved."}` } </h1>
                                    </div>
                                    <div className={Style.detailsModalContent}>
                                    
                                    <div>
                                    {handleGif()}
                                    {
                                        showGif ? 
                                            <Image style={{width:'100%', height:320}} src={PlaneImage} alt='Travel' /> : 
                                            <p>
                                                We care about your thoughts. We will reserve this and try to work on this. 
                                            </p>
                                    }  
                                    </div>
                                        
                                    </div>
                                    <button className={Style.okeyBtn} onClick={handleOkBtn} > { showGif ? 'LOADING...' : 'OKEY...' } </button>

                                </div>
                                }

                            </form>
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default Discuss
