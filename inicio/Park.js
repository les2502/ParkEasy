// Iniciar Sesión
var provider = new firebase.auth.GoogleAuthProvider();

$('root')
firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
