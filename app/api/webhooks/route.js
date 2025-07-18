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
        try {
            await DBConnect();
            console.log("DB Connected");

            console.log("Creating user ...")
            let lastName = evt.data.last_name || ' ';
            const email = evt.data.email_addresses[0]?.email_address;
            console.log("Creating user with Data : "+email);
            const FoundUser = await User.findOne({clerkId:evt.data.id});
            console.log("Checking if user Exists")
            if(FoundUser) return console.log("User already exists");
            console.log("Creating user with email:", email);

            await User.create({
            clerkId: evt.data.id,
            name: evt.data.first_name + lastName,
            email,
            });
            console.log("User successfully created");
        } catch (err) {
            console.error("Error during user creation:", err);
        }
    }
    else if(evt.type === 'user.deleted'){
        try{
            await DBConnect();
            const FoundUser = await User.findOneAndDelete({clerkId: evt.data.id});
            if(!FoundUser) return console.log("User doesn't Exist");    
            console.log("User deleted with Email: "+FoundUser.email);
        }catch(err){
            console.log(err)
        }
    }else {
    console.log("Unhandled event type:", evt.type);
    }

    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}