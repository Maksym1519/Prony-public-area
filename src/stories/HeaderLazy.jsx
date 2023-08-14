// src/stories/HeaderLazy.stories.js
import React from 'react';
import HeaderLazy from '../путь_к_вашему_компоненту/HeaderLazy';

export default {
  title: 'Components/HeaderLazy',
  component: HeaderLazy,
};

export const Default = () => <HeaderLazy text="Boards" color={{ color: '#272557' }} />;
