# redux-actiontypes-namespace
Add nameSpaces to your global actionTypes in an easy way

## How to use 

First install

```js
yarn add redux-actiontypes-namespace
```

import `createActionTypes` function, example:

```js
import createActionTypes from 'redux-actiontypes-namespace';

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

export default createActionTypes(actionTypes);

```

now your actionTypes shoud be like:

```
  {
    TYPE_NAME: 'nameSpace1/TYPE_NAME',
    ANOTHER_TYPE: 'nameSpace1/ANOTHER_TYPE',
    SECOND_TYPE_NAME: 'nameSpace2/SECOND_TYPE_NAME',
    SECOND_ANOTHER_TYPE: 'nameSpace2/SECOND_ANOTHER_TYPE'
  }
```

So, now just import your actionTypes and you can use in a normal way.

```
 import types from 'where-your-file-was-created';

 dispatch({ type: types.TYPE_NAME })

```

or with object destructuring:

```
 import { TYPE_NAME } from 'where-your-file-was-created';

 dispatch({ type: TYPE_NAME })

```

made with <3 