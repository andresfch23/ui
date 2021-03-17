import { useState, useRef } from 'react';
import ButtonMaterial from '@material-ui/core/Button';
import Button from '../Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ReCAPTCHA from 'react-google-recaptcha';
import { PUBLIC_RECAPTCHA_SITE_KEY } from '../../app.config';
import Icon from '../Icon';
import PropTypes from 'prop-types';

const ModalForm = ({ fullName = "" }) => {
    const [open, setOpen] = useState(false);
    const [captcha, setCaptcha] = useState(false);
    const reCaptchaRef = useRef();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        weightRange: '',
        showPassword: false,
    });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
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
                    <form noValidate autoComplete="off" className="form">
                        <TextField
                            variant="outlined"
                            autoFocus
                            id="name"
                            placeholder="Your first name"
                            type="text"
                            value={values.firstName}
                            onChange={handleChange('firstName')}
                            InputProps={{
                                endAdornment: (
                                    <Icon name="profile" />
                                ),
                                className: 'form__input'
                            }}
                            className="form__item form__item--firstname"
                        />

                        <TextField
                            variant="outlined"
                            id="last-name"
                            placeholder="Your last name"
                            type="text"
                            value={values.lastName}
                            onChange={handleChange('lastName')}
                            className="form__item form__item--lastname"
                            InputProps={{ className: 'form__input' }}
                        />

                        <TextField
                            variant="outlined"
                            id="email"
                            placeholder="Email address"
                            type= "email"
                            value={values.email}
                            onChange={handleChange('email')}
                            fullWidth
                            className="form__item form__item--email"
                            InputProps={{ className: 'form__input' }}
                        />

                        <TextareaAutosize
                            placeholder="Would you like to leave a message"
                            className="form__item form__item--textarea"
                        />

                        <div className="form__item form__item--recaptcha">
                            <ReCAPTCHA 
                                sitekey={PUBLIC_RECAPTCHA_SITE_KEY}
                                ref={reCaptchaRef}
                                onChange={captcha => setCaptcha(captcha)}
                                onExpired={() => setCaptcha('')}
                            />
                        </div>
                    </form>
                </DialogContent>
                <DialogActions className='modal-form__footer'>
                    <Button
                        onClick={handleClose}
                        color="secondary"
                        textBtn='Cancel'
                        className='modal-form__button'
                    />
                    <Button
                        onClick={handleClose}
                        color="primary"
                        textBtn='Contact'
                        className='modal-form__button'
                    />
                </DialogActions>
            </Dialog>
        </div>
    );
}

ModalForm.propTypes = {
    fullName: PropTypes.string
}

export default ModalForm;