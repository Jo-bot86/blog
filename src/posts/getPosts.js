const path = require('path');
const fs = require('fs');

const dirPath = path.join(__dirname, '../content')
let postlist = []

const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log("Failed to list contents fo directory: " + err)
    }
    files.forEach((file, i) => {
      let obj = {}
      let post
      // reads the content of each file, typeof contents = string
      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        // find the index where the meta data starts and ends
        const getMetadataIndices = (acc, element, index) => {
          // regular expression to parse the file content
          if (/^---/.test(element)) {
            acc.push(index)
          }
          return acc
        }
        // extract the meta data
        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1] )
            metadata.forEach(line => {
              obj[line.split(": ")[0]] = line.split(": ")[1]
            })
            return obj
          }
        }

        // extract the post content
        const parseContent = ({ lines, metadataIndices }) => {
          if(metadataIndices.length > 0){
            lines = lines.slice(metadataIndices[1] + 1, lines.length)
          }
          return lines.join("\n")
        }

        //read the meta data
        //split the content of the file based on line breaks
        const lines = contents.split("\n")
        const metadataIndices = lines.reduce(getMetadataIndices, []) //returns an array with start and end index of metadata
        const metadata = parseMetadata({ lines, metadataIndices }) // returns an object with the metadata
        const content = parseContent({ lines, metadataIndices }) 
        post = {
          id: i + 1,
          title: metadata.title ? metadata.title : "no title",
          author: metadata.author ? metadata.author : "unknown author",
          date: metadata.date ? metadata.date : "no date",
          content: content ? content : "no content",
        }
        postlist.push(post)
        if( i === files.length-1){
          let data = JSON.stringify(postlist)
          fs.writeFileSync("src/posts/posts.json", data)
        }
      })
    })
  })
}

getPosts()