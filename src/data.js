export const valueData = [
  {
    key: 1,
    icon: 'wifi',
    title: 'Complimentary High-Speed Wi-Fi',
    content:
      'Stay connected with the world at your fingertips. Our reliable and fast Wi-Fi ensures you can work, stream, and browse with ease, anytime and anywhere on our premises.',
  },
  {
    key: 2,
    icon: 'power',
    title: 'Uninterrupted Power Backup',
    content:
      'We ensure your comfort is never compromised. Our seamless power backup system guarantees that all our facilities, including lighting, air conditioning, and electronic devices, remain operational, even during power outages.',
  },
  {
    key: 3,
    icon: 'cooking',
    title: 'Gourmet Cooking Services',
    content:
      'Indulge in a culinary adventure without leaving your room. Our skilled chefs are at your service to whip up delicious meals, tailored to your taste preferences and dietary requirements.',
  },
  {
    key: 4,
    icon: 'laundary',
    title: 'Efficient Laundry Services',
    content:
      'Fresh clothes are essential for a comfortable stay. Our laundry services are efficient and convenient, ensuring your garments are cleaned, pressed, and returned to you in pristine condition.',
  },
  {
    key: 5,
    icon: 'cleaning',
    title: 'Daily Cleaning Services',
    content:
      'Experience the ultimate in cleanliness and hygiene. Our dedicated housekeeping team ensures your living space is spotlessly maintained, offering daily cleaning services for a fresh and healthy environment.',
  },
  {
    key: 6,
    icon: 'ac',
    title: 'Air Conditioning in Every Room',
    content:
      'Retreat into a cool, comfortable haven. Our state-of-the-art air conditioning systems provide a much-needed respite from the outside heat, ensuring a pleasant and relaxing atmosphere throughout your stay.',
  },
];

export const popularPropertyData = [
  {
    rate: '20,000/night',
    type: '3BHK Villa',
    location: 'Siolim, Goa',
  },
  {
    rate: '10,000/night',
    type: 'Cottage in Morjim',
    location: 'Morjim, Goa',
  },
  {
    rate: '3,000/night',
    type: '1BHK Apartment',
    location: 'Siolim, Goa',
  },
  {
    rate: '6,000/night',
    type: '1BHK Apartment',
    location: 'Merna Road, Goa',
  },
  {
    rate: '25,000/night',
    type: '3BHK Villa with Pool',
    location: 'Vagator, Goa',
  },
  {
    rate: '50,000/night',
    type: '5BHK Villa with Pool',
    location: 'Vagator, Goa',
  },
];


export const randomQuote = () => {
const quoteList = [
  "It's like a home away from home",
  'Find your sanctuary in our cozy abode.',
  'Where every corner tells a story, welcome to your new home.',
  'Live the dream, one room at a time.',
  'Unlock the door to comfort and convenience.',
  'Your perfect space awaits, just beyond the threshold.',
  'Discover the essence of modern living in every room.',
  'Embrace the warmth of a place you can truly call yours.',
  'Every wall holds the promise of new beginnings.',
  'Step into luxury, where every detail speaks of elegance.',
  'Experience the joy of living in harmony with your surroundings.',
  'Home is where memories are made and laughter never fades.',
  'Let our properties be the canvas for your beautiful life.',
  'Escape the ordinary and find solace in our extraordinary spaces.',
  'From the doorstep to the rooftop, experience life at its finest.',
  'Cherish the moments spent in a place you proudly call home.',
  'Your comfort is our priority, welcome to your haven.',
  'In our properties, every day feels like a fresh start.',
  'Unwind in the tranquility of your own personal retreat.',
  'Elevate your lifestyle in spaces designed for your every need.',
  'Where every sunset paints a masterpiece outside your window.',
];

const randomIndex =  Math.floor(Math.random() * quoteList.length);

  return quoteList[randomIndex];
}