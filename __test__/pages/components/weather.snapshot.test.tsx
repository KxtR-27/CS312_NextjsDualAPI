/**
 * @jest-environment node
 */

import PageComponentWeather from "../../../pages/components/weather"
import { act, create } from "react-test-renderer"

describe("PageComponentWeather", () => {
    test("renders correctly", async () => {
        let component: any

        await act(async () => {
            component = create(<PageComponentWeather></PageComponentWeather>)
        })

        expect(component.toJSON()).toMatchSnapshot()
    })
})