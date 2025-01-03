import React, { useState, useEffect } from 'react';
import { HiOutlineLightBulb } from 'react-icons/hi';

const HealthFact = () => {
    // Array of 31 hardcoded health facts
    const healthFacts = [
        "Laughter can help lower blood pressure, improve circulation, and reduce stress. Laughing for just 15 minutes can burn up to 40 calories.",
        "Your body produces a new layer of skin every 28 days to protect against the harsh environment and to promote skin health.",
        "Listening to music can trigger the release of dopamine, which can improve mood and help reduce stress.",
        "Drinking water supports digestion, improves circulation, and helps keep your skin glowing and hydrated.",
        "Regular exercise boosts the immune system and reduces the risk of chronic diseases like diabetes, heart disease, and stroke.",
        "Smiling can lift your mood and even trigger the release of happiness-boosting endorphins.",
        "The human body has about 100,000 miles of blood vessels, enough to wrap around the Earth four times.",
        "Consuming dark chocolate can boost heart health by improving blood flow and reducing bad cholesterol.",
        "Your brain is made up of about 75% water, and staying hydrated helps improve focus, memory, and overall brain function.",
        "Spending time in nature can reduce stress, improve mood, and enhance your ability to focus.",
        "A healthy gut microbiome can influence your mood, immune function, and even your mental health.",
        "Stretching regularly can improve flexibility, reduce muscle stiffness, and lower the risk of injuries.",
        "Drinking green tea is packed with antioxidants that can help reduce inflammation and support heart health.",
        "Taking short breaks throughout the day can improve productivity, focus, and overall mental well-being.",
        "Consuming omega-3 fatty acids from foods like fish can enhance brain function and protect against cognitive decline.",
        "Getting 7-9 hours of sleep every night helps your body repair itself and maintain optimal health.",
        "Chewing gum can help improve memory and focus, as well as reduce stress and anxiety.",
        "Eating a variety of colorful fruits and vegetables ensures you're getting a wide range of nutrients essential for good health.",
        "Taking a quick nap can boost alertness, mood, and mental performance, making it easier to focus for the rest of the day.",
        "Good posture helps prevent back and neck pain, improves breathing, and supports overall well-being.",
        "The body produces collagen, a protein that supports healthy skin, hair, and joints.",
        "Being kind to others not only improves their mood, but it also releases feel-good hormones in your body.",
        "Being outside in sunlight can help boost your vitamin D levels, which is important for bone health.",
        "Drinking lemon water first thing in the morning can aid digestion, help detoxify the body, and boost your immune system.",
        "Regularly consuming probiotic-rich foods like yogurt can improve gut health and support a strong immune system.",
        "Laughing reduces the level of stress hormones in your body and increases the production of feel-good hormones.",
        "Taking deep breaths and practicing mindfulness can help reduce anxiety and promote emotional well-being.",
        "The human body is capable of amazing feats like running long distances and healing itself after injury.",
        "Drinking herbal tea such as chamomile can help with relaxation and improve sleep quality.",
        "Having a strong social network can improve mental well-being and reduce the risk of stress-related illnesses.",
        // "Being well-hydrated can help improve physical performance and prevent fatigue.",
        "Regular handwashing can reduce the spread of illnesses and protect you and others from infections."
    ];

    // Get the current day of the month
    const currentDay = new Date().getDate();  // Returns a number between 1 and 31

    
    const factOfTheDay = healthFacts[currentDay - 1]; 

    
    // Uncomment this block to test with a specific day (for example, day 5)
    // const testDay = 5; // Set a specific day for testing
    // const factOfTheDay = healthFacts[testDay - 1];  // Subtract 1 to account for zero-indexing

    return (
        <div>
          
            {/* <HiOutlineLightBulb size={24} /> */}
            <p>{factOfTheDay}</p>
        </div>
    );
};

export default HealthFact;
