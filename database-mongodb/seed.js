const db  = require('./index.js');
const Blog = require('./Anime.js');

const samplePosts = [
  {
    title: 'NARUTO SHIPPUDEN',
    imageUrl: 'https://wallpaperaccess.com/full/1346635.jp',
    createdAt: '2017-11-14T05:57:26.037Z',
    body: `Naruto: Shippuden is an anime series adapted from Part II of Masashi Kishimoto's manga series, with exactly 500 episodes. It is set two and a half years after Part I in the Naruto universe, following the ninja teenager Naruto Uzumaki and his allies. The series is directed by Hayato Date, and produced by Pierrot and TV Tokyo. It began broadcasting on February 15, 2007 on TV Tokyo, and concluded on March 23, 2017.
    On January 2, 2009, Viz Media and Crunchyroll provided eight uncut English subtitled Naruto: Shippuden episodes on the official Naruto website. Later on January 15, Viz began providing subtitled versions of the latest Naruto: Shippuden episodes a week after they first aired in Japan, with a new episode being added to the Naruto website each subsequent Thursday. The English dub of Naruto: Shippuden made its US premiere on Disney XD on October 28, 2009. On July 24, 2009, Viz Media announced that the series would be released on the iTunes Store. The first DVD release of the series in North America was released on September 29, 2009.
    Naruto: Shippuden was cancelled on Disney XD on November 5, 2011 after 98 episodes, in which the network cited more frequent violence that was shown in later episodes. DVD box sets generally containing thirteen dubbed episodes from episode 1 onward are being released quarterly in their uncut format. The English dub was streamed on the Neon Alley web channel from its launch in October 2012, and beginning December 29, 2012 with episode 99, dubbed episodes premiered every week uncut until March 25, 2016, about a month before Neon Alley's closure. Adult Swim's Toonami programming block began airing the anime from the beginning on January 5, 2014 in an uncut format and as of 2020 it is still running on a weekly basis. Toonami co-creator and current block runner Jason DeMarco has commented that the plan is to broadcast the anime in its entirety until 2024.
    In four regions, episodes from the series have been released on DVD and Blu-ray by single volumes and box sets. In North America, twelve single volumes and thirty eight box sets have been released. In the United Kingdom, twenty eight single volumes and six box sets have been released. In Japan, twenty six sets of volumes have been released based on which arc it represents. In Australia and New Zealand, twenty-eight collections have been released. `,
    like: 1236,
    unlike:64
  },
  {
    title: 'BORUTO”',
    imageUrl: 'https://www.wallpapermaiden.com/wallpaper/16798/download/1280x720/boruto-uzumaki-naruto-akatsuki-scar-katana.png',
    createdAt: '2018-01-10T05:05:26.037Z',
    body: `Boruto: Naruto Next Generations (Japanese: BORUTO-ボルト- -Naruto Next Generations-, Hepburn: Boruto: Naruto Nekusuto Jenerēshonzu) is a Japanese manga series written by Ukyō Kodachi and illustrated by Mikio Ikemoto. It was serialised monthly in Shueisha's shōnen manga magazine Weekly Shōnen Jump since May 2016 until it was transferred to Shueisha's monthly magazine V Jump in July 2019. Boruto is a spin-off and a sequel to Masashi Kishimoto's Naruto, which follows the exploits of Naruto Uzumaki's Son, Boruto Uzumaki, and his ninja team.
    Boruto originated from Shueisha's proposal to Kishimoto on making a sequel to Naruto. However, Kishimoto rejected this offer and proposed his former assistant Mikio Ikemoto to draw it; the writer of the film Boruto: Naruto the Movie, Ukyō Kodachi, created the plot. While both Kodachi and Ikemoto are in charge of the manga, Kodachi also oversees the anime's adaptation alongside Kishimoto. An anime television series adaptation directed by Noriyuki Abe started airing on TV Tokyo on 5 April 2017. Unlike the manga, which began as a retelling of the Boruto film, the anime begins as a prequel set before Boruto and his friends become ninjas in a later story arc. A series of light novels have also been written.
    Pierrot's anime prequel also earned praise for its use of both new and returning characters but the narrative of the manga was noted to be more serious as it focused more on the protagonist. Shueisha has shipped a million copies of the manga series as of January 2017. `,
    like: 794,
    unlike:45
  },
  {
    title: 'DEMON SLAYER',
    imageUrl: 'https://i.ytimg.com/vi/tfjKXZUcOBo/maxresdefault.jpg',
    createdAt: '2018-03-13T03:30:26.037Z',
    body:`Demon Slayer: Kimetsu no Yaiba (Japanese: 鬼滅の刃, Hepburn: Kimetsu no Yaiba, lit. "Blade of Demon Destruction") is a Japanese manga series written and illustrated by Koyoharu Gotōge. It follows Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered and his younger sister Nezuko is turned into a demon. The manga was serialized in Shueisha's Weekly Shōnen Jump from February 2016 to May 2020, and its chapters collected in 22 tankōbon volumes as of October 2020. It is published in English by Viz Media and simulpublished by Shueisha in English and Spanish on their Manga Plus platform.
    An anime television series adaptation by Ufotable aired in Japan from April to September 2019. Following the airing of the final episode, a sequel film was announced and is scheduled to premiere in October 2020.
    As of October 2020, the manga had over 100 million copies in circulation, including digital versions, making it one of the best-selling manga series of all time. Meanwhile, the anime series has received critical acclaim, with critics praising the animation and fight sequences. It has been considered one of the best anime of the 2010s, and has received numerous awards`,
    like: 501,
    unlike:21
  },
  {
    title: 'ONE-PIECE',
    author: 'Sandeep Gonnabathula',
    imageUrl: 'https://images.wallpapersden.com/image/download/one-piece-world-seeker_64227_1280x720.jpg',
    createdAt: '2018-05-11T01:24:26.037Z',
    body: `One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's Weekly Shōnen Jump magazine since July 1997, with its individual chapters compiled into 97 tankōbon volumes as of September 2020. The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit. With his crew of pirates, named the Straw Hat Pirates, Luffy explores the Grand Line in search of the world's ultimate treasure known as "One Piece" in order to become the next King of the Pirates. In August 2020, it was announced that One Piece was approaching its final arc.
    The manga spawned a media franchise, having been adapted into a festival film produced by Production I.G, and an anime series produced by Toei Animation, which began broadcasting in Japan in 1999. Additionally, Toei has developed fourteen animated feature films, one original video animation and thirteen television specials. Several companies have developed various types of merchandising and media, such as a trading card game and numerous video games. The manga series was licensed for an English language release in North America and the United Kingdom by Viz Media and in Australia by Madman Entertainment. The anime series was licensed by 4Kids Entertainment for an English-language release in North America in 2004, before the license was dropped and subsequently acquired by Funimation in 2007.
    One Piece has received praise for its storytelling, art, characterization, and humor. Several volumes of the manga have broken publishing records, including the highest initial print run of any book in Japan. The official website for Eiichiro Oda's One Piece manga announced that the manga has set the Guinness World Record for "the most copies published for the same comic book series by a single author". As of April 2020, the manga had over 470 million copies in circulation in 43 countries worldwide, making it the best-selling manga series in history. It became the best-selling manga for the eleventh consecutive year in 2018. One Piece is one of the highest-grossing media franchises of all time, estimated to have generated more than $21 billion in total franchise revenue, from the manga, anime, films, games and merchandise.`,
    like: 318,
    unlike:42
  },
  {
    title: '7 DEADLY SINS',
    imageUrl: 'https://www.whats-on-netflix.com/wp-content/uploads/2020/01/The-Seven-Deadly-Sins-Season-4-Netflix.jpg',
    createdAt: '2019-07-08T05:05:26.037Z',
    body: `The seven deadly sins, also known as the capital vices, or cardinal sins, is a grouping and classification of vices within Christian teachings, although they are not mentioned in the Bible. Behaviours or habits are classified under this category if they directly give rise to other immoralities. According to the standard list, they are pride, greed, wrath, envy, lust, gluttony, and sloth, which are contrary to the seven heavenly virtues. These sins are often thought to be abuses or excessive versions of one's natural faculties or passions (for example, gluttony abuses one's desire to eat, to consume).
    This classification originated with the Desert Fathers, especially Evagrius Ponticus, who identified seven or eight evil thoughts or spirits that one needed to overcome. Evagrius' pupil John Cassian, with his book The Institutes, brought the classification to Europe, where it became fundamental to Catholic confessional practices as evident in penitential manuals, sermons like "The Parson's Tale" from Chaucer's Canterbury Tales, and artworks like Dante's Purgatory (where the penitents of Mount Purgatory are depicted as being grouped and penanced according to the worst capital sin they committed). The Catholic Church used the concept of the deadly sins in order to help people curb their inclination towards evil before dire consequences and misdeeds could occur; the leader-teachers especially focused on pride (which is thought to be the sin that severs the soul from grace, and the one that is representative and the very essence of all evil) and greed, both of which are seen as inherently sinful and as underlying all other sins to be prevented. To inspire people to focus on the seven deadly sins, the vices are discussed in treatises and depicted in paintings and sculpture decorations on Catholic churches as well as older textbooks.    The seven deadly sins, along with the sins against the Holy Ghost and the sins that cry to Heaven for vengeance, are considered especially serious in the Western Christian traditions.`,
    like: 900,
    unlike:6
  },
  {
    title: 'ATTACK ON TITAN”',
    imageUrl: 'https://world-wire.com/wp-content/uploads/2020/07/Attack-on-Titan-1024x576.jpeg',
    createdAt: '2020-09-10T05:05:26.037Z',
    body: `Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing Giant[s]") is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity lives within cities surrounded by enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to retake the world after a Titan brings about the destruction of his home town and the death of his mother. Attack on Titan has been serialized in Kodansha's monthly Bessatsu Shōnen Magazine since September 2009, and collected into 32 tankōbon volumes as of September 2020.
    An anime television series adapting the manga was produced by Wit Studio (seasons 1–3) and MAPPA (season 4). A 25-episode first season was broadcast from April to September 2013, followed by a 12-episode second season broadcast from April to June 2017. A 22-episode third season was broadcast in two parts, with the first 12 episodes airing from July to October 2018 and the last 10 episodes airing from April to July 2019. A fourth and final season is scheduled to premiere in December 2020.
    Attack on Titan has become a critical and commercial success. As of December 2019, the manga has over 100 million tankōbon copies in print worldwide, making it one of the best-selling manga series of all time. It has won several awards, including the Kodansha Manga Award, the Micheluzzi Award, and Harvey Award. The anime series has also been well received by critics, with the first three seasons being met with praise for their story, animation, music and voice acting, thus boosting the series' popularity in U.S. and Asia. Although it has gained significant fame and popularity in Japan's neighbouring countries, political interpretations of the series have caused controversies in China and South Korea. `,
    like: 540,
    unlike:12
  },
  {
    title: 'BLEACH”',
    imageUrl: 'https://twinfinite.net/wp-content/uploads/2020/03/bleachreturn1.jpeg',
    createdAt: '2020-11-10T05:05:26.037Z',
    body: `Bleach (stylized as BLEACH) is a Japanese anime television series based on Tite Kubo's manga of the same name. It was produced by Studio Pierrot and directed by Noriyuki Abe. The series aired on TV Tokyo from October 2004 to March 2012, spanning 366 episodes. The story follows the adventures of Ichigo Kurosaki after he obtains the powers of a Soul Reaper—a death personification similar to the Grim Reaper—from another Soul Reaper, Rukia Kuchiki. His newfound powers force him to take on the duties of defending humans from evil spirits and guiding departed souls to the afterlife. The anime adaptation includes original storylines not found in the manga with repeated appearances and stories containing these original characters.
    Viz Media obtained foreign television and home video distribution rights to the Bleach anime in March 2006. Bleach was broadcast in the United States on Adult Swim from September 2006 to January 2015. The series' international release extends through dozens of countries in several languages, such as Spanish, French, German, Brazilian Portuguese and Tagalog.
    In March 2020, it was announced that the manga's final story arc, "Thousand-Year Blood War", would receive an anime adaptation. `,
    like: 479,
    unlike:2
  }
];

// const insertSampleBlogs = function() {
//   Blog.create(samplePosts)
//     .then(() => db.disconnect());
// };

// insertSampleBlogs();