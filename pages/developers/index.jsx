import { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import InfoCard from '../../components/InfoCard';
import SideBar from '../../components/SideBar';
import Pagination from '../../components/Pagination';
import NoResults from '../../components/NoResults';
import { getDevelopers, getSkills, getSpecializations } from '../../requests';
import { FiltersContext } from '../../contexts/FiltersProvider';

const Developers = ({ developers, specializations, skills }) => {
    const {
        setInitialDevelopers,
        currentResultsOfPage,
        setSpecializations,
        clickedFromPagination,
        globalSearchText,
        categoryFilters,
        skillsFilters,
        setTotal
    } = useContext(FiltersContext);

    const listDevelopers = currentResultsOfPage || developers;
    const searchText = globalSearchText ? `"${globalSearchText}"` : 'Toptal';
    const typeOfDeveloper = categoryFilters.length === 1 ? categoryFilters[0] : 'developer';
    const titleText = `Top ${typeOfDeveloper}s in ${searchText}`;
    
    useEffect(() => {
        setSpecializations(specializations);

        if (!skillsFilters.length && !categoryFilters.length && !globalSearchText) {
            setInitialDevelopers(developers);
            setTotal(developers.length);
        }
    }, []);

    useEffect(() => {
        if (clickedFromPagination) {
            document.getElementById('developers-main').scrollIntoView();
        }
    }, [currentResultsOfPage]);

    return (
        <div className="developers">

            <SideBar filters={{ specializations, skills }}/>

            <div className="developers__main" id="developers-main">
                <h1 className="developers__title">{titleText}</h1>
                <div className={`developers__cards-container ${!listDevelopers.length ? 'developers__cards-container--no-results' : '' }`}>
                    {listDevelopers.length ?
                        listDevelopers.map(dev => <InfoCard data={dev} key={dev.id} />)
                        :
                        <NoResults searchText={globalSearchText} />
                    }
                </div>

                <Pagination />
            </div>
        </div>
    )
};

export default Developers;

Developers.propTypes = {
    developers: PropTypes.array,
    specializations: PropTypes.array.isRequired,
    skills: PropTypes.array
}

export const getStaticProps = async () => {
    const developers = await getDevelopers();
    const specializations = await getSpecializations();
    const skills = await getSkills();
    const title = 'Toptal | Developers';

    return {
        props: {
            developers,
            specializations,
            skills,
            title
        }
    };
};