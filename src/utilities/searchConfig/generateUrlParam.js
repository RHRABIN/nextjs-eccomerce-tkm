
export function updateQueryParams(params) {
  const { pathname, query } = router;

  const updatedQuery = { ...query, ...params };

  // router.push({
  //   pathname,
  //   query: updatedQuery,
  // });
}