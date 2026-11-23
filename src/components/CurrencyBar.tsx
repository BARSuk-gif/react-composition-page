interface CurrencyItem {
  name: string;
	href: string;
	currency: number;
}

interface CurrencyBarProps {
	links: CurrencyItem[];
}

/** Компонент панели курса валют. */
export default function CurrencyBar({ links }: CurrencyBarProps) {
	return (
		<div className="d-flex align-items-center mb-3">
			{links.map((link, index) => (
				<a
					key={index}
					href={link.href}
					className="me-3 text-decoration-none"
				>
					{`${link.name} ${link.currency}`}
				</a>
			))}
		</div>
	)
}