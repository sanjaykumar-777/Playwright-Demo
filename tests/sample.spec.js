const {test,expect} = require('@playwright/test')

test("My First Test", async function ({page}){   //page is a fixture provided by Playwright 
  expect(7).toBe(7)
})

test.skip("My Second Test", async function ({page}){
  expect(7).toBe(9) // This will fail
})

test("My Third Test", async function ({page}){
  expect("sanjay kumar").toContain("sanjay") // This will pass
})

test("My Fourth Test", async function ({page}){
  expect(true).toBeTruthy() // This will pass
})

test("My Fifth Test", async function ({page}){
  expect("sanjay kumar".includes("kumar")).toBeTruthy() // This will pass
})