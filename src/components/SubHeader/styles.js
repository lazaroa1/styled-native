import styled from 'styled-components/native';
import {colors, fonts, metrics} from '../../Styles';

export const Container = styled.View`
  padding: 15px;
  background-color: ${colors.dark_1};
  border-bottom-width: 1;
  border-color: ${colors.dark_2};
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 34px;
  margin-right: 15px;
`;

export const ProfileInfo = styled.View`
  flex: 1;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: ${fonts.big};
  color: ${colors.grey_1};
  margin-top: 5px;
`;

export const Bio = styled.Text`
  font-size: ${fonts.regular};
  color: ${colors.grey_1};
  margin-top: 5px;
`;

export const ButtonContainer = styled.View`
  margin-top: 10px;
`;

export const BtM = styled.View`
  height: 31px;
  background-color: ${colors.red};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  bottom: 10px;
  padding-horizontal: 20px;
`;

export const ButtonMessage = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: ${fonts.small};
  bottom: 1px;
`;

export const BtS = styled.View`
  height: 31px;
  background-color: ${colors.white};
  border-width: 1px;
  border-color: ${colors.red};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
`;

export const ButtonFallow = styled.Text`
  color: ${colors.red};
  font-weight: bold;
  font-size: ${fonts.small};
  bottom: 1px;
`;
