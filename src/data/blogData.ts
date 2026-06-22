export interface Blog {
  id: number;
  slug: string;
  title: string;
  date: string;
  img: string;
  readTime: string;
  tag: string;
  excerpt: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
    }[];
    conclusion: string;
  };
}

export const blogs: Blog[] = [
  {
    id: 1,
    slug: "virtues-of-umrah-in-ramadan",
    title: "Virtues of Umrah in Ramadan",
    date: "June 2026",
    img: "/images/blogs/b1.jpg",
    readTime: "5 min read",
    tag: "Spirituality",
    excerpt:
      "Performing Umrah during the blessed month of Ramadan carries the reward equivalent to Hajj alongside the Prophet ﷺ. Discover the spiritual significance, best practices, and duas to maximise this once-in-a-lifetime opportunity.",
    content: {
      intro:
        "Ramadan is the most blessed month of the Islamic calendar — a time of fasting, prayer, reflection, and immense spiritual reward. When combined with the sacred journey of Umrah, the experience becomes truly transformative. The Prophet Muhammad ﷺ himself said: 'Umrah in Ramadan is equivalent to Hajj' — or in another narration, 'equivalent to performing Hajj with me.' This hadith alone captures the extraordinary spiritual weight of this blessed combination.",
      sections: [
        {
          heading: "Why Umrah in Ramadan is So Special",
          body: "Every good deed in Ramadan is multiplied manifold by Allah's mercy. Imagine performing Tawaf around the Kaaba while fasting, reciting Talbiyah with a heart softened by hunger and devotion, and making dua in the holiest place on earth during the holiest month. The atmosphere inside Masjid al-Haram during Ramadan is unlike any other time of the year — the recitation of Quran fills the air, millions of believers stand shoulder to shoulder, and the mercy of Allah descends in abundance. Every step you take, every tear that falls, every supplication you make carries an immeasurable weight.",
        },
        {
          heading: "The Hadith That Changed Everything",
          body: "Ibn Abbas (RA) narrated that when the Prophet ﷺ returned from the Farewell Hajj, he asked a woman from the Ansar why she had not performed Hajj with them. She replied that they only had two camels — one her husband and son had taken, and the other was left for irrigation. The Prophet ﷺ then told her: 'When Ramadan comes, perform Umrah, for Umrah in Ramadan equals Hajj.' (Bukhari & Muslim). This hadith is not just a statement of reward — it is an open invitation from the Prophet ﷺ himself to every Muslim who cannot afford Hajj or has not yet been called for it.",
        },
        {
          heading: "Best Practices During Umrah in Ramadan",
          body: "To make the most of your Umrah in Ramadan, arrive a few days before the month begins so you can settle in and prepare spiritually. Perform your Tawaf after Taraweeh prayers when the crowd is more focused and the atmosphere is deeply spiritual. Recite as much Quran as possible inside Masjid al-Haram. Make a personal list of duas — for yourself, your family, and the entire Ummah. Try to break your fast (Iftar) within the Haram — the experience of opening your fast in the sight of the Kaaba is something that stays with you for a lifetime. Avoid excessive shopping or socialising — protect the spiritual focus of your journey.",
        },
        {
          heading: "Recommended Duas to Recite",
          body: "Upon seeing the Kaaba for the first time, raise your hands and say: 'Allahumma zid hadhal bayta tashreefan wa ta'theeman wa takreeman wa mahabatan' — O Allah, increase this House in honour, respect, nobility and awe. During Tawaf, keep your tongue moist with dhikr, Quran, and personal supplications in your own language. Allah understands every language and every heart. At Multazam (the wall between the Black Stone and the door of the Kaaba), press your chest and cheek against it and pour your heart out — this is one of the most powerful spots for dua on earth.",
        },
        {
          heading: "Practical Tips for Ramadan Umrah",
          body: "Book your flights and hotels well in advance — Ramadan Umrah slots fill up very fast, especially the last 10 days. Stay hydrated between Iftar and Suhoor. Wear comfortable, breathable Ihram fabric. Carry a small pocket Quran and a dua book. If you feel weak from fasting, rest inside the Haram and do dhikr — every moment spent inside is an act of worship. Women should travel with a Mahram. Carry a portable prayer mat, a small medical kit, and enough Pakistani Rupees exchanged into Saudi Riyals before departure.",
        },
      ],
      conclusion:
        "Umrah in Ramadan is not just a journey — it is an answered prayer, a door that Allah has opened for you. If you have been given the opportunity to perform Umrah in this blessed month, know that it is a sign of Allah's special love for you. At Big Way Umrah, we have guided thousands of pilgrims through this sacred journey since 1998. Our team is here to handle every detail so that your heart remains focused on what matters most — your connection with Allah. May Allah accept your Umrah, forgive your sins, and invite you back again. Ameen.",
    },
  },
  {
    id: 2,
    slug: "how-to-prepare-for-hajj-2026",
    title: "How to Prepare for Hajj 2026",
    date: "May 2026",
    img: "/images/blogs/b2.jpg",
    readTime: "8 min read",
    tag: "Hajj Guide",
    excerpt:
      "From obtaining your visa to packing the right essentials, preparing for Hajj requires careful planning months in advance. Our comprehensive guide walks you through every step so you arrive ready, focused, and at peace.",
    content: {
      intro:
        "Hajj is the fifth pillar of Islam — a once-in-a-lifetime obligation for every Muslim who is physically and financially able. It is the largest annual gathering of human beings on earth, drawing over two million pilgrims from every corner of the globe to the blessed city of Makkah. Preparation for Hajj 2026 must begin months in advance, covering everything from documentation and finances to spiritual readiness and physical fitness. This guide will walk you through every essential step.",
      sections: [
        {
          heading: "Step 1 — Spiritual Preparation",
          body: "Before packing a single bag, prepare your heart. Hajj is first and foremost a spiritual journey, not a tourist trip. Begin by increasing your daily worship — pray all five Salah on time, increase your Quran recitation, give more in charity, and ask forgiveness from anyone you may have wronged. Read books about the history of Hajj, the significance of each ritual, and the life of Ibrahim (AS) and his family, whose sacrifice is commemorated throughout the pilgrimage. The more spiritually prepared you are, the more you will benefit from every moment in the holy land.",
        },
        {
          heading: "Step 2 — Documentation and Visa",
          body: "Pakistani pilgrims must apply through the Ministry of Religious Affairs (MORA) official Hajj scheme or through a registered private Hajj operator. Required documents typically include a valid passport (minimum 6 months validity beyond your return date), a completed Hajj application form, recent passport-sized photographs, proof of vaccination (meningitis, COVID-19 as required), a mahram certificate for women, and proof of payment. Apply as early as possible — Hajj quota fills up quickly and waitlists are common. Keep copies of all documents both physical and digital.",
        },
        {
          heading: "Step 3 — Physical Fitness",
          body: "Hajj involves significant physical exertion — walking several kilometres daily, standing for long periods, and navigating large crowds. Begin a fitness routine at least 3 months before departure. Start with daily 30-minute walks and gradually increase distance. Strengthen your feet and legs — comfortable, well-worn shoes are essential. If you have any chronic health conditions such as diabetes, heart disease, or arthritis, consult your doctor well in advance. Carry all necessary medications in sufficient quantity along with prescriptions. Pilgrims above 60 years of age should get a full medical check-up.",
        },
        {
          heading: "Step 4 — What to Pack",
          body: "For men: 2-3 sets of Ihram (unstitched white cloth), a money belt, unscented soap and shampoo, comfortable sandals, a small backpack for daily use, a power bank, and a travel pillow. For women: loose modest abayas and hijabs in breathable fabric, comfortable flat shoes, a small purse, and all personal hygiene items. For everyone: a pocket Quran and dua book, sunscreen (SPF 50+), lip balm, blister plasters, electrolyte sachets, a reusable water bottle, Pakistani snacks for comfort, photocopies of passport and visa, emergency contact cards, and travel insurance documents. Do NOT pack prohibited items such as fragrances, stitched clothing for Ihram, or excessive cash.",
        },
        {
          heading: "Step 5 — Learn the Rituals",
          body: "Every Hajj ritual has a specific order and method prescribed by the Prophet ﷺ. Learn the rituals of Hajj thoroughly before you go — Ihram, Tawaf, Sa'i, staying at Mina, standing at Arafat (the most important pillar of Hajj), spending the night at Muzdalifah, stoning the Jamarat, sacrifice, shaving, and the Farewell Tawaf. Many scholars offer free Hajj preparation courses online and in mosques across Pakistan. Big Way Umrah also provides pre-departure orientation sessions for all our Hajj pilgrims.",
        },
        {
          heading: "Step 6 — Financial Planning",
          body: "Hajj is a significant financial commitment. Government Hajj package costs for Pakistani pilgrims vary each year based on exchange rates and Saudi government fees. Private packages offer more flexibility and comfort. Begin saving well in advance. Exchange your Rupees to Saudi Riyals before departure for a better rate. Carry some cash for daily expenses in Makkah and Madinah but use hotel safes for large amounts. Inform your bank before traveling to avoid your card being blocked for overseas transactions.",
        },
      ],
      conclusion:
        "Hajj is the journey of a lifetime — a chance to stand before Allah on the plains of Arafat and leave your sins behind. With the right preparation — spiritual, physical, and logistical — you can focus entirely on worship and make memories that will last forever. At Big Way Umrah, our experienced team has been guiding Pakistani pilgrims to Hajj and Umrah since 1998. We handle all the paperwork, accommodation, transportation, and guidance so you can focus on what truly matters. Contact us today to begin your Hajj 2026 journey. Labbayk Allahumma Labbayk.",
    },
  },
  {
    id: 3,
    slug: "makkah-to-madina-journey-guide",
    title: "Makkah to Madina Journey Guide",
    date: "April 2026",
    img: "/images/blogs/b3.jpg",
    readTime: "6 min read",
    tag: "Travel",
    excerpt:
      "The 450 km journey between the two holiest cities in Islam is a spiritual experience in itself. Learn about travel options, recommended stops, and the etiquette of visiting Masjid-e-Nabawi and key Ziyarat sites.",
    content: {
      intro:
        "The road between Makkah Al-Mukarramah and Madinah Al-Munawwarah is one of the most spiritually significant journeys a Muslim can take. Separated by approximately 450 kilometres, these two cities hold the heart of Islamic history, and travelling between them — even the journey itself — is an act of worship. Whether you travel by Haramain High Speed Railway, private bus, or road, every mile brings you closer to the city of the Prophet ﷺ.",
      sections: [
        {
          heading: "Travel Options: Makkah to Madinah",
          body: "The Haramain High Speed Railway (HHR) is the fastest and most comfortable option, covering the distance in approximately 2 hours and 20 minutes, stopping at Jeddah and King Abdullah Economic City along the way. Tickets can be purchased online at hhr.com.sa or at the station. Private buses arranged by your tour operator (like Big Way Umrah) are the most common option for package pilgrims — comfortable, air-conditioned, and direct. Private taxis and car rentals are available but more expensive. The journey by road takes approximately 5-6 hours depending on traffic.",
        },
        {
          heading: "Etiquette When Entering Madinah",
          body: "Madinah is the city of the Prophet Muhammad ﷺ and deserves the utmost respect and reverence. As you approach, increase your Salawat (blessings upon the Prophet ﷺ): 'Allahumma salli ala Muhammad wa ala ali Muhammad.' Upon entering the city, recite: 'Bismillah, Allahumma aftah li abwab rahmatika.' Remove any pride from your heart — you are a guest of the Prophet ﷺ. Maintain a low voice and dignified conduct throughout your stay. Avoid loud conversations, laughing excessively, or behaving as if you are a tourist rather than a pilgrim.",
        },
        {
          heading: "Visiting Masjid-e-Nabawi",
          body: "Upon arriving at Masjid-e-Nabawi, enter from the main gate reciting the dua of entering the mosque. Offer 2 Rakat Tahiyyatul Masjid. Then proceed to the Rawdah — the area between the Prophet's ﷺ pulpit (Mimbar) and his blessed grave — which is described as a garden from the gardens of Paradise. This area is very crowded; go with patience and focus. Stand at the Muwajaha (facing the grave) and offer Salaam to the Prophet ﷺ: 'Assalamu alaika ya Rasulallah, assalamu alaika ya Nabiyallah.' Then offer Salaam to Abu Bakr (RA) and Umar (RA) on his right. Do not raise your voice, make dua facing the grave, or push others.",
        },
        {
          heading: "Key Ziyarat Sites in Madinah",
          body: "Masjid Quba — the first mosque ever built in Islam, where praying 2 Rakat equals the reward of Umrah according to hadith. Masjid Qiblatayn — the mosque of two Qiblas, where the direction of prayer was changed from Jerusalem to Makkah. Jannat ul Baqi — the blessed graveyard where many companions of the Prophet ﷺ, his family members, and his wives are buried. Al-Masjid Al-Ghamama — where the Prophet ﷺ reportedly prayed Eid Salah. Mount Uhud and the graves of the martyrs of Uhud, including Sayyidina Hamza (RA). All these sites are within a short distance of Masjid-e-Nabawi.",
        },
        {
          heading: "Best Time to Visit and Practical Tips",
          body: "The best time to visit Madinah is early morning after Fajr, when the Rawdah is less crowded and the atmosphere is most peaceful. The Green Dome (Qubba Khadra) is visible from most parts of the city — use it as a landmark. Carry a small bottle of water always — Madinah is hot and dry. Zamzam water is freely available in Masjid-e-Nabawi as well. Women have separate access times to the Rawdah — check the schedule on arrival. Comfortable walking shoes are essential as you will walk significant distances daily. Keep your hotel room key and emergency contact card on your person at all times.",
        },
      ],
      conclusion:
        "The journey from Makkah to Madinah is not merely a physical transfer — it is a transition between two chapters of spiritual awakening. In Makkah, you stand before the House of Allah. In Madinah, you stand at the threshold of the Prophet ﷺ. Both experiences, woven together, form the complete tapestry of an Umrah or Hajj journey. At Big Way Umrah, all our packages include comfortable transport between the two holy cities, guided Ziyarat tours, and experienced group leaders who will help you make the most of every precious moment. Book your package today and let us take care of the journey while you focus on the worship.",
    },
  },
  {
    id: 4,
    slug: "essential-duas-for-umrah",
    title: "Essential Duas for Umrah",
    date: "March 2026",
    img: "/images/blogs/b4.jpg",
    readTime: "7 min read",
    tag: "Duas & Dhikr",
    excerpt:
      "Every step of Umrah carries its own supplication. From the moment you enter Ihram to the final cut of hair, we have compiled the most authentic duas from Quran and Sunnah with Arabic text, transliteration, and Urdu translation.",
    content: {
      intro:
        "Dua is the essence of worship — and Umrah is one of the greatest opportunities in a Muslim's life to pour their heart out before Allah. From the Meeqat to the final moment of Halq, every ritual of Umrah is accompanied by specific supplications that connect your actions to their deeper spiritual meaning. We have compiled the most authentic and important duas for each stage of Umrah from the Quran and Sunnah.",
      sections: [
        {
          heading: "Dua at the Meeqat — Entering Ihram",
          body: "Arabic: لَبَّيْكَ اللَّهُمَّ عُمْرَةً\nTransliteration: Labbayk Allahumma Umrah\nMeaning: Here I am O Allah, for Umrah.\nUrdu: اے اللہ، میں عمرے کے لیے حاضر ہوں۔\n\nAfter this, continue with the full Talbiyah:\nArabic: لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لاَ شَرِيكَ لَكَ\nTransliteration: Labbayk Allahumma Labbayk, Labbayk la shareeka laka Labbayk, Innal hamda wan-ni'mata laka wal-mulk, la shareeka lak.\nMeaning: Here I am O Allah, here I am. Here I am, You have no partner, here I am. Truly all praise, grace and sovereignty belong to You. You have no partner.",
        },
        {
          heading: "Dua Upon Seeing the Kaaba",
          body: "When you first lay eyes upon the Kaaba, this is one of the most powerful moments for dua — raise your hands immediately before doing anything else.\nArabic: اللَّهُمَّ زِدْ هَذَا الْبَيْتَ تَشْرِيفاً وَتَعْظِيماً وَتَكْرِيماً وَمَهَابَةً\nTransliteration: Allahumma zid hadhal bayta tashreefan wa ta'theeman wa takreeman wa mahabah.\nMeaning: O Allah, increase this House in honour, respect, nobility and awe.\nUrdu: اے اللہ، اس گھر کی عزت، عظمت، تکریم اور ہیبت میں اضافہ فرما۔\n\nThis is also the moment to make any personal dua — scholars say that dua upon first seeing the Kaaba is amongst the most likely to be accepted.",
        },
        {
          heading: "Dua at the Start of Each Round of Tawaf",
          body: "At the Black Stone (Hajr-e-Aswad), begin each round by saying:\nArabic: بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ\nTransliteration: Bismillahi wallahu Akbar\nMeaning: In the name of Allah, and Allah is the Greatest.\n\nThroughout Tawaf, keep reciting any dhikr, Salawat, or Quranic verses. There is no specific dua for each round — this time is open for personal supplications in any language. Between the Yemeni Corner and the Black Stone, it is Sunnah to recite:\nArabic: رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ\nTransliteration: Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina adhaab an-naar.\nMeaning: Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",
        },
        {
          heading: "Dua at Maqam-e-Ibrahim",
          body: "After completing Tawaf, proceed to Maqam-e-Ibrahim and recite:\nArabic: وَاتَّخِذُوا مِن مَّقَامِ إِبْرَاهِيمَ مُصَلًّى\nTransliteration: Wattakhidhu min maqami Ibraheema musalla.\nMeaning: And take the Maqam of Ibrahim as a place of prayer. (Quran 2:125)\n\nThen offer 2 Rakat prayer, reciting Surah Al-Kafiroon in the first rakat and Surah Al-Ikhlas in the second.",
        },
        {
          heading: "Dua at Safa and Marwa",
          body: "Upon climbing Mount Safa, face the Kaaba and recite:\nArabic: إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ\nTransliteration: Innas-safa wal-marwata min sha'aa'irillah.\nMeaning: Indeed, Safa and Marwa are among the symbols of Allah. (Quran 2:158)\n\nThen make takbeer three times:\nArabic: اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ\n\nThen recite: لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ\nTransliteration: La ilaha illallahu wahdahu la shareeka lah, lahul mulku wa lahul hamdu wa huwa ala kulli shay'in qadeer.\nRepeat this three times on both Safa and Marwa, followed by personal duas.",
        },
      ],
      conclusion:
        "Every dua you make during Umrah is heard — Allah has made the holy land a place where the distance between a servant and their Lord feels closest. Do not let any moment pass without remembrance. Carry a small dua book, but also speak to Allah freely in your own words and your own language — He created you and understands every whisper of your heart. At Big Way Umrah, we provide all our pilgrims with a comprehensive dua guide before departure. May Allah accept every supplication you make in His sacred house. Ameen.",
    },
  },
  {
    id: 5,
    slug: "best-time-to-visit-madinah",
    title: "Best Time to Visit Madinah",
    date: "February 2026",
    img: "/images/blogs/b5.jpg",
    readTime: "4 min read",
    tag: "Travel Tips",
    excerpt:
      "Madinah Al-Munawwarah welcomes millions of visitors year-round, but certain months offer cooler weather, shorter queues, and a more serene atmosphere. Find out when to plan your Ziyarat for the most rewarding experience.",
    content: {
      intro:
        "Madinah Al-Munawwarah — the City of the Prophet ﷺ — is open to Muslim visitors throughout the year. But like any destination, the experience varies greatly depending on when you visit. Temperature, crowd levels, spiritual atmosphere, and even the availability of accommodation all shift across the months. Understanding these patterns will help you plan a visit that is both comfortable and deeply spiritually rewarding.",
      sections: [
        {
          heading: "Weather in Madinah Throughout the Year",
          body: "Madinah has a hot desert climate with very little rainfall. Summers (June to August) are extremely hot, with temperatures regularly exceeding 40°C and sometimes reaching 45°C. The intense heat makes outdoor Ziyarat physically demanding, especially for elderly pilgrims or those with health conditions. Winters (November to February) are mild and pleasant, with temperatures ranging from 10°C to 25°C — ideal for walking, outdoor worship, and visiting sites. Spring (March–April) and Autumn (September–October) offer transitional weather that is generally comfortable, though occasional heat spikes can occur.",
        },
        {
          heading: "Crowd Levels: When is Madinah Less Busy?",
          body: "The busiest periods in Madinah are during Ramadan (especially the last 10 days), Hajj season (Dhul Hijjah), school holidays in Muslim-majority countries, and the period between Eid al-Fitr and Eid al-Adha. If you prefer a quieter, more intimate experience — shorter queues at the Rawdah, easier access to Masjid-e-Nabawi, more personal time for dua — consider visiting between November and February outside of Ramadan. These months offer cooler weather, manageable crowds, and a more reflective atmosphere. January and early February are particularly peaceful.",
        },
        {
          heading: "The Spiritual Peak: Ramadan in Madinah",
          body: "Despite the crowds, Ramadan remains the most spiritually charged time to visit Madinah. The city transforms completely — Masjid-e-Nabawi overflows with worshippers, the sound of Quran echoes through the night, Taraweeh prayers are led by some of the world's most beloved Qaris, and the generosity of people reaches its peak with free Iftar spreads stretching for hundreds of metres outside the mosque. If you can endure the crowds and the heat, Ramadan in Madinah is an experience that changes your life. The last 10 nights of Ramadan are the most intense — arrive early for any prayer if you wish to pray inside the mosque.",
        },
        {
          heading: "Best Months for Pakistani Pilgrims",
          body: "For Pakistani pilgrims specifically, the ideal months are November to February. During this period, Pakistani schools are in session (reducing family travel demand), flights and accommodation are generally more affordable, the weather in Madinah is at its most comfortable, and Umrah packages from operators like Big Way Umrah offer better availability and pricing. Many Pakistani pilgrims prefer to combine a Madinah stay of 8 nights with 6 nights in Makkah, giving sufficient time for both spiritual objectives without feeling rushed.",
        },
        {
          heading: "Practical Tips for Your Madinah Visit",
          body: "Always dress modestly and conservatively — abaya/niqab for women, full-length thobes or trousers for men. Carry a small prayer mat, as floors can be marble and cold at night in winter. Always keep your hotel card and a written note of your hotel address in Arabic — it is easy to get lost in the area around Masjid-e-Nabawi. The Madinah Metro is available for travel within the city. Zamzam water is freely available inside Masjid-e-Nabawi. Visit Masjid Quba on a Saturday if possible — the Prophet ﷺ used to visit it every Saturday. Always maintain wudhu so you can pray whenever the Adhan is called.",
        },
      ],
      conclusion:
        "There is no wrong time to visit the city of the Prophet ﷺ — every moment spent there is a blessing and a mercy. But with thoughtful planning, you can make your Ziyarat more comfortable, more focused, and more spiritually impactful. At Big Way Umrah, we offer Madinah packages year-round with varying durations and budgets. Our experienced team will advise you on the best timing based on your personal circumstances, health, and spiritual goals. Because when you visit Madinah, we want every single moment to count. May Allah invite us all again and again to His blessed cities. Ameen.",
    },
  },
];

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}
