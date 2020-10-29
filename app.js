const express =require('express')
const path = require('path')

const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const config = require('dotenv').config();

const collection = "clicks";
const app =express();
// const db = require('./db');

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3001


// db.connect((err)=>{
//   if(err){
//     console.log('unable to connect to DB');
//     console.log(err);
//     process.exit(1);
//   }
//   else{
//     console.log(PORT)
//     app.listen(PORT, () => {
//       console.log(`Server listening on port ${PORT}`)
//     })
//   }
// })
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'))
  
})

// app.get('/',(req,res)=>{
//   db.getDB().collection(collection).find({}).toArray((err,documents)=>{
//     if(err)
//       console.log(err);
//     else{
//       console.log("Connection to DB Successful.")
//       console.log(documents.length);
//       res.json(documents);

//     }
//   });
// })
// app.post('/',(req,res)=>{
//   console.log("inside  post method");
//   const clicks= req.body;
//     db.getDB().collection(collection).insertOne(clicks,(err,result)=>{
//       if(err){
//         console.log("Failed to insert Todo ");
//         console.log(err);
//       }
//       else{

//         if(result.result.ok == 1){
//          db.getDB().collection(collection,function(err,collection){
//             collection.find({}).toArray(function(err, result) {
//               if (err) throw err;
//                res.json({result : result,views : result.length,error : null});
//             })
//           });
//         }
//       }
//     });
  
// })

let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
          user: process.env.USEREMAIL, // Your gmail address.
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET_ID,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: process.env.ACCESS_TOKEN,
          expires: 3600
        
      }
  });

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

app.post('/api/form',(req, res) =>{
  const name = req.body.name
  const email = req.body.email
  const subject = req.body.subject
  const message = req.body.message
  const content = `name: ${name} \n email: ${email} \n message: \n\n${message} `

  const mail = {
    from: email,
    to: 'kritikaumashankar@gmail.com',  //Change to email address that you want to receive messages on
    subject: subject,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})
