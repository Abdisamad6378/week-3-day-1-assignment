
// TASK 2: DATA PROCESSING PIPELINE

const listings = [
  { 
    name: "Cozy Studio Westlands", 
    price: 3500, 
    rating: 4.8, 
    neighborhood: "Westlands", 
    amenities: ["wifi", "kitchen", "parking"] 
  },
  { 
    name: "Modern Apartment Kilimani", 
    price: 6000, 
    rating: 4.9, 
    neighborhood: "Kilimani", 
    amenities: ["wifi", "pool", "gym", "kitchen"] 
  },
  { 
    name: "Budget Room Eastleigh", 
    price: 1500, 
    rating: 4.2, 
    neighborhood: "Eastleigh", 
    amenities: ["wifi"] 
  },
  { 
    name: "Luxury Penthouse Kilimani", 
    price: 15000, 
    rating: 4.7, 
    neighborhood: "Kilimani", 
    amenities: ["wifi", "pool", "gym", "kitchen", "parking", "balcony"] 
  },
  { 
    name: "Garden Cottage Karen", 
    price: 8000, 
    rating: 4.6, 
    neighborhood: "Karen", 
    amenities: ["wifi", "kitchen", "garden", "parking"] 
  },
  { 
    name: "Artist Loft Westlands", 
    price: 4500, 
    rating: 4.5, 
    neighborhood: "Westlands", 
    amenities: ["wifi", "kitchen"] 
  },
  { 
    name: "Family Home Karen", 
    price: 12000, 
    rating: 4.9, 
    neighborhood: "Karen", 
    amenities: ["wifi", "kitchen", "garden", "parking", "pool"] 
  },
  { 
    name: "Studio Near CBD", 
    price: 2000, 
    rating: 3.9, 
    neighborhood: "CBD", 
    amenities: ["wifi"] 
  },
  { 
    name: "Riverside Apartment", 
    price: 5500, 
    rating: 4.4, 
    neighborhood: "Westlands", 
    amenities: ["wifi", "kitchen", "gym"] 
  },
  { 
    name: "Backpacker Hostel Westlands", 
    price: 800, 
    rating: 4.1, 
    neighborhood: "Westlands", 
    amenities: ["wifi"] 
  }
];


// MAIN FUNCTION: findTopListings

function findTopListings(listings, neighborhood, maxPrice) {
    // Filter by neighborhood and price, sort by rating, take top 5, format
    const results = listings
        .filter(listing => listing.neighborhood === neighborhood)
        .filter(listing => listing.price <= maxPrice)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5)
        .map(listing => {
            const amenitiesStr = listing.amenities.join(', ');
            const formattedPrice = listing.price.toLocaleString('en-KE');
            return `⭐ ${listing.rating} — ${listing.name} (KES ${formattedPrice}/night) — ${amenitiesStr}`;
        });
    
    return results;
}

console.log('✅ Pipeline data loaded successfully!');
console.log(`📊 Total listings: ${listings.length}`);
console.log('='.repeat(60));

console.log('\n========== TASK 2: Data Processing Pipeline ==========\n');

// Test 1: Westlands under 5000
console.log('--- Test 1: Top listings in Westlands under KES 5,000 ---');
const westlandsResults = findTopListings(listings, "Westlands", 5000);
console.log(`\nTop listings in Westlands under KES 5,000:`);
westlandsResults.forEach((result, index) => {
    console.log(`${index + 1}. ${result}`);
});

console.log('\n' + '-'.repeat(60) + '\n');

// Test 2: Kilimani under 10000
console.log('--- Test 2: Top listings in Kilimani under KES 10,000 ---');
const kilimaniResults = findTopListings(listings, "Kilimani", 10000);
console.log(`\nTop listings in Kilimani under KES 10,000:`);
kilimaniResults.forEach((result, index) => {
    console.log(`${index + 1}. ${result}`);
});

console.log('\n' + '-'.repeat(60) + '\n');


// ADDITIONAL TESTS FOR DEMONSTRATION

console.log('--- Additional Tests ---\n');

// Test 3: Karen under 10000
console.log('Test 3: Karen under KES 10,000');
const karenResults = findTopListings(listings, "Karen", 10000);
if (karenResults.length === 0) {
    console.log('No listings found in Karen under KES 10,000');
} else {
    karenResults.forEach((result, index) => {
        console.log(`${index + 1}. ${result}`);
    });
}

console.log('\n' + '-'.repeat(60) + '\n');

// Test 4: Eastleigh under 2000
console.log('Test 4: Eastleigh under KES 2,000');
const eastleighResults = findTopListings(listings, "Eastleigh", 2000);
if (eastleighResults.length === 0) {
    console.log('No listings found in Eastleigh under KES 2,000');
} else {
    eastleighResults.forEach((result, index) => {
        console.log(`${index + 1}. ${result}`);
    });
}

console.log('\n' + '-'.repeat(60) + '\n');

// Test 5: Westlands under 10000 (more results)
console.log('Test 5: Westlands under KES 10,000');
const westlandsAll = findTopListings(listings, "Westlands", 10000);
console.log(`Found ${westlandsAll.length} listings in Westlands under KES 10,000`);
westlandsAll.forEach((result, index) => {
    console.log(`${index + 1}. ${result}`);
});

console.log('\n' + '='.repeat(60));
console.log('✅ Data processing complete!');
console.log('='.repeat(60));