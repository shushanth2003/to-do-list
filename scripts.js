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
const startInput = document.getElementById('startTime');
const endInput = document.getElementById('endTime');
const btn = document.getElementById('setRangeBtn');
let start, end;

btn.addEventListener('click', () => {
  start = startInput.value; // e.g., "14:00"
  end = endInput.value;     // e.g., "15:00"
  checkShoppingTime();
});

// This function checks current time and updates UI message
function checkShoppingTime() {
  if (!start || !end) return;
  const now = new Date();
  // Format current time as "HH:MM"
  const curr = now.toTimeString().slice(0,5);
  const timerange = document.getElementById('timerange');

  if (curr >= start && curr < end) {
    timerange.textContent = `${formatTime(start)} to ${formatTime(end)} is shopping time`;
  } else {
    timerange.textContent = "";
  }
}
function formatTime(t) {
  // "14:00" => "2:00 pm"
  const [h, m] = t.split(':').map(Number);
  const postfix = h >= 12 ? 'pm' : 'am';
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${m.toString().padStart(2, '0')} ${postfix}`;
}
// Check every minute
setInterval(checkShoppingTime, 60 * 1000);
// Initial check
checkShoppingTime();
