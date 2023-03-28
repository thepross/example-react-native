import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import StyleText from './StyleText';
import theme from '../theme';
import {Link, useLocation, useNavigate} from 'react-router-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AppBar2 = () => {
  return (
    <View style={styles.container}>
      {/* <ScrollView horizontal style={styles.scroll}> */}
      <AppBarTab to="/" icon="account">
        Campeones
      </AppBarTab>
      <AppBarTab to="/signin" icon="calculator-variant">
        Registro
      </AppBarTab>
      <AppBarTab to="/login" icon="code-braces">
        Catalogo
      </AppBarTab>
      {/* </ScrollView> */}
    </View>
  );
};

const AppBarTab = ({children, to, icon}) => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const active = pathname === to;
  const estilo = [styles.text, active && styles.active];
  const estiloIcon = [styles.icon, active && styles.active];
  return (
    <View>
      <TouchableOpacity 
        onPress={() => {
          navigate(to);
        }}>
        <View>
          <Icon name={icon} size={25} style={estiloIcon} />
          <StyleText fontWeight="bold" style={estilo}>
            {children}
          </StyleText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    paddingHorizontal: 40,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  text: {
    color: theme.colors.textInactive,
    fontSize: 14,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  scroll: {
    paddingBottom: 25,
  },
  active: {
    color: theme.colors.textActive,
  },
  icon: {
    color: theme.colors.textInactive,
    textAlign: 'center',
  },
});

export default AppBar2;
