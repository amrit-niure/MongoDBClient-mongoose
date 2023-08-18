
// userController.js
import clientPromise from "@/lib/database"; 

export async function createUser(name, email, emailVerified, image) {
  try {
    const client = await clientPromise;
    const db = client.db();

    const userCollection = db.collection('users');
    const existingUser = await userCollection.findOne({ email });

    if (existingUser) {
      return('Email already exists');
    }
    const newUser = {
      name,
      email,
      emailVerified,
      image,
    };

    const result = await userCollection.insertOne(newUser);
    console.log('User saved:', result.insertedId);

    return result.insertedId;
  } catch (error) {
    console.error('Error saving user:', error);
    throw error;
  }
}

