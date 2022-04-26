$(document).ready(function(){

  // MODAL
  var modalText = {
    roambi: {
      title: 'PutSwap',
      tag: '',
      detail: 'PUTSWAP is a Decentralized Finance platform (DEFI) cryptocurrencies. Is an exchange evolved from uniswap and pancakeswap, with orders and charts',
    },
    walker: {
      title: 'Smart girl',
      tag: 'NFT marketing',
      detail: 'This portfolio continas the images for our past NFT project works. The main object for NFT is designed to have different multiple traiys layes dynamically assigned through bot.',
    },
    powur: {
      title: 'Cowboy',
      tag: 'NFT marketing',
      detail: 'This portfolio continas the images for our past NFT project works. The main object for NFT is designed to have different multiple traiys layes dynamically assigned through bot.',
      link: 'http://www.powur.com/with/42'
    },
    mystand: {
      title: 'Fork Pancakeswap',
      tag: '',
      detail: 'PancakeSwap Clone Script is a leading DeFi DEX Script built on Binance Smart Chain(BSC) that works similar to the pancakeswap exchange helps users trade between BEP20 tokens. Pancakeswap clone incorporates with many other features like NFT, Lottery, Yield Farming, Exchange, IFO and Voting that let you earn reward.',
    },
    themall: {
      title: 'Tield farming platform on Polygon network',
      tag: '',
      detail: 'The rapid growth and increased popularity of the DeFi space are now being fuelled by investors looking to better leverage their assets and maximise their yields from their latent assets. In this guide, we explore the top yield farms on Polygon and their yields.',
    },
    tron: {
      title: 'Tield farming platform on Polygon network',
      tag: '',
      detail: 'TRON is a decentralized, open-source blockchain-based operating system with smart contract functionality, proof-of-stake principles as its consensus algorithm and a cryptocurrency native to the system, known as Tronix.',
    },
    react: {
      title: 'React JS Developer',
      tag: '',
      detail: 'Viemieten mit Lumido & Renix Office Management & Processing work',
    },
    vue: {
      title: 'Vue JS Developer',
      tag: '',
      detail: 'Vela Lang Home & Envy AterVininingside & Things of Internet in house',
    },
    angular: {
      title: 'Angular JS Developer',
      tag: '',
      detail: 'PMine Exchange & Nexux property Management',
    },
    laravel: {
      title: 'Laravel Backend Developer',
      tag: '',
      detail: 'Virtual Life Effect & Health Secure & Commercial Worker',
    },
    node: {
      title: 'Node Backend Developer',
      tag: '',
      detail: 'Customer Servie System & Remote Device Management & People Uni',
    },
  };

  $('#gallery .button').on('click', function(){
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
      slideWidth = 700,
      threshold = slideWidth/3,
      dragStart, 
      dragEnd;

  setDimensions();

  $('#next').click(function(){ shiftSlide(-1) })
  $('#prev').click(function(){ shiftSlide(1) })

  carousel.on('mousedown', function(){
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function(){
      dragEnd = event.pageX;
      $(this).css('transform','translateX('+ dragPos() +'px)');
    });
    $(document).on('mouseup', function(){
      if (dragPos() > threshold) { return shiftSlide(1) }
      if (dragPos() < -threshold) { return shiftSlide(-1) }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1)
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup')
    carousel.off('mousemove')
            .addClass('transition')
            .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
    setTimeout(function(){
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition')
      carousel.css('transform','translateX(0px)'); 
    },700)
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link) $('#modal .button').addClass('visible')
                                               .parent()
                                               .attr('href', modalText[id].link)

    $.each($('#modal li'), function(index, value ) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background: "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
              
    });
  }
})
