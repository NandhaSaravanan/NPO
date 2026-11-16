/**
 * Pictures of the places Lumen actually works in.
 *
 * Three are openly licensed photographs of Union County itself — the county line on NC 200,
 * the courthouse square in Monroe, and a 1920s postcard of the same courthouse. They show the
 * world around the organizations we build for; none of them is ours, and none is presented as
 * a client's own site, team or building. Two Charlotte skyline frames remain as placeholders.
 *
 * Every picture is credited on /credits and in CREDITS.md, whether or not its licence requires
 * it. Keep alt text to what is visible. `licence` must be carried through to the credits page:
 * two of these are share-alike, so an altered version has to be shared under the same terms.
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
  /** Shown on /credits. Unsplash placeholders leave this undefined. */
  licence?: { label: string; url: string };
}

export const photos = {
  countyLine: {
    src: "/photos/entering-union-county-on-north-carolina-highway.jpg",
    width: 1600,
    height: 1067,
    alt: "A green highway sign on a two-lane road reading Welcome to North Carolina, State Line, Union County.",
    photographer: "Mark Clifton",
    photographerUrl: "https://commons.wikimedia.org/w/index.php?curid=36929601",
    sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=36929601",
    usedOn: "Home page, behind the service area section",
    licence: { label: "CC BY-SA 2.0", url: "https://creativecommons.org/licenses/by-sa/2.0/" },
  },
  monroeSquare: {
    src: "/photos/monroe-north-carolina-01.jpg",
    width: 1600,
    height: 1166,
    alt: "The red brick Union County courthouse with its clock tower on the main street in downtown Monroe, North Carolina.",
    photographer: "Indy beetle",
    photographerUrl: "https://commons.wikimedia.org/w/index.php?curid=146051443",
    sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=146051443",
    usedOn: "Home page, beside Who's behind this",
    licence: { label: "CC0", url: "https://creativecommons.org/publicdomain/zero/1.0/deed.en/" },
  },
  courthousePostcard: {
    src: "/photos/union-county-court-house-monroe-n-c.jpg",
    width: 1600,
    height: 1020,
    alt: "A colour-tinted postcard from the 1920s showing the Union County Court House in Monroe, North Carolina, framed by trees.",
    photographer: "UNC Libraries",
    photographerUrl: "https://www.flickr.com/photos/122654055@N06/22680141628",
    sourceUrl: "https://www.flickr.com/photos/122654055@N06/22680141628",
    usedOn: "Home page, in the roadmap section",
    licence: { label: "public domain", url: "https://creativecommons.org/publicdomain/mark/1.0/" },
  },
  uptownRailYard: {
    src: "/photos/uptown-rail-yard.jpg",
    width: 2000,
    height: 1375,
    alt: "Uptown Charlotte's towers rising behind a wide rail yard at dusk, with freight cars lined up on dozens of tracks.",
    photographer: "Ryan M",
    photographerUrl: "https://unsplash.com/@rymc02?utm_source=lumen&utm_medium=referral",
    sourceUrl: "https://unsplash.com/photos/cJp16tjKAWk?utm_source=lumen&utm_medium=referral",
    usedOn: "About page, beside the Why we started section",
  },
  uptownNight: {
    src: "/photos/uptown-night.jpg",
    width: 2000,
    height: 1333,
    alt: "Uptown Charlotte's towers lit up against a dark sky at night.",
    photographer: "Wes Hicks",
    photographerUrl: "https://unsplash.com/@sickhews?utm_source=lumen&utm_medium=referral",
    sourceUrl: "https://unsplash.com/photos/6biN3uBw4Fg?utm_source=lumen&utm_medium=referral",
    usedOn: "Home page, behind the Why free? section",
  },
} satisfies Record<string, Photo>;
