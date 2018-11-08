function enviardados(){
  
	if(document.form.login.value=="" || document.dados.login.value.length < 6)
	{
	alert( "Preencha campo Login corretamente!" );
	document.form.login.focus();
	return false;
	}
	
	if(document.form.senha.value=="" || document.dados.senha.value.length < 6)
	{
	alert( "Preencha campo Senha corretamente!" );
	document.form.senha.focus();
	return false;
	}
	return true
}
if(enviardados()==true){
	function abrirOutraPag() {
		window.location.href = "index.html";
	}
}