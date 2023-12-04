import { NextResponse } from "next/server"
export async function POST(req,res){
  const data  = await req.json()
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port:465,
    host:"ignytessoft.com",
    auth:{
      user:'info@ignytessoft.com',
      pass:'ignytestech123',

    },
    secure:true,
  })
  const mailData = {
    from: `${data.email}`,
    to: 'info@ignytessoft.com',
    subject: "New Customer",
    text: " | Sent from: " + data.name + " | Email: " + data.email,
    html: `<div>Name: <h4>${data.name}</h4></div><p>Sent from:
    ${data.email}</p><p>message: ${data.message}</p>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  // res.status(200)

  


  return NextResponse.json(data)
}