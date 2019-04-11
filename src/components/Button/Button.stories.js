import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'

storiesOf('Components|Button')
  .add('normal', () => (
    <div>
      <Button text="Add New" />
    </div>
  ))