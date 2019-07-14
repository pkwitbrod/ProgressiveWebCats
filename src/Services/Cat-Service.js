import cat1 from '../Assets/cat1.jpg';
import cat2 from '../Assets/cat2.JPG';
import keyboardCat from '../Assets/Keyboard_cat.jpg';

export default class CatService {

    getOnlineCat = () => {
        return { catImage: `http://lorempixel.com/300/200/cats/?${Date.now()}`, catText: "This is an online cat from lorem pixel" }
    }
    

    getOfflineCat = () => {
        const number = this.getRandomNumber();
        return this.offlineData[number];
    }


    getRandomNumber = () => Math.floor(Math.random() * 3) + 1;

    offlineData = {
        1: { catImage: cat1, catText: "Offline Cat from catfancast" },
        2: { catImage: cat2, catText: "Offline Cat from weheartit" },
        3: { catImage: keyboardCat, catText: "Offline Cat Keyboard Cat" }
    }


}
    