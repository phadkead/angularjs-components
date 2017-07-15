


This application is an angularjs application which uses MongoDB as database and Spring Boot as server.

#####Technologies Used

1. AngularJS with component router (https://docs.angularjs.org/guide/component-router)
2. Below Angular JS Libraries are used for rich UI:
        AngularJS Material: https://material.angularjs.org/latest/
        Data Tables : https://material.io/guidelines/components/data-tables.html
3. Spring Boot
4. MongoDB as database
       
       Insert following data to mongodb
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
