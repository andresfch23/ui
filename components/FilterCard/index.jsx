import { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { getFormattedInfo } from '../../common/helpers';

const FilterCard = ({ info = [], title = '' }) => {
    let initialState = {};

    const formattedInfo = info.map(info => {
        const id = getFormattedInfo(info.title);
        const newInfo = { ...info, id };

        initialState[id] = false;

        return newInfo;
    });

    const [infoType, setInfoType] = useState(initialState);


    const handleChangeInfoType = (event) => {
        setInfoType({ ...infoType, [event.target.name]: event.target.checked });
    };

    return (
        <Accordion defaultExpanded className="filter-card container">
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel1a-content-${getFormattedInfo(title, '-')}`}
                id={`panel1a-header-${getFormattedInfo(title, '-')}`}
                classes={{
                    root: 'filter-card__accordion',
                    content: 'filter-card__title',
                    expandIcon: 'filter-card__arrow-icon'
                }}
            >
                <Typography>{`${title}:`}</Typography>
            </AccordionSummary>
            <AccordionDetails classes={{ root: 'filter-card__accordion-details' }}>
                <FormControl className="filter-card__control" component="fieldset">
                    <FormGroup className="filter-card__options">
                        {formattedInfo.map(({ id, title }) => (
                            <FormControlLabel
                                key={id}
                                classes={{ label: 'filter-card__label' }}
                                control={
                                    <Checkbox
                                        className="filter-card__checkbox"
                                        checked={infoType[id]}
                                        onChange={handleChangeInfoType}
                                        name={id}
                                    />
                                }
                                label={title}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
            </AccordionDetails>
        </Accordion>
    )
};

FilterCard.propTypes = {
    info: PropTypes.array,
    title: PropTypes.string
}

export default FilterCard;