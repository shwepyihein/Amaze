$(document).ready(function(){
    $("a[href^='#']").on("click",function(e){
        var id=$(this).attr("href");
        console.log(id)
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$(id).offset().top-120
        })                         
    })
    $("a[href='#benefits']").on("click",function(e){
        var id=$(this).attr("href");
        console.log(id)
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$(id).offset().top-76
        })                         
    })
    $(document).scroll(function(){
        var st = $(this).scrollTop();
    console.log(st)
        $('section').each(function() {
            if(st > (this.offsetTop+75) && st <= (this.offsetTop+75)+$(this).height()){                    
                var id = $(this).attr('id');
                console.log(id)
                $('a[href="#'+id+'"]').addClass('underline');
            }else{
                var id = $(this).attr('id');
                $('a[href="#'+id+'"]').removeClass('underline');   
            }   
        });
    
    });

})