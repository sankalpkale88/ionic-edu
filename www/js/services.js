angular.module('starter.services', ['ngResource'])

.factory('Session', function ($resource) {
    return $resource('http://localhost:5000/sessions/:sessionId');
})

/**
 * A simple example service that returns some data.
 */
.factory('topicService', function() {
  // Might use a resource here that returns a JSON array
  // Some fake testing;
	
  var mathsTopics = [
	{ id:0, title: 'Algebra', tutors :[{"name" : "J K Rowlings" , "stars" : "* * *" ,"photo":"1"},{"name" : "S K" , "stars" : "* * *" ,"photo":"2"},{"name" : "A K" ,"stars" : "* * * *","photo":"3"}]},
    { id:1,title: 'Geometry', tutors :[{"name" : "J K Rowlings" , "stars" : " * * * *","photo":"1"},{"name" : "S K" , "stars" : " * * * * " ,"photo":"2"},{"name" : "A K" , "stars" : "* * *" ,"photo":"3"}] },
    { id:2,title: 'Aritmetic',  tutors :[{"name" : "J K Rowlings" , "stars" :  "* * *" ,"photo":"1"},{"name" : "S K" , "stars" :  "* * *" ,"photo":"2"},{"name" : "A K" , "stars" :  "* * *" ,"photo":"3"}] },
    { id:3,title: 'Calculus',  tutors :[{"name" : "J K Rowlings" , "stars" :  "* * *" ,"photo":"1"},{"name" : "S K" , "stars" :  "* * *" ,"photo":"2"},{"name" : "A K" , "stars" : "* * *" ,"photo":"3"}]},
    { id:4,title: 'Differential Equations',  tutors :[{"name" : "J K Rowlings" , "stars" :  "* * *" ,"photo":"1"},{"name" : "S K" , "stars" :  "* * *" ,"photo":"2"},{"name" : "A K" , "stars" :  "* * *" ,"photo":"3"}] },
	];
	
  var scienceTopics = [
	{ id:0, title: 'Pyhsics', tutors :[{"name" : "J K Rowlings" , "stars" : "* * *" ,"photo":"1"},{"name" : "S K" , "stars" : "* * *" ,"photo":"2"},{"name" : "A K" ,"stars" : "* * * *","photo":"3"}]},
    { id:1,title: 'Chemistry', tutors :[{"name" : "J K Rowlings" , "stars" : " * * * *","photo":"1"},{"name" : "S K" , "stars" : " * * * * " ,"photo":"2"},{"name" : "A K" , "stars" : "* * *" ,"photo":"3"}] },
    { id:2,title: 'Biology',  tutors :[{"name" : "J K Rowlings" , "stars" :  "* * *" ,"photo":"1"},{"name" : "S K" , "stars" :  "* * *" ,"photo":"2"},{"name" : "A K" , "stars" :  "* * *" ,"photo":"3"}] },
    { id:3,title: 'Zoology',  tutors :[{"name" : "J K Rowlings" , "stars" :  "* * *" ,"photo":"1"},{"name" : "S K" , "stars" :  "* * *" ,"photo":"2"},{"name" : "A K" , "stars" : "* * *" ,"photo":"3"}]}
	];
	
 var EngineeringTopics = [
	{ id:0, title: 'Microprocessor', tutors :[{"name" : "J K Rowlings" , "stars" : "* * *" ,"photo":"1"},{"name" : "S K" , "stars" : "* * *" ,"photo":"2"},{"name" : "A K" ,"stars" : "* * * *","photo":"3"}]},
    { id:1,title: 'Compiler', tutors :[{"name" : "J K Rowlings" , "stars" : " * * * *","photo":"1"},{"name" : "S K" , "stars" : " * * * * " ,"photo":"2"},{"name" : "A K" , "stars" : "* * *" ,"photo":"3"}] },
    { id:2,title: 'DataStructure',  tutors :[{"name" : "J K Rowlings" , "stars" :  "* * *" ,"photo":"1"},{"name" : "S K" , "stars" :  "* * *" ,"photo":"2"},{"name" : "A K" , "stars" :  "* * *" ,"photo":"3"}] },
    { id:3,title: 'OperatingSystem',  tutors :[{"name" : "J K Rowlings" , "stars" :  "* * *" ,"photo":"1"},{"name" : "S K" , "stars" :  "* * *" ,"photo":"2"},{"name" : "A K" , "stars" : "* * *" ,"photo":"3"}]},
    { id:4,title: 'System Software',  tutors :[{"name" : "J K Rowlings" , "stars" :  "* * *" ,"photo":"1"},{"name" : "S K" , "stars" :  "* * *" ,"photo":"2"},{"name" : "A K" , "stars" :  "* * *" ,"photo":"3"}] },
	];
	
	 var MedicalTopics = [
	{ id:0, title: 'General Anatomy', tutors :[{"name" : "J K Rowlings" , "stars" : "* * *" ,"photo":"1"},{"name" : "S K" , "stars" : "* * *" ,"photo":"2"},{"name" : "A K" ,"stars" : "* * * *","photo":"3"}]},
    { id:1,title: 'Regional Anatomy', tutors :[{"name" : "J K Rowlings" , "stars" : " * * * *","photo":"1"},{"name" : "S K" , "stars" : " * * * * " ,"photo":"2"},{"name" : "A K" , "stars" : "* * *" ,"photo":"3"}] },
    { id:2,title: 'Abdomen',  tutors :[{"name" : "J K Rowlings" , "stars" :  "* * *" ,"photo":"1"},{"name" : "S K" , "stars" :  "* * *" ,"photo":"2"},{"name" : "A K" , "stars" :  "* * *" ,"photo":"3"}] },
    { id:3,title: 'Thorex',  tutors :[{"name" : "J K Rowlings" , "stars" :  "* * *" ,"photo":"1"},{"name" : "S K" , "stars" :  "* * *" ,"photo":"2"},{"name" : "A K" , "stars" : "* * *" ,"photo":"3"}]},
    { id:4,title: 'Spinal Cord',  tutors :[{"name" : "J K Rowlings" , "stars" :  "* * *" ,"photo":"1"},{"name" : "S K" , "stars" :  "* * *" ,"photo":"2"},{"name" : "A K" , "stars" :  "* * *" ,"photo":"3"}] },
	];
	
	
	 var ArtsTopics = [
	{ id:0, title: 'History', tutors :[{"name" : "J K Rowlings" , "stars" : "* * *" ,"photo":"1"},{"name" : "S K" , "stars" : "* * *" ,"photo":"2"},{"name" : "A K" ,"stars" : "* * * *","photo":"3"}]},
    { id:1,title: 'Geography', tutors :[{"name" : "J K Rowlings" , "stars" : " * * * *","photo":"1"},{"name" : "S K" , "stars" : " * * * * " ,"photo":"2"},{"name" : "A K" , "stars" : "* * *" ,"photo":"3"}] },
    { id:2,title: 'Political Science',  tutors :[{"name" : "J K Rowlings" , "stars" :  "* * *" ,"photo":"1"},{"name" : "S K" , "stars" :  "* * *" ,"photo":"2"},{"name" : "A K" , "stars" :  "* * *" ,"photo":"3"}] },
    { id:3,title: 'Sociology',  tutors :[{"name" : "J K Rowlings" , "stars" :  "* * *" ,"photo":"1"},{"name" : "S K" , "stars" :  "* * *" ,"photo":"2"},{"name" : "A K" , "stars" : "* * *" ,"photo":"3"}]},
    { id:4,title: 'Dance',  tutors :[{"name" : "J K Rowlings" , "stars" :  "* * *" ,"photo":"1"},{"name" : "S K" , "stars" :  "* * *" ,"photo":"2"},{"name" : "A K" , "stars" :  "* * *" ,"photo":"3"}] },
	];
	
	
	 var UPSCTopics = [
	{ id:0, title: 'Agriculture', tutors :[{"name" : "J K Rowlings" , "stars" : "* * *" ,"photo":"1"},{"name" : "S K" , "stars" : "* * *" ,"photo":"2"},{"name" : "A K" ,"stars" : "* * * *","photo":"3"}]},
    { id:1,title: 'Economics', tutors :[{"name" : "J K Rowlings" , "stars" : " * * * *","photo":"1"},{"name" : "S K" , "stars" : " * * * * " ,"photo":"2"},{"name" : "A K" , "stars" : "* * *" ,"photo":"3"}] },
    { id:2,title: 'Chemistry',  tutors :[{"name" : "J K Rowlings" , "stars" :  "* * *" ,"photo":"1"},{"name" : "S K" , "stars" :  "* * *" ,"photo":"2"},{"name" : "A K" , "stars" :  "* * *" ,"photo":"3"}] },
    { id:3,title: 'Civil Enginnering',  tutors :[{"name" : "J K Rowlings" , "stars" :  "* * *" ,"photo":"1"},{"name" : "S K" , "stars" :  "* * *" ,"photo":"2"},{"name" : "A K" , "stars" : "* * *" ,"photo":"3"}]},
    { id:4,title: 'Botany',  tutors :[{"name" : "J K Rowlings" , "stars" :  "* * *" ,"photo":"1"},{"name" : "S K" , "stars" :  "* * *" ,"photo":"2"},{"name" : "A K" , "stars" :  "* * *" ,"photo":"3"}] },
	];
	
  var topicLists = [
    { id:0, title: 'Maths', items : mathsTopics, show:false},
    { id:1,title: 'Science', items : scienceTopics, show : false},
    { id:2,title: 'Engineering',  items : EngineeringTopics , show : false},
    { id:3,title: 'Medical',  items : MedicalTopics ,show : false},
    { id:4,title: 'Arts', items : ArtsTopics, show : false },
    {id:5, title: 'UPSC',  items : UPSCTopics , show : false}
  ];
  
  

  
  


  return {
    all: function() {
   console.log(topicLists)
      return topicLists;
    },
    get: function(topicId, itemId) {
      // Simple index lookup
      return topicLists[topicId].items[itemId];
    }
  }
});