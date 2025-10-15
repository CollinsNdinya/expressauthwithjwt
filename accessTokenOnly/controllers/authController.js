import jwt from 'jsonwebtoken'

export const login = (req, res, next) => {
    const username = req.body.username

    const user = {name: username}

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.send({accessToken: accessToken})
}

export default login