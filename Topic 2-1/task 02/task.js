const img = document.getElementById('cookie');
const click_count = document.getElementById('clicker__counter');
const click_avg = document.getElementById('clicker__average');

let count = 0;
let avg = 0;
let different = 0;
let startDate = new Date().getTime();

img.onclick = () => {
    console.log(`startDate b- ${startDate}`)
    count++;
    let endDate = new Date().getTime();

    if (count % 2 !== 0) different = 20
    else different = -20;
    
    img.width += different;
    img.height += different;

    avg = (Math.round((1 / (endDate - startDate)) * 100 * 1000) / 100);
    
    click_count.textContent = count;
    click_avg.textContent = avg;
    
    startDate = endDate;
    console.log(`startDate a- ${startDate}`)
}
