import Proptypes from 'prop-types';
export const ImgItem = ({url,title}) => (
    <img className="w-full h-full object-cover" src={url} alt={title} />
);

ImgItem.propTypes = {
    url: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
}

ImgItem.defaultProps = {
    title: ''
}
