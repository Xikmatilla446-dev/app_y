import { NextResponse } from 'next/server';
import axios from "axios";

export async function GET() {
  return NextResponse.json({ hello: 'Next.js' });
}



export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});