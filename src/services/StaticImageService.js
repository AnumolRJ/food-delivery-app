import { ApiConstants } from "../constants";

const getFlagIcon = (countryCode = 'IN', style = 'flat', size = '64') => {
    return `${ApiConstants.countryFlags.BASE_URL}${countryCode}/${style}/${size}.png`;
};

export default { getFlagIcon };