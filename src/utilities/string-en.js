/* eslint-disable no-extend-native */
/* eslint-disable */
String.prototype.capitalizeFirstLetter = function (endpoint = null) {
  const output = this.charAt(0).toUpperCase() + this.slice(1);
  const { length } = this;
 
  if (!endpoint) {
    return output
  }


  if (length > endpoint) {
    return `${output.substring(0, endpoint - 2)}...`;
  }

  return output
};

String.prototype.capitalizeEachLetter = function(endpoint = null){
  const output = this.split(' ').map((word) => word.capitalizeFirstLetter()).join(' ');
  const { length } = this;
  
  if (!endpoint) {
    return output
  }

  if (length > endpoint) {
    return `${output.substring(0, endpoint - 2)}...`;
  }
  
  return output;
}

Number.prototype.countDecimals = function () {
    if(Math.floor(this.valueOf()) === this.valueOf()) return 0;
    return this.toString().split(".")[1].length || 0; 
}