'use client';

import { PATH_ROOT } from '@/site/paths';
import InfinitePhotoScroll from './InfinitePhotoScroll';
import PhotosLarge from './PhotosLarge';

export default function PhotosLargeInfinite({
  initialOffset,
  itemsPerPage,
}: {
  initialOffset: number
  itemsPerPage: number
}) {
  return (
    <InfinitePhotoScroll
      cacheKey={`page-${PATH_ROOT}`}
      initialOffset={initialOffset}
      itemsPerPage={itemsPerPage}
      wrapMoreButtonInGrid
    >
      {({ photos, onLastPhotoVisible, revalidatePhoto }) =>
        <PhotosLarge
          photos={photos}
          onLastPhotoVisible={onLastPhotoVisible}
          revalidatePhoto={revalidatePhoto}
        />}
    </InfinitePhotoScroll>
  );
}
