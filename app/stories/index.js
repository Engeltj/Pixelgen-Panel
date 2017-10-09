// file: src/stories/index.js

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IBox from '../components/common/IBox';
import Table from '../components/common/Table';


storiesOf('IBox', module)
  .add('Basic', () => (
    <IBox title={ 'IBox Title Here' }>
      <Table title={'Table title'} headers={['A', 'B', 'C'] }>
        {/*{[<tr>
          <td>This is a column</td>
          <td>B column is here</td>
          <td>Okay C</td>
        </tr>]}*/}
      </Table>
    </IBox>
  ));
