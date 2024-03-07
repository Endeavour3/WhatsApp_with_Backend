import moment from "moment";
import { setMessages } from "../../../store/messagesSlice";

export const openWhatsAppDesktop = () => {
    const microsoftStoreLink = 'ms-windows-store://pdp/?productid=9NKSQGP7F2NH&ocid=pdpshare';
    window.open(microsoftStoreLink, '_blank');
};


export const generateMessage = (text, senderId, contactId) => {
    return (dispatch, getState) => {
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