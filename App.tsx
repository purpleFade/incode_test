import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import TableComponent from './src/components/Table/Table';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TableComponent />
    </Provider>
  );
};

export default App;
