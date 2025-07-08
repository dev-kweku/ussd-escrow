import axios from "axios"


export async function sendSMS(to:string,content:string){
    const data={
        from:'EscrowGhana',
        to,
        content,
    }

    try{
        const response=await axios.post(
            'https://sms.hubtel.com/v1/message/send',
            data,
            {
                headers:{
                    Authorization:`Basic ${Buffer.from(process.env.HUBTEL_USERNAME + ':' + process.env.HUBTEL_APIKEY).toString('base64')}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data;

    }catch(error){
        console.log('SMS error :',error)
        return null;

    }
}