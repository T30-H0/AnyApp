const formatCurrency = value => {
  if (typeof value === 'number') {
    const parts = value.toFixed(0).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  return '0';
};
export {formatCurrency};
