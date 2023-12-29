// // // // import ipfs from 'kubo-rpc-client'


// // // // const httpIpfs = ipfs.create({url: })

// // // // const { cid } = await client.add('Hello world!')


// // // // import { createHelia } from 'helia'
// // // // import { strings } from '@helia/strings'

// // // // const helia = await createHelia({url})
// // // // const s = strings(helia)

// // // // const myImmutableAddress = await s.add('hello world')

// // // // console.log(await s.get(myImmutableAddress))
// // // // // hello world

// // // // const IPFS = require('ipfs-http-client');
// // // // const IPFS = require('ipfs-http-client');


// // // // const ipfs = new IPFSClient({ host: '127.0.0.1', port: '5001', protocol: 'http' });


// // // // const fs = require('fs');

// // // // import ipfs from "kubo-rpc-client"
// // // import IPFS from "ipfs-mini";

// // // const ipfs = new IPFS({ host: '34.205.8.45', port: 5001, protocol: 'http',  });





// // ipfs.add("fileBuffer", (err, result) => {
// //     if (err) {
// //       console.error('Error uploading file to IPFS:', err);
// //     } else {
// //       const cid = result;
// //       console.log('File uploaded to IPFS with CID:', cid);
// //       // You can use this CID to retrieve the file or share it with others
// //     }
// //   });


// import { createHelia } from 'helia'
// import { strings } from '@helia/strings'

// const helia = await createHelia()
// const s = strings(helia)

// const myImmutableAddress = await s.add('hello world')

// console.log(myImmutableAddress)
// // hello world


// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const app = express();
// const port = 3000;

// // Set up storage for multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'D:/shubham/'); // Destination folder for file uploads
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     cb(null, `${Date.now()}${ext}`);
//   },
// });

// const upload = multer({ storage: storage });

// // Serve static files from the 'uploads' directory
// app.use('/uploads', express.static('uploads'));

// // Handle file upload
// app.post('/upload', upload.single('file'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).send('No file uploaded.');
//   }

//   const filePath = req.file.path;
//   res.status(200).json({ message: 'File uploaded successfully', filePath });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

import { create } from 'kubo-rpc-client'

// connect to the default API address http://localhost:5001
// const client = create()

// // connect to a different API
// const client = create({ url: "http://127.0.0.1:5002/api/v0" });

// // connect using a URL
// const client = create(new URL('http://127.0.0.1:5002'))

// call Core API methods
const { cid } = await client.add('Hello world!')
