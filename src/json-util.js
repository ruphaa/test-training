// ['shorty', 'cutie', 'nutty', 'sweety']
// [{shorty: 'shorty'}, ...]


const stringArrayToObjectArray = (stringArr) => {
  if (!Array.isArray(stringArr)) return null;

  const objArray = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const str of stringArr) {
    if (typeof str !== 'string' || !str.length) return null;
    const obj = {};
    obj[str] = str;
    objArray.push(obj);
  }
  return objArray;
};

export default stringArrayToObjectArray;
