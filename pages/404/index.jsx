import { useEffect } from 'react';
import Router from "next/router";
import Fab from '@material-ui/core/Fab';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Home() {
    useEffect(() => {
        const timer = setTimeout(() => {
            Router.replace('/');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="not-found">
            <h1 className="not-found__title">Sorry. This page cannot be found</h1>
            <div className="not-found__button">
                <Fab aria-label="not-found" className="not-found__button-container" disabled>
                    <ReportProblemIcon className="not-found__button-icon" />
                    <CircularProgress size={68} className="modal-form__animations-progress" />
                </Fab>
            </div>
            <p className="not-found__button-redirect">Redirecting to Home page . . .</p>
        </div>
    )
}
