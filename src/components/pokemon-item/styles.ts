import { FontAwesome } from '@expo/vector-icons';
import { styled } from '@/modules';
import Typography from '../typography';

export const Wrapper = styled.TouchableOpacity.attrs({
  style: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})`
  flex: 1;
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
`;

export const IconArrow = styled(FontAwesome).attrs({
  size: 16,
})``;

export const Title = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
`;
