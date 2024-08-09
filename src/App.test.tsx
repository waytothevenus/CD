import { describe, expect, it } from 'vitest';
import { render, screen } from './utils/test-utils/test-utils.jsx';

import App from './App.jsx';

describe('App', async () => {
	it('should render while authenticating', () => {
		render(<App />);

		expect(screen.getByText('Vite + Reactooooo')).toBeInTheDocument();
	});
});