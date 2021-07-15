import * as React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../constants/Colors';


const Container = styled.View.attrs(({ styles }) => ({
  ...styles
}))`
  flex: 1 1 0;
`
const Row = styled.View.attrs(({ styles }) => ({
  ...styles
}))`
  display: flex;
  flex-direction: row;
`
const Col = styled.View.attrs(({ styles }) => ({
  ...styles
}))`
  padding: 0 12px;
`
const Icon = styled.View`
  border-width: 1px;
  border-color: black;
  border-radius: 50px;
  shadow-color: #000;
  shadowOffset: {width: 2px, height: 5px};
  shadowOpacity: .34;
  shadowRadius: 6.27px;
`

export {
  Container,
  Row,
  Col,
  Icon
}