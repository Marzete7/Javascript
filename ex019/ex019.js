var  vidas  =  0

function  adicionarVida ( )  {   //Cogumelo
    vidas ++
    DesenharVidas ( )
}
function  perderVida ( )  {  // Bomba
    vidas --
    DesenharVidas ( )
}
function  DesenharVidas ( )  {
    if  ( vidas  <=  0 )  {
        documento . getElementById ( "vidas" ) . innerHTML  =  '<img src="game-over.">'
    }  else  {
        documento . getElementById ( "vidas" ) . innerHTML  =  '<img src="mario.webp" class="mario">'
        for  ( var  i  =  1 ;  i  <=  vidas ;  i ++ )  {
            documento . getElementById ( "vidas" ) . innerHTML  +=  "<img src='coracao.jpg' class='coracao'>"
        }
    }
}