const form = document.querySelector('form');
const input = document.querySelector('#Co');
const select = document.querySelector('#operation');
const label = document.querySelector('label');
const btn = document.querySelector('button');
const d1 = document.querySelector('.first');
let horror = [
    {
        name: 'True Horror',
        language: 'English',
        type: 'Documentary',
        url: 'https://www.tvmaze.com/shows/36134/true-horror',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/153/382970.jpg'
    },
    {
        name: 'Horror Hotel',
        language: 'English',
        type: 'Scripted',
        url: 'https://www.tvmaze.com/shows/28864/horror-hotel',
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/115/287614.jpg"
    },
    {
        name: 'Hometown Horror',
        language: 'English',
        type: 'Scripted',
        url: 'https://www.tvmaze.com/shows/44689/hometown-horror',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/224/561631.jpg'
    },
    {
        name: 'Dating Horror Stories',
        language: 'English',
        type: 'Scripted',
        url: 'https://www.tvmaze.com/shows/79660/dating-horror-stories',
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/536/1340548.jpg"
    },
    {
        name: 'American Horror Story',
        language: 'English',
        type: 'Scripted',
        url: 'https://www.tvmaze.com/shows/30/american-horror-story',
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/473/1183640.jpg"
    },
    {
        name: 'Masters of Horror',
        language: 'English',
        type: 'Scripted',
        url: 'https://www.tvmaze.com/shows/482/masters-of-horror',
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/3/9371.jpg"
    }]

let comedy = [
    {
        name: "Inside Comedy",
        language: "English",
        type: "Talk Show",
        url: "https://www.tvmaze.com/shows/3152/inside-comedy",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/17/43207.jpg"
    },
    {
        name: "Black Comedy",
        language: "English",
        type: "Scripted",
        url: "https://www.tvmaze.com/shows/9881/black-comedy",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/391/978174.jpg"
    },
    {
        name: "Comedy Legends",
        language: "English",
        type: "Documentary",
        url: "https://www.tvmaze.com/shows/39037/comedy-legends",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/483/1208447.jpg"
    },
    {
        name: "Comedy Playhouse",
        type: "Scripted",
        language: "English",
        url: "https://www.tvmaze.com/shows/10428/comedy-playhouse",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/35/88167.jpg"
    },
    {
        name: "Comedy Revenge",
        type: "Reality",
        anguage: "Korean",
        url: "https://www.tvmaze.com/shows/79800/comedy-revenge",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/538/1346515.jpg"
    },
    {
        name: "Talking Comedy",
        language: "English",
        type: "Documentary",
        url: "https://www.tvmaze.com/shows/22966/talking-comedy",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/85/212871.jpg"
    }
]
let drama = [
    {
        name: "Drama",
        type: "Scripted",
        language: "Spanish",
        url: "https://www.tvmaze.com/shows/46584/drama",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/244/611819.jpg"
    },
    {
        name: "Total Drama",
        url: "https://www.tvmaze.com/shows/4779/total-drama",
        type: "Animation",
        language: "English",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/457/1143235.jpg"
    },
    {
        name: "Drama Queens",
        type: "Reality",
        url: "https://www.tvmaze.com/shows/75766/drama-queens",
        language: "Russian",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/513/1283360.jpg"
    },
    {
        name: "Drama Festival",
        language: "Korean",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/472/1181234.jpg",
        url: "https://www.tvmaze.com/shows/28689/drama-festival",
        type: "Scripted"
    },
    {
        name: "Drama Club",
        language: "English",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/300/750576.jpg",
        url: "https://www.tvmaze.com/shows/54148/drama-club",
        type: "Scripted",
    },
    {
        name: "Dubplate Drama",
        language: "English",
        type: "Scripted",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/23/57843.jpg",
        type: "Scripted",
    }
]
input.addEventListener('change', () => {
    label.classList.remove('non');
    btn.classList.remove('non');
    select.classList.remove('non');
})
select.addEventListener('change', () => {
    if (select.value === 'search') {
        label.innerText = 'Find TV show!! ';
        btn.innerText = 'search';
    } else if (select.value === 'delete') {
        label.innerText = 'Delete TV Show!! ';
        btn.innerText = 'Delete';
        let x = document.createElement('select');
        let op = document.createElement('option');
        op.innerText = "Select show to Delete"
        x.appendChild(op);
        x.classList.add('nana');
        for (let j = 0; j <= 5; j++) {
            op = document.createElement('option');
            if (input.value === "horror") {
                let y = horror;
                op.innerText = y[j].name;
                op.value = y[j].name;
                x.appendChild(op);
            } else if (input.value === "drama") {
                let y = drama;
                op.innerText = y[j].name;
                op.value = y[j].name;
                x.appendChild(op);
            } else {
                let y = comedy;
                op.innerText = y[j].name;
                op.value = y[j].name;
                x.appendChild(op);
            }
        }
        d1.insertAdjacentElement("beforebegin", x);
        x.addEventListener('change', () => {
            let z = x.value;
            if (input.value === "horror") {
                data = horror;
            } else if (input.value === "drama") {
                data = drama;
            } else if (input.value === "comedy") {
                data = comedy;
            }
            switch (z) {
                case data[0].name: {
                    alert(`Delete The Show (${data[0].name})`);
                    data.splice(0, 1);
                    break;
                }
                case data[1].name: {
                    alert(`Delete The Show (${data[1].name})`);
                    data.splice(1, 1);
                    break;
                }
                case data[2].name: {
                    alert(`Delete The Show ${data[2].name}`);
                    data.splice(2, 1);
                    break;
                }
                case data[3].name: {
                    alert(`Delete The Show (${data[3].name})`);
                    data.splice(3, 1);
                    break;
                }
                case data[4].name: {
                    alert(`Delete The Show (${data[4].name})`);
                    data.splice(4, 1);
                    break;
                }
                case data[5].name: {
                    alert(`Delete The Show (${data[5].name})`);
                    data.splice(5, 1);
                    break;
                }
            }
        })
    } else if (select.value === 'add') {
        label.innerText = 'Add TV Show!! ';
        btn.innerText = 'Add';
        let add = input.value;
        addShow(add);
    }
    else if (select.value === 'edit') {
        label.innerText = 'Edit TV Show!! ';
        btn.innerText = 'Edit';
        let edit = input.value;
        editShow(edit);
    }
}
)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (select.value === 'search') {
        if (input.value === "horror") {
            data = horror;
        } else if (input.value === "drama") {
            data = drama;
        } else if (input.value === "comedy") {
            data = comedy;
        }
        creat();
    } else if (select.value === 'delete') {
        if (input.value === "horror") {
            data = horror;
        } else if (input.value === "drama") {
            data = drama;
        } else if (input.value === "comedy") {
            data = comedy;
        }
        creat();
    } else if (select.value === 'add') {
        creat();
    } else if (select.value === 'edit') {
        creat();
    }
    else {
        alert("Please Select an operation")
    }
})

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function creat() {
    for (let i = 0; i <= 8; i++) {
        var newImg = document.createElement('img');
        newImg.src = data[i].image;
        var myDiv = document.querySelector(`#con${i}`);
        newImg.classList.add('fade-in');
        myDiv.appendChild(newImg);


        var p1 = document.createElement('p');
        p1.innerText = `Name : ${data[i].name}`;
        p1.classList.add('fade-in');
        myDiv.appendChild(p1);

        var p2 = document.createElement('p');
        p2.innerText = `Language : ${data[i].language}`;
        p2.classList.add('fade-in');
        myDiv.appendChild(p2);

        var p3 = document.createElement('p');
        p3.innerText = `Type : ${data[i].type}`;
        p3.classList.add('fade-in');
        myDiv.appendChild(p3);

        var link = document.createElement('a');
        link.innerText = 'URL: Click Here';
        link.href = data[i].url;
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

}

function addShow(add) {
    if (add === "horror") {
        horror.push(ShowInfo());
        data = horror;
    } else if (add === "drama") {
        drama.push(ShowInfo());
        data = drama;
    } else if (add === "comedy") {
        comedy.push(ShowInfo());
        data = comedy;
    }

}
function ShowInfo() {
    let addName = prompt("Enter the name of show");
    let addLanguage = prompt("Enter the lanuage of show");
    let addUrl = prompt("Enter the URL of show");
    let addImage = prompt("Enter the Image source of show");
    let addType = prompt("Enter the Type of show");
    return {
        name: addName,
        type: addType,
        language: addLanguage,
        url: addUrl,
        image: addImage
    }
}
function editShow(edit) {
    let x = document.createElement('select');
    let op = document.createElement('option');
    op.innerText = "Select show to Edit"
    x.appendChild(op);
    x.classList.add('nana');
    for (let j = 0; j <= 5; j++) {
        op = document.createElement('option');
        if (edit === "horror") {
            let y = horror;
            op.innerText = y[j].name;
            op.value = y[j].name;
            x.appendChild(op);
        } else if (edit === "drama") {
            let y = drama;
            op.innerText = y[j].name;
            op.value = y[j].name;
            x.appendChild(op);
        } else {
            let y = comedy;
            op.innerText = y[j].name;
            op.value = y[j].name;
            x.appendChild(op);
        }
    }
    d1.insertAdjacentElement("beforebegin", x);
    x.addEventListener('change', () => {
        let z = x.value;
        if (edit === "horror") {
            data = horror;
        } else if (edit === "drama") {
            data = drama;
        } else if (edit === "comedy") {
            data = comedy;
        }
        switch (z) {
            case data[0].name: {
                data[0] = editShowInfo(data[0]);
                break;
            }
            case data[1].name: {
                data[1] = editShowInfo(data[1]);
                break;
            }
            case data[2].name: {
                data[2] = editShowInfo(data[2]);
                break;
            }
            case data[3].name: {
                data[3] = editShowInfo(data[3]);
                break;
            }
            case data[4].name: {
                data[4] = editShowInfo(data[4]);
                break;
            }
            case data[5].name: {
                data[5] = editShowInfo(data[5]);
                break;
            }
        }
    })
}

function editShowInfo(data) {
    let addName = prompt("Enter the name of show", data.name);
    let addLanguage = prompt("Enter the lanuage of show", data.language);
    let addType = prompt("Enter the Type of show", data.type);
    let addUrl = prompt("Enter the URL of show", data.url);
    let addImage = prompt("Enter the Image source of show", data.image);
    return {
        name: addName,
        type: addType,
        language: addLanguage,
        url: addUrl,
        image: addImage,
    }
}
