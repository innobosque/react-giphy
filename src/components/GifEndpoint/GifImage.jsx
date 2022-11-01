import React from 'react';
import Proptypes from 'prop-types';

export const GifImage = ({alt,src}) => {
  return (
    <img className="w-full h-full object-cover" src={src} alt={alt} />
  )
}

GifImage.propTypes = {
    alt: Proptypes.string,
    src: Proptypes.string.isRequired
}

GifImage.defaultProps = {
    alt: ''
}
