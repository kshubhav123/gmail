import React from 'react';
import { AiFillSetting, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";
import { GrApps } from "react-icons/gr";
import "../style/header.css";


import   logo from "../img/logo.png"

function Header() {
    return (

<>

<div className="header">

<div className="header_left">
<AiOutlineMenu/>
<img src={logo} alt="" />
</div>


<div className="header_middle">
    <div className="header_middle_search">
<AiOutlineSearch/>
<input placeholder="Search Mail"/>
<MdExpandMore/>
    </div>
</div>

<div className="header_right">
      
<BiHelpCircle className="header_options" />
<AiFillSetting className="header_options"/>
<GrApps className="header_options"/>
    
</div>


</div>



</>

        )
}

export default Header
