const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region: 'eu-central-1'});

exports.handler = async (event, context, callback) => {
    const {taskId} = event.pathParameters;

    await deleteTask(taskId).then(data => {
        console.log(data);
        let responseData = {
            taskId: taskId,
            actionDelete: true
        };
        const response = {
            statusCode: 200,
            body: JSON.stringify(responseData),
        };
        callback(null, response);

    }).catch(error => {
        console.log(error);
    });

};


function deleteTask(taskId) {
    const params = {
        TableName: 'tasks',
        Key: {
            "taskId": taskId
        }
    };
    return ddb.delete(params).promise();
}