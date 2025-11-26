const horoscopes = [
    "Today you may feel an urge to reorganize furniture for no reason.",
    "A mysterious breeze will remind you of a snack you forgot you had.",
    "Your socks may choose to disappear at critical moments.",
    "Avoid making eye contact with pigeons today. They know too much.",
    "You will accidentally say \'you too\' at the wrong time.",
    "A forgotten USB stick will return to haunt your thoughts.",
    "Your cereal may behave unpredictably this afternoon.",
    "You might meet someone who looks suspiciously like you.",
    "A random YouTube ad will influence one of your life choices.",
    "You may feel emotionally connected to a traffic light today.",
    "Your phone will autocorrect something embarrassing soon.",
    "Beware of chairs that look too comfortable.",
    "You will think about doing exercise, but decide against it.",
    "A dog will judge you silently from a distance.",
    "You may sneeze exactly twice today.",
    "Someone will say \'long time no see,\' even if you saw them yesterday.",
    "You will feel proud for doing the bare minimum.",
    "A vending machine will test your patience.",
    "You might crave a food you don\'t even like.",
    "A random stranger will remind you of a movie you haven\'t seen.",
    "You may experience unexplained confidence before losing it instantly.",
    "Your hair will behave unpredictably.",
    "An item you lost will reappear where you swear you looked already.",
    "You will overthink a message that was meant literally.",
    "A shadow will momentarily confuse you.",
    "Expect mild chaos when opening a bag of snacks.",
    "A mirror will show you a version of yourself you're unsure about.",
    "You may feel betrayed by the weather.",
    "Someone will ask you a question you weren\'t prepared for.",
    "Your plans will change due to a micro-inconvenience."
];

document.getElementById("btn").onclick = () => {
    const random = horoscopes[Math.floor(Math.random() * horoscopes.length)];
    document.getElementById("chosen").innerHTML = `<b>You chose:</b> ${document.getElementById("month").value.replace(/^./, c => c.toUpperCase())}`;
    document.getElementById("result").innerHTML = `<b>Your horoscope:</b> ${random}`;
};