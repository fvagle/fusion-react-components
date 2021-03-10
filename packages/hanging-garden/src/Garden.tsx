import { MutableRefObject, useEffect, useCallback, UIEvent } from 'react';
import styled from 'styled-components';
import { HangingGardenColumnIndex, HangingGardenColumn, GardenController } from './models/HangingGarden';
import { getCalculatedWidth, getCalculatedHeight } from './utils';
import { useHangingGardenContext } from './renderHooks/useHangingGardenContext';
import useGarden from './renderHooks/useGarden';
import useRendererSize from './renderHooks/useRendererSize';

const GardenContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
`;

type GardenProps = {
  provideController?: MutableRefObject<GardenController | null>;
};

function Garden<T extends HangingGardenColumnIndex>({ provideController }: GardenProps) {
  const {
    pixiApp,
    container,
    canvas,
    maxRowCount,
    expandedColumns,
    columns,
    itemHeight,
    itemWidth,
    headerHeight,
    textureCaches: { clearTextureCaches, clearItemTextureCaches },
    scroll: { onScroll },
    popover: { popover },
  } = useHangingGardenContext();

  const { renderGarden } = useGarden();
  useRendererSize();

  useEffect(() => {
    if (!pixiApp.current) return;
    if (provideController) {
      provideController.current = {
        clearGarden: () => {
          clearTextureCaches();
          clearItemTextureCaches();
        },
      };
    }
  }, [pixiApp.current]);

  const handleScroll = useCallback(
    (e: UIEvent<HTMLDivElement>) => {
      onScroll(e, renderGarden);
    },
    [renderGarden, onScroll]
  );

  return (
    <GardenContainer ref={container} onScroll={handleScroll}>
      <div
        style={{
          width: getCalculatedWidth(expandedColumns, (columns as HangingGardenColumn<T>[]).length, itemWidth),
          height: getCalculatedHeight(headerHeight, itemHeight, maxRowCount),
          minWidth: '100%',
          minHeight: '100%',
        }}
      >
        <canvas ref={canvas} />
      </div>
      {popover}
    </GardenContainer>
  );
}

export default Garden;
