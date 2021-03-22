import PropTypes from 'prop-types';
import Image from 'next/image';
import Icon from '../../components/Icon';
import ModalForm from '../../components/ModalForm';
import { getDevelopers, getSpecializations } from '../../requests';
import { FiltersContext } from '../../contexts/FiltersProvider';
import { useContext, useEffect } from 'react';
import { PROFILE_ROUTE } from '../../common/constants';
import experienceData from '../../common/experienceData';

const Profile = ({ selectedDeveloper, specializations, developers }) => {
    const { setSpecializations , setSelectedDeveloper, setInitialDevelopers } = useContext(FiltersContext);

    const {
        first_name,
        last_name,
        skills,
        bio,
        photoUrl,
        category,
        city,
        country
    } = selectedDeveloper;

    const fullName = `${first_name} ${last_name}`;
    const subtitleText = `${skills[0].title} expert, ${category}`;
    const location = `${country}, ${city}`;
    let technologies = '';
    
    useEffect(() => {
        setSpecializations(specializations);
        setSelectedDeveloper(selectedDeveloper);
        setInitialDevelopers(developers);
    }, []);

    skills.forEach((skill, idx) => {
        if (idx === skills.length - 1) {
            technologies += `${skill.title}.`;
        } else {
            technologies += `${skill.title}, `;
        }
    });

    const getDescriptions = descriptions => descriptions.map(({ description, id }) => <li key={id}>{description}</li>);

    const getExperienceSections = () => experienceData.map(({ role, id, descriptions }) => (
        <div className="profile-experience__section" key={id}>
            <h3 className="profile-experience__section-title">{role}</h3>
            <ul className="profile-experience__section-list">
                {getDescriptions(descriptions)}
            </ul>
            <span className="profile-experience__section-technologies">Technologies: {technologies}</span>
        </div>
    ));  

    return (
        <div className="profile">
            <div className="profile__container">

                <div className="profile__main">
                    <div className="profile-bio">
                        <h1 className="profile-bio__title">{fullName}</h1>
                        <span className="profile-bio__subtitle">{subtitleText}</span>
                        <span className="profile-bio__location">
                            <Icon name="location" />
                            {location}
                        </span>
                        <div className="profile-bio__main">
                            <div className="profile-bio__image">
                                <Image src={photoUrl} width={100} height={100} alt='placeholder' />
                            </div>
                            <p className="profile-bio__description">{bio}</p>
                        </div>
                    </div>
                </div>

                <aside className="profile-sidebar">
                    <h2 className="profile-sidebar__title">Contact Options</h2>
                    <ModalForm firstName={first_name} lastName={last_name} />
                </aside>

                <div className="profile-experience">
                    <h2 className="profile-experience__title">Experience</h2>
                    {getExperienceSections()}
                </div>

                <div className="profile-options">
                    <span className="profile-options__title">{first_name} can help you with:</span>
                    <ul className="profile-options__list">
                        <li>SPA (React)</li>
                        <li>Landing pages</li>
                        <li>MERN Stack</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

Profile.propTypes = {
    selectedDeveloper: PropTypes.object,
    specializations: PropTypes.array,
    developers: PropTypes.array
}

export const getStaticPaths = async () => {
    const developers = await getDevelopers();
    const paths = developers.map(({ url }) => `${PROFILE_ROUTE}/${url}`);

    return {
        paths,
        fallback: false,
    }
};

export const getStaticProps = async (ctx) => {
    const { id } = ctx.params;
    const developers = await getDevelopers();
    const specializations = await getSpecializations();
    const selectedDeveloper = developers.find(dev => dev.url === id);
    const { first_name, last_name } = selectedDeveloper;
    const title = `Toptal | Profile | ${first_name} ${last_name}`;

    return {
        props: {
            selectedDeveloper,
            specializations,
            developers,
            title
        }};
};

export default Profile;