import PropTypes from 'prop-types';

const Icon = ({ name, className = '', onClick = () => {} }) => (
    <svg
        className={`icon icon-${name} ${className}`}
        onClick={onClick}
    >
        <use xlinkHref={`#icon-${name}`} />
    </svg>
);

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default Icon;