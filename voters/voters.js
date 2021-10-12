const voters = [ 
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false} 
]

const YOUNG = {startAge: 18,endAge: 25}
const MID = {startAge: 26,endAge: 35}
const OLD = {startAge: 36,endAge: 55}

const ageHandler = {YOUNG,MID,OLD}

const counters = {
    votersCount: 0,
    peopleCount: 0
}

const metricModel = 
    Object.keys(ageHandler).reduce(
        (acc, type) => ({ ...acc,[type]: counters})
        ,{}
    )

const handle = age => (metricModel,voter) => ({
    ...metricModel,
    [age]: {
        votersCount: voter.voted
            ? metricModel[age].votersCount + 1
            : metricModel[age].votersCount,
        peopleCount: metricModel[age].peopleCount + 1,
    }
})
  
const voterAgeRange = (voter,startAge, endAge) => {
    return voter.age >= startAge && voter.age <= endAge
} 

voters.reduce(
    (totals,voter) => {

        for (const type in ageHandler){
            const {startAge, endAge} = ageHandler[type]

            if (voterAgeRange(voter, startAge, endAge)){
                return handle(type)(totals,voter)
            }
        }
    },
    metricModel
)