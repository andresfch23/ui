import { usePagination } from '@material-ui/lab/Pagination';
import { useState } from 'react';

const Pagination = () => {
    const count = 3;

    const { items } = usePagination({
        count: count,
    });

    const [selectedPage, setSelectedPage] = useState(1);

    return (
        <nav className="pagination">
            <ul className='pagination__container'>
                {items.map(({ page, type, selected, onClick, ...item }, index) => {
                    let children = null;

                    const onClickPage = (e, page) => {
                        setSelectedPage(page);
                        onClick(e);
                    }

                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = '…';
                    } else if (type === 'page') {
                        children = (
                            <button type="button" className={`${selected ? 'selected' : ''}`} {...item} onClick={(e) => onClickPage(e, page)}>
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
                            <button className={disabled} type="button" {...item} onClick={(e) => onClickPage(e, page)}>
                                {type}
                            </button>
                        );
                    } else {
                        let disabled = '';

                        if (selectedPage === count) {
                            type = 'page';
                            disabled = 'disabled';
                        }

                        children = (
                            <button className={disabled} type="button" {...item} onClick={(e) => onClickPage(e, page)}>
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