export const formatJSON = (obj: unknown): string => {
  return JSON.stringify(obj, null, 2);
};
