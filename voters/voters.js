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

let voterAgeRange = (voters,startAge, endAge) => {
    return voters.age >= startAge && voters.age <= endAge
} 



voters.reduce(
    (totals,voter) => {
        if(voterAgeRange(voter,18,25)){
            return {
                ...totals,
                numYoungPeoples:  totals.numYoungPeoples + 1,
                numYoungVotes:  voter.voted? totals.numYoungVotes + 1 : totals.numYoungVotes,
            }
        } 
        if(voterAgeRange(voter,26,35)){
            return {
                ...totals,
                numMidPeoples:  totals.numMidPeoples + 1,
                numMidVotes:  voter.voted? totals.numMidVotes + 1 : totals.numMidVotes,
            }
        }
        if(voterAgeRange(voter,36,55)){
            return {
                ...totals,
                numOldPeoples:  totals.numOldPeoples + 1,
                numOldVotes:  voter.voted? totals.numOldVotes + 1 : totals.numOldVotes,
            }  
        }
    },
    {
        numYoungVotes: 0,
        numYoungPeoples: 0,
        numMidVotes: 0,
        numMidPeoples: 0,
        numOldVotes: 0,
        numOldPeoples: 0
    }
)