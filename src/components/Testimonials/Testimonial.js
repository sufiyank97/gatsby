import React from 'react'
import Slider from "react-slick";
const testimonials = [
    {
        stars: 5,
        quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`,
        name: '1'
    },
    {
        stars: 5,
        quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`,
        name: '2'
    },
    {
        stars: 5,
        quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`,
        name: '3'
    },
    {
        stars: 5,
        quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`,
        name: '4'
    },
    {
        stars: 5,
        quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`,
        name: '5'
    },
    {
        stars: 5,
        quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`,
        name: 'Sean Parks'
    },
]
const Testimonial = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        className: 'slides'
    };
    return (
        <main className="main">
            <section className="block-testimonials">
                <h2 className="h1">True Love <span className="text-pink">Stories</span></h2>
                <Slider {...settings}>
                    {
                        testimonials.map((t1, i) => {
                            var array = [...Array(t1.stars).keys()]
                            return (
                                <div className="slide" key={i}>
                                    <div className="card-holder">
                                        <ul className="list-ratings">
                                            {
                                                array.map(a1 => {
                                                    return (
                                                        <li className="active" key={a1}><i className="icon icon-star"></i></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <blockquote>
                                            <q>{t1.quote}</q>
                                            <cite>- {t1.name}</cite>
                                        </blockquote>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
                <a href="#" className="btn">Tell Us Your Story</a>
            </section>
        </main>
    )
}

export default Testimonial
