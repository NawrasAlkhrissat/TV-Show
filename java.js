let res = null;
const form = document.querySelector('form');
const input = document.querySelector('#search');
const select = document.querySelector('select');
const label = document.querySelector('label');
input.addEventListener('input',()=>{
    if(input.value==='')
location.reload();
})
select.addEventListener('change',()=>{
    if(select.value === 'shows'){
        label.innerText = 'Find TV show!! '
    }else if(select.value === 'People'){
        label.innerText = 'Find People!! '
    } 
})
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(select.value === 'shows'){
        req();
    }else if(select.value === 'People'){
        reqPerson();
    }else{
        alert("Please Select a category to search")
    }
})
async function req() {
    var value = input.value
    const para = { params: { q: value } }
    res = await axios.get('https://api.tvmaze.com/search/shows', para)
    creat();
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let i=0;
async function creat() {
    for (let j = 0; j < 10; j++) {
        if (res.data[i].show.image){
            var newImg = document.createElement('img');
            newImg.src = res.data[i].show.image.medium;
            var myDiv = document.querySelector(`#con${j}`);
            newImg.classList.add('fade-in');
            myDiv.appendChild(newImg);
            

            var p1 = document.createElement('p');
            p1.innerText = `Name : ${res.data[i].show.name}`;
            p1.classList.add('fade-in');
            myDiv.appendChild(p1);

            var p2 = document.createElement('p');
            p2.innerText = `Language : ${res.data[i].show.language}`;
            p2.classList.add('fade-in');
            myDiv.appendChild(p2);

            var p3 = document.createElement('p');
            p3.innerText = `Type : ${res.data[i].show.type}`;
            p3.classList.add('fade-in');
            myDiv.appendChild(p3);
            
            var link= document.createElement('a');
            link.innerText = 'URL: Click Here';
            link.href = res.data[i].show.url;
            link.classList.add('fade-in');
            myDiv.appendChild(link);

            setTimeout(() => {
                newImg.classList.remove('fade-in');
                p1.classList.remove('fade-in');
                p2.classList.remove('fade-in');
                p3.classList.remove('fade-in');
              }, 500);
            await delay(500);
            
        }else{
            j--;
        }
        i++;
    }
}
let resPer = null;
async function reqPerson() {
    var value = input.value
    const per = { params: { q: value } }
    res = await axios.get('https://api.tvmaze.com/search/people',per);
    creatPerson();
}
async function creatPerson(){
            var newImg = document.createElement('img');
            newImg.src = res.data[0].person.image.medium;
            var myDiv = document.querySelector('#con1');
            newImg.classList.add('fade-in');
            myDiv.appendChild(newImg);
            

            var p1 = document.createElement('p');
            p1.innerText = `Name : ${res.data[0].person.name}`;
            p1.classList.add('fade-in');
            myDiv.appendChild(p1);

            var p2 = document.createElement('p');
            p2.innerText = `Gender : ${res.data[0].person.gender}`;
            p2.classList.add('fade-in');
            myDiv.appendChild(p2);

            var p3 = document.createElement('p');
            p3.innerText = `Birthday : ${res.data[0].person.birthday}`;
            p3.classList.add('fade-in');
            myDiv.appendChild(p3);
            
            var link= document.createElement('p');
            link.innerText = `country : ${res.data[0].person.country.name}`;
            link.classList.add('fade-in');
            myDiv.appendChild(link);

            setTimeout(() => {
                newImg.classList.remove('fade-in');
                p1.classList.remove('fade-in');
                p2.classList.remove('fade-in');
                p3.classList.remove('fade-in');
              }, 500);
            await delay(500);
            
        
    }

//     let res = null;
// let test = null;
// async function reqPerson() {
//     res = await axios.get('https://api.tvmaze.com/search/people?q=Jackie Chan');
//     test1 = res.data[0].person.name;
//     test2 = res.data[0].person.gender;
//     test3 = res.data[0].person.birthday;
//     test4 = res.data[0].person.country.name;
// }
