/* eslint-disable no-useless-escape */
class Regex {
  static email(email) {
    // eslint-disable-next-line no-useless-escape
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  static amount=(val) => /^\$?[0-9]?((\.[0-9]+)|([0-9]+(\.[0-9]+)?))$/g.test(val);

  static mobile = (val) => /([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/g.test(val);
  static string = (val) => /^\S[a-zA-Z\x20]{2,25}$/.test(val);
  static password = (val) => /^(?=.*[A-Za-z])[A-Za-z0-9]\S{5,16}$/.test(val);
  static numbers = (val) => /^[0-9]{0,}$/.test(val);
  static isString = (val) => /^\S[a-zA-Z\x20]$/.test(val);
  static username = (val) => /^\S[a-zA-Z\x20]{2,25}$/.test(val);
  static url = (val) => /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(val); //eslint-disable-line
  static positiveNumbers =(val) => /^[+]?([1-9][0-9]*(?:[\.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/.test(val);
  static validateImageFile = (imageExtension) => /(jpg|jpeg|png|PNG|JPG)$/.test(imageExtension);
}

module.exports = Regex;
