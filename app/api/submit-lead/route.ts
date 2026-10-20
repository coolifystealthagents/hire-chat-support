import { handleLead } from './handler';

export async function POST(request: Request) { return handleLead(request); }
