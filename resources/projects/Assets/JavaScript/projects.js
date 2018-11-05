// Array for button creation
let buttonArray = [
  {
    name: 'bamazon',
    title: 'bamazon',
    text: 'bamazon is a project to demonstrate Node and MySQL skills',
    github: '-',
    link: 'https://github.com/xryswelter/bamazon',
    image: './resources/projects/Assets/Images/commercial-amazon.jpg',
    value: '0'
  },
  {
    name: 'Gems of Fate',
    title: 'gems',
    text:
      'Gems of Fate is a game application to demonstrate my html, css, and JQuery skills',
    link: 'https://xryswelter.github.io/gems-of-fate/',
    github: 'https://github.com/xryswelter/gems-of-fate',
    image: './resources/projects/Assets/Images/Citrine-November.png',
    value: '1'
  },
  {
    name: 'Train Game',
    title: 'train',
    text:
      'This webpage was created to demonstrate my skill with API keys using Firebase as a database to create a simulation of a train schedule.',
    link: 'https://xryswelter.github.io/TrainGame/',
    github: 'https://github.com/xryswelter/TrainGame',
    image: './resources/projects/Assets/Images/train.png',
    value: '2'
  },
  {
    name: 'Trivia Game',
    title: 'trivia',
    text:
      'This is a webpage to demonstrate my use of jQuery and the use of the display/hide functionality of CSS using jQuery and html/css.',
    link: 'https://xryswelter.github.io/Trivia-Game/',
    github: 'https://github.com/xryswelter/Trivia-Game',
    image: './resources/projects/Assets/Images/Trivia.png',
    value: '3'
  },
  {
    name: 'Giphy',
    title: 'giphy',
    text:
      'This app is to demonstrate the use of API Keys in conjuction with creating images that have multiple states dependent on the JSON return value.',
    link: 'https://xryswelter.github.io/GIPHY-project/',
    github: 'https://github.com/xryswelter/GIPHY-project',
    image: './resources/projects/Assets/Images/giffy.jpg',
    value: '4'
  },
  {
    name: 'Music Venue Search',
    title: 'project1',
    text:
      'This is a music venue search that will display upcoming music venue locations, names, tickets, and maps for a specific artist or band.',
    link: 'https://christiehennes.github.io./Project1/',
    github: 'https://github.com/christiehennes/Project1',
    image: './resources/projects/Assets/Images/project1.jpg',
    value: '5'
  },
  {
    name: 'Spielkatalog',
    title: 'project2',
    text:
      'Spielkatalog is a simple, modern tool to help track and organize your video game collection.',
    link: 'http://spielkatalog.herokuapp.com/',
    github: 'https://github.com/xryswelter/Spielkatalog',
    image: './resources/projects/Assets/Images/spielkatalog.PNG',
    value: '6'
  },
  {
    name: 'CPR_finalproject',
    title: 'project3',
    text:
      'An application that was designed to help those wishing to get a CPR certification by providing the online CPR test.',
    link: 'https://secret-wave-42323.herokuapp.com',
    github: 'https://github.com/kkirker/CPR_finalproject',
    image: './resources/projects/Assets/Images/cpr.jpg',
    value: '7'
  }
];
//Function to load buttons onto screen
function loadbuttons() {
  buttonArray.forEach(element => {
    //Create Card
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('style', 'width: 18rem;');
    //Create Imaged Button
    let button = document.createElement('BUTTON');
    let span = document.createElement('SPAN');
    let title = document.createElement('button');
    button.classList.add(`${element.title}`);
    button.setAttribute('id', 'button');
    button.setAttribute('value', `${element.value}`);
    button.setAttribute('style', `background-image: url('${element.image}')`);
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#exampleModal');
    // button.addEventListener('click',display(event))
    // button.append(span)
    // Create Title
    title.setAttribute('id', 'titles');
    title.classList.add('mt-3', 'btn', 'btn-primary');
    title.setAttribute('style','margin: auto');
    title.setAttribute('data-toggle', 'modal');
    title.setAttribute('value', `${element.value}`);
    title.setAttribute('data-target', '#exampleModal');
    span.innerHTML = `${element.name}`;
    span.setAttribute('id', 'span');
    title.append(span)

    card.append(button);
    card.append(title)
    if (element.value < 5) {
      $('.homeworks').append(card);
    } else {
      $('.projects').append(card);
    }
  });
}
// Document onload function
$(document).ready(function() {
  loadbuttons();
});
// Click Event to display information below buttons
$('.container').on('click', 'button', function() {
  let value = $(this).val();
  display(value);
});
// Displaying function
function display(value) {
  let buttonEvent = buttonArray[value];
  $('.title').text(`${buttonEvent.name}`);
  $('.text').text(`${buttonEvent.text}`);
  let link = $('.link');
  link.attr('href', `${buttonEvent.link}`).attr('target', '_blank');
  let git = $('.github');
  git.attr('href', `${buttonEvent.github}`).attr('target', '_blank');
}
