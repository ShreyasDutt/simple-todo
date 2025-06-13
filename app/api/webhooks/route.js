import { DBConnect } from '@/lib/DBConnect'
import User from '@/Models/User.model'
import { verifyWebhook } from '@clerk/nextjs/webhooks'

export async function POST(req) {
  console.log('Webhook received - Starting processing')
  
  try {
    const evt = await verifyWebhook(req)
    console.log('Webhook verified successfully')
    console.log('Event type:', evt.type)
    console.log('Event data:', JSON.stringify(evt.data, null, 2))

    const { id } = evt.data
    const eventType = evt.type
    
    if (evt.type === 'user.created') {
      console.log('Processing user.created event')
      console.log('User ID:', evt.data.id)
      
      try {
        await DBConnect();
        console.log('Database connected successfully')
        
        const lastName = evt.data.last_name || '';
        const fullName = evt.data.first_name + (lastName ? ' ' + lastName : '');
        
        // Check if user already exists
        const existingUser = await User.findOne({ clerkId: evt.data.id });
        if (existingUser) {
          console.log('User already exists:', existingUser.email);
          return new Response('User already exists', { status: 200 });
        }
        
        // Create new user
        const newUser = await User.create({
          clerkId: evt.data.id,
          name: fullName,
          email: evt.data.email_addresses[0]?.email_address,
        });
        
        console.log("User created successfully:");
        console.log("- ID:", newUser._id);
        console.log("- Name:", newUser.name);
        console.log("- Email:", newUser.email);
        console.log("- Clerk ID:", newUser.clerkId);
        
      } catch (dbError) {
        console.error('Database error:', dbError);
        console.error('Error details:', dbError.message);
        console.error('Stack trace:', dbError.stack);
        return new Response('Database error', { status: 500 });
      }
    } else {
      console.log('Event type not handled:', evt.type);
    }

    return new Response('Webhook processed successfully', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    console.error('Error details:', err.message)
    console.error('Stack trace:', err.stack)
    return new Response('Error verifying webhook', { status: 400 })
  }
}