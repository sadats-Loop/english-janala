// 1. Fetch Lessons
const loadLeassons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(json => displayLessons(json.data));
};

// 2. Fetch and Show Modal Details matching your exact layout
window.loadWordDetail = async (id) => {
    const url = `https://openapi.programming-hero.com/api/word/${id}`;
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        const wordData = data.data;

        const detailsContainer = document.getElementById("details-container");
        
        // Handle Synonyms Tags
        let synonymsHtml = '';
        if (wordData.synonyms && Array.isArray(wordData.synonyms) && wordData.synonyms.length > 0) {
            synonymsHtml = wordData.synonyms.map(syn => 
                `<span class="bg-[#f0f6ff] text-gray-800 px-4 py-2 rounded-md border border-blue-100 text-sm">${syn}</span>`
            ).join('');
        } else {
            synonymsHtml = `<span class="text-gray-500 text-sm">No synonyms available.</span>`;
        }

        // Inject the styled card layout
        detailsContainer.innerHTML = `
            <div class="border border-gray-100 shadow-sm rounded-xl p-6 bg-white mb-6">
                
                <!-- Title & Pronunciation -->
                <h2 class="text-3xl font-bold text-black mb-6 flex items-center gap-2">
                    ${wordData.word} 
                    <span class="text-2xl font-semibold font-bangla text-black">
                        (<i class="fa-solid fa-volume-low text-xl"></i> :${wordData.pronunciation})
                    </span>
                </h2>
                
                <!-- Meaning -->
                <div class="mb-6">
                    <h3 class="text-lg font-bold text-black mb-2">Meaning</h3>
                    <p class="text-gray-800 font-bangla text-[17px]">${wordData.meaning}</p>
                </div>
                
                <!-- Example -->
                <div class="mb-6">
                    <h3 class="text-lg font-bold text-black mb-2">Example</h3>
                    <p class="text-gray-700 text-[17px]">${wordData.example || 'No example provided.'}</p>
                </div>
                
                <!-- Synonyms -->
                <div>
                    <h3 class="text-lg font-bold text-black font-bangla mb-3">সমার্থক শব্দ গুলো</h3>
                    <div class="flex flex-wrap gap-3">
                        ${synonymsHtml}
                    </div>
                </div>

            </div>
            
            <!-- Complete Learning Button (Closes modal via dialog method) -->
            <form method="dialog" class="w-full">
                <button class="btn bg-[#4f34cf] hover:bg-[#3b23a8] text-white font-medium text-[16px] px-6 w-auto border-none rounded-lg cursor-pointer">
                    Complete Learning
                </button>
            </form>
        `;
        
        // Open the modal
        word_modal.showModal();
        
    } catch (error) {
        console.error("Failed to load word details:", error);
    }
};

// 3. Display the Lessons and Words
const displayLessons = (lessons) => {

    // Load Level Words
    const loadLevelWord = (id) => {
        const url = `https://openapi.programming-hero.com/api/level/${id}`;
        fetch(url)
            .then(res => res.json())
            .then((data) => displayLevelWord(data.data));
    };
    window.loadLevelWord = loadLevelWord;

    // Display Level Words
    const displayLevelWord = (words) => {
        const wordContainer = document.getElementById("word-container");
        wordContainer.innerHTML = "";

        if (words.length == 0) {
            wordContainer.innerHTML = `
            <div class="user-command text-center col-span-full py-10 space-y-3 font-bangla">
                <img class="mx-auto" src="./assets/alert-error.png" alt="alert">
                <p class="text-xl font-medium text-gray-500 rounded-xl">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <h2 class="text-4xl font-bold rounded-xl">নেক্সট Lesson এ যান</h2>
            </div>`;
            return;
        }

        words.forEach(word => {
            const card = document.createElement("div");
            card.innerHTML = `
                <div class="bg-white text-center rounded-2xl shadow-sm py-8 px-5 space-y-4">
                    <h2 class="font-bold text-2xl">${word.word ? word.word : "শব্দ পাওয়া যাইনি"}</h2>
                    <p class="font-semibold">meaning / pronounciation</p>
                    <div class="font-bangla font-medium">
                        ${word.meaning ? word.meaning : "শব্দ পাওয়া যাইনি"} / ${word.pronunciation ? word.pronunciation : "শব্দ পাওয়া যাইনি"}
                    </div>
                    <div class="flex justify-between items-center mt-4">
                        <button class="btn bg-[#1a91ff10] hover:bg-[#1a91ff70] cursor-pointer" onclick="loadWordDetail('${word.id}')">
                            <i class="fa-solid fa-circle-info"></i>
                        </button>
                        <button class="btn bg-[#1a91ff10] hover:bg-[#1a91ff70] cursor-pointer">
                            <i class="fa-solid fa-volume-low"></i>
                        </button>
                    </div>
                </div>
            `;
            wordContainer.append(card);
        });
    };

    // Get the container and empty it
    const levelConatiner = document.getElementById("level-container");
    levelConatiner.innerHTML = "";

    // Generate Lesson Buttons
    for (let lesson of lessons) {
        const btnDiv = document.createElement("div");
        
        btnDiv.innerHTML = `
            <button onclick="loadLevelWord('${lesson.level_no}')" class="btn btn-outline btn-primary cursor-pointer">
                <i class="fa-solid fa-book-open"></i> Lsessons-${lesson.level_no} 
            </button>
        `;
        levelConatiner.append(btnDiv);
    }
}

// Initialize the app
loadLeassons();