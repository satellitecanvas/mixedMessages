const generateRandomNumber = (array) => {
    return Math.floor(Math.random() * array)
};

let personArray = ['Frisbee', 'Lilac', 'Dan', 'CerealHound64', 'Timothee', 'Aurora'];
let verbArray = ['kicked', 'placed', 'ate', 'delivered', 'mailed', 'hit'];
let locationArray = ['London', 'New York', 'Los Angeles', 'Toronto', 'Tokyo', 'Stockholm'];
let timeArray = ['9:30AM', '10:30AM', '1:01PM', '3:06PM', '4:00PM', '2:27AM'];

const generateMixed = () => {
    let person = personArray[Math.floor(Math.random() * personArray.length)];
    let verb = verbArray[Math.floor(Math.random() * verbArray.length)];
    let location = locationArray[Math.floor(Math.random() * locationArray.length)];
    let time = timeArray[Math.floor(Math.random() * timeArray.length)];
    let fullString = `${person} ${verb} in ${location} at ${time}`;
    console.log(`This happened: ${fullString}` + `!`);
    }
generateMixed();