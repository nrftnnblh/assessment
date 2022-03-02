import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'

export const Nav = styled.nav`
    background-image: linear-gradient(to bottom right, #141414, #070707);
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding-right: 98px;
    padding-left: 170px;
    height: 100%;
    cursor: pointer;
    margin-left: -240px;
    
    &:hover {
        color: #ffff00;
        border-bottom: 2px solid;
    }
`
export const Bars = styled(FaSearch)`
    display: flex;
    color: #fff;
    float: right;
    margin-top: 25px;
    margin-right: -20px;

    @media screen and (max-width: 760px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1rem;
        cursor: pointer;
    }
`

export const Circle = styled.div`
    background: gray;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    display: inline-block;
    margin-top: 20px;
    margin-right: -120px;
    padding-right: -100px;
`
export const NavMenu = styled.div`
    align-items: center;
    display: flex;
    padding: 0 5px;
    
    @media screen and (max-width: 760px) {
        display: flex;
        font-size: 0.9rem;
        padding-right: 200px;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: -200px;

    @media screen and (mac-width: 760px){
        display: flex;
    }
`
export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256cel;
    padding: 10px 100px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    float: right;
 
`