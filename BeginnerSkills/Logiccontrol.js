if (true) {
//   console.log('This is true')

}

if (false) {
    console.log('This is false')
}

const aim = 'Build PhotoHive';
const duration = 'First six months 2024';

if (aim < duration ) {
    console.log('You are on the right track')
}else {
    console.log('Unaenda wapi')
}


// const date = new Date(10, 27, 2023, 14, 0, 0);
// const hour = date.getHours();
// 
// if (hour < 12){
    // console.log('Good Morning');
// 
// if (hour === 5) {
//    console.log('Wake up For fajr')
// }
// }else if (hour < 18){
    // console.log('Good Afternoon')
// }
// else{
    // console.log('Good Night')
// 
// if (hour >= 21) {
//    console.log('Time to sleep')
// }
// }
// 
// if (hour >= 8 && hour < 19) {
//    console.log('Work to achieve your goals')
// }
// 
// if (hour === 6 || hour === 21){
    // console.log('Listen To Quran')
// }


const date = new Date(11, 28, 2023, 4, 0, 0);

const month = date.getMonth();
const day = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'sunday'][date.getDay()]


switch (month) {
    case 1:
        console.log('It is the first month');
        break;
    case 2:
        console.log('The valentine month');
        break;
    case 3:
        console.log('Focusing on the year');
        break;
    case 4:
        console.log('The rainny Season');
        break;
    default:
        console.log('It is not jan, feb, march or April')
}


switch (day) {
    case day === 'monday':
        console.log('First day of the week pray Tahajjud');
        break;
    case day === 'tuesday':
        console.log('Second day of the week do some assignments');
        break;
    case day === 'wednesday':
        console.log('Rest and reflect on your work');
        break;
    default:
        console.log('Weekend and other days relax and talk to people');
}