export const getFormattedInfo = (info = "", type = '_') => {
    const lowerCaseInfo = info.toLowerCase();
    const decodedUri = decodeURIComponent(lowerCaseInfo);
    const formattedInfo = decodedUri.replace(/-|\s/g, type);

    return formattedInfo;
};
