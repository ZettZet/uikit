import { Example } from '@consta/stand';
import React from 'react';

import { TextField } from '../../../TextField';

export const TextFieldExampleWithClearButton = () => {
  return (
    <Example col={1}>
      <TextField defaultValue="Очисти меня" withClearButton />
    </Example>
  );
};