(function onLoad() {
  const $menuIconHamburguer = document.getElementById('menu-hamburguer-id')
  const $menuIconClose = document.getElementById('menu-close-id')
  const $menu = document.getElementById('menu-id')
  const $controllers = document.querySelectorAll('#controller-container-id .controller')
  const $crewControllers = document.querySelectorAll('#crew-controllers-id .crew-controller')
  const $destinationTitle = document.getElementById('destination-title-id')
  const $destinationImage = document.getElementById('destination-image-id')
  const $destinationDescription = document.getElementById('destination-text-id')
  const $destinationDistance = document.getElementById('destination-data-distance-id')
  const $destinationTime = document.getElementById('destination-data-time-id')
  const $crewImage = document.getElementById('crew-image-id')
  const $crewRole = document.getElementById('crew-data-role-id')
  const $crewName = document.getElementById('crew-data-name-id')
  const $crewDescription = document.getElementById('crew-data-description-id')
  const $technologyControllers = document.querySelectorAll('#technology-controllers-id .technology-controller')
  const $technologyImage = document.getElementById('technology-image-id')
  const $technologyName = document.getElementById('technology-data-name-id')
  const $technologyDescription = document.getElementById('technology-data-description-id')

  const destinationInfo = [
    {
      "name": "Moon",
      "images": {
        "png": "./assets/destination/image-moon.png",
        "webp": "./assets/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": {
        "png": "./assets/destination/image-mars.png",
        "webp": "./assets/destination/image-mars.webp"
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images": {
        "png": "./assets/destination/image-europa.png",
        "webp": "./assets/destination/image-europa.webp"
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images": {
        "png": "./assets/destination/image-titan.png",
        "webp": "./assets/destination/image-titan.webp"
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
  ]

  const crewInfo = [
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "./assets/crew/image-douglas-hurley.png",
        "webp": "./assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "./assets/crew/image-mark-shuttleworth.png",
        "webp": "./assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": "./assets/crew/image-victor-glover.png",
        "webp": "./assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "./assets/crew/image-anousheh-ansari.png",
        "webp": "./assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ]

  const technologyInfo = [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
        "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": "./assets/technology/image-spaceport-portrait.jpg",
        "landscape": "./assets/technology/image-spaceport-landscape.jpg"
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
        "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]

  const handleMenu = () => {
    $menu.classList.toggle('active')
    $menuIconClose.classList.toggle('active')
  }

  const handleDestinationData = (event) => {
    $controllers.forEach(controller => {
      controller.classList.remove('active')
    })
    event.target.classList.add('active')

    const destination = event.target.getAttribute('destination')
    const data = destinationInfo.find(({ name }) => name === destination)

    $destinationImage.setAttribute('src', data.images.png)
    $destinationImage.setAttribute('alt', data.name)
    $destinationTitle.innerHTML = data.name
    $destinationDescription.innerHTML = data.description
    $destinationDistance.innerHTML = data.distance
    $destinationTime.innerHTML = data.travel
  }

  const handleCrewData = (event) => {
    $crewControllers.forEach(controller => {
      controller.classList.remove('active')
    })
    event.target.classList.add('active')

    const crew = event.target.getAttribute('crew')
    const data = crewInfo.find(({ name }) => name === crew)

    $crewImage.setAttribute('src', data.images.png)
    $crewImage.setAttribute('alt', data.name)
    $crewRole.innerHTML = data.role
    $crewName.innerHTML = data.name
    $crewDescription.innerHTML = data.bio
  }

  const handleTechData = (event) => {
    $technologyControllers.forEach(controller => {
      controller.classList.remove('active')
    })
    event.target.classList.add('active')

    const tech = event.target.getAttribute('tech')
    const data = technologyInfo.find(({ name }) => name === tech)

    $technologyImage.setAttribute('src', data.images.landscape)
    $technologyImage.setAttribute('alt', data.name)
    $technologyName.innerHTML = data.name
    $technologyDescription.innerHTML = data.description
  }

  $technologyControllers.forEach(controller => {
    controller.addEventListener('click', handleTechData)
  })

  $controllers.forEach(controller => {
    controller.addEventListener('click' , handleDestinationData)
  })

  $crewControllers.forEach(controller => {
    controller.addEventListener('click', handleCrewData)
  })

  const addClassCurrent = () => {
    const sections = document.querySelectorAll('section')
    const navLi = document.querySelectorAll('nav ul li')
    let current;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      if (window.pageYOffset >= sectionTop - 60) {
        current = section.getAttribute('id')
      }
    })

    navLi.forEach((li) => {
      li.classList.remove('active')
      if (li.firstChild.getAttribute('href') === `#${current}`) {
        li.classList.add('active')
      }
    })
  }

  window.addEventListener('scroll', addClassCurrent)

  $menuIconHamburguer.addEventListener('click', handleMenu)
  $menuIconClose.addEventListener('click', handleMenu)
})()