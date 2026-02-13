function LoginForm() {
  /* Todo : Créez la variable d’état pour stocker dans un objet le mail et le mot de passe et initialisez-la */
  
  /* Todo : Créez et codez la fonction déclenchée à la modification du mail ou du mot de passe et celle
déclenchée à la soumission du formulaire (affichage dans la console de l’objet complet)*/
  return (
    <form>
      <input name="email" />
      <input name="password" type="password" />
      <button type="submit">Valider</button>
    </form>
  );
}
export default LoginForm;