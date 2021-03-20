import { getFormattedInfo } from  '../common/helpers';

const BASE_URL = 'http://private-anon-63f632714e-toptalui.apiary-mock.com';

export const getSpecializations = async () => {
    const params = '/categories/specialisations';

    try {
        const fetchedData = await fetch(`${BASE_URL}${params}`);
        const parsedData = await fetchedData.json();
        const infoWithNewId = parsedData.map(spec => {
            const id = getFormattedInfo(spec.title);
            const newInfo = { ...spec, id };
    
            return newInfo;
        });

        return infoWithNewId;
    } catch (error) {
        console.error(error);
    }
};

export const getSkills = async () => {
    const params = '/categories/skills';

    try {
        const fetchedData = await fetch(`${BASE_URL}${params}`);
        const parsedData = await fetchedData.json();
        const infoWithNewId = parsedData.map(skill => {
            const id = getFormattedInfo(skill.title);
            const newInfo = { ...skill, id };
    
            return newInfo;
        });

        return infoWithNewId;
    } catch (error) {
        console.error(error);
    }
};

export const getDevelopers = async () => {
    const params = '/developers';

    try {
        const fetchedData = await fetch(`${BASE_URL}${params}`);
        const parsedData = await fetchedData.json();
        const developerWithUrl = parsedData.map(dev => {
            const fullName = `${dev.first_name} ${dev.last_name}`;
            const url = getFormattedInfo(fullName, '-');
            const newInfo = { ...dev, url };
    
            return newInfo;
        });
    


        return developerWithUrl;
    } catch (error) {
        console.error(error);
    }
};