import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Image from 'next/image';
import { getFormattedInfo } from '../../common/helpers';

const InfoCard = ({ data }) => {
    const {
        first_name,
        last_name,
        skills,
        generalBio,
        photoUrl
    } = data;

    const fullName = `${first_name} ${last_name}`;
    const url = getFormattedInfo(fullName, '-');

    return (
        <div className="info-card">

            <div className="info-card__image">
                <Image src={photoUrl} width={100} height={100} />
            </div>
            
            <div className="info-card__info">
                <h2 className="info-card__fullname">{fullName}</h2>
                <span className="info-card__skill">{`${skills[0].title} expert`}</span>
                <p className="info-card__description">{generalBio}</p>
            </div>
            
            <Button
                className="info-card__button"
                variant="outlined"
                color="primary"
                href={`/resume/${''}`}
            >
                View profile
            </Button>
        </div>
    )
};

InfoCard.propTypes = {
    data: PropTypes.object
};

export default InfoCard;