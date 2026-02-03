// Tamil Nadu Tourism - Festivals Data
export const festivals = [
    {
        id: "pongal",
        name: { en: "Pongal", ta: "பொங்கல்" },
        month: 1,
        days: [14, 15, 16, 17],
        description: {
            en: "Harvest festival celebrating the sun god with traditional rice dishes",
            ta: "சூரிய கடவுளை பாரம்பரிய அரிசி உணவுகளுடன் கொண்டாடும் அறுவடை திருவிழா"
        },
        regions: ["all"],
        highlights: ["Kolam decorations", "Jallikattu", "Sweet Pongal"],
        relatedPlaces: [2, 7, 8, 15]
    },
    {
        id: "chithirai-festival",
        name: { en: "Chithirai Festival", ta: "சித்திரை திருவிழா" },
        month: 4,
        days: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        description: {
            en: "Grand 10-day celebration at Meenakshi Temple in Madurai",
            ta: "மதுரை மீனாட்சி கோயிலில் பிரமாண்டமான 10 நாள் கொண்டாட்டம்"
        },
        regions: ["Madurai"],
        highlights: ["Celestial Wedding", "Temple Processions", "Float Festival"],
        relatedPlaces: [2]
    },
    {
        id: "float-festival",
        name: { en: "Float Festival", ta: "தெப்பத் திருவிழா" },
        month: 1,
        days: [20, 21, 22],
        description: {
            en: "Temple deities are taken on decorated floats on temple tanks",
            ta: "கோயில் தெய்வங்கள் அலங்கரிக்கப்பட்ட மிதவைகளில் கோயில் குளங்களில் எடுத்துச் செல்லப்படுகின்றன"
        },
        regions: ["Madurai", "Tiruchirappalli"],
        highlights: ["Illuminated Floats", "Night Celebrations"],
        relatedPlaces: [2, 15]
    },
    {
        id: "mamallapuram-dance-festival",
        name: { en: "Mamallapuram Dance Festival", ta: "மாமல்லபுரம் நடன விழா" },
        month: 1,
        days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
        description: {
            en: "Classical dance performances against backdrop of ancient monuments",
            ta: "பண்டைய நினைவுச்சின்னங்களின் பின்னணியில் பாரம்பரிய நடன நிகழ்ச்சிகள்"
        },
        regions: ["Mahabalipuram"],
        highlights: ["Bharatanatyam", "Kuchipudi", "Open-air Stage"],
        relatedPlaces: [1]
    },
    {
        id: "natyanjali",
        name: { en: "Natyanjali Festival", ta: "நாட்டியாஞ்சலி விழா" },
        month: 2,
        days: [20, 21, 22, 23, 24, 25],
        description: {
            en: "Dance offerings to Lord Nataraja at Chidambaram Temple",
            ta: "சிதம்பரம் கோயிலில் நடராஜருக்கு நடன வழிபாடுகள்"
        },
        regions: ["Chidambaram", "Thanjavur"],
        highlights: ["Classical Dance", "Temple Setting", "Shivaratri"],
        relatedPlaces: [7, 10]
    },
    {
        id: "maha-shivaratri",
        name: { en: "Maha Shivaratri", ta: "மகா சிவராத்திரி" },
        month: 2,
        days: [25, 26],
        description: {
            en: "Night-long worship of Lord Shiva with special pujas",
            ta: "சிறப்பு பூஜைகளுடன் சிவபெருமானுக்கு இரவு முழுவதும் வழிபாடு"
        },
        regions: ["all"],
        highlights: ["Night Vigil", "Special Abhishekam", "Temple Festivals"],
        relatedPlaces: [4, 10, 15]
    },
    {
        id: "vaikunta-ekadasi",
        name: { en: "Vaikunta Ekadasi", ta: "வைகுண்ட ஏகாதசி" },
        month: 12,
        days: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        description: {
            en: "Important Vaishnavite festival at Srirangam Temple",
            ta: "ஸ்ரீரங்கம் கோயிலில் முக்கியமான வைணவ திருவிழா"
        },
        regions: ["Tiruchirappalli", "Chennai"],
        highlights: ["Paramapada Vasal", "10-day Festival", "Processions"],
        relatedPlaces: [8, 15]
    },
    {
        id: "summer-festival",
        name: { en: "Summer Festival", ta: "கோடை விழா" },
        month: 5,
        days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        description: {
            en: "Cultural celebrations in hill stations with flower shows and boat races",
            ta: "மலர் கண்காட்சிகள் மற்றும் படகு பந்தயங்களுடன் மலை நிலையங்களில் கலாச்சார கொண்டாட்டங்கள்"
        },
        regions: ["Ooty", "Kodaikanal", "Yercaud", "Yelagiri"],
        highlights: ["Flower Show", "Boat Race", "Cultural Programs"],
        relatedPlaces: [3, 5, 9, 19]
    },
    {
        id: "margazhi-season",
        name: { en: "Margazhi Music Season", ta: "மார்கழி இசை பருவம்" },
        month: 12,
        days: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        description: {
            en: "Month-long Carnatic music and dance festival in Chennai",
            ta: "சென்னையில் ஒரு மாத கால கர்நாடக இசை மற்றும் நடன விழா"
        },
        regions: ["Chennai"],
        highlights: ["Carnatic Music", "Bharatanatyam", "Sabhas"],
        relatedPlaces: [8]
    },
    {
        id: "mahamaham",
        name: { en: "Mahamaham Festival", ta: "மகாமகம் திருவிழா" },
        month: 2,
        days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        description: {
            en: "Once in 12 years grand bathing festival at Kumbakonam",
            ta: "கும்பகோணத்தில் 12 ஆண்டுகளுக்கு ஒருமுறை நடைபெறும் பிரமாண்ட நீராட்டு விழா"
        },
        regions: ["Kumbakonam"],
        highlights: ["Sacred Bath", "12-year cycle", "Mahamaham Tank"],
        relatedPlaces: [18]
    },
    {
        id: "karthigai-deepam",
        name: { en: "Karthigai Deepam", ta: "கார்த்திகை தீபம்" },
        month: 11,
        days: [25, 26, 27, 28, 29, 30],
        description: {
            en: "Festival of lights with lamps lit in homes and temples",
            ta: "வீடுகள் மற்றும் கோயில்களில் விளக்குகள் ஏற்றப்படும் ஒளி திருவிழா"
        },
        regions: ["all"],
        highlights: ["Oil Lamps", "Tiruvannamalai Deepam", "Temple Festivals"],
        relatedPlaces: [2, 7, 8, 15]
    },
    {
        id: "thai-pusam",
        name: { en: "Thai Pusam", ta: "தைப்பூசம்" },
        month: 1,
        days: [27, 28, 29, 30],
        description: {
            en: "Festival honoring Lord Murugan with kavadi processions",
            ta: "காவடி ஊர்வலங்களுடன் முருகப்பெருமானை கௌரவிக்கும் திருவிழா"
        },
        regions: ["all"],
        highlights: ["Kavadi", "Palani Temple", "Processions"],
        relatedPlaces: [2, 5]
    }
];

// Get festivals for a specific month
export function getFestivalsByMonth(month) {
    return festivals.filter(f => f.month === month);
}

// Get upcoming festivals (next 60 days)
export function getUpcomingFestivals(currentMonth, currentDay) {
    return festivals.filter(f => {
        if (f.month === currentMonth) {
            return f.days.some(d => d >= currentDay);
        }
        if (f.month === currentMonth + 1 || (currentMonth === 12 && f.month === 1)) {
            return true;
        }
        return false;
    });
}
