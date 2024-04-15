const accessKey = 'Xym4JItkQlgkp1SlYtF5F8yEcM7n31WRMTpqDe291jk';
        
// Fetch a random photo from Unsplash with specific parameters
async function getRandomPhoto() {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&query=nature&orientation=landscape`);
    const data = await response.json();
    return data.urls.regular;
}

// Preload image
async function preloadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
    });
}

// Set random photo as background
async function setBackground() {
    const imageUrl = await getRandomPhoto();
    // Preload the image
    await preloadImage(imageUrl);
    document.querySelector('.blurry-background').style.backgroundImage = `url('${imageUrl}')`;
}

document.addEventListener('DOMContentLoaded', () => {
    setBackground();
    updatetime();
    showgreeting();
});
 function updatetime(){
            const now = new Date();
            const timestring =now.toLocaleTimeString(undefined, {hour:"2-digit",minute:"2-digit",hour12: false});
            const options ={weekday :'long',day:'numeric',month:'long'};
            const datestring = now.toLocaleDateString (undefined,options);
            document.getElementById('time').textContent=timestring;
            document.getElementById('date').textContent=datestring;

 }
        // update interval
 setInterval(updatetime,60000);
        // intial call for showing time and date 


  
        function showgreeting (){
            const hour = new Date().getHours();
            let greeting;

            if (hour<12) {
                greeting= 'Good Morning!';
            }
            else if (hour <18){
                greeting='Good Afternoon!';
            }
            else {
                greeting= 'Good Evening!';
            }
            document.getElementById('greeting').innerText=greeting;
        }
   
