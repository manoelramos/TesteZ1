import { TextInput as RNTextInput } from 'react-native';
import { TextInput } from './styles';

type Props = React.ComponentProps<typeof RNTextInput>;

const Input = (props: Props) => {
  return <TextInput {...props} />;
};

export default Input;
