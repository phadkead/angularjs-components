
# AngularJS with Spring MVC

This application is an angularjs application which uses MongoDB as database.

![Tennis gif](tennis.gif "Demo of application")
## Technologies Used

1. AngularJS with component router (https://docs.angularjs.org/guide/component-router)
2. Below Angular JS Libraries are used for rich UI:
        AngularJS Material: https://material.angularjs.org/latest/
        Data Tables : https://material.io/guidelines/components/data-tables.html
3. Test spec with Jasmine and Karma        
4. Spring Boot with REST
5. MongoDB as database

## To run locally
- Clone project and Startup application with mvn spring-boot:run 

  Application should run at http://localhost:8080/index.html
- Setup [Karma](https://karma-runner.github.io/0.13/index.html)
- Start MongoDB on localhost:27017
- Insert following data to mongodb
       
        db.player.insert(
        [{
                "_id" : ObjectId("59526236fdcd520dd8306b78"),
                "_class" : "com.model.Player",
                "name" : "Novak Djokovic",
                "tournaments" : [
                        "Wimbeldon",
                        "Australian Open"
                ],
                "noOfMatchesPLayed" : 200,
                "upVotes" : 200
        },
        {
                "_id" : ObjectId("59526368fdcd5202dcf3dce7"),
                "_class" : "com.model.Player",
                "name" : "Leander Peas",
                "tournaments" : [
                        "Wimbeldon",
                        "Australian Open"
                ],
                "noOfMatchesPLayed" : 201,
                "upVotes" : 201
        },
        {
                "_id" : ObjectId("59526368fdcd5202dcf3dce8"),
                "_class" : "com.model.Player",
                "name" : "Mahesh Bhupati",
                "tournaments" : [
                        "Wimbeldon",
                        "Australian Open"
                ],
                "noOfMatchesPLayed" : 202,
                "upVotes" : 202
        },
        {
                "_id" : ObjectId("59526368fdcd5202dcf3dce9"),
                "_class" : "com.model.Player",
                "name" : "Venus Williams",
                "tournaments" : [
                        "Wimbeldon",
                        "Australian Open"
                ],
                "noOfMatchesPLayed" : 202,
                "upVotes" : 202
        },
        {
                "_id" : ObjectId("59526368fdcd5202dcf3dcea"),
                "_class" : "com.model.Player",
                "name" : "Serena Williams",
                "tournaments" : [
                        "Wimbeldon",
                        "Australian Open"
                ],
                "noOfMatchesPLayed" : 202,
                "upVotes" : 202
        },
        {
                "_id" : ObjectId("59526368fdcd5202dcf3dceb"),
                "_class" : "com.model.Player",
                "name" : "Maria Sharapova",
                "tournaments" : [
                        "Wimbeldon"
                ],
                "noOfMatchesPLayed" : 202,
                "upVotes" : 202
        }])
