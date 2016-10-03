/*
  Please add all Javascript code to this file.
*/
var App = {};

App.getSource1Data = function (){
  var testData1 = {
  'sourceTitle': 'Fake Source 1',
  'article': [
    {
    'url': 'www.google.com',
    'articleName': "Things and stuff",
    'articleCategory': "Miscellaneous",
    'imageSource': 'http://ichef.bbci.co.uk/news/976/mcs/media/images/82682000/jpg/_82682433_thinkstockphotos-481558803.jpg',
    'impressions': 'N/A',
    'content': 'quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah.'
  }, 
  {
    'url': 'www.theringer.com',
    'articleName': "Best stuff ever",
    'articleCategory': "Sports",
    'imageSource': 'http://proprofs.com/quiz-school/topic_images/p18lq7ediepl816p6s04171vo23.jpg',
    'impressions': '122',
    'content': 'quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah.'
  }, 
  {
    'url': 'www.github.com',
    'articleName': "Stupid crap",
    'articleCategory': "Business",
    'imageSource': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR-X1-xY9Gn4mAZVoxVn737tVkM20vx28WRymMdHWJ6yA3lALua',
    'impressions': '-6',
    'content': 'quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah.'
  }],
  }
  return testData1
}

App.getSource2Data = function (){
  var testData2 = {
  'sourceTitle': 'Fake Source 2',
  'article': [
    {
    'url': 'www.pitchfork.com',
    'articleName': "Strawberries are wicked tasty",
    'articleCategory': "Fruit",
    'imageSource': 'http://www.thepickwickplace.com/Images/strawberry.jpg',
    'impressions': '9982',
    'content': 'quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah.'
  }, 
  {
    'url': 'www.residentadvisor.com',
    'articleName': "Why the Seahawks will win the Super Bowl",
    'articleCategory': "Sports",
    'imageSource': 'http://static.seattletimes.com/wp-content/uploads/2015/07/Seahawks-image.jpg',
    'impressions': '564',
    'content': 'quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah.'
  }, 
  {
    'url':'www.yahoo.com',
    'articleName': "Neat keyboard colors",
    'articleCategory': "Technology",
    'imageSource': 'http://static4.depositphotos.com/1006150/343/v/950/depositphotos_3439866-Pink-keyboard.jpg',
    'impressions': '-6000',
    'content': 'quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah.'
  },
  {
    'articleName': "Johnny's favorite foods",
    'articleCategory': "Food",
    'imageSource': 'http://www.drserenamurray.com/wp-content/uploads/2013/02/1bacon0929.jpg',
    'impressions': '57',
    'content': 'quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah.'
  }],
  }
  return testData2
}

App.getSource3Data = function (){
  var testData3 = {
  'sourceTitle': 'Fake Source 3',
  'article': [
    {
    'articleName': "Another article",
    'articleCategory': "Techno",
    'imageSource': 'http://www.robertwmills.com/wp-content/uploads/2016/03/healthcare-technology-8-04-2015.jpg',
    'impressions': '9982',
    'content': 'quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah.'
  }, 
  {
    'articleName': "Article number 25",
    'articleCategory': "Stocks",
    'imageSource': 'http://www.wolfexperience.com/wp-content/uploads/2016/01/social-media.jpg',
    'impressions': '564',
    'content': 'quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah.'
  }, 
  {
    'articleName': "Best article ever",
    'articleCategory': "Money",
    'imageSource': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwcPVH5sjR37N0RCMJ0wKSVI-iBaFb7aYcibU2333u38KMRApv',
    'impressions': '-6000',
    'content': 'quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah.'
  },
  {
    'articleName': "Your mom's article",
    'articleCategory': "Your Mom",
    'imageSource': 'https://appliedtech.iit.edu/sites/sat/files/field_uploads/hero/right/itm_greatcareers_image.jpg',
    'impressions': '57',
    'content': 'quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah. quick brown fox blah blah blah blah. quick brown fox blah blah blah blah.\
    quick brown fox blah blah blah blah.'
  }],
  }
  return testData3
}

App.compileTemplate = function(dataObject, $template) {
  var source = $template.html();
  var template = Handlebars.compile(source);
  var compiledTemplate = template(dataObject);
  return compiledTemplate
}

App.displayPreview = function($articleContainer) {
  var articleTitle = $articleContainer.find('.articleContent h3').val();
  $('#popUp .container h1').html(articleTitle);
  //while (!data) {
  $('#popUp').removeClass('hidden');
  //}
  $('.closePopUp').on('click', function () {
    $('#popUp').addClass('hidden');
  })
}

App.displaySource = function($sourceLink, sourceData) {
  var sourceTitle = sourceData['sourceTitle'];
  var $sourceContainer = $('header li a span');
  var $main = $('#main');
  $sourceContainer.html(sourceTitle);
  $main.children().hide();
  $main.append(App.compileTemplate(sourceData, $('#sourcesTemplate')));
  //JOHNNY THINK ABOUT THIS -- data is getting reloaded and appended every time you switch sources.
};

$(function() {
  var $sourceTitle = $('ul li span');
  var $source1Link = $('ul li ul li:nth-child(1)');
  var $source2Link = $('ul li ul li:nth-child(2)');
  var $source3Link = $('ul li ul li:nth-child(3)');
  App.source1Data = App.getSource1Data();
  App.displaySource($source1Link, App.source1Data);
  $source1Link.on('click', function(){
    App.displaySource($(this), App.source1Data);
  });

  $source2Link.on('click', function(){
    if(!App.source2Data){
      App.source2Data = App.getSource2Data();
    }
    App.displaySource($(this), App.source2Data);
  });

  $source3Link.on('click', function(){
    if(!App.source3Data){
      App.source3Data = App.getSource3Data();
    }
    App.displaySource($(this), App.source3Data);
  });

  $('.article').on('click', function() {
    App.displayPreview($(this));
  });

})





//JSONp: <script src="microsoft.com/data.js?callback="></script>
//handlebars step -- turn repeated "feed" html into handlebars template
/*
Article sources:
- Reddit
- NY Times
- The Ringer (?)
*/

/*
Presentation notes:
-Tech hurdle 1: figuring out how to generically apply 'show preview' functionality to a given article, without loading all 
article data on page load.
*/