import querystring from 'querystring';
import { PhoneNumberUtil } from 'google-libphonenumber';
import moment from 'moment';

export const PhoneUtility = PhoneNumberUtil.getInstance();
export const parse = (number, iso2) => {
  try {
    return PhoneUtility.parse(number, iso2);
  } catch (err) {
    return null;
  }
};

class Methods {
  static download(id) {
    return `${process.env.MEDIA_DOWNLOAD_URL}${id}`;
  }

  static parse = (number, iso2) => {
    try {
      return PhoneUtility.parse(number, iso2);
    } catch (err) {
      return null;
    }
  };

  static isValidNumber = (number, iso2) => {
    const phone = parse(number, iso2);

    if (phone) {
      return PhoneUtility.isValidNumber(phone);
    }

    return false;
  };

  static getQuery = ({
    skip = 0, search = '', limit = 20, pagination = true, type, ...rest
  }) => {
    const query = { ...rest };

    if (type) {
      query.type = type;
    }

    if (search !== '') {
      query.search = search.trim().toLowerCase();
    }

    if (pagination) {
      query.skip = skip;
      query.limit = limit;
    }

    return `?${querystring.stringify(query)}`;
  };

  static downloadStaticMap=({
    height = 600, width = 600, zoom = 12, latitude, longitude,
  }) => {
    if (!latitude || !longitude) {
      return null;
    }
    const baseurl = 'https://maps.googleapis.com/maps/api/staticmap?';
    // eslint-disable-next-line max-len
    const url = `${baseurl}center=${latitude},${longitude}&size=${height}x${width}&zoom=${zoom}&key=abc`;

    return url;
  }

  static getTime=(start, end) => {
    if (!start || !end) {
      return '';
    }
    const startDateTime = moment(start);
    const endDateTime = moment(end);

    if (!startDateTime.isValid() || !endDateTime.isValid()) {
      return '';
    }

    if (startDateTime.isSame(endDateTime, 'day')) {
      return `${moment(startDateTime).format('HH:mm')} - ${moment(endDateTime).format('HH:mm')}`;
    }

    return `${moment(startDateTime).format('DD MMM, HH:mm')} to ${moment(endDateTime).format('DD MMM, HH:mm')}`;
  }
}

export default Methods;
