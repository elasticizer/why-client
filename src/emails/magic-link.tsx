import { Body, Button, Container, Head, Heading, Hr, Html, Img, Link, Preview, Section, Text } from '@react-email/components';
import { env } from 'process';

interface MagicLinkEmailProps {
	link: string;
}

export default function MagicLinkEmail({ link }: MagicLinkEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>您的 Why Academy 登入連結</Preview>

			<Body style={main}>
				<Container style={container}>
					<Img
						src={`${env.APP_URL}/image/why_mini_icon.png`}
						width="40"
						height="40"
						alt="Why Academy"
						style={logo}
					/>
					<Heading style={heading}>您的 Why Academy 登入連結</Heading>
					<Section style={buttonContainer}>
						<Button style={button} href={link}>
							登入
						</Button>
					</Section>
					<Text style={paragraph}>此登入連結將於 15 分後失效。</Text>
					<Text style={paragraph}>如果無法點擊上方登入按鈕，請您直接複製下方連結至網址列：</Text>
					<code style={code}>{link}</code>
					<Hr style={hr} />
					<Link href={env.APP_URL} style={reportLink}>Why Academy</Link>
				</Container>
			</Body>
		</Html>
	);
}

const logo = {
	borderRadius: 21,
	width: 42,
	height: 42,
};

const main = {
	backgroundColor: '#ffffff',
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};

const container = {
	margin: '0 auto',
	padding: '20px 0 48px',
	maxWidth: '560px'
};

const heading = {
	fontSize: '24px',
	letterSpacing: '-0.5px',
	lineHeight: '1.3',
	fontWeight: '400',
	color: '#484848',
	padding: '17px 0 0'
};

const paragraph = {
	margin: '0 0 15px',
	fontSize: '15px',
	lineHeight: '1.4',
	color: '#3c4149'
};

const buttonContainer = {
	padding: '27px 0 27px'
};

const button = {
	backgroundColor: '#5e6ad2',
	borderRadius: '3px',
	fontWeight: '600',
	color: '#fff',
	fontSize: '15px',
	textDecoration: 'none',
	textAlign: 'center' as const,
	display: 'block',
	padding: '11px 23px'
};

const reportLink = {
	fontSize: '14px',
	color: '#b4becc'
};

const hr = {
	borderColor: '#dfe1e4',
	margin: '42px 0 26px'
};

const code = {
	fontFamily: 'monospace',
	fontWeight: '700',
	padding: '1px 4px',
	backgroundColor: '#dfe1e4',
	letterSpacing: '-0.3px',
	fontSize: '21px',
	borderRadius: '4px',
	color: '#3c4149',
	wordBreak: 'break-all' as const
};
