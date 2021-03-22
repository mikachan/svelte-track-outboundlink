# svelte-track-outboundlink
Svelte component for tracking outbound links in analytics.

Currently works with Google Tag Manager.

## Install

```sh
npm i svelte-track-outboundlink
```

Use component in place of anchor tag:

And add it to your `src/routes/_layout.svelte`:

```html
<OutboundLink href="https://www.google.com/" class="example">Example Link</OutboundLink>
```