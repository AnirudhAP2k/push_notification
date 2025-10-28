import admin from "firebase-admin";
import fs from "fs";

const serviceAccount = JSON.parse(fs.readFileSync("./serviceAccountKey.json"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const sendNotification = async (token, payload) => {
    console.log(serviceAccount,admin,token,payload);
  try {
    const response = await admin.messaging().send({
      token,
      notification: payload,
    });
    return response;
  } catch (err) {
    console.error("Error sending notification:", err);
  }
};
