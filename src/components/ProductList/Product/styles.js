import styled from 'styled-components/native';
import {colors, fonts, metrics} from '../../../Styles';

export const Container = styled.View`
  background-color: ${colors.dark_1};
  border-radius: 3px;
  margin-bottom: 15px;
  width: 48%;
  shadow-color: ${colors.light};
  shadow-radius: 2px;
  shadow-opacity: 0.1;
  shadow-offset: {
    x: 0;
    y: 0;
  }
`;
export const ImageContainer = styled.View`
  padding: 15px;
`;
export const InfoContainer = styled.View`
  padding: 15px;
  border-top-width: 1;
  border-color: ${colors.darker};
`;

export const TextTitle = styled.Text`
  text-align: center;
  font-weight: bold;
  color: ${colors.grey};
`;
export const TextDescription = styled.Text`
  text-align: center;
  color: ${colors.grey_1};
  font-size: ${fonts.smaller};
`;
export const TextFunction = styled.Text`
  text-align: center;
  color: ${colors.white_1};
  font-size: ${fonts.regular};
  margin-top: 4px;
`;
export const Image = styled.Image`
  width: 100%;
  height: 100px;
  resize-mode: contain;
`;
