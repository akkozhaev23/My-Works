class Cars {
    constructor(n, m, y, s, d) {
        this.name = n
        this.marca = m
        this.year = y
        this.speed = s
        this.distance = d
    }
    info() {
        console.log(`${this.name} производитель, ${this.marca} марка авто, ${this.year} год выпуска, ${this.speed} km средняя скорость, ${this.distance} km дистанция`)
    }

    dist() {
        let a = this.distance / this.speed
        if (a > 4) {
           let b = a / 4
           return (a + b).toFixed(2)
        } else {
            return (a).toFixed(2)
        }
    }
}
let car = new Cars('Germany', 'BMW', 2022, 60, 1200)

car.info()

console.log(car.dist())


class Drob {
    constructor(n, d) {
        this.num = n
        this.denum = d 
    }

    slojenie() {
        let a = this.num / this.denum
        return a
    }

}

let drob = new Drob (1, 2)

let drob2 = new Drob (3, 4)


let b = drob.slojenie() + drob2.slojenie()

let c = drob.slojenie() - drob2.slojenie()

let e = drob.slojenie() * drob2.slojenie()

let f = drob.slojenie() / drob2.slojenie()

console.log(b)
console.log(c)
console.log(e)
console.log(f.toFixed(2))
console.log(drob.slojenie())



class Clock {
    constructor(h, m, s) {
        this.hours = h
        this.minutes = m
        this.seconds = s
    }
    time(time) {
        return this.hours + ':' + this.minutes + ':' + this.seconds
    }
    sec(changes) {
        let cha = this.seconds + changes
        if(cha < 60) {
            return this.hours + ':' + this.minutes + ':' +cha
        }
        else if (cha > 60) {
            let ch1 = this.minutes + 1 

            let ch2 = cha - 60
            return this.hours + ':' + ch1 + ':' + ch2
        }
    }
    min(min) {
        let cha = this.minutes + min
        if(cha < 60) {
            return this.hours + ':' + cha + ':' + this.seconds
        }
        else {
            let ch1 = this.hours + 1

            let ch2 = cha - 60
            return ch1 + ':' + ch2 + ':' + this.seconds
        }
    }
    hou(hou) {
        let cha = this.hours + hou
        return cha + ':' + this.minutes + this.seconds
    }


}

let clock = new Clock (10, 20, 30)

console.log(clock.time())
console.log(clock.sec(15))
console.log(clock.min(17))
console.log(clock.hou(4))