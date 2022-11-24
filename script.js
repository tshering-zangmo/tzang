$(document).ready(function(){
 $("#hide").click(function(){
    $(".blog-post1").hide();
 });
 $("#show").click(function(){
    $(".blog-post1").show();
 });
});


$(document).ready(function(){
    $("#remove").click(function(){
       $(".blog-post2").remove();
    });
   });


$(document).ready(function(){

$("#opps").mouseleave(function(){

alert("lets learn more about myself!");

});
});


$(document).ready(function(){

$("#tshering").dblclick(function(){

    $(this).hide();

});


});

$(document).ready(function(){
    $("button").click(function(){
      $("#div1").fadeIn("fast");
      $("#div2").fadeIn("slow");
      $("#div3").fadeIn(3000);
    });
  });


  $(document).ready(function(){
    $("button").click(function(){
      $("#div1").fadeOut();
      $("#div2").fadeOut("slow");
      $("#div3").fadeOut();
    });
  });

  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideUp("slow")
      $("#cool").slideUp("slow");
    });
  });


  $(document).ready(function(){
    $("button").click(function(){
      $("#aniimg").animate({
        left:'250px',
        opacity:'0.5',
        height:'150px',
        width:'200px',
      
    });
    });
  });

  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown(5000);
    });
    $("#stop").click(function(){
      $("#panel").stop();
    });
  });

  $(document).ready(function(){
    $(".bt").click(function(){
      $("#pppp").hide("slow", function(){
        alert("The paragraph is now hidden");
      });
    });
  });

  $(document).ready(function(){
    $(".sun").click(function(){
      $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
    });
  });


  $(document).ready(function(){
    $("#btn1").click(function(){
      alert("Text: " + $("#hi").text());
    });
    $("#btn2").click(function(){
      alert("HTML: " + $("#hi").html());
    });
  });


  $(document).ready(function(){
    $("#bone1").click(function(){
      $("#soon1").text("I do believe it's time for another adventure.");
    });
    $("#bone2").click(function(){
      $("#soon2").html("<b>I do believe it's time for another adventure.<b>");
    });
    $("#bone3").click(function(){
      $("#soon3").val("Adventure is out there.");
    });
  });


  $(document).ready(function(){
    $("#yoga1").click(function(){
      $("p").append(" <b>Appended text</b>.");
    });
  
    $("#yoga2").click(function(){
      $("ol").append("<li>Appended item</li>");
    });
  });


  $(document).ready(function(){
    $("button").click(function(){
      $("h2, h3, p").addClass("blue");
      $("div").addClass("important");
    });
  });


  $(document).ready(function(){
    $("button").click(function(){
      alert("Background color = " + $("p").css("background-color"));
    });
  });


  $(document).ready(function(){
    $(".bts").click(function(){
      var txt = "";
      txt += "Width of div: " + $("#di").width() + "</br>";
      txt += "Height of div: " + $("#di").height();
      $("#di").html(txt);
    });
  });