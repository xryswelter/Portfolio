$(document).ready(function() {
  loadbuttons();
});

let buttonArray = [
  {
    name: "bamazon",
    text: "bamazon is a project to demonstrate Node and MySQL skills",
    github: "-",
    link: "https://github.com/xryswelter/bamazon",
    image: "../Images/commercial-amazon.jpg",
    value = 0
  },
  {
    name: "Gems of Fate",
    text: "Gems of Fate is a game application to demonstrate my html, css, and JQuery skills",
    link: "https://xryswelter.github.io/gems-of-fate/",
    github: "https://github.com/xryswelter/gems-of-fate",
    image: "../Images/Citrine-November.png",
    value = 1
  },
  {
    name: "Train Game",
    text: "This webpage was created to demonstrate my skill with API keys using Firebase as a database to create a simulation of a train schedule.",
    link: "https://xryswelter.github.io/TrainGame/",
    github: "https://github.com/xryswelter/TrainGame",
    image: "../Images/train.png",
    value = 2
  },
  {
    name: "Trivia Game",
    text: "This is a webpage to demonstrate my use of jQuery and the use of the display/hide functionality of CSS using jQuery and html/css.",
    link: "https://xryswelter.github.io/Trivia-Game/",
    github: "https://github.com/xryswelter/Trivia-Game",
    image: "../Images/Trivia.png",
    value = 3
  },
  {
    name: "Giphy",
    text: "This app is to demonstrate the use of API Keys in conjuction with creating images that have multiple states dependent on the JSON return value.",
    link: "https://xryswelter.github.io/GIPHY-project/",
    github: "https://github.com/xryswelter/GIPHY-project",
    image: "../Images/giffy.jpg",
    value = 4
  },
  {
    name: "Music Venue Search",
    text: "This is a music venue search that will display upcoming music venue locations, names, tickets, and maps for a specific artist or band.",
    link: "https://christiehennes.github.io./Project1/",
    github: "https://github.com/christiehennes/Project1",
    image: "../Images/project1.jpg",
    value = 5
  },
  {
    name: "Spielkatalog",
    text: "Spielkatalog is a simple, modern tool to help track and organize your video game collection.",
    link: "http://spielkatalog.herokuapp.com/",
    github: "https://github.com/xryswelter/Spielkatalog",
    image: "../Images/spielkatalog.PNG",
    value = 6
  },
  {
    name: "CPR_finalproject",
    text: "An application that was designed to help those wishing to get a CPR certification by providing the online CPR test.",
    link: "https://secret-wave-42323.herokuapp.com",
    github: "https://github.com/kkirker/CPR_finalproject",
    image: "../Images/cpr.jpg",
    value = 7
  }
];

function loadbuttons(){
    buttonArray.forEach(element => {
        let button = document.createElement("BUTTON");
        button.addClass(`${name}`).value(`${value}`);
        button.setAttribute('style', `background-image:${image}`);
        if(value>5){
            $('.homeworks').appendChild(button)
        } else{
            $('.projects').appendChild(button)
        }
    });
}

