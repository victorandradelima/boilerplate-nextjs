import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from '../select'

describe('<Select />', () => {
  it('should be the Select component is being exported correctly', () => {
    expect(Select).toBeDefined()
    expect(SelectContent).toBeDefined()
    expect(SelectGroup).toBeDefined()
    expect(SelectItem).toBeDefined()
    expect(SelectLabel).toBeDefined()
    expect(SelectScrollDownButton).toBeDefined()
    expect(SelectScrollUpButton).toBeDefined()
    expect(SelectSeparator).toBeDefined()
    expect(SelectTrigger).toBeDefined()
    expect(SelectValue).toBeDefined()
  })
})
