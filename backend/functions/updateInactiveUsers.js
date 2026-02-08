const functions = require('firebase-functions');
const admin = require('firebase-admin');
 
admin.initializeApp();
 
exports.updateInactiveUsers = functions.pubsub.schedule('every 24 hours').onRun(async (context) => {
    const threshold = Date.now() - 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
    const inactiveUsers = await admin.firestore().collection('users')
        .where('lastActive', '<', threshold)
        .get();
 
    inactiveUsers.forEach(async (user) => {
        // Perform actions for inactive users, e.g., disable account, send notification
        console.log(`User ${user.id} is inactive.`);
        // Example: await admin.auth().updateUser(user.id, { disabled: true });
    });

    return null;
});
