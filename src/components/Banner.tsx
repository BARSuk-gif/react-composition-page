interface BannerProps {
  src: string;
  href: string;
};


/** Компонент промо бокса. */
export default function Banner({ src, href }: BannerProps) {
	return (
		<div className="text-center my-4">
			<a href={href} >
				<img src={src} alt="Banner" className="img-fluid rounded" />
			</a>						
		</div>
	);
}