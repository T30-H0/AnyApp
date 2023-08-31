const formatCurrency = (value: string | number) => {
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

const formatTimer = (milliseconds: number) => {
  const seconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const formattedTime = `${String(hours).padStart(2, '0')}:${String(
    minutes,
  ).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
  return formattedTime;
};

function formatThousandsNumber(number: number): string {
  if (number >= 1000000000) {
    return Math.floor(number / 1000000000) + 'B';
  } else if (number >= 1000000) {
    return Math.floor(number / 1000000) + 'M';
  } else if (number >= 1000) {
    return Math.floor(number / 1000) + 'K';
  }
  return number.toString();
}

export {
  displayPhoneNumber,
  formatCurrency,
  formatThousandsNumber,
  formatTimer,
  isEmpty,
};
