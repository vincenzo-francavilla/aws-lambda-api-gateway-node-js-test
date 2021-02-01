const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region: 'eu-central-1'});

exports.handler = async (event, context, callback) => {
    const {taskId} = event.pathParameters;
    await getTask(taskId).then(data => {
        let responseBody = {
            timeStamp: Date.now(),
            items: data.Items
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
        callback(error);
    });

};

function getTask(taskId) {
    const params = {
        TableName: 'tasks',
        Item: {
            'taskId': taskId
        }
    }
    return ddb.scan(params).promise();
}