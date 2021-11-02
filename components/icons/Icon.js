import React from 'react';
import Github from './Github';
import Instagram from './Instagram';
import Linkedin from './Linkedin';

const Icon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <Github />;
    case 'Instagram':
      return <Instagram />;
    case 'Linkedin':
      return <Linkedin />;
    default:
      return '';
  }
};

export default Icon;