const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region: 'eu-central-1'});

exports.handler = async (event, context, callback) => {
    const requestId = context.awsRequestId;
    let postData = JSON.parse(event.body);

    await createTasks(requestId, postData).then(() => {
        let responseBody = {
            timeStamp: Date.now(),
            status: true
        };
        let response = {
            statusCode: 200,
            body: JSON.stringify(responseBody),
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        };

        callback(null, response);

    }).catch(error => {
        console.log(error);
    });
};

function createTasks(requestId, postData) {
    const params = {
        TableName: "tasks",
        Item: {
            taskId: requestId,
            createdAt: Date.now(),
            updatedAt: null,
            taskData: {
                taskName: postData.taskName,
                taskDescription: postData.taskDescription,
                taskPriority: postData.taskPriority,
            },
        }
    }
    return ddb.put(params).promise();
}