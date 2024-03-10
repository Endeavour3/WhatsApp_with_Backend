import moment from "moment";
import { setMessages } from "../../../store/messages/messagesSlice";
import { AppDispatch } from "../../../store/store";

export const openWhatsAppDesktop = () => {
    const microsoftStoreLink = 'ms-windows-store://pdp/?productid=9NKSQGP7F2NH&ocid=pdpshare';
    window.open(microsoftStoreLink, '_blank');
};



export const generateMessage = (text:string, senderId:number, contactId:number) => {
    return (dispatch:AppDispatch, getState:Function) => {
        const messages = getState().messages.messages
        dispatch(setMessages({
            id: messages.length < 1 ? 1 : Number(messages[messages.length - 1].messageId) + 1,
            message_content: text,
            send_from: senderId,
            send_to: contactId,
            created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
            delivered_at: null,
            read_at: null
        }))
        // dispatch(stateUpdated(text, userMobileNo))

        // for database
        // "message_content": text,
        // "send_from": senderId,
        // "send_to": contactId,
        // "created_at": moment().format('YYYY-MM-DD HH:mm:ss'),
        // created_at: {
        //     date: moment().format('YYYY-MM-DD'),
        //     time: moment().format('HH:mm')
        // },
    }
}

// https://www.bezkoder.com/upload-image-react-typescript/