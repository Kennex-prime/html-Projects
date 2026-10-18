
const topics = [
    {
        title: "Introduction to Global Warming",
        content: `
            <p>
                Global warming is the long-term rise in the average
                temperature of the Earth's surface. It is mainly caused
                by human activities that increase greenhouse gases
                in the atmosphere.
            </p>
            <p>
                These gases trap heat and make the planet warmer.
                Global warming affects weather patterns, oceans,
                wildlife and human communities.
            </p>
        `
    },

    {
        title: "Causes of Global Warming",
        content: `
            <p>
                Global warming is mainly driven by activities that
                release greenhouse gases into the atmosphere.
            </p>
            <ul>
                <li><strong>Burning fossil fuels:</strong>
                    Cars, factories and power stations release carbon dioxide.</li>
                <li><strong>Deforestation:</strong>
                    Cutting down trees reduces the amount of carbon
                    dioxide forests can absorb.</li>
                <li><strong>Agriculture:</strong>
                    Livestock and some farming practices release
                    methane and other greenhouse gases.</li>
                <li><strong>Industrial activities:</strong>
                    Manufacturing and certain industrial processes
                    produce greenhouse gas emissions.</li>
            </ul>
        `
    },

    {
        title: "Effects of Global Warming",
        content: `
            <p>
                Rising global temperatures affect the environment
                and the lives of people around the world.
            </p>
            <ul>
                <li>More frequent and intense heatwaves.</li>
                <li>Melting glaciers and rising sea levels.</li>
                <li>Changes in rainfall and water availability.</li>
                <li>Damage to ecosystems and wildlife habitats.</li>
                <li>Risks to food production and human health.</li>
            </ul>
        `
    },

    {
        title: "Global Warming and Climate Change",
        content: `
            <p>
                Global warming and climate change are related,
                but they do not mean exactly the same thing.
            </p>
            <p>
                Global warming refers specifically to the long-term
                increase in Earth's average temperature.
            </p>
            <p>
                Climate change includes global warming and other
                long-term changes, such as changes in rainfall,
                seasons, storms and ocean conditions.
            </p>
        `
    },

    {
        title: "Solutions to Global Warming",
        content: `
            <p>
                Reducing greenhouse gas emissions can help limit
                future global warming. Governments, businesses
                and communities all have important roles to play.
            </p>
            <ul>
                <li>Use more renewable energy, such as solar and wind.</li>
                <li>Improve energy efficiency in homes and industries.</li>
                <li>Protect forests and restore damaged ecosystems.</li>
                <li>Develop cleaner public transportation.</li>
                <li>Reduce methane and other greenhouse gas emissions.</li>
            </ul>
        `
    },

    {
        title: "How You Can Help",
        content: `
            <p>
                Everyone can contribute to protecting the environment.
                Small actions, combined with wider changes, can make
                a meaningful difference.
            </p>
            <ul>
                <li>Switch off lights when they are not needed.</li>
                <li>Walk, cycle or use public transport when practical.</li>
                <li>Reduce waste and reuse useful items.</li>
                <li>Avoid wasting food.</li>
                <li>Plant and care for trees where appropriate.</li>
                <li>Encourage others to learn about climate change.</li>
            </ul>
        `
    }
];

// Find the HTML elements we need
const topicList = document.getElementById("topic-list");
const topicTitle = document.getElementById("topic-title");
const topicContent = document.getElementById("topic-content");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const pageNumber = document.getElementById("page-number");

// Keep track of the current topic
let currentTopic = 0;

// Create the sidebar buttons
topics.forEach((topic, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "topic-button";
    button.textContent = topic.title;

    button.addEventListener("click", () => {
        showTopic(index);
    });

    topicList.appendChild(button);
});

// Display a selected topic
function showTopic(index) {
    currentTopic = index;

    const topic = topics[currentTopic];

    topicTitle.textContent = topic.title;
    topicContent.innerHTML = topic.content;

    pageNumber.textContent =
        `Topic ${currentTopic + 1} of ${topics.length}`;

    // Highlight the active sidebar button
    const buttons = topicList.querySelectorAll(".topic-button");

    buttons.forEach((button, buttonIndex) => {
        button.classList.toggle(
            "active",
            buttonIndex === currentTopic
        );

        button.setAttribute(
            "aria-current",
            buttonIndex === currentTopic ? "page" : "false"
        );
    });

    // Disable buttons at the beginning and end
    previousBtn.disabled = currentTopic === 0;
    nextBtn.disabled = currentTopic === topics.length - 1;
}

// Move to the previous topic
previousBtn.addEventListener("click", () => {
    if (currentTopic > 0) {
        showTopic(currentTopic - 1);
    }
});

// Move to the next topic
nextBtn.addEventListener("click", () => {
    if (currentTopic < topics.length - 1) {
        showTopic(currentTopic + 1);
    }
});

// Show the first topic when the website opens
showTopic(0);
