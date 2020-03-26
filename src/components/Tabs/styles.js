import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome';
import {colors, fonts, metrics} from '../../Styles';

export const Container = styled.View`
  background-color: ${colors.dark_1};
  height: ${metrics.tabBarHeight};
  border-top-width: 1px;
  border-color: ${colors.dark_2};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const Main = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${colors.red};
  justify-content: center;
  align-items: center;
`;
export const IconClone = styled(Icons)`
  color: ${colors.grey};
`;
export const IconPlus = styled(Icons)`
  color: ${colors.white};
`;
export const IconStyle = styled(Icons)`
  color: ${colors.grey_1};
`;
