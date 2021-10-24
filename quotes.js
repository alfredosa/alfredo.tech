let arr = [
    '<em>To live is to suffer, to survive is to find some meaning in the suffering. </em> -  Friedrich Nietzsche',
    '<em>That which does not kill us makes us stronger. </em> -  Friedrich Nietzsche',
    "<em>I'm not upset that you lied to me, I'm upset that from now on I can't believe you </em> -  Friedrich Nietzsche",
    "<em>And those who were seen dancing were thought to be insane by those who could not hear the music. </em> -  Friedrich Nietzsche",
    "<em>It is hard enough to remember my opinions, without also remembering my reasons for them! </em> -  Friedrich Nietzsche",
    "<em>Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you. </em> -  Friedrich Nietzsche",
    "<em>There is always some madness in love. But there is also always some reason in madness. </em> -  Friedrich Nietzsche",
    "<em>You must have chaos within you to give birth to a dancing star. </em> -  Friedrich Nietzsche",
    "<em>You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist. </em> -  Friedrich Nietzsche",
    "<em>Sometimes people don't want to hear the truth because they don't want their illusions destroyed. </em> -  Friedrich Nietzsche",
    "<em>In heaven, all the interesting people are missing. </em> -  Friedrich Nietzsche",
    "<em>He who has a why to live for can bear almost any how. </em> -  Friedrich Nietzsche",
    "<em>There are no facts, only interpretations. </em> -  Friedrich Nietzsche",
    "<em>The man of knowledge must be able not only to love his enemies but also to hate his friends. </em> -  Friedrich Nietzsche",
    "<em>The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself. </em> -  Friedrich Nietzsche",
    "<em>We should consider every day lost on which we have not danced at least once. </em> -  Friedrich Nietzsche",
    "<em>When we are tired, we are attacked by ideas we conquered long ago. </em> -  Friedrich Nietzsche",
    "<em>I cannot believe in a God who wants to be praised all the time. </em> -  Friedrich Nietzsche",
    "<em>The snake which cannot cast its skin has to die. As well the minds which are prevented from changing their opinions; they cease to be mind. </em> -  Friedrich Nietzsche",
    "<em>Education is a system of imposed ignorance.</em> -  Noam Chomsky",
    "<em>If we don't believe in freedom of expression for people we despise, we don't believe in it at all.</em> -  Noam Chomsky",
    "<em>If there is no God, everything is permitted.</em> -  Fyodor Dostoevski",
    "<em>To live without Hope is to Cease to live.</em> -  Fyodor Dostoevski",
    "<em>The struggle itself towards the heights is enough to fill a man's heart. One must imagine Sisyphus happy.em> -  Albert Camus",
    "<em>In the depth of winter, I finally learned that within me there lay an invincible summer.</em> -  Albert Camus",
    "<em>The Third World is not a reality but an ideology.</em> -  Hannah Arendt",
    "<em>Forgiveness is the key to action and freedom.</em> -  Hannah Arendt",
    "<em>A lie told often enough becomes the truth.</em> -  Vladimir Lenin",
    "<em>When there is state there can be no freedom, but when there is freedom there will be no state.</em> -  Vladimir Lenin"
    
]

function newQuote() {
    let randomNumber = Math.floor(Math.random()*(arr.length))
    let randomQuote = arr[randomNumber]
    document.getElementById('quoteDisplay').innerHTML = randomQuote
}

setInterval(newQuote, 5000);


