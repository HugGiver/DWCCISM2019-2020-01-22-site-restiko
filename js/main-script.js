// Template post-preview

var postPreview =
    '<div class="post-preview items">' +
    '<h2 class="post-title">' +
    'Restiko du ###date###' +
    '</h2>' +
    '<p class="post-meta">Écrit par Matarii Apeang</p>' +
    '<button class="btn btn-outline-info viewButton" onclick="viewRestiko(' + "'###record.id###'" + ')">Voir</button>' +
    '<button class="btn btn-outline-primary ml-3 updateButton" onclick="modifyRestiko(' + "'###record.id###'" + ')">Modifier</button>' +
    '<button class="btn btn-outline-danger ml-3 deleteButton" onclick="deleteRestiko(' + "'###record.id###'" + ')">Supprimer</button>' +
    '<input type="hidden" readonly value="###record.id###">' +
    '<hr class="my-5">' +
    '</div>';
//Fin Template post-preview

//Template post-view
var postView =
    '<div>' +
    '<p><span class="font-weight-bold fontSizeBigger">Date :</span> <span id="dateView">###Date###</span></p>' +
    '<p><span class="font-weight-bold fontSizeBigger">' + "Ce que j'ai fait " + ':</span><br> <span id="whatIDidView">###whatIDid###</span></p>' +
    '<p><span class="font-weight-bold fontSizeBigger">' + "Ce que j'ai appris " + ':</span><br> <span id="whatIlearnedView">###whatIlearned###</span></p>' +
    '<p><span class="font-weight-bold fontSizeBigger">' + "Ce que j'ai aimé " + ':</span><br> <span id="whatIlikedView">###whatIliked###</span></p>' +
    '<p><span class="font-weight-bold fontSizeBigger">' + "Ce que j'ai utilisé de nouveaux " + ':</span><br> <span id="whatNewIUsedView">###whatNewIUsed###</span></p>' +
    '<p><span class="font-weight-bold fontSizeBigger">' + "Problématiques  rencontrées " + ':</span><br> <span id="problematiqueView">###problematique###</span></p>' +
    '<p><span class="font-weight-bold fontSizeBigger">' + "Quels sont les objectifs ? " + ':</span><br> <span id="objectivesView">###objectives###</span></p>' +
    '<p><span class="font-weight-bold fontSizeBigger">' + "Qu'est-ce qui m'a manqué ? " + ':</span><br> <span id="whatILackedView">###whatILacked###</span></p>' +
    '<p><span class="font-weight-bold fontSizeBigger">' + "Qu'est-ce que tu ferais à la place du formateur ? " + ':</span><br> <span id="whatWouldIDoView">###whatWouldIDo###</span></p>' +
    '<p><span class="font-weight-bold fontSizeBigger">' + "Objectifs atteints ou pas ? " + ':</span><br> <span id="resultsView">###results###</span></p>' +
    '<p><span class="font-weight-bold fontSizeBigger">' + "Note sur 5 " + ':</span> <span id="markView">###mark###</span></p>' +
    '</div>' +
    '<div class="d-flex justify-content-center">' +
    '<button id="returnButton" class="btn btn-secondary" onclick="returnButtonFunction()">Retour</button>' +
    '<button class="btn btn-outline-primary ml-3 updateButton" onclick="modifyRestiko(' + "'###record.id###'" + ')">Modifier</button>' +
    '<button class="btn btn-outline-danger ml-3 deleteButton" onclick="deleteRestiko(' + "'###record.id###'" + ')">Supprimer</button>' +
    '</div>' +
    '<input type="hidden" readonly value="###record.id###">';
//Fin Template post-view

//Template modifyPost
var modifyPost =
    '<div>' +
    '<p><span class="font-weight-bold fontSizeBigger">Date :</span> <input id="dateUpdate" type="date" value="###Date###"></p>' +
    '<p><span class="font-weight-bold fontSizeBigger">' + "Ce que j'ai fait " + ':</span><br> <textarea cols="45" rows="5" id="whatIDidUpdate" type="text">###whatIDid###</textarea></p>' +
    '<p><span class="font-weight-bold fontSizeBigger">' + "Ce que j'ai appris " + ':</span><br> <textarea cols="45" rows="5" id="whatIlearnedUpdate" type="text">###whatIlearned###</textarea></p>' +
    '<p><span class="font-weight-bold fontSizeBigger">' + "Ce que j'ai aimé " + ':</span><br> <textarea cols="45" rows="3" id="whatIlikedUpdate" type="text">###whatIliked###</textarea></p>' +
    '<p><span class="font-weight-bold fontSizeBigger">' + "Ce que j'ai utilisé de nouveaux " + ':</span><br> <textarea cols="45" rows="3" id="whatNewIUsedUpdate" type="text">###whatNewIUsed###</textarea></p>' +
    '<p><span class="font-weight-bold fontSizeBigger">' + "Problématiques  rencontrées " + ':</span><br> <textarea cols="45" rows="3" id="problematiqueUpdate" type="text">###problematique###</textarea></p>' +
    '<p><span class="font-weight-bold fontSizeBigger">' + "Quels sont les objectifs ? " + ':</span><br> <textarea cols="45" rows="3" id="objectivesUpdate" type="text">###objectives###</textarea></p>' +
    '<p><span class="font-weight-bold fontSizeBigger">' + "Qu'est-ce qui m'a manqué ? " + ':</span><br> <textarea cols="45" rows="3" id="whatILackedUpdate" type="text">###whatILacked###</textarea></p>' +
    '<p><span class="font-weight-bold fontSizeBigger">' + "Qu'est-ce que tu ferais à la place du formateur ? " + ':</span><br> <textarea cols="45" rows="3" id="whatWouldIDoUpdate" type="text">###whatWouldIDo###</textarea></p>' +
    '<p><span class="font-weight-bold fontSizeBigger">' + "Objectifs atteints ou pas ? " + ':</span><br> <textarea cols="45" rows="3" id="resultsUpdate" type="text">###results###</textarea></p>' +
    '<p><span class="font-weight-bold fontSizeBigger">' + "Note sur 5 " + ':</span> <input id="markUpdate" type="text" value="###mark###"></p>' +
    '</div>' +
    '<div class="d-flex justify-content-center">' +
    '<button id="returnButton" class="btn btn-outline-secondary" onclick="returnButtonFunction()">Annuler</button>' +
    '<button id="returnButton" class="btn btn-outline-primary ml-3" onclick="updateRestiko(idRecord)">Valider</button>' +
    '</div>' +
    '<input type="hidden" readonly id="modifyPostInput" value="###record.id###">';
//Fin Template modifyPost


//Déclaration des variables
var idRecord, date, whatIDid, whatIlearned, whatIliked, whatNewIUsed, problematique, objectives, whatILacked, whatWouldIDo, results, mark;


//Affichage de la liste des restikos
function previewRestiko() {
    base('RESTIKO').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 999,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record) {
            //Récupération des données
            console.log('idRecord', record.id);
            idRecord = record.id;
            date = record.get('Date');

            //Création d'un post-preview pour chaque enregistrements
            var getRestiko = '';
            getRestiko = postPreview.replace('###date###', date);
            getRestiko = getRestiko.replace(/###record.id###/gi, idRecord);

            //Injection des post-preview dans le html
            $('#postPreviewContainer').append(getRestiko);
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

    }, function done(err) {
        if (err) {
            console.error(err);
            return;
        }
    });
};

function viewRestiko(idRecord) {
    base('RESTIKO').find(idRecord, function (err, record) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Retrieved', record.id);
        idRecord = record.id;
        date = record.get('Date');
        whatIDid = record.get("Ce que j'ai fait");
        whatIlearned = record.get("Ce que j'ai appris");
        whatIliked = record.get("Ce que j'ai aimé");
        whatNewIUsed = record.get("Ce que j'ai utilisé de nouveaux");
        problematique = record.get('Problématiques  rencontrées');
        objectives = record.get('Quels sont les objectifs ?');
        whatILacked = record.get("Qu'est-ce qui m'a manqué ?");
        whatWouldIDo = record.get("Qu'est-ce que tu ferais à la place du formateur ?");
        results = record.get('Objectifs atteints ou pas ?');
        mark = record.get('Note sur 5');

        var getViewRestiko = '';
        getViewRestiko = postView.replace('###Date###', date);
        getViewRestiko = getViewRestiko.replace('###whatIDid###', whatIDid);
        getViewRestiko = getViewRestiko.replace('###whatIlearned###', whatIlearned);
        getViewRestiko = getViewRestiko.replace('###whatIliked###', whatIliked);
        getViewRestiko = getViewRestiko.replace('###whatNewIUsed###', whatNewIUsed);
        getViewRestiko = getViewRestiko.replace('###problematique###', problematique);
        getViewRestiko = getViewRestiko.replace('###objectives###', objectives);
        getViewRestiko = getViewRestiko.replace('###whatILacked###', whatILacked);
        getViewRestiko = getViewRestiko.replace('###whatWouldIDo###', whatWouldIDo);
        getViewRestiko = getViewRestiko.replace('###results###', results);
        getViewRestiko = getViewRestiko.replace(/###record.id###/gi, idRecord);
        getViewRestiko = getViewRestiko.replace('###mark###', mark);

        $('#postPreviewContainer').hide();
        $('#homeHeader').hide();
        $('.pagination-container').hide();
        $('#createRestikoButton').hide();
        $('#postViewContainer').html(getViewRestiko);
        undefinedToNothingView();

    });
};

//Affichage écran de modification
function modifyRestiko(idRecord) {
    base('RESTIKO').find(idRecord, function (err, record) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Retrieved', record.id);
        idRecord = record.id;
        date = record.get('Date');
        whatIDid = record.get("Ce que j'ai fait");
        whatIlearned = record.get("Ce que j'ai appris");
        whatIliked = record.get("Ce que j'ai aimé");
        whatNewIUsed = record.get("Ce que j'ai utilisé de nouveaux");
        problematique = record.get('Problématiques  rencontrées');
        objectives = record.get('Quels sont les objectifs ?');
        whatILacked = record.get("Qu'est-ce qui m'a manqué ?");
        whatWouldIDo = record.get("Qu'est-ce que tu ferais à la place du formateur ?");
        results = record.get('Objectifs atteints ou pas ?');
        mark = record.get('Note sur 5');

        var getModifyRestiko = '';
        getModifyRestiko = modifyPost.replace('###Date###', date);
        getModifyRestiko = getModifyRestiko.replace('###whatIDid###', whatIDid);
        getModifyRestiko = getModifyRestiko.replace('###whatIlearned###', whatIlearned);
        getModifyRestiko = getModifyRestiko.replace('###whatIliked###', whatIliked);
        getModifyRestiko = getModifyRestiko.replace('###whatNewIUsed###', whatNewIUsed);
        getModifyRestiko = getModifyRestiko.replace('###problematique###', problematique);
        getModifyRestiko = getModifyRestiko.replace('###objectives###', objectives);
        getModifyRestiko = getModifyRestiko.replace('###whatILacked###', whatILacked);
        getModifyRestiko = getModifyRestiko.replace('###whatWouldIDo###', whatWouldIDo);
        getModifyRestiko = getModifyRestiko.replace('###results###', results);
        getModifyRestiko = getModifyRestiko.replace(/###record.id###/gi, idRecord);
        getModifyRestiko = getModifyRestiko.replace('###mark###', mark);
        

        $('#postPreviewContainer').hide();
        $('#homeHeader').hide();
        $('#createRestikoButton').hide();
        $('.pagination-container').hide();
        $('#postViewContainer').html(getModifyRestiko);
        undefinedToNothingModify();

    });
};

//Fonction de modification
function updateRestiko(idRecord) {
    var dateUpdate, whatIlikedUpdate, whatIDidUpdate, whatIlearnedUpdate, whatNewIUsedUpdate, problematiqueUpdate, objectivesUpdate, whatILackedUpdate, resultsUpdate, markUpdate, whatWouldIDoUpdate;

    dateUpdate = $('#dateUpdate').val();
    whatIlikedUpdate = $('#whatIlikedUpdate').val();
    whatIDidUpdate = $('#whatIDidUpdate').val();
    whatIlearnedUpdate = $('#whatIlearnedUpdate').val();
    whatNewIUsedUpdate = $('#whatNewIUsedUpdate').val();
    problematiqueUpdate = $('#problematiqueUpdate').val();
    objectivesUpdate = $('#objectivesUpdate').val();
    whatILackedUpdate = $('#whatILackedUpdate').val();
    resultsUpdate = $('#resultsUpdate').val();
    markUpdate = $('#markUpdate').val();
    idRecord = $('#modifyPostInput').val();
    whatWouldIDoUpdate = $('#whatWouldIDoUpdate').val();
    
    base('RESTIKO').update([{
        "id": idRecord,
        "fields": {
            "Date": dateUpdate,
            "Ce que j'ai aimé": whatIlikedUpdate,
            "Ce que j'ai fait": whatIDidUpdate,
            "Ce que j'ai appris": whatIlearnedUpdate,
            "Ce que j'ai utilisé de nouveaux": whatNewIUsedUpdate,
            "Problématiques  rencontrées": problematiqueUpdate,
            "Quels sont les objectifs ?": objectivesUpdate,
            "Qu'est-ce qui m'a manqué ?": whatILackedUpdate,
            "Objectifs atteints ou pas ?": resultsUpdate,
            "Note sur 5": markUpdate,
            "Qu'est-ce que tu ferais à la place du formateur ?": whatWouldIDoUpdate,
            "Personne (Initiales)": {
                "id": "usr4pLXb3FxGylfa8",
                "email": "matarii_apeang@yahoo.fr",
                "name": "Matarii Apeang"
            },
        }
    }], function (err, records) {
        if (err) {
            console.error(err);
            return;
        }
        records.forEach(function (record) {
            console.log(record.get('Date'));
        });
    });

    returnButtonFunction()
};

function returnButtonFunction() {
    setTimeout(function () {
        $('#postPreviewContainer').show();
        $('#homeHeader').show();
        $('#postViewContainer').html('');
        $('#postPreviewContainer').html('');
        $('#createRestikoButton').show()
        $('body').scrollTop()
        previewRestiko();
        $('.pagination-container').show();
    }, 600);
    setTimeout(function(){ createPagination(); }, 5000);
};

function deleteRestiko(idRecord) {
    var verification = prompt("Entrez 'oui' pour confirmer l'action.", "non");
    console.log('ID à supprimer', idRecord)

    if (verification == "oui") {
        base('RESTIKO').destroy(idRecord, function (err, deletedRecord) {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Deleted record', deletedRecord.id);
        });

        $('#postPreviewContainer').html('');
        returnButtonFunction();

    }
};

function createRestiko() {
    var dateCreate, whatIlikedCreate, whatIDidCreate, whatIlearnedCreate, whatNewIUsedCreate, problematiqueCreate, objectivesCreate, whatILackedCreate, resultsCreate, markCreate, whatWouldIDoCreate;

    dateCreate = $('#dateCreate').val();
    whatIlikedCreate = $('#whatIlikedCreate').val();
    whatIDidCreate = $('#whatIDidCreate').val();
    whatIlearnedCreate = $('#whatIlearnedCreate').val();
    whatNewIUsedCreate = $('#whatNewIUsedCreate').val();
    problematiqueCreate = $('#problematiqueCreate').val();
    objectivesCreate = $('#objectivesCreate').val();
    whatILackedCreate = $('#whatILackedCreate').val();
    resultsCreate = $('#resultsCreate').val();
    markCreate = $('#markCreate').val();
    whatWouldIDoCreate = $('#whatWouldIDoCreate').val();


    base('RESTIKO').create({
        "Date": dateCreate,
        "Ce que j'ai fait": whatIDidCreate,
        "Ce que j'ai appris": whatIlearnedCreate,
        "Ce que j'ai aimé": whatIlikedCreate,
        "Ce que j'ai utilisé de nouveaux": whatNewIUsedCreate,
        "Problématiques  rencontrées": problematiqueCreate,
        "Quels sont les objectifs ?": objectivesCreate,
        "Qu'est-ce qui m'a manqué ?": whatILackedCreate,
        "Qu'est-ce que tu ferais à la place du formateur ?": whatWouldIDoCreate,
        "Objectifs atteints ou pas ?": resultsCreate,
        "Personne (Initiales)": {
            "id": "usr4pLXb3FxGylfa8",
            "email": "matarii_apeang@yahoo.fr",
            "name": "Matarii Apeang"
        },
        "Note sur 5": markCreate
    }, function (err, record) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(record.getId());
    });
    returnButtonFunction()
    clearChamps()
};

function clearChamps() {
    $('#dateCreate').val("");
    $('#whatIlikedCreate').val("");
    $('#whatIDidCreate').val("");
    $('#whatIlearnedCreate').val("");
    $('#whatNewIUsedCreate').val("");
    $('#problematiqueCreate').val("");
    $('#objectivesCreate').val("");
    $('#whatILackedCreate').val("");
    $('#resultsCreate').val("");
    $('#markCreate').val("");
    $('#whatWouldIDoCreate').val("");
};

function undefinedToNothingModify() {
    var dateUpdate, whatIlikedUpdate, whatIDidUpdate, whatIlearnedUpdate, whatNewIUsedUpdate, problematiqueUpdate, objectivesUpdate, whatILackedUpdate, resultsUpdate, markUpdate, whatWouldIDoUpdate;

    dateUpdate = $('#dateUpdate');
    whatIlikedUpdate = $('#whatIlikedUpdate');
    whatIDidUpdate = $('#whatIDidUpdate');
    whatIlearnedUpdate = $('#whatIlearnedUpdate');
    whatNewIUsedUpdate = $('#whatNewIUsedUpdate');
    problematiqueUpdate = $('#problematiqueUpdate');
    objectivesUpdate = $('#objectivesUpdate');
    whatILackedUpdate = $('#whatILackedUpdate');
    resultsUpdate = $('#resultsUpdate');
    markUpdate = $('#markUpdate');
    idRecord = $('#modifyPostInput');
    whatWouldIDoUpdate = $('#whatWouldIDoUpdate');




    var arrayUpdateValues = [dateUpdate.val(), whatIlikedUpdate.val(), whatIDidUpdate.val(), whatIlearnedUpdate.val(), whatNewIUsedUpdate.val(), problematiqueUpdate.val(), objectivesUpdate.val(), whatILackedUpdate.val(), resultsUpdate.val(), markUpdate.val(), idRecord.val(), whatWouldIDoUpdate.val()];
    var arrayUpdate = [dateUpdate, whatIlikedUpdate, whatIDidUpdate, whatIlearnedUpdate, whatNewIUsedUpdate, problematiqueUpdate, objectivesUpdate, whatILackedUpdate, resultsUpdate, markUpdate, idRecord, whatWouldIDoUpdate];
    var i;

    for (i = 0; i < arrayUpdateValues.length; i++) {
        if (arrayUpdateValues[i] == "undefined") {
            arrayUpdate[i].val("")
            console.log("rat")
        }
    }
};

function undefinedToNothingView() {
    var dateView, whatIlikedView, whatIDidView, whatIlearnedView, whatNewIUsedView, problematiqueView, objectivesView, whatILackedView, resultsView, markView, whatWouldIDoView;

    dateView = $('#dateView');
    whatIlikedView = $('#whatIlikedView');
    whatIDidView = $('#whatIDidView');
    whatIlearnedView = $('#whatIlearnedView');
    whatNewIUsedView = $('#whatNewIUsedView');
    problematiqueView = $('#problematiqueView');
    objectivesView = $('#objectivesView');
    whatILackedView = $('#whatILackedView');
    resultsView = $('#resultsView');
    markView = $('#markView');
    idRecord = $('#modifyPostInput');
    whatWouldIDoView = $('#whatWouldIDoView');




    var arrayViewValues = [dateView.html(), whatIlikedView.html(), whatIDidView.html(), whatIlearnedView.html(), whatNewIUsedView.html(), problematiqueView.html(), objectivesView.html(), whatILackedView.html(), resultsView.html(), markView.html(), idRecord.html(), whatWouldIDoView.html()];
    var arrayView = [dateView, whatIlikedView, whatIDidView, whatIlearnedView, whatNewIUsedView, problematiqueView, objectivesView, whatILackedView, resultsView, markView, idRecord, whatWouldIDoView];
    var i;

    for (i = 0; i < arrayViewValues.length; i++) {
        if (arrayViewValues[i] == "undefined") {
            arrayView[i].html("")
            console.log("rat")
        }
    }
};

function createPagination()
{
    var items = $("#postPreviewContainer .items"); // #list .items c'est l'endroit où tes cartes sont stocké dans le html
            var numItems = items.length; // ne change pas cela
            var perPage = 2; // c'est la variable qui gère le nombre d'item par page

            items.slice(perPage).hide();

            $('.pagination-container').pagination({ // .pagination-container c'est la div qui va contenir la pagination
                items: numItems,
                itemsOnPage: perPage,
                prevText: "&laquo;",
                nextText: "&raquo;",
                onPageClick: function (pageNumber) {
                    var showFrom = perPage * (pageNumber - 1);
                    var showTo = showFrom + perPage;
                    items.hide().slice(showFrom, showTo).show();
                }
            });
}

previewRestiko();
setTimeout(function(){ createPagination(); }, 5000);