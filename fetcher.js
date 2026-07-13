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