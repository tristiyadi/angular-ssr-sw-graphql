import { MediaSearchResult } from 'src/app/models'
import { PageInfo, VideoFragment } from 'src/graphql'

export const mockMediaPageInfo: PageInfo = {
  total: 74,
  perPage: 10,
  currentPage: 1,
  lastPage: 8,
  hasNextPage: true,
}
export const mockMediaVideoFragments: VideoFragment[] = [
  {
    title: {
      native: '\u30ad\u30f3\u30b0',
      english: null,
      __typename: 'MediaTitle',
    },
    description: ' ',
    siteUrl: 'https://anilist.co/manga/43661',
    coverImage: {
      medium:
        'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/13661.jpg',
      color: '#d61a1a',
      __typename: 'MediaCoverImage',
    },
    __typename: 'Media',
  },
  {
    title: {
      native:
        '\u30c9\u30f3\u30c8\u30fb\u30af\u30e9\u30a4\u30fb\u30de\u30a4\u30fb\u30d9\u30a4\u30d3\u30fc',
      english: 'Dont Cry My Baby',
      __typename: 'MediaTitle',
    },
    description: ' ',
    siteUrl: 'https://anilist.co/manga/49208',
    coverImage: {
      medium:
        'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/19208.jpg',
      color: '#ffe41a',
      __typename: 'MediaCoverImage',
    },
    __typename: 'Media',
  },
  {
    title: {
      native:
        '\u30ad\u30f3\u30b0\u30b3\u30f3\u30b0\u30fb001/7\u89aa\u6307\u30c8\u30e0',
      english: 'King Kong - 00 1/7 Tom Thumb',
      __typename: 'MediaTitle',
    },
    description:
      'Professor Bond is doing research on an island in the Java Sea when his son discovers the giant ape and befriends him, and together they fight to protect Kong from Dr. Who, who has sinister designs on the ape. Each episode consisted of a King Kong story, a Tom of T.H.U.M.B., then another King Kong story. <br><br>\nTom of T.H.U.M.B. is a gag cartoon about a secret agent and his oriental sidekick. Animage Pocket Data Notes credits MORI Yasuji and KANISHI Takao as either character designers or animation directors of the latter, differing from the credits for the King Kong portion of the show. <br><br>\nThis was the first cartoon TV series animated entirely in Japan expressly for American television. American sources state Rankin-Bass commissioned the work from Videocraft International; Japanese sources state it was produced by Videocraft/Toei Doga.<br><br>\n(Source: AniDB)',
    siteUrl: 'https://anilist.co/anime/19995',
    coverImage: {
      medium:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/19995.jpg',
      color: '#e4e40d',
      __typename: 'MediaCoverImage',
    },
    __typename: 'Media',
  },
  {
    title: {
      native:
        '\u30b7\u30e3\u30fc\u30de\u30f3\u30ad\u30f3\u30b0 \u5b8c\u5168\u7248',
      english: 'Shaman King',
      __typename: 'MediaTitle',
    },
    description:
      'Shaman King Kanzenban is a 27 volume reprint of the original Shaman King series but with differences including the addition of new chapters (which changes the chapter numbering).\n<br><br>\n<i>Notes:<br>\n- Includes two five-chapter short stories titled "Funbari no Uta" and "VISiONZ", as well as the one-shots "relax" and "Mappa Douji" (\u9ebb\u8449\u7ae5\u5b50).<br>\n- The following chapters are featured only in the kanzenban volumes, which do not contain the original chapter 285. The additional chapters 265\u2013266 are collected in volume 24, renumbering all subsequent chapters of the series. Chapters 287\u2013291 are in volume 26 and chapters 292\u2013300 in volume 27.<br>\n<ul>\n<li>Reincarnation 265. Aku no Shoutai (\u60aa\u306e\u6b63\u4f53, Evil\'s True Form)</li>\n<li>Reincarnation 266. Shinjitsu no Seigi (\u771f\u5b9f\u306e\u6b63\u7fa9, The Real Justice)</li>\n<li>Reincarnation 287. Good Morning Mu Tairiku (\u30b0\u30c3\u30c9\u30e2\u30fc\u30cb\u30f3\u30b0 \u30e0\u30fc\u5927\u9678, Good Morning Mu Continent)</li>\n<li>Reincarnation 288. Falling Dam-ko (\u30d5\u30a9\u30fc\u30ea\u30f3\u30c0\u30e0\u5b50)</li>\n<li>Reincarnation 289. Invisible Jurin (\u30a4\u30f3\u30d3\u30b8\u30d6\u30eb\u30b8\u30e5\u30ea\u30fc\u30f3, Invisible Jungle)</li>\n<li>Reincarnation 290. Neko wa Sabishii Hito ni Natsuku (\u732b\u306f\u5bc2\u3057\u3044\u4eba\u9593\u3008\u3072\u3068\u3009\u306b\u306a\u3064\u304f, Cats Are Attached to Sad People)</li>\n<li>Reincarnation 291. Nikume Nichrome Samonakuba Ore wa Taoren (\u618e\u3081\u30cb\u30af\u30ed\u30e0 \u3055\u3082\u306a\u304f\u3070\u4ffa\u306f\u5012\u308c\u3093 Hate Me, Nichrome, Otherwise I Won\'t Lose)</li>\n<li>Reincarnation 292. Dokonjou Mame no Ki (\u3069\u6839\u6027\u8c46\u306e\u6728, The Gutsy Beanstalk)</li>\n<li>Reincarnation 293. Kaze no Shinka (\u98a8\u306e\u771f\u4fa1, The Real Value of Wind)</li>\n<li>Reincarnation 294. Last Test Shaman Fight</li>\n<li>Reincarnation 295. Yume no Ato (\u5922\u306e\u3042\u3068, After the Dream)</li>\n<li>Reincarnation 296. Patch to no Souguu (\u30d1\u30c3\u30c1\u3068\u306e\u906d\u9047, Encounter With the Patch)</li>\n<li>Reincarnation 297-299. Shaman King: God End (\u30b7\u30e3\u30fc\u30de\u30f3\u30ad\u30f3\u30b0 God End)</li>\n<li>Reincarnation 300. The Last Words</li>\n</ul></i>',
    siteUrl: 'https://anilist.co/manga/42917',
    coverImage: {
      medium:
        'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/bx42917-rgKGSzrU5nRm.jpg',
      color: '#aee45d',
      __typename: 'MediaCoverImage',
    },
    __typename: 'Media',
  },
  {
    title: {
      native: '\u7f8e\u98df\u5927\u5192\u9669',
      english: null,
      __typename: 'MediaTitle',
    },
    description: null,
    siteUrl: 'https://anilist.co/anime/129656',
    coverImage: {
      medium:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx129656-WWacLOQqbOgX.png',
      color: '#e4ae50',
      __typename: 'MediaCoverImage',
    },
    __typename: 'Media',
  },
  {
    title: {
      native: '\u529f\u592b\u5154\u4e0e\u83dc\u5305\u72d7',
      english: 'Kung Fu Bunny',
      __typename: 'MediaTitle',
    },
    description: `A young Cartoonist at home creates on paper a smart rebel Bunny and a smug loyal Doggy. Capturing the Bunny then becomes the Cartoonist's and the Doggy's impossible mission in life that goes on and on, chasing through books, fighting mental monsters, joining aliens, controlling giants, failure after failure. The arena is set for kung fu extravaganzas and witty creative adventures!\n<br><br>\n(Source: Kung Fu Bunny Official Youtube Channel)`,
    siteUrl: 'https://anilist.co/anime/120509',
    coverImage: {
      medium:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx120509-ZeTQW1ezOSGE.png',
      color: '#d6a178',
      __typename: 'MediaCoverImage',
    },
    __typename: 'Media',
  },
  {
    title: {
      native: '\ub369\ub354\uafcd',
      english: null,
      __typename: 'MediaTitle',
    },
    description:
      'The greed of a social class that only wants money and power has put the helpless people on the line. But finally somebody is going to take revenge on their behalf.',
    siteUrl: 'https://anilist.co/manga/88425',
    coverImage: {
      medium:
        'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/88425-arLsSkRl4dc5.jpg',
      color: null,
      __typename: 'MediaCoverImage',
    },
    __typename: 'Media',
  },
  {
    title: {
      native: '\ubb34\uc220\uc18c\ub144 \uaf2c\ub9dd',
      english: null,
      __typename: 'MediaTitle',
    },
    description:
      'A boy named Komang learns Kung fu and meets many friends along the way.',
    siteUrl: 'https://anilist.co/manga/92414',
    coverImage: {
      medium:
        'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/92414-aE3vf52omdoZ.jpg',
      color: '#e4bb28',
      __typename: 'MediaCoverImage',
    },
    __typename: 'Media',
  },
  {
    title: {
      native: '\u5bab\u4fdd\u9e21\u4e01',
      english: null,
      __typename: 'MediaTitle',
    },
    description:
      'A simple, wordless oneshot about a man being hitted on by a woman in his dreams.',
    siteUrl: 'https://anilist.co/manga/41160',
    coverImage: {
      medium:
        'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/11160.jpg',
      color: null,
      __typename: 'MediaCoverImage',
    },
    __typename: 'Media',
  },
  {
    title: {
      native: '\u9244\u62f3\u30c1\u30f3\u30df',
      english: 'Ironfist Chinmi',
      __typename: 'MediaTitle',
    },
    description:
      'Chinmi is a young Chinese boy devoted to martial arts training. Word of his skill reaches the kung-fu masters at the famous Dailin temple who invite him to study with them. Through his own dedication and the guidance of his teachers, Chinmi becomes one of the top students at the temple. Eventually the time comes for him to leave Dailin and make a pilgrimage. On his journey he faces a number of dangers that test his skills, but he also meets many people who inspire him in different ways. A chastened but determined Chinmi returns to Dailin for advanced training. But soon his skills are needed again - the Mongol hordes are nearing the temple. <br><br>\n(Source: Anime News Network)',
    siteUrl: 'https://anilist.co/manga/31100',
    coverImage: {
      medium:
        'https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/bx31100-H26Ve4yzGUNv.png',
      color: '#fed60d',
      __typename: 'MediaCoverImage',
    },
    __typename: 'Media',
  },
]
export const mockMediaSearchResult: MediaSearchResult = {
  pageInfo: mockMediaPageInfo,
  videos: mockMediaVideoFragments,
}
