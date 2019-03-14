export const addZeros = (valor) => {

  // Cast number
  let num = Number(valor);

  // Se não houver decimal, ou o decimal tiver menos de 2 dígitos, toFixed
  if (String(num).split(".").length < 2 || String(num).split(".")[1].length<=2 ){
    num = num.toFixed(2);
  }
  
  return num.toString().replace('.', ',');

};

export function getMoney( str )
{
  return parseInt( str.replace(/[\D]+/g,'') );
}

export function formatReal( int )
{
  var tmp = int+'';
  tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
  if( tmp.length > 6 )
    tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

  return tmp;
}
