import { useState, useRef, useEffect } from 'react';
import ButtonMaterial from '@material-ui/core/Button';
import Button from '../Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CircularProgress from '@material-ui/core/CircularProgress';
import EmailIcon from '@material-ui/icons/Email';
import CheckIcon from '@material-ui/icons/Check';
import Fab from '@material-ui/core/Fab';
import ReCAPTCHA from 'react-google-recaptcha';
import Icon from '../Icon';
import PropTypes from 'prop-types';
import { PUBLIC_RECAPTCHA_SITE_KEY } from '../../app.config';
import {
    INITIAL_FORM_VALUES,
    INITIAL_ERROR_FORM_VALUES,
    FIRST_NAME,
    LAST_NAME,
    EMAIL,
    MESSAGE,
    CAPTCHA
} from '../../common/constants';

const ModalForm = ({ firstName = '', lastName = '' }) => {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState(INITIAL_FORM_VALUES);
    const [errors, setErrors] = useState(INITIAL_ERROR_FORM_VALUES);
    const [isLoading, setIsloading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formView, setFormView] = useState(false);
    const fullName = `${firstName} ${lastName}`;
    const timer = useRef();
    const message = success ? 'The message was sent succesfully' : `Sending message to ${firstName} ...`;
    const iconAnimation = success ? <CheckIcon /> : <EmailIcon />;
    
    useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        resetValues();
    };

    const handleChange = (prop) => (event) => {
        const value = prop !== CAPTCHA ? event.target.value : event;
        setValues({ ...values, [prop]: value });
    };

    const handleChangeWithBlur = (prop) => (event) => {
        const value = prop !== CAPTCHA ? event.target.value : event;

        setErrors({ ...errors, [prop]: value ? false : true });
        setValues({ ...values, [prop]: value });
    };

    const handleError = (prop) => (event) => {
        const value = event.target.value ? false : true;
        setErrors({ ...errors, [prop]: value });
    };

    const resetValues = () => {
        setValues(INITIAL_FORM_VALUES);
        setErrors(INITIAL_ERROR_FORM_VALUES);
        setSuccess(false);
        setFormView(false);
    };

    const handleSubmit = (e) => {
        let areAllFilled = true;
        let newErrors = {};
        e.preventDefault();

        for (let value in values) {
            if (!values[value]) {
                newErrors = { ...newErrors, [value]: true };
                areAllFilled = false;
            }
        }

        if (areAllFilled && !isLoading) {
            setFormView(true);
            setIsloading(true);
            timer.current = window.setTimeout(() => {
                setSuccess(true);
                setIsloading(false);
            }, 3000);
        } else {
            setErrors(newErrors);
        }
    };


    return (
        <div className='modal-form'>
            <ButtonMaterial
                classes={{ label: 'resume-sidebar__button-label' }}
                className='resume-sidebar__button'
                startIcon={<Icon name='people-connected' />}
                onClick={handleClickOpen}
            >
                <span className="text">Connect</span>
            </ButtonMaterial>

            <Dialog
                open={open}
                PaperProps={{ classes: { root: 'modal-form__container' } }}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title" className='modal-form__title'>
                    Contact
                    <span className='modal-form__name'>{fullName}</span>
                </DialogTitle>
                <Icon name='x' onClick={handleClose} />
                <DialogContent className='modal-form__content'>
                    {!formView ? (
                        <form autoComplete="off" className="form" id="modal-form" onSubmit={handleSubmit}>
                            <TextField
                                variant="outlined"
                                id="name"
                                placeholder="Your first name"
                                type="text"
                                value={values.firstName}
                                onChange={handleChange(FIRST_NAME)}
                                onBlur={handleError(FIRST_NAME)}
                                InputProps={{
                                    endAdornment: (
                                        <Icon name="profile" />
                                    ),
                                    className: 'form__input'
                                }}
                                className="form__item form__item--firstname"
                                helperText={errors[FIRST_NAME] ? 'First name required' : ''}
                                error={errors[FIRST_NAME]}
                            />

                            <TextField
                                variant="outlined"
                                id="last-name"
                                placeholder="Your last name"
                                type="text"
                                value={values.lastName}
                                onChange={handleChange(LAST_NAME)}
                                onBlur={handleError(LAST_NAME)}
                                className="form__item form__item--lastname"
                                InputProps={{ className: 'form__input' }}
                                helperText={errors[LAST_NAME] ? 'Last name required' : ''}
                                error={errors[LAST_NAME]}
                            />

                            <TextField
                                variant="outlined"
                                id="email"
                                placeholder="Email address"
                                type= "email"
                                value={values.email}
                                onChange={handleChange(EMAIL)}
                                onBlur={handleError(EMAIL)}
                                fullWidth
                                className="form__item form__item--email"
                                InputProps={{ className: 'form__input' }}
                                helperText={errors[EMAIL] ? 'Email required' : ''}
                                error={errors[EMAIL]}
                            />

                            <div className="form__item-container">
                                <TextareaAutosize
                                    placeholder="Would you like to leave a message?"
                                    className="form__item form__item--textarea"
                                    onBlur={handleChangeWithBlur(MESSAGE)}
                                />
                                {errors[MESSAGE] && <p className="form__item-error">Leave a message</p>}
                            </div>

                            <div className="form__item form__item--recaptcha">
                                <ReCAPTCHA 
                                    sitekey={PUBLIC_RECAPTCHA_SITE_KEY}
                                    onChange={handleChangeWithBlur(CAPTCHA)}
                                    onExpired={handleChangeWithBlur(CAPTCHA)}
                                />
                                {errors[CAPTCHA] && <p className="form__item-error">Captcha required</p>}
                            </div>
                        </form>
                    ) : (
                        <div className="modal-form__message-container">
                            <div className="modal-form__animations">
                                <Fab
                                    aria-label="save"
                                    color="primary"
                                    className={`modal-form__animations-button ${success ? 'modal-form__animations-button--success' : ''}`}
                                >
                                    {iconAnimation}
                                </Fab>  
                                {isLoading && <CircularProgress size={68} className="modal-form__animations-progress" />}
                            </div>
                            <span className="modal-form__message">{message}</span>
                        </div>
                    )}
                </DialogContent>
                <DialogActions className='modal-form__footer'>
                    {!formView && 
                        <>
                            <Button
                                onClick={handleClose}
                                color="secondary"
                                textBtn='Cancel'
                                className='modal-form__button'
                            />
                            <Button
                                color="primary"
                                textBtn='Contact'
                                className='modal-form__button'
                                type="submit"
                                form="modal-form"
                            />
                        </>
                    }
                </DialogActions>
            </Dialog>
        </div>
    );
}

ModalForm.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string
}

export default ModalForm;