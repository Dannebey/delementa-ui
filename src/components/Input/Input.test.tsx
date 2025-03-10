import { Input } from "./Input"
import {render, screen} from "@testing-library/react"

test("renders", () => {
    render(<Input />)
    expect(screen.getByText("Input"))
})
