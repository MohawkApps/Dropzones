import * as React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { Text } from 'react-native-elements'
import { spacing, color } from "../../theme"

const SPEED_LIMIT_SIGN: ViewStyle = {
  flexDirection: 'column-reverse',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 2.5,
  borderColor: color.palette.black,
  borderRadius: 6,
  padding: spacing[1] / 2,
}

const MILES_TEXT: TextStyle = {
  color: color.palette.black,
  textAlign: 'center',
  fontSize: 10,
}

const DISTANCE_TEXT: TextStyle = {
  color: color.palette.black,
  textAlign: 'center',
  fontSize: 22,
  lineHeight: 23,
  fontWeight: 'bold',
  margin: 0,
  padding: 0,
}

export interface SpeedLimitSignProps {
  distanceFromUser: string
}

export function SpeedLimitSign(props: SpeedLimitSignProps) {
  return (
    <View style={SPEED_LIMIT_SIGN}>
      <Text style={DISTANCE_TEXT}>
        {props.distanceFromUser}
      </Text>
      <Text style={MILES_TEXT}>MILES</Text>
    </View>
  )
}
