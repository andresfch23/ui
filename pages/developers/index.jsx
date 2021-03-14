import InfoCard from '../../components/InfoCard';
import SideBar from '../../components/SideBar';
import Pagination from '../../components/Pagination';

const Developers = () => {

    const developersMockData = [
        {
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
        },
        {
            "id": 2,
            "first_name": "Cecil",
            "last_name": "Walling",
            "city": "Geneng",
            "country": "Indonesia",
            "category": "Full-stack developer",
            "skills": [
                {
                    "title": "Angular"
                },
                {
                    "title": "PHP"
                }
            ],
            "generalBio": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
            "bio": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
            "photoUrl": "http://dummyimage.com/100x100.bmp/cc0000/ffffff"
        },
        {
            "id": 3,
            "first_name": "Maria",
            "last_name": "Brocking",
            "city": "Uppsala",
            "country": "Sweden",
            "category": "Backend developer",
            "skills": [
                {
                    "title": "Java"
                },
                {
                    "title": "PHP"
                }
            ],
            "generalBio": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
            "bio": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
            "photoUrl": "http://dummyimage.com/100x100.png/ff4444/ffffff"
        }
    ];

    return (
        <div className="developers">

            <SideBar />

            <div className="developers__main">
                <h1 className="developers__title">Top developers in Toptal</h1>
                <div className="developers__cards-container">
                    {developersMockData.map(data => <InfoCard data={data} key={data.id} />)}
                </div>

                <Pagination />
            </div>
        </div>
    );
};

export default Developers;