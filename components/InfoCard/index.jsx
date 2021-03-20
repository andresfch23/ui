import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import { PROFILE_ROUTE } from '../../common/constants';

const InfoCard = ({ data }) => {
    const {
        first_name,
        last_name,
        skills,
        generalBio,
        photoUrl,
        url
    } = data;

    const fullName = `${first_name} ${last_name}`;

    return (
        <div className="info-card">

            <div className="info-card__image">
                <Image src={photoUrl} width={100} height={100} alt='placeholder' />
            </div>
            
            <div className="info-card__info">
                <h2 className="info-card__fullname">{fullName}</h2>
                <span className="info-card__skill">{`${skills[0].title} expert`}</span>
                <p className="info-card__description">{generalBio}</p>
            </div>
            
            <div className="MuiButtonBase-root MuiButton-root info-card__button MuiButton-outlinedPrimary" >
                <Link href={`${PROFILE_ROUTE}/${url}`}>
                    <a className="info-card__button-link">View profile</a>
                </Link>
            </div>
        </div>
    )
};

InfoCard.propTypes = {
    data: PropTypes.object
};

export default InfoCard;