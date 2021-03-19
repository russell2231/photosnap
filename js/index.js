const navToggler = document.querySelector('.nav__toggler');
const pricingToggleOptions = document.querySelectorAll(
	'.pricing-plans input[type="radio"]'
);

navToggler.addEventListener('click', () => {
	const nav = document.querySelector('.main-nav');
	nav.classList.toggle('expanded');
});

pricingToggleOptions.forEach((option) => {
	const prices = document.querySelectorAll('.price');
	const pricesBreakdown = document.querySelectorAll('.price-breakdown');

	option.addEventListener('click', () => {
		if (option.id === 'radio-a') {
			prices.forEach((price) => {
				price.textContent = `${price.textContent / 10}`;
			});
			pricesBreakdown.forEach((breakdown) => {
				breakdown.textContent = 'per month';
			});
		} else if (option.id === 'radio-b') {
			prices.forEach((price) => {
				price.textContent = `${price.textContent * 10}`;
			});
			pricesBreakdown.forEach((breakdown) => {
				breakdown.textContent = 'per year';
			});
		}
	});
});
