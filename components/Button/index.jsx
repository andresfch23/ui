import Icon from '../Icon';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const ButtonComponent = ({
    type = "", 
    color = "primary",
    disabled = false,
    onClick = () => {},
    textBtn = '',
    className = ''
}) => {
    const BUTTON_TYPES = {
        sign: {
            text: 'Sign Up'
        },
        login: {
            text: 'Login',
            icon: 'login'
        }
    };

    const img = BUTTON_TYPES[type]?.icon;
    const text = BUTTON_TYPES[type]?.text || textBtn;

    return (
        <Button
            disabled={disabled}
            classes={{ label: 'button-label' }}
            className={`
                button button__${color}
                ${img ? 'button__withIcon' : ''}
                ${disabled ? 'button__hidden' : ''}
                ${className}
            `}
            startIcon={img ? <Icon name={img} /> : null }
            onClick={onClick}
        >
            {text}
        </Button>
    );
};

ButtonComponent.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    textBtn: PropTypes.string,
    className: PropTypes.string
};

export default ButtonComponent;