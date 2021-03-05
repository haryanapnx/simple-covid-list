import React from 'react'
import { Form } from 'react-bootstrap'

interface OptionsTypes {
  value: string
  label: string
}

interface SelectTypes {
  value: string
  options: OptionsTypes[]
  onChange: (v: string) => void
}

const SelectOptions: React.FC<SelectTypes> = ({ options, value, onChange }) => {

  const handleChange = (e: any) => {
    onChange(e.target.value)
  }

  return (
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Control onChange={handleChange} as="select">
        <option disabled value="">NONE</option>
        {options.map((item, i) => (
          <option key={i} value={item.value}>{item.label}</option>
        ))}
      </Form.Control>
    </Form.Group>
  )
}

export default SelectOptions;
