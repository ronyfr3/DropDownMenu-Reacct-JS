import React,{useState} from 'react'
import onClickOutside from 'react-onclickoutside'
import {Link} from 'react-router-dom'

function NavItem(props) {
    const [open,setIsOpen] = useState(false)

    const toggler =()=>setIsOpen(!open)
    NavItem.handleClickOutside = ()=>setIsOpen(false)
    return (
        <li className="nav_item">
        <Link to='#' className='icon_button' onClick={toggler}>
            {props.icon}
        </Link>
            {open && props.children}
        </li>
    )
}
const clickOutsideConfig ={handleClickOutside:()=>NavItem.handleClickOutside}

export default onClickOutside(NavItem,clickOutsideConfig)
