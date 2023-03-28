import React from 'react';
import {View, Text} from 'react-native';
// import AppBar from './AppBar';

import ListChampions from './ListChampions';
import {Routes, Route, Redirect} from 'react-router-native';
import { AppBar } from '@react-native-material/core';
import { IconButton } from '@react-native-material/core';
import theme from '../theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppBar2 from './AppBar';
import PageTest from './PageTest';

const Main = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#ecf0f1'}}>
      <AppBar
      leading={props => (
        <IconButton icon={() => <Icon name="tray-arrow-up" size={30} color="#f0f0f0" />} />
      )}
      title="Screen title" color={theme.colors.primary} />
      <Routes>
        <Route path='/' element={<ListChampions />} />
        <Route path='/signin' element={<PageTest />} />
        <Route path='/login' element={<PageTest />} />
      </Routes>
      <AppBar2 />
    </View>
  );
};

export default Main;
