import styled, { css } from 'styled-components';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 270px;
  height: 150px;

  background: rgba(255, 255, 255, 0.6);
  margin-bottom: 15px;

  ${(props) =>
    props.cardSelect &&
    css`
      border: 1px solid #000;
      background: #fff;
    `}
`;

export const TitleCounter = styled.Text`
  color: #01a3a4;
  padding: 5px 0 0 5px;
`;

export const ContainerConter = styled.View`
  flex-direction: column;
  height: 60px;
  margin-top: 50px;
  margin-right: 10px;
  margin-left: 10px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Conter = styled.Text`
  color: rgba(0, 0, 0, 0.5);
  font-size: 30px;
  font-weight: bold;

  ${(props) =>
    props.cardSelect &&
    css`
      color: #000;
    `}
`;
