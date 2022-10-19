import PropTypes from 'prop-types';
export const LoadingSpinner = ({widthHeight}) => {
  return (   
    <svg className="svg-spinner block m-auto" xmlns="http://www.w3.org/2000/svg" width={widthHeight} height={widthHeight} viewBox="0 0 48 48">
    <circle cx="24" cy="4" r="4" fill="#fff"/>
    <circle cx="12.19" cy="7.86" r="3.7" fill="#0ffbf2"/>
    <circle cx="5.02" cy="17.68" r="3.4" fill="#0ef7e4"/>
    <circle cx="5.02" cy="30.32" r="3.1" fill="#0ef3d7"/>
    <circle cx="12.19" cy="40.14" r="2.8" fill="#0eefc9"/>
    <circle cx="24" cy="44" r="2.5" fill="#0eebbc"/>
    <circle cx="35.81" cy="40.14" r="2.2" fill="#0de7af"/>
    <circle cx="42.98" cy="30.32" r="1.9" fill="#0de3a1"/>
    <circle cx="42.98" cy="17.68" r="1.6" fill="#0ddf94"/>
    <circle cx="35.81" cy="7.86" r="1.3" fill="#0cdb86"/>
  </svg>
  )
}

LoadingSpinner.propTypes = {
    widthHeight: PropTypes.string 
}

LoadingSpinner.defaultProps = {
    widthHeight: "24" 
}