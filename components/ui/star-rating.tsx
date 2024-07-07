"use client"

import type { Dispatch, SetStateAction } from 'react'
import React from 'react'

import { ny } from '@/lib/utils'
import { IconType } from 'react-icons'
import { IconProps } from '@radix-ui/react-icons/dist/types'
import { FaStar } from 'react-icons/fa6'

interface StarWrapperProps {
   value?: number
   setValue?: Dispatch<SetStateAction<number>>
   numStars?: number
   icon?: IconType
   disabled?: boolean
   wrapperProps?: React.HTMLAttributes<HTMLDivElement>
   iconProps?: IconProps
   showcase?: boolean
}

function StarRating({
   numStars = 5,
   icon,
   setValue,
   value,
   disabled,
   showcase,
   iconProps = {},
   wrapperProps = {},
}: StarWrapperProps) {
   const { className: wrapperClassName, ...restWrapperProps } = wrapperProps
   const { className: iconClassName, ...restIconProps } = iconProps
   const IconComponent = icon

   return (
      <div className={ny('flex items-center gap-1', wrapperClassName)} {...restWrapperProps}>
         {Array.from({ length: numStars }, (_, i) => {
            const isRated = i < value!
            const styledIconProps: IconProps = {
               onMouseEnter: () => !showcase && !disabled && setValue && setValue!(i + 1),
               className: ny('size-5 fill-primary stroke-primary', {
                  'opacity-50 pointer-events-none': disabled,
                  'transition-transform duration-300 hover:scale-110': !disabled && !showcase,
                  '!fill-muted !stroke-muted': !isRated,
               }, iconClassName),
               ...restIconProps,
            }
            return (
               <div key={i}>
                  {IconComponent
                     ? (
                        <IconComponent {...styledIconProps} />
                        )
                     : (
                        <FaStar {...styledIconProps} />
                        )}
               </div>
            )
         })}
      </div>
   )
}

export { StarRating }
