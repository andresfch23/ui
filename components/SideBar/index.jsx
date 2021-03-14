import FilterCard from '../FilterCard';

const SideBar = () => {

    const profiles = [
        {
            "id": 1,
            "title": "Full-stack developer"
        },
        {
            "id": 2,
            "title": "Backend developer"
        },
        {
            "id": 3,
            "title": "Mobile developer"
        },
        {
            "id": 4,
            "title": "Data scientist"
        },
        {
            "id": 5,
            "title": "Frontend developer"
        }
    ];

    const skills = [
        {
            "id": 1,
            "title": "Android"
        },
        {
            "id": 2,
            "title": "iOS"
        },
        {
            "id": 3,
            "title": "Java"
        },
        {
            "id": 4,
            "title": "Python"
        },
        {
            "id": 5,
            "title": "PHP"
        },
        {
            "id": 6,
            "title": "Angular"
        },
        {
            "id": 7,
            "title": "React"
        },
        {
            "id": 8,
            "title": "Ruby"
        },
        {
            "id": 9,
            "title": "Go"
        }
    ]

    return (
        <div className="sidebar">
            <div className="sidebar__filters">
                <FilterCard info={profiles} title={'Developer type'} />
                <FilterCard info={skills} title={'Skills'} />
            </div>
        </div>
    )
};

export default SideBar;