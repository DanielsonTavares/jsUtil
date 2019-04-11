/* Função para apresentar o conteúdo de uma lista de forma amigável.
   arrayObjects: Lista contendo os itens.
   colunas: Número de colunas a serem apresentadas
   Ex.: 
   arrayObjects = 
   [   "teste a"
    ,  "teste b"
	  ,  "teste c"
	  ,  "teste d"
	  ,  "teste e"
	  ,  "teste f"
	  ,  "teste g"
	  ,  "teste h"
	  ,  "teste i"
	  ,  "teste j"];
    
   colunas = 3
*/
function displayArrayObjects(arrayObjects, colunas) {
  var
     len = arrayObjects.length,
     text = '',
     //colunas = 3,
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
   
   Formato a ser passado no parametro <str>:
     pscdfun char,
     pscdpat char,
     psnrisc char,
     psnrpla char,
     psdtmesref char,
     pddtpvtpag date,
     prsErro out varchar2;

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
