/// <reference types="svelte" />
import { SvelteComponentTyped } from 'svelte';

export interface OutboundLinkProps
	extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['a']> {
	/**
	 * @default 'javascript:void(0);'
	 */
	href?: string;
	target?: string;
	rel?: string;
}

export default class OutboundLink extends SvelteComponentTyped<
	OutboundLinkProps,
	{
		click: WindowEventMap['click'];
		mouseover: WindowEventMap['mouseover'];
		mouseenter: WindowEventMap['mouseenter'];
		mouseout: WindowEventMap['mouseout'];
		focus: WindowEventMap['focus'];
		blur: WindowEventMap['blur'];
		keydown: WindowEventMap['keydown'];
	},
	{ default: {} }
> {}
