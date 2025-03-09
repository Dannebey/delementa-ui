import { Button } from "./Button"
import {render, screen} from "@testing-library/react"

test("renders", () => {
    render(<Button />)
    expect(screen.getByText("Button"))
})
