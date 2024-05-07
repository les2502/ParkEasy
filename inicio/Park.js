// Iniciar Sesión
var provider = new firebase.auth.GoogleAuthProvider();

$('')
firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
