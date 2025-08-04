const fs = require('fs');

fs.rm('./myFolder', (err) => {
    if(err){
        console.log(err);
    } else{
        console.log('Folder Created Successfully');
    }
})