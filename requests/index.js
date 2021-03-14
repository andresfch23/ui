const baseUrl = 'http://private-anon-63f632714e-toptalui.apiary-mock.com';

export const getSpecializations = async () => {
  const params = '/categories/specialisations';

  try {
    const fetchedData = await fetch(`${baseUrl}${params}`);
    const parsedUrl = await fetchedData.json();

    return parsedUrl;
  } catch (error) {
    console.error(error);
  }
};

export const getSkills = async () => {
  const params = '/categories/skills';

  try {
    const fetchedData = await fetch(`${baseUrl}${params}`);
    const parsedUrl = await fetchedData.json();

    return parsedUrl;
  } catch (error) {
    console.error(error);
  }
};

export const getDevelopers = async () => {
  const params = '/developers';

  try {
    const fetchedData = await fetch(`${baseUrl}${params}`);
    const parsedUrl = await fetchedData.json();

    return parsedUrl;
  } catch (error) {
    console.error(error);
  }
};