import Link from 'next/link';
import PropTypes from 'prop-types';
import Button from '../Button';

const CardLink = ({ title = '', links = [], optionButtons = {} }) => {
    return (
        <div className="cardLink">
            <h1 className="cardLink__title">{title}</h1>
            
            {links.length ? (
                links.map(link => (
                    <Link href="#" key={`link-${link}`}>
                        <a className="cardLink__item">{link}</a>
                    </Link>
                ))
            ) : null}

            {Object.entries(optionButtons).length ? (
                <Button 
                    color={optionButtons.color}
                    typeAction={optionButtons.type}
                />
            ) : null}
        </div>
    );
};

CardLink.propTypes = {
    title: PropTypes.string,
    links: PropTypes.array,
    optionButtons: PropTypes.object
}

export default CardLink;