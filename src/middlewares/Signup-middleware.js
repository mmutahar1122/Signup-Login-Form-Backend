const signupValidatemiddleware = (schema) => async (req, res, next) => {

    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next()
    } catch (err) {
        const status = 400
        const message = err.errors[0].message
        
        const error_message = {
            status,
            message,
        }
        
        next(JSON.stringify(error_message))
        // res.status(400).json({ message: err })
    }

}

module.exports = signupValidatemiddleware