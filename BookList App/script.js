//Dom Selector
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

//Event Listener

btn.addEventListener('click', function(e) {
    e.preventDefault();
    //console.log("clicked");
    if (title.value == '' && author.value == '' && year.value == '') {
        alert('Faka rakha jabe na');
    } else {

        const newRow = document.createElement('tr');
        //console.log(newRow);
        //creating new title
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        //console.log(newTitle);
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        //console.log(newTitle);
        newRow.appendChild(newAuthor);

        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        //console.log(newTitle);
        newRow.appendChild(newYear);
        bookList.appendChild(newRow);
    }
})