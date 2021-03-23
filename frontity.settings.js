export default [
  {
    name: "Yugen", // The name of your site.
    state: {
      frontity: {
        url: "http://yugen.local", // Some settings.
      }
    },
    packages: [
      "@frontity/my-theme",  // And the packages of that site.
      "@frontity/tiny-router",
      "@frontity/wp-source"
    ]
  }
]