module.exports = async function (context, req) {
    context.log('Adding a task to the planner');

    const {v4: uuidv4}=require('uuid');

    
    const tasks = [{
        "id": uuidv4(),
        "description": "Work",
        "status": "In progress",
        "dueDate": 156464645646,
        "responsible": {
            "name": "Diego Chinchilla",
            "email": "diego@gmail.com"
        }, 
    },
    {
        "id": uuidv4(),
        "description": "Play",
        "responsible": {
            "name": "Diego Chinchilla",
            "email": "diego@gmail.com"
        },
        "status": "ready",
        "dueDate": 156464645648
    },
    {
        "id": uuidv4(),
        "description": "College",
        "responsible": {
            "name": "Diego Chinchilla",
            "email": "diego@gmail.com"
        },
        "status": "Almost",
        "dueDate": 156464645648}];
        
    const responseMessage = tasks    
    context.res = {
        status: 201,
        body: responseMessage
    };
}