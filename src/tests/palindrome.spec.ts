import {describe, expect, test} from "vitest"
import { palindrome } from "./palindrome"

// test("palindrome", () => {
//   const result = palindrome("testing")

//   expect(result).toBe("gnitset")
// })

// test("palindrome of empty string", () => {
//   const result = palindrome("")

//   expect(result).toBe("")
// })

describe("palindrome", () => {

 test("of empty string", () => {
  const result = palindrome("")

  expect(result).toBe("")
})

 test("of string", () => {
  const result = palindrome("testing")

  expect(result).toBe("gnitset")
})

 test("of string with spaces", () => {
  const result = palindrome("workshop testing")

  expect(result).toBe("gnitset pohskrow")
})
})