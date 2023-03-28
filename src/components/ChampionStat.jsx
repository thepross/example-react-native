import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import StyleText from './StyleText';

const ChampionStat = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StyleText color="secundary" fontSize="body" fontWeight="bold">
          ID: {props.id}
        </StyleText>
        <StyleText style={styles.nombre}>Nombre: {props.name}</StyleText>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 15}}>
        <View>
          <StyleText align="center" fontWeight="bold" style={{fontSize: 14}}>
            Startsadads
          </StyleText>
          <StyleText align="center" style={{fontSize: 14}}>
            {props.name}
          </StyleText>
        </View>
        <View>
          <StyleText align="center" fontWeight="bold" style={{fontSize: 14}}>
            Startsadads
          </StyleText>
          <StyleText align="center" style={{fontSize: 14}}>
            {props.name}
          </StyleText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomWidth: 0.5,
    borderBottomColor: '#c9c9c9',
  },
  nombre: {
    color: '#7f8c8d',
    borderRadius: 5,
    overflow: 'hidden',
    fontWeight: 'bold',
  },
});

export default ChampionStat;
