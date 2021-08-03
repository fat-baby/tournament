

var firebaseConfig = {
  apiKey: "AIzaSyCBJd6GbWVde-zNYDAsRj_gxYVhuU8p4Ic",
  authDomain: "fatbaby-tournament.firebaseapp.com",
  projectId: "fatbaby-tournament",
  storageBucket: "fatbaby-tournament.appspot.com",
  messagingSenderId: "977414828347",
  appId: "1:977414828347:web:2e0ba9cdecb8cc6ef9871e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
const ref = db.collection('teams').doc("teams");


// TIMER

const zeroPad = (s, i) => {
  return String(s).padStart(i, '0');
}

// Set the date we're counting down to
var countDownDate = new Date("Aug 3, 2021 11:15:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = + zeroPad(hours + days*24, 2) + ":"
  + zeroPad(minutes, 2) + ":" + zeroPad(seconds, 2);
  
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "BATTLE OVER";
  }
}, 1000);



// VERSUS


const data = {
  team1: {
    name: "THE PROPHETS",
    title: "Our prediction is your defeat",
    description: "The crystal poke ball reveals all, so give up now or you’re bound to fall.",
    color: "#34c92a",
    video: "https://storage.opensea.io/files/94e382bc35a934fe72506f3cdd5f23fb.mp4",
    links: [
      { text: "Noisy", url: "https://twitter.com/noisynfts"},
      { text: "Crucifore", url: "https://twitter.com/crucifore"},
      { text: "Kingbob", url: "https://twitter.com/thehordekingbob"},
      { text: "Dweaver", url: "https://twitter.com/DWeaver803"},
    ],
    votes: 1, 
  },
  team2: {
    name: "CGSA",
    title: "可愛い天使は鋭い牙と爪がある!",
    description: "The finest experts from all over and out of this world have gathered in the CGSA team. They're mission, make NFT great again..",
    video: "https://storage.opensea.io/files/199fc81dccdcde94cd62352b1a445c24.mp4",
    color: "#a9b435",
    links: [
      { text: "Quick Bill", url: "https://twitter.com/Quick_Bill69"},
      { text: "Stray Alien", url: "https://twitter.com/StrayAliens"},
      { text: "Aya", url: "https://twitter.com/crypto_yankiz"},
      { text: "Radio Pill", url: "https://twitter.com/radiopill69"},
    ],
    votes: 1,
  }
}

 

const updateTeams = () => {
  Object.keys(data).forEach(team => {
    document.getElementById(`${team}-name`).innerHTML = data[team].name;
    document.getElementById(`${team}-name`).style.background = data[team].color;
    document.getElementById(`${team}-votes`).style.background = data[team].color;
    document.getElementById(`${team}-title`).style.background = data[team].color;
    document.getElementById(`${team}-title`).innerHTML = data[team].title;
    document.getElementById(`${team}-video`).children[0].setAttribute("src", data[team].video);
    document.getElementById(`${team}-video`).load();
    document.getElementById(`${team}-description`).innerHTML = "<span class='quotes'>\"</span>" + data[team].description + "<span class='quotes'>\"</span>";
    data[team].links.forEach((member, index) => {
      document.getElementById(`${team}-member${index+1}`).innerHTML = data[team].links[index].text;
      document.getElementById(`${team}-member${index+1}`).setAttribute("href", data[team].links[index].url); 
    })
  })
};

const updateVotes = () => {
  ref.get().then((doc) => {
    data.team1.votes = parseInt(doc.data().team1.votes);
    data.team2.votes = parseInt(doc.data().team2.votes);

    const total = data.team1.votes + data.team2.votes;
    Object.entries(data).forEach(entries => {
      [ teamName, team ] = entries;
      const percentage = 100 / total * team.votes;
      document.getElementById(`${teamName}-votes`).style.width = `calc(${percentage.toFixed(0)}% - 3px)`;
      document.getElementById(`${teamName}-votes`).innerHTML = `${percentage.toFixed(1)}%`;
    });

    setInterval(updateVotes, 300000);
  })
  

    
};

const init = () => {
  updateTeams();
  updateVotes();
}


