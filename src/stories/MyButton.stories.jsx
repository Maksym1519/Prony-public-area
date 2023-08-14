import React from "react";
import MyButton from "../components/Button";



export default {
  title: "Components/MyButton",
  component: MyButton,
};

const Template = args => <MyButton {...args}/>


export const ButtonSmall = Template.bind({})
ButtonSmall.args = {
  width: "182px",
  text: "Submit"
}
export const ButtonLarge = Template.bind({})
ButtonLarge.args = {
  width: "199px",
  text: "To home page"
}
