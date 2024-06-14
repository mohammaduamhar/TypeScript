// let numbers = [1, 2, 3, 4, 5]

// let user: [number , string] =[1,'amhar'];
// user.push(1)

// const small =1;
// const medium =2;
// const large =3;

// const enum size {small = 1, medium, large}

// let mySize = size.large;
// console.log(mySize);

// function taxCal(amount : number, year = 2022): number {
//     if (year < 2023)
//         return amount * 0.1;
//     return amount*0.3
// }

// taxCal(20_000,2024)

// let employee: {
//     readonly id: number,
//     name: string,
//     retire:(data:Date) => void
// } = {id:2024,name:
//     'amhar',
//     retire(data:Date){
//         console.log(data)
//     }
// }

type employee = {
    readonly id: number,
    name: string,
    retire:(data:Date) => void
}

let employee: employee = {id:2024,name:
    'amhar',
    retire(data:Date){
        console.log(data)
    }
}