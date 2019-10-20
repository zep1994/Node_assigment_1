const http = require('http')

const requestHandler = (req, res) => {
    console.log(req)
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write("<html>HEllO</html>")
    res.end()
}

module.exports = requestHandler