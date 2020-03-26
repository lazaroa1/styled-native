import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/Ionicons';
import {colors, fonts, metrics} from '../../Styles';

export const Container = styled.View`
  background-color: ${colors.dark_1};
  height: ${metrics.headerHeight};
  padding-top: ${metrics.headerPadding};
  padding-horizontal: ${metrics.padding};
  border-bottom-width: 1;
  border-color: ${colors.dark_2};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconStyle = styled(Icons)`
  color: ${colors.grey};
`;

export const Title = styled.Text`
  color: ${colors.white_1};
  font-size: ${fonts.big};
`;
