type num = number;

type obj = {
    year: num
}



//interfaces
interface Rectangle {
    height: number,
    width: number
}

let rectangle: Rectangle = {
    height: 10,
    width: 20
}

console.log(rectangle);