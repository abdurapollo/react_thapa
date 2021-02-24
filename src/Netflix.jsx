import React from 'react'
import Card from './Cards'
import './card.css'
import Sdata from './Sdata'

const Netflix = () =>{
    return (
     <>   
    <h1 className="heading_style">List of top 5 Netflix App in 2020 😄 ❤️ 😄</h1>
    <Card 
       imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
       title="A Netflix Original Series"
       sname={Sdata[0].sname}
       link="https://www.netflix.com/in/title/80100172"
    />
    <Card 
       imgsrc={Sdata[1].imgscr}
       title="A Netflix Original Series"
       sname="Extra Curricular"
       link="https://www.netflix.com/in/title/80990668"
    />
    <Card 
       imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
       title="A Netflix Original Series"
       sname="Stranger Things"
       link={Sdata[2].links}
    />
    </>
    )
}
export default Netflix;