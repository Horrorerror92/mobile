var credsData = '';
var fieldName = '';
force.login(
    function() {},
    function(error) {
        console.log("Auth failed: " + error);
    }
);

function credsInfo(creds) {
    var credsDataId = creds.userId
    var credsToken = creds.accessToken;
    showData(credsDataId, credsToken)
};

var showData = function(credsDataId, credsToken) {
    fetchData(credsDataId, function(data) {
        var userData = data.records;
        credsData = credsDataId;
        var listItemsHtml = '';
        var headerItemHtml = '';
        headerItemHtml += (userData[0].CommunityNickname);
        listItemsHtml += ('<div onclick = openCamera() class = "profileInfo-container"><img class="profileInfo-photo" src="https://horr92org-dev-ed.lightning.force.com/' + userData[0].MediumPhotoUrl + '?oauth_token=' + credsToken + '" /></div>');
        listItemsHtml += ('<div class = "profileInfo-container-media" id = "FirstName"' + userData[0].FirstName + '"><div class="media-body" > FirstName: ' + userData[0].FirstName + '</div> <a onclick =editData(\'FirstName\') href="#ModalWindow" id="ModalWindowClose"> Edit </a></div > ');
        listItemsHtml += ('<div class = "profileInfo-container-media" id = "LastName" ' + userData[0].LastName + '"><div class="media-body" > LastName: ' + userData[0].LastName + '</div><a onclick =editData(\'LastName\') href="#ModalWindow" id="ModalWindowClose")>Edit</a></div>');
        document.querySelector('#nickname').innerHTML = headerItemHtml;
        document.querySelector('#profileInfo').innerHTML = listItemsHtml;
    })
}

function editData(inputEditData) {
    fieldName = inputEditData;
    var div = document.getElementById(inputEditData);
    var dataInput = div.getElementsByTagName('div');
    var inputToView = dataInput[0].innerHTML;
    inputToView = inputToView.replace(/ /g, '');
    inputToView = inputToView.split(':')[1];
    var newListItemsHtml = '';
    newListItemsHtml += ('Edit your ' + inputEditData + ' field');
    document.querySelector('#Modal_BodyNameField').innerHTML = newListItemsHtml;
    document.getElementById("inputUdate").value = inputToView;


}
var fetchData = function(credsDataId, successHandler) {
    var soql = 'SELECT Id, Name, FirstName, LastName, CommunityNickname, MediumPhotoUrl FROM User WHERE Id = \'' + credsDataId + '\'  LIMIT 1';
    force.query(soql, successHandler, function(error) {
        alert('Failed to fetch contacts: ' + error);
    });
};

function updateData() {

    var inputText = document.getElementById("inputUdate").value;
    console.log(inputText)
    console.log(fieldName)
    console.log(credsData)
    force.update(
        'User', {
            "id": credsData,
            [fieldName]: inputText
        },
        function successUpdate() {
            force.login(
                function() {
                    console.log('Auth succeeded');
                },
                function(error) {
                    console.log('Auth failed: ' + error);
                }
            );
            alert('Success');
        },
        function errorUpdate(error) {
            alert('errorUpdate' + error);
        }
    )
}

function logout() {
    cordova.require("com.salesforce.plugin.sfaccountmanager").logout();
}