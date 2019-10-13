import React from 'react';
import Template from './Template';
import BlockList from 'components/block/BlockListWrapper';
import BlockListWrapper from 'components/block/BlockListWrapper';

const App = () => {
  return (
    <Template>
      <BlockListWrapper data={demo} />
    </Template>
  );
};

export default App;
