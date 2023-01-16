import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import { palette } from '../styles/palette'

interface ButtonProps {
  text: string
  onPress: () => void
  height?: number
  width?: number
  textAlign?: 'string'
  fontSize?: number
  flex?: number
  loading?: boolean
  disabled?: boolean
  customTextStyle?: string
  marginTop?: boolean
  marginBottom?: boolean
  marginLeft?: number
  marginRight?: number
  marginRigh?: number
  paddingLeft?: number
  fontWeight?: string
  borderRadius ?: number
  justifyContent?: string
  typeButton?: string
}

const ButtonDefault = ({
  text,
  onPress,
  height,
  width,
  textAlign,
  fontSize,
  flex,
  loading,
  disabled,
  customTextStyle,
  marginTop,
  marginBottom,
  marginLeft = 0,
  marginRight = 0,
  paddingLeft = 0,
  fontWeight = 'bold',
  borderRadius = 10,
  justifyContent = 'center',
  typeButton = 'primary',
}: ButtonProps) => {
  return (
    <TouchableRipple
      disabled={disabled || loading}
      style={[
        {
          height: height || 53,
          flex,
          marginTop,
          marginBottom,
          marginLeft,
          marginRight,
          borderRadius,
          justifyContent,
          paddingLeft: paddingLeft,
          flexDirection: 'row',
          alignItems: 'center',
          width: width || '100%',
        },
        // @ts-ignore
        styles[`btn_${typeButton}`],
      ]}
      onPress={onPress}
    >
      <>
        <Text
          style={[
            {
              textAlign: textAlign || 'center',
              fontSize: fontSize || 16,
              marginLeft: 0,
              fontWeight,
            },
            // @ts-ignore
            styles[`text_${typeButton}`],
            customTextStyle,
          ]}
        >
          {text}
        </Text>
      </>
    </TouchableRipple>
  )
}

const styles = StyleSheet.create({
  btn_disabled: {
    backgroundColor: palette.blackDisabled,
  },
  text_disabled: {
    color: palette.blackDisabled,
  },
  btn_primary: {
    backgroundColor: palette.primary500,
  },
  text_primary: {
    color: palette.white,
  },
  btn_inline: {
    backgroundColor: palette.white,
    borderWidth: 1,
    borderColor: palette.primary500,
  },
  text_inline: {
    color: palette.primary500,
  },
  btn_inline_red: {
    borderColor: palette.red,
    borderWidth: 1,
  },
  text_inline_red: {
    color: palette.red,
  },
  btn_outline_success: {
    borderColor: palette.primary500,
    borderWidth: 1,
  },
  text_outline_success: {
    color: palette.primary500,
  },
})

export default ButtonDefault
