const { Client } = require('@notionhq/client')
const Mailjet = require('node-mailjet')

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
})

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Only POST requests are allowed' })
  }
  try {
    const { name, email, subject, message } = JSON.parse(req.body)

    const mailjet = new Mailjet({
      apiKey: process.env.MJ_APIKEY_PUBLIC,
      apiSecret: process.env.MJ_APIKEY_PRIVATE,
    })

    const request = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: process.env.MJ_SENDER_EMAIL,
            Name: 'Contact Via TSJ',
          },
          To: [
            {
              Email: process.env.MY_RECEIVER_EMAIL,
              Name: 'Sohail Jafri',
            },
          ],
          Subject: `Message from ${name} | ${subject}`,
          TextPart: '',
          HTMLPart: '',
        },
      ],
    })

    request
      .then((result) => {
        console.log(result.body)
      })
      .catch((err) => {
        console.log({ err })
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
