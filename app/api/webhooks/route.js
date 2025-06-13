import { DBConnect } from '@/lib/DBConnect'
import User from '@/Models/User.model'
import { verifyWebhook } from '@clerk/nextjs/webhooks'

export async function POST(req) {
  try {
    const evt = await verifyWebhook(req)

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data
    const eventType = evt.type
        if (evt.type === 'user.created') {
        // console.log('userId:', evt.data)
        try{
            DBConnect();
            let lastName;
            if (evt.data.last_name===null) lastName=' ';
            else lastName = evt.data.last_name;
            await User.create({
                    clerkId:evt.data.id,
                    name:evt.data.first_name+lastName,
                    email: evt.data.email_addresses.email_address,
            })
            console.log("User created with Email Address: "+evt.data.email_addresses.email_address);
        }catch(err){
            console.log(err.message);
        }
        }

    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}