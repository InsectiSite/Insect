let availableKeywords = [
    'Ant',
    'Caterpillar',
    'Cockroach',
    'Lice',

    'Short-Horned Grasshopper',
    'American Bird Grasshopper',
    'Red-Legged Grasshopper',
    'Migratory Locust',

    'Bee',
    'Beetles',
    'Butterfly',
    'Ladybug',
    'Dragonfly',
   
    'Mosquito',
    'Kissing Bug',
    'Tick',
    
   
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
          return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<a href='"+list+"_desc.html'><li onclick=selectInput(this)>" + list + "</li></a>";
    });
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}