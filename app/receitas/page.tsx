import React from 'react';

import AsideAccess from '@/components/feed/aside-access';
import AsideMostPopular from '@/components/feed/aside-most-popular';
import FeedContent from '@/components/feed/feed-content';

export default function Feed() {
  return (
    <main className="grid max-w-[1400px] mx-auto grid-cols-12 gap-6 py-20 relative">
      <div className="col-span-3">
        <AsideMostPopular />
      </div>
      <div className="col-span-6">
        <FeedContent />
      </div>
      <div className="col-span-3">
        <AsideAccess />
      </div>
    </main>
  );
}
