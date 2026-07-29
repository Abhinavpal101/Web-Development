const fs = require("fs");

// fs.writeFile("messages.txt", "Hello from Nodejs", (err)=> {
//     if (err) throw err;
//     console.log("The file has been saved!");
// });

// fs.writeFile("messages.txt", "Hello From Angela", (err)=>{
//     if (err) throw err;
//     console.log("File overwritten");
// });

// fs.appendFile("messages.txt", "\nAdd this line as well", (err)=>{
//     if (err) throw err;
//     console.log("Line added to the Files");
// });

fs.readFile("messages.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});