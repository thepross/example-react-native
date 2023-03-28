import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import StyleText from './StyleText';
import ChampionStat from './ChampionStat';

const ChampionItemHeader = ({url, name, id}) => {
  return (
    <View>
        <Image style={style.image} source={{uri: url}} />
    </View>
  );
};

const ChampionItem = props => {
  return (
    <View key={props.id} style={style.container} elevation={5}>
      <ChampionItemHeader {...props} />
      <ChampionStat {...props} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ecf0f1',
    borderColor: '#c9c9c9',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  image: {
    width: 150,
    height: 120,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default ChampionItem;
