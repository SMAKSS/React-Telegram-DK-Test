import ChatStore from '../Stores/ChatStore';
import { orderCompare } from './Common';

export function getArchiveTitle() {
    const archive = ChatStore.chatList.get('chatListArchive');
    const chats = [];
    const chatsOrder = [];
    console.log('[ar] getArchiveTitle', archive);
    if (archive) {
        for (const chatId of archive.keys()) {
            const chat = ChatStore.get(chatId);
            if (chat) {
                if (chat.order !== '0') chats.push(chat);
                chatsOrder.push({ order: chat.order, id: chat.id, title: chat.title });
            }
        }
    }

    const orderedChats = chats.sort((a, b) => orderCompare(b.order, a.order));
    console.log('[update] getArchiveTitle', orderedChats.map(x => x.title).join(', '), chatsOrder);

    return orderedChats.map(x => x.title).join(', ');
}
