 


const mockRetailers = [
  // Grocery (10)
  { id: 1, name: "Fresh Basket", category: "Grocery", location: "Indiranagar, Bangalore", phone: "+919876543210", coordinates: { latitude: 12.9719, longitude: 77.6412 } },
  { id: 6, name: "Nature's Mart", category: "Grocery", location: "HSR Layout, Bangalore", phone: "+919876543215", coordinates: { latitude: 12.9118, longitude: 77.6476 } },
  { id: 11, name: "Big Bazaar", category: "Grocery", location: "Vasant Kunj, Delhi", phone: "+919876543220", coordinates: { latitude: 28.5253, longitude: 77.1554 } },
  { id: 17, name: "Reliance Fresh", category: "Grocery", location: "Andheri, Mumbai", phone: "+919876543226", coordinates: { latitude: 19.1136, longitude: 72.8697 } },
  { id: 21, name: "Spencers", category: "Grocery", location: "MG Road, Bangalore", phone: "+919876543230", coordinates: { latitude: 12.9762, longitude: 77.6034 } },
  { id: 22, name: "Safal", category: "Grocery", location: "Janakpuri, Delhi", phone: "+919876543231", coordinates: { latitude: 28.6384, longitude: 77.0863 } },
  { id: 23, name: "D-Mart", category: "Grocery", location: "Thane, Mumbai", phone: "+919876543232", coordinates: { latitude: 19.2183, longitude: 72.9781 } },
  { id: 24, name: "More Supermarket", category: "Grocery", location: "Whitefield, Bangalore", phone: "+919876543233", coordinates: { latitude: 12.9699, longitude: 77.7498 } },
  { id: 25, name: "Le Marche", category: "Grocery", location: "Greater Kailash, Delhi", phone: "+919876543234", coordinates: { latitude: 28.5528, longitude: 77.2435 } },
  { id: 26, name: "Haji Ali Juice Center", category: "Grocery", location: "Haji Ali, Mumbai", phone: "+919876543235", coordinates: { latitude: 18.9797, longitude: 72.8094 } },

  // Pharmacy (10)
  { id: 2, name: "MedPlus Pharmacy", category: "Pharmacy", location: "Indiranagar, Bangalore", phone: "+919876543211", coordinates: { latitude: 12.9716, longitude: 77.6415 } },
  { id: 7, name: "Apollo Pharmacy", category: "Pharmacy", location: "Connaught Place, Delhi", phone: "+919876543216", coordinates: { latitude: 28.6329, longitude: 77.2195 } },
  { id: 12, name: "Delhi Pharmacy", category: "Pharmacy", location: "Vasant Kunj, Delhi", phone: "+919876543221", coordinates: { latitude: 28.5255, longitude: 77.1556 } },
  { id: 18, name: "Mumbai Medical", category: "Pharmacy", location: "Andheri, Mumbai", phone: "+919876543227", coordinates: { latitude: 19.1138, longitude: 72.8699 } },
    { id: 27, name: "Wellness Pharmacy", category: "Pharmacy", location: "Jayanagar, Bangalore", phone: "+919876543236", coordinates: { latitude: 12.9431, longitude: 77.5822 } },
  { id: 28, name: "City Medicos", category: "Pharmacy", location: "Karol Bagh, Delhi", phone: "+919876543237", coordinates: { latitude: 28.6519, longitude: 77.2023 } },
  { id: 29, name: "Lifeline Pharmacy", category: "Pharmacy", location: "Borivali, Mumbai", phone: "+919876543238", coordinates: { latitude: 19.2307, longitude: 72.8567 } },
  { id: 30, name: "New Care Pharmacy", category: "Pharmacy", location: "Koramangala, Bangalore", phone: "+919876543239", coordinates: { latitude: 12.9352, longitude: 77.6174 } },
  { id: 31, name: "G K Pharmacy", category: "Pharmacy", location: "Hauz Khas, Delhi", phone: "+919876543240", coordinates: { latitude: 28.5502, longitude: 77.2079 } },
  { id: 32, name: "Super Meds", category: "Pharmacy", location: "Chembur, Mumbai", phone: "+919876543241", coordinates: { latitude: 19.0685, longitude: 72.8965 } },

  // Electronics (10)
  { id: 3, name: "Digital World", category: "Electronics", location: "Koramangala, Bangalore", phone: "+919876543212", coordinates: { latitude: 12.9279, longitude: 77.6271 } },
  { id: 8, name: "Gadget Hub", category: "Electronics", location: "Connaught Place, Delhi", phone: "+919876543217", coordinates: { latitude: 28.6325, longitude: 77.2193 } },
  { id: 19, name: "Croma", category: "Electronics", location: "Powai, Mumbai", phone: "+919876543228", coordinates: { latitude: 19.1176, longitude: 72.9067 } },
  { id: 33, name: "Vijay Sales", category: "Electronics", location: "Jayanagar, Bangalore", phone: "+919876543242", coordinates: { latitude: 12.9398, longitude: 77.5833 } },
  { id: 34, name: "Reliance Digital", category: "Electronics", location: "Karol Bagh, Delhi", phone: "+919876543243", coordinates: { latitude: 28.6482, longitude: 77.2012 } },
  { id: 35, name: "Kohinoor Electronics", category: "Electronics", location: "Dadar, Mumbai", phone: "+919876543244", coordinates: { latitude: 19.0205, longitude: 72.8478 } },
  { id: 36, name: "Sangeetha Mobiles", category: "Electronics", location: "Indiranagar, Bangalore", phone: "+919876543245", coordinates: { latitude: 12.9632, longitude: 77.6402 } },
  { id: 37, name: "Samsung Plaza", category: "Electronics", location: "Nehru Place, Delhi", phone: "+919876543246", coordinates: { latitude: 28.5448, longitude: 77.2509 } },
  { id: 38, name: "Sony Center", category: "Electronics", location: "Linking Road, Mumbai", phone: "+919876543247", coordinates: { latitude: 19.0761, longitude: 72.8317 } },
  { id: 39, name: "Apple Store", category: "Electronics", location: "MG Road, Bangalore", phone: "+919876543248", coordinates: { latitude: 12.9754, longitude: 77.6026 } },

  // Fashion (10)
  { id: 4, name: "Trendy Fashion Hub", category: "Fashion", location: "Koramangala, Bangalore", phone: "+919876543213", coordinates: { latitude: 12.9277, longitude: 77.6273 } },
  { id: 9, name: "Fashion Street", category: "Fashion", location: "Saket, Delhi", phone: "+919876543218", coordinates: { latitude: 28.5244, longitude: 77.2067 } },
  { id: 20, name: "Fashion Hub", category: "Fashion", location: "Powai, Mumbai", phone: "+919876543229", coordinates: { latitude: 19.1178, longitude: 72.9069 } },
  { id: 40, name: "Lifestyle", category: "Fashion", location: "Commercial Street, Bangalore", phone: "+919876543249", coordinates: { latitude: 12.9816, longitude: 77.6092 } },
  { id: 41, name: "Shoppers Stop", category: "Fashion", location: "South Extension, Delhi", phone: "+919876543250", coordinates: { latitude: 28.5652, longitude: 77.2187 } },
  { id: 42, name: "Pantaloons", category: "Fashion", location: "Andheri West, Mumbai", phone: "+919876543251", coordinates: { latitude: 19.1242, longitude: 72.8342 } },
  { id: 43, name: "Max Fashion", category: "Fashion", location: "HSR Layout, Bangalore", phone: "+919876543252", coordinates: { latitude: 12.9155, longitude: 77.6435 } },
  { id: 44, name: "Zara", category: "Fashion", location: "Khan Market, Delhi", phone: "+919876543253", coordinates: { latitude: 28.6019, longitude: 77.2248 } },
  { id: 45, name: "Westside", category: "Fashion", location: "Bandra Kurla Complex, Mumbai", phone: "+919876543254", coordinates: { latitude: 19.0722, longitude: 72.8647 } },
  { id: 46, name: "Fabindia", category: "Fashion", location: "Jayanagar, Bangalore", phone: "+919876543255", coordinates: { latitude: 12.9412, longitude: 77.5803 } },

  // Home (10)
  { id: 5, name: "Home Decor Studio", category: "Home", location: "HSR Layout, Bangalore", phone: "+919876543214", coordinates: { latitude: 12.9116, longitude: 77.6474 } },
  { id: 10, name: "Home Center", category: "Home", location: "Saket, Delhi", phone: "+919876543219", coordinates: { latitude: 28.5242, longitude: 77.2065 } },
  { id: 47, name: "IKEA", category: "Home", location: "Nagawara, Bangalore", phone: "+919876543256", coordinates: { latitude: 13.0371, longitude: 77.6115 } },
  { id: 48, name: "Fabindia Home", category: "Home", location: "Greater Kailash, Delhi", phone: "+919876543257", coordinates: { latitude: 28.5541, longitude: 77.2452 } },
  { id: 49, name: "Godrej Interio", category: "Home", location: "Worli, Mumbai", phone: "+919876543258", coordinates: { latitude: 19.0064, longitude: 72.8184 } },
  { id: 50, name: "Durian Furniture", category: "Home", location: "Indiranagar, Bangalore", phone: "+919876543259", coordinates: { latitude: 12.9688, longitude: 77.6388 } },
  { id: 51, name: "Stanley Lifestyles", category: "Home", location: "MG Road, Delhi", phone: "+919876543260", coordinates: { latitude: 28.6282, longitude: 77.2164 } },
  { id: 52, name: "Hettich India", category: "Home", location: "Andheri East, Mumbai", phone: "+919876543261", coordinates: { latitude: 19.1082, longitude: 72.8789 } },
  { id: 53, name: "Hulsta", category: "Home", location: "Lavelle Road, Bangalore", phone: "+919876543262", coordinates: { latitude: 12.9737, longitude: 77.6063 } },
  { id: 54, name: "BoConcept", category: "Home", location: "Sunder Nagar, Delhi", phone: "+919876543263", coordinates: { latitude: 28.6027, longitude: 77.2384 } },

  // Restaurant (10)
  { id: 13, name: "Curry House", category: "Restaurant", location: "Bandra, Mumbai", phone: "+919876543222", coordinates: { latitude: 19.0596, longitude: 72.8295 } },
  { id: 15, name: "Mumbai Spice", category: "Restaurant", location: "Colaba, Mumbai", phone: "+919876543224", coordinates: { latitude: 18.9067, longitude: 72.8147 } },
  { id: 55, name: "Indian Coffee House", category: "Restaurant", location: "MG Road, Bangalore", phone: "+919876543264", coordinates: { latitude: 12.9758, longitude: 77.6029 } },
  { id: 56, name: "Saravana Bhavan", category: "Restaurant", location: "Connaught Place, Delhi", phone: "+919876543265", coordinates: { latitude: 28.6315, longitude: 77.2189 } },
  { id: 57, name: "Britannia & Co.", category: "Restaurant", location: "Fort, Mumbai", phone: "+919876543266", coordinates: { latitude: 18.9284, longitude: 72.8341 } },
  { id: 58, name: "MTR", category: "Restaurant", location: "Lalbagh Road, Bangalore", phone: "+919876543267", coordinates: { latitude: 12.9527, longitude: 77.5912 } },
  { id: 59, name: "Karim's", category: "Restaurant", location: "Jama Masjid, Delhi", phone: "+919876543268", coordinates: { latitude: 28.6500, longitude: 77.2330 } },
  { id: 60, name: "Leopold Cafe", category: "Restaurant", location: "Colaba Causeway, Mumbai", phone: "+919876543269", coordinates: { latitude: 18.9022, longitude: 72.8153 } },
  { id: 61, name: "Toit", category: "Restaurant", location: "Indiranagar, Bangalore", phone: "+919876543270", coordinates: { latitude: 12.9712, longitude: 77.6409 } },
  { id: 62, name: "Peter Cat", category: "Restaurant", location: "Park Street, Kolkata", phone: "+919876543271", coordinates: { latitude: 22.5636, longitude: 88.3589 } },

  // Beauty (10)
  { id: 14, name: "Beauty Palace", category: "Beauty", location: "Bandra, Mumbai", phone: "+919876543223", coordinates: { latitude: 19.0598, longitude: 72.8297 } },
  { id: 16, name: "Glamour Studio", category: "Beauty", location: "Colaba, Mumbai", phone: "+919876543225", coordinates: { latitude: 18.9065, longitude: 72.8145 } },
  { id: 63, name: "Lakme Salon", category: "Beauty", location: "Jayanagar, Bangalore", phone: "+919876543272", coordinates: { latitude: 12.9425, longitude: 77.5818 } },
  { id: 64, name: "VLCC", category: "Beauty", location: "Karol Bagh, Delhi", phone: "+919876543273", coordinates: { latitude: 28.6505, longitude: 77.2019 } },
  { id: 65, name: "Naturals Salon", category: "Beauty", location: "Andheri West, Mumbai", phone: "+919876543274", coordinates: { latitude: 19.1238, longitude: 72.8338 } },
  { id: 66, name: "Bodycraft Salon", category: "Beauty", location: "Indiranagar, Bangalore", phone: "+919876543275", coordinates: { latitude: 12.9628, longitude: 77.6398 } },
  { id: 67, name: "Looks Salon", category: "Beauty", location: "Rajouri Garden, Delhi", phone: "+919876543276", coordinates: { latitude: 28.6488, longitude: 77.1265 } },
  { id: 68, name: "Jean-Claude Biguine Salon", category: "Beauty", location: "Bandra Kurla Complex, Mumbai", phone: "+919876543277", coordinates: { latitude: 19.0718, longitude: 72.8643 } },
  { id: 69, name: "Toni & Guy", category: "Beauty", location: "MG Road, Bangalore", phone: "+919876543278", coordinates: { latitude: 12.9748, longitude: 77.6022 } },
  { id: 70, name: "Aroma Magic", category: "Beauty", location: "Hauz Khas, Delhi", phone: "+919876543279", coordinates: { latitude: 28.5498, longitude: 77.2075 } },
];

export default mockRetailers;
