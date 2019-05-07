$(document).ready(function(){
  $("#start").on("click",init);
  $("#btnLeft").on("click",leftKeyDown);
  $("#btnRight").on("click",rightKeyDown);
  $("#btnUp").on("click",upKeyDown);
  $("#btnDown").on("click",downKeyDown);
  $(window).on("keydown",keyContrller);
});
//console.log(table_cell_value[0][00]);
//console.log(table_cell_value[10][22]);

var start_click=0;
var table_cell_value="";
var test='';
var parentKey='';


//initial a table 4*4 with id [0][0]->[3][3];
function init(){
  table_cell_value = new Array
 if (start_click==0) {
   for ( var x ='0'; x < "4"; x++) {
     $("#playBoard").append('<tr class ="px-auto row'+x+'"> </tr>')
       for ( var y = '0'; y < "4"; y++) {
         var id =""+ x + y;
         table_cell_value.push({[id] : 0})
         $(".row"+x).append('<td class="mx-auto text-center" id='+ id + "> </td>")
        // $("#playBoard td").css({"background-color":"#FFCECE","width":"40px","height":"40px"})
       }
     }
 var idCase=newNumberTwo();
 var parentKey1=parentKey;
 var idCase2=newNumberTwo();
  var parentKey2=parentKey;
 if (idCase2==idCase) {
    idCase=newNumberTwo();
    parentKey1=parentKey;
 }
 table_cell_value[parentKey1]={[idCase]:2};
 table_cell_value[parentKey2]={[idCase2]:2};
 $("#"+idCase).append(""+table_cell_value[parentKey1][idCase]);
 $("#"+idCase2).append("2");
 start_click=1;
 testArray();
 console.log("table_cell_value:"+table_cell_value);
 //$("#btnLeft").click(leftKeyDown(event));
 }
}

function newNumberTwo(){
  var x=Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  var y=Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  var id=""+x+y;
  findParentKey(id);
  return id;
  }

function keyContrller(event){
  if (event.keyCode==38) {
      $("#btnUp").trigger("click");
  }
  else if (event.keyCode==40) {
      $("#btnDown").trigger("click");
  }
  else if (event.keyCode==37) {
      $("#btnLeft").trigger("click");
  }
  else if (event.keyCode==39) {
      $("#btnRight").trigger("click");
  }
}

function upKeyDown(event){
      var col=3;
      while (col>=0) {
        var line=3;
          while (line>=1) {
              var idDown=""+line+col;
              var idUp=""+(line-1)+col;
              findParentKey(idDown);
              var keyDown=parentKey;
              findParentKey(idUp);
              var keyUp=parentKey;
              var valueDown=table_cell_value[keyDown][idDown];
              var valueUp=table_cell_value[keyUp][idUp];
              console.log(idDown+":"+valueDown);
              console.log(idUp+":"+valueUp);
              if (valueUp==0) {
                table_cell_value[keyUp]={[idUp]:valueDown}
                table_cell_value[keyDown]={[idDown]:0}
                if (valueDown!=0) {
                    $("#"+idUp).empty();
                  $("#"+idUp).append(""+table_cell_value[keyUp][idUp]);
                  $("#"+idDown).empty();
                  $("#"+idDown).append("");
                }
              }
              else if (valueUp!=0 && valueUp==valueDown) {
                table_cell_value[keyUp]={[idUp]:(valueUp+valueDown)}
                table_cell_value[keyDown]={[idDown]:0}
                $("#"+idUp).empty();
              $("#"+idUp).append(""+table_cell_value[keyUp][idUp]);
              $("#"+idDown).empty();
              $("#"+idDown).append("");
            }
              line--;
            }
          col--;
      }
      var id=newNumberTwo();
      findParentKey(id);
      while(table_cell_value[parentKey][id]!=0) {
         id=newNumberTwo();
         findParentKey(id);
      }
      table_cell_value[parentKey]={[id]:2};
      $("#"+id).append("2");
      testArray();

}
function downKeyDown(){
      var col=3;
      while (col>=0) {
        var line=0;
          while (line<3) {
              var idUp=""+line+col;
              var idDown=""+(line+1)+col;
              findParentKey(idUp);
              var keyUp=parentKey;
              findParentKey(idDown);
              var keyDown=parentKey;
              var valueUp=table_cell_value[keyUp][idUp];
              var valueDown=table_cell_value[keyDown][idDown];
              console.log(idDown+":"+valueDown);
              console.log(idUp+":"+valueUp);
              if (valueDown==0) {
                table_cell_value[keyDown]={[idDown]:valueUp}
                table_cell_value[keyUp]={[idUp]:0}
                if (valueUp!=0) {
                    $("#"+idDown).empty();
                  $("#"+idDown).append(""+table_cell_value[keyDown][idDown]);
                  $("#"+idUp).empty();
                  $("#"+idUp).append("");
                }
              }
              else if (valueDown!=0 && valueUp==valueDown) {
                table_cell_value[keyDown]={[idDown]:(valueUp+valueDown)}
                table_cell_value[keyUp]={[idUp]:0}
                $("#"+idDown).empty();
              $("#"+idDown).append(""+table_cell_value[keyDown][idDown]);
              $("#"+idUp).empty();
              $("#"+idUp).append("");
            }
              line++;
            }
          col--;
      }
      var id=newNumberTwo();
      findParentKey(id);
      while(table_cell_value[parentKey][id]!=0) {
         id=newNumberTwo();
         findParentKey(id);
      }
      table_cell_value[parentKey]={[id]:2};
      $("#"+id).append("2");
      testArray();

}

function leftKeyDown(event){
      var line=3;
      while (line>=0) {
        var col=3;
          while (col>=1) {
              var idRight=""+line+col;
              var idLeft=""+line+(col-1);
              findParentKey(idRight);
              var keyRight=parentKey;
              findParentKey(idLeft);
              var keyLeft=parentKey;
              var valueLeft=table_cell_value[keyLeft][idLeft];
              var valueRight=table_cell_value[keyRight][idRight];
              if (valueLeft==0) {
                table_cell_value[keyLeft]={[idLeft]:valueRight}
                table_cell_value[keyRight]={[idRight]:0}
                if (valueRight!=0) {
                    $("#"+idLeft).empty();
                  $("#"+idLeft).append(""+table_cell_value[keyLeft][idLeft]);
                  $("#"+idRight).empty();
                  $("#"+idRight).append("");
                }

              }
              else if (valueLeft!=0 && valueLeft==valueRight) {
                  table_cell_value[keyLeft]={[idLeft]:(valueRight+valueLeft)}
                table_cell_value[keyRight]={[idRight]:0}
                $("#"+idLeft).empty();
              $("#"+idLeft).append(""+table_cell_value[keyLeft][idLeft]);
              $("#"+idRight).empty();
              $("#"+idRight).append("");
              }
              col--;
            }
          line--;
      }
      var id=newNumberTwo();
      findParentKey(id);
      while(table_cell_value[parentKey][id]!=0) {
         id=newNumberTwo();
         findParentKey(id);
      }
      table_cell_value[parentKey]={[id]:2};
      $("#"+id).append("2");
      testArray();
    }


function rightKeyDown(event){
      var line=3;
      while (line>=0) {
        var col=0;
          while (col<3) {
              var idLeft=""+line+col;
              var idRight=""+line+(col+1);
              findParentKey(idRight);
              var keyRight=parentKey;
              findParentKey(idLeft);
              var keyLeft=parentKey;
              var valueLeft=table_cell_value[keyLeft][idLeft];
              var valueRight=table_cell_value[keyRight][idRight];
              console.log(idRight+":"+valueRight);
              console.log(idLeft+":"+valueLeft);
              if (valueRight==0) {
                table_cell_value[keyRight]={[idRight]:valueLeft}
                table_cell_value[keyLeft]={[idLeft]:0}
                if (valueLeft!=0) {
                    $("#"+idRight).empty();
                  $("#"+idRight).append(""+table_cell_value[keyRight][idRight]);
                  $("#"+idLeft).empty();
                  $("#"+idLeft).append("");
                }
              }
              else if (valueRight!=0 && valueRight==valueLeft) {
                table_cell_value[keyRight]={[idRight]:(valueRight+valueLeft)}
                table_cell_value[keyLeft]={[idLeft]:0}
                $("#"+idRight).empty();
              $("#"+idRight).append(""+table_cell_value[keyRight][idRight]);
              $("#"+idLeft).empty();
              $("#"+idLeft).append("");
            }
              col++;
            }
          line--;
      }
      var id=newNumberTwo();
      findParentKey(id);
      while(table_cell_value[parentKey][id]!=0) {
         id=newNumberTwo();
         findParentKey(id);
      }
      table_cell_value[parentKey]={[id]:2};
      $("#"+id).append("2");
      testArray();
}



function findParentKey(id){
if(id=="00") {
  parentKey=0;
}
else if(id=="01"){
  parentKey=1;
}
else if(id=="02") {
  parentKey=2;
}
else if(id=="03"){
  parentKey=3;
}
else if(id=="10") {
  parentKey=4;
}
else if(id=="11"){
  parentKey=5;
}
else if(id=="12") {
  parentKey=6;
}
else if(id=="13") {
  parentKey=7;
}
else if(id=="20"){
  parentKey=8;
}
else if(id=="21") {
  parentKey=9;
}
else if(id=="22"){
  parentKey=10;
}
else if(id=="23") {
  parentKey=11;
}
else if(id=="30") {
  parentKey=12;
}
else if(id=="31"){
  parentKey=13;
}
else if(id=="32") {
  parentKey=14;
}
else if(id=="33") {
  parentKey=15;
}
return parentKey;
}

function testArray(){
  var iterator =table_cell_value .values();
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
}
