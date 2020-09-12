# AdmitKard
it is a question inserting and searcing technique
Video link :
https://drive.google.com/file/d/1FfoDuP_-kKv9-M_-cmfkCcOlHUJT76e7/view?usp=sharing

Backend:

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

FrontEnd:
so basically it is used to connect with rest-ful api and how it works
we have two component one is question which use to represent question totally like it has query topics etc
other component is app so it use to basically handle all operations like search insert
1.search
    whenever user used to insert value and serachBy in insert form it use to go to a function there we check validation and then we use to fetch
    an api request after the request is come we are going to setState and pass it as props to question tag
2.insert
    when we want to insert we go insert tab there we have filed of query we fill it we have filed of tags where we can select multiple
    tags and topic so we are not entering but selectiong so to maintain enum after this we again to a function on submit the form 
    there we extract all data validate and send an api post request
