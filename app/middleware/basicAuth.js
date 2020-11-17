const auth = require('basic-auth')

module.exports = (req, res, next) => {
    let user = auth(req);
    if (!user) {
        const error = new Error("No authorization");
        error.statusCode = 401;
        res.status(401).json({ message: "No authorization" })
        throw error;
    } else {
        if (user.name != 'oss' || user.pass != 'oss') {
            const error = new Error("No authorization");
            error.statusCode = 401;
            res.status(401).json({ message: "wrong username or password" })
            throw error;
        }
    }

    next();
}