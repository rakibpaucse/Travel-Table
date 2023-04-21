import React,{useState} from 'react'
import Image from 'next/image'
import Style from './sugg.module.scss'
import PlaneImage from 'assets/gif/p1.gif'

const SuggestionSection = () => {

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

    return (
        <div className={Style.container} >
            <div className={Style.title} > Suggest A Place </div>

            <div className={Style.contentHolder} >
                <strong>We need your help to make our database more resourceful </strong>

                <ol className={Style.alternatingColors}>
                    <li className={Style.li}>
                            Help me to create a more complete list of places! 
                    </li>
                    <li className={Style.li}>
                            You can suggest a city, neighbourhood, island, or province  and ill try to 
                            get the data for you and add it to the site. 😅 
                    </li>
                    <li className={Style.li}>
                            Please describe the place with accuracy as sometimes there are 2 places 
                            with the same name.
                    </li>
                    <li className={Style.li}>
                            Bonus points for providing longitude and latitude.
                    </li>
                </ol>
            </div>

            <div className={Style.container} >

                <form onSubmit={handleFormData} className= {`${Style.form} ${Style.inputHolder}`}>

                    <div className={Style.titleHolder}>
                        <h1>Give Us Some Resources...</h1>
                    </div>

                    <div className={Style.halfLength}>
                        <div className= {`${Style.wide} ${Style.styledInput}`} >
                            <input name="city" className={Style.input} type="text" required />
                            <label>City Name</label> 
                        </div>
                        <div className= {`${Style.wide} ${Style.styledInput}`} >
                            <input name="country" className={Style.input} type="text" required />
                            <label>Country Name</label> 
                        </div>
                    </div>
                    <div className={Style.halfLength}>
                        <div className={Style.styledInput}>
                            <input name="link" className={Style.input} type="text" required />
                            <label>Image Link</label> 
                        </div>
                        <div className={Style.styledInput} >
                            <input name="providence" className={Style.input} type="text" required />
                            <label>Providence Name / ZIP Code</label> 
                        </div>
                    </div>
                    
                    <div className={Style.fullLength}>
                        <div className={Style.styledInput}>
                            <input name="email" className={Style.input} type="text" required />
                            <label>Your Email</label> 
                        </div>
                    </div>
                    <div className={Style.fullLength}>
                        <div className={`${Style.wide} ${Style.styledInput}`} >
                            <textarea name="message" className={Style.textarea} required defaultValue={""} />
                            <label>Other Infos You Know</label>
                        </div>
                    </div>

                    <div className={Style.btnHolder}>
                        <button type='submit' className={Style.submtBtn} > Send Message</button>
                    </div>
            

                    {
                        showModal && 
                    <div className={Style.detailsModal} >
                        <div className={Style.detailsModalTitle}>
                            <h1> { `Your Data is ${showGif ? "Saving..." : "Saved."}` } </h1>
                        </div>
                        <div className={Style.detailsModalContent}>
                        
                        <div>
                        {handleGif()}
                        {
                            showGif ? 
                                <Image style={{width:'100%', height:320}} src={PlaneImage} alt='Travel' /> : 
                                <p>
                                    We got your datas. We will work on that and if it will publish, we will let you know. 
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
    )
}

export default SuggestionSection
