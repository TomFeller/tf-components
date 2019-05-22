import React from 'react';

export const Paragraph = (props) => {
  return <p style={props.style}>{props.children}</p>;
};