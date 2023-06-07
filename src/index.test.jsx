/* global describe, it, jest, expect */
import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import Selection from './index'

describe('testing Selection component', () => {
	it('should render default value', () => {
		const arrayElements = [1, 2, 3]
		render(<Selection elements={arrayElements} />)
		expect(screen.getByText('Choose an option')).toBeTruthy()
		expect(screen.getByLabelText('selected_value')).toBeTruthy()
		expect(screen.getByRole('option', { name: 'Choose an option' }).selected).toBe(true)
	})
	it('should render a correct select element', () => {
		const arrayElements = [1, 2, 3]
		const title = 'Number'
		const name = 'selected_number'

		const Render = render(<Selection elements={arrayElements} title={title} name={name} />)
		expect(Render).toMatchSnapshot()
	})
	it('should trigger the function', async () => {
		const arrayElements = [1, 2, 3]
		const mockChange = jest.fn((x) => console.log(x.target.value))
		render(<Selection elements={arrayElements} onChange={mockChange} />)

		const selectComp = screen.getByTestId('test-select')
		const optionChoosed = screen.getByText('2')

		fireEvent.change(selectComp, { target: { value: '2' } })
		expect(optionChoosed.selected).toBe(true)
		expect(mockChange).toHaveBeenCalledTimes(1)
		expect(mockChange.mock.calls[0][0].target.value).toBe('2')
	})
})
