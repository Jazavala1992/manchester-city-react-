import React, { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
    {
        src: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw094e7784/images/large/701230953BV001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit',
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
    },
    {
        src: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw2c7f52cb/images/large/701225144001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit',
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
    },
    {
        src: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw19a0f294/images/large/701230942001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit',
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3,
    },
    {
        src: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw1e01a078/images/large/701226635001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit',
        altText: 'Slide 4',
        caption: 'Slide 4',
        key: 4,
    },
    {
        src: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dwdb19f22d/images/large/701230293001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit',
        altText: 'Slide 5',
        caption: 'Slide 5',
        key: 5,
    },
    {
        src: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw111ac872/images/large/701230971AY001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit',
        altText: 'Slide 6',
        caption: 'Slide 6',
        key: 6,
    },
    {
        src: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw5a47e503/images/large/701228892001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit',
        altText: 'Slide 7',
        caption: 'Slide 7',
        key: 7,
    },
    {
        src: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw39e2a648/images/large/701222812001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit',
        altText: 'Slide 8',
        caption: 'Slide 8',
        key: 8,
    },
    {
        src: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dwae46a47b/images/large/701230945001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit',
        altText: 'Slide 9',
        caption: 'Slide 9',
        key: 9,
    },
    {
        src: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dwa9238067/images/large/701230876CK001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit',
        altText: 'Slide 10',
        caption: 'Slide 10',
        key: 10,
    },
    {
        src: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw0ebcce6f/images/large/701220775001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit',
        altText: 'Slide 11',
        caption: 'Slide 11',
        key: 11,
    },
];

function Carrusel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex -1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

const slides = items.map((item) => {
    return (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
        >
            <div className="d-flex justify-content-between">
                <img
                    src={item.src}
                    alt={item.altText}
                    style={{ width: '200px', height: '200px' }}
                />
                <img
                    src={items[(items.indexOf(item) + 1) % items.length].src}
                    alt={items[(items.indexOf(item) + 1) % items.length].altText}
                    style={{ width: '200px', height: '200px' }}
                />
                <img
                    src={items[(items.indexOf(item) + 2) % items.length].src}
                    alt={items[(items.indexOf(item) + 2) % items.length].altText}
                    style={{ width: '200px', height: '200px' }}
                />
                <img
                    src={items[(items.indexOf(item) + 3) % items.length].src}
                    alt={items[(items.indexOf(item) + 3) % items.length].altText}
                    style={{ width: '200px', height: '200px' }}
                />
                <img
                    src={items[(items.indexOf(item) + 4) % items.length].src}
                    alt={items[(items.indexOf(item) + 4) % items.length].altText}
                    style={{ width: '200px', height: '200px' }}
                />
            </div>
            
        </CarouselItem>
    );
});
  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      fade={true}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carrusel;