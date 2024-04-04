const trainRoad = [
    { marginLeft: `0px` },
    { marginLeft: `1000px` },
];

const trainTiming = {
  duration: 3000,
  iterations: 1,
};

const currentItem = document.getElementById("trainImg");

function trainAnimation () {
  currentItem.animate(trainRoad, trainTiming);
};

let p_Item = document.getElementById("paragraph");
let condition = false;

function paragraphChange() {
    if (condition) {
       p_Item.innerHTML = 'Данный параграф имеет исходное значение'; 
       condition = false;
    }
    else {
        p_Item.innerHTML = 'Кнопка нажата, текст изменил свое значение'; 
        condition = true;
    }
    
}

