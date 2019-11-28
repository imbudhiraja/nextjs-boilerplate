import React from 'react';
import { Result, Button } from 'antd';
import Head from '../layouts/head';

function Error() {
  return (
    <div>
      <Head />
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" href="/">Back Home</Button>}
      />
    </div>
  );
}
export default Error;
