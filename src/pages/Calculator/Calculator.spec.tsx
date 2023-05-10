import {cleanup, fireEvent, render, screen}  from "@testing-library/react"
import {afterEach, describe, expect, it} from "vitest"
import { Calculator, equalSign, numbers, operations } from "./Calculator"

describe("Calculator", () => {

  afterEach(cleanup)

  it("should render", () => {
    render(<Calculator />)
  })

  it("should render title correctly", () => {
    render(<Calculator />)

   screen.getByText("Calculator")
  })

  it("should render the numbers", () => {
    render(<Calculator />)

   numbers.forEach(number => {
     screen.getByText(number)
   })
   
  })

  it("should render 4 rows", () => {
    render(<Calculator />)

    const rows = screen.getAllByRole("row")

    expect(rows).toHaveLength(4)
   
  })

  it("should render operations", () => {
    render(<Calculator />)

    operations.forEach(operation => {
      screen.getByText(operation)
    })
   
  })

  it("should render equal sign", () => {
    render(<Calculator />)
    screen.getByText(equalSign)
   
  })

  it("should render input", () => {
    render(<Calculator />)
    screen.getAllByRole("textbox")
   
  })

  it("should render user input when the user clicking on numbers", () => {
    render(<Calculator />)

    const one = screen.getByText("1")
    fireEvent.click(one)
    const two = screen.getByText("2")
    fireEvent.click(two)
    const three = screen.getByText("3")
    fireEvent.click(three)


    const input = screen.getByRole("textbox")

    expect(input.value).toBe("123")
   
  })

  it("should render user input when the user clicking on numbers and operations", () => {
    render(<Calculator />)

    const one = screen.getByText("1")
    fireEvent.click(one)
    const plus = screen.getByText("+")
    fireEvent.click(plus)
    const three = screen.getByText("3")
    fireEvent.click(three)


    const input = screen.getByRole("textbox")

    expect(input.value).toBe("1+3")
   
  })

  it("should render the correctly result", () => {
    render(<Calculator />)

    const one = screen.getByText("1")
    fireEvent.click(one)
    const plus = screen.getByText("+")
    fireEvent.click(plus)
    const three = screen.getByText("3")
    fireEvent.click(three)

    const equal = screen.getByText("=")
    fireEvent.click(equal)


    const input = screen.getByRole("textbox")

    expect(input.value).toBe("4")
   
  })

  it("should render the correctly result", () => {
    render(<Calculator />)

    const one = screen.getByText("5")
    fireEvent.click(one)
    const plus = screen.getByText("*")
    fireEvent.click(plus)
    const three = screen.getByText("7")
    fireEvent.click(three)

    const equal = screen.getByText("=")
    fireEvent.click(equal)


    const input = screen.getByRole("textbox")

    expect(input.value).toBe("35")
   
  })
})