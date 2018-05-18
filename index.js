const addNameSpaceToTypes = require('./utils/addNameSpaceToTypes');

const createActionTypes = (actionsTypes)  => {
  return actionsTypes.reduce((prev, next) => {
    return {
      ...prev,
      ...addNameSpaceToTypes(next.nameSpace, next.types)
    }
  }, {});
};

module.exports = createActionTypes;