import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {ILanguage} from './types';
const {height, width} = Dimensions.get('window');

export const COMMON_CONTAINER_STYLE = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

export const HAS_NOTCH = DeviceInfo.hasNotch();
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const IS_ANDROID = Platform.OS === 'android';
export const HIT_SLOP = {top: 10, right: 10, bottom: 10, left: 10};

export const LANGUAGES: ILanguage[] = [
  {label: 'English', value: 'en'},
  {label: 'Việt Nam', value: 'vi'},
];

export const Videos = [
  {
    id: 1,
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',

    likes: 4320,
    comments: 1700,
    musicName: 'track no.2',
    avatarUri: 'https://picsum.photos/200/300',
    subtitle: 'By Blender Foundation',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    title: 'Big Buck Bunny',
  },
  {
    id: 2,
    description: 'The first Blender Open Movie from 2006',
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',

    likes: 4320,
    comments: 1700,
    musicName: 'track no.2',
    avatarUri: 'https://picsum.photos/200/300',
    subtitle: 'By Blender Foundation',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    title: 'Elephant Dream',
  },
  {
    id: 3,
    description:
      'HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.',
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',

    likes: 4320,
    comments: 1700,
    musicName: 'track no.2',
    avatarUri: 'https://picsum.photos/200/300',
    subtitle: 'By Google',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    title: 'For Bigger Blazes',
  },
  {
    id: 4,
    description:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',

    likes: 4320,
    comments: 1700,
    musicName: 'track no.2',
    avatarUri: 'https://picsum.photos/200/300',
    subtitle: 'By Google',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
    title: 'For Bigger Escape',
  },
  {
    id: 5,
    description:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.',
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',

    likes: 4320,
    comments: 1700,
    musicName: 'track no.2',
    avatarUri: 'https://picsum.photos/200/300',
    subtitle: 'By Google',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
    title: 'For Bigger Fun',
  },
  {
    id: 6,
    description:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',

    likes: 4320,
    comments: 1700,
    musicName: 'track no.2',
    avatarUri: 'https://picsum.photos/200/300',
    subtitle: 'By Google',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
    title: 'For Bigger Joyrides',
  },
  {
    id: 7,
    description:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',

    likes: 4320,
    comments: 1700,
    musicName: 'track no.2',
    avatarUri: 'https://picsum.photos/200/300',
    subtitle: 'By Google',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
    title: 'For Bigger Meltdowns',
  },
  {
    id: 8,
    description:
      'Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org',
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',

    likes: 4320,
    comments: 1700,
    musicName: 'track no.2',
    avatarUri: 'https://picsum.photos/200/300',
    subtitle: 'By Blender Foundation',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
    title: 'Sintel',
  },
  {
    id: 9,
    description:
      'Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.',
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',

    likes: 4320,
    comments: 1700,
    musicName: 'track no.2',
    avatarUri: 'https://picsum.photos/200/300',
    subtitle: 'By Garage419',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
    title: 'Subaru Outback On Street And Dirt',
  },
  {
    id: 10,
    description:
      'Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org',
    sources:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',

    likes: 4320,
    comments: 1700,
    musicName: 'track no.2',
    avatarUri: 'https://picsum.photos/200/300',
    subtitle: 'By Blender Foundation',
    thumb:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg',
    title: 'Tears of Steel',
  },
];
