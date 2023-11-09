export type ObjectValidationSuccessResult<T> = {
  success: true;
  payload: T;
};

export type ObjectValidationFailResult = {
  success: false;
  reasons: { [key: string]: string }[];
};
