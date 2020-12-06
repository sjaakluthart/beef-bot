const shouldScrollToBottom = (
  scrollHeight: number,
  scrollTop: number,
  offsetHeight: number,
  scrollOffset = 100,
): boolean => {
  const position = scrollHeight - (scrollTop + offsetHeight);

  return position < scrollOffset;
};

export default shouldScrollToBottom;
