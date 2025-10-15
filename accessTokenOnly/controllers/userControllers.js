export const renderHTML = ( req, res, next) => {
    res.send("Hello World")
}

export const users = [
    {
        username: 'Collins',
        title: 'Post 1'
    },
    {
        username: 'Reece',
        title: 'Post 2'
    }
]

export const getUser = (req, res, next) => {
    res.json(users.filter(user => user.username === req.user.name))
}
