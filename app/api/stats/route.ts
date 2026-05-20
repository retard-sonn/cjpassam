import { NextResponse } from 'next/server';

// In-memory store for live stats (resets on server restart)
let liveStats = {
  visitors: 0,
  members: 0
};

export async function GET() {
  return NextResponse.json(liveStats);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (body.action === 'visit') {
      liveStats.visitors += 1;
    } else if (body.action === 'register') {
      liveStats.members += 1;
    }
    return NextResponse.json(liveStats);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
