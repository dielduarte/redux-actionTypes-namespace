const addNameSpaceToTypes = require('./addNameSpaceToTypes');

test('should return a object with value equal {namespace/key}', () => {
  const actionType = {
    nameSpace: 'sessions',
    types: [
      'TYPE_NAME',
      'ANOTHER_TYPE'
    ]
  };

  const TypesWithNameSpace = addNameSpaceToTypes(actionType.nameSpace, actionType.types);
  const firstType = actionType.types[0];
  const typeValue = TypesWithNameSpace[firstType];
  const expectedTypeValue = `${actionType.nameSpace}/${firstType}`;

  expect(typeValue).toEqual(expectedTypeValue);
});