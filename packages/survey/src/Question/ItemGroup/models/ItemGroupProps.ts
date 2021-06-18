import { UseCheckboxGroupProps, UseRadioGroupProps } from '@chakra-ui/react'
import { ItemProps, OptionObj } from '../../Item'

export type ItemGroupProps = {
  /* which type we should use */
  itemType: 'checkbox' | 'radio'
  /* all available options */
  options: OptionObj[]
  /* direction of the group */
  direction?: 'vertical' | 'horizontal'
  /* max columns to use (when images are used) */
  maxColumns?: number
} & Pick<ItemProps, 'activeColor' | 'withLabels' | 'withImages'> &
  Pick<UseRadioGroupProps, 'name' | 'defaultValue' | 'onChange'> &
  Pick<UseCheckboxGroupProps, 'defaultValue' | 'onChange'>