// global variables start
const $onClickRoll5 = $('.onClickRoll5');  
const $onClickRoll4 = $('.onClickRoll4');
const $onClickRoll3 = $('.onClickRoll3');  
const $onClickRoll2 = $('.onClickRoll2');
const $onClickRoll1 = $('.onClickRoll1');
// global variables end

//create a random number each time function is called.
function grabRandomNum() {
  let randomNum = Math.floor(Math.random() * 6) + 1; //number from 1-6
  return randomNum;
}
//sets innerHTML to new number.
$onClickRoll5.click(function(){
    $('.dice-butn5').html('<h4 class="rolled-title">You rolled:</h4><button>' + grabRandomNum() + '</button><button>' + grabRandomNum() + '</button><button>' + grabRandomNum() + '</button><button>' + grabRandomNum() + '</button><button>' + grabRandomNum() + '</button>');
});

$onClickRoll4.click(function(){
    $('.dice-butn4').html('<h4 class="rolled-title">You rolled:</h4><button>' + grabRandomNum() + '</button><button>' + grabRandomNum() + '</button><button>' + grabRandomNum() + '</button><button>' + grabRandomNum() + '</button>');
  });

$onClickRoll3.click(function(){
    $('.dice-butn3').html('<h4 class="rolled-title">You rolled:</h4><button>' + grabRandomNum() + '</button><button>' + grabRandomNum() + '</button><button>' + grabRandomNum() + '</button>');
});

$onClickRoll2.click(function(){
    $('.dice-butn2').html('<h4 class="rolled-title">You rolled:</h4><button>' + grabRandomNum() + '</button><button>' + grabRandomNum() + '</button>');
  });

$onClickRoll1.click(function(){
    $('.dice-butn1').html('<h4 class="rolled-title">You rolled:</h4><button>' + grabRandomNum() + '</button>');
});
