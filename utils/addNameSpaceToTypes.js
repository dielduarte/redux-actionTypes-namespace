const addNameSpaceToTypes = (nameSpace, types) => {
  return types.reduce((prev, next) => {
    return {
      ...prev,
      [next]: `${nameSpace}/${next}`
    }
  }, {});
};

module.exports = addNameSpaceToTypes;