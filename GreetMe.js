(function (global,$) {
  
    'use strict';

    var GreetMe = function (fname, lname, lang) {         // passing to constructor
        return new GreetMe.init(fname, lname, lang); // user need not to invoke 'new' keyword
    }

    GreetMe.init = function(fname, lname, lang) {         // constructor

        var self = this;                  // more secure practice
        self.fname = fname || "";         // setting defaults
        self.lname = lname || "";
        self.lang = lang || "en";
        self.validate();                  // validating object language
    }

    
    GreetMe.prototype = {                                 // defining a prototype
        
        fullName: function () {
            return this.fname + " " + this.lname;
        },
        
        validate: function () {                          // validating entered language
            if (supportedLangs.indexOf(this.lang) === -1) {
                throw "Not supported language";
            }
            else{
                return true;
            } 
        },

        greetings: function () {
            return greetings[this.lang] + " " + this.fname + "!";
        },

        formalGreetings: function () {
            return formalGreetings[this.lang] + ", " + this.fullName();
        },

        morning: function () {
            return mornings[this.lang] + " " + this.fname + "!";
        },

        afternoon: function () {
            return afternoons[this.lang] + " " + this.fname + "!";
        },

        night: function () {
            return nights[this.lang] + " " + this.fname + "!";
        },

        farewell: function () {
            return farewells[this.lang] + " " + this.fname + "!";
        },


        randomHowGreet: function () {       // supports english language only
            var questIndex;
            if (!Math) {
                return "Hey there!" ;
            } 
            questIndex = Math.floor(Math.random() * howGreets.length);
            return howGreets[questIndex];
        },

        greet: function (formal) {
            var msg;

            if (formal) {
                msg = this.formalGreetings();
            }
            else {
                msg = this.greetings();
            }

            if (console) {
                console.log(msg);
            }

            return this;                    // supporting method chaining
        },


        log: function () {
            if (console) {
                console.log(this.fullName() + " logged in at " + this.getCurrentDateTime());
            }
            return this;                    // supporting method chaining
        },

        setLang: function (newLang) {
            this.lang = newLang || this.lang;
            this.validate();
            return this;                     // supporting method chaining
        },

        getCurrentDateTime: function () {
            var today = new Date();
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + ' ' + time;
            return dateTime;
        },

        HTMLGreeting: function (selector, formal) {
            if (!$){
                throw 'jQuery not loaded';
            }
            if (!selector){
                throw 'Missing jQuery selector';
            }

            var msg;
            if(formal){
                msg = this.formalGreetings();
            }
            else{
                msg = this.greetings();
            }
            $(selector).html(msg);
            return this;	                 // supporting method chaining
        }
    };                               

    GreetMe.init.prototype = GreetMe.prototype;            // setting the prototype to GreetMe constructor 

    var supportedLangs = ['en','ar','fr','de'];

    var greetings = {
        en: 'Hi',
        ar: 'Ahlan',
        fr: 'Coucou',
        de: 'Hi'
    };

    var formalGreetings = {
        en: 'Hello',
        ar: 'Marhaba',
        fr: 'Salut',
        de: 'Hallo'
    };

    var mornings = {
        en: 'Good morning',
        ar: 'Sabahul khayr',
        fr: 'Bonjour',
        de: 'Guten Morgen'
    }
    
    var afternoons = {
        en: 'Good afternoon',
        ar: "Masa'il khayr",
        fr: 'Bonsoir',
        de: 'Guten Abend'
    }

    var nights = {
        en: 'Good night',
        ar: "Tiṣbaḥ 'ala khayr",
        fr: 'Bonne nuit',
        de: 'Guten Nacht'
    }

    var farewells = {
        en: 'Good bye',
        ar: "Ma'al salama",
        fr: 'Au revoir',
        de: 'Tschüss'
    }

    var howGreets = ["How's life treating you?", "What's new today?", "What's up?",
        "What are you up to today?", "Watcha doin'?", "What's sizzlin'?",
        "What's cookin'?", "What's crackin'?", "What's poppin'?",
        "What's up buttercup?", "What's cookin'?","Good lookin'?", "Hey there!"
    ];


    global.GreetMe = global.G$ = GreetMe ;                 // Exposing our library to the global object

})(window,jQuery);