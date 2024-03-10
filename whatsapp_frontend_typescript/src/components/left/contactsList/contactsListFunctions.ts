import { Contact } from "../../../store/contacts/contactsSlice";
import { FilterButtons } from "../../../store/filters/filtersSlice";
import { Message } from "../../../store/messages/messagesSlice";

export function getContacts(contacts:Contact[], searchText:string, filterButtons:FilterButtons | any) {

    let contactsList = [...contacts]

    if (Object.values(filterButtons).includes(true)) {
        const selectedButton = Object.keys(filterButtons).find(
            (button) => filterButtons[button]
        );

        switch (selectedButton) {
            case 'buttonAll':
                break;
            // case 'buttonUnread':
            //     contactsList = contactsList.filter((contact) => contact.contactUnreadMessages);
            //     break;
            case 'buttonContacts':
                contactsList.sort((a, b) => (a.contactId).toString().localeCompare((b.contactId).toString()));
                break;
            case 'buttonGroups':
                break;
            default:
                break;
        }
    }

    if (searchText) {
        contactsList = contactsList.filter((contact) =>
            contact.contactName.toLowerCase().includes(searchText.toLowerCase())
        );
    }

    return contactsList
}

export function truncateText(text:string) {
    const newText = text.length > 35 ? `${text.substring(0, 35)}...` : text;
    return newText
}

export function getLastMessageText(contactId:number, messages:Message[]) {
    if (messages.length > 0) {
        const filteredMessages = messages.filter(message => message.send_from === contactId);

        if (filteredMessages.length > 0) {
            const sortedMessages = filteredMessages.sort((a, b) => b.id - a.id);

            const lastMessageText = sortedMessages[0].message_content;

            return lastMessageText;
        }
    }

    return "";
}
