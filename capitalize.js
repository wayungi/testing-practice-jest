const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize('1234'));


module.exports = capitalize

