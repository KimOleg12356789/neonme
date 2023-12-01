$(document).ready(function(){

  jQuery(function($) {
  //play video btn
  $(".position-relative video").removeAttr("controls"); //hide controls by default
  //on clicking play button
  $(".video-section").each(function() {
    $(".play-btn").click(function() {
      var video = $(this)
        .closest(".position-relative")
        .find("video")
        .get(0);
      video.play();
      video.controls = true;
      $(this).css("visibility", "hidden");
      return false;
    });

    //when video is paused
    $(this)
      .find("video")
      .click(function() {
        var video = $(this).get(0);
        video.pause();
        video.controls = false;
        $(this)
          .siblings(".play-btn")
          .css("visibility", "visible");
        return false;
      });

    //when video has ended
    $(this)
      .find("video")
      .on("ended", function() {
        $(this).get(0).controls = false;
        $(this)
          .siblings(".play-btn")
          .css("visibility", "visible");
        $(this)
          .get(0)
          .load();
      });
  });
 });

	      $(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.accordion_content').not($next).slideUp().parent().removeClass('open');
    };
  } 

  var accordion = new Accordion($('#accordion'), false);
});


        $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
        $('.header-fixed').addClass("sticky");
        }
        else{
        $('.header-fixed').removeClass("sticky");
        }
        });

$('.one_sl').slick({
        infinite: true,
        speed: 300,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            }
          }
      ]
  });




});





/**
 *  Read More JS
 */
 const ReadMore = (() => {
  let s;

  return {

      settings() {
          return {
              content: document.querySelectorAll('.js-read-more'),
              originalContentArr: [],
              truncatedContentArr: [],
              moreLink: "<span>More..</span>",
              lessLink: "<span>Close</span></i>",
          }
      },

      init() {
          s = this.settings();
          this.bindEvents();
      },

      bindEvents() {
          ReadMore.truncateText();
      },

      /**
       * Count Words
       * Helper to handle word count.
       * @param {string} str - Target content string.
       */
      countWords(str) {
          return str.split(/\s+/).length;
      },

      /**
       * Ellpise Content
       * @param {string} str - content string.
       * @param {number} wordsNum - Number of words to show before truncation.
       */
      ellipseContent(str, wordsNum) {
          return str.split(/\s+/).slice(0, wordsNum).join(' ') + '...';
      },

      /**
       * Truncate Text
       * Truncate and ellipses contented content
       * based on specified word count.
       * Calls createLink() and handleClick() methods.
       */
      truncateText() {

          for (let i = 0; i < s.content.length; i++) {
              //console.log(s.content)
              const originalContent = s.content[i].innerHTML;
              const numberOfWords = s.content[i].dataset.rmWords;
              const truncateContent = ReadMore.ellipseContent(originalContent, numberOfWords);
              const originalContentWords = ReadMore.countWords(originalContent);

              s.originalContentArr.push(originalContent);
              s.truncatedContentArr.push(truncateContent);

              if (numberOfWords < originalContentWords) {
                  s.content[i].innerHTML = s.truncatedContentArr[i];
                  let self = i;
                  ReadMore.createLink(self)
              }
          }
          ReadMore.handleClick(s.content);
      },

      /**
       * Create Link
       * Creates and Inserts Read More Link
       * @param {number} index - index reference of looped item
       */
      createLink(index) {
          const linkWrap = document.createElement('span');

          linkWrap.className = 'read-more__link-wrap';

          linkWrap.innerHTML = `<a id="read-more_${index}" class="read-more__link read-more__link2" style="cursor:pointer;">${s.moreLink}</a>`;

          // Inset created link
          s.content[index].parentNode.insertBefore(linkWrap, s.content[index].nextSibling);

      },

      /**
       * Handle Click
       * Toggle Click eve
       */
      handleClick(el) {
          const readMoreLink = document.querySelectorAll('.read-more__link');

          for (let j = 0, l = readMoreLink.length; j < l; j++) {

              readMoreLink[j].addEventListener('click', function () {

                  const moreLinkID = this.getAttribute('id');
                  let index = moreLinkID.split('_')[1];

                  el[index].classList.toggle('is-expanded');

                  if (this.dataset.clicked !== 'true') {
                      el[index].innerHTML = s.originalContentArr[index];
                      this.innerHTML = s.lessLink;
                      this.dataset.clicked = true;
                  } else {
                      el[index].innerHTML = s.truncatedContentArr[index];
                      this.innerHTML = s.moreLink;
                      this.dataset.clicked = false;
                  }
              });
          }
      },

      /**
       * Open All
       * Method to expand all instances on the page.
       */
      openAll() {
          const instances = document.querySelectorAll('.read-more__link');
          for (let i = 0; i < instances.length; i++) {
              content[i].innerHTML = s.truncatedContentArr[i];
              instances[i].innerHTML = s.moreLink;
          }
      }
  }
})();

ReadMore.init()




