const createActionTypes = require('./index');

test('should return a object with values equal {namespace/key} of all actionTypes passed', () => {
  const actionTypes = [
    {
      nameSpace: 'nameSpace1',
      types: [
        'TYPE_NAME',
        'ANOTHER_TYPE'
      ]
    },
    {
      nameSpace: 'nameSpace2',
      types: [
        'SECOND_TYPE_NAME',
        'SECOND_ANOTHER_TYPE'
      ]
    }
  ];

  const actionsTypesWithNameSpace = createActionTypes(actionTypes);

  const firstType = actionTypes[0].types[0];
  const firstNameSpace = actionTypes[0].nameSpace;
  const firstTypeValue = actionsTypesWithNameSpace[firstType];
  const firstExpectedTypeValue = `${firstNameSpace}/${firstType}`;

  const lastType = actionTypes[1].types[1];
  const lastNameSpace = actionTypes[1].nameSpace;
  const lastTypeValue = actionsTypesWithNameSpace[lastType];
  const lastExpectedTypeValue = `${lastNameSpace}/${lastType}`;

  expect(firstTypeValue).toEqual(firstExpectedTypeValue);  
  expect(lastTypeValue).toEqual(lastExpectedTypeValue);
  expect(Object.keys(actionsTypesWithNameSpace).length).toEqual(4);

});