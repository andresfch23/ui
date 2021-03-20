const NoResults = () =>( 
    <div className="no-results">
        <p className="no-results__text">Sorry. We couldn&apos;t find results for the search</p>
        <span className="no-results__subtext">You should:</span>
        <ul className="no-results__list">
            <li className="no-results__list-item">Check your search for typos.</li>
            <li className="no-results__list-item">Try with another location.</li>
            <li className="no-results__list-item">Use a different combination of filters.</li>
        </ul>
    </div>
);

export default NoResults;