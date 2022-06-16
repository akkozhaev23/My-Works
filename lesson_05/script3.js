// class Visitor {
//     constructor(n, a, c) {
//         this.name = n;
//         this.age = a;
//         this.orgs = c;
//     }
//     cancel() {
//         console.log(`${this.name} lyuboy text`)
//     }

//     get orgNames() {
//         return this.orgs.map((e, index) => e).join(', ');
//     }

//     get visitorName() {
//         return `${this.name} мое имя!`
//     }

//     set visitorName(newName) {
//         this.name = newName
//     }

//     get visitorWorkPlaces() {
//         return `${this.name} работал ${this.orgNames}`
//     }
// }

// let visitor2 = new Visitor('Victor', 25, ['Telcom', 'Google', 'Yandex'])
// let visitor4 = new Visitor('Zhas', 32, ['Amazon', 'Aziza', 'Serik'])

// console.log(visitor2.visitorWorkPlaces)
// console.log(visitor4.visitorWorkPlaces)

class User {
    constructor(n, a, o, d, s, g , e, w) {
        this.name = n
        this.age = a
        this.orgs = o
        this.date = d
        this.sleep = s 
        this.gym = g 
        this.eat = e
        this.wash = w 
    }

    info() {
        console.log(`${this.name} ${this.age} ${this.orgs} ${this.date} ${this.sleep} часов спит ${this.gym} часов тренируется ${this.eat} часов ест ${this.wash} часов моется`)
    }

    BDay() {
        let today = new Date(this.date)
        //Можно установить любую дату
        let currenDate = new Date(Date.now())
        //Количество миллисекунд в одном дне
        let msPerDay = 24 * 3600 * 1000 * 41.5;
        //Высчитываем количество дней
        let daysLeft = Math.round((currenDate.getTime() - today.getTime()) / msPerDay);
        let dayname = ''
        let ds = '' + daysLeft
        //Вырезаем последнею цифру
        let dd = parseInt(ds.substr(ds.length - 1))
        //Склоняем слово ДЕНЬ
        if (daysLeft > 4 && daysLeft < 21) dayname =  ' дней'
        else
            if (dd == 1) dayname = ' день'
            else
                if (dd == 2 || dd == 3 || dd == 4) dayname = ' дня'
                else dayname = ' дней'
        //Выводим надпись в документ
        if (daysLeft < 0) { console.log('С днем рождения!!!') }
        else {
            if (daysLeft == 0) { console.log('Завтра день рождения!') } else {
                console.log('До дня рождения осталось ' + daysLeft + dayname + '!')
            }
        }
        return this.date
    }

    Work() {
        console.log(24 - this.sleep - this.gym - this.eat - this.wash)
    }

    
}

let user = new User('Zhasulan', 21, ['Google, Yandex', 'Telcom'], '2000-09-23', 10, 2.5, 2, 1)

user.info()

user.BDay()

user.Work()