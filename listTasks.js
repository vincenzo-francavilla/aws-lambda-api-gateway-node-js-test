const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region: 'eu-central-1'});
exports.handler = async (event, context, callback) => {
    await readTasks().then(data => {
        let response = {
            statusCode: 200,
            body: JSON.stringify(data.Items),
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        };

        callback(null, response);

    }).catch(error => {
        console.log(error);
        callback(error);
    });
};

function readTasks() {
    const params = {
        TableName: 'tasks',
        Limit: 100
    }
    return ddb.scan(params).promise();
}
