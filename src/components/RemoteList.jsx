import React, { useEffect, useState } from 'react';

const RemoteList = () => {
  const [List, setList] = useState(null);

  useEffect(() => {
    const loadRemoteComponent = async () => {
      const module = await import(
        // 'http://localhost:4173/index-BgpQnNbl.js'
        'https://dzfa1uifb0sb6.cloudfront.net/buildTestjs/remote-test/index-BQ9Cp-Ld.js'
      );

      console.log(module);
      setList(() => module.List);
    };

    loadRemoteComponent().catch((err) =>
      console.error(`Failed to load remote component: ${err}`)
    );
  }, []);

  return List ? <List /> : <div>Loading...</div>;
};

export default RemoteList;
