//4. Lifecycle hooks and ^require property (guarenteed to be available after $onInit)
(function() {
	'use strict';

	angular
	  .module('app')
	  .component('tabs', {
	  	controller: TabsController,
	  	template: `
	  		<div class="tabs">
	      		<ul >
	        		<li ng-repeat="tab in $ctrl.tabs">
	          			<a href=""  ng-bind="tab.label" ng-click="$ctrl.selectTab($index);"></a>
	        		</li>
	      		</ul>
	      		<div  ng-transclude></div>
    		</div>
	  	`,
	  	bindings:{ 
	  		selected : '@'
	  	},
	  	transclude : true

	  });

	function TabsController() {
		this.$onInit = function () {
	    	this.tabs = [];
	    };
	    this.addTab = function addTab(tab) {
	      this.tabs.push(tab);
	    };
	    this.selectTab = function selectTab(index) {
	      for (var i = 0; i < this.tabs.length; i++) {
	        this.tabs[i].selected = false;
	      }
	      this.tabs[index].selected = true;
	    };
	    //Called after this controller's element and its children have been linked
	    this.$postLink = function () {
	    	this.selectTab(this.selected);
	     	console.log(this.selected)
	    };		
	}
})();


(function() {
	'use strict';

	angular
	  .module('app')
	  .component('tab', {
	  	controller: TabController,
	  	template: `
	  		<div ng-if="$ctrl.tab.selected">
      			<div ng-transclude></div>
    		</div>
	  	`,
	  	bindings:{ 
	  		label : '@'
	  	},
  		require: {
  			// optionally, can say ^^. It looks for TabsController in parent scope, not local scope as we have not specified ^
  			tabs: '^^tabs'   
  		},
	  	transclude : true

	  });

	function TabController() {
		this.$onInit = function () {
    	this.tab = {
       	 	label: this.label,
        	selected: false
      	};
      	this.tabs.addTab(this.tab);
    };	
	}
})();






