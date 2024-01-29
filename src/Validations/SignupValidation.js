const z = require("zod")

const SignupValidation = z.object({
    fname: z.string({ required_error: "first name is required" }).trim().min(3, "first name greater than 3 chars"),
    lname: z.string({ required_error: "last name is required" }).trim().min(3, "last name greater than 3 chars"),
    email: z.string({ required_error: "email is required" }).trim().email({ message: "Invalid email" }).min(3, "email greater than 3 chars"),
    password: z.string({ required_error: "password is required" }).trim().min(4, "password at least 4 chars").max(8)
})

module.exports = SignupValidation