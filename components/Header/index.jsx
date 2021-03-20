import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../Button';
import Image from 'next/image';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import { FiltersContext } from '../../contexts/FiltersProvider';
import { DROPDOWN_DEFAULT_VALUE, DEVELOPERS_ROUTE, PROFILE_ROUTE } from '../../common/constants';
import Icon from '../Icon';

const Header = () => {
    const {
        specializations,
        toggleFilter,
        categoryFilters,
        setFilteredDeveloperByLocation,
        setGlobalSearchText,
        cleanGlobalSearchText,
        selectedDeveloper
    } = useContext(FiltersContext);
    
    const {
        pathname,
        push
    } = useRouter();

    const {
        first_name = '',
        last_name = ''
    } = selectedDeveloper;

    const isInProfilePage = pathname.includes(PROFILE_ROUTE);
    const breadcrumSelected = isInProfilePage ? `${first_name} ${last_name}` : 'Find Developers';

    const [searchText, setSearchText] = useState('');
    const [options, setOptions] = useState([DROPDOWN_DEFAULT_VALUE]);
    const [openHamurguerMenu, setOpenHamburguerMenu] = useState(false);

    useEffect(() => {
        if (categoryFilters.length) {
            setOptions(categoryFilters);
        } else {
            setOptions([DROPDOWN_DEFAULT_VALUE]);
        }
    }, [categoryFilters.length]);

    const onChangeText = (e) => {
        const value = e.target.value;

        setSearchText(value);

        if (!value) {
            cleanGlobalSearchText();
        }
    }

    const cleanText = () => {
        setSearchText('');
        cleanGlobalSearchText();
    };

    const onToggleMenu = () => {
        setOpenHamburguerMenu(!openHamurguerMenu);
    };

    const handleChangeTypeDeveloper = (value) => {
        toggleFilter('category', value);
    };

    const handleSearchByLocation = () => {
        const routeDevelopers = DEVELOPERS_ROUTE;

        if (pathname !== routeDevelopers) {
            push(routeDevelopers);
        }

        setFilteredDeveloperByLocation(searchText);
        setGlobalSearchText(searchText);
    };

    const handleEnterKey = (e) => {
        if (e.keyCode === 13 && searchText) {
            e.preventDefault();
            handleSearchByLocation();
        }
    }

    return (
        <div className='header'>
            <div className={`header__main ${openHamurguerMenu ? 'header__main--fixed' : ''}`}>
                
                <Link href="/">
                    <a>
                        <Image src="/images/logo.svg" alt="Toptal logo" width={100} height={35} />
                    </a>
                </Link>

                <nav className={`header__main-options ${openHamurguerMenu ? 'header__main-options--opened' : ''}`}>
                    <Link href={DEVELOPERS_ROUTE}>
                        <a>Find Developers</a>
                    </Link>
                    
                    <a href="#">Resources</a>

                    <Button 
                        typeAction="sign"
                        color="secondary"
                    />

                    <Button 
                        typeAction="login"
                        color="primary"
                    />
                </nav>

                <button className={`header__hamburguer ${openHamurguerMenu ? 'header__hamburguer--opened' : ''}`} onClick={onToggleMenu} >
                    <span className="header__hamburguer-line"></span>
                    <span className="header__hamburguer-line"></span>
                    <span className="header__hamburguer-line"></span>
                </button>
            </div>

            <div className={`header__secondary ${openHamurguerMenu ? 'header__secondary--fixed' : ''}`}>
                <Breadcrumbs separator="›" aria-label="breadcrumb" className="header__breadcrumb">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href={DEVELOPERS_ROUTE}>
                        <a>Why Top 3%</a>
                    </Link>
                    {isInProfilePage &&
                        <Link href={DEVELOPERS_ROUTE}>
                            <a>Find Developers</a>
                        </Link>
                    }
                    <Typography className="header__breadcrumb-selected">{breadcrumSelected}</Typography>
                </Breadcrumbs>

                <div className="header__searchbar">
                    <FormControl variant="filled">
                        <Select
                            value={options}
                            classes={{ root: 'header__searchbar-select select' }}
                            className="header__searchbar-container"
                            multiple
                            MenuProps={{
                                disablePortal: true,
                                getContentAnchorEl: null,
                                anchorOrigin: {
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                },
                                transformOrigin: {
                                    vertical: 'top',
                                    horizontal: 'center',
                                }
                            }}
                        >
                            <MenuItem
                                classes={{ root: 'header__searchbar-option' }}
                                value={DROPDOWN_DEFAULT_VALUE}
                            >
                                Select a developer
                            </MenuItem>

                            {
                                specializations.map(({ id, title }) =>(
                                    <MenuItem
                                        onClick={() => handleChangeTypeDeveloper(title)}
                                        key={id}
                                        value={title}
                                    >
                                        {title}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                        <span className="text">in</span>
                    </FormControl>

                    <div className="header__searchbar-input-container">
                        <input
                            type="text"
                            placeholder="Search by location ..."
                            className="header__searchbar-input"
                            value={searchText}
                            onChange={onChangeText}
                            onKeyUp={handleEnterKey}
                        />

                        {searchText &&
                            <Icon name='x' onClick={cleanText} />
                        }
                    </div>

                    <button
                        className={`header__searchbar-button ${!searchText ? 'header__searchbar-button--disabled' : ''}`}
                        disabled={!searchText}
                        onClick={handleSearchByLocation}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;