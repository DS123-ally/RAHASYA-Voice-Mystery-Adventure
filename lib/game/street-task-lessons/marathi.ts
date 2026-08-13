import type { StreetTaskLessons } from "./types";
import { s } from "./types";

export const LESSONS: Record<string, StreetTaskLessons> = {
  "dadar-chowk-auto": {
    easy: [
      s("कुठे जायचे?", "Kuthe jaayche?", "Where do you want to go?", "दादर रेल्वे स्टेशन", "Dadar railway station", "Dadar railway station"),
      s("ठीक, किती द्याल?", "Theek, kiti dyaal?", "Fine, what will you pay?", "दीडशे?", "Deedashe?", "Will you go for 150?"),
      s("चल, बस", "Chal, bas", "Come on, get in", "धन्यवाद, चलू", "Dhanyavaad, chalu", "Thank you, let's go"),
    ],
    medium: [
      s("कुठे जायचे?", "Kuthe jaayche?", "Where do you want to go?", "दादर रेल्वे स्टेशन", "Dadar railway station", "Dadar railway station"),
      s("तीनशे! पेट्रोल महाग आहे भाऊ", "Teenshe! Petrol mahaag aahe bhaau", "Three hundred! Petrol is expensive, brother", "हो, पण थोडे कमी कर", "Ho, pan thode kami kar", "Yes, but please reduce it a bit"),
      s("ठीक, सांग", "Theek, saang", "Fine, tell me", "किती?", "Kiti?", "How much?"),
      s("ठीक, किती द्याल?", "Theek, kiti dyaal?", "Fine, what will you pay?", "दीडशे?", "Deedashe?", "Will you go for 150?"),
      s("चल, बस", "Chal, bas", "Come on, get in", "धन्यवाद, चलू", "Dhanyavaad, chalu", "Thank you, let's go"),
    ],
    hard: [
      s("कुठे जायचे?", "Kuthe jaayche?", "Where do you want to go?", "दादर रेल्वे स्टेशन", "Dadar railway station", "Dadar railway station"),
      s("आज गर्दी खूप आहे", "Aaj gardi khup aahe", "It's very crowded today", "हो, घाई आहे", "Ho, ghaai aahe", "Yes, I'm in a hurry"),
      s("तीनशे! पेट्रोल महाग आहे भाऊ", "Teenshe! Petrol mahaag aahe bhaau", "Three hundred! Petrol is expensive, brother", "हो, पण थोडे कमी कर", "Ho, pan thode kami kar", "Yes, but please reduce it a bit"),
      s("ठीक, सांग", "Theek, saang", "Fine, tell me", "किती?", "Kiti?", "How much?"),
      s("ठीक, किती द्याल?", "Theek, kiti dyaal?", "Fine, what will you pay?", "दीडशे?", "Deedashe?", "Will you go for 150?"),
      s("मीटरने?", "Meetarne?", "By meter?", "नाही, पक्का भाडे", "Naahi, pakka bhaade", "No, fixed fare"),
      s("चल, बस", "Chal, bas", "Come on, get in", "धन्यवाद, चलू", "Dhanyavaad, chalu", "Thank you, let's go"),
    ],
  },
  "dadar-chowk-shop": {
    easy: [
      s("काय घ्याल?", "Kaay ghyaal?", "What will you have?", "एक वडा पाव", "Ek vada pav", "One vada pav, please"),
      s("अरे, ती मांजर परत आली!", "Are, ti maanjar parat aali!", "Hey, that cat is back again!", "काही नाही, वडा पाव दे", "Kaahi naahi, vada pav de", "No problem, give me the vada pav"),
      s("चाळीस रुपये", "Chaalis rupaye", "Forty rupees", "घ्या, धन्यवाद", "Ghya, dhanyavaad", "Here you go, thank you"),
    ],
    medium: [
      s("काय घ्याल?", "Kaay ghyaal?", "What will you have?", "एक वडा पाव", "Ek vada pav", "One vada pav, please"),
      s("चहा पण?", "Chaah pan?", "Chai as well?", "हो, एक कटिंग", "Ho, ek cutting", "Yes, one cutting chai"),
      s("ठीक", "Theek", "Okay", "किती झाले?", "Kiti jhaale?", "What do I owe you?"),
      s("चाळीस रुपये", "Chaalis rupaye", "Forty rupees", "घ्या", "Ghya", "Here you go"),
      s("घ्या", "Ghya", "Take it", "धन्यवाद", "Dhanyavaad", "Thank you"),
    ],
    hard: [
      s("काय घ्याल?", "Kaay ghyaal?", "What will you have?", "एक वडा पाव", "Ek vada pav", "One vada pav, please"),
      s("चहा पण?", "Chaah pan?", "Chai as well?", "हो, एक कटिंग", "Ho, ek cutting", "Yes, one cutting chai"),
      s("मसाला जास्त?", "Masala jaast?", "Extra spice?", "हो, थोडा जास्त", "Ho, thoda jaast", "Yes, a little extra"),
      s("सांग", "Saang", "Tell me", "किती झाले?", "Kiti jhaale?", "What do I owe you?"),
      s("चाळीस रुपये", "Chaalis rupaye", "Forty rupees", "घ्या", "Ghya", "Here you go"),
      s("आणखी काही?", "Aankhi kaahi?", "Anything else?", "नाही, फक्त हेच", "Naahi, fakt hech", "No, that's all"),
      s("घ्या", "Ghya", "Take it", "धन्यवाद", "Dhanyavaad", "Thank you"),
    ],
  },
  "dadar-chowk-temple": {
    easy: [
      s("सिद्धिविनायकासाठी फूल?", "Siddhivinayakaasaathi phool?", "Flowers for Siddhivinayak?", "हो, दोन झेंडूच्या माळा", "Ho, don jhenduuchya maalaa", "Yes, two marigold garlands"),
      s("चाळीस मध्ये घ्या", "Chaalis madhye ghya", "Take it for forty", "धन्यवाद, घ्या", "Dhanyavaad, ghya", "Thank you, here you go"),
      s("जा, दर्शन घ्या", "Jaa, darshan ghya", "Go, take darshan", "धन्यवाद", "Dhanyavaad", "Thank you"),
    ],
    medium: [
      s("सिद्धिविनायकासाठी फूल?", "Siddhivinayakaasaathi phool?", "Flowers for Siddhivinayak?", "हो, दोन झेंडूच्या माळा", "Ho, don jhenduuchya maalaa", "Yes, two marigold garlands"),
      s("घंटा वाजत आहे, लवकर!", "Ghanta vajat aahe, lavkar!", "The bell is ringing, hurry!", "हो, लवकर", "Ho, lavkar", "Yes, quickly"),
      s("सांग", "Saang", "Tell me", "किती?", "Kiti?", "How much?"),
      s("पन्नास रुपये", "Pannaas rupaye", "Fifty rupees", "चाळीस मध्ये दे", "Chaalis madhye de", "Give it for forty"),
      s("चाळीस मध्ये घ्या", "Chaalis madhye ghya", "Take it for forty", "धन्यवाद, घ्या", "Dhanyavaad, ghya", "Thank you, here you go"),
    ],
    hard: [
      s("सिद्धिविनायकासाठी फूल?", "Siddhivinayakaasaathi phool?", "Flowers for Siddhivinayak?", "हो, दोन झेंडूच्या माळा", "Ho, don jhenduuchya maalaa", "Yes, two marigold garlands"),
      s("घंटा वाजत आहे, लवकर!", "Ghanta vajat aahe, lavkar!", "The bell is ringing, hurry!", "हो, लवकर", "Ho, lavkar", "Yes, quickly"),
      s("सांग", "Saang", "Tell me", "किती?", "Kiti?", "How much?"),
      s("पन्नास रुपये", "Pannaas rupaye", "Fifty rupees", "चाळीस मध्ये दे", "Chaalis madhye de", "Give it for forty"),
      s("आणखी काही?", "Aankhi kaahi?", "Need anything else?", "नाही, फक्त हेच", "Naahi, fakt hech", "No, just this"),
      s("चाळीस मध्ये घ्या", "Chaalis madhye ghya", "Take it for forty", "धन्यवाद, घ्या", "Dhanyavaad, ghya", "Thank you, here you go"),
      s("जा", "Jaa", "Go", "धन्यवाद", "Dhanyavaad", "Thank you"),
    ],
  },
  "dadar-chowk-bus": {
    easy: [
      s("कुठे?", "Kuthe?", "Where to?", "बांद्रा", "Bandra", "Bandra"),
      s("वीस रुपये", "Vees rupaye", "Twenty rupees", "घ्या", "Ghya", "Here you go"),
      s("घ्या, टिकिट", "Ghya, ticket", "Here, your ticket", "धन्यवाद", "Dhanyavaad", "Thank you"),
    ],
    medium: [
      s("कुठे?", "Kuthe?", "Where to?", "बांद्रा", "Bandra", "Bandra"),
      s("मागून चढ, गर्दी आहे", "Magun chadh, gardi aahe", "Board from the back, it's crowded", "ठीक, मागून चढतो", "Theek, magun chadhto", "Okay, I'll board from the back"),
      s("हो, सांग", "Ho, saang", "Yes, tell me", "किती?", "Kiti?", "How much?"),
      s("वीस रुपये", "Vees rupaye", "Twenty rupees", "घ्या", "Ghya", "Here you go"),
      s("घ्या, टिकिट", "Ghya, ticket", "Here, your ticket", "धन्यवाद", "Dhanyavaad", "Thank you"),
    ],
    hard: [
      s("कुठे?", "Kuthe?", "Where to?", "बांद्रा", "Bandra", "Bandra"),
      s("मागून चढ, गर्दी आहे", "Magun chadh, gardi aahe", "Board from the back, it's crowded", "ठीक, मागून चढतो", "Theek, magun chadhto", "Okay, I'll board from the back"),
      s("हो, सांग", "Ho, saang", "Yes, tell me", "एक टिकिट", "Ek ticket", "One ticket, please"),
      s("सांग", "Saang", "Tell me", "किती?", "Kiti?", "How much?"),
      s("वीस रुपये", "Vees rupaye", "Twenty rupees", "घ्या", "Ghya", "Here you go"),
      s("छोटे नोट?", "Chhote note?", "Small notes?", "हो, घ्या", "Ho, ghya", "Yes, here you go"),
      s("घ्या, तिकीट", "Ghya, ticket", "Here, your ticket", "धन्यवाद", "Dhanyavaad", "Thank you"),
    ],
  },
  "deccan-pune-auto": {
    easy: [
      s("कुठे जायचे?", "Kuthe jaayche?", "Where do you want to go?", "पुणे रेल्वे स्टेशन", "Pune railway station", "Pune railway station"),
      s("ठीक, किती द्याल?", "Theek, kiti dyaal?", "Fine, what will you pay?", "दीडशे?", "Deedashe?", "Will you go for 150?"),
      s("चल, बस", "Chal, bas", "Come on, get in", "धन्यवाद, चालू", "Dhanyavaad, chalu", "Thank you, let's go"),
    ],
    medium: [
      s("कुठे जायचे?", "Kuthe jaayche?", "Where do you want to go?", "पुणे रेल्वे स्टेशन", "Pune railway station", "Pune railway station"),
      s("तीनशे! पेट्रोल महाग आहे भाऊ", "Teenshe! Petrol mahaag aahe bhaau", "Three hundred! Petrol is expensive, brother", "हो, पण थोडे कमी कर", "Ho, pan thode kami kar", "Yes, but please reduce it a bit"),
      s("ठीक, सांग", "Theek, saang", "Fine, tell me", "किती?", "Kiti?", "How much?"),
      s("ठीक, किती द्याल?", "Theek, kiti dyaal?", "Fine, what will you pay?", "दीडशे?", "Deedashe?", "Will you go for 150?"),
      s("चल, बस", "Chal, bas", "Come on, get in", "धन्यवाद, चालू", "Dhanyavaad, chalu", "Thank you, let's go"),
    ],
    hard: [
      s("कुठे जायचे?", "Kuthe jaayche?", "Where do you want to go?", "पुणे रेल्वे स्टेशन", "Pune railway station", "Pune railway station"),
      s("आज गर्दी खूप आहे", "Aaj gardi khup aahe", "It's very crowded today", "हो, घाई आहे", "Ho, ghaai aahe", "Yes, I'm in a hurry"),
      s("तीनशे! पेट्रोल महाग आहे भाऊ", "Teenshe! Petrol mahaag aahe bhaau", "Three hundred! Petrol is expensive, brother", "हो, पण थोडे कमी कर", "Ho, pan thode kami kar", "Yes, but please reduce it a bit"),
      s("ठीक, सांग", "Theek, saang", "Fine, tell me", "किती?", "Kiti?", "How much?"),
      s("ठीक, किती द्याल?", "Theek, kiti dyaal?", "Fine, what will you pay?", "दीडशे?", "Deedashe?", "Will you go for 150?"),
      s("मीटरने?", "Meetarne?", "By meter?", "नाही, पक्का भाडे", "Naahi, pakka bhaade", "No, fixed fare"),
      s("चल, बस", "Chal, bas", "Come on, get in", "धन्यवाद, चालू", "Dhanyavaad, chalu", "Thank you, let's go"),
    ],
  },
  "deccan-pune-shop": {
    easy: [
      s("काय घ्याल?", "Kaay ghyaal?", "What will you have?", "एक मिसळ पाव", "Ek misal pav", "One misal pav, please"),
      s("पार्सल का इथेच?", "Parcel ka ithech?", "Parcel or here?", "इथेच", "Ithech", "Here"),
      s("पंचवीस रुपये", "Panchvis rupaye", "Twenty-five rupees", "घ्या", "Ghya", "Here you go"),
    ],
    medium: [
      s("काय घ्याल?", "Kaay ghyaal?", "What will you have?", "एक मिसळ पाव", "Ek misal pav", "One misal pav, please"),
      s("गरम आहे, चालेल?", "Garam aahe, chaalel?", "It's hot, is that okay?", "हो, चालेल", "Ho, chaalel", "Yes, that's fine"),
      s("पार्सल का इथेच?", "Parcel ka ithech?", "Parcel or here?", "पार्सल द्या", "Parcel dyaa", "Please pack it"),
      s("पंचवीस रुपये", "Panchvis rupaye", "Twenty-five rupees", "घ्या", "Ghya", "Here you go"),
    ],
    hard: [
      s("काय घ्याल?", "Kaay ghyaal?", "What will you have?", "दोन मिसळ पाव", "Don misal pav", "Two misal pavs, please"),
      s("गरम आहे, चालेल?", "Garam aahe, chaalel?", "It's hot, is that okay?", "हो, चालेल", "Ho, chaalel", "Yes, that's fine"),
      s("पार्सल का इथेच?", "Parcel ka ithech?", "Parcel or here?", "एक पार्सल, एक इथेच", "Ek parcel, ek ithech", "One parcel, one here"),
      s("तिखट चालतं का?", "Tikhat chaalata ka?", "Is spicy okay?", "हो, थोडं तिखट द्या", "Ho, thoda tikhat dyaa", "Yes, make it a bit spicy"),
      s("पन्नास रुपये", "Pannas rupaye", "Fifty rupees", "घ्या", "Ghya", "Here you go"),
    ],
  },
  "deccan-pune-temple": {
    easy: [
      s("प्रसाद हवाय का?", "Prasad havay ka?", "Do you want prasad?", "हो, एक पुडी", "Ho, ek pudi", "Yes, one packet"),
      s("दहा रुपये", "Daha rupaye", "Ten rupees", "घ्या", "Ghya", "Here you go"),
    ],
    medium: [
      s("प्रसाद हवाय का?", "Prasad havay ka?", "Do you want prasad?", "हो, दोन पुड्या द्या", "Ho, don pudya dyaa", "Yes, give me two packets"),
      s("फुले पण घ्या", "Phule pan ghya", "Take flowers too", "नको, फक्त प्रसाद", "Nako, phakt prasad", "No, just prasad"),
      s("वीस रुपये", "Vees rupaye", "Twenty rupees", "घ्या", "Ghya", "Here you go"),
    ],
    hard: [
      s("प्रसाद हवाय का?", "Prasad havay ka?", "Do you want prasad?", "हो, एक मोठी पुडी द्या", "Ho, ek mothi pudi dyaa", "Yes, give me one large packet"),
      s("फुले पण घ्या", "Phule pan ghya", "Take flowers too", "कितीला आहेत?", "Kitila aahet?", "How much are they?"),
      s("पाच रुपये", "Paach rupaye", "Five rupees", "ठीक आहे, द्या", "Theek aahe, dyaa", "Okay, give them"),
      s("वीस रुपये झाले", "Vees rupaye jhaale", "That will be twenty rupees", "घ्या", "Ghya", "Here you go"),
    ],
  },
  "deccan-pune-bus": {
    easy: [
      s("कुठे?", "Kuthe?", "Where to?", "स्वारगेट", "Swargate", "Swargate"),
      s("वीस रुपये", "Vees rupaye", "Twenty rupees", "घ्या", "Ghya", "Here you go"),
      s("घ्या, तिकीट", "Ghya, ticket", "Here, your ticket", "धन्यवाद", "Dhanyavaad", "Thank you"),
    ],
    medium: [
      s("कुठे?", "Kuthe?", "Where to?", "स्वारगेट", "Swargate", "Swargate"),
      s("मागून चढ, गर्दी आहे", "Magun chadh, gardi aahe", "Board from the back, it's crowded", "ठीक, मागून चढतो", "Theek, magun chadhto", "Okay, I'll board from the back"),
      s("हो, सांग", "Ho, saang", "Yes, tell me", "किती?", "Kiti?", "How much?"),
      s("वीस रुपये", "Vees rupaye", "Twenty rupees", "घ्या", "Ghya", "Here you go"),
      s("घ्या, तिकीट", "Ghya, ticket", "Here, your ticket", "धन्यवाद", "Dhanyavaad", "Thank you"),
    ],
    hard: [
      s("कुठे?", "Kuthe?", "Where to?", "स्वारगेट", "Swargate", "Swargate"),
      s("मागून चढ, गर्दी आहे", "Magun chadh, gardi aahe", "Board from the back, it's crowded", "ठीक, मागून चढतो", "Theek, magun chadhto", "Okay, I'll board from the back"),
      s("हो, सांग", "Ho, saang", "Yes, tell me", "एक तिकीट", "Ek ticket", "One ticket, please"),
      s("सांग", "Saang", "Tell me", "किती?", "Kiti?", "How much?"),
      s("वीस रुपये", "Vees rupaye", "Twenty rupees", "घ्या", "Ghya", "Here you go"),
      s("छोटे नोट?", "Chhote note?", "Small notes?", "हो, घ्या", "Ho, ghya", "Yes, here you go"),
      s("घ्या, तिकीट", "Ghya, ticket", "Here, your ticket", "धन्यवाद", "Dhanyavaad", "Thank you"),
    ],
  },
  "dadar-chowk-coffee": {
    easy: [
      s("काय घेणार?", "Kaay ghenar?", "What will you have?", "एक फिल्टर कॉफी द्या", "Ek filter coffee dya", "Give me one filter coffee"),
      s("तीस रुपये", "Tees rupaye", "Thirty rupees", "हे घ्या", "He ghya", "Here you go"),
      s("ही घ्या कॉफी", "Hee ghya coffee", "Here is the coffee", "धन्यवाद", "Dhanyawad", "Thank you"),
    ],
    medium: [
      s("काय घेणार?", "Kaay ghenar?", "What will you have?", "एक फिल्टर कॉफी द्या", "Ek filter coffee dya", "Give me one filter coffee"),
      s("गरम की थंड?", "Garam ki thand?", "Hot or cold?", "गरम कॉफी", "Garam coffee", "Hot coffee"),
      s("साखर किती?", "Sakhar kiti?", "How much sugar?", "थोडी कमी", "Thodi kami", "A little less sugar"),
      s("तीस रुपये", "Tees rupaye", "Thirty rupees", "हे घ्या", "He ghya", "Here you go"),
      s("ही घ्या कॉफी", "Hee ghya coffee", "Here is the coffee", "धन्यवाद", "Dhanyawad", "Thank you"),
    ],
    hard: [
      s("काय घेणार?", "Kaay ghenar?", "What will you have?", "एक फिल्टर कॉफी द्या", "Ek filter coffee dya", "Give me one filter coffee"),
      s("गरम की थंड?", "Garam ki thand?", "Hot or cold?", "गरम कॉफी", "Garam coffee", "Hot coffee"),
      s("साखर किती?", "Sakhar kiti?", "How much sugar?", "थोडी कमी", "Thodi kami", "A little less sugar"),
      s("अजून काही पाहिजे?", "Ajun kahi pahije?", "Anything else?", "नाही, फक्त कॉफी", "Nahi, phakta coffee", "No, just coffee"),
      s("तीस रुपये", "Tees rupaye", "Thirty rupees", "हे घ्या", "He ghya", "Here you go"),
      s("सुट्टे पैसे आहेत का?", "Sutte paise ahet ka?", "Do you have change?", "हो, हे घ्या", "Ho, he ghya", "Yes, here it is"),
      s("ही घ्या कॉफी", "Hee ghya coffee", "Here is the coffee", "धन्यवाद", "Dhanyawad", "Thank you"),
    ],
  },
  "deccan-pune-coffee": {
    easy: [
      s("काय घेणार?", "Kaay ghenar?", "What will you have?", "एक फिल्टर कॉफी द्या", "Ek filter coffee dya", "Give me one filter coffee"),
      s("तीस रुपये", "Tees rupaye", "Thirty rupees", "हे घ्या", "He ghya", "Here you go"),
      s("ही घ्या कॉफी", "Hee ghya coffee", "Here is the coffee", "धन्यवाद", "Dhanyawad", "Thank you"),
    ],
    medium: [
      s("काय घेणार?", "Kaay ghenar?", "What will you have?", "एक फिल्टर कॉफी द्या", "Ek filter coffee dya", "Give me one filter coffee"),
      s("गरम की थंड?", "Garam ki thand?", "Hot or cold?", "गरम कॉफी", "Garam coffee", "Hot coffee"),
      s("साखर किती?", "Sakhar kiti?", "How much sugar?", "थोडी कमी", "Thodi kami", "A little less sugar"),
      s("तीस रुपये", "Tees rupaye", "Thirty rupees", "हे घ्या", "He ghya", "Here you go"),
      s("ही घ्या कॉफी", "Hee ghya coffee", "Here is the coffee", "धन्यवाद", "Dhanyawad", "Thank you"),
    ],
    hard: [
      s("काय घेणार?", "Kaay ghenar?", "What will you have?", "एक फिल्टर कॉफी द्या", "Ek filter coffee dya", "Give me one filter coffee"),
      s("गरम की थंड?", "Garam ki thand?", "Hot or cold?", "गरम कॉफी", "Garam coffee", "Hot coffee"),
      s("साखर किती?", "Sakhar kiti?", "How much sugar?", "थोडी कमी", "Thodi kami", "A little less sugar"),
      s("अजून काही पाहिजे?", "Ajun kahi pahije?", "Anything else?", "नाही, फक्त कॉफी", "Nahi, phakta coffee", "No, just coffee"),
      s("तीस रुपये", "Tees rupaye", "Thirty rupees", "हे घ्या", "He ghya", "Here you go"),
      s("सुट्टे पैसे आहेत का?", "Sutte paise ahet ka?", "Do you have change?", "हो, हे घ्या", "Ho, he ghya", "Yes, here it is"),
      s("ही घ्या कॉफी", "Hee ghya coffee", "Here is the coffee", "धन्यवाद", "Dhanyawad", "Thank you"),
    ],
  },
};
