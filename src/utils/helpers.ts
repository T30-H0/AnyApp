const formatCurrency = value => {
  if (typeof value === 'number') {
    const parts = value.toFixed(0).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  return '0';
};
const isEmpty = (value: any): boolean => {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === 'string' && value.trim() === '') {
    return true;
  }

  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  if (typeof value === 'object' && Object.keys(value).length === 0) {
    return true;
  }

  return false;
};

const displayPhoneNumber = (numberString: string): string => {
  const reversedString = numberString.split('').reverse().join('');
  const groupedString = reversedString.match(/.{1,3}/g)?.join(' ') || '';
  return groupedString.split('').reverse().join('');
};

export {displayPhoneNumber, formatCurrency, isEmpty};
