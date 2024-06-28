import { FC } from 'react'
import * as RadixSelect from '@radix-ui/react-select'
import { IoIosArrowDown } from 'react-icons/io'
import { Button } from './Button'

type SelectItem = {
  label: string
  value: string
}

interface SelectProps {
  items: SelectItem[]
  defaultValue?: string
}

export const Select: FC<SelectProps> = ({ items, defaultValue }) => {
  return (
    <RadixSelect.Root defaultValue={defaultValue}>
      <RadixSelect.Trigger>
        <Button className='flex items-center gap-1' variant='secondary'>
          <RadixSelect.Value />
          <RadixSelect.Icon>
            <IoIosArrowDown />
          </RadixSelect.Icon>
        </Button>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          position='popper'
          className='rounded-md bg-white p-2 shadow-lg'
        >
          <RadixSelect.ScrollUpButton />
          <RadixSelect.Viewport>
            {items.map(({ label, value }) => (
              <RadixSelect.Item
                value={value}
                className='my-2 cursor-pointer rounded-md px-2 py-1 outline-none transition-colors duration-200 hover:bg-gray-100'
              >
                <RadixSelect.ItemText>{label}</RadixSelect.ItemText>
                <RadixSelect.ItemIndicator />
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton />
          <RadixSelect.Arrow />
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}
