import React from 'react';
import { storiesOf } from '@storybook/react';
import Name from './Name';

storiesOf('Components|Name')
  .add('all', () => (
    <div>
      <h2>Normal</h2>
      <Name name="Louie Anderson" />
      <h2>Highlighted</h2>
      <Name name="Louie Anderson" type="highlight" />
      <h2>Disabled</h2>
      <Name name="Louie Anderson" type="disabled" />
    </div>
  ));
