# svelte-track-outboundlink
Svelte component for tracking outbound links in analytics.

Currently works with Google Tag Manager.

## Install

```sh
npm i svelte-track-outboundlink
```

Use component in place of anchor tag:

```html
<script>
  import OutboundLink from "svelte-track-outboundlink";
</script>

<OutboundLink href="https://www.example.com/" class="example">Example Link</OutboundLink>
```