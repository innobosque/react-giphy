import { useState } from 'react';
import PropTypes from 'prop-types';
/**
 * 
 * @param {function} Función de comunicación (emit) donde se pasa la información del control input al padre 
 * @returns Formulario con el control de tipo input
 */
export const AddGif = ({ onNewGif }) => {

    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newValue = value.trim();
        if (newValue.length < 1) return;
        onNewGif(newValue);
        setValue('');
    }

    const handleChange = ({ target }) => {
        setValue(target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search"
                onChange={handleChange}
                placeholder="🍳"
                value={value} />
        </form>
    );
}

AddGif.propTypes = {
    value: PropTypes.string
}