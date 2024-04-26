/* eslint-disable react/no-unstable-nested-components */
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import { useFocusEffect } from '@react-navigation/native'
import theme from '@root/styles/theme'
import React, { forwardRef, memo, useCallback, useRef } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleProp,
  View,
  ViewProps,
} from 'react-native'

export type AppModalContainerRef = BottomSheetMethods

interface AppModalContainerProps {
  children?: React.ReactNode
  snapPoints?: Array<string | number>
  containerStyle?: StyleProp<ViewProps>
  contentContainerStyle?: StyleProp<ViewProps>
  noScrollable?: boolean
  initialSnapPointIndex?: number
  showSheetHandleComponent?: boolean
}

export const AppModalContainer = memo(
  forwardRef<AppModalContainerRef, AppModalContainerProps>(
    (props, sheetRef) => {
      const {
        children,
        snapPoints = Platform.OS === 'ios' ? ['90%'] : ['87%'],
        containerStyle,
        contentContainerStyle,
        noScrollable,
        initialSnapPointIndex = 0,
        showSheetHandleComponent,
      } = props

      const schollViewRef = useRef<ScrollView>(null)

      useFocusEffect(
        useCallback(() => {
          schollViewRef?.current?.scrollTo?.({ y: 0, animated: true })
        }, []),
      )

      const BottomSheetBackground = ({
        style,
      }: {
        style?: StyleProp<ViewProps>
      }) => (
        <View
          style={[
            style,
            {
              backgroundColor: theme.COLORS.dark.shape,
              borderRadius: 25,
            },
          ]}
        />
      )

      return (
        <BottomSheet
          index={initialSnapPointIndex}
          ref={sheetRef}
          snapPoints={snapPoints}
          style={[{ padding: 2 }, containerStyle]}
          backgroundComponent={(currentProps) => (
            <BottomSheetBackground {...currentProps} />
          )}
          {...(showSheetHandleComponent ? {} : { handleComponent: null })}
        >
          <KeyboardAvoidingView
            enabled={Platform.OS === 'ios'}
            style={{ flex: 1 }}
            behavior="padding"
            keyboardVerticalOffset={100}
          >
            {noScrollable ? (
              <View style={{ flex: 1 }}>{children}</View>
            ) : (
              <BottomSheetScrollView
                ref={schollViewRef}
                bounces={false}
                showsVerticalScrollIndicator={true}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={[
                  { paddingBottom: 20, paddingTop: 20 },
                  contentContainerStyle,
                ]}
              >
                {children}
              </BottomSheetScrollView>
            )}
          </KeyboardAvoidingView>
        </BottomSheet>
      )
    },
  ),
)
