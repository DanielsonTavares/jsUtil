// Função para apresentar o conteúdo de uma lista de forma amigável.
function displayArrayObjects(arrayObjects) {
  var
     len = arrayObjects.length,
     text = '',
     colunas = 10,
     i = 0;

  for (i = 0; i < len; i++) {
    if ( (i>0) && (i%colunas) === 0){
      text += '<br/>';
    }
    text += arrayObjects[i] + ' ';
  }

  return text;
}


// Função para a apresentar a hora.
function horas() {
  var
    now = new Date(),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds(),
    cdate = '';

  if ( hours <=9 ) hours = '0' + hours;

  if ( minutes<=9 ) minutes = '0' + minutes;

  if ( seconds<=9 ) seconds = '0' + seconds;

  cdate = hours + ':' + minutes + ':' + seconds;

  return cdate;

}


/* fnFmtParametros(<str>)
   Monta uma string formatada para ser utilizada no insert,
   apartir de parâmetros de uma procedure/function Oracle.

   Parâmetros: <str> String a ser formatada.
   Retorno:
   
*/
function fnFmtParametros( str ) {
  var
    //obj = document.getElementById( nmObj ),
    //str = obj.value,
    sString = '',
    aryParam = [],
    i = 0,
    pos = 0;

  str = str.trim();

  str = str.replace( '\n', '' );

  //Separando a string a cada vírgula e guardando em um vetor.
  aryParam = str.split( ',' );

  for ( i = 0; i < aryParam.length; i++ ) {

      aryParam[i] = aryParam[i].trim();

      pos = aryParam[i].search( ' ' );

      sString += '\'' + aryParam[i].substring( 0, pos ) + ':\'|| trim(' +
          aryParam[i].substring( 0, pos ) + ')||\'&\'||';
  }
  //obj.value = sString;
  return sString;
}
