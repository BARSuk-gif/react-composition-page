interface NewsItemProps {
  icon: string,
	text: string,
	link: string,
}

export default function NewsItem({ icon, text, link }: NewsItemProps) {
	return (
		<div className="d-flex align-items-start mb-2">
			<div className="me-2">{icon}</div>
			<a href={link} className="link-dark text-decoration-none">{text}</a>
		</div>
	)
}