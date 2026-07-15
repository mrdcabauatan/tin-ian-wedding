import semiFormalImg from "../../assets/attire/semi-formal.png";
import pSponsorImg from "../../assets/attire/principal-sponsor.png";
import secSponsorImg from "../../assets/attire/secondary-sponsor.png";
import bestManImg from "../../assets/attire/bestman.png";
import mHonorImage from "../../assets/attire/maid-of-honor.png";
import barongImg from "../../assets/attire/barong.png";
import bridesmaid from "../../assets/attire/dusty-blue.png";
import flowerGirlImg from "../../assets/attire/flower-girl.png";
import barongChildImg from "../../assets/attire/barong-child.png";
import motherImg from "../../assets/attire/mother.png";

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
      palette: [1, 2, 3, 4, 5, 6],
    },
  },

  // Best Man
  1: {
    title: "BEST MAN",
    subtitle: "A Brother by Choice, A Friend for Life",
    message:
      "Through every milestone, challenge, and celebration, you have stood by Ian with unwavering loyalty and friendship. Thank you for always being someone he could rely on. Your presence on our wedding day is something we will always cherish.",

    attire: {
      heading: "Coat Chinese Collar Barong",
      image: bestManImg,
      addGuide: "Gentlemen are kindly requested to wear black formal shoes.",
      palette: [6],
    },
  },

  // Maid of Honor
  2: {
    title: "MAID OF HONOR",
    subtitle: "Chosen Sister, Forever Friend",
    message:
      "From the countless memories we've shared to the laughter and tears we've experienced together, you have always been a constant source of love, strength, and encouragement in Cristine's life. Thank you for your unwavering friendship and for always standing by her side.",

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
    subtitle: "A Trusted Friend, A Lifelong Bond",
    message:
      "Friendship is one of life's greatest blessings, and yours has been a constant source of strength, laughter, and support throughout Ian's journey. Thank you for standing beside him through life's greatest moments and for being part of the memories that have shaped who he is today.",

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
    subtitle: "A Beautiful Soul, A Treasured Friend",
    message:
      "Life's most meaningful journeys are made even more beautiful by the people who walk beside us. Thank you for the friendship you've shared with Cristine, for the countless smiles you've brought, and for the unwavering support you've given through the years.",

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
      palette: [3, 6],
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
      palette: [3, 6],
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
      palette: [3, 6],
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
    subtitle: "Chosen Sister, Forever Friend",
    message:
      "From the countless memories we've shared to the laughter and tears we've experienced together, you have always been a constant source of love, strength, and encouragement in Cristine's life. Thank you for your unwavering friendship and for always standing by her side.",

    attire: {
      heading: "Long Formal Gown",
      image: mHonorImage,
      addGuide: "Kindly avoid wearing white or black.",
      palette: [1],
    },
  },

  // Father of the Bride
  14: {
    title: "FATHER OF THE BRIDE",
    subtitle: "Her First Hero, Our Forever Inspiration",
    message:
      "From the very beginning, you have been Cristine's source of strength, her guide, and the one who taught her what it means to love with integrity and kindness. Thank you for every sacrifice you've made, every lesson you've shared, and every moment you've stood beside her. As you walk her toward this new chapter of life, know that she will always be your little girl.",

    attire: {
      heading: "Coat Chinese Collar Barong",
      image: bestManImg,
      addGuide: "Gentlemen are kindly requested to wear black formal shoes.",
      palette: [6],
    },
  },

  // Mother of the Bride
  15: {
    title: "MOTHER OF THE BRIDE",
    subtitle: "The Foundation of Her Story, The Beginning of Ours",
    message:
      "Throughout every season of life, you have been Cristine's greatest source of love, comfort, and strength. Your gentle heart, endless sacrifices, and unwavering encouragement have helped shape the woman she is today. Thank you for every embrace that brought comfort, every lesson that gave wisdom, and every moment you gave selflessly to guide her along the way.",

    attire: {
      heading: "Filipiniana Gown",
      image: motherImg,
      addGuide: "Kindly avoid wearing white or black.",
      palette: [5],
    },
  },

  // Father of the Groom
  16: {
    title: "FATHER OF THE GROOM",
    subtitle: "The Foundation of His Character, The Anchor of Our Marriage",
    message:
      "Throughout Ian's life, you have been a constant example of strength, integrity, and quiet wisdom. The values you have taught him, the sacrifices you have made, and the love you have shown have helped shape the man he is today. Thank you for leading by example, for sharing your guidance, and for showing him the importance of responsibility, compassion, and commitment.",

    attire: {
      heading: "Coat Chinese Collar Barong",
      image: bestManImg,
      addGuide: "Gentlemen are kindly requested to wear black formal shoes.",
      palette: [6],
    },
  },

  // Mother of the Groom
  17: {
    title: "MOTHER OF THE GROOM",
    subtitle: "His Lifelong Heart, Our Greatest Blessing",
    message:
      "From the very beginning, you have been the heart that loved Ian first, the voice that guided him, and the unwavering support that helped him become the man he is today. Your endless sacrifices, gentle strength, and unconditional love have been a foundation he has carried throughout his life. Thank you for every moment of care, every word of encouragement, and every act of love that shaped his character and his heart.",

    attire: {
      heading: "Filipiniana Gown",
      image: motherImg,
      addGuide: "Kindly avoid wearing white or black.",
      palette: [5],
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
  "Father of the Bride": 14,
  "Mother of the Bride": 15,
  "Father of the Groom": 16,
  "Mother of the Groom": 17,
};