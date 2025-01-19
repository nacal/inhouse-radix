import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import {
  Appearance,
  Brightness,
  ImplicationColor,
  SemanticColor,
  Shape,
  Size,
  State,
  Width,
} from '../../types'
import './index.scss'

type HTMLProps = ButtonHTMLAttributes<HTMLButtonElement>
interface Props extends HTMLProps {
  appearance?: Extract<
    Appearance,
    'flat' | 'outlined' | 'solid' | 'white' | 'transparent' | 'hollow'
  >
  brightness?: Brightness
  areaLabel?: string
  body?: ReactNode
  color?:
    | Extract<SemanticColor, 'neutral' | 'negative'>
    | Extract<ImplicationColor, 'interactive' | 'favorite'>
  leading?: ReactNode
  shape?: Shape
  size?: Extract<Size, 'xs' | 's' | 'm' | 'l' | 'xl'>
  state?: Extract<State, 'enabled' | 'hover' | 'focused' | 'disabled'>
  trailing?: ReactNode
  width?: Width
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ ...props }, forwardedRef) => {
    const {
      appearance,
      brightness,
      areaLabel,
      body,
      color,
      leading,
      shape,
      size,
      state,
      trailing,
      width,
      ...rest
    } = props

    const classes = ['in-button']
    if (typeof appearance !== 'undefined') {
      classes.push(`-appearance-${appearance}`)
    }

    if (typeof brightness !== 'undefined') {
      classes.push(`-brightness-${brightness}`)
    }

    if (typeof color !== 'undefined') {
      classes.push(`-color-${color}`)
    }

    if (typeof shape !== 'undefined') {
      classes.push(`-shape-${shape}`)
    }

    if (typeof size !== 'undefined') {
      classes.push(`-size-${size}`)
    }

    if (typeof state !== 'undefined') {
      classes.push(`--${state}`)
    }

    if (typeof width !== 'undefined') {
      classes.push(`-width-${width}`)
    }

    return <button {...rest} ref={forwardedRef} className={classes.join(' ')} />
  }
)
Button.displayName = 'Button'

export { Button }
export type { Props as ButtonProps }
