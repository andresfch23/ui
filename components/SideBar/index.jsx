import FilterCard from '../FilterCard';
import PropTypes from 'prop-types';

const SideBar = ({ filters: { specializations, skills } }) => {
    return (
        <div className="sidebar">
            <div className="sidebar__filters">
                <FilterCard info={specializations} title={'Developer type'} typeFilter='category' />
                <FilterCard info={skills} title={'Skills'} typeFilter='skills' />
            </div>
        </div>
    )
};

SideBar.propTypes = {
    filters: PropTypes.object
}

export default SideBar;