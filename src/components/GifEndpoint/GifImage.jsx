import React from 'react';
import Proptypes from 'prop-types';

export const GifImage = ({title,url}) => {
  return (
    <img className="w-full h-full object-cover" src={url} alt={title} />
  )
}

GifImage.propTypes = {
    title: Proptypes.string,
    url: Proptypes.string.isRequired
}

GifImage.defaultProps = {
    title: ''
}
