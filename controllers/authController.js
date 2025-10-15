import jwt from 'jsonwebtoken'

let refreshTokens = []

export const logOut = (req, res, next) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
}

export const login = (req, res, next) => {
    //authenticate user
    const username = req.body.username

    const user = {name: username}

    const accessToken = generateAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    refreshTokens.push(refreshToken)
    res.json({ accessToken: accessToken, refreshToken : refreshToken})
}

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15s'})
}

export const token = (req, res, next) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if(err) res.sendStatus(403)
        const accessToken = generateAccessToken( { name: user.name })
        res.json( { accessToken}) 
    })
}
