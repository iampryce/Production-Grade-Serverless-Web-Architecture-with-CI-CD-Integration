import AWS from "aws-sdk";

const ses = new AWS.SES({ region: "us-east-1" });

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const firstName = body.firstName;
    const lastName  = body.lastName;
    const email     = body.email;
    const subject   = body.subject;
    const message   = body.message;

    const params = {
      Source: "tobilead@gmail.com",
      Destination: {
        ToAddresses: ["tobilead@gmail.com"],
      },
      Message: {
        Subject: {
          Data: `Portfolio Contact: ${subject}`,
        },
        Body: {
          Text: {
            Data: `
New contact form submission:

Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}
            `,
          },
        },
      },
    };

    await ses.sendEmail(params).promise();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message: "Email sent successfully",
      }),
    };

  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message: "Failed to send email",
      }),
    };
  }
};