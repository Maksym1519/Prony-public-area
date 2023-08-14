// src/stories/HeaderLazy.stories.js
import React from "react";
import { MemoryRouter } from "react-router-dom";
import MyHeader from "../components/Header";
import Icon2 from "../images/header-icon2.svg";
import '../fonts.scss'


export default {
  title: "Components/MyHeader",
  component: MyHeader,
  decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)] //Wrapping the story inside the router
};

const Template = args => <MyHeader {...args}/>


export const HeaderText = Template.bind({})
HeaderText.args = {
  color: '',
  text: 'Board'
}
export const HeaderColored = Template.bind({})
HeaderColored.args = {
  color: "#1565C0",
  text: 'Board title 1',
 
  }
