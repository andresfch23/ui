import { useState, useContext } from 'react';
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
import { FiltersContext } from '../../contexts/FiltersProvider';

const FilterCard = ({ info = [], title = '', typeFilter = '' }) => {
    let initialState = {};
    const {
        toggleFilter,
        categoryFilters
    } = useContext(FiltersContext);
    const isCategory = typeFilter === 'category';

    info.forEach(({ id }) => { initialState[id] = false });

    const [infoType, setInfoType] = useState(initialState);

    const handleChangeInfoType = (event, title) => {
        if (!isCategory) {
            setInfoType({ ...infoType, [event.target.name]: event.target.checked });
        }

        toggleFilter(typeFilter, title);
    };

    const setCheckedValue = (value) => {
        const findFilter = categoryFilters.find(filter => filter === value);

        if (findFilter) return true;

        return false;
    }

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
                        {info.map(({ id, title }) => {
                            const isChecked = isCategory ? setCheckedValue(title) : infoType[id];

                            return (
                                <FormControlLabel
                                    key={id}
                                    classes={{ label: 'filter-card__label' }}
                                    value={isChecked}
                                    control={
                                        <Checkbox
                                            className="filter-card__checkbox"
                                            checked={isChecked}
                                            onChange={(e) => handleChangeInfoType(e, title)}
                                            name={id}
                                        />
                                    }
                                    label={title}
                                />
                            )
                        })}
                    </FormGroup>
                </FormControl>
            </AccordionDetails>
        </Accordion>
    )
};

FilterCard.propTypes = {
    info: PropTypes.array,
    title: PropTypes.string,
    typeFilter: PropTypes.string
}

export default FilterCard;