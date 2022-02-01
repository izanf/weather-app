import styled from 'styled-components';

import Box from './Box';
import Icon from './Icon';

const InputRAW = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.grayLight};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayy};
  }
`;

interface IInput {
  leftIcon?: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ leftIcon, ...props }: IInput) => (
  <Box flex="1" display="flex" border="1px solid" borderColor="grayLight" p=".5rem">
    {leftIcon ? <Icon color="grayy" name={leftIcon} /> : null}
    <InputRAW {...props} />
  </Box>
);

export default Input;
