export const capitalizeTitle = (title: string | undefined) => {
    if (!title) return 'Food Recipe';
    return title
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
};