import React from 'react';

import AsideAccess from '@/components/feed/aside-access';
import AsideMostPopular from '@/components/feed/aside-most-popular';

export default function Feed() {
  return (
    <main className="grid max-w-[1400px] mx-auto grid-cols-12 gap-6 py-20">
      <div className="col-span-3">
        <AsideMostPopular />
      </div>
      <div className="col-span-6">Conteudo</div>
      <div className="col-span-3">
        <AsideAccess />
      </div>
    </main>
  );
}
