$(document).ready(function(){
  console.log("script included!");

  $('li').click(function(){
    $(this).remove();
  });

  $('p').click(function(){
    $('img').toggle("slow", function(){
     
    });
  });
 //  $('p').toggle(
  // $('p').click(function(){
  //  $('img').remove();
  // });

 //  $('p').dblclick(function(){
 //    $('img').add();
 //  });
 //  )

});

// $(document).ready(function(){
//  $('li').click(function(){
//    $(this).remove();
//  });
// });

// $(document).ready(function(){
//  $('p').click(function(){
//    $('img').remove();
//  });
// });