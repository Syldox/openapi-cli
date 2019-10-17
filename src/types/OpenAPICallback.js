/* eslint-disable import/no-cycle */
import { OpenAPIPathItem } from './OpenAPIPaths';

export const OpenAPICallback = {
  name: 'OpenAPICallback',
  isIdempotent: true,
  properties(node) {
    const props = {};
    Object.keys(node).forEach((k) => {
      props[k] = OpenAPIPathItem;
    });
    return props;
  },
};


export const OpenAPICallbackMap = {
  name: 'OpenAPICallbackMap',
  isIdempotent: true,
  properties(node) {
    const props = {};
    Object.keys(node).forEach((k) => {
      props[k] = OpenAPICallback;
    });
    return props;
  },
};