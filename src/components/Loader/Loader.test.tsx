import { Loader } from "./Loader"
import {render, screen} from "@testing-library/react"

test("renders", () => {
    render(<Loader />)
    expect(screen.getByText("Loader"))
})
