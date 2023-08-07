const Mailjet = require('node-mailjet')
const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE,
)
// mailjet
export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Only POST requests are allowed' })
  }
  try {
    const { name, email, subject, message } = JSON.parse(req.body)

    const request = mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: process.env.MY_SENDER_EMAIL,
            Name: 'No Reply',
          },
          To: [
            {
              Email: process.env.MY_RECEIVER_EMAIL,
              Name: 'Sohail Jafri',
            },
          ],
          Subject: `Message from thesohailjafri.com contact form`,
          TextPart: `
							Name: ${name}
							\n
							Email: ${email}
							\n
							Subject: ${subject}
							\n
							Message: ${message}
							`,
          HTMLPart: `
							<p><b>Name:</b> ${name}</p>
							<p><b>Email:</b> ${email}</p>
							<p><b>Subject:</b> ${subject}</p>
							<p><b>Message:</b> ${message}</p>
							`,
        },
      ],
    })

    request
      .then((result) => {
        console.log(result.body)
      })
      .catch((err) => {
        console.log('Fuckkkkkkk')
        console.log({ err })
      })

    res.status(201).json({ msg: 'Success' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Failed' })
  }
}
