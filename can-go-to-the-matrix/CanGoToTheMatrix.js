const persons = [ 
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const isAuthorizedAge = (minimumAge,personAge) => personAge >= minimumAge

const makeStringsForWatchTheMovie = (movieName,minimumAge,person) => person.map(
    (person) => isAuthorizedAge(minimumAge,person.age)? `${person.name} can go to ${movieName}`:`${person.name} is under age`
)

makeStringsForWatchTheMovie("The Matrix",18,persons)
