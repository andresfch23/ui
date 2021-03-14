import Image from 'next/image';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const ButtonComponent = ({ type = "",  color = "primary", disabled = false }) => {
    const BUTTON_TYPES = {
        sign: {
            text: 'Sign Up'
        },
        login: {
            text: 'Login',
            icon: '/images/login.svg'
        }
    };

    const img = BUTTON_TYPES[type].icon;
    const text = BUTTON_TYPES[type].text;

    return (
        <Button
            disabled={disabled}
            classes={{ label: 'button-label' }}
            className={`button button__${color} ${img ? 'button__withIcon' : ''} ${disabled ? 'button__hidden' : ''}`}
        >
            {img &&
                <div className="button__icon">
                    <Image
                        src={img}
                        alt={text}
                        layout="fill"
                    />
                </div>
            }
            {text}
        </Button>
    );
};

ButtonComponent.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool
};

export default ButtonComponent;