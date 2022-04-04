document.addEventListener('DOMContentLoaded', () => Run())

function Run() {
    console.log('running');
}

let active = false;

document.querySelectorAll('.slider-btn div p').forEach((e) => {

    e.addEventListener('click', () => {
        if (!active) {
            active = true;
            e.style.color = '#F6851B'
            e.previousSibling.previousSibling.style.color = '#333333'
            document.querySelector('.active').style.transform = 'translateX(125%)';
        } else {
            active = false;
            e.style.color = '#F6851B'
            e.nextSibling.nextSibling.style.color = '#333333'
            document.querySelector('.active').style.transform = 'translateX(0%)';
        }
    })
});


let copyBtn = document.querySelector('.copy');

copyBtn.addEventListener('click', btn => {

    btn.path[1].style.backgroundColor = '#037DD6'
    btn.target.style.color = '#fff'
    setTimeout(() => {
        btn.path[1].style.backgroundColor = '#333333'
        btn.target.style.color = '#037DD6'
    }, 300);

})