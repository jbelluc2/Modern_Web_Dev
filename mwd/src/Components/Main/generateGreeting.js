export function getGreeting(){
    var greetingArray = [
        'Howdy',
        'Hi',
        'Welcome back',
        'Hola',
        'Bonjour',
        'Hey',
        'Yo',
        'Hello',
        "Nice to see you",
        "Looking good",
        "What's up",
        "G'day",
        "What's happening",
        "Hey there",
        "Ahoy",
        "Hiya",
        "Top of the mornin'",
        "What's cracking",
        "'Sup",
        "What's good",
        "Whaddup",
        "Greetings",
        "'Ello",
        "Hello there",
        "Aloha",
        "Que pasa",
        "Ciao",
        "Konnichiwa",
        "Long-time no see",
        "Good to see you",
        "Heyyy"
    ]
    var randomIndex = Math.floor(Math.random() * greetingArray.length); 
    var randomGreeting = greetingArray[randomIndex];
    return randomGreeting;
}