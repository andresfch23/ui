import { usePagination } from '@material-ui/lab/Pagination';
import { useContext, useState, useEffect } from 'react';
import { FiltersContext } from '../../contexts/FiltersProvider';
import { RESULTS_PER_PAGE } from '../../common/constants';

const Pagination = () => {
    const {
        selectedPage,
        setSelectedPage,
        total,
        setClickedFromPagination
    } = useContext(FiltersContext);
    const [countPagination, setCountPagination] = useState();

    const { items } = usePagination({
        count: countPagination
    });

    useEffect(() => {
        calculatePagination(total);
    }, [total, selectedPage]);

    const calculatePagination = (total) => {
        const numberOfPages = Math.ceil(total / RESULTS_PER_PAGE);

        setCountPagination(numberOfPages);
    };

    return (
        <nav id="pagination" className={`pagination ${total <= RESULTS_PER_PAGE + 1 ? 'pagination__no-results' : ''}`}>
            <ul className='pagination__container'>
                {items.map(({ page, type, onClick }, index) => {
                    let children = null;

                    const onClickPage = (e, page) => {
                        setSelectedPage(page);
                        setClickedFromPagination(true);
                        onClick(e);
                    }

                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = '…';
                    } else if (type === 'page') {
                        children = (
                            <button type="button" className={`${page === selectedPage ? 'selected' : ''}`} onClick={(e) => onClickPage(e, page)}>
                                {page}
                            </button>
                        );
                    } else if (type === 'previous') {
                        let disabled = '';
                        type = 'prev';

                        if (selectedPage === 1) {
                            type = 'page',
                            disabled = 'disabled';
                        }

                        children = (
                            <button className={disabled} disabled={disabled ? true : false} type="button" onClick={(e) => onClickPage(e, page)}>
                                {type}
                            </button>
                        );
                    } else {
                        let disabled = '';

                        if (selectedPage === countPagination) {
                            type = 'page';
                            disabled = 'disabled';
                        }

                        children = (
                            <button className={disabled} disabled={disabled ? true : false} type="button" onClick={(e) => onClickPage(e, page)}>
                                {type}
                            </button>
                        );
                    }

                    return <li key={index}>{children}</li>;
                })}
            </ul>
        </nav>
    );
}

export default Pagination;