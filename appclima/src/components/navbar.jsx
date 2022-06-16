import React,{useState} from 'react'
import "./navbar.scss"
import {AiOutlineMenu} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"




const Navbar = () =>{

    const[color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 10){
            setColor(true)
        } else{
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor)

    const[click,setClick] = useState(false)
    const burguer = () =>{
        setClick(!click)
    }


  return (
    <div className={color ? "principalblack" : "principal"} id="navbar">
        <div className='logo'><a href="/">WeatherPool</a> 
        </div>
        <div className={click ? "menuabierto" : "menu" } id='menu'><AiOutlineMenu id="hamburguesa" onClick={burguer}/>
                <div className="cuadradito" >
                    <div className='primerdiv' onClick={burguer}><span>x</span></div>
                    <div className='burguer-list'>
                        <div className='linealink'><a href="https://github.com/josessoria"><BsGithub className='iconn'/></a></div>
                        <div className='linealink'><a href="https://github.com/josessoria">GitHub</a></div>
                        <div className='linealink'><a href="https://www.linkedin.com/in/josessoria/"><AiFillLinkedin className='iconn'/></a> </div>
                        <div className='linealink'><a href="https://www.linkedin.com/in/josessoria/">Linkedin</a></div>

                    </div>
                </div>
        </div>
    </div>
    
  )
}

export default Navbar