import { Snackbar } from "./Snackbar"
import {render, screen} from "@testing-library/react"

test("renders", () => {
    render(<Snackbar />)
    expect(screen.getByText("Snackbar"))
})
