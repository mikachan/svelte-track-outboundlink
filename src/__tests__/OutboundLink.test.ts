import '@testing-library/jest-dom/extend-expect';

import OutboundLink from '../OutboundLink.svelte';
import { render } from '@testing-library/svelte';

test('correctly renders an anchor tag', () => {
	const url = 'https://www.example.com';

	const { getByRole } = render(OutboundLink, {
		href: url,
	});

	expect(getByRole('link')).toBeInTheDocument();
	expect(getByRole('link').getAttribute('href')).toEqual(url);
});
