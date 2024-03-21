// console.log('hello')
const loadData = async () => {
    const URL = `https://openapi.programming-hero.com/api/ai/tools`
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data.data.tools);
    const aiHubs = data.data.tools;
    console.log(aiHubs);

    aiHubs.forEach(aiHub => {

       displayAi(aiHub); 
        
    });
    
}
loadData();
const displayAi = (aiHub) => {
    // console.log(aiHub.id)

    const cardContainers = document.getElementById('cardContainers');
    const card = document.createElement('div')
   
    card.innerHTML = ` <div class=" border-2 border-black-50 rounded-lg h-full">

    <div>
        <div class="">
            <img class="p-5 " src="${aiHub?.image}" alt="">
        </div>
    <h2 class="text-3xl px-5 ">Features :</h2>
    <ol class="text-lg px-5 text-gray-600">
        <li>1.${aiHub?.features[0]}</li>
        <li>2.${aiHub?.features[1]}</li>
        <li>3.${aiHub?.features[2]}</li>
    </ol>
    </div>
    <hr class="my-3 mx-4">
    <div class="flex justify-between my-5">
        <div>
        <h2 class="text-5xl px-5">chatgpt</h2>
        <p class="px-5 py-3 text-xl  text-gray-600 "><i class="fa-solid fa-calendar-days fa-fw"></i>${aiHub?.published_in}</p>
    </div>
    <div class=" text-red-600">
        <i class="fa-solid fa-circle-arrow-right fa-fw text-3xl pt-3 me-3"></i>
    </div>
    </div>
    
</div> 
    `
    cardContainers.appendChild(card);
}