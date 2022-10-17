import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const QuoteIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <polygon points="61.44,98.67 0,48.64 61.44,0 61.44,98.67"/><polygon points="61.44,98.67 122.88,48.64 61.44,0 61.44,98.67"/><path d="M97.28,87.04c0-19.79-16.05-35.84-35.84-35.84c-19.79,0-35.84,16.05-35.84,35.84s16.05,35.84,35.84,35.84 C81.23,122.88,97.28,106.83,97.28,87.04L97.28,87.04z"/><path d="M29.05,71.68C34.8,59.57,47.14,51.2,61.44,51.2c14.3,0,26.64,8.37,32.39,20.48H29.05L29.05,71.68z"/>
  </Icon>
));

export default QuoteIcon;
