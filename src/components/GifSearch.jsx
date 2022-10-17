import { useState } from 'react';
import PropTypes from 'prop-types';
/**
 * 
 * @param {function} Función de comunicación (emit) donde se pasa la información del control input al padre 
 * @returns Formulario con el control de tipo input
 */
export const GifSearch = ({ onNewGif }) => {

    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newValue = value.trim();

        if (!!!newValue.length) return setValue('');

        onNewGif(newValue);
        setValue('');
    }

    const handleChange = ({ target }) => {
        setValue(target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className='w-full mt-8 py-1 px-2 outline-none bg-white rounded-md placeholder-black-400' type="search"
                onChange={handleChange}
                placeholder="Buscar GIF"
                value={value} />   
        </form>
    );
}

GifSearch.propTypes = {
    value: PropTypes.string
}