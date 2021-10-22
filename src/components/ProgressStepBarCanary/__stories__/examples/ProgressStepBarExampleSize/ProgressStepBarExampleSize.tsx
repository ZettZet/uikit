import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { ProgressStepBar } from '../../../ProgressStepBarCanary';

type Item = {
  label: string;
  point?: number;
  progress?: boolean;
  status?: 'normal' | 'success' | 'alert' | 'warning';
  lineStatus?: 'normal' | 'success' | 'alert' | 'warning';
};

const steps: Item[] = [
  {
    label: 'Пункт 1',
    point: 1,
    status: 'normal',
    lineStatus: 'normal',
  },
  {
    label: 'Пункт 2',
    point: 2,
    status: 'normal',
    lineStatus: 'normal',
  },
  {
    label: 'Пункт 3',
    point: 3,
    status: 'normal',
    lineStatus: 'normal',
  },
  {
    label: 'Пункт 4',
    point: 4,
    status: 'normal',
  },
];

export const ProgressStepBarExampleSize = () => {
  return (
    <div className={cnDocsDecorator('Section')}>
      <ProgressStepBar size="xs" direction="horizontal" steps={steps} activeStepIndex={2} />
      <ProgressStepBar size="s" direction="horizontal" steps={steps} activeStepIndex={2} />
      <ProgressStepBar size="m" direction="horizontal" steps={steps} activeStepIndex={2} />
    </div>
  );
};