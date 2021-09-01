const socket = io();


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


function generateName(){
    var namesList = ["Autumn", "Hidden", "Bitter", "Misty", "Silent", "Empty", "Dry", "Dark", "Summer", "Icy",
		"Delicate", "Quiet", "White", "Cool", "Spring", "Winter", "Patient", "Twilight", "Dawn", "Crimson", "Wispy", "Weathered", "Blue", "Billowing", "Broken", "Cold", "Damp", "Falling",
		"Frosty", "Green", "Long", "Late", "Lingering", "Bold", "Little", "Morning", "Muddy", "Old",
		"Red", "Rough", "Still", "Small", "Sparkling", "Wandering", "Withered", "Wild", "Black",
		"Young", "Holy", "Solitary", "Fragrant", "Aged", "Snowy", "Proud", "Floral", "Restless",
		"Divine", "Polished", "Ancient", "Purple", "Lively", "Nameless", "greenpepper","timon", "Waterfall", "River", "Breeze", "Moon", "Rain", "Wind", "Sea", "Morning", "Snow", "Lake",
        "Sunset", "Pine", "Shadow", "Leaf", "Dawn", "Glitter", "Forest", "Hill", "Cloud", "Meadow",
        "Sun", "Glade", "Bird", "Brook", "Butterfly", "Bush", "Dew", "Dust", "Field", "Fire",
        "Flower", "Firefly", "Feather", "Grass", "Haze", "Mountain", "Night", "Pond", "Darkness",
        "Snowflake", "Silence", "Sound", "Sky", "Shape", "Surf", "Thunder", "Violet", "Water",
        "Wildflower", "Wave", "Water", "Resonance", "Sun", "Wood", "Dream", "Cherry", "Tree", "Fog",
        "Frost", "Voice", "Paper", "Frog", "Smoke", "Star","mir","aries", "Death", "Fantasy", "Hellow2", "Blood", "Grief", "unicorn666"]

    return  namesList[getRandomInt(0, namesList.length - 1)];
}

function updateUserList(data) {
    console.log(data)
}

let playerName = generateName();
console.log(playerName)
socket.emit('name', playerName);


socket.on('userJoined', data => {
    updateUserList(data);
});
