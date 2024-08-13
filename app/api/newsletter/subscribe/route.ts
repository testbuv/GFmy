import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 });
  }

  try {
    await prisma.newsletter.create({
      data: {
        email,
      },
    });
    return NextResponse.json({ message: 'Successfully subscribed to the newsletter' });
  } catch (error) {
    console.error('Error subscribing to the newsletter:', error);
    return NextResponse.json({ message: 'An error occurred while subscribing to the newsletter' }, { status: 500 });
  }
}