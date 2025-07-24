// initialization the topic
const passingMainTopics=document.querySelector('.headers .topicSuggest');
const receiveMainTopics=document.querySelector('.mainContent .topicSuggest');
passingMainTopics.addEventListener('keydown',(event)=>{
    if(event.key==="Enter"){
        receiveMainTopics.textContent=passingMainTopics.value;
        passingMainTopics.style.display='none';
    }
})

//setting the time range

