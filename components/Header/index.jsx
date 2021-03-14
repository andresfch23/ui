import { useState } from 'react';
import Link from 'next/link';
import Button from '../Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';

const Header = () => {
    const [searchText, setSearchText] = useState('');
    const [typeDeveloper, setTypeDeveloper] = useState('Select a developer');

    const onChangeText = (e) => {
        const value = e.target.value;

        setSearchText(value);
    }

    const handleChangeTypeDeveloper = (e) => {
        const value = e.target.value;

        setTypeDeveloper(value);
    }

    return (
        <div className='header'>
            <div className='header__main'>
                <img className='header__main-logo' src="./images/logo.svg" alt="Toptal logo"/>
                <nav className='header__main-options'>
                    <Link href="/developers">
                        <a>Find Developers</a>
                    </Link>

                    <Link href="#">
                        <a>Resources</a>
                    </Link>

                    <Button 
                        type="sign"
                        color="secondary"
                    />

                    <Button 
                        type="login"
                        color="primary"
                    />
                </nav>
            </div>

            <div className='header__secondary'>
                <Breadcrumbs separator="›" aria-label="breadcrumb" className="header__breadcrumb">
                    <Link href="/" onClick={() => {}}>
                        <a>Home</a>
                    </Link>
                    <Link href="#" onClick={() => {}}>
                        <a>Why Top 3%</a>
                    </Link>
                    
                    <Typography className="header__breadcrumb-selected">Find Developers</Typography>
                </Breadcrumbs>

                <div className="header__searchbar">
                    <FormControl variant="filled">
                        <Select
                            onChange={handleChangeTypeDeveloper}
                            value={typeDeveloper}
                            classes={{ root: 'header__searchbar-select select' }}
                            className="header__searchbar-container"
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
                            <MenuItem classes={{ root: 'header__searchbar-option' }} value={'Select a developer'}>Select a developer</MenuItem>
                            <MenuItem value={40}>Full-stack developer</MenuItem>
                            <MenuItem value={20}>Backend developer</MenuItem>
                            <MenuItem value={60}>Mobile developer</MenuItem>
                            <MenuItem value={10}>Frontend developer</MenuItem>
                            <MenuItem value={30}>Data Science</MenuItem>
                        </Select>
                        <span className="text">in</span>
                    </FormControl>

                    <input
                        type="text"
                        placeholder="Search by location ..."
                        className="header__searchbar-input"
                        value={searchText}
                        onChange={onChangeText}
                    />

                    <button className="header__searchbar-button">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;