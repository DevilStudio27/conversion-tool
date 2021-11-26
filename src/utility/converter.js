var convertBase = function () {

  function convertBase(baseFrom, baseTo) {
      return function (num) {
          return parseInt(num, baseFrom).toString(baseTo);

      };
  }

  // binary to decimal
  convertBase.bin2dec = convertBase(2, 10);

  // binary to hexadecimal
  convertBase.bin2hex = convertBase(2, 16);

  // decimal to binary
  convertBase.dec2bin = convertBase(10, 2);

  // decimal to hexadecimal
  convertBase.dec2hex = convertBase(10, 16);

  // hexadecimal to binary
  convertBase.hex2bin = convertBase(16, 2);

  // hexadecimal to decimal
  convertBase.hex2dec = convertBase(16, 10);

  return convertBase;
}();

  export default convertBase;