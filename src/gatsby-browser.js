const isEnabled = () => ((window.IntercomIncludeInDevelopment || process.env.NODE_ENV === `production`) && typeof Intercom === `function` && window.IntercomAppId)
const bootIntercom = () => { window.Intercom('boot', { app_id: window.IntercomAppId }) }

exports.onInitialClientRender = (_, pluginOptions) => {
  if (!isEnabled()) {
    return
  }

  const excludedPaths = pluginOptions.exclude || []
  const isExcluded = excludedPaths.find((uri) => location.pathname.startsWith(uri));

  if (isExcluded)
    return
  else
    bootIntercom()
}

exports.onRouteUpdate = function ({ location }, pluginOptions) {
  if (!isEnabled()) {
    return
  }

  const excludedPaths = pluginOptions.exclude || []
  const isExcluded = excludedPaths.find((uri) => location.pathname.startsWith(uri));

  if (isExcluded)
    window.Intercom('shutdown')
  else
    bootIntercom()
}
