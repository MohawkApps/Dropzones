import * as React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { Text } from "react-native-elements"
import { color, spacing } from "../../theme"

const BADGE_CONTAINER: ViewStyle = {
  backgroundColor: color.primary,
  borderRadius: spacing[1],
}

const BADGE_TEXT: TextStyle = {
  color: color.lightText,
  fontWeight: "bold",
  margin: spacing[1],
}

export interface CountBadgeProps {
  count: number
}

export function CountBadge(props: CountBadgeProps) {
  const { count } = props

  return (
    <View style={BADGE_CONTAINER}>
      <Text style={BADGE_TEXT}>{count.toString()}</Text>
    </View>
  )
}
