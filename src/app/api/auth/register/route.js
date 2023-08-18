import { NextResponse } from 'next/server';
import {connectionDB} from '@/lib/dbConnection'
import User from '@/model/userSchema';
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, emailVerified, image } = body;

    if (!name || !email) {
      return new NextResponse('Missing Fields', { status: 400 });
    }
     connectionDB()
     const emailUser = await User.findOne({ email: email });
     if (emailUser) {
      return NextResponse.json({ msg : "Email Already Exists" });
    }
    const newUser = new User(body)
    await newUser.save()
    return NextResponse.json({ newUser });
  } catch (error) {
    console.error('Error:', error);
    return new NextResponse('Error', { status: 500 });
  }
}