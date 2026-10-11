/**
 * Stock photography from Unsplash, used as PLACEHOLDERS until we have our own.
 * Credits are shown on /credits and in CREDITS.md even though the license does not require it.
 * Keep alt text to what is visible: the source captions do not name the exact spot.
 */
export interface Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
  photographer: string;
  photographerUrl: string;
  sourceUrl: string;
  usedOn: string;
}

export const photos = {
  uptownRailYard: {
    src: "/photos/uptown-rail-yard.jpg",
    width: 2000,
    height: 1375,
    alt: "Uptown Charlotte's towers rising behind a wide rail yard at dusk, with freight cars lined up on dozens of tracks.",
    photographer: "Ryan M",
    photographerUrl: "https://unsplash.com/@rymc02?utm_source=lumen&utm_medium=referral",
    sourceUrl: "https://unsplash.com/photos/cJp16tjKAWk?utm_source=lumen&utm_medium=referral",
    usedOn: "Home page, below the headline",
  },
  charlotteWestSide: {
    src: "/photos/charlotte-west-side.jpg",
    width: 2000,
    height: 1125,
    alt: "The Charlotte skyline in daylight, seen over treetops and low rooftops from the west.",
    photographer: "Daniel Weiss",
    photographerUrl: "https://unsplash.com/@dweiss002?utm_source=lumen&utm_medium=referral",
    sourceUrl: "https://unsplash.com/photos/x0P-6BRp5jc?utm_source=lumen&utm_medium=referral",
    usedOn: "About page, next to the mission",
  },
} satisfies Record<string, Photo>;
