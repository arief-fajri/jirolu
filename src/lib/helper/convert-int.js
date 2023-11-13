export default (n = '') => {
  if (typeof n !== 'string') {
    n = String(n)
  }
  let num = n.replaceAll(',', '');

  return parseFloat(num);
};