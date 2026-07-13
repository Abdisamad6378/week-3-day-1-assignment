// TASK 3: ERROR-RESILIENT DATA FETCHER


// HELPER: delay function

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// MAIN FUNCTION: resilientFetch

async function resilientFetch(url, maxAttempts = 3, delayMs = 1000) {
    let lastError = null;
    
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            console.log(`Attempt ${attempt} of ${maxAttempts} for ${url}...`);
            
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log(`✅ Success:`, data);
            return data;
            
        } catch (error) {
            lastError = error;
            console.log(`❌ Attempt ${attempt} failed: ${error.message}`);
            
            if (attempt < maxAttempts) {
                console.log(`⏳ Retrying in ${delayMs}ms...`);
                await delay(delayMs);
            }
        }
    }
    
    // All attempts failed
    const errorResult = {
        success: false,
        error: `Failed after ${maxAttempts} attempts`,
        url: url,
        attempts: maxAttempts
    };
    
    console.log(`❌ Final failure:`, errorResult);
    return errorResult;
}

console.log('✅ Fetcher module loaded successfully!');
console.log('='.repeat(60));

// TESTING

console.log('\n========== TASK 3: Error-Resilient Data Fetcher ==========\n');

// Test 1: Valid URL

async function testValidUrl() {
    console.log('--- Test 1: Valid URL ---\n');
    
    console.log('Testing valid URL...\n');
    const result = await resilientFetch(
        'https://jsonplaceholder.typicode.com/posts/1',
        3,
        1000
    );
    
    if (result.success !== false) {
        console.log('\n✅ Successfully fetched data!');
        console.log(`📝 Title: ${result.title}`);
        console.log(`📝 Body: ${result.body.substring(0, 50)}...`);
        console.log(`📝 User ID: ${result.userId}`);
    }
    console.log('\n' + '-'.repeat(60) + '\n');
}

// Test 2: Invalid URL (404),

async function testInvalidUrl() {
    console.log('--- Test 2: Invalid URL (404) ---\n');
    
    console.log('Testing invalid URL...\n');
    const result = await resilientFetch(
        'https://jsonplaceholder.typicode.com/invalid-endpoint-that-404s',
        3,
        1000
    );
    
    if (result.success === false) {
        console.log('\n❌ Expected failure occurred:');
        console.log(`📝 Error: ${result.error}`);
        console.log(`📝 URL: ${result.url}`);
        console.log(`📝 Attempts: ${result.attempts}`);
    }
    console.log('\n' + '-'.repeat(60) + '\n');
}

// Test 3: Non-existent domain

async function testNonExistentDomain() {
    console.log('--- Test 3: Non-existent Domain ---\n');
    
    console.log('Testing non-existent domain...\n');
    const result = await resilientFetch(
        'https://this-domain-does-not-exist-12345.com/api/data',
        2,
        500
    );
    
    if (result.success === false) {
        console.log('\n❌ Expected failure occurred:');
        console.log(`📝 Error: ${result.error}`);
        console.log(`📝 URL: ${result.url}`);
    }
    console.log('\n' + '-'.repeat(60) + '\n');
}

// Run all tests

async function runTests() {
    try {
        await testValidUrl();
        await testInvalidUrl();
        await testNonExistentDomain();
        
        console.log('='.repeat(60));
        console.log('✅ All tests complete!');
        console.log('='.repeat(60));
    } catch (error) {
        console.error('Test runner error:', error);
    }
}

// Execute tests
runTests();