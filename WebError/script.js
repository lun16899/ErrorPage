let retryCount = 1;

function retryConnection() {
    retryCount++;
    
    const statusSpan = document.getElementById('status-display');
    
    statusSpan.innerText = `正在偵測伺服器...(第${retryCount}次)`;
    
    statusSpan.style.color = "#3ea6ff"; 
    
    setTimeout(() => {
        statusSpan.style.color = "#aaaaaa";
    }, 500);
}