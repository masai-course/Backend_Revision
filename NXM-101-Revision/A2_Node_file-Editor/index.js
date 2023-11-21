const fs = require("fs/promises");
const {unlink} = require("fs/promises");
const path = require("path");
const os = require("os");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  // complete the fillowing function.
  case "read":
    readMyFile();
    break;
  case "delete":
    deleteMyFile(file);
    break;
  case "create":
    writeMyFile(file,content);
    break;
  case "append":
    appendMyFile(file,content);
    break;
  case "rename":
    renameMyFile(file,content);
      break;
  case "list":
    listAllFiles(file,);
      break;

  default:
    console.log(`Invalid operation '${operation}'`);
}

async function readMyFile() {
  try {
    const data = await fs.readFile("test.txt", { encoding: "utf8" });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

async function deleteMyFile(path) {
  try {
    await unlink(path);
    console.log(`successfully deleted ${path}`);
  } catch (error) {
    console.error('there was an error:', error.message);
  }
}

async function writeMyFile(path){
try{
  await fs.writeFile(path,content+os.EOL,{encoding: "utf8"})
  console.log(`file Created Successfully ${path}`)
}
catch(err){
  console.log(err)
}

}
async function appendMyFile(path,content){
  try{
    await fs.appendFile(path,`\n${content}`,{encoding: "utf8"})
    console.log(`File appended Successfully ${path}`)
  }
  catch(err){
    console.log(err)
  }
  
  }
  async function renameMyFile(oldPath,newPath){
    try{
      await fs.rename(oldPath,newPath)
      console.log(`File renamed Successfully ${newPath}`)
    }
    catch(err){
      console.log(err)
    } 
    }

    async function listAllFiles(path){
      try{
        const files = await fs.readdir(path);
        for (const file of files)
          console.log(file);
      }
      catch(err){
        console.log(err)
      } 
}