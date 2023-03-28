import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import theme from '../theme';

const StyleText = ({children, color, fontSize, fontWeight, align, style, ...restOfProps}) => {
    const textStyle = [
        style2.text,
        color == 'primary' && style2.colorPrimary,
        color == 'secundary' && style2.colorSecundary,
        fontSize == 'subheading' && style2.subheading,
        fontWeight == 'bold' && style2.bold,
        align == 'center' && style2.textAlignCenter,
        style
    ];
  return (
      <Text style={textStyle} {...restOfProps}>{children}</Text>
  )
}

const style2 = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.subheading,
        color: theme.colors.primary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    bold:  {
         fontWeight: theme.fontWeights.bold
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecundary: {
        color: theme.colors.textSecundary
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    textAlignCenter: {
        textAlign: 'center',
    }
});

export default StyleText