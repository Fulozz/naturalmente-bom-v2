
const generateSlug = require('../generateSlug');


describe("Should auto generate an slug using the title",()=> {
    test("transform title to slug",()=>{
        const title = "Fruits and Vegetables"
        expect(generateSlug(title)).toBe("fruits-and-vegetables")
    })
})