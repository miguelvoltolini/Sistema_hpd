
// Preenche as opções de dias
var selectDia = document.getElementById("dia");
for (var dia = 1; dia <= 31; dia++) {
  var option = document.createElement("option");
  option.value = dia;
  option.text = dia;
  selectDia.appendChild(option);
}

// Preenche as opções de meses
var selectMes = document.getElementById("mes");
var meses = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];
for (var mes = 0; mes < meses.length; mes++) {
  var option = document.createElement("option");
  option.value = mes + 1;
  option.text = meses[mes];
  selectMes.appendChild(option);
}

// Preenche as opções de anos (inverter ordem)
var selectAno = document.getElementById("ano");
var anoAtual = new Date().getFullYear();
for (var ano = anoAtual; ano >= 1900; ano--) {
  var option = document.createElement("option");
  option.value = ano;
  option.text = ano;
  selectAno.appendChild(option);
}