# gatsby-plugin-intercom-spa

Easily add Intercom to your Gatsby site.

## Install
`npm install --save gatsby-plugin-intercom-spa`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-plugin-intercom-spa',
    options: {
      app_id: 'YOUR_INTERCOM_APP_ID',
      include_in_development: true,
      delay_timeout: 0,
      exclude: [
        '/prefix'
      ]
    }
  }
]
```

## Configuration

- `app_id` - Required. Your Intercom application ID
- `include_in_development` - Optional. Defaults to `false`
- `delay_timeout` - Optional. Number of milliseconds to wait before loading the Intercom widget. Defaults to `0`

## Develop

- edit files in src/
- run `yarn build`
- profit
