import { BaseIconHoc } from '../BaseIconHoc/BaseIconHoc';
import { Icon } from '../Icon/Icon';
import M from './M';
import S from './S';
import Xs from './Xs';

export const IconShuffle = BaseIconHoc({
  m: M,
  s: S,
  xs: Xs,
  name: 'IconShuffle',
})(Icon);
