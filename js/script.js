var users = [{
        name: 'Lucy',
        gender: 'F',
        hobby: 'mascotas',
        avatar: 'avatar1.png'
    },
    {
        name: 'Betty',
        gender: 'F',
        hobby: 'mascotas',
        avatar: 'avatar2.png'
    },
    {
        name: 'Ronald',
        gender: 'M',
        hobby: 'musica',
        avatar: 'avatar3.png'
    },
    {
        name: 'Christopher',
        gender: 'm',
        hobby: 'deportes',
        avatar: 'avatar4.png'
    },
    {
        name: 'Ximena',
        gender: 'F',
        hobby: 'leer',
        avatar: 'avatar5.png'
    },
    {
        name: 'Paul',
        gender: 'M',
        hobby: 'compras',
        avatar: 'avatar6.png'
    },
    {
        name: 'Charlie',
        gender: 'M',
        hobby: 'mascotas',
        avatar: 'avatar7.png'
    },
];

window.addEventListener('load', function() {

    function search() {

        //get hobby
        var hobbyField = document.getElementById('hobby')
        var hobby = hobbyField.value;

        // get gender
        var genderField = document.getElementById('gender');
        var selected = genderField.selectedIndex;
        var gender = genderField.options[selected].value;

        var resultsHTML = '';
        var numUsers = users.length;

        for (var i = 0; i < numUsers; i++) {

            if (gender == 'A' || gender == users[i].gender) {
                if (hobby == '' || hobby == users[i].hobby) {
                    resultsHTML += '<div class="person-row">\
                <img src="images/' + users[i].avatar + '"/>\
                <div class = "person-info"> \
                <div class = "name">' + users[i].name + '</div>\
                <div>Hobbies: ' + users[i].hobby + '</div></div >\
                <button class="btn btn-danger">Add as friend</button></div>';
                }
            }
        }
        results.innerHTML = resultsHTML;
    }

    var results = document.getElementById('results');
    var searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', search)
    ''
    search();
});