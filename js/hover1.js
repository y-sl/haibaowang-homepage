 var mySwiper1 = new Swiper ('#swiper1', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            autoplay: {
                delay:2000,
            },
            loop: true,
            pagination: {
                 el: '.swiper-pagination',
                 clickable :true,
                },
            effect : "slide",
        })
    var mySwiper2 = new Swiper ('#swiper2', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            autoplay: {
                delay:2000,
            },
            loop: true,
            pagination: {
                 el: '.swiper-pagination',
                 clickable :true,
                },
            effect : "slide",
        })
     var mySwiper3 = new Swiper ('#swiper3', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            autoplay: {
                delay:2000,
            },
            loop: true,
            pagination: {
                 el: '.swiper-pagination',
                 clickable :true,
                },
            effect : "slide",
        })
     var mySwiper4 = new Swiper ('#swiper4', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            autoplay: {
                delay:2000,
            },
            loop: true,
            slidesPerView : 2,
            slidesPerGroup : 1,
            pagination: {
                 el: '.swiper-pagination',
                 clickable :true,
                },
            effect : "slide",
        })
     var mySwiper5 = new Swiper ('#swiper5', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            autoplay: {
                delay:2000,
            },
            loop: true,
            slidesPerView : 2,
            slidesPerGroup : 1,
            pagination: {
                 el: '.swiper-pagination',
                 clickable :true,
                },
            effect : "slide",
        })
     var mySwiper6 = new Swiper ('#swiper6', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            autoplay: {
                delay:2000,
            },
            loop: true,
            pagination: {
                 el: '.swiper-pagination',
                 clickable :true,
                },
            effect : "slide",
        })
     var mySwiper7 = new Swiper ('#swiper7', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            autoplay: {
                delay:2000,
            },
            loop: true,
            slidesPerView : 2,
            slidesPerGroup : 1,
            pagination: {
                 el: '.swiper-pagination',
                 clickable :true,
                },
            effect : "slide",
        })
    var header=document.getElementById('header'),
        search=header.getElementsByClassName('search')[0],
        up=header.getElementsByClassName('up')[0],
        down=header.getElementsByClassName('down')[0],
        sNav=header.getElementsByClassName('second-nav')[0],
        more=header.getElementsByClassName('more')[0],
        aMore=more.getElementsByTagName('a')[0],
        Bool=false;
        search.onclick=function(){
            if(!Bool){
                this.className='cha';
                sNav.style.display="block";
                sNav.style.opacity=1;
                
            }else{
                this.className=" sou";
                sNav.style.display="none";
                console.log(2);
                
            }
            Bool=!Bool;
        };
        more.onmouseover=function(){
            up.style.top="-50px";
            down.style.top="0px";
        };
        aMore.onmouseleave=function(){
            up.style.top="0";
            down.style.top="50px";
        };
        down.onmouseover=function(){
             up.style.top="-50px";
             down.style.top="0px";
        };
        var plan=document.getElementsByClassName('plan')[0];
        var aLiii = plan.getElementsByTagName("li");//获取所有按钮
        var pt1=plan.getElementsByClassName('p-tabmain')[0];
        var ptt1 = pt1.getElementsByClassName("p-tabitem");//获取所有盒子
        var length = aLiii.length;
        var index = 0;
        for(var j=0; j<length; j++){
            aLiii[j].goudan = j;
            aLiii[j].onmouseover=function(){
                for(var j=0; j<length; j++){
                    ptt1[index].style.display="none"
                    index = this.goudan;
                    ptt1[index].style.display = 'block';
                }

            };
        }
        var plan1=document.getElementsByClassName('plan')[1];
        var aLii = plan1.getElementsByTagName("li");//获取所有按钮
        var pt11=plan1.getElementsByClassName('p-tabmain')[1];
        var pttt = plan1.getElementsByClassName("p-tabitem");//获取所有盒子
        var length = aLii.length;
        var index = 0;
        for(let i=0; i<length; i++){
            aLii[i].goudan = i;
            aLii[i].onmouseover=function(){
                for(var i=0; i<length; i++){
                    pttt[index].style.display="none"
                    index = this.goudan;
                    pttt[index].style.display = 'block';
                };

            }
        }
        var plan2=document.getElementsByClassName('plan')[2];
        var aLi = plan2.getElementsByTagName("li");//获取所有按钮
        var pt1=plan2.getElementsByClassName('p-tabmain')[2];
        var ptt = plan2.getElementsByClassName("p-tabitem");//获取所有盒子
        var length = aLi.length;
        var index = 0;
        for(var i=0; i<length; i++){
            aLi[i].goudan = i;
            aLi[i].onmouseover=function(){
                for(var i=0; i<length; i++){
                    ptt[index].style.display="none"
                    index = this.goudan;
                    ptt[index].style.display = 'block';
                }

            };
        }
        var footer=document.getElementById('footer');
        var wechat=footer.getElementsByClassName('wechat')[0];
        var aLi = wechat.getElementsByTagName("li");//获取所有按钮
        var uimg = wechat.getElementsByClassName('uimg');
        // var ptt = plan2.getElementsByClassName("p-tabitem");//获取所有盒子
        var length = aLi.length;
        var index = 0;
        for(var i=0; i<length; i++){
            aLi[i].goudan = i;
            aLi[i].onmouseover=function(){
                for(var i=0; i<length; i++){
                    uimg[index].style.display="none"
                    index = this.goudan;
                    uimg[index].style.display = 'block';
                }

            };
        }
        var footer=document.getElementById('footer');
        var wechatt=footer.getElementsByClassName('wechat')[1];
        var aLii= wechatt.getElementsByTagName("li");//获取所有按钮
        var uimgg = wechatt.getElementsByClassName('uimg');
        // var ptt = plan2.getElementsByClassName("p-tabitem");//获取所有盒子
        var length = aLi.length;
        var index = 0;
        for(var i=0; i<length; i++){
            aLii[i].goudan = i;
            aLii[i].onmouseover=function(){
                for(var i=0; i<length; i++){
                    uimgg[index].style.display="none"
                    index = this.goudan;
                    uimgg[index].style.display = 'block';
                }

            };
        }
