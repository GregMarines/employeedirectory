/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		
		// ///////////////////// start hack ////////////////////////////////// //
			var theElement = document.getElementById('1');

			//theElement.addEventListener("mouseup", tapOrClick, false);
			theElement.addEventListener("touchstart", tapOrClick, false);

			function tapOrClick(event) {
				//handle tap or click.

				if(event.target.className == 'emp'){
					

					
			slidePageFrom(page1, 'right');
			gogetdetails(event.target.id);
			return false;

				}
				if(event.target.className == 'detail'){
					slidePageFrom(homePage, 'left');
				}	
					 
				return false;
			};

			var homePage = document.getElementById("homePage"),
				page1 = document.getElementById("p1"),
				currentPage = homePage;

				function slidePageFrom(page, from) {
					// Position the page at the starting position of the animation
					page.className = "page " + from;
					// Position the new page and the current page at the ending position of their animation with a transition class indicating the duration of the animation
					page.className ="page transition center";
					currentPage.className = "page transition " + (from === "left" ? "right" : "left");
					currentPage = page;

				};
				
				function gogetdetails(id){

				alert('user id: ' + id );

				  
				};		
	    // ////////////////////// end hack /////////////////////////////////// //
		
		
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        alert('Received Event: ' + id);
    }
};
