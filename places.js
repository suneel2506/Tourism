// Tamil Nadu Tourism - Places Data
export const places = [
  {
    id: 1,
    name: { en: "Mahabalipuram", ta: "மகாபலிபுரம்" },
    district: { en: "Chengalpattu", ta: "செங்கல்பட்டு" },
    description: {
      en: "UNESCO World Heritage site with ancient rock-cut temples and Shore Temple",
      ta: "பண்டைய பாறை கோயில்கள் மற்றும் கடற்கரை கோயிலுடன் யுனெஸ்கோ உலக பாரம்பரிய தளம்"
    },
    image: "mahabalipuram.jpg",
    tags: ["heritage", "temple", "beach"],
    bestMonths: [10, 11, 12, 1, 2, 3],
    budget: "budget",
    dailyCost: 800,
    studentFriendly: true,
    festivals: ["mamallapuram-dance-festival"],
    coordinates: { lat: 12.6269, lng: 80.1927 },
    highlights: ["Shore Temple", "Arjuna's Penance", "Five Rathas"],
    reviews: []
  },
  {
    id: 2,
    name: { en: "Madurai", ta: "மதுரை" },
    district: { en: "Madurai", ta: "மதுரை" },
    description: {
      en: "Temple city famous for Meenakshi Amman Temple with stunning Dravidian architecture",
      ta: "அற்புதமான திராவிட கட்டிடக்கலையுடன் மீனாட்சி அம்மன் கோயிலுக்கு புகழ்பெற்ற கோயில் நகரம்"
    },
    image: "madurai.jpg",
    tags: ["temple", "heritage", "culture"],
    bestMonths: [10, 11, 12, 1, 2, 3],
    budget: "budget",
    dailyCost: 1000,
    studentFriendly: true,
    festivals: ["chithirai-festival", "float-festival"],
    coordinates: { lat: 9.9252, lng: 78.1198 },
    highlights: ["Meenakshi Temple", "Thirumalai Nayakkar Palace", "Gandhi Museum"],
    reviews: []
  },
  {
    id: 3,
    name: { en: "Ooty", ta: "ஊட்டி" },
    district: { en: "Nilgiris", ta: "நீலகிரி" },
    description: {
      en: "Queen of Hill Stations with tea gardens, botanical gardens and pleasant climate",
      ta: "தேயிலை தோட்டங்கள், தாவரவியல் பூங்காக்கள் மற்றும் இனிமையான காலநிலையுடன் மலை நிலையங்களின் ராணி"
    },
    image: "ooty.jpg",
    tags: ["hill-station", "nature", "scenic"],
    bestMonths: [3, 4, 5, 6, 9, 10],
    budget: "mid-range",
    dailyCost: 2000,
    studentFriendly: false,
    festivals: ["summer-festival"],
    coordinates: { lat: 11.4102, lng: 76.6950 },
    highlights: ["Botanical Gardens", "Ooty Lake", "Nilgiri Mountain Railway"],
    reviews: []
  },
  {
    id: 4,
    name: { en: "Rameswaram", ta: "ராமேஸ்வரம்" },
    district: { en: "Ramanathapuram", ta: "ராமநாதபுரம்" },
    description: {
      en: "Sacred island town with Ramanathaswamy Temple and Pamban Bridge",
      ta: "ராமநாதசுவாமி கோயில் மற்றும் பாம்பன் பாலத்துடன் புனித தீவு நகரம்"
    },
    image: "rameswaram.jpg",
    tags: ["temple", "beach", "pilgrimage"],
    bestMonths: [10, 11, 12, 1, 2, 3],
    budget: "budget",
    dailyCost: 900,
    studentFriendly: true,
    festivals: ["maha-shivaratri"],
    coordinates: { lat: 9.2876, lng: 79.3129 },
    highlights: ["Ramanathaswamy Temple", "Pamban Bridge", "Dhanushkodi"],
    reviews: []
  },
  {
    id: 5,
    name: { en: "Kodaikanal", ta: "கொடைக்கானல்" },
    district: { en: "Dindigul", ta: "திண்டுக்கல்" },
    description: {
      en: "Princess of Hill Stations known for misty mountains and star-shaped lake",
      ta: "மூடுபனி மலைகள் மற்றும் நட்சத்திர வடிவ ஏரிக்கு புகழ்பெற்ற மலை நிலையங்களின் இளவரசி"
    },
    image: "kodaikanal.jpg",
    tags: ["hill-station", "nature", "romantic"],
    bestMonths: [4, 5, 6, 9, 10],
    budget: "mid-range",
    dailyCost: 2200,
    studentFriendly: false,
    festivals: ["summer-festival"],
    coordinates: { lat: 10.2381, lng: 77.4892 },
    highlights: ["Kodai Lake", "Coaker's Walk", "Pillar Rocks"],
    reviews: []
  },
  {
    id: 6,
    name: { en: "Kanyakumari", ta: "கன்னியாகுமரி" },
    district: { en: "Kanyakumari", ta: "கன்னியாகுமரி" },
    description: {
      en: "Southernmost tip of India where three seas meet with stunning sunrise and sunset",
      ta: "இந்தியாவின் தென்முனை - மூன்று கடல்கள் சந்திக்கும் இடம், அழகிய சூரிய உதயம் மற்றும் அஸ்தமனம்"
    },
    image: "kanyakumari.jpg",
    tags: ["beach", "heritage", "spiritual"],
    bestMonths: [10, 11, 12, 1, 2, 3],
    budget: "budget",
    dailyCost: 1100,
    studentFriendly: true,
    festivals: ["vivekananda-jayanti"],
    coordinates: { lat: 8.0883, lng: 77.5385 },
    highlights: ["Vivekananda Rock", "Thiruvalluvar Statue", "Sunrise Point"],
    reviews: []
  },
  {
    id: 7,
    name: { en: "Thanjavur", ta: "தஞ்சாவூர்" },
    district: { en: "Thanjavur", ta: "தஞ்சாவூர்" },
    description: {
      en: "Cultural capital of Tamil Nadu with UNESCO-listed Brihadeeswarar Temple",
      ta: "யுனெஸ்கோ பட்டியலிடப்பட்ட பிரகதீஸ்வரர் கோயிலுடன் தமிழ்நாட்டின் கலாச்சார தலைநகரம்"
    },
    image: "thanjavur.jpg",
    tags: ["temple", "heritage", "culture"],
    bestMonths: [10, 11, 12, 1, 2, 3],
    budget: "budget",
    dailyCost: 900,
    studentFriendly: true,
    festivals: ["natyanjali"],
    coordinates: { lat: 10.7870, lng: 79.1378 },
    highlights: ["Brihadeeswarar Temple", "Thanjavur Palace", "Saraswathi Mahal Library"],
    reviews: []
  },
  {
    id: 8,
    name: { en: "Chennai", ta: "சென்னை" },
    district: { en: "Chennai", ta: "சென்னை" },
    description: {
      en: "Capital city with Marina Beach, historic temples and vibrant culture",
      ta: "மெரீனா கடற்கரை, வரலாற்று கோயில்கள் மற்றும் துடிப்பான கலாச்சாரத்துடன் தலைநகரம்"
    },
    image: "chennai.jpg",
    tags: ["beach", "heritage", "culture", "city"],
    bestMonths: [11, 12, 1, 2],
    budget: "mid-range",
    dailyCost: 1800,
    studentFriendly: true,
    festivals: ["margazhi-season", "pongal"],
    coordinates: { lat: 13.0827, lng: 80.2707 },
    highlights: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George"],
    reviews: []
  },
  {
    id: 9,
    name: { en: "Yercaud", ta: "ஏற்காடு" },
    district: { en: "Salem", ta: "சேலம்" },
    description: {
      en: "Jewel of the South with coffee plantations and serene lake",
      ta: "காபி தோட்டங்கள் மற்றும் அமைதியான ஏரியுடன் தெற்கின் நகை"
    },
    image: "yercaud.jpg",
    tags: ["hill-station", "nature", "peaceful"],
    bestMonths: [3, 4, 5, 9, 10, 11],
    budget: "budget",
    dailyCost: 1200,
    studentFriendly: true,
    festivals: ["summer-festival"],
    coordinates: { lat: 11.7753, lng: 78.2093 },
    highlights: ["Yercaud Lake", "Shevaroy Temple", "Lady's Seat"],
    reviews: []
  },
  {
    id: 10,
    name: { en: "Chidambaram", ta: "சிதம்பரம்" },
    district: { en: "Cuddalore", ta: "கடலூர்" },
    description: {
      en: "Temple town famous for Nataraja Temple dedicated to Lord Shiva as cosmic dancer",
      ta: "அண்டப் பரதக்காரியாக சிவபெருமானுக்கு அர்ப்பணிக்கப்பட்ட நடராஜர் கோயிலுக்கு புகழ்பெற்ற கோயில் நகரம்"
    },
    image: "chidambaram.jpg",
    tags: ["temple", "heritage", "spiritual"],
    bestMonths: [10, 11, 12, 1, 2, 3],
    budget: "budget",
    dailyCost: 700,
    studentFriendly: true,
    festivals: ["natyanjali"],
    coordinates: { lat: 11.3992, lng: 79.6939 },
    highlights: ["Nataraja Temple", "Pichavaram Mangroves", "Thillai Kali Temple"],
    reviews: []
  },
  {
    id: 11,
    name: { en: "Hogenakkal", ta: "ஒகேனக்கல்" },
    district: { en: "Dharmapuri", ta: "தர்மபுரி" },
    description: {
      en: "Niagara of India with spectacular waterfalls and coracle rides",
      ta: "அற்புதமான நீர்வீழ்ச்சிகள் மற்றும் பரிசல் சவாரிகளுடன் இந்தியாவின் நயாகரா"
    },
    image: "hogenakkal.jpg",
    tags: ["waterfall", "nature", "adventure"],
    bestMonths: [7, 8, 9, 10, 11],
    budget: "budget",
    dailyCost: 800,
    studentFriendly: true,
    festivals: [],
    coordinates: { lat: 12.1156, lng: 77.7776 },
    highlights: ["Waterfalls", "Coracle Rides", "Oil Massage"],
    reviews: []
  },
  {
    id: 12,
    name: { en: "Mudumalai", ta: "முதுமலை" },
    district: { en: "Nilgiris", ta: "நீலகிரி" },
    description: {
      en: "Tiger Reserve with diverse wildlife including elephants, tigers and leopards",
      ta: "யானைகள், புலிகள் மற்றும் சிறுத்தைகள் உள்ளிட்ட பன்முக வன்யுயிர்களைக் கொண்ட புலிகள் காப்பகம்"
    },
    image: "mudumalai.jpg",
    tags: ["wildlife", "nature", "safari"],
    bestMonths: [10, 11, 12, 1, 2, 3, 4, 5],
    budget: "mid-range",
    dailyCost: 2500,
    studentFriendly: false,
    festivals: [],
    coordinates: { lat: 11.5666, lng: 76.5522 },
    highlights: ["Elephant Camp", "Safari", "Moyar River"],
    reviews: []
  },
  {
    id: 13,
    name: { en: "Pondicherry", ta: "புதுச்சேரி" },
    district: { en: "Puducherry", ta: "புதுச்சேரி" },
    description: {
      en: "French colonial town with beautiful beaches, cafes and spiritual retreats",
      ta: "அழகிய கடற்கரைகள், காஃபேக்கள் மற்றும் ஆன்மீக தியானங்களுடன் பிரெஞ்சு காலனி நகரம்"
    },
    image: "pondicherry.jpg",
    tags: ["beach", "heritage", "culture", "spiritual"],
    bestMonths: [10, 11, 12, 1, 2, 3],
    budget: "mid-range",
    dailyCost: 2000,
    studentFriendly: true,
    festivals: ["bastille-day"],
    coordinates: { lat: 11.9416, lng: 79.8083 },
    highlights: ["Promenade Beach", "Auroville", "French Quarter"],
    reviews: []
  },
  {
    id: 14,
    name: { en: "Valparai", ta: "வால்பாறை" },
    district: { en: "Coimbatore", ta: "கோயம்புத்தூர்" },
    description: {
      en: "Picturesque hill station with tea estates and misty mountains",
      ta: "தேயிலை தோட்டங்கள் மற்றும் மூடுபனி மலைகளுடன் அழகிய மலை நிலையம்"
    },
    image: "valparai.jpg",
    tags: ["hill-station", "nature", "wildlife"],
    bestMonths: [9, 10, 11, 12, 1, 2, 3],
    budget: "mid-range",
    dailyCost: 1800,
    studentFriendly: false,
    festivals: [],
    coordinates: { lat: 10.3268, lng: 76.9549 },
    highlights: ["Sholayar Dam", "Monkey Falls", "Nallamudi Viewpoint"],
    reviews: []
  },
  {
    id: 15,
    name: { en: "Tiruchirappalli", ta: "திருச்சிராப்பள்ளி" },
    district: { en: "Tiruchirappalli", ta: "திருச்சிராப்பள்ளி" },
    description: {
      en: "Historic city with Rock Fort Temple and Srirangam Temple",
      ta: "மலைக்கோட்டை கோயில் மற்றும் ஸ்ரீரங்கம் கோயிலுடன் வரலாற்று நகரம்"
    },
    image: "trichy.jpg",
    tags: ["temple", "heritage", "culture"],
    bestMonths: [10, 11, 12, 1, 2, 3],
    budget: "budget",
    dailyCost: 900,
    studentFriendly: true,
    festivals: ["vaikunta-ekadasi"],
    coordinates: { lat: 10.7905, lng: 78.7047 },
    highlights: ["Rock Fort", "Srirangam Temple", "Jambukeswarar Temple"],
    reviews: []
  },
  {
    id: 16,
    name: { en: "Chettinad", ta: "செட்டிநாடு" },
    district: { en: "Sivaganga", ta: "சிவகங்கை" },
    description: {
      en: "Heritage region famous for palatial mansions and unique cuisine",
      ta: "மாளிகைகள் மற்றும் தனித்துவமான உணவுக்கு புகழ்பெற்ற பாரம்பரிய பகுதி"
    },
    image: "chettinad.jpg",
    tags: ["heritage", "culture", "food"],
    bestMonths: [10, 11, 12, 1, 2, 3],
    budget: "mid-range",
    dailyCost: 1500,
    studentFriendly: false,
    festivals: [],
    coordinates: { lat: 10.0647, lng: 78.8001 },
    highlights: ["Chettinad Mansions", "Local Cuisine", "Athangudi Tiles"],
    reviews: []
  },
  {
    id: 17,
    name: { en: "Courtallam", ta: "குற்றாலம்" },
    district: { en: "Tenkasi", ta: "தென்காசி" },
    description: {
      en: "Spa of South India with medicinal waterfalls surrounded by herbs",
      ta: "மூலிகைகளால் சூழப்பட்ட மருத்துவ நீர்வீழ்ச்சிகளுடன் தென்னிந்தியாவின் ஸ்பா"
    },
    image: "courtallam.jpg",
    tags: ["waterfall", "nature", "wellness"],
    bestMonths: [6, 7, 8, 9, 10, 11],
    budget: "budget",
    dailyCost: 800,
    studentFriendly: true,
    festivals: [],
    coordinates: { lat: 8.9308, lng: 77.2752 },
    highlights: ["Main Falls", "Five Falls", "Old Falls"],
    reviews: []
  },
  {
    id: 18,
    name: { en: "Kumbakonam", ta: "கும்பகோணம்" },
    district: { en: "Thanjavur", ta: "தஞ்சாவூர்" },
    description: {
      en: "Temple town with numerous ancient temples and famous Mahamaham tank",
      ta: "பல பண்டைய கோயில்கள் மற்றும் புகழ்பெற்ற மகாமகம் குளத்துடன் கோயில் நகரம்"
    },
    image: "kumbakonam.jpg",
    tags: ["temple", "heritage", "pilgrimage"],
    bestMonths: [10, 11, 12, 1, 2, 3],
    budget: "budget",
    dailyCost: 700,
    studentFriendly: true,
    festivals: ["mahamaham"],
    coordinates: { lat: 10.9617, lng: 79.3881 },
    highlights: ["Adi Kumbeswarar Temple", "Mahamaham Tank", "Darasuram Temple"],
    reviews: []
  },
  {
    id: 19,
    name: { en: "Yelagiri", ta: "ஏலகிரி" },
    district: { en: "Tirupattur", ta: "திருப்பத்தூர்" },
    description: {
      en: "Offbeat hill station perfect for trekking and paragliding",
      ta: "நடைபயணம் மற்றும் பாராகிளைடிங்கிற்கு சிறந்த அசாதாரண மலை நிலையம்"
    },
    image: "yelagiri.jpg",
    tags: ["hill-station", "adventure", "nature"],
    bestMonths: [3, 4, 5, 9, 10, 11],
    budget: "budget",
    dailyCost: 1000,
    studentFriendly: true,
    festivals: ["summer-festival"],
    coordinates: { lat: 12.5815, lng: 78.6416 },
    highlights: ["Punganoor Lake", "Swamimalai Hills", "Jalagamparai Falls"],
    reviews: []
  },
  {
    id: 20,
    name: { en: "Point Calimere", ta: "கோடியக்கரை" },
    district: { en: "Nagapattinam", ta: "நாகப்பட்டினம்" },
    description: {
      en: "Wildlife sanctuary famous for flamingos and migratory birds",
      ta: "ஃபிளமிங்கோக்கள் மற்றும் புலம்பெயர் பறவைகளுக்கு புகழ்பெற்ற வனவிலங்கு சரணாலயம்"
    },
    image: "pointcalimere.jpg",
    tags: ["wildlife", "nature", "birdwatching"],
    bestMonths: [11, 12, 1, 2],
    budget: "budget",
    dailyCost: 900,
    studentFriendly: true,
    festivals: [],
    coordinates: { lat: 10.2897, lng: 79.8605 },
    highlights: ["Bird Sanctuary", "Flamingos", "Mangroves"],
    reviews: []
  }
];

// Tag definitions with translations
export const tags = {
  temple: { en: "Temple", ta: "கோயில்", icon: "🛕" },
  beach: { en: "Beach", ta: "கடற்கரை", icon: "🏖️" },
  "hill-station": { en: "Hill Station", ta: "மலை நிலையம்", icon: "⛰️" },
  heritage: { en: "Heritage", ta: "பாரம்பரியம்", icon: "🏛️" },
  wildlife: { en: "Wildlife", ta: "வனவிலங்கு", icon: "🦁" },
  waterfall: { en: "Waterfall", ta: "நீர்வீழ்ச்சி", icon: "💧" },
  nature: { en: "Nature", ta: "இயற்கை", icon: "🌿" },
  culture: { en: "Culture", ta: "கலாச்சாரம்", icon: "🎭" },
  pilgrimage: { en: "Pilgrimage", ta: "புனித யாத்திரை", icon: "🙏" },
  spiritual: { en: "Spiritual", ta: "ஆன்மீகம்", icon: "☸️" },
  adventure: { en: "Adventure", ta: "சாகசம்", icon: "🧗" },
  romantic: { en: "Romantic", ta: "காதல்", icon: "💑" },
  scenic: { en: "Scenic", ta: "அழகிய", icon: "🌅" },
  peaceful: { en: "Peaceful", ta: "அமைதியான", icon: "🧘" },
  food: { en: "Food", ta: "உணவு", icon: "🍛" },
  city: { en: "City", ta: "நகரம்", icon: "🏙️" },
  safari: { en: "Safari", ta: "சஃபாரி", icon: "🚙" },
  wellness: { en: "Wellness", ta: "ஆரோக்கியம்", icon: "💆" },
  birdwatching: { en: "Bird Watching", ta: "பறவை பார்த்தல்", icon: "🦅" }
};

// Budget tier definitions
export const budgetTiers = {
  budget: { en: "Budget Friendly", ta: "பட்ஜெட் நட்பு", maxCost: 1200, icon: "💰" },
  "mid-range": { en: "Mid Range", ta: "நடுத்தர வரம்பு", maxCost: 2500, icon: "💵" },
  premium: { en: "Premium", ta: "பிரீமியம்", maxCost: 5000, icon: "💎" }
};
