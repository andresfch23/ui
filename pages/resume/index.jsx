import Icon from '../../components/Icon';
import Image from 'next/image';
import ModalForm from '../../components/ModalForm';

const Resume = () => {
    const data = {
        "id": 1,
        "first_name": "Willabella",
        "last_name": "Batten",
        "city": "Sampacho",
        "country": "Argentina",
        "category": "Full-stack developer",
        "skills": [
            {
                "title": "React"
            },
            {
                "title": "PHP"
            }
        ],
        "generalBio": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "bio": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "photoUrl": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
    };

    const {
        first_name,
        last_name,
        skills,
        bio,
        photoUrl,
        category,
        city,
        country
    } = data;

    const fullName = `${first_name} ${last_name}`;
    const subtitleText = `${skills[0].title} expert, ${category}`;
    const location = `${country}, ${city}`;
    let technologies = '';
    
    skills.forEach((skill, idx) => {
        if (idx === skills.length - 1) {
            technologies += `${skill.title}.`;
        } else {
            technologies += `${skill.title}, `;
        }
    });

    return (
        <div className="resume">
            <div className="resume__container">

                <div className="resume__main">
                    <div className="resume-bio">
                        <h1 className="resume-bio__title">{fullName}</h1>
                        <span className="resume-bio__subtitle">{subtitleText}</span>
                        <span className="resume-bio__location">
                            <Icon name="location" />
                            {location}
                        </span>
                        <div className="resume-bio__main">
                            <div className="resume-bio__image">
                                <Image src={photoUrl} width={100} height={100} alt='placeholder' />
                            </div>
                            <p className="resume-bio__description">{bio}</p>
                        </div>
                    </div>
                </div>

                <aside className="resume-sidebar">
                    <h2 className="resume-sidebar__title">Contact Options</h2>
                    <ModalForm fullName={fullName} />
                </aside>

                <div className="resume-experience">
                    <h2 className="resume-experience__title">Experience</h2>

                    <div className="resume-experience__section">
                        <h3 className="resume-experience__section-title">Frontend Developer at Globant (2018 - present)</h3>
                        <ul className="resume-experience__section-list">
                            <li>Sit, amet consectetur adipisicing elit. Eius cupiditate accusantium impedit veniam? Aperiam aut fugiat magni, aspernatur dicta velit.Vero deserunt facilis illum alias natus quidem ea commodi aliquam!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li>Eius cupiditate accusantium impedit veniam? Aperiam aut fugiat</li>
                            <li>Sit, amet consectetur adipisicing elit. Eius cupiditate accusantium impedit veniam? Aperiam aut fugiat magni, aspernatur dicta velit.Vero deserunt facilis illum alias natus quidem ea commodi aliquam!</li>
                            <li>Dolor sit amet consectetur adipisicing elit. Facere dolorum voluptates corrupti quibusdam. Facere dolorum voluptates corrupti quibusdam</li>
                        </ul>
                        <span className="resume-experience__section-technologies">Technologies: {technologies}</span>
                    </div>

                    <div className="resume-experience__section">
                        <h3 className="resume-experience__section-title">Frontend Developer at El Solucionario (2017 - 2018)</h3>
                        <ul className="resume-experience__section-list">
                            <li>Sit, amet consectetur adipisicing elit. Eius cupiditate accusantium impedit veniam? Aperiam aut fugiat magni, aspernatur dicta velit.Vero deserunt facilis illum alias natus quidem ea commodi aliquam!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li>Eius cupiditate accusantium impedit veniam? Aperiam aut fugiat</li>
                            <li>Sit, amet consectetur adipisicing elit. Eius cupiditate accusantium impedit veniam? Aperiam aut fugiat magni, aspernatur dicta velit.Vero deserunt facilis illum alias natus quidem ea commodi aliquam!</li>
                            <li>Dolor sit amet consectetur adipisicing elit. Facere dolorum voluptates corrupti quibusdam. Facere dolorum voluptates corrupti quibusdam</li>
                        </ul>
                        <span className="resume-experience__section-technologies">Technologies: {technologies}</span>
                    </div>

                </div>

                <div className="resume-options">
                    <span className="resume-options__title">{first_name} can help you with:</span>
                    <ul className="resume-options__list">
                        <li>SPA (React)</li>
                        <li>Landing pages</li>
                        <li>MERN Stack</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Resume;