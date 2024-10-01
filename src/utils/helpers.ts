import {ThrottleCallback} from './types';

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

const formatThousandsNumber = (number: number): string => {
  if (number >= 1e9) {
    return Math.floor(number / 1e9) + 'B';
  } else if (number >= 1e6) {
    return Math.floor(number / 1e6) + 'M';
  } else if (number >= 1e3) {
    return Math.floor(number / 1e3) + 'K';
  }
  return number.toString();
};

const truncate = (str: string, maxLength: number) => {
  return str?.length > maxLength ? str.slice(0, maxLength) + '...' : str;
};

const generateAlphabets = (): string => {
  let str: string = '';
  for (let i: number = 97; i < 123; i++) {
    str += String.fromCodePoint(i);
  }
  return str;
};

const debounce = (callback: (...args: any) => void, delay: number) => {
  let timer = null;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

const throttle = (callback: ThrottleCallback, delay: number) => {
  let isThrottled = false;
  let savedArgs = null;

  return (...args: any) => {
    if (isThrottled) {
      savedArgs = args;
    } else {
      callback(...args);
      isThrottled = true;

      setTimeout(() => {
        if (savedArgs !== null) {
          callback(...savedArgs);
          savedArgs = null;
        }
        isThrottled = false;
      }, delay);
    }
  };
};

export {
  debounce,
  displayPhoneNumber,
  formatCurrency,
  formatThousandsNumber,
  formatTimer,
  generateAlphabets,
  isEmpty,
  throttle,
  truncate,
};
