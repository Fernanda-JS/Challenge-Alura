let listFriends = [];
let friends = document.getElementById("list-friends");

function includeFriend() {
  let fieldName = document.getElementById("friend").value;

  if (!this.validatedFieldName(fieldName)) {
    return;
  }

  listFriends.push(fieldName);

  friends.innerHTML = listFriends.map(friend =>
    `<li style='list-style: none; margin: 10px;'>
            ${friend}
        </li>`).join('');
}

function validatedFieldName(fieldName) {
  if (fieldName === '' || fieldName == null || fieldName == undefined) {
    alert("O nome deve ser informado.");
    return false;
  }

  return true;
}

function validatedSortName() {
  if (listFriends.length === 0) {
    alert("Nenhum amigo adicionado.");
    return;
  }

  const nomeSorteado = Math.floor(Math.random() * listFriends.length);
  alert("O nome sorteado foi: " + listFriends[nomeSorteado]);
}

function deleteList() {
  listFriends = [];
  friends.innerHTML = '';
}
