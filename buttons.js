




//let button_part = document.getElementsByClassName('controls')[0];
//const button_partContent = button_part.innerHTML;
//let newContent = '<button id="end_button_id" onclick="start_button();" >start</button>';
//button_part.innerHTML = button_partContent + newContent;

function show_start_button() {
    let button_part1 = document.getElementsByClassName('controls')[0];
    const button_partContent1 = button_part1.innerHTML;
    let newContent1 = '<button onclick="start_button();" >start</button>';
    button_part1.innerHTML = button_partContent1 + newContent1;
};

function show_end_button() {
    let button_part = document.getElementsByClassName('controls')[0];
    const button_partContent = button_part.innerHTML;
    let newContent = '<button onclick="end_button();" >stop</button>';
    button_part.innerHTML = button_partContent + newContent;
};