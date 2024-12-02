const homeBtn = document.getElementById('homeBtn');
const pomodoroBtn = document.getElementById('pomodoroBtn');
const taskInput = document.getElementById('taskInput');
const addTask = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTask.addEventListener('click',()=>{
    const task=taskInput.value;
    if(task){
        const li=document.createElement('li')
        li.innerText=task;
        const deleteBtn=document.createElement('button')
        deleteBtn.innerText='Hapus';
        deleteBtn.addEventListener('click',()=>taskList.removeChild(li));
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value=''

    }
})


document.getElementById('start').addEventListener('click',()=>{
    let isWorking=true;
    const timerElement=document.getElementById('timer');
    let cycleCount=0;
    let interval=null;

    
function countdownTimer(duration,callback) {
    let second = duration;

    if(interval)clearInterval(interval);
    interval = setInterval(() => {
      const hrs = String(Math.floor(second / 3600)).padStart(2, '0');
      const mins = String(Math.floor((second % 3600) / 60)).padStart(2, '0');
      const secs = String(second % 60).padStart(2, '0');
      timerElement.innerText = `${hrs}:${mins}:${secs}`; // Tampilkan di halaman

      second--;

      if (second < 0) {
        clearInterval(interval);
        if(callback)callback();
      }
    }, 1000);
  }

 
  function startCycle() {
    if (cycleCount >= 4) {
      timerElement.innerText = "Waktu Belajar Selesai"; 
      return; 
    }

    if (isWorking) {
        timerElement.style.color = "#FF5722";
      countdownTimer(25*60, () => {
        isWorking = false; 
        startCycle(); 
      });
    } else {
      countdownTimer(5*60, () => {
        isWorking = true; 
        cycleCount++; 
        startCycle(); 
      });
    }
  }
    startCycle(); 

    document.getElementById('pause').addEventListener('click',()=>{
        if(interval)clearInterval(interval);
        timerElement.innerText = "Berhenti";
    })
    
});

//menampilkan home saat di klik
homeBtn.addEventListener('click', () => {
    taskListContainer.style.display = 'block';
    pomodoroT.style.display = 'none';
});

// Menampilkan Pomodoro saat klik Pomodoro
pomodoroBtn.addEventListener('click', () => {
    taskListContainer.style.display = 'none';
    pomodoroT.style.display = 'block';
});












