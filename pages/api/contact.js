const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Only POST requests are allowed' })
  }
  try {
    const { name, email, subject, message } = JSON.parse(req.body)

    const msg = {
      to: process.env.MY_RECEIVER_EMAIL, // Change to your recipient
      from: process.env.MY_SENDER_EMAIL, // Change to your verified sender
      subject: `Message from thesohailjafri.com contact form`,
      text: `
			Message from thesohailjafri.com contact form
			\n
			Name: ${name}
			Email: ${email}
			Subject: ${subject}
			Message: ${message}
			`,
      html: `
			Message from thesohailjafri.com contact form
			\n
			Name: ${name}
			Email: ${email}
			Subject: ${subject}
			Message: ${message}
			`,
    }
    sgMail
      .send(msg)
      .then((res) => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
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
