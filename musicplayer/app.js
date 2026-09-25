/**
 * AuraSound - Modern Music Player Application Engine
 * Offline-first, Mobile-optimized, 4-Language Audio Studio (Telugu, English, Tamil, Hindi)
 * Real Studio Streaming, Cloud Search, IndexedDB local storage, 5-band EQ, and MediaSession.
 */

// ==========================================
// 1. TELUGU, ENGLISH, TAMIL & HINDI REAL STUDIO CATALOG
// ==========================================
const defaultPlaylist = [
  {
    "id": "te-1",
    "title": "Naatu Naatu",
    "nativeTitle": "నాటు నాటు - ఆర్ఆర్ఆర్",
    "movie": "RRR - Telugu",
    "artist": "Rahul Sipligunj, Kaala Bhairava",
    "language": "Telugu",
    "langCode": "te",
    "genre": "Telugu OST",
    "src": "https://aac.saavncdn.com/683/000ab54759049a8451ffcdc6412a0ef6_160.mp4",
    "cover": "https://c.saavncdn.com/683/RRR-Telugu-Telugu-2022-20250828171313-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 214,
    "lyrics": [
      {
        "time": 0,
        "native": "పొలంగట్టు దుమ్ములోన పోతరాజు కట్టినట్టు... నాటు నాటు నాటు వీర నాటు!",
        "trans": "Oscar Winner for Best Original Song from RRR (2022)"
      },
      {
        "time": 15,
        "native": "Singers: Rahul Sipligunj, Kaala Bhairava",
        "trans": "Album: RRR - Telugu (2022)"
      },
      {
        "time": 30,
        "native": "Music: M.M. Keeravaani",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "te-2",
    "title": "Chuttamalle",
    "nativeTitle": "చుట్టమల్లే - దేవర",
    "movie": "Devara Part 1 - Telugu",
    "artist": "Anirudh Ravichander, Shilpa Rao, Ramajogayya Sastry",
    "language": "Telugu",
    "langCode": "te",
    "genre": "Telugu OST",
    "src": "https://aac.saavncdn.com/313/e49e604945889f330e5b3536dd0ff524_160.mp4",
    "cover": "https://c.saavncdn.com/313/Devara-Part-1-Telugu-Telugu-2024-20240926171010-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 222,
    "lyrics": [
      {
        "time": 0,
        "native": "చుట్టమల్లే చుట్టేసింది చూపే... గుండెల్లోన చేరింది ప్రేమ మైకం!",
        "trans": "Romantic melody from Devara Part 1 sung by Shilpa Rao & composed by Anirudh"
      },
      {
        "time": 15,
        "native": "Singers: Anirudh Ravichander, Shilpa Rao, Ramajogayya Sastry",
        "trans": "Album: Devara Part 1 - Telugu (2024)"
      },
      {
        "time": 30,
        "native": "Music: Anirudh Ravichander",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "te-3",
    "title": "Samajavaragamana - Male",
    "nativeTitle": "సామజవరగమనా - అల వైకుంఠపురములో",
    "movie": "Ala Vaikunthapurramuloo",
    "artist": "Sid Sriram",
    "language": "Telugu",
    "langCode": "te",
    "genre": "Telugu OST",
    "src": "https://aac.saavncdn.com/517/339d76dce4db4f43f4721eec2d8f03ef_160.mp4",
    "cover": "https://c.saavncdn.com/517/Ala-Vaikunthapurramuloo-Telugu-2019-20200116144338-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 219,
    "lyrics": [
      {
        "time": 0,
        "native": "నీ కాళ్లను పట్టుకు వదలనన్నవి చూడే నా కళ్లు... సామజవరగమనా!",
        "trans": "Chartbuster classic from Ala Vaikunthapurramuloo sung by Sid Sriram"
      },
      {
        "time": 15,
        "native": "Singers: Sid Sriram",
        "trans": "Album: Ala Vaikunthapurramuloo (2019)"
      },
      {
        "time": 30,
        "native": "Music: Thaman S",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "te-4",
    "title": "Inkem Inkem Inkem Kaavaale",
    "nativeTitle": "ఇంకేం ఇంకేం కావాలే - గీత గోవిందం",
    "movie": "Geetha Govindam",
    "artist": "Sid Sriram",
    "language": "Telugu",
    "langCode": "te",
    "genre": "Telugu OST",
    "src": "https://aac.saavncdn.com/237/7942edb73e64d4e35e488337e14753b7_160.mp4",
    "cover": "https://c.saavncdn.com/237/Geetha-Govindam-Telugu-2018-20180921-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 266,
    "lyrics": [
      {
        "time": 0,
        "native": "ఇంకేం ఇంకేం ఇంకేం కావాలే చాలే ఇది చాలే!",
        "trans": "Soulful love melody from Geetha Govindam sung by Sid Sriram"
      },
      {
        "time": 15,
        "native": "Singers: Sid Sriram",
        "trans": "Album: Geetha Govindam (2018)"
      },
      {
        "time": 30,
        "native": "Music: Gopi Sunder",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "te-5",
    "title": "Peelings (From \"Pushpa 2 The Rule\")",
    "nativeTitle": "పుష్ప పుష్ప - పుష్ప 2 ది రూల్",
    "movie": "Top 10 Dance Dhamaka Hits",
    "artist": "Shankarr Babu Kandukoori, Laxmi Dasa",
    "language": "Telugu",
    "langCode": "te",
    "genre": "Telugu OST",
    "src": "https://aac.saavncdn.com/915/338e5143057ba7dcd6c7bbbb1ce8bb89_160.mp4",
    "cover": "https://c.saavncdn.com/915/Top-10-Dance-Dhamaka-Hits-Telugu-2025-20251014181041-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 247,
    "lyrics": [
      {
        "time": 0,
        "native": "పుష్ప పుష్ప పుష్పరాజ్... తగ్గేదే లే!",
        "trans": "High energy anthem from Pushpa 2: The Rule composed by Devi Sri Prasad"
      },
      {
        "time": 15,
        "native": "Singers: Shankarr Babu Kandukoori, Laxmi Dasa",
        "trans": "Album: Top 10 Dance Dhamaka Hits (2025)"
      },
      {
        "time": 30,
        "native": "Music: Devi Sri Prasad",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "te-6",
    "title": "Fear Song - Telugu",
    "nativeTitle": "ఫియర్ సాంగ్ - దేవర",
    "movie": "Devara Part 1 - Telugu",
    "artist": "Anirudh Ravichander, Ramajogayya Sastry",
    "language": "Telugu",
    "langCode": "te",
    "genre": "Telugu OST",
    "src": "https://aac.saavncdn.com/313/1178c7b2a16c3fd32ec5cd002b5a1ce0_160.mp4",
    "cover": "https://c.saavncdn.com/313/Devara-Part-1-Telugu-Telugu-2024-20240926171010-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 195,
    "lyrics": [
      {
        "time": 0,
        "native": "భయమంటే భయపడే కాలం ఇది... రక్తపు సముద్రపు రాజసం!",
        "trans": "Raging warrior anthem from Devara Part 1 by Anirudh Ravichander"
      },
      {
        "time": 15,
        "native": "Singers: Anirudh Ravichander, Ramajogayya Sastry",
        "trans": "Album: Devara Part 1 - Telugu (2024)"
      },
      {
        "time": 30,
        "native": "Music: Anirudh Ravichander",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "te-7",
    "title": "Kurchi Madathapetti",
    "nativeTitle": "కుర్చీ మడతపెట్టి - గుంటూరు కారం",
    "movie": "Guntur Kaaram",
    "artist": "Mahesh Babu, Thaman S, Sri Krishna, Sahithi Chaganti",
    "language": "Telugu",
    "langCode": "te",
    "genre": "Telugu OST",
    "src": "https://aac.saavncdn.com/000/a8b06cdf02fd61001823e10d55ad3ebe_160.mp4",
    "cover": "https://c.saavncdn.com/000/Guntur-Kaaram-Telugu-2023-20240126145901-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 216,
    "lyrics": [
      {
        "time": 0,
        "native": "కుర్చీ మడతపెట్టి తాత దంచెయ్యరా... రచ్చ రచ్చే!",
        "trans": "Mass energetic dance celebration from Guntur Kaaram by Thaman S"
      },
      {
        "time": 15,
        "native": "Singers: Mahesh Babu, Thaman S, Sri Krishna, Sahithi Chaganti",
        "trans": "Album: Guntur Kaaram (2023)"
      },
      {
        "time": 30,
        "native": "Music: Thaman S",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "te-8",
    "title": "Buttabomma",
    "nativeTitle": "బుట్టబొమ్మ - అల వైకుంఠపురములో",
    "movie": "Ala Vaikunthapurramuloo",
    "artist": "Armaan Malik",
    "language": "Telugu",
    "langCode": "te",
    "genre": "Telugu OST",
    "src": "https://aac.saavncdn.com/517/68cc88035f2fbcd5772e6551bf64c111_160.mp4",
    "cover": "https://c.saavncdn.com/517/Ala-Vaikunthapurramuloo-Telugu-2019-20200116144338-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 198,
    "lyrics": [
      {
        "time": 0,
        "native": "బుట్టబొమ్మా బుట్టబొమ్మా నన్ను సుట్టుకుంటివే!",
        "trans": "Global viral Telugu melody from Ala Vaikunthapurramuloo by Armaan Malik"
      },
      {
        "time": 15,
        "native": "Singers: Armaan Malik",
        "trans": "Album: Ala Vaikunthapurramuloo (2019)"
      },
      {
        "time": 30,
        "native": "Music: Thaman S",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "en-1",
    "title": "My Heart Will Go On (Love Theme from \"Titanic\")",
    "nativeTitle": "My Heart Will Go On - Titanic",
    "movie": "Titanic",
    "artist": "James Horner, Céline Dion",
    "language": "English",
    "langCode": "en",
    "genre": "English OST",
    "src": "https://aac.saavncdn.com/354/c31e4b2daa3919e8ee394e9948d4bf63_160.mp4",
    "cover": "https://c.saavncdn.com/354/Titanic-Music-from-the-Motion-Picture-Soundtrack-English-2004-20171212173657-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 315,
    "lyrics": [
      {
        "time": 0,
        "native": "Every night in my dreams, I see you, I feel you... Near, far, wherever you are, I believe that the heart does go on!",
        "trans": "Academy Award winning love theme from Titanic (1997) by Céline Dion"
      },
      {
        "time": 15,
        "native": "Singers: James Horner, Céline Dion",
        "trans": "Album: Titanic (2004)"
      },
      {
        "time": 30,
        "native": "Music: James Horner",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "en-2",
    "title": "Blinding Lights",
    "nativeTitle": "Blinding Lights",
    "movie": "After Hours",
    "artist": "The Weeknd",
    "language": "English",
    "langCode": "en",
    "genre": "English OST",
    "src": "https://aac.saavncdn.com/077/0b02a92687d1ae3369b6859f44872e52_160.mp4",
    "cover": "https://c.saavncdn.com/077/After-Hours-English-2020-20260804045014-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 200,
    "lyrics": [
      {
        "time": 0,
        "native": "I said, ooh, I'm blinded by the lights... No, I can't sleep until I feel your touch!",
        "trans": "Record-breaking synthwave pop masterpiece by The Weeknd"
      },
      {
        "time": 15,
        "native": "Singers: The Weeknd",
        "trans": "Album: After Hours (2020)"
      },
      {
        "time": 30,
        "native": "Music: Max Martin, Oscar Holter, Abel &quot;The Weeknd&quot; Tesfaye, Ahmad Balshe, Jason &quot;daheala&quot; Quenneville",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "en-3",
    "title": "City Of Stars (From \"La La Land\" Soundtrack)",
    "nativeTitle": "City of Stars - La La Land",
    "movie": "Best girl & guy duets",
    "artist": "Ryan Gosling, Emma Stone",
    "language": "English",
    "langCode": "en",
    "genre": "English OST",
    "src": "https://aac.saavncdn.com/207/c09caa39ea6ea7f0667a9cdffab3add5_160.mp4",
    "cover": "https://c.saavncdn.com/207/Best-girl-guy-duets-English-2026-20260922211014-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 149,
    "lyrics": [
      {
        "time": 0,
        "native": "City of stars, are you shining just for me? City of stars, there's so much that I can't see.",
        "trans": "Oscar winning romantic cinema melody from La La Land"
      },
      {
        "time": 15,
        "native": "Singers: Ryan Gosling, Emma Stone",
        "trans": "Album: Best girl & guy duets (2026)"
      },
      {
        "time": 30,
        "native": "Music: Justin Hurwitz, Benj Pasek, Justin Paul",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "en-4",
    "title": "See You Again (feat. Charlie Puth)",
    "nativeTitle": "See You Again - Furious 7",
    "movie": "Furious 7: Original Motion Picture Soundtrack",
    "artist": "Wiz Khalifa",
    "language": "English",
    "langCode": "en",
    "genre": "English OST",
    "src": "https://aac.saavncdn.com/184/2cc2d21debad1425cb55e0a5bede7bf7_160.mp4",
    "cover": "https://c.saavncdn.com/184/Furious-7-Original-Motion-Picture-Soundtrack-English-2015-20240228160023-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 229,
    "lyrics": [
      {
        "time": 0,
        "native": "It's been a long day without you, my friend... And I'll tell you all about it when I see you again.",
        "trans": "Emotional cinematic tribute from Furious 7"
      },
      {
        "time": 15,
        "native": "Singers: Wiz Khalifa",
        "trans": "Album: Furious 7: Original Motion Picture Soundtrack (2015)"
      },
      {
        "time": 30,
        "native": "Music: ",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "en-5",
    "title": "Shallow",
    "nativeTitle": "Shallow - A Star Is Born",
    "movie": "A Star Is Born Soundtrack",
    "artist": "Lady Gaga, Bradley Cooper",
    "language": "English",
    "langCode": "en",
    "genre": "English OST",
    "src": "https://aac.saavncdn.com/766/d360f3225c4c8710b359bab94fbe642f_160.mp4",
    "cover": "https://c.saavncdn.com/766/A-Star-Is-Born-Soundtrack-English-2018-20260605163048-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 216,
    "lyrics": [
      {
        "time": 0,
        "native": "I'm off the deep end, watch as I dive in... Crash through the surface, we're far from the shallow now!",
        "trans": "Grammy and Oscar winning ballad from A Star Is Born"
      },
      {
        "time": 15,
        "native": "Singers: Lady Gaga, Bradley Cooper",
        "trans": "Album: A Star Is Born Soundtrack (2018)"
      },
      {
        "time": 30,
        "native": "Music: Lady Gaga, Mark Ronson, Anthony Rossomando, Andrew Wyatt",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "en-6",
    "title": "Shape of You",
    "nativeTitle": "Shape of You",
    "movie": "÷",
    "artist": "Ed Sheeran",
    "language": "English",
    "langCode": "en",
    "genre": "English OST",
    "src": "https://aac.saavncdn.com/286/2929d11a5d44a3592ced0383fa6f1977_160.mp4",
    "cover": "https://c.saavncdn.com/286/WMG_190295851286-English-2017-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 233,
    "lyrics": [
      {
        "time": 0,
        "native": "I'm in love with the shape of you, we push and pull like a magnet do... Every day discovering something brand new!",
        "trans": "Multi-billion streamed acoustic pop phenomenon by Ed Sheeran"
      },
      {
        "time": 15,
        "native": "Singers: Ed Sheeran",
        "trans": "Album: ÷ (2017)"
      },
      {
        "time": 30,
        "native": "Music: ",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "en-7",
    "title": "Believer",
    "nativeTitle": "Believer",
    "movie": "Evolve",
    "artist": "Imagine Dragons",
    "language": "English",
    "langCode": "en",
    "genre": "English OST",
    "src": "https://aac.saavncdn.com/248/46944eb7b4b31f5b0abf5eb2e1be2d2a_160.mp4",
    "cover": "https://c.saavncdn.com/248/Evolve-English-2018-20260605220036-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 204,
    "lyrics": [
      {
        "time": 0,
        "native": "First things first, I'ma say all the words inside my head... Pain! You made me a believer!",
        "trans": "High-octane stadium anthem by Imagine Dragons"
      },
      {
        "time": 15,
        "native": "Singers: Imagine Dragons",
        "trans": "Album: Evolve (2018)"
      },
      {
        "time": 30,
        "native": "Music: Dan Reynolds, Wayne Sermon, Ben Mckee, Daniel Platzman, Robin Fredriksson, Mattias Larsson, Justin Tranter",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "en-8",
    "title": "Interstellar Main Theme (From \"Interstellar\")",
    "nativeTitle": "First Step (Cornfield Chase) - Interstellar",
    "movie": "Interstellar Main Theme (From \"Interstellar\")",
    "artist": "Geek Music",
    "language": "English",
    "langCode": "en",
    "genre": "English OST",
    "src": "https://aac.saavncdn.com/847/811aa1be98411b4248ca988e65a43c4e_160.mp4",
    "cover": "https://c.saavncdn.com/847/Interstellar-Main-Theme-From-Interstellar-English-2017-20251030232307-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 243,
    "lyrics": [
      {
        "time": 0,
        "native": "[Epic Cinematic Pipe Organ & Space Crescendo]",
        "trans": "Hans Zimmer's iconic space soundtrack from Interstellar (2014)"
      },
      {
        "time": 15,
        "native": "Singers: Geek Music",
        "trans": "Album: Interstellar Main Theme (From \"Interstellar\") (2017)"
      },
      {
        "time": 30,
        "native": "Music: Hans Zimmer",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "ta-1",
    "title": "Arabic Kuthu - Halamithi Habibo",
    "nativeTitle": "அரபிக் குத்து - பீஸ்ட்",
    "movie": "Beast",
    "artist": "Anirudh Ravichander, Jonita Gandhi",
    "language": "Tamil",
    "langCode": "ta",
    "genre": "Tamil OST",
    "src": "https://aac.saavncdn.com/510/9d96fc7ddd4ffadb745f25aed86f7a4e_160.mp4",
    "cover": "https://c.saavncdn.com/510/Beast-Tamil-2022-20220504184736-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 279,
    "lyrics": [
      {
        "time": 0,
        "native": "ஹலமிதி ஹபிபோ... அரபிக் குத்து ஆடலாமா பேபி!",
        "trans": "Sensational party anthem from Beast composed by Anirudh Ravichander"
      },
      {
        "time": 15,
        "native": "Singers: Anirudh Ravichander, Jonita Gandhi",
        "trans": "Album: Beast (2022)"
      },
      {
        "time": 30,
        "native": "Music: Anirudh Ravichander, Sivakarthikeyan",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "ta-2",
    "title": "Hukum",
    "nativeTitle": "ஹுக்கும் - ஜெயிலர்",
    "movie": "Jailer",
    "artist": "Dinker Kalvala, Anirudh Ravichander, Bhaskarabhatla Ravi Kumar",
    "language": "Tamil",
    "langCode": "ta",
    "genre": "Tamil OST",
    "src": "https://aac.saavncdn.com/435/4161a58e6cff0010c02431e6c21728d9_160.mp4",
    "cover": "https://c.saavncdn.com/435/Jailer-Telugu-2023-20230810132954-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 207,
    "lyrics": [
      {
        "time": 0,
        "native": "ஹுக்கும் டைகர் கா ஹுக்கும்... தலைவர் அலப்பறை தாளமுடியாது!",
        "trans": "Thalaivar Rajinikanth's roar from Jailer by Anirudh Ravichander"
      },
      {
        "time": 15,
        "native": "Singers: Dinker Kalvala, Anirudh Ravichander, Bhaskarabhatla Ravi Kumar",
        "trans": "Album: Jailer (2023)"
      },
      {
        "time": 30,
        "native": "Music: Anirudh Ravichander, Dinker Kalvala, Bhaskarabhatla Ravi Kumar",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "ta-3",
    "title": "Why This Kolaveri Di (The Soup Of Love)",
    "nativeTitle": "ஒய் திஸ் கொலவெறி டி - 3",
    "movie": "3 (Hindi)",
    "artist": "Anirudh Ravichander, Dhanush",
    "language": "Tamil",
    "langCode": "ta",
    "genre": "Tamil OST",
    "src": "https://aac.saavncdn.com/932/7cf7f8a9d9c3faa2633d1605e97ba4a5_160.mp4",
    "cover": "https://c.saavncdn.com/932/3-Hindi-2012-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 263,
    "lyrics": [
      {
        "time": 0,
        "native": "ஒய் திஸ் கொலவெறி கொலவெறி கொலவெறி டி... மூன் நிலா நிலா கலரு பிளாக்!",
        "trans": "Global viral anthem from movie 3 by Dhanush & Anirudh"
      },
      {
        "time": 15,
        "native": "Singers: Anirudh Ravichander, Dhanush",
        "trans": "Album: 3 (Hindi) (2012)"
      },
      {
        "time": 30,
        "native": "Music: Anirudh Ravichander",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "ta-4",
    "title": "Rowdy Baby",
    "nativeTitle": "ரவுடி பேபி - மாரி 2",
    "movie": "Maari 2",
    "artist": "Dhanush, Yuvan Shankar Raja, Dhee",
    "language": "Tamil",
    "langCode": "ta",
    "genre": "Tamil OST",
    "src": "https://aac.saavncdn.com/276/64b835b4e1829992f8d35f54d6dad5f3_160.mp4",
    "cover": "https://c.saavncdn.com/276/Maari-2-Tamil-2018-20260203193952-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 281,
    "lyrics": [
      {
        "time": 0,
        "native": "நீதான் என் ரவுடி பேபி... கண்ணுபட்டு போனது காதல் ஆச்சு!",
        "trans": "Record-shattering dance sensation from Maari 2 by Yuvan Shankar Raja"
      },
      {
        "time": 15,
        "native": "Singers: Dhanush, Yuvan Shankar Raja, Dhee",
        "trans": "Album: Maari 2 (2018)"
      },
      {
        "time": 30,
        "native": "Music: Yuvan Shankar Raja",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "ta-5",
    "title": "Kaavaalaa",
    "nativeTitle": "காவாலா - ஜெயிலர்",
    "movie": "Jailer",
    "artist": "Shilpa Rao, Anirudh Ravichander, Arunraja Kamaraj",
    "language": "Tamil",
    "langCode": "ta",
    "genre": "Tamil OST",
    "src": "https://aac.saavncdn.com/187/49797372d021638077d8a6b749068bc8_160.mp4",
    "cover": "https://c.saavncdn.com/187/Jailer-Tamil-2023-20230728081443-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 190,
    "lyrics": [
      {
        "time": 0,
        "native": "காவாலையா காவாலையா... மனசு துள்ளுதே ஆசையிலே!",
        "trans": "Catchy dance melody from Jailer sung by Shilpa Rao & Anirudh"
      },
      {
        "time": 15,
        "native": "Singers: Shilpa Rao, Anirudh Ravichander, Arunraja Kamaraj",
        "trans": "Album: Jailer (2023)"
      },
      {
        "time": 30,
        "native": "Music: Anirudh Ravichander, Shilpa Rao, Arunraja Kamaraj",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "ta-6",
    "title": "Vaseegara (From \"Minnale\")",
    "nativeTitle": "வசீகரா - மின்னலே",
    "movie": "2 - In - 1 Hits Of Maddy",
    "artist": "Bombay Jayashri",
    "language": "Tamil",
    "langCode": "ta",
    "genre": "Tamil OST",
    "src": "https://aac.saavncdn.com/450/4f7b9da8e887586e60b11afb602befac_160.mp4",
    "cover": "https://c.saavncdn.com/450/2-In-1-Hits-Of-Maddy-Tamil-2001-20190515150512-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 299,
    "lyrics": [
      {
        "time": 0,
        "native": "வசீகரா என் நெஞ்சினிக்க உன் பொன்மடியில் தூங்கினால் போதும்!",
        "trans": "Timeless romantic masterpiece from Minnale by Bombay Jayashri & Harris Jayaraj"
      },
      {
        "time": 15,
        "native": "Singers: Bombay Jayashri",
        "trans": "Album: 2 - In - 1 Hits Of Maddy (2001)"
      },
      {
        "time": 30,
        "native": "Music: Harris Jayaraj",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "ta-7",
    "title": "Enjoy Enjaami",
    "nativeTitle": "என்ஜாய் எஞ்சாமி",
    "movie": "Enjoy Enjaami",
    "artist": "Arivu, Santhosh Narayanan, Dhee",
    "language": "Tamil",
    "langCode": "ta",
    "genre": "Tamil OST",
    "src": "https://aac.saavncdn.com/940/d9265bc9d27d51d4296ef27de2547ba0_160.mp4",
    "cover": "https://c.saavncdn.com/940/Enjoy-Enjaami-Tamil-2021-20260227060111-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 279,
    "lyrics": [
      {
        "time": 0,
        "native": "என்ஜாய் எஞ்சாமி வாங்கோ வாங்கோ ஒன்னாகி... அம்பா மாரி மாரி அம்பா!",
        "trans": "Celebration of earth, roots, and ancestors by Dhee, Arivu & Santhosh Narayanan"
      },
      {
        "time": 15,
        "native": "Singers: Arivu, Santhosh Narayanan, Dhee",
        "trans": "Album: Enjoy Enjaami (2021)"
      },
      {
        "time": 30,
        "native": "Music: Dhee, Arivu, Santhosh Narayanan, Arivarasu T. Kalainesan",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "ta-8",
    "title": "Kanmani Anbodu Kadhalan",
    "nativeTitle": "கண்மணி அன்போடு காதலன் - குணா",
    "movie": "Kanmani Anbodu Kadhalan",
    "artist": "Shubham",
    "language": "Tamil",
    "langCode": "ta",
    "genre": "Tamil OST",
    "src": "https://aac.saavncdn.com/960/042a49192fa269a35a27726307ab008c_160.mp4",
    "cover": "https://c.saavncdn.com/960/Kanmani-Anbodu-Kadhalan-Hindi-2024-20241028074659-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 198,
    "lyrics": [
      {
        "time": 0,
        "native": "கண்மணி அன்போடு காதலன் நான் நான் எழுதும் கடிதமே... பொன்மணி உன் வீட்டில் சௌக்கியமா?",
        "trans": "Immortal romantic melody by Kamal Haasan, S.P.B., S. Janaki & Ilaiyaraaja"
      },
      {
        "time": 15,
        "native": "Singers: Shubham",
        "trans": "Album: Kanmani Anbodu Kadhalan (2024)"
      },
      {
        "time": 30,
        "native": "Music: Shubham, Syifah Suraya",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "hi-1",
    "title": "Tum Hi Ho",
    "nativeTitle": "तुम ही हो - आशिकी २",
    "movie": "Aashiqui 2",
    "artist": "Mithoon, Arijit Singh",
    "language": "Hindi",
    "langCode": "hi",
    "genre": "Hindi OST",
    "src": "https://aac.saavncdn.com/430/5c5ea5cc00e3bff45616013226f376fe_160.mp4",
    "cover": "https://c.saavncdn.com/430/Aashiqui-2-Hindi-2013-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 262,
    "lyrics": [
      {
        "time": 0,
        "native": "क्योंकि तुम ही हो, अब तुम ही हो, ज़िंदगी अब तुम ही हो!",
        "trans": "Iconic love anthem of a generation from Aashiqui 2 by Arijit Singh"
      },
      {
        "time": 15,
        "native": "Singers: Mithoon, Arijit Singh",
        "trans": "Album: Aashiqui 2 (2013)"
      },
      {
        "time": 30,
        "native": "Music: Mithoon",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "hi-2",
    "title": "Kesariya",
    "nativeTitle": "केसरिया - ब्रह्मास्त्र",
    "movie": "Brahmastra",
    "artist": "Pritam, Arijit Singh, Amitabh Bhattacharya",
    "language": "Hindi",
    "langCode": "hi",
    "genre": "Hindi OST",
    "src": "https://aac.saavncdn.com/871/c2febd353f3a076a406fa37510f31f9f_160.mp4",
    "cover": "https://c.saavncdn.com/871/Brahmastra-Original-Motion-Picture-Soundtrack-Hindi-2022-20221006155213-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 268,
    "lyrics": [
      {
        "time": 0,
        "native": "केसरिया तेरा इश्क़ है पिया, रंग जाऊं जो मैं हाथ लगाऊं!",
        "trans": "Saffron-hued romance from Brahmāstra sung by Arijit Singh & Pritam"
      },
      {
        "time": 15,
        "native": "Singers: Pritam, Arijit Singh, Amitabh Bhattacharya",
        "trans": "Album: Brahmastra (2022)"
      },
      {
        "time": 30,
        "native": "Music: Pritam",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "hi-3",
    "title": "Apna Bana Le",
    "nativeTitle": "अपना बना ले - भेड़िया",
    "movie": "Bhediya",
    "artist": "Sachin-Jigar, Arijit Singh",
    "language": "Hindi",
    "langCode": "hi",
    "genre": "Hindi OST",
    "src": "https://aac.saavncdn.com/815/483a6e118e8108cbb3e5cd8701674f32_160.mp4",
    "cover": "https://c.saavncdn.com/815/Bhediya-Hindi-2023-20230927155213-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 261,
    "lyrics": [
      {
        "time": 0,
        "native": "अपना बना ले पिया, अपना बना ले पिया... दिल के नगर में घर बसा ले पिया!",
        "trans": "Soul-stirring romantic ballad from Bhediya by Arijit Singh & Sachin-Jigar"
      },
      {
        "time": 15,
        "native": "Singers: Sachin-Jigar, Arijit Singh",
        "trans": "Album: Bhediya (2023)"
      },
      {
        "time": 30,
        "native": "Music: Sachin-Jigar",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "hi-4",
    "title": "Chaleya",
    "nativeTitle": "चलेया - जवान",
    "movie": "Jawan",
    "artist": "Anirudh Ravichander, Arijit Singh, Shilpa Rao",
    "language": "Hindi",
    "langCode": "hi",
    "genre": "Hindi OST",
    "src": "https://aac.saavncdn.com/047/d1366530468931703ac909e82a3ee788_160.mp4",
    "cover": "https://c.saavncdn.com/047/Jawan-Hindi-2023-20230921190854-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 200,
    "lyrics": [
      {
        "time": 0,
        "native": "इश्क़ में दिल बना है, इश्क़ में दिल फना है... चलेया तेरी ओर चलेया!",
        "trans": "Breezy romantic chartbuster from Jawan by Arijit Singh, Shilpa Rao & Anirudh"
      },
      {
        "time": 15,
        "native": "Singers: Anirudh Ravichander, Arijit Singh, Shilpa Rao",
        "trans": "Album: Jawan (2023)"
      },
      {
        "time": 30,
        "native": "Music: Anirudh Ravichander",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "hi-5",
    "title": "Tauba Tauba",
    "nativeTitle": "तौबा तौबा - बैड न्यूज़",
    "movie": "Bad Newz",
    "artist": "Karan Aujla",
    "language": "Hindi",
    "langCode": "hi",
    "genre": "Hindi OST",
    "src": "https://aac.saavncdn.com/992/5d44da8bc1d78fb72d18b701d758fd1f_160.mp4",
    "cover": "https://c.saavncdn.com/992/Bad-Newz-Hindi-2024-20250730113701-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 207,
    "lyrics": [
      {
        "time": 0,
        "native": "हुस्न तेरा तौबा तौबा... तेरी नशीली अखियां!",
        "trans": "Electrifying Punjabi pop party explosion by Karan Aujla"
      },
      {
        "time": 15,
        "native": "Singers: Karan Aujla",
        "trans": "Album: Bad Newz (2024)"
      },
      {
        "time": 30,
        "native": "Music: Karan Aujla, Mr Tuomo KORANDER, Mr Tommi VATANEN",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "hi-6",
    "title": "Raataan Lambiyan",
    "nativeTitle": "रातां लंबियां - शेरशाह",
    "movie": "Shershaah",
    "artist": "Tanishk Bagchi, Jubin Nautiyal, Asees Kaur",
    "language": "Hindi",
    "langCode": "hi",
    "genre": "Hindi OST",
    "src": "https://aac.saavncdn.com/238/35726d4394604604e961bf5b846870d0_160.mp4",
    "cover": "https://c.saavncdn.com/238/Shershaah-Original-Motion-Picture-Soundtrack--Hindi-2021-20210815181610-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 230,
    "lyrics": [
      {
        "time": 0,
        "native": "काटू कैसे रातां, ओ सांवरे? जिया नहीं जाता, सुन बांवरे!",
        "trans": "Heart-touching melody from Shershaah by Jubin Nautiyal & Asees Kaur"
      },
      {
        "time": 15,
        "native": "Singers: Tanishk Bagchi, Jubin Nautiyal, Asees Kaur",
        "trans": "Album: Shershaah (2021)"
      },
      {
        "time": 30,
        "native": "Music: Tanishk Bagchi",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "hi-7",
    "title": "Chaiyya Chaiyya",
    "nativeTitle": "छैयां छैयां - दिल से",
    "movie": "Dil Se",
    "artist": "Sukhwinder Singh, Sapna Awasthi",
    "language": "Hindi",
    "langCode": "hi",
    "genre": "Hindi OST",
    "src": "https://aac.saavncdn.com/430/a0e785e625b39386d732980405119e3b_160.mp4",
    "cover": "https://c.saavncdn.com/430/Dil-Se-Hindi-1998-20210226142402-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 410,
    "lyrics": [
      {
        "time": 0,
        "native": "चल छैयां छैयां छैयां छैयां... जिसके सर ढल धूप की चादर!",
        "trans": "A.R. Rahman's masterpiece train rhythm from Dil Se.. by Sukhwinder Singh"
      },
      {
        "time": 15,
        "native": "Singers: Sukhwinder Singh, Sapna Awasthi",
        "trans": "Album: Dil Se (1998)"
      },
      {
        "time": 30,
        "native": "Music: A.R. Rahman",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "hi-8",
    "title": "Kal Ho Naa Ho",
    "nativeTitle": "कल हो ना हो - शीर्षक गीत",
    "movie": "Kal Ho Naa Ho",
    "artist": "Shankar-Ehsaan-Loy, Sonu Nigam",
    "language": "Hindi",
    "langCode": "hi",
    "genre": "Hindi OST",
    "src": "https://aac.saavncdn.com/587/d3bd1ed49eb108d2425e4875cc3ad86e_160.mp4",
    "cover": "https://c.saavncdn.com/587/Kal-Ho-Naa-Ho-Hindi-2003-20190516130956-500x500.jpg",
    "glowColor": "rgba(99, 102, 241, 0.6)",
    "favorite": true,
    "isMovie": true,
    "duration": 321,
    "lyrics": [
      {
        "time": 0,
        "native": "हर घड़ी बदल रही है रूप ज़िंदगी... हर पल यहाँ जी भर जियो, जो है समां कल हो ना हो!",
        "trans": "Evergreen cinematic life philosophy from Kal Ho Naa Ho by Sonu Nigam"
      },
      {
        "time": 15,
        "native": "Singers: Shankar-Ehsaan-Loy, Sonu Nigam",
        "trans": "Album: Kal Ho Naa Ho (2003)"
      },
      {
        "time": 30,
        "native": "Music: Shankar-Ehsaan-Loy, Shankar Mahadevan, Ehsaan Noorani, Loy Mendonsa",
        "trans": "Authentic studio recording playing in high-fidelity on AuraSound"
      }
    ],
    "isOnline": true
  },
  {
    "id": "track-procedural-1",
    "title": "Aura Infinity Synth",
    "nativeTitle": "Aura Infinity Synth (100% Offline Ambient Radio)",
    "movie": "AuraSound Studio AI",
    "artist": "Web Audio Generative Engine",
    "language": "Telugu, English, Tamil & Hindi Mix",
    "langCode": "inst",
    "genre": "Generative Ambient",
    "src": "procedural://synth-ambient",
    "cover": "./icons/icon-512.png",
    "glowColor": "rgba(168, 85, 247, 0.7)",
    "favorite": true,
    "isMovie": false,
    "lyrics": [
      {
        "time": 0,
        "native": "Procedural ambient synthesizer playing live in browser",
        "trans": "Synthesized in real-time with Web Audio API - 0% Internet needed"
      },
      {
        "time": 15,
        "native": "Harmonic chords, calming rhythms, and endless relaxation",
        "trans": "Plays continuously forever without any network connection!"
      }
    ],
    "isOnline": true
  }
];

// ==========================================
// 2. APPLICATION STATE
// ==========================================
let playlist = [...defaultPlaylist];
let currentTrackIndex = 0;
let isPlaying = false;
let isMuted = false;
let isShuffle = false;
let repeatMode = 0; // 0 = Off, 1 = Repeat All, 2 = Repeat One
let currentLangFilter = 'all'; // 'all', 'movies', 'te', 'en', 'ta', 'hi', 'favs', 'local'
let previousVolume = 0.8;
let currentEqPreset = 'flat';
let sleepTimerId = null;
let sleepTimeRemaining = 0; // seconds
let visualizerMode = 'bars'; // 'bars', 'wave', 'radial'
let currentActiveView = 'player'; // 'player', 'library', 'lyrics', 'eq'
let isProceduralMode = false;
let isSearchingOnline = false;
let onlineSearchResults = [];

// HTML5 Audio
const audio = new Audio();
audio.crossOrigin = "anonymous";
audio.preload = "auto";

// Web Audio API context & nodes
let audioCtx = null;
let audioSourceNode = null;
let analyser = null;
let eqFilters = [];
let visualizerInitialized = false;

// Procedural Synth State
let proceduralInterval = null;
let proceduralStep = 0;
let proceduralGain = null;

// ==========================================
// 3. INDEXED-DB PERSISTENCE (Offline Local Files, Saved Tracks & Favorites)
// ==========================================
const DB_NAME = 'AuraSoundDB';
const DB_VERSION = 1;
let db = null;

function initIndexedDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (e) => {
      const database = e.target.result;
      if (!database.objectStoreNames.contains('uploaded_tracks')) {
        database.createObjectStore('uploaded_tracks', { keyPath: 'id' });
      }
      if (!database.objectStoreNames.contains('favorites')) {
        database.createObjectStore('favorites', { keyPath: 'id' });
      }
      if (!database.objectStoreNames.contains('settings')) {
        database.createObjectStore('settings', { keyPath: 'key' });
      }
    };

    request.onsuccess = (e) => {
      db = e.target.result;
      loadSavedDataFromDB().then(resolve);
    };

    request.onerror = (e) => {
      console.warn('IndexedDB failed to initialize:', e);
      resolve();
    };
  });
}

async function loadSavedDataFromDB() {
  if (!db) return;
  try {
    // 1. Load Saved Tracks (Local imports + Cloud saved offline tracks)
    const tx = db.transaction('uploaded_tracks', 'readonly');
    const store = tx.objectStore('uploaded_tracks');
    const getAllRequest = store.getAll();

    getAllRequest.onsuccess = () => {
      const localTracks = getAllRequest.result || [];
      localTracks.forEach((track) => {
        if (track.blob) {
          track.src = URL.createObjectURL(track.blob);
          playlist.push(track);
        }
      });
      renderPlaylist();
      updateTrackCount();
    };

    // 2. Load Favorites
    const favTx = db.transaction('favorites', 'readonly');
    const favStore = favTx.objectStore('favorites');
    const favRequest = favStore.getAll();
    favRequest.onsuccess = () => {
      const favList = favRequest.result || [];
      const favSet = new Set(favList.map(f => f.id));
      playlist.forEach(t => {
        if (favSet.has(t.id)) t.favorite = true;
      });
      updateFavoriteUI();
      renderPlaylist();
    };

    // 3. Load Settings
    const setTx = db.transaction('settings', 'readonly');
    const setStore = setTx.objectStore('settings');
    const setReq = setStore.getAll();
    setReq.onsuccess = () => {
      const settings = setReq.result || [];
      settings.forEach(s => {
        if (s.key === 'volume' && s.val !== undefined) {
          audio.volume = s.val;
          const volBar = document.getElementById('volumeBar');
          if (volBar) volBar.value = s.val;
          updateVolumeIcon();
        }
        if (s.key === 'visualizerMode' && s.val) {
          visualizerMode = s.val;
        }
      });
    };
  } catch (err) {
    console.error('Error loading data from IndexedDB:', err);
  }
}

function saveTrackToDB(trackData) {
  if (!db) return;
  try {
    const tx = db.transaction('uploaded_tracks', 'readwrite');
    tx.objectStore('uploaded_tracks').put(trackData);
  } catch (e) {
    console.error('Error saving track to IndexedDB', e);
  }
}

function removeTrackFromDB(id) {
  if (!db) return;
  try {
    const tx = db.transaction('uploaded_tracks', 'readwrite');
    tx.objectStore('uploaded_tracks').delete(id);
  } catch (e) {
    console.error('Error removing track from IndexedDB', e);
  }
}

function saveFavoriteToDB(trackId, isFav) {
  if (!db) return;
  try {
    const tx = db.transaction('favorites', 'readwrite');
    const store = tx.objectStore('favorites');
    if (isFav) {
      store.put({ id: trackId });
    } else {
      store.delete(trackId);
    }
  } catch (e) {
    console.error('Error updating favorite in IndexedDB', e);
  }
}

function saveSettingToDB(key, val) {
  if (!db) return;
  try {
    const tx = db.transaction('settings', 'readwrite');
    tx.objectStore('settings').put({ key, val });
  } catch (e) {}
}

// Save any real online song to IndexedDB for 100% offline access
async function saveOnlineSongForOffline(trackId) {
  const track = playlist.find(t => t.id === trackId) || onlineSearchResults.find(t => t.id === trackId);
  if (!track || !track.src) return;

  showToast(`Downloading "${track.title}" for offline playback...`);
  try {
    const response = await fetch(track.src);
    if (!response.ok) throw new Error('Audio download failed');
    const blob = await response.blob();

    const offlineTrack = {
      ...track,
      id: track.id.startsWith('offline-') ? track.id : 'offline-' + track.id,
      blob: blob,
      isLocal: true,
      isOfflineCached: true
    };

    const existingIdx = playlist.findIndex(t => t.id === offlineTrack.id);
    if (existingIdx !== -1) {
      playlist[existingIdx] = offlineTrack;
    } else {
      playlist.push(offlineTrack);
    }

    saveTrackToDB(offlineTrack);
    renderPlaylist();
    updateTrackCount();
    showToast(`Saved "${track.title}" to Offline Library! 🎧`);
  } catch (err) {
    console.error('Failed to save track for offline:', err);
    showToast('Download failed. Ensure you are connected to the network.');
  }
}

// ==========================================
// 4. LIVE ONLINE SEARCH & STREAMING ENGINE
// ==========================================
async function searchOnlineMusic(query) {
  if (!query || query.trim().length < 2) return;
  const statusEl = document.getElementById('onlineSearchStatus');
  if (statusEl) {
    statusEl.innerHTML = '<span class="text-indigo-300 animate-pulse"><i class="fa-solid fa-spinner fa-spin mr-1"></i>Searching cloud library...</span>';
  }

  try {
    const resp = await fetch(`/api/search?q=${encodeURIComponent(query.trim())}&limit=12`);
    if (!resp.ok) throw new Error('Search API endpoint unavailable');
    const songs = await resp.json();
    onlineSearchResults = songs || [];
    renderOnlineResults();
    if (statusEl) {
      statusEl.innerHTML = `<span class="text-emerald-400"><i class="fa-solid fa-check mr-1"></i>Found ${songs.length} real songs online</span>`;
    }
  } catch (err) {
    console.warn('Online search warning:', err);
    if (statusEl) {
      statusEl.innerHTML = '<span class="text-slate-400 text-[11px]"><i class="fa-solid fa-cloud mr-1"></i>Showing matching tracks from local studio library</span>';
    }
  }
}

function renderOnlineResults() {
  const container = document.getElementById('onlineResultsContainer');
  if (!container) return;

  container.innerHTML = '';
  if (!onlineSearchResults || onlineSearchResults.length === 0) {
    container.classList.add('hidden');
    return;
  }

  container.classList.remove('hidden');

  const header = document.createElement('div');
  header.className = 'flex items-center justify-between text-xs font-bold text-amber-300 px-1 py-1 border-b border-amber-500/20 mb-2';
  header.innerHTML = `
    <span class="flex items-center gap-1.5"><i class="fa-solid fa-cloud"></i> Online Search Results (${onlineSearchResults.length})</span>
    <button id="closeOnlineResultsBtn" class="text-slate-400 hover:text-white text-sm"><i class="fa-solid fa-xmark"></i></button>
  `;
  container.appendChild(header);

  onlineSearchResults.forEach(track => {
    const card = document.createElement('div');
    card.className = 'glass-card p-2.5 flex items-center justify-between cursor-pointer hover:border-amber-400/40 mb-2 transition-all';
    card.innerHTML = `
      <div class="flex items-center space-x-3 truncate">
        <img src="${track.cover}" alt="${escapeHtml(track.title)}" class="w-10 h-10 rounded-lg object-cover flex-shrink-0" onerror="this.src='./icons/icon-192.png'">
        <div class="truncate">
          <p class="text-xs font-bold text-white truncate">${escapeHtml(track.title)}</p>
          <p class="text-[11px] text-amber-300/80 truncate">From "${escapeHtml(track.movie)}" • ${escapeHtml(track.artist)}</p>
        </div>
      </div>
      <div class="flex items-center space-x-1.5 flex-shrink-0">
        <button class="save-offline-btn p-1.5 rounded-lg text-slate-400 hover:text-emerald-400" title="Save for Offline" data-id="${track.id}">
          <i class="fa-solid fa-cloud-arrow-down text-xs"></i>
        </button>
        <button class="play-online-btn px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1 shadow-md" data-id="${track.id}">
          <i class="fa-solid fa-play text-[10px]"></i> Play
        </button>
      </div>
    `;

    card.querySelector('.play-online-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      playOnlineTrack(track);
    });

    card.querySelector('.save-offline-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      saveOnlineSongForOffline(track.id);
    });

    card.addEventListener('click', () => {
      playOnlineTrack(track);
    });

    container.appendChild(card);
  });

  document.getElementById('closeOnlineResultsBtn')?.addEventListener('click', () => {
    container.classList.add('hidden');
  });
}

function playOnlineTrack(track) {
  let existingIdx = playlist.findIndex(t => t.id === track.id || t.src === track.src);
  if (existingIdx === -1) {
    playlist.unshift(track);
    currentTrackIndex = 0;
  } else {
    currentTrackIndex = existingIdx;
  }

  loadTrack(currentTrackIndex);
  playTrack();
  showToast(`Playing "${track.title}" 🎵`);
  renderPlaylist();
  updateTrackCount();
}

// ==========================================
// 5. WEB AUDIO API & 5-BAND EQUALIZER
// ==========================================
const EQ_FREQUENCIES = [60, 250, 1000, 4000, 16000];
const EQ_PRESETS = {
  flat: [0, 0, 0, 0, 0],
  bass: [7, 5, 1, -1, -2],
  vocal: [-2, 1, 5, 4, 1],
  electronic: [6, 4, -1, 3, 5],
  rock: [5, 3, -1, 2, 4],
  chill: [3, 2, 1, 2, 3],
  treble: [-3, -1, 2, 5, 7]
};

function initWebAudio() {
  if (visualizerInitialized) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();

    eqFilters = EQ_FREQUENCIES.map((freq, index) => {
      const filter = audioCtx.createBiquadFilter();
      if (index === 0) {
        filter.type = 'lowshelf';
      } else if (index === EQ_FREQUENCIES.length - 1) {
        filter.type = 'highshelf';
      } else {
        filter.type = 'peaking';
        filter.Q.value = 1.0;
      }
      filter.frequency.value = freq;
      filter.gain.value = 0;
      return filter;
    });

    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 128;

    audioSourceNode = audioCtx.createMediaElementSource(audio);

    let prevNode = audioSourceNode;
    eqFilters.forEach(filter => {
      prevNode.connect(filter);
      prevNode = filter;
    });

    prevNode.connect(analyser);
    analyser.connect(audioCtx.destination);

    proceduralGain = audioCtx.createGain();
    proceduralGain.gain.value = 0.4;
    proceduralGain.connect(eqFilters[0]);

    visualizerInitialized = true;
    console.log('[AuraSound] Web Audio API & 5-Band EQ successfully initialized');
  } catch (err) {
    console.warn('[AuraSound] Web Audio API fallback active:', err);
  }
}

function applyEqPreset(presetName) {
  currentEqPreset = presetName;
  const gains = EQ_PRESETS[presetName] || EQ_PRESETS.flat;

  eqFilters.forEach((filter, index) => {
    if (filter && audioCtx) {
      filter.gain.setTargetAtTime(gains[index], audioCtx.currentTime, 0.05);
    }
    const slider1 = document.getElementById(`eqSlider${index}`);
    if (slider1) slider1.value = gains[index];
    const slider2 = document.getElementById(`eqModalSlider${index}`);
    if (slider2) slider2.value = gains[index];
    const valText = document.getElementById(`eqVal${index}`);
    if (valText) valText.textContent = `${gains[index] > 0 ? '+' : ''}${gains[index]}dB`;
  });

  document.querySelectorAll('.eq-preset-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.preset === presetName);
  });

  showToast(`EQ Preset: ${presetName.toUpperCase()}`);
}

function updateSingleEqBand(index, value) {
  if (eqFilters[index] && audioCtx) {
    eqFilters[index].gain.setTargetAtTime(value, audioCtx.currentTime, 0.05);
  }
  const slider1 = document.getElementById(`eqSlider${index}`);
  if (slider1) slider1.value = value;
  const slider2 = document.getElementById(`eqModalSlider${index}`);
  if (slider2) slider2.value = value;
  const valText = document.getElementById(`eqVal${index}`);
  if (valText) valText.textContent = `${value > 0 ? '+' : ''}${value}dB`;

  document.querySelectorAll('.eq-preset-btn').forEach(btn => btn.classList.remove('active'));
}

// ==========================================
// 6. PROCEDURAL 100% OFFLINE SYNTHESIZER
// ==========================================
const CHORD_PROGRESSIONS = [
  [
    [261.63, 329.63, 392.00, 493.88, 587.33],
    [220.00, 261.63, 329.63, 392.00, 440.00],
    [174.61, 261.63, 329.63, 349.23, 392.00],
    [196.00, 246.94, 293.66, 392.00, 440.00]
  ]
];

function startProceduralSynth() {
  if (!visualizerInitialized) initWebAudio();
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();

  isProceduralMode = true;
  audio.pause();
  proceduralStep = 0;

  if (proceduralInterval) clearInterval(proceduralInterval);

  playProceduralChord();
  proceduralInterval = setInterval(playProceduralChord, 3200);

  document.getElementById('playIcon').className = 'fa-solid fa-pause';
  document.getElementById('albumCoverContainer').classList.remove('paused');
  isPlaying = true;
  showToast('Playing Aura Infinity Offline Ambient Engine');
}

function stopProceduralSynth() {
  isProceduralMode = false;
  if (proceduralInterval) {
    clearInterval(proceduralInterval);
    proceduralInterval = null;
  }
}

function playProceduralChord() {
  if (!audioCtx || !isProceduralMode) return;
  const progression = CHORD_PROGRESSIONS[0];
  const chordNotes = progression[proceduralStep % progression.length];
  proceduralStep++;

  const now = audioCtx.currentTime;

  chordNotes.forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc.type = i === 0 ? 'triangle' : 'sine';
    osc.frequency.setValueAtTime(freq, now);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(700 + (i * 150), now);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.06, now + 0.8);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.4);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(proceduralGain);

    osc.start(now);
    osc.stop(now + 3.5);
  });

  for (let step = 0; step < 4; step++) {
    const noteTime = now + (step * 0.75) + 0.1;
    const arpFreq = chordNotes[(step * 2 + 1) % chordNotes.length] * 2;

    const arpOsc = audioCtx.createOscillator();
    const arpGain = audioCtx.createGain();

    arpOsc.type = 'sine';
    arpOsc.frequency.setValueAtTime(arpFreq, noteTime);

    arpGain.gain.setValueAtTime(0.0001, noteTime);
    arpGain.gain.linearRampToValueAtTime(0.04, noteTime + 0.05);
    arpGain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.6);

    arpOsc.connect(arpGain);
    arpGain.connect(proceduralGain);

    arpOsc.start(noteTime);
    arpOsc.stop(noteTime + 0.7);
  }

  const progBar = document.getElementById('progressBar');
  if (progBar) progBar.value = (proceduralStep % 30) / 30 * 100;
  const curTime = document.getElementById('currentTime');
  if (curTime) curTime.textContent = formatTime(proceduralStep * 3);
  const totDuration = document.getElementById('totalDuration');
  if (totDuration) totDuration.textContent = '∞ Live';
}

// ==========================================
// 7. TRACK LOADING & PLAYBACK CONTROL
// ==========================================
function loadTrack(index) {
  if (index < 0 || index >= playlist.length) return;
  currentTrackIndex = index;
  const track = playlist[currentTrackIndex];

  if (track.src.startsWith('procedural://')) {
    updateTrackMetadataUI(track);
    renderLyrics(track);
    renderPlaylist();
    updateMiniPlayerUI();
    if (isPlaying) startProceduralSynth();
    return;
  }

  stopProceduralSynth();
  audio.src = track.src;
  updateTrackMetadataUI(track);
  renderLyrics(track);
  renderPlaylist();
  updateMiniPlayerUI();

  document.getElementById('progressBar').value = 0;
  document.getElementById('currentTime').textContent = '0:00';
  document.getElementById('totalDuration').textContent = '0:00';

  updateMediaSession(track);

  if (isPlaying) {
    playTrack();
  }
}

function updateTrackMetadataUI(track) {
  document.getElementById('songTitle').textContent = track.title;
  
  const artistEl = document.getElementById('artistName');
  if (artistEl) {
    if (track.movie) {
      artistEl.innerHTML = `<span class="text-amber-300 font-semibold"><i class="fa-solid fa-clapperboard mr-1 text-xs"></i>From "${escapeHtml(track.movie)}"</span> • <span class="text-slate-300">${escapeHtml(track.artist)}</span>`;
    } else {
      artistEl.textContent = track.artist;
    }
  }

  const genreBadge = document.getElementById('genreBadge');
  if (genreBadge) {
    if (track.movie) {
      genreBadge.innerHTML = `<i class="fa-solid fa-film text-amber-400 mr-1"></i> ${track.language} • ${track.genre}`;
    } else {
      genreBadge.textContent = `${track.language} • ${track.genre}`;
    }
  }

  const albumArt = document.getElementById('albumArt');
  if (albumArt) {
    albumArt.src = track.cover;
    albumArt.onerror = () => {
      albumArt.src = './icons/icon-512.png';
    };
  }

  const artGlow = document.getElementById('artGlow');
  if (artGlow) {
    artGlow.style.background = track.glowColor || 'rgba(99, 102, 241, 0.5)';
  }
  const glow1 = document.getElementById('glow1');
  if (glow1) {
    glow1.style.background = track.glowColor || 'rgba(99, 102, 241, 0.5)';
  }

  updateFavoriteUI();
}

function togglePlayPause() {
  if (!visualizerInitialized) initWebAudio();
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
}

function playTrack() {
  const track = playlist[currentTrackIndex];
  if (track && track.src.startsWith('procedural://')) {
    startProceduralSynth();
    return;
  }

  isPlaying = true;
  audio.play().then(() => {
    document.getElementById('playIcon').className = 'fa-solid fa-pause';
    document.getElementById('miniPlayIcon').className = 'fa-solid fa-pause';
    document.getElementById('albumCoverContainer').classList.remove('paused');
    if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing';
  }).catch(err => {
    console.warn('Playback error, falling back:', err);
    showToast('Direct stream interrupted. Switched to offline audio engine!');
    startProceduralSynth();
  });
}

function pauseTrack() {
  isPlaying = false;
  if (isProceduralMode) {
    stopProceduralSynth();
  } else {
    audio.pause();
  }
  document.getElementById('playIcon').className = 'fa-solid fa-play ml-1';
  document.getElementById('miniPlayIcon').className = 'fa-solid fa-play';
  document.getElementById('albumCoverContainer').classList.add('paused');
  if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
}

function nextTrack() {
  if (isShuffle) {
    let nextIdx = Math.floor(Math.random() * playlist.length);
    if (playlist.length > 1 && nextIdx === currentTrackIndex) {
      nextIdx = (currentTrackIndex + 1) % playlist.length;
    }
    currentTrackIndex = nextIdx;
  } else {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  }
  loadTrack(currentTrackIndex);
  if (isPlaying) playTrack();
}

function prevTrack() {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
  } else {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) playTrack();
  }
}

function seekBy(seconds) {
  if (audio.duration) {
    audio.currentTime = Math.max(0, Math.min(audio.duration, audio.currentTime + seconds));
  }
}

// ==========================================
// 8. MEDIASESSION API (Mobile Lock Screen & Controls)
// ==========================================
function updateMediaSession(track) {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title,
      artist: track.artist,
      album: track.movie ? `${track.movie} (${track.genre})` : `AuraSound • ${track.language}`,
      artwork: [
        { src: track.cover, sizes: '512x512', type: 'image/png' },
        { src: './icons/icon-192.png', sizes: '192x192', type: 'image/png' }
      ]
    });

    navigator.mediaSession.setActionHandler('play', playTrack);
    navigator.mediaSession.setActionHandler('pause', pauseTrack);
    navigator.mediaSession.setActionHandler('previoustrack', prevTrack);
    navigator.mediaSession.setActionHandler('nexttrack', nextTrack);
    navigator.mediaSession.setActionHandler('seekto', (details) => {
      if (details.seekTime && audio.duration) {
        audio.currentTime = details.seekTime;
      }
    });
    navigator.mediaSession.setActionHandler('seekforward', () => seekBy(10));
    navigator.mediaSession.setActionHandler('seekbackward', () => seekBy(-10));
  }
}

// ==========================================
// 9. MULTI-LANGUAGE LYRICS VIEWER
// ==========================================
let lyricsMode = 'both'; // 'both', 'native', 'trans'

function renderLyrics(track) {
  const container = document.getElementById('lyricsContent');
  if (!container) return;

  container.innerHTML = '';
  const lyricsList = track.lyrics;

  if (!lyricsList || lyricsList.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-slate-400">
        <i class="fa-solid fa-microphone-slash text-3xl mb-3 block text-slate-500"></i>
        <p class="font-medium">Lyrics unavailable for this track</p>
        <p class="text-xs text-slate-500 mt-1">Enjoy the original studio recording</p>
      </div>`;
    return;
  }

  lyricsList.forEach((line, index) => {
    const div = document.createElement('div');
    div.className = 'lyrics-line mb-3';
    div.dataset.time = line.time;

    let html = '';
    if (lyricsMode === 'native' || lyricsMode === 'both') {
      html += `<div class="lyrics-native">${escapeHtml(line.native)}</div>`;
    }
    if ((lyricsMode === 'trans' || lyricsMode === 'both') && line.trans !== line.native) {
      html += `<div class="lyrics-trans">${escapeHtml(line.trans)}</div>`;
    }

    div.innerHTML = html;
    div.addEventListener('click', () => {
      if (audio.duration && !isProceduralMode) {
        audio.currentTime = line.time;
        if (!isPlaying) playTrack();
      }
    });

    container.appendChild(div);
  });
}

function updateSynchronizedLyrics(currentTime) {
  const lines = document.querySelectorAll('.lyrics-line');
  if (!lines.length) return;

  let activeIndex = -1;
  lines.forEach((line, i) => {
    const lineTime = parseFloat(line.dataset.time);
    if (currentTime >= lineTime) {
      activeIndex = i;
    }
  });

  lines.forEach((line, i) => {
    if (i === activeIndex) {
      if (!line.classList.contains('active')) {
        line.classList.add('active');
        line.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      line.classList.remove('active');
    }
  });
}

// ==========================================
// 10. DYNAMIC VISUALIZER (3 MODES)
// ==========================================
function cycleVisualizerMode() {
  const modes = ['bars', 'wave', 'radial'];
  const curIdx = modes.indexOf(visualizerMode);
  visualizerMode = modes[(curIdx + 1) % modes.length];
  saveSettingToDB('visualizerMode', visualizerMode);
  showToast(`Visualizer: ${visualizerMode.toUpperCase()} Mode`);
}

function drawVisualizer() {
  requestAnimationFrame(drawVisualizer);

  const canvas = document.getElementById('visualizerCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const width = canvas.width = canvas.clientWidth;
  const height = canvas.height = canvas.clientHeight;
  ctx.clearRect(0, 0, width, height);

  const bufferLength = analyser ? analyser.frequencyBinCount : 32;
  const dataArray = new Uint8Array(bufferLength);

  if (analyser && isPlaying && visualizerInitialized) {
    if (visualizerMode === 'wave') {
      analyser.getByteTimeDomainData(dataArray);
    } else {
      analyser.getByteFrequencyData(dataArray);
    }
  }

  if (visualizerMode === 'bars') {
    const barCount = Math.min(36, Math.floor(width / 8));
    const barWidth = (width / barCount) - 3;
    let x = 2;

    for (let i = 0; i < barCount; i++) {
      let barHeight;
      if (isPlaying) {
        if (analyser && dataArray[0] !== 0) {
          barHeight = (dataArray[i % bufferLength] / 255) * (height - 6);
        } else {
          barHeight = (Math.sin(Date.now() * 0.005 + i * 0.4) * 0.35 + 0.5) * (height - 6);
        }
      } else {
        barHeight = 3;
      }
      if (barHeight < 3) barHeight = 3;

      const gradient = ctx.createLinearGradient(0, height, 0, 0);
      gradient.addColorStop(0, '#6366f1');
      gradient.addColorStop(0.6, '#a855f7');
      gradient.addColorStop(1, '#ec4899');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.roundRect(x, height - barHeight, barWidth, barHeight, [3, 3, 0, 0]);
      ctx.fill();

      x += barWidth + 3;
    }
  } else if (visualizerMode === 'wave') {
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#a855f7';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#818cf8';

    ctx.beginPath();
    const sliceWidth = width / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      let v;
      if (isPlaying && analyser) {
        v = dataArray[i] / 128.0;
      } else if (isPlaying) {
        v = 1.0 + Math.sin(Date.now() * 0.006 + i * 0.2) * 0.25;
      } else {
        v = 1.0;
      }
      const y = (v * height) / 2;

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);

      x += sliceWidth;
    }
    ctx.lineTo(width, height / 2);
    ctx.stroke();
    ctx.shadowBlur = 0;
  } else if (visualizerMode === 'radial') {
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.32;
    const count = 30;

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      let val = isPlaying ? (dataArray[i % bufferLength] || 100) / 255 : 0.1;
      let len = 6 + val * 18;

      const x1 = centerX + Math.cos(angle) * radius;
      const y1 = centerY + Math.sin(angle) * radius;
      const x2 = centerX + Math.cos(angle) * (radius + len);
      const y2 = centerY + Math.sin(angle) * (radius + len);

      ctx.strokeStyle = `hsl(${(i * 12 + Date.now() * 0.05) % 360}, 85%, 65%)`;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  }
}

// ==========================================
// 11. SLEEP TIMER (With Smooth Volume Fade)
// ==========================================
function startSleepTimer(minutes) {
  clearSleepTimer();
  sleepTimeRemaining = minutes * 60;
  updateSleepTimerUI();

  sleepTimerId = setInterval(() => {
    sleepTimeRemaining--;

    if (sleepTimeRemaining <= 15 && sleepTimeRemaining > 0) {
      audio.volume = Math.max(0, (sleepTimeRemaining / 15) * previousVolume);
    }

    if (sleepTimeRemaining <= 0) {
      clearSleepTimer();
      pauseTrack();
      audio.volume = previousVolume;
      showToast('Sleep Timer: Music paused. Sweet dreams!');
    } else {
      updateSleepTimerUI();
    }
  }, 1000);

  showToast(`Sleep timer set for ${minutes} minutes`);
}

function clearSleepTimer() {
  if (sleepTimerId) {
    clearInterval(sleepTimerId);
    sleepTimerId = null;
  }
  sleepTimeRemaining = 0;
  updateSleepTimerUI();
}

function updateSleepTimerUI() {
  const badge = document.getElementById('sleepTimerBadge');
  const modalBadge = document.getElementById('sleepTimerCountdown');
  if (sleepTimeRemaining > 0) {
    const mins = Math.floor(sleepTimeRemaining / 60);
    const secs = sleepTimeRemaining % 60;
    const str = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    if (badge) {
      badge.textContent = str;
      badge.classList.remove('hidden');
    }
    if (modalBadge) modalBadge.textContent = `Active: ${str} remaining`;
  } else {
    if (badge) badge.classList.add('hidden');
    if (modalBadge) modalBadge.textContent = 'Timer is off';
  }
}

// ==========================================
// 12. PLAYLIST & SEARCH RENDERING
// ==========================================
function renderPlaylist() {
  const container = document.getElementById('playlistContainer');
  if (!container) return;

  container.innerHTML = '';
  const searchInput = document.getElementById('searchInput');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  const filtered = playlist.filter(track => {
    const matchQuery = !query ||
      track.title.toLowerCase().includes(query) ||
      (track.nativeTitle && track.nativeTitle.toLowerCase().includes(query)) ||
      (track.movie && track.movie.toLowerCase().includes(query)) ||
      track.artist.toLowerCase().includes(query) ||
      track.language.toLowerCase().includes(query) ||
      track.genre.toLowerCase().includes(query);

    let matchFilter = true;
    if (currentLangFilter === 'favs') {
      matchFilter = track.favorite;
    } else if (currentLangFilter === 'local') {
      matchFilter = track.isLocal;
    } else if (currentLangFilter === 'movies') {
      matchFilter = !!track.movie;
    } else if (currentLangFilter !== 'all') {
      matchFilter = track.langCode === currentLangFilter;
    }

    return matchQuery && matchFilter;
  });

  const countBadge = document.getElementById('trackCountBadge');
  if (countBadge) countBadge.textContent = `${filtered.length} Tracks`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 text-slate-500 text-xs">
        <i class="fa-solid fa-magnifying-glass text-3xl mb-2 text-slate-600 block"></i>
        <p class="font-medium text-slate-300">No tracks found locally</p>
        <button id="searchOnlineBtn" class="mt-3 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors">
          <i class="fa-solid fa-globe mr-1"></i> Search "${escapeHtml(query)}" Online
        </button>
      </div>`;

    document.getElementById('searchOnlineBtn')?.addEventListener('click', () => {
      searchOnlineMusic(query);
    });
    return;
  }

  filtered.forEach(track => {
    const realIndex = playlist.findIndex(t => t.id === track.id);
    const isActive = realIndex === currentTrackIndex;

    const card = document.createElement('div');
    card.className = `glass-card p-3 flex items-center justify-between cursor-pointer select-none ${isActive ? 'active-track' : ''}`;

    card.innerHTML = `
      <div class="flex items-center space-x-3 truncate">
        <div class="relative w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
          <img src="${track.cover}" alt="${escapeHtml(track.title)}" class="w-full h-full object-cover" onerror="this.src='./icons/icon-192.png'">
          ${isActive && isPlaying ? `
            <div class="absolute inset-0 bg-indigo-950/60 flex items-center justify-center">
              <i class="fa-solid fa-volume-high text-indigo-300 text-xs animate-pulse"></i>
            </div>
          ` : ''}
        </div>
        <div class="truncate">
          <div class="flex items-center gap-1.5 truncate">
            <p class="text-xs sm:text-sm font-semibold truncate ${isActive ? 'text-indigo-300 font-bold' : 'text-white'}">
              ${escapeHtml(track.title)}
            </p>
            ${track.movie ? `<span class="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[9px] font-bold tracking-wide flex-shrink-0"><i class="fa-solid fa-film mr-0.5"></i>${escapeHtml(track.movie)}</span>` : ''}
          </div>
          <div class="flex items-center space-x-2 text-[11px] text-slate-400 mt-0.5 truncate">
            <span class="truncate">${escapeHtml(track.artist)}</span>
            <span>•</span>
            <span class="px-1.5 py-0.2 rounded bg-white/10 text-indigo-200 text-[10px]">${track.language}</span>
          </div>
        </div>
      </div>
      <div class="flex items-center space-x-1.5 flex-shrink-0">
        ${track.isLocal ? `
          <button class="delete-track-btn text-xs text-slate-500 hover:text-red-400 p-1.5" title="Remove Track" data-id="${track.id}">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        ` : `
          <button class="save-offline-card-btn text-xs text-slate-400 hover:text-emerald-400 p-1.5" title="Save to Offline Library" data-id="${track.id}">
            <i class="fa-solid fa-cloud-arrow-down"></i>
          </button>
        `}
        <button class="fav-track-btn text-sm p-1.5 text-slate-400 hover:text-rose-500 transition-colors" data-id="${track.id}" title="Favorite">
          <i class="${track.favorite ? 'fa-solid fa-heart text-rose-500' : 'fa-regular fa-heart'}"></i>
        </button>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('.fav-track-btn') || e.target.closest('.delete-track-btn') || e.target.closest('.save-offline-card-btn')) return;
      currentTrackIndex = realIndex;
      loadTrack(currentTrackIndex);
      playTrack();
    });

    container.appendChild(card);
  });

  container.querySelectorAll('.fav-track-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      toggleFavorite(id);
    });
  });

  container.querySelectorAll('.delete-track-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      deleteLocalTrack(id);
    });
  });

  container.querySelectorAll('.save-offline-card-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      saveOnlineSongForOffline(id);
    });
  });
}

function updateTrackCount() {
  const badge = document.getElementById('trackCountBadge');
  if (badge) badge.textContent = `${playlist.length} Tracks`;
}

function toggleFavorite(id) {
  const track = playlist.find(t => t.id === id);
  if (track) {
    track.favorite = !track.favorite;
    saveFavoriteToDB(track.id, track.favorite);
    updateFavoriteUI();
    renderPlaylist();
    showToast(track.favorite ? 'Added to Favorites ❤️' : 'Removed from Favorites');
  }
}

function updateFavoriteUI() {
  const cur = playlist[currentTrackIndex];
  const favBtn = document.getElementById('favoriteBtn');
  if (favBtn && cur) {
    if (cur.favorite) {
      favBtn.innerHTML = '<i class="fa-solid fa-heart text-rose-500"></i>';
    } else {
      favBtn.innerHTML = '<i class="fa-regular fa-heart text-slate-400 hover:text-rose-500"></i>';
    }
  }
}

function deleteLocalTrack(id) {
  const idx = playlist.findIndex(t => t.id === id);
  if (idx !== -1) {
    const deleted = playlist.splice(idx, 1)[0];
    removeTrackFromDB(id);
    if (currentTrackIndex >= playlist.length) {
      currentTrackIndex = Math.max(0, playlist.length - 1);
    }
    renderPlaylist();
    updateTrackCount();
    showToast(`Removed "${deleted.title}"`);
  }
}

// ==========================================
// 13. LOCAL FILE IMPORT (MP3/WAV/FLAC/M4A)
// ==========================================
function handleLocalFiles(files) {
  const fileArray = Array.from(files);
  let addedCount = 0;

  fileArray.forEach(file => {
    if (file.type.startsWith('audio/') || file.name.match(/\.(mp3|wav|ogg|m4a|flac)$/i)) {
      const cleanTitle = file.name.replace(/\.[^/.]+$/, "").replace(/^[0-9\s._-]+/, '');
      const trackId = 'local-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6);

      const trackObj = {
        id: trackId,
        title: cleanTitle,
        nativeTitle: cleanTitle,
        movie: 'Personal Import',
        artist: 'My Offline Audio',
        language: 'Local File',
        langCode: 'local',
        genre: 'Personal Track',
        src: URL.createObjectURL(file),
        blob: file,
        cover: './icons/icon-512.png',
        glowColor: 'rgba(99, 102, 241, 0.6)',
        favorite: false,
        isLocal: true,
        lyrics: [
          { time: 0, native: cleanTitle, trans: "Local audio file loaded from your device" }
        ]
      };

      playlist.push(trackObj);
      saveTrackToDB(trackObj);
      addedCount++;
    }
  });

  if (addedCount > 0) {
    renderPlaylist();
    updateTrackCount();
    showToast(`Saved ${addedCount} song${addedCount > 1 ? 's' : ''} to Offline Library!`);

    if (!isPlaying) {
      currentTrackIndex = playlist.length - addedCount;
      loadTrack(currentTrackIndex);
      playTrack();
    }
  }
}

// ==========================================
// 14. MOBILE VIEW NAVIGATION & MINI PLAYER
// ==========================================
function switchActiveView(viewName) {
  currentActiveView = viewName;

  const viewPlayer = document.getElementById('viewPlayer');
  const viewLibrary = document.getElementById('viewLibrary');
  const viewLyrics = document.getElementById('viewLyrics');
  const viewEqualizer = document.getElementById('viewEqualizer');

  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === viewName);
  });

  const miniBar = document.getElementById('miniPlayerBar');

  if (window.innerWidth < 1024) {
    if (viewPlayer) viewPlayer.classList.toggle('hidden', viewName !== 'player');
    if (viewLibrary) viewLibrary.classList.toggle('hidden', viewName !== 'library');
    if (viewLyrics) viewLyrics.classList.toggle('hidden', viewName !== 'lyrics');
    if (viewEqualizer) viewEqualizer.classList.toggle('hidden', viewName !== 'eq');

    if (miniBar) {
      if (viewName !== 'player') {
        miniBar.classList.remove('hidden-mini');
      } else {
        miniBar.classList.add('hidden-mini');
      }
    }
  } else {
    if (viewPlayer) viewPlayer.classList.remove('hidden');
    if (viewLibrary) viewLibrary.classList.remove('hidden');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateMiniPlayerUI() {
  const track = playlist[currentTrackIndex];
  if (!track) return;

  const miniTitle = document.getElementById('miniTitle');
  const miniArtist = document.getElementById('miniArtist');
  const miniArt = document.getElementById('miniArt');

  if (miniTitle) miniTitle.textContent = track.title;
  if (miniArtist) {
    miniArtist.textContent = track.movie ? `From "${track.movie}" • ${track.artist}` : track.artist;
  }
  if (miniArt) miniArt.src = track.cover;
}

// ==========================================
// 15. HELPERS & UTILITIES
// ==========================================
function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-indigo-400"></i> <span>${escapeHtml(message)}</span>`;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 20);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 350);
  }, 2800);
}

function updateVolumeIcon() {
  const volIcon = document.getElementById('volumeIcon');
  if (!volIcon) return;

  if (audio.volume === 0 || isMuted) {
    volIcon.className = 'fa-solid fa-volume-xmark text-slate-500';
  } else if (audio.volume < 0.5) {
    volIcon.className = 'fa-solid fa-volume-low text-indigo-300';
  } else {
    volIcon.className = 'fa-solid fa-volume-high text-indigo-300';
  }
}

function updateNetworkStatus() {
  const badge = document.getElementById('networkBadge');
  if (!badge) return;

  if (navigator.onLine) {
    badge.className = 'offline-status-badge online';
    badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Online';
  } else {
    badge.className = 'offline-status-badge offline';
    badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-400"></span> Offline Mode';
    showToast('Offline Mode Active: Local songs and cached tracks available');
  }
}

// ==========================================
// 16. INITIALIZATION & EVENT LISTENERS
// ==========================================
let searchDebounceTimeout = null;

window.addEventListener('DOMContentLoaded', async () => {
  await initIndexedDB();

  window.addEventListener('online', updateNetworkStatus);
  window.addEventListener('offline', updateNetworkStatus);
  updateNetworkStatus();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('[AuraSound SW] Registered successfully, scope:', reg.scope))
      .catch(err => console.log('[AuraSound SW] Registration error:', err));
  }

  loadTrack(0);
  drawVisualizer();

  audio.addEventListener('timeupdate', () => {
    if (audio.duration && !isProceduralMode) {
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      const progBar = document.getElementById('progressBar');
      if (progBar) progBar.value = progressPercent;
      
      const curTimeEl = document.getElementById('currentTime');
      if (curTimeEl) curTimeEl.textContent = formatTime(audio.currentTime);

      const totDurationEl = document.getElementById('totalDuration');
      if (totDurationEl) totDurationEl.textContent = formatTime(audio.duration);

      const miniProg = document.getElementById('miniProgressBar');
      if (miniProg) miniProg.style.width = `${progressPercent}%`;

      updateSynchronizedLyrics(audio.currentTime);
    }
  });

  audio.addEventListener('ended', () => {
    if (repeatMode === 2) {
      audio.currentTime = 0;
      playTrack();
    } else if (repeatMode === 1 || currentTrackIndex < playlist.length - 1 || isShuffle) {
      nextTrack();
    } else {
      pauseTrack();
    }
  });

  audio.addEventListener('error', (e) => {
    console.warn('Audio playback error, falling back:', e);
    showToast('Direct stream interrupted. Switched to offline audio engine.');
    startProceduralSynth();
  });

  document.getElementById('playPauseBtn').addEventListener('click', togglePlayPause);
  document.getElementById('nextBtn').addEventListener('click', nextTrack);
  document.getElementById('prevBtn').addEventListener('click', prevTrack);

  const progBar = document.getElementById('progressBar');
  progBar.addEventListener('input', () => {
    if (audio.duration && !isProceduralMode) {
      audio.currentTime = (progBar.value / 100) * audio.duration;
    }
  });

  const volumeBar = document.getElementById('volumeBar');
  volumeBar.addEventListener('input', (e) => {
    audio.volume = parseFloat(e.target.value);
    isMuted = audio.volume === 0;
    saveSettingToDB('volume', audio.volume);
    updateVolumeIcon();
  });

  document.getElementById('muteBtn').addEventListener('click', () => {
    if (isMuted) {
      audio.volume = previousVolume || 0.8;
      volumeBar.value = audio.volume;
      isMuted = false;
    } else {
      previousVolume = audio.volume;
      audio.volume = 0;
      volumeBar.value = 0;
      isMuted = true;
    }
    updateVolumeIcon();
  });

  const shuffleBtn = document.getElementById('shuffleBtn');
  shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('text-indigo-400', isShuffle);
    shuffleBtn.classList.toggle('text-slate-400', !isShuffle);
    showToast(isShuffle ? 'Shuffle On 🔀' : 'Shuffle Off');
  });

  const repeatBtn = document.getElementById('repeatBtn');
  const repeatIcon = document.getElementById('repeatIcon');
  const repeatBadge = document.getElementById('repeatBadge');

  repeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    if (repeatMode === 0) {
      repeatBtn.className = 'text-slate-400 hover:text-indigo-400 transition-colors p-2 text-lg focus:outline-none relative';
      repeatBadge.classList.add('hidden');
      showToast('Repeat Off');
    } else if (repeatMode === 1) {
      repeatBtn.className = 'text-indigo-400 transition-colors p-2 text-lg focus:outline-none relative';
      repeatBadge.classList.add('hidden');
      showToast('Repeat All 🔁');
    } else if (repeatMode === 2) {
      repeatBtn.className = 'text-indigo-400 transition-colors p-2 text-lg focus:outline-none relative';
      repeatBadge.classList.remove('hidden');
      showToast('Repeat Track 🔂');
    }
  });

  document.getElementById('favoriteBtn').addEventListener('click', () => {
    const track = playlist[currentTrackIndex];
    if (track) toggleFavorite(track.id);
  });

  document.getElementById('visualizerCanvas').addEventListener('click', cycleVisualizerMode);
  document.getElementById('vizModeBtn')?.addEventListener('click', cycleVisualizerMode);

  // Live Search with online integration
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => {
    renderPlaylist();
    const q = e.target.value.trim();
    if (searchDebounceTimeout) clearTimeout(searchDebounceTimeout);
    if (q.length >= 3) {
      searchDebounceTimeout = setTimeout(() => {
        searchOnlineMusic(q);
      }, 600);
    } else {
      document.getElementById('onlineResultsContainer')?.classList.add('hidden');
    }
  });

  document.getElementById('searchOnlineDirectBtn')?.addEventListener('click', () => {
    const q = searchInput.value.trim();
    if (q) searchOnlineMusic(q);
  });

  document.querySelectorAll('.lang-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.lang-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentLangFilter = chip.dataset.lang;
      renderPlaylist();
    });
  });

  const fileInput = document.getElementById('audioFileInput');
  fileInput.addEventListener('change', (e) => {
    handleLocalFiles(e.target.files);
    e.target.value = '';
  });

  const dropZone = document.getElementById('dropZone');
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('border-indigo-400', 'bg-indigo-500/10');
  });
  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('border-indigo-400', 'bg-indigo-500/10');
  });
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('border-indigo-400', 'bg-indigo-500/10');
    handleLocalFiles(e.dataTransfer.files);
  });
  dropZone.addEventListener('click', () => fileInput.click());

  EQ_FREQUENCIES.forEach((freq, idx) => {
    const slider = document.getElementById(`eqSlider${idx}`);
    if (slider) {
      slider.addEventListener('input', (e) => {
        updateSingleEqBand(idx, parseFloat(e.target.value));
      });
    }
  });

  document.querySelectorAll('.eq-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyEqPreset(btn.dataset.preset);
    });
  });

  document.querySelectorAll('.speed-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const speed = parseFloat(btn.dataset.speed);
      audio.playbackRate = speed;
      document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('currentSpeedText').textContent = `${speed}x`;
      showToast(`Speed: ${speed}x`);
    });
  });

  document.querySelectorAll('.sleep-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mins = parseInt(btn.dataset.mins);
      if (mins === 0) {
        clearSleepTimer();
        showToast('Sleep timer canceled');
      } else {
        startSleepTimer(mins);
      }
    });
  });

  document.getElementById('lyricsModeToggle')?.addEventListener('click', () => {
    if (lyricsMode === 'both') lyricsMode = 'native';
    else if (lyricsMode === 'native') lyricsMode = 'trans';
    else lyricsMode = 'both';

    document.getElementById('lyricsModeText').textContent =
      lyricsMode === 'both' ? 'Dual Script' : (lyricsMode === 'native' ? 'Original' : 'English Trans');
    
    renderLyrics(playlist[currentTrackIndex]);
  });

  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchActiveView(btn.dataset.view);
    });
  });

  document.getElementById('miniPlayPauseBtn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePlayPause();
  });
  document.getElementById('miniNextBtn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    nextTrack();
  });
  document.getElementById('miniPlayerBar')?.addEventListener('click', () => {
    switchActiveView('player');
  });

  setupModal('shortcutsBtn', 'shortcutsModal', 'closeShortcutsModal');
  setupModal('eqModalBtn', 'eqModal', 'closeEqModal');
  setupModal('sleepTimerBtn', 'sleepTimerModal', 'closeSleepTimerModal');

  let deferredPrompt = null;
  const installBtn = document.getElementById('installAppBtn');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installBtn) installBtn.classList.remove('hidden');
  });

  if (installBtn) {
    installBtn.addEventListener('click', () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            showToast('AuraSound installed to your device!');
          }
          deferredPrompt = null;
          installBtn.classList.add('hidden');
        });
      } else {
        showToast('To install: Tap browser menu -> Add to Home Screen');
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.code) {
      case 'Space':
        e.preventDefault();
        togglePlayPause();
        break;
      case 'KeyN':
        nextTrack();
        break;
      case 'KeyP':
        prevTrack();
        break;
      case 'ArrowRight':
        if (e.shiftKey) nextTrack();
        else seekBy(5);
        break;
      case 'ArrowLeft':
        if (e.shiftKey) prevTrack();
        else seekBy(-5);
        break;
      case 'ArrowUp':
        e.preventDefault();
        audio.volume = Math.min(1, audio.volume + 0.05);
        volumeBar.value = audio.volume;
        updateVolumeIcon();
        break;
      case 'ArrowDown':
        e.preventDefault();
        audio.volume = Math.max(0, audio.volume - 0.05);
        volumeBar.value = audio.volume;
        updateVolumeIcon();
        break;
      case 'KeyM':
        document.getElementById('muteBtn').click();
        break;
      case 'KeyL':
        document.getElementById('favoriteBtn').click();
        break;
      case 'KeyV':
        cycleVisualizerMode();
        break;
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      document.getElementById('viewPlayer')?.classList.remove('hidden');
      document.getElementById('viewLibrary')?.classList.remove('hidden');
      document.getElementById('miniPlayerBar')?.classList.add('hidden-mini');
    } else {
      switchActiveView(currentActiveView);
    }
  });
});

function setupModal(triggerBtnId, modalId, closeBtnId) {
  const trigger = document.getElementById(triggerBtnId);
  const modal = document.getElementById(modalId);
  const closer = document.getElementById(closeBtnId);

  if (trigger && modal) {
    trigger.addEventListener('click', () => modal.classList.add('open'));
  }
  if (closer && modal) {
    closer.addEventListener('click', () => modal.classList.remove('open'));
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }
}
