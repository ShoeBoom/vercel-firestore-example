import { Firestore } from "@google-cloud/firestore";

var settings: FirebaseFirestore.Settings = {
	projectId: process.env.PROJECT_ID,
};

if (process.env.NODE_ENV === "production") {
	settings.credentials = JSON.parse(
		Buffer.from(process.env.GCLOUD_CREDENTIALS, "base64").toString()
	);
}

export const firestore = new Firestore(settings);