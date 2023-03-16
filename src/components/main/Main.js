import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../headers/Hearder"
import Items from "../items/Items"
import './main.css'
import heroImage from './gta.jpg'

const Main = () => {
    const [bestSeller, setBestSeller] = useState([])
    const [oldSchool, setOldSchool] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:1337/api/best-sellers?populate=*').then((bestSeller)=>{
            setBestSeller(bestSeller.data.data)
            // console.log(bestSeller.data.data)
        }).catch(()=>{

        }).finally(()=>{

        })
        axios.get('http://localhost:1337/api/old-schools?populate=*').then((oldSchool)=>{
            setOldSchool(oldSchool.data.data)
        }).catch(()=>{

        }).finally(()=>{

        })
    },[])

    return <>
        <Header />
        <section className="heroImage">
            <img src={heroImage} alt="heroimage"/>
        </section>
        <section style={{paddingLeft:'20%'}}>
            {bestSeller.map((item,key)=>{
                return <Items 
                    item={item.attributes}
                    // item={item.attributes.image}
                    key={key}
                />
            })}
            {oldSchool.map((item,key)=>{
                return <Items
                    item={item.attributes}
                    key={key}
                />
            })}
        </section>
    </>
}

export default Main