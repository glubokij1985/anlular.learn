import { Component } from '@angular/core';

const VALUES = [
    "Hello World",
    "Привет Мир",
    "Привіт Світ",
    "Hola Mundo",
    "Bonjour le monde",
    "Hallo Welt",
    "Ciao mondo",
    "Witaj świecie",
    "Hej världen",
    "Pozdravljen, svet",
    "Прывітанне Сусвет"
];

@Component({
    selector: 'hello-world',
    templateUrl: './hello-world.component.html',
    styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent {
    name = 'Angular';
    values: any = VALUES;
    public lettersAmount: string;
    public flag: boolean = false;
    clickHandler(phrase: string) {
        let lettersNumber: number = phrase.length;
        if (lettersNumber < 12) {
            this.flag = false;
            return this.lettersAmount = `${lettersNumber} is small phrase :(`;
        } else {
            this.flag = true;
            return this.lettersAmount = `${lettersNumber} is big phrase :)`;
        }
    }
}