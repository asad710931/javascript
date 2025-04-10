









const responses = {
    "peace be upon you":"Peace be upon you too!",
    "peace":"Peace be upon you too!",
    "peace ":"Peace be upon you too!",
    "peace be with you":"Peace be with you too!",
    "aslamu alaykum":"waalaykum as-salam!",
    "salam":"waalaykum as-salam!",
    "hello": "Hi there! How can I assist you today?",
    "hi": "Hello! How can I help you?",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "how are u": "I'm just a bot, but I'm doing great! How about you?",
    "how are u?": "I'm just a bot, but I'm doing great! How about you?",
    "how are you?": "I'm just a bot, but I'm doing great! How about you?",
    "whatsup": "I'm just a bot, but I'm doing great! How about you?",
    "whatsup?": "I'm just a bot, but I'm doing great! How about you?",
    "whats up?": "I'm just a bot, but I'm doing great! How about you?",
    "whats up": "I'm just a bot, but I'm doing great! How about you?",
    "good": "cool ! let get into business",
    "ok": "cool ! let get into business",
    "fine": "cool ! let get into business",
    "well": "cool ! let get into business",
    "cool": "cool ! let get into business",
    "what is your name": "I'm a chatbot created to assist you.",
    "your name": "I'm a chatbot created to assist you.",
    "tell me your name": "I'm a chatbot created to assist you.",
    "who are you": "I'm a chatbot created to assist you.",
    "what you do": "I'm a chatbot I assist people in order to help them.",
    "academic":`<a href="http://scholar.google.com">http://scholar.google.com</a>
        <a href="http://books.google.com">http://books.google.com</a>
        <a href="http://academic.research.microsoft.com">http://academic.research</a>
        <a href="http://worldwidescience.org">http://worldwidescience.org</a>
        <a href="http://www.science.gov">http://www.science.gov</a>
        <a href="http://www.refseek.com">http://www.refseek.com</a>
        <a href="http://www.virtuallrc.com">http://www.virtuallrc.com</a>
        <a href="http://education.iseek.com/iseek/homepage">http://education.iseek.com</a>
        <a href="http://www.base-search.net">http://www.base-search.net</a>
        <a href="http://www.infotopia.info">http://www.infotopia.info</a>
        <a href="http://scholar.google.com">http://scholar.google.com</a>
        <a href="http://books.google.com">http://books.google.com</a>
        <a href="http://academic.research.microsoft.com">http://academic.research</a>
        <a href="http://worldwidescience.org">http://worldwidescience.org</a>
        <a href="http://www.science.gov">http://www.science.gov</a>
        <a href="http://www.refseek.com">http://www.refseek.com</a>
        <a href="http://www.virtuallrc.com">http://www.virtuallrc.com</a>
        <a href="http://education.iseek.com/iseek/homepage">http://education.iseek</a>
        <a href="http://www.base-search.net">http://www.base-search.net</a>
        <a href="http://www.infotopia.info">http://www.infotopia.info</a>`,
    "links for academic":`<a href="http://scholar.google.com">http://scholar.google.com</a>
        <a href="http://books.google.com">http://books.google.com</a>
        <a href="http://academic.research.microsoft.com">http://academic.research</a>
        <a href="http://worldwidescience.org">http://worldwidescience.org</a>
        <a href="http://www.science.gov">http://www.science.gov</a>
        <a href="http://www.refseek.com">http://www.refseek.com</a>
        <a href="http://www.virtuallrc.com">http://www.virtuallrc.com</a>
        <a href="http://education.iseek.com/iseek/homepage">http://education.iseek.com</a>
        <a href="http://www.base-search.net">http://www.base-search.net</a>
        <a href="http://www.infotopia.info">http://www.infotopia.info</a>
        <a href="http://scholar.google.com">http://scholar.google.com</a>
        <a href="http://books.google.com">http://books.google.com</a>
        <a href="http://academic.research.microsoft.com">http://academic.research</a>
        <a href="http://worldwidescience.org">http://worldwidescience.org</a>
        <a href="http://www.science.gov">http://www.science.gov</a>
        <a href="http://www.refseek.com">http://www.refseek.com</a>
        <a href="http://www.virtuallrc.com">http://www.virtuallrc.com</a>
        <a href="http://education.iseek.com/iseek/homepage">http://education.iseek</a>
        <a href="http://www.base-search.net">http://www.base-search.net</a>
        <a href="http://www.infotopia.info">http://www.infotopia.info</a>`,
    "academic websites":`<a href="http://scholar.google.com">http://scholar.google.com</a>
        <a href="http://books.google.com">http://books.google.com</a>
        <a href="http://academic.research.microsoft.com">http://academic.research</a>
        <a href="http://worldwidescience.org">http://worldwidescience.org</a>
        <a href="http://www.science.gov">http://www.science.gov</a>
        <a href="http://www.refseek.com">http://www.refseek.com</a>
        <a href="http://www.virtuallrc.com">http://www.virtuallrc.com</a>
        <a href="http://education.iseek.com/iseek/homepage">http://education.iseek.com</a>
        <a href="http://www.base-search.net">http://www.base-search.net</a>
        <a href="http://www.infotopia.info">http://www.infotopia.info</a>
        <a href="http://scholar.google.com">http://scholar.google.com</a>
        <a href="http://books.google.com">http://books.google.com</a>
        <a href="http://academic.research.microsoft.com">http://academic.research</a>
        <a href="http://worldwidescience.org">http://worldwidescience.org</a>
        <a href="http://www.science.gov">http://www.science.gov</a>
        <a href="http://www.refseek.com">http://www.refseek.com</a>
        <a href="http://www.virtuallrc.com">http://www.virtuallrc.com</a>
        <a href="http://education.iseek.com/iseek/homepage">http://education.iseek</a>
        <a href="http://www.base-search.net">http://www.base-search.net</a>
        <a href="http://www.infotopia.info">http://www.infotopia.info</a>`,
    "links for academic websites":`<a href="http://scholar.google.com">http://scholar.google.com</a>
        <a href="http://books.google.com">http://books.google.com</a>
        <a href="http://academic.research.microsoft.com">http://academic.research</a>
        <a href="http://worldwidescience.org">http://worldwidescience.org</a>
        <a href="http://www.science.gov">http://www.science.gov</a>
        <a href="http://www.refseek.com">http://www.refseek.com</a>
        <a href="http://www.virtuallrc.com">http://www.virtuallrc.com</a>
        <a href="http://education.iseek.com/iseek/homepage">http://education.iseek.com</a>
        <a href="http://www.base-search.net">http://www.base-search.net</a>
        <a href="http://www.infotopia.info">http://www.infotopia.info</a>
        <a href="http://scholar.google.com">http://scholar.google.com</a>
        <a href="http://books.google.com">http://books.google.com</a>
        <a href="http://academic.research.microsoft.com">http://academic.research</a>
        <a href="http://worldwidescience.org">http://worldwidescience.org</a>
        <a href="http://www.science.gov">http://www.science.gov</a>
        <a href="http://www.refseek.com">http://www.refseek.com</a>
        <a href="http://www.virtuallrc.com">http://www.virtuallrc.com</a>
        <a href="http://education.iseek.com/iseek/homepage">http://education.iseek</a>
        <a href="http://www.base-search.net">http://www.base-search.net</a>
        <a href="http://www.infotopia.info">http://www.infotopia.info</a>`,
    "important links": "https://google.com.<br/>https://facebook.com<br/>https://x.com<br/>https://youtube.com.<br/>",
    "give some links": "https://google.com.<br/>https://facebook.com<br/>https://x.com<br/>https://youtube.com.<br/>",
    "links": "https://google.com.<br/>https://facebook.com<br/>https://x.com<br/>https://youtube.com.<br/>",
    "help": "Sure, I'm here to help. What do you need assistance with?",

    "bye": "Goodbye! Have a great day!",
    "thank you": "You're welcome! I'm happy to help.",
    "default": "I'm not sure I understand. Could you please rephrase?"
}