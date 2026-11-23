interface NavLink {
	text: string;
	href: string;
	isActive?: boolean; // для выделения текущей вкладки
}

interface TopBarProps {
	links: NavLink[];
}

/** Компонент панели навигации. */
export default function TopBar({ links }: TopBarProps) {
	return (
		<div className="d-flex align-items-center mb-3">
			{links.map((link, index) => (
				<a
					key={index}
					href={link.href}
					className={`me-3 text-decoration-none ${
						link.isActive
							? "link-body-emphasis fw-bold" // Стиль для активной ссылки
							: "link-secondary"             // Стиль для неактивной
					}`}
				>{link.text}</a>
			))}
		</div>
	);
}