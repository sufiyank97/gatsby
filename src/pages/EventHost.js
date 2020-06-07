import React from 'react'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import About from "../components/About/About"
import Testimonial from '../components/Testimonials/Testimonial'
import { EventsHostDirectory, VirtualEvents } from "../components/Events/index"
const EventHost = () => {
    return (
        <div id="wrapper">

            <EventsHostDirectory />

            <Testimonial />
            <Footer />
        </div>
    )
}

export default EventHost
