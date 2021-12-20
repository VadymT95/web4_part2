var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;


var max_time = 10000;


var MaxRandomNumber = 150;
var anim_start = {
    flag: 1,
}
var green_ball = {
    x: Math.random()*MaxRandomNumber,
    y: Math.random()*MaxRandomNumber,
    vx: 5,
    vy: 2,
    count: 0,
    radius: 10,
    color: 'green',
    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

var red_ball = {
    x: Math.random()*MaxRandomNumber,
    y: Math.random()*MaxRandomNumber,
    vx: 5,
    vy: 2,
    radius: 10,
    color: 'red',
    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

function draw() {
    if(  Math.floor(Math.abs(green_ball.x - red_ball.x)*Math.abs(green_ball.x - red_ball.x) +
        (Math.abs(green_ball.y - red_ball.y)*Math.abs(green_ball.y - red_ball.y))) <=
        Math.floor(((green_ball.radius+red_ball.radius) * (green_ball.radius+red_ball.radius)) + red_ball.radius)){
        final_button();
        green_ball.x = Math.random()*MaxRandomNumber;
        green_ball.y = Math.random()*MaxRandomNumber;
        red_ball.x = Math.random()*MaxRandomNumber;
        red_ball.y = Math.random()*MaxRandomNumber;
        return;
    }

    ctx.clearRect(0,0, canvas.width, canvas.height);
    green_ball.draw();
    green_ball.x += green_ball.vx;
    green_ball.y += green_ball.vy;

    if (green_ball.y + green_ball.vy > canvas.height ||
        green_ball.y + green_ball.vy < 0) {
        green_ball.vy = -green_ball.vy;
    }
    if (green_ball.x + green_ball.vx > canvas.width ||
        green_ball.x + green_ball.vx < 0) {
        green_ball.vx = -green_ball.vx;
    }
    red_ball.draw();
    red_ball.x += red_ball.vx;
    red_ball.y += red_ball.vy;

    if (red_ball.y + red_ball.vy > canvas.height ||
        red_ball.y + red_ball.vy < 0) {
        red_ball.vy = -red_ball.vy;
    }
    if (red_ball.x + red_ball.vx > canvas.width ||
        red_ball.x + red_ball.vx < 0) {
        red_ball.vx = -red_ball.vx;
    }

    raf = window.requestAnimationFrame(draw);
}

function start_button() {
    raf = window.requestAnimationFrame(draw);
    if(anim_start.flag == 1){anim_start.flag = 0; window.setInterval(final_button, max_time);}
    let button_part = document.getElementsByClassName('controls')[0];
    const button_partContent = button_part.innerHTML;
    let newContent = '<div class="button_control_part"><button id="start_button_id" onclick="end_button();" >stop</button><button id="close_button_id" onclick="close_button();" >close</button></div>';
    let newContent111 = '<h5>some start message!</h5>';
    button_part.innerHTML = newContent111 + newContent;
    let now = new Date();
    var str = String(Math.floor(Math.random()*1000000));
    console.log(str + 'some start message!' + '----'+ now );
    localStorage.setItem(str, 'some start message!' + '----'+ now );

};


function end_button() {
    window.cancelAnimationFrame(raf);
    let button_part1 = document.getElementsByClassName('controls')[0];
    const button_partContent1 = button_part1.innerHTML;
    let newContent1 = '<div class="button_control_part"><button id="end_button_id" onclick="start_button();" >start</button><button id="close_button_id" onclick="close_button();" >close</button></div>';
    let newContent11 = '<h5>some stop message!</h5>';
    button_part1.innerHTML = newContent11 + newContent1;

    let now1 = new Date();
    var str1 = String(Math.floor(Math.random()*1000000));
    localStorage.setItem(str1, 'some stop message!' + '----'+ now1);
};

function final_button() {
    window.cancelAnimationFrame(raf);
    let button_part2 = document.getElementsByClassName('controls')[0];
    const button_partContent2 = button_part2.innerHTML;
    let newContent2 = '<div class="button_control_part"><button id="final_button_id" onclick="start_button();" >reload</button><button id="close_button_id" onclick="close_button();" >close</button></div>';
    let newContent21 = '<h5>some final message!</h5>';
    button_part2.innerHTML = newContent21 + newContent2;

    let now2 = new Date();
    var str2 = String(Math.floor(Math.random()*1000000));
    localStorage.setItem(str2, 'some final message!' + '----'+ now2 );
};
function close_button(){
    window.cancelAnimationFrame(raf);
    document.getElementsByClassName('work')[0].hidden = true;
    let middle_of_screen = document.getElementsByClassName('fourthP')[0];
    middle_of_screen_inner = middle_of_screen.innerHTML;
    var step;
    for (step = 0; step < 1000000; step++) {
        if(localStorage.key(step) != null){
            let newContent_local = localStorage.getItem(localStorage.key(step));
            middle_of_screen_inner +=  "<a>" + newContent_local +"<br></a>"
        }
    }
    middle_of_screen.innerHTML = middle_of_screen_inner;
};
ball.draw();
