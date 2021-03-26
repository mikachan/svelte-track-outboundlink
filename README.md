# svelte-track-outboundlink

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

Svelte component for tracking outbound links in analytics.

Currently works with Google Tag Manager (gtag.js).

## Install

```sh
npm i svelte-track-outboundlink -D
```

## Usage

The `OutboundLink` component will be output as an anchor tag. When clicked it will fire a [gtag.js](https://developers.google.com/analytics/devguides/collection/gtagjs/events) event with the following properties:

- Action: 'click'
- Category: 'outbound'
- Label: the `href` value
- Transport type: beacon

Import the component and use it in place of an anchor tag when linking to external pages:

```html
<script>
  import OutboundLink from "svelte-track-outboundlink";
</script>

<OutboundLink href="https://www.example.com/" class="example">Example Link</OutboundLink>
```

The following props are available:

| Name      | Type | Default | Example |
| ----------- | ----------- | ----------- |----------- |
| href      | string | `javascript:void(0);`       | `https://www.exmaple.com` |
| target   | string | `undefined`        | `_blank` |
| rel  | string | `undefined`        | `noreferrer` |