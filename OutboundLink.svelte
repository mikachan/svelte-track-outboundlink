<script lang="ts">
	export let href: string = 'javascript:void(0);';
	export let target: string = undefined;
	export let rel: string = undefined;

	function trackLink() {		
		if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
            (window as any).gtag('event', 'click', {
                event_category: 'outbound',
                event_label: href,
                transport_type: 'beacon',
            });
		}
	}
</script>

<a
    {...$$restProps}
    {href}
    {target}
    {rel}
    on:click={() => { trackLink(); }}
    on:mouseover
    on:mouseenter
    on:mouseout
    on:focus
    on:blur
    on:keydown>
    <slot />
</a>
