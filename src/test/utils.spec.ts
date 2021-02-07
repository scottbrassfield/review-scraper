import { isNumber, isString } from "../utils"

describe("isNumber", () => {
  it("should return true if number is passed", () => {
    expect(isNumber(1)).toBe(true)
  })
  it("should return false if a non-number is passed", () => {
    expect(isNumber("notNumber")).toBe(false)
  })
})

describe("isString", () => {
  it("should return true if string is passed", () => {
    expect(isString("string")).toBe(true)
  })
  it("should return false if a non-string is passed", () => {
    expect(isString({})).toBe(false)
  })
})
