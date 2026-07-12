// Temporary placeholder images.
// Replace these with your actual images later.

import semiFormalImg from "../../assets/attire/semi-formal.png";
import pSponsorImg from "../../assets/attire/principal-sponsor.png";
import secSponsorImg from "../../assets/attire/secondary-sponsor.png";
import mHonorImage from "../../assets/attire/maid-of-honor.png";
import barongImg from "../../assets/attire/barong.png";
import bridesmaid from "../../assets/attire/dusty-blue.png";
import flowerGirlImg from "../../assets/attire/flower-girl.png";
import barongChildImg from "../../assets/attire/barong-child.png";

export const INVITATION_CONTENT = {
  // Guest
  0: {
  title: "We can't wait to celebrate with you!",
  subtitle: null,
  message:
    "Together with our families, we warmly invite you to join us as we celebrate our love, exchange vows, and begin our forever. Your presence on this special day would mean the world to us.",

  attire: {
    heading: "Semi-Formal Attire",
    image: semiFormalImg,
    addGuide: "Kindly avoid wearing white or black.",
    palette: [1,2,3,4,5,6],
  },
},

  // Best Man
  1: {
  title: "BEST MAN",
  subtitle: "My Constant Support, My Right Hand",
  message:
    "Through every milestone, challenge, and celebration, you have been by my side with unwavering loyalty and friendship. Thank you for always believing in me and for being my right hand.",

  attire: {
    heading: "Semi-Formal Attire",
    image: semiFormalImg,
    addGuide: "Gentlemen are kindly requested to wear black formal shoes.",
    palette: [1,2,3,4,5,6],
  },
},

  // Maid of Honor
  2: {
  title: "MAID OF HONOR",
  subtitle: "My Sister in Heart and Soul",
  message:
    "You have been my source of strength and the one who has shared countless memories, laughter, and tears with me. Your love, encouragement, and unwavering support have helped shape the person I am today.",

  attire: {
    heading: "Long Formal Gown",
    image: mHonorImage,
    addGuide: "Kindly avoid wearing white or black.",
    palette: [1],
  },
},

  // Groomsman
  3: {
  title: "GROOMSMAN",
  subtitle: "My Trusted Friend and Loyal Support",
  message:
    "Your friendship, loyalty, and unwavering support have meant so much throughout my journey. Thank you for standing beside me through life's greatest moments.",

  attire: {
    heading: "Barong Tagalog & Black Slacks",
    image: barongImg,
    addGuide: "Gentlemen are kindly requested to wear black formal shoes.",
    palette: [6],
  },
},

  // Bridesmaid
  4: {
  title: "BRIDESMAID",
  subtitle: "My Cherished Friend and Constant Support",
  message:
    "Your love, friendship, and the countless memories we've shared have made life's journey more meaningful. Thank you for your encouragement and for always being there through every season.",

  attire: {
    heading: "Long Formal Gown",
    image: bridesmaid,
    addGuide: "Kindly avoid wearing white or black.",
    palette: [3],
  },
},

  // Principal Sponsor
  5: {
  title: "PRINCIPAL SPONSOR",
  subtitle: "Our Pillars of Love and Guidance",
  message:
    "Your wisdom, kindness, and unwavering support have touched our lives in countless ways. We are deeply honored to have you witness our vows and offer your blessings as we begin this lifelong journey together.",

  attire: {
    heading: "Barong Tagalog & Black Slacks <br /> Filipiniana Gown",
    image: pSponsorImg,
    addGuide: "Gentlemen are kindly requested to wear black formal shoes.",
    palette: [6],
  },
},

  // Flower Girl
  6: {
  title: "FLOWER GIRL",
  subtitle: "Bearer of Joy and Sweet Beginnings",
  message:
    "Your bright smile and joyful spirit will make our wedding day even more beautiful. We would be so happy to have you scatter petals and help lead the way as we begin our forever.",

  attire: {
    heading: "Formal Dress",
    image: flowerGirlImg,
    addGuide: "Kindly avoid wearing white or black.",
    palette: [3],
  },
},

  // Ring Bearer
  7: {
  title: "RING BEARER",
  subtitle: "Keeper of Our Promise",
  message:
    "We are delighted to have you carry the rings, the precious symbol of our love and commitment. Thank you for being part of this unforgettable celebration and helping make our ceremony even more meaningful.",

  attire: {
    heading: "Barong Tagalog & Black Slacks",
    image: barongChildImg,
    addGuide: "Gentlemen are kindly requested to wear black formal shoes.",
    palette: [6],
  },
},

  // Candle Sponsor
  8: {
  title: "CANDLE",
  subtitle: "Bearers of Light",
  message:
    "As you light the candles, you symbolize the light of faith and God's presence that will guide us throughout our marriage. We are truly grateful for your love and support.",

  attire: {
    heading: "Barong Tagalog & Black Slacks <br /> Long Formal Gown",
    image: secSponsorImg,
    addGuide: "Gentlemen are kindly requested to wear black formal shoes.",
    palette: [3,6],
  },
},

  // Veil Sponsor
  9: {
  title: "VEIL",
  subtitle: "Witness of Unity",
  message:
    "As you place the veil upon us, you symbolize God's loving protection and the unity that will embrace us as husband and wife.",

  attire: {
    heading: "Barong Tagalog & Black Slacks <br /> Long Formal Gown",
    image: secSponsorImg,
    addGuide: "Gentlemen are kindly requested to wear black formal shoes.",
    palette: [3,6],
  },
},
  // Cord Sponsor
  10: {
  title: "CORD",
  subtitle: "Symbol of Our Everlasting Bond",
  message:
    "Thank you for sharing in this sacred moment. By placing the cord around us, you symbolize the eternal bond of love, unity, and commitment that we promise to cherish throughout our lives together.",

  attire: {
    heading: "Barong Tagalog & Black Slacks <br /> Long Formal Gown",
    image: secSponsorImg,
    addGuide: "Gentlemen are kindly requested to wear black formal shoes.",
    palette: [3,6],
  },
},

  // Coin Bearer
  11: {
  title: "COIN BEARER",
  subtitle: "Bearer of Prosperity and Blessings",
  message:
    "We are delighted to have you carry the wedding coins, representing the blessings of prosperity, generosity, and our promise to provide for one another throughout our married life.",

  attire: {
    heading: "Barong Tagalog & Black Slacks",
    image: barongChildImg,
    addGuide: "Gentlemen are kindly requested to wear black formal shoes.",
    palette: [6],
  },
},

  // Bible Bearer
  12: {
  title: "BIBLE BEARER",
  subtitle: "Bearer of God's Holy Word",
  message:
    "Thank you for carrying the Holy Bible, a beautiful reminder that God's love, wisdom, and guidance will always be the foundation of our marriage. Your role is a meaningful part of our wedding celebration.",

  attire: {
    heading: "Barong Tagalog & Black Slacks",
    image: barongChildImg,
    addGuide: "Gentlemen are kindly requested to wear black formal shoes.",
    palette: [6],
  },
},

// Matron of Honor
  13: {
  title: "MATRON OF HONOR",
  subtitle: "My Sister in Heart and Soul",
  message:
    "You have been my source of strength and the one who has shared countless memories, laughter, and tears with me. Your love, encouragement, and unwavering support have helped shape the person I am today.",

  attire: {
    heading: "Long Formal Gown",
    image: mHonorImage,
    addGuide: "Kindly avoid wearing white or black.",
    palette: [1],
  },
},
};

export const ROLE_MAP = {
  "Guest": 0,
  "Best Man": 1,
  "Maid of Honor": 2,
  "Groomsman": 3,
  "Bridesmaid": 4,
  "Principal Sponsor": 5,
  "Flower Girl": 6,
  "Ring Bearer": 7,
  "Candle": 8,
  "Veil": 9,
  "Cord": 10,
  "Coin Bearer": 11,
  "Bible Bearer": 12,
  "Matron of Honor": 13,
};