import { createTransport } from 'nodemailer';
import { env } from 'process';
import { stripHtml } from 'string-strip-html';

type MailInfo = {
	html: string;
	recipient: string;
	subject: string;
};

const transporter = createTransport({
	host: env.SMTP_HOSTNAME as string,
	port: Number(env.SMTP_PORT as string),

	auth: {
		user: env.SMTP_USERNAME as string,
		pass: env.SMTP_PASSWORD as string
	}
});

export async function send({ html, recipient, subject }: MailInfo) {
	return await transporter.sendMail({
		from: env.SMTP_SENDER as string,
		to: recipient,
		subject,
		html,
		priority: 'high',
		text: stripHtml(html).result,
		textEncoding: 'quoted-printable',
		attachments: []
	});
}

send({
	recipient: 'receiver@localhost',
	subject: 'Test',
	html: '<div>123</div>'
});
