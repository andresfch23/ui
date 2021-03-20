import { useEffect } from 'react';
import Router from "next/router";
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Home() {
    useEffect(() => {
        const timer = setTimeout(() => {
            Router.replace('/developers');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="home">
            <h1 className="home__title">Hire the Top 3% of Freelance Talent®</h1>
            <p className="home__text">Toptal is an exclusive network of the top freelance software developers, designers, finance experts, product managers, and project managers in the world. Top companies hire Toptal freelancers for their most important projects.</p>
            <div className="home__button">
                <Fab aria-label="home" className="home__button-container" disabled>
                    <HomeIcon className="home__button-icon" />
                </Fab>

                <CircularProgress size={68} className="modal-form__animations-progress" />
            </div>
            <p className="home__button-redirect">Redirecting to Developers page . . .</p>
        </div>
    )
}
