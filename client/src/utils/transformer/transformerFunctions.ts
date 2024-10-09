export const transformerFunctions = (state) => ({
  printUrl: () => {
    console.log(
      `Original URL: ${state.originalUrl}, Transformed URL: ${state.transformedUrl}`
    );
  },

  printTransformedUrl: () => {
    console.log(state.TransformedUrl);
  },

  changeUrl: () => {
    state.transformedUrl = "otraURLalaverga";
  },
});
