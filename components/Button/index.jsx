import Icon from '../Icon';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { BUTTON_TYPES } from '../../common/constants';

const ButtonComponent = ({
    typeAction = "", 
    color = "primary",
    disabled = false,
    onClick = () => {},
    textBtn = '',
    className = '',
    ...rest
}) => {

    const img = BUTTON_TYPES[typeAction]?.icon;
    const text = BUTTON_TYPES[typeAction]?.text || textBtn;

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
            {...rest}
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
    className: PropTypes.string,
    formId: PropTypes.string,
    typeAction: PropTypes.string
};

export default ButtonComponent;