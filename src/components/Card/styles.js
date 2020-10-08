import styled, {css} from 'styled-components'
import {  TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 270px;
  height: 150px;

  background: #fff;
  border: 1px solid #000;
  margin-bottom: 15px;

  ${props => 
    props.cardSelect &&
    css`
      background: blue
    `
  }
`

export const TitleCounter = styled.Text`
  color: #01a3a4;
  padding: 5px 0 0 5px;
`

export const ContainerConter = styled.View`
  flex-direction: column;
  height: 60px;
  margin-top: 50px;
  margin-right: 10px;
  margin-left: 10px;
  align-items: flex-end;
  justify-content: flex-end;
`

export const Conter = styled.Text`
  color: #000;
  font-size: 30px;
  font-weight: bold;
`