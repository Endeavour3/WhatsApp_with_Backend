export function getContacts(contacts, searchText, filterButtons) {

    let contactsList = [...contacts]

    if (Object.values(filterButtons).includes(true)) {
        const selectedButton = Object.keys(filterButtons).find(
            (button) => filterButtons[button]
        );

        switch (selectedButton) {
            case 'buttonAll':
                break;
            case 'buttonUnread':
                contactsList = contactsList.filter((contact) => contact.contactUnreadMessages);
                break;
            case 'buttonContacts':
                contactsList.sort((a, b) => a.contactId.localeCompare(b.contactId));
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

export function truncateText(text) {
    const newText = text.length > 35 ? `${text.substring(0, 35)}...` : text;
    return newText
}

export function getLastMessageText(contactId, messages) {
    if (messages.length > 0) {
        const filteredMessages = messages.filter(message => message.contactId === contactId);

        if (filteredMessages.length > 0) {
            const sortedMessages = filteredMessages.sort((a, b) => b.messageId - a.messageId);

            const lastMessageText = sortedMessages[0].messageText;

            return lastMessageText;
        }
    }

    return null;
}
