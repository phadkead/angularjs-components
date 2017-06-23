

/*The main different is that Components are accountable only for their own View and Data; 
this means that, it is not possible to modify any data or DOM outside their own scope. 
Normally, in the world of Angular we can access anda modify data everywhere using scope 
inheritance and watches, as you might guess, this is similar to the isolate scope in directives. 
This also means we cannot access to the two-way-bindings { foo : “=”}, 
to synchronise a parent scope property with the inner of scope like in directives*/
//components already create a isolate scope into a new component.



// 1. basic structure
	angular
	  .module('myApp',[])
	  .component('helloWorld', {
	  	template: '<span>Hello Custom Componenets!</span>'
	  });

//2. Displaying controller value. Automatically binds to $ctrl
(function() {
	'use strict';
	angular
	  .module('myApp')
	  .component('greetUser', {
	  	controller: NameController,
	  	template: 'Hello, {{$ctrl.name}}'
	  });
	function NameController() {		
		this.name = 'from controller';
	}
})();

//3. binding - two way =, one way < which means component to controller binding doesn't happen
(function() {
	'use strict';
	angular
	  .module('myApp')
	  .component('twoWayBinding', {

	  	controller: BindController,
	  	template: `
	  		<div>
	  			<p> Object: {{ $ctrl.obj }} </p>
	  			<p> Data: {{ $ctrl.data }} </p>
	  		
	  			<a href="" ng-click ="$ctrl.updateValues();"> 
	  				Change Values 
	  			</a>
			</div>
	  	`,
	  	bindings:{ 
	  		obj : '=' ,
	  		data : '='
	  	}
	  });

	function BindController() {
		console.log('reached1');
		this.updateValues = function(){		
			this.data = 10;
			this.obj = 1;
		};
	}
})();


//5. 
(function() {
	'use strict';

	angular
	  .module('myApp')
	  .component('otherEvents', {
	  	controller: otherEventsController,
	  	template: `{{$ctrl.greeting}}`,
	  	 bindings: {
    		name: '<'
  		 }
	  });	

	function otherEventsController() {
	    this.$onChanges = function (obj) {
		    var pre;	
		    if(!obj.name.previousValue){
		    	pre = ''
		    }else{
		    	pre = obj.name.previousValue;
		    }

		    if (obj.name.isFirstChange()) {
    			console.log(obj.name)
    			pre = 'first time change'
  			}

		    if (obj.name && this.name) {
		      var prefix = 'your previous name was ';	      
		      //(obj.name.currentValue.toLowerCase() === 'thomas') ?
		       // prefix = 'Howdy ' : prefix = 'Hello ';
		      this.greeting = prefix + pre + 'and now it is ' + this.name;      
		    }	       
		    // if the name is undefined clear greeting	       
		    if(!this.name) {
		      this.greeting = ''
		    }	     
	  	};

	  	this.$isFirstChange = function(){
	  		this.greeting = 'first change'
	  	}; 

	}
})();





























