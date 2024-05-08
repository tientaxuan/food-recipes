/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
'use client';

interface Props {
  data: any;
}

const ClientLog = (props: Props) => {
  console.log(props?.data);
  return <></>;
};

export default ClientLog;
