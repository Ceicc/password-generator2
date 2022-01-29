const
http = require("node:http"),
range = require("@ceicc/range")

http.createServer((req, res) => {
  if (req.url === "/")
    return range('./public/index.html', res)
  range('./public' + req.url, res, { notFound: true })
}).listen(8080, () => console.log("localhost:8080 is running"))