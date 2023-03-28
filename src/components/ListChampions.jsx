import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import champions from '../data/champions.jsx';
import theme from '../theme.js';
import ChampionItem from './ChampionItem.jsx';

const ListChampions = () => {
  // console.log(champions);

  const renderItems = ({item: champion}) => {
    return <ChampionItem {...champion} />;
  };

  return (
    <View>
      <Text style={styles.text}>Lista de Campeones </Text>
      <FlatList
        data={champions}
        contentContainerStyle={{paddingBottom: 210, flexGrow: 1}}
        renderItem={renderItems}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginHorizontal: 10,
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary
  },
});

export default ListChampions;
