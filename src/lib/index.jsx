import './index.css'
import PropTypes from 'prop-types'
import React from 'react'


export default function Selection({ title, name, elements, onChange }) {
    return (
        <select name={name} onChange={onChange} aria-label={name} className="select-plug" data-testid="test-select">
            <option>{title}</option>
            {elements.map((element, index) => (
                <option value={element} key={`${element}-${index}`}>{element}</option>
            ))}
        </select>
    )
}

Selection.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    elements: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
    ])).isRequired,
    onChange: PropTypes.func
}

Selection.defaultProps = {
    title: 'Choose an option',
    name: 'selected_value',
}