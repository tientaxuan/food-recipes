/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
'use client';

export function log(...args: any[]) {
  if (process.env.NODE_ENV === 'development') {
    return console.log(...args);
  }
}

interface Props {
  data: any;
}

const ClientLog = (props: Props) => {
  log(props?.data);
  return null;
};

export default ClientLog;
