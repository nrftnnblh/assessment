import styled from 'styled-components'
import {BiRightArrow} from 'react-icons/bi'
import {BsEye} from 'react-icons/bs'
import {HiOutlineClock} from 'react-icons/hi'
import {FiArrowRight} from 'react-icons/fi'

export const Header = styled.h1`
    color: white;
    font-size: 20px;
    letter-spacing: 2px;

    @media screen and (max-width: 760px) {
        display: flex;
        font-size: 0.9rem;
    }
`
export const Desc = styled.p`
    font-size: 15px;
    font-weight: lighter;
    letter-spacing: 1px;

    @media screen and (max-width: 760px) {
        display: flex;
        font-size: 0.9rem;
        padding-top: 20px;
    }
`
export const Icon = styled.div`
    width: 200px;
    height: 200px;
    border: 4px solid yellow;
    border-top: 1px solid grey;
    border-right: 1px solid grey;
    border-radius: 70%;
    z-index: 1;
    justify-content: center;
    display: flex;
    margin-bottom: 20px;

    @media screen and (max-width: 760px) {
        display: flex;
        font-size: 0.9rem;
        width: 200px;
        height: 200px;
    }
`

export const Circle = styled(BiRightArrow)`
    width: 90px;
    height: 90px;
    color: black;
    padding: 25px;
    display: flex;
    border-radius: 70%;
    background-color: yellow;
    margin: auto;
`
export const MList = styled.div`
    background-image: linear-gradient(to bottom right, #141414, #070707);
    display: flex;

    @media screen and (max-width: 760px) {
        font-size: 0.9rem;
        padding-top: 20px;
        padding-right: 20px;
    }
`
export const Title = styled.div`
    color: white;
    font-size: 50px;
    margin: 100px;
    text-align: center;
    float: left;

    @media screen and (max-width: 760px) {
        font-size: 2rem;
        padding-top: 5px;
        float: left;
        margin-left: 20px;
        margin-top: -20px;

    }
`
export const Container = styled.span`
    color: black;
    font-size: 40px;
    padding: 0px;
    display: inline-block;
    margin: 40px;
    align-items: center;
    
    @media screen and (max-width: 760px) {
        font-size: 0.9rem;
        padding-top: 15px;
        float: right;
        margin-left: 20px;
        margin-right: -400px;
    }
`
export const ListBig = styled.p`
    width: 820px;
    height:400px;
    background-color: white;
    padding: 20px;
    padding-top: 200px;
    color: white;
    background-image: linear-gradient(to bottom right, #141414, #070707);

    @media screen and (max-width: 760px) {
        font-size: 0.9rem;
        float: left;
        width: 410px;
        height: 200px;
        padding: 10px;
        padding-top: 50px;

    }
`
export const Genre = styled.p`
    font-size: 15px;
    margin-top: -180px;
    margin-bottom: 232px;
    border-radius: 40px;
    background: yellow;
    width: 15%;
    padding: 10px 30px;
    color: black;
    font-weight: bold;
`
export const GenreDif = styled.p`
font-size: 15px;
margin-top: -270px;
margin-bottom: 235px;
border-radius: 40px;
background: yellow;
width: 35%;
padding: 10px 35px;
color: black;
font-weight: bold;
`
export const List = styled.span`
    padding: 20px;
    width: 400px;
    height: 400px;
    float: left;
    background-color: white;
    margin-right: 20px;
    margin-top: 20px;
    padding-top: 295px;
    color: white;
    background-image: linear-gradient(to bottom right, #141414, #070707);
`
export const Middle = styled.span`
padding: 20px;
width: 400px;
height: 400px;
float: right;
background-color: white;
margin-right: 30px;
margin-top: -400px;
padding-top: 290px;
color: white;
background-image: linear-gradient(to bottom right, #141414, #070707);
`

export const VMBtn = styled.p`
    font-size: 15px;
    color: yellow;
    float: right;
    margin-right: -800px;
    margin-top: -40px;
    z-index: 1;

    @media screen and (max-width: 760px) {
        font-size: 0.9rem;
        padding-top: 15px;
        float: right;
        margin-left: 20px;
        margin-right: -400px;
    }
`
export const View = styled.span`
    font-size: 10px;
    padding: 20px;
    display: inline;
    margin: 10px;
`
export const Time = styled.span`
    font-size: 10px;
    padding: 10px;
    display: inline;
    margin: 10px;
`
export const EyeIc = styled(HiOutlineClock)`
    color: grey;
    font-size: 20px;
    margin: -5px;
    margin-right: 10px;
`
export const Con = styled(BsEye)`
color: #808080;
font-size: 20px;
margin: -5px;
margin-right: 5px;
`
export const Info = styled.div`
    display: inline-block;
`
export const InfoOne = styled.p`
    background-color: #141414;
    width: 35%;
    height: 500px;
    padding: 50px;
    color: white;

    @media screen and (max-width: 760px) {
        font-size: 0.9rem;
    }
`
export const News = styled.p`

`
export const Form = styled.div`
    display: flex;
    position: relative;
    height: 53px;
    margin-top: 1em;
`
export const EmailInput = styled.input`
    outline: none;
    border: none;
    background-color: #464646;
    padding-left: 1.5em;
    border-radius: 10px;
    font-size: 15px;
    color: white;
    height: 100%;
    width: 150%;

    &::placeholder {
        color: white;
    }

    @media screen and (max-width: 760px) {
        font-size: 10px;
        width: 120%;
        height: 80%;
    }
`
export const IconSub = styled(FiArrowRight)`
    font-size: 35px;
    color: black;
    position: absolute;
    right: 80px;
    margin-top: -45px;
    background-color: yellow;
    cursor: pointer;
    border-radius: 5px;
    position: absolute;

    @media screen and (max-width: 760px) {
        font-size: 25px;
        margin-top: -34px;
        right: 0;
    }
`
export const Details = styled.div`
    background-color: #494848;
    float: right;
    width: 65%;
    height: 500px;
    margin-top: -500px;
`

export const AddD = styled.p`
    font-size: 15px;
    color: white;
    font-weight: 50;
    display: inline-block;
    padding: 60px;
    text-align: center;
`