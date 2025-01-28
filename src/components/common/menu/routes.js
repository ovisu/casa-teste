export const routes = [
	{
		title: "Home",
		href: "#",
		
	},
	{
		title: "About Us",
		href: "about-us",
	},
	{
		title: "Pages",
		href: "#",
		subRoutes: [
			{
				title: "About Us",
				href: "about-us",
			},
			{
				title: "Pricing",
				href: "pricing",
			},
			{
				title: "Service",
				href: "#",
				subRoutes: [
					{
						title: "Service",
						href: "service",
					},
					{
						title: "Service Details",
						href: "single-service",
					},
				],
			},
		],
	},
	

];
