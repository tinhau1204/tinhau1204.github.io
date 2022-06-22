import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass,setLetterClass] = useState('text-animate')
    const refForm =useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
            },3000) 
        
    },[])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'gmail',
            'TemplateID',
            refForm.current,
            'token',
        )
        .then(
            () => {
                alert('Message succesfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again!')
            }
        )
            

        }
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','m','e']}
                    idx={15}/>
                </h1>

                <p>
                    I am interested in freelance opportunities - especially abitious or
                    large projects. However, if you have others requests or questions,
                    don't hesitate to contact me using below form either.
                </p>

                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Hau Tin,
                <br/>
                VietNam,
                <br/>
                3 thang 2 1287/21K, 22000 <br/>
                Ho Chi Minh City<br/>
                <span>tinhau1204@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[10.75834, 106.65075]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[10.75834, 106.65075]}>
                        <Popup>Tin lives here, come over for a cup of coffee :v</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Contact