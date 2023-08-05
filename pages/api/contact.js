const { Client } = require('@notionhq/client')
const nodemailer = require('nodemailer')

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
})

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Only POST requests are allowed' })
  }
  try {
    const { name, email, subject, message } = JSON.parse(req.body)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_SENDER_EMAIL,
        pass: process.env.MY_SENDER_EMAIL_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.MY_SENDER_EMAI,
      to: process.env.MY_RECEIVER_EMAIL,
      subject: `Message from ${name} | ${subject}`,
      text: `
			Hello master, you have a new message from ${name} (${email}):\n
			\n
			Subject: ${subject}
			\n
			Message: ${message}
			`,
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })

    res.status(201).json({ msg: 'Success' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Failed' })
  }
}
// export default async (req, res) => {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ msg: 'Only POST requests are allowed' });
//   }
//   try {
//     const { name, email, subject, message } = JSON.parse(req.body);
//     await notion.pages.create({
//       parent: {
//         database_id: process.env.NOTION_DATABASE_ID,
//       },
//       properties: {
//         Name: {
//           title: [
//             {
//               text: {
//                 content: name,
//               },
//             },
//           ],
//         },
//         Email: {
//           email,
//         },
//         Subject: {
//           rich_text: [
//             {
//               text: {
//                 content: subject,
//               },
//             },
//           ],
//         },
//         Message: {
//           rich_text: [
//             {
//               text: {
//                 content: message,
//               },
//             },
//           ],
//         },
//       },
//     });
//     res.status(201).json({ msg: 'Success' });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: 'Failed' });
//   }
// };
