// src/stories/HeaderLazy.stories.js
import React from "react";
import { MemoryRouter } from "react-router-dom";
import MyHeaderLogged from "../components/HeaderLogged";
import Icon2 from "../images/header-icon2.svg";
import Ava1 from '../images/ava1.webp';
import Ava2 from '../images/ava2.webp';
import '../fonts.scss'


export default {
  title: "Components/MyHeaderLogged",
  component: MyHeaderLogged,
  decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)] //Wrapping the story inside the router
};

const Template = args => <MyHeaderLogged {...args}/>


export const HeaderLoginUser1 = Template.bind({})
HeaderLoginUser1.args = {
  name: "Lucy Lavender",
  img: Ava1
 
}
export const HeaderLoginUser2 = Template.bind({})
HeaderLoginUser2.args = {
  name: "John Doe",
  img: Ava2
}
