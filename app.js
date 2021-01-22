const express =require('express')
const path = require('path')

const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail')
const app =express();
const config=require('dotenv').config();

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`)
 });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'))
  
})

app.post('/api/form',async function(req,res){
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const { name,email, message } = req.body
  const content = {
    to: 'kritikaumashankar@gmail.com',
    from: 'kritikaumashankar@gmail.com',
    subject: `New Message From - ${name}`,
    reply_to: email,
    text: message,
    html: `<div style = {{fonr-size: '1rem'}}>
              <p>${message}</p><br>
              <p>Email: <strong>${email}</strong></p>
           </div>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
});