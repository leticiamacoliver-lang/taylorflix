const albuns = [
  {
    nome: "Taylor Swift",
    musicas: [
      "Tim McGraw", "Picture to Burn", "Teardrops on My Guitar", "A Place in This World",
      "Cold as You", "The Outside", "Tied Together with a Smile", "Stay Beautiful",
      "Should've Said No", "Mary's Song (Oh My My My)", "Our Song"
    ]
  },
  {
    nome: "Fearless",
    musicas: [
      "Fearless", "Fifteen", "Love Story", "Hey Stephen", "White Horse", "You Belong with Me",
      "Breathe", "Tell Me Why", "You're Not Sorry", "The Way I Loved You", "Forever & Always",
      "The Best Day", "Change"
    ]
  },
  {
    nome: "Speak Now",
    musicas: [
      "Mine", "Sparks Fly", "Back to December", "Speak Now", "Dear John", "Mean",
      "The Story of Us", "Never Grow Up", "Enchanted", "Better than Revenge", "Innocent",
      "Haunted", "Last Kiss", "Long Live"
    ]
  },
  {
    nome: "Red",
    musicas: [
      "State of Grace", "Red", "Treacherous", "I Knew You Were Trouble", "All Too Well", "22",
      "I Almost Do", "We Are Never Ever Getting Back Together", "Stay Stay Stay", "The Last Time",
      "Holy Ground", "Sad Beautiful Tragic", "The Lucky One", "Everything Has Changed",
      "Starlight", "Begin Again"
    ]
  },
  {
    nome: "1989",
    musicas: [
      "Welcome to New York", "Blank Space", "Style", "Out of the Woods",
      "All You Had to Do Was Stay", "Shake It Off", "I Wish You Would", "Bad Blood",
      "Wildest Dreams", "How You Get the Girl", "This Love", "I Know Places", "Clean"
    ]
  },
  {
    nome: "Reputation",
    musicas: [
      "...Ready for It?", "End Game", "I Did Something Bad", "Don't Blame Me", "Delicate",
      "Look What You Made Me Do", "So It Goes...", "Gorgeous", "Getaway Car", "King of My Heart",
      "Dancing with Our Hands Tied", "Dress", "This Is Why We Can't Have Nice Things",
      "Call It What You Want", "New Year's Day"
    ]
  },
  {
    nome: "Lover",
    musicas: [
      "I Forgot That You Existed", "Cruel Summer", "Lover", "The Man", "The Archer",
      "I Think He Knows", "Miss Americana & the Heartbreak Prince", "Paper Rings",
      "Cornelia Street", "Death by a Thousand Cuts", "London Boy", "Soon You'll Get Better",
      "False God", "You Need to Calm Down", "Afterglow", "ME!", "It's Nice to Have a Friend",
      "Daylight"
    ]
  },
  {
    nome: "Folklore",
    musicas: [
      "the 1", "cardigan", "the last great american dynasty", "exile", "my tears ricochet",
      "mirrorball", "seven", "august", "this is me trying", "illicit affairs", "invisible string",
      "mad woman", "epiphany", "betty", "peace", "hoax", "the lakes"
    ]
  },
  {
    nome: "Folklore Long Pond",
    musicas: [
      "the 1", "cardigan", "the last great american dynasty", "exile", "my tears ricochet",
      "mirrorball", "seven", "august", "this is me trying", "illicit affairs", "invisible string",
      "mad woman", "epiphany", "betty", "peace", "hoax", "the lakes"
    ]
  },
  {
    nome: "Evermore",
    musicas: [
      "willow", "champagne problems", "gold rush", "'tis the damn season", "tolerate it",
      "no body, no crime", "happiness", "dorothea", "coney island", "ivy", "cowboy like me",
      "long story short", "marjorie", "closure", "evermore", "right where you left me",
      "it's time to go"
    ]
  },
  {
    nome: "Fearless - Taylor's Version",
    musicas: [
      "Fearless", "Fifteen", "Love Story", "Hey Stephen", "White Horse", "You Belong with Me",
      "Breathe", "Tell Me Why", "You're Not Sorry", "The Way I Loved You", "Forever & Always",
      "The Best Day", "Change", "Jump Then Fall", "Untouchable", "Forever & Always (Piano Version)",
      "Come In with the Rain", "Superstar", "The Other Side of the Door", "Today Was a Fairytale",
      "You All Over Me (From the Vault)", "Mr. Perfectly Fine (From the Vault)",
      "We Were Happy (From the Vault)", "That's When (From the Vault)",
      "Don't You (From the Vault)", "Bye Bye Baby (From the Vault)"
    ]
  },
  {
    nome: "Red - Taylor's Version",
    musicas: [
      "State of Grace", "Red", "Treacherous", "I Knew You Were Trouble", "All Too Well", "22",
      "I Almost Do", "We Are Never Ever Getting Back Together", "Stay Stay Stay", "The Last Time",
      "Holy Ground", "Sad Beautiful Tragic", "The Lucky One", "Everything Has Changed",
      "Starlight", "Begin Again", "The Moment I Knew", "Come Back... Be Here", "Girl at Home",
      "State of Grace (Acoustic Version)", "Ronan", "Better Man (From the Vault)",
      "Nothing New (From the Vault)", "Babe (From the Vault)",
      "Message in a Bottle (From the Vault)", "I Bet You Think About Me (From the Vault)",
      "Forever Winter (From the Vault)", "Run (From the Vault)",
      "The Very First Night (From the Vault)", "All Too Well (10 Minute Version)"
    ]
  },
  {
    nome: "Midnights",
    musicas: [
      "Lavender Haze", "Maroon", "Anti-Hero", "Snow on the Beach", "You're on Your Own, Kid",
      "Midnight Rain", "Question...?", "Vigilante Shit", "Bejeweled", "Labyrinth", "Karma",
      "Sweet Nothing", "Mastermind"
    ]
  },
  {
    nome: "Speak Now - Taylor's Version",
    musicas: [
      "Mine", "Sparks Fly", "Back to December", "Speak Now", "Dear John", "Mean",
      "The Story of Us", "Never Grow Up", "Enchanted", "Better than Revenge", "Innocent",
      "Haunted", "Last Kiss", "Long Live", "Ours", "Superman",
      "Electric Touch (From the Vault)", "When Emma Falls in Love (From the Vault)",
      "I Can See You (From the Vault)", "Castles Crumbling (From the Vault)",
      "Foolish One (From the Vault)", "Timeless (From the Vault)"
    ]
  },
  {
    nome: "1989 - Taylor's Version",
    musicas: [
      "Welcome to New York", "Blank Space", "Style", "Out of the Woods",
      "All You Had to Do Was Stay", "Shake It Off", "I Wish You Would", "Bad Blood",
      "Wildest Dreams", "How You Get the Girl", "This Love", "I Know Places", "Clean",
      "Wonderland", "You Are in Love", "New Romantics", "Slut! (From the Vault)",
      "Say Don't Go (From the Vault)", "Now That We Don't Talk (From the Vault)",
      "Suburban Legends (From the Vault)", "Is It Over Now? (From the Vault)"
    ]
  },
  {
    nome: "The Tortured Poets Department",
    musicas: [
      "Fortnight", "The Tortured Poets Department", "My Boy Only Breaks His Favorite Toys",
      "Down Bad", "So Long, London", "But Daddy I Love Him", "Fresh Out the Slammer",
      "Florida!!!", "Guilty as Sin?", "Who's Afraid of Little Old Me?",
      "I Can Fix Him (No Really I Can)", "loml", "I Can Do It With a Broken Heart",
      "The Smallest Man Who Ever Lived", "The Alchemy", "Clara Bow"
    ]
  },
  {
    nome: "The Life of a Showgirl",
    musicas: [
      "The Fate of Ophelia", "Elizabeth Taylor", "Opalite", "Father Figure", "Eldest Daughter",
      "Ruin the Friendship", "Actually Romantic", "Wi$h Li$t", "Wood", "CANCELLED!", "Honey",
      "The Life of a Showgirl"
    ]
  },
  {
    nome: "The Life of a Showgirl - The Encore",
    musicas: [
      "The Fate of Ophelia", "Elizabeth Taylor", "Opalite", "Father Figure", "Eldest Daughter",
      "Ruin the Friendship", "Actually Romantic", "Wi$h Li$t", "Wood", "CANCELLED!", "Honey",
      "The Life of a Showgirl", "Patient Zero", "Cleveland!", "Pink Clouding", "Babylon"
      
    ]
  }
];

const modal = document.querySelector("#modal");
const titulo = document.querySelector("#modal-titulo");
const lista = document.querySelector("#modal-musicas");
const fechar = document.querySelector("#fechar");

function abrirModal(album) {
  titulo.textContent = album.nome;
  lista.innerHTML = "";

  album.musicas.forEach(function (musica) {
    const item = document.createElement("li");
    item.textContent = musica;
    lista.appendChild(item);
  });

  modal.style.display = "block";
}

const cards = document.querySelectorAll(".album");

cards.forEach(function (card, i) {
  card.addEventListener("click", function () {
    abrirModal(albuns[i]);
  });
});

  fechar.addEventListener("click", function () {
  modal.style.display = "none";
});

// Teste: aperte F12 no navegador, abra a aba "Console" e veja se esta mensagem aparece
console.log("O script.js está funcionando!");
