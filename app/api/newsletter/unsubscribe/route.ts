import { NextRequest, NextResponse } from 'next/server';
import prismadb from '@/lib/db';

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 });
  }

  try {
    const newsletter = await prismadb.newsletter.findUnique({
      where: {
        email,
      },
    });

    if (!newsletter) {
      return NextResponse.json({ message: 'Email not found in the newsletter subscription' }, { status: 404 });
    }

    await prismadb.newsletter.delete({
      where: {
        email,
      },
    });

    return NextResponse.json({ message: 'Successfully unsubscribed from the newsletter' });
  } catch (error) {
    console.error('Error unsubscribing from the newsletter:', error);
    return NextResponse.json({ message: 'An error occurred while unsubscribing from the newsletter' }, { status: 500 });
  }
}