import { useState } from "react";

function LoginForm() {
  /* Todo : Créez la variable d’état pour stocker dans un objet le mail et le mot de passe et initialisez-la */
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  /* Todo : Créez et codez la fonction déclenchée à la modification du mail ou du mot de passe et celle
déclenchée à la soumission du formulaire (affichage dans la console de l’objet complet)*/
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={formData.email} onChange={handleChange} />
      <input name="password" type="password" value={formData.password} onChange={handleChange} />
      <button type="submit">Valider</button>
    </form>
  );
}
export default LoginForm;