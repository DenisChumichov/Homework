const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')

const pathToFiles = path.join(__dirname, "files")


const server = http.createServer(requestHandler)

function requestHandler(req, res){
    const {pathname} = url.parse(req.url)
    let pathToFile = path.join(pathToFiles, pathname)
    pathToFile = path.normalize(pathToFile)

    if (pathToFile.indexOf(pathToFiles) != 0){
        res.statusCode = 404
        res.end("File not found")
        return
    }
    
    fs.readFile(pathToFile, (err, content) => {
        if(err){
            res.status = 404
            res.end('Not found')
        }
        else{
            res.end(content)
        }
    })
    console.log(url.parse(req.url))
}

server.listen(3001, () => console.log("Listening"))
