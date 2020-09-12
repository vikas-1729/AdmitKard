so it is backend part how it works let's understand
so basically we have two opeartiin insert and select
i used to set a file structure after
1. database
i used mongoDB db
Collection :two Collection
    question:{
        query,tags(array),topics
    }
    tag:{
        tag,question
    }
basically i make tag collection because i fill that lot of time we are going to use 
tag to find question and tag is an array 
so for efficiency i used tag so that we at run time use .populate and get question at the time

opeartion 
Search:
in search basically we basically first we use query or tag or topic to search and then we use that model to extract only 
question from that and return in json
Insert:
in insert we use same method but dirst we check to avoid duplicate entry and all good we make an entry


