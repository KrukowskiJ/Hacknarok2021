import styled from "styled-components"
import React from "react"
import Slider from "react-slick";
import TipsCard from '../elements/TipsCard'
import NextArrow from '../elements/NextArrow'
import PrevArrow from '../elements/PrevArrow'
export default()=>{

    const Tips=[
        {
            title: "ZADBAJ O USTAWIENIE EKRANU:",
            tips:[
                "Nie stawiaj monitora naprzeciw okna, ani na jego tle",
                "Monitor powinien stać bokiem do okna, nie bliżej niż 1 metr",
                "Jeżeli masz duże nasłonecznienie pomieszczenia stosuj żaluzje",
                "Tło za monitorem nie powinno być ani za jasne ani nie za ciemne (powieś plakat)"
            ]
        },
        {
            title: "ZADBAJ O USTAWIENIE EKRANU:",
            tips:[
                "Nie stawiaj monitora naprzeciw okna, ani na jego tle",
                "Monitor powinien stać bokiem do okna, nie bliżej niż 1 metr",
                "Jeżeli masz duże nasłonecznienie pomieszczenia stosuj żaluzje",
                "Tło za monitorem nie powinno być ani za jasne ani nie za ciemne (powieś plakat)"
            ]
        },
        {
            title: "ZADBAJ O USTAWIENIE EKRANU:",
            tips:[
                "Nie stawiaj monitora naprzeciw okna, ani na jego tle",
                "Monitor powinien stać bokiem do okna, nie bliżej niż 1 metr",
                "Jeżeli masz duże nasłonecznienie pomieszczenia stosuj żaluzje",
                "Tło za monitorem nie powinno być ani za jasne ani nie za ciemne (powieś plakat)"
            ]
        },
        {
            title: "ZADBAJ O USTAWIENIE EKRANU:",
            tips:[
                "Nie stawiaj monitora naprzeciw okna, ani na jego tle",
                "Monitor powinien stać bokiem do okna, nie bliżej niż 1 metr",
                "Jeżeli masz duże nasłonecznienie pomieszczenia stosuj żaluzje",
                "Tło za monitorem nie powinno być ani za jasne ani nie za ciemne (powieś plakat)"
            ]
        },
    ]

    const CaruselBox = styled.div`
        margin:40px;
    `
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,

      };

    return(
        <CaruselBox>
            <Slider {...settings}>
                {
                    Tips.map(object=>{
                        return <TipsCard text = {object.tips}/>
                    })
                }
            </Slider>
        </CaruselBox>
    );
}