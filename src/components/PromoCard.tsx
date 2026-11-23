interface ImageProps {
  src: string;
	alt?: string;
};

interface PromoCardProps {
  img: ImageProps
  title: string,
	link: string,
  text: string,
}

/** Компонент промо бокса. */
export default function PromoCard({img, title, link, text}: PromoCardProps) {
	return (
		<div className="text-center">
			<img src={img.src} alt={img.alt} className="rounded-circle mb-2" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
			<div>
				<a href={link} className="link-primary text-decoration-none fw-bold">{title}</a>							
			</div>
			<div className="text-secondary small">{text}</div>
		</div>
	);
}