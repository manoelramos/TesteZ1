import { styled } from '@/modules';
import Typography from '../typography';

export const Wrapper = styled.TouchableOpacity`
  padding: 16px;
  border-radius: 32px;
  background-color: green;
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const Text = styled(Typography)`
  color: white;
`;
