import { createContext, useEffect, useState } from "react";
import { RESULTS_PER_PAGE } from '../common/constants';
import { normalizeText } from '../common/helpers';
import PropTypes from 'prop-types';

export const FiltersContext = createContext();

const FiltersProvider = ({ children }) => {
    const [allFilters, setAllFilters] = useState({ category: [], skills: [] });
    const [initialDevelopers, setInitialDevelopers] = useState([]);
    const [specializations, setSpecializations] = useState([]);
    const [selectedDevelopers, setSelectedDevelopers] = useState();
    const [currentResultsOfPage, setCurrentResultsOfPage] = useState();
    const [selectedPage, setSelectedPage] = useState(1);
    const [globalSearchText, setGlobalSearchText] = useState('');
    const [total, setTotal] = useState(0);
    const [selectedDeveloper, setSelectedDeveloper] = useState({});
    const [clickedFromPagination, setClickedFromPagination] = useState(false);

    useEffect(() => {
        setResultsPerPage();
    }, [selectedDevelopers, selectedPage, initialDevelopers]);

    const _getDevsWithSelectedSkills = (skillsFilter, skills) => skillsFilter.some(selectedSkill => skills.some(({ title }) => title === selectedSkill));
    const _getDevsWithSelectedCategories = (categoryFilter, category) => categoryFilter.some(selectedCategory => selectedCategory === category);

    const _filterDevelopers = (filters = allFilters) => {
        const categoryFilter = filters.category;
        const categoryFilterLength = categoryFilter.length;
        const skillsFilter = filters.skills;
        const skillsFilterLength = skillsFilter.length;

        if (!categoryFilterLength && !skillsFilterLength) {
            return initialDevelopers;
        }

        const filteredDevelopers = initialDevelopers.reduce((acc, dev) => {
            const hasDevSelectedCategories = _getDevsWithSelectedCategories(categoryFilter, dev.category);
            const hasDevSelectedSkills = _getDevsWithSelectedSkills(skillsFilter, dev.skills);
            const hasCategoryNoSkills = categoryFilterLength && !skillsFilterLength;
            const hasSkillsNoCategories = !categoryFilterLength && skillsFilterLength;
            const hasBothFilters = hasDevSelectedCategories && hasDevSelectedSkills;

            if (
                (hasCategoryNoSkills && hasDevSelectedCategories) ||
                (hasSkillsNoCategories && hasDevSelectedSkills) ||
                (hasBothFilters)
            ) {
                return [...acc, dev];
            }

            return acc;
        }, []);

        return filteredDevelopers;
    };

    const _searchByLocation = (developers, location) => {
        const normalizeSearchText = normalizeText(location);
        
        const filteredDevelopersbyLocation = developers.filter(dev => {
            const completeLocation = `${dev.city} ${dev.country}`;
            const normalizedLocationText = normalizeText(completeLocation);

            return normalizedLocationText.includes(normalizeSearchText);
        });

        return filteredDevelopersbyLocation;
    };

    const toggleFilter = (type = '', filter) => {
        const cloneFilters = {...allFilters};

        if (!cloneFilters[type].length) {
            cloneFilters[type].push(filter);
        } else {
            const indexChecked = cloneFilters[type].findIndex(prevFilter => prevFilter === filter);

            if (indexChecked < 0) {
                cloneFilters[type].push(filter);
            } else {
                cloneFilters[type].splice(indexChecked, 1);
            }
        }

        setAllFilters(cloneFilters);

        let filteredDevelopers = _filterDevelopers(cloneFilters);

        if (globalSearchText) {
            filteredDevelopers = _searchByLocation(filteredDevelopers, globalSearchText);
        }

        setSelectedDevelopers(filteredDevelopers);
        setTotal(filteredDevelopers.length);
        setSelectedPage(1);
        setClickedFromPagination(false)
    };

    const setResultsPerPage = () => {
        const start = (selectedPage - 1) * RESULTS_PER_PAGE;
        const final = start + RESULTS_PER_PAGE;
        const developers  = selectedDevelopers || initialDevelopers;
        const results = developers.slice(start, final);

        setCurrentResultsOfPage(results);
    };

    const setFilteredDeveloperByLocation = (location) => {
        let currentDevelopers;
        const areDevelopersSelected = selectedDevelopers?.length;

        if (!areDevelopersSelected && (allFilters.category.length || allFilters.skills.length))  {
            currentDevelopers = _filterDevelopers();
        } else if (areDevelopersSelected) {
            currentDevelopers = selectedDevelopers;
        } else {
            currentDevelopers = initialDevelopers;
        }
        
        const filteredByLocation = _searchByLocation(currentDevelopers, location);
        setSelectedDevelopers(filteredByLocation);
        setTotal(filteredByLocation.length);
        setSelectedPage(1);
        setClickedFromPagination(false);
    };

    const cleanGlobalSearchText = () => {
        const filteredDevelopers = _filterDevelopers();

        setGlobalSearchText('');
        setSelectedDevelopers(filteredDevelopers);
        setTotal(filteredDevelopers.length);
    };

    const contextProps = {
        setInitialDevelopers,
        setSpecializations,
        toggleFilter,
        setSelectedPage,
        setFilteredDeveloperByLocation,
        setClickedFromPagination,
        setGlobalSearchText,
        cleanGlobalSearchText,
        setTotal,
        setSelectedDeveloper,
        initialDevelopers,
        total,
        specializations,
        selectedPage,
        currentResultsOfPage,
        categoryFilters: allFilters.category,
        skillsFilters: allFilters.skills,
        globalSearchText,
        selectedDeveloper,
        clickedFromPagination
    };

    return (
        <FiltersContext.Provider value={contextProps} >
            {children}
        </FiltersContext.Provider>
    )
};

FiltersProvider.propTypes = {
    children: PropTypes.node
};

export default FiltersProvider;