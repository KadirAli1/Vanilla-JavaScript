const data = [
    {
        name: 'Kadir Ali',
        age: 26,
        lookingfor: 'fmale',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'William Johnson',
        age: 38,
        gender: 'male',
        lookingfor: 'female',
        location: 'Lynn MA',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
      } 
];

const profiles = profileIterator(data);
nextProfile();
//Next Event 
document.getElementById('next').addEventListener('click',nextProfile);

//Next Profile Display
function nextProfile(){
    const currentProfile = profiles.next().value;
    if(currentProfile !== undefined){
        document.getElementById('profileDisplay').innerHTML = `
        <ul class = "list-group">
            <li class = "list-group-item">Name: ${currentProfile.name} </li>
            <li class = "list-group-item">Age: ${currentProfile.age} </li>
            <li class = "list-group-item">Location: ${currentProfile.location} </li>
            <li class = "list-group-item">Preferences: ${currentProfile.gander} </li>
            <li class = "list-group-item">Looking for: ${currentProfile.lookingfor} </li>
        `;
        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    }
    else{
        //No more prifiles
        window.location.reload();

    }
   
}

//Profile Iterator
function profileIterator(profiles){
 
    let netxInde = 0;

    return {
        next: function(){
            return netxInde < profiles.length ? 
            {value: profiles [netxInde++], done: false} :
            {done: true} 
        }
    };
}