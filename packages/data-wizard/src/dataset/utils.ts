import { isArray, isObject, isNumber, isString, range, assert } from '../utils';
import type { Axis } from './types';

export const isBasicType = (value: any): boolean => {
  return !isArray(value) && !isObject(value);
};

export const isAxis = (value: any): value is Axis => {
  return isNumber(value) || isString(value);
};

// generate index for 1D and 2D array
export const generateArrayIndex = (data: any[], extraIndex?: Axis[]): Axis[] => {
  assert(isArray(data), 'Data must be an array');

  if (extraIndex) {
    assert(
      extraIndex?.length === data.length,
      `Index length is ${extraIndex?.length}, but data size is ${data.length}`
    );

    return extraIndex;
  }

  return range(data.length);
};

export const flatObject = (obj, concatenator = '.') =>
  Object.keys(obj).reduce((acc, key) => {
    if (typeof obj[key] !== 'object' || obj[key] === null) {
      return {
        ...acc,
        [key]: obj[key],
      };
    }

    const flattenedChild = flatObject(obj[key], concatenator);

    return {
      ...acc,
      ...Object.keys(flattenedChild).reduce(
        (childAcc, childKey) => ({ ...childAcc, [`${key}${concatenator}${childKey}`]: flattenedChild[childKey] }),
        {}
      ),
    };
  }, {});
