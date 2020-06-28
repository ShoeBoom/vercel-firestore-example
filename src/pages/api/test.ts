import { NextApiRequest, NextApiResponse } from "next";
import { Firestore } from "@google-cloud/firestore";

import {firestore} from '@utils/FirestoreInit'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	await firestore.collection("test").add({ test: 1 });
	res.status(200).json({ name: "John Doe" });
};
