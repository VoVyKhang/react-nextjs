import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const SlugPage = (props: Props) => {
  const router = useRouter();
  console.log(router.query.slug);
  return <div>SlugPage</div>;
};

export default SlugPage;
