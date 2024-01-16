/*
    Algorythm:
        Összegzés
        Számolás
        Max
        Min
        Eldöntés
        Sorbarendezés
        Kiválasztás
        Keresés
        Megszámlálás

*/

const users = [
    {
        id: 1,
        name: 'John Doe',
        age: 16
    },
    {
        id: 2,
        name: 'Jane Doe',
        age: 18
    },
    {
        id: 3,
        name: 'John Smith',
        age: 25
    },
    {
        id: 4,
        name: 'Jane Smith',
        age: 30
    }
];

temp_10_list = users.filter((user) => user.name.length > 10);
temp_18_list = users.filter((user) => user.age > 18);

users.sort((a, b) => a.age - b.age);

console.log(temp_10_list);


const osszeletkor = users.reduce((acc, user) => acc + user.age, 0);

console.log(osszeletkor);